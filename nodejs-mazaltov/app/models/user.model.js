const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    tz: String,
    email: String,
    isActive: Boolean,
    bornDate: Date,
    gender: Number,
    status: Number,
    role:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    },
  },
    { timestamps: true })
);

module.exports = User;
