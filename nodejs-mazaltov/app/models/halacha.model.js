const mongoose = require("mongoose");

const Halach = mongoose.model(
  "Halach",
  new mongoose.Schema({
    entryByUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    subject: String,
    type: Number,
    content: String,
    status: Number
  }, { timestamps: true })
);

module.exports = Halach;
