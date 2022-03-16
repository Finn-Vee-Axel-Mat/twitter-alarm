const mongoose = require("mongoose");

const alarmSchema = new mongoose.Schema(
  {
    email: String,
    title: String,
    description: String,
    search: String,
    total: Number,
    occurence: Number,
    date: Date,
    lastUpdate: Date,
  },
  { timestamps: true }
);

mongoose.model("Alarm", alarmSchema);
