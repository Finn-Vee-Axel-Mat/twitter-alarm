const express = require("express");
const mongoose = require("mongoose");
const Alarm = mongoose.model("Alarm");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

router.use(requireAuth);

router.post("/create", async (req, res) => {
  try {
    const alarm = new Alarm({
      email: req.body.email,
      title: req.body.title,
      description: req.body.description,
      search: req.body.search,
      total: req.body.total,
      occurence: 0,
      date: req.body.date,
      lastUpdate: req.body.lastUpdate,
    });
    await alarm.save().then((data) => res.send(data));
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while creating the data.",
    });
  }
});

// get all alarms
router.post("/", async (req, res) => {
  const alarms = await Alarm.find({ email: req.body.email });
  res.send(alarms);
});

// get alarm by id info
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  Alarm.findById(id).then((data) => {
    if (!data) {
      res.status(404).send({ message: "Not found data with id " + id });
    } else {
      res.send(data);
    }
  });
});

// delete alarm
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  Alarm.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete data with id=${id}. Maybe data was not found.`,
        });
      } else {
        res.send({
          message: "Data was deleted successfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Cound not delete data with id=" + id,
      });
    });
});

// find alarm
router.post("/find", async (req, res) => {
  const alarm = await Alarm.find({
    email: req.body.email,
    title: { $regex: `${req.body.title}`, $options: "i" },
  });
  res.send(alarm);
});

module.exports = router;
