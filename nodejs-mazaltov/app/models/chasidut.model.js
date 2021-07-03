const mongoose = require("mongoose");

const Chasidut = mongoose.model(
  "Chasidut",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Chasidut;
