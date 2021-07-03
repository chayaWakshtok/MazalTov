const config = require("../config/auth.config");
const db = require("../models");
const { v4: uuidv4 } = require('uuid');
var nodemailer = require('nodemailer');
var bcrypt = require("bcryptjs");

const User = db.user;



exports.findAll = (req, res) => {
  User.find().populate("role")
    .then(users => {
      users.forEach(el => {
        el.password = "";
        el.role = el.role.name
      })
      users = users.filter(function (obj) {
        return obj.role.name !== 'BigAdmin' && obj.role.name !== 'User';
      });
      res.send(users);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users."
      });
    });
};


exports.findOne = (req, res) => {
  User.findById(req.params.id)
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      res.status(200).send({
        id: user._id,
        name: user.name,
        tzId: user.tzId,
        email: user.email,
        role: user.role.name.toUpperCase(),
        phone: user.phone,
        schoolRef: user.schoolRef,
      });
    });
};




// Update a note identified by the noteId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.name) {
    return res.status(400).send({
      message: "User content can not be empty"
    });
  }

  // Find note and update it with the request body
  User.findByIdAndUpdate(req.query.id, {
    name: req.body.name,
  }, { new: true })
    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      res.send(note);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error updating User with id " + req.params.id
      });
    });
};

exports.updateStatus = (req, res) => {
  User.findByIdAndUpdate(req.body._id, {
    status: req.body.status,
  }, { new: true })
    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: "User not found with id " + req.body._id
        });
      }
      res.send(note);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "User not found with id " + req.body._id
        });
      }
      return res.status(500).send({
        message: "Error updating User with id " + req.body._id
      });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.query.id)
    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      res.send({ message: "User deleted successfully!" });
    }).catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete User with id " + req.params.id
      });
    });
};
