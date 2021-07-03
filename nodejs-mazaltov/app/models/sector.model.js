const mongoose = require("mongoose");

const Sector = mongoose.model(
  "Sector",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Sector;
