const mongoose = require("mongoose");

const Contantus = mongoose.model(
  "Contantus",
  new mongoose.Schema({
    name: String,
    tell: String,
    email: String,
    message: String,
    status: Number,
    userId:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
  },
    { timestamps: true })
);

module.exports = Contantus;
