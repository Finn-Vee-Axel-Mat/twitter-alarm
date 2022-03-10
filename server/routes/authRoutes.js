const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");
const crypto = require("crypto");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    res.status(422).send({ error: "Email has been used" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(422).send("Must provide email and password");

  const user = await User.findOne({ email });
  if (!user) return res.status(422).send({ error: "Email not found" });

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(422).send({ error: "Email not found" });

  try {
    const resetToken = user.getResetPasswordToken();
    await user.save();

    try {
      res.status(200).send({ success: true, data: "Email Sent", resetToken });
    } catch (err) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return res.status(422).send({ error: "Email could not be sent" });
    }
  } catch (err) {
    return res.status(422).send({ error: "Error" });
  }
});

router.put("/reset-password/:resetToken", async (req, res) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user) return res.status(422).send({ error: "Invalid Token" });

  try {
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.status(200).send({
      success: true,
      data: "Password Updated Success",
      token,
    });
  } catch (err) {
    res.status(422).send({ error: "Error" });
  }
});

module.exports = router;
