const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//register first time
exports.signup = (req, res) => {

  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    tz: req.body.tz,
    email: req.body.email,
    isActive: req.body.isActive,
    bornDate: req.body.bornDate,
    gender: req.body.gender,
    status: req.body.status,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    Role.findOne({ name: "Admin" }, (err, role) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      user.role = role._id;
      user.save(err => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        console.log("role");
        res.send({ message: "Manager was registered successfully!" });
      });
    });
  });

};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
    status: 2
  })
    .populate("role")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id, role: user.role }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        _id: user._id,
        role: user.role.name,
        firstname: user.firstname,
        lastname: user.lastname,
        tz: user.tz,
        email: user.email,
        isActive: user.isActive,
        bornDate: user.bornDate,
        gender: user.gender,
        status: user.status,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        accessToken: token
      });
    });
};
