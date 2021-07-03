const mongoose = require("mongoose");

const City = mongoose.model(
  "City",
  new mongoose.Schema({
    cityName: String
  })
);

module.exports = City;
