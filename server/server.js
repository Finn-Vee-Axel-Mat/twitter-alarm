require("./models/User");
require("./models/Alarm");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const alarmRoutes = require("./routes/alarmRoutes");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");
const helmet = require("helmet");
const cors_proxy = require("cors-anywhere");

const app = express();

app.use(helmet()); // not work
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/alarms", alarmRoutes);

const PORT = 5000;
const mongoUri =
  "mongodb+srv://admin:DgF6BChK9Gbw92Uk@cluster0.6z61n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// Listen on a specific host via the HOST environment variable
const corsHost = "localhost";
// Listen on a specific port via the PORT environment variable
const corsPort = 4000;

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(corsPort, corsHost, function () {
    console.log("Running CORS Anywhere on " + corsHost + ":" + corsPort);
  });
