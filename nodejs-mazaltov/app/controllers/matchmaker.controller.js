const config = require("../config/auth.config");
const db = require("../models");
const Matchmaker = db.matchmaker;
const User = db.user;
const Role = db.role;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// Create and Save a new Note
exports.create = (req, res) => {

    const user = new User({
        firstname: req.body.user.firstname,
        lastname: req.body.user.lastname,
        username: req.body.user.username,
        tz: req.body.user.tz,
        email: req.body.user.email,
        isActive: req.body.user.isActive,
        bornDate: req.body.user.bornDate,
        gender: req.body.user.gender,
        status: req.body.user.status,
        password: bcrypt.hashSync(req.body.user.password, 8),
    });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        Role.findOne({ name: "MatchMaker" }, (err, role) => {
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
                delete req.body.user;
                const match = new Matchmaker(req.body);
                match.user = user._id;
                match.save()
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the matchmaker."
                        });
                    });
            });
        });
    });

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Matchmaker.find().populate("user")
        .then(notes => {
            notes.forEach(el => {
                el.user.password = "";
            })
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving city."
            });
        });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Matchmaker.findById(req.params.id).populate("user")
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "matchmaker not found with id " + req.params.id
                });
            }
            note.user.password = "";
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "matchmaker not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving matchmaker with id " + req.params.id
            });
        });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

    // Find note and update it with the request body
    Matchmaker.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "matchmaker not found with id " + req.body._id
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "matchmaker not found with id " + req.body._id
                });
            }
            return res.status(500).send({
                message: "Error updating matchmaker with id " + req.body._id
            });
        });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Matchmaker.findByIdAndRemove(req.params.id)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Matchmaker not found with id " + req.params.id
                });
            }
            res.send({ message: "Class deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Matchmaker not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Could not delete Matchmaker with id " + req.params.id
            });
        });
};
