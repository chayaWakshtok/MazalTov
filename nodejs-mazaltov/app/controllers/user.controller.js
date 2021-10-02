const config = require("../config/auth.config");
const db = require("../models");
const { v4: uuidv4 } = require('uuid');
var nodemailer = require('nodemailer');
var bcrypt = require("bcryptjs");
const Candidate = require("../models/candidate.model");
const CandidateStep = require("../models/candidateStep.model");
const Halachot = require("../models/halacha.model");
const Role = require("../models/role.model");
const Matchmaker = require("../models/matchmaker.model");
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

exports.getDataAdminHome1 = (async (req, res) => {
  var userRole = await Role.findOne({ name: "User" });
  var users = await User.find({ role: { $ne: userRole._id } }).count();
  var questions = 0;
  var askAdmin = 0;
  var askMatchmarker = 0;

  res.status(201).json({
    data: [users, questions, askAdmin, askMatchmarker]
  });
});

exports.getDataAdminHome2 = (async (req, res) => {

  var users = await Candidate.find({ isMarry: false }).count();
  var getMarry = await CandidateStep.find({ step: { $gte: 7 } }).count();
  var ravQuestion = 0;
  var worker1Question = 0;
  var worker2Question = 0;
  var marryMonth = await CandidateStep.find({ step: { $gte: 7 }, updatedAt: { $gte: new Date().setMonth(-1) } }).count();;
  var canPay = await Candidate.find({ payMoney: true }).count();
  var numWork = 0;
  res.status(201).json({
    data: [users, getMarry, ravQuestion, worker1Question, worker2Question, marryMonth, canPay, numWork]
  });
});

exports.getDataAdminHome3 = (async (req, res) => {

  var questions = 0;
  var questionsAnswer = 0;
  var halachots = await Halachot.find().count();

  res.status(201).json({
    data: [questions, questionsAnswer, halachots]
  });
});



exports.getDataHome = (async (req, res) => {

  var users = await Candidate.find().count();
  var matchmarkers = await Matchmaker.find().count();
  var helps = 0;
  var marryMonth = await CandidateStep.find({ step: { $gte: 7 }, updatedAt: { $gte: new Date().setMonth(-1) } }).count();
  var marrys = await CandidateStep.find({ step: { $gte: 7 } }).populate({
    path: 'male',
    populate: { path: 'user' }
  }).populate({
    path: 'female',
    populate: { path: 'user' }
  }).exec();

  var marrysCount = marrys.length;
  var marrNames = [];

  for (let index = 0; index < marrys.length && index < 6; index++) {
    const element = marrys[index];
    marrNames.push(
      element.male.user.firstname + " " + element.male.user.lastname + " ו" + element.female.user.firstname + " " + element.female.user.lastname
    );
  }

  res.status(201).json({
    data: [users, matchmarkers, helps, marryMonth, marrysCount],
    marrys: marrNames
  });
});

