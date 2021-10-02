const config = require("../config/auth.config");
const db = require("../models");
const Candidate = db.candidate;
const User = db.user;
const Role = db.role;
const CandidateStep = db.candidateStep;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


// Create and Save a new Note
exports.create = (req, res) => {

    const user = new User({
        firstname: req.body.user.firstname,
        lastname: req.body.user.lastname,
        tz: req.body.user.tz,
        email: req.body.user.email,
        bornDate: req.body.user.bornDate,
        gender: req.body.user.gender,
        status: req.body.user.status,
    });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        Role.findOne({ name: "User" }, (err, role) => {
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
                const candi = new Candidate(req.body);
                candi.user = user._id;
                candi.save()
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the candidate."
                        });
                    });
            });
        });
    });

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Candidate.find().populate("user")
        .then(notes => {
            notes.forEach(e => {
                e.user.password = "";
            })
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving city."
            });
        });
};

exports.findNotMarry = (req, res) => {
    Candidate.find({ isMarry: false }).populate("user")
        .then(notes => {
            notes.forEach(e => {
                e.user.password = "";
            })
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving city."
            });
        });
};

exports.treatedBy = (req, res) => {
    Candidate.find({ treatedByUser: req.userId }).populate("user")
        .then(notes => {
            notes.forEach(e => {
                e.user.password = "";
            })
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving city."
            });
        });
};

exports.treatedByInStep = (req, res) => {
    CandidateStep.find({ treatedByUser: req.userId, step: { $ne: 7 }, isFail: { $ne: true } })
        .populate({
            path: 'male',
            populate: { path: 'user' }
        }).populate({
            path: 'female',
            populate: { path: 'user' }
        })
        .populate("user").exec()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving city."
            });
        });
};

exports.updateStep = (req, res) => {
    req.body.male = req.body.male._id;
    req.body.female = req.body.female._id;
    req.body.treatedByUser = req.userId;
    CandidateStep.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "CandidateStep not found with id " + req.body.id
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "CandidateStep not found with id " + req.body.id
                });
            }
            return res.status(500).send({
                message: "Error updating CandidateStep with id " + req.params.id
            });
        });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Candidate.findById(req.params.id).populate("user")
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "city not found with id " + req.params.id
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "city not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving city with id " + req.params.id
            });
        });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    //TODO:   update also user
    // Find note and update it with the request body
    Candidate.findByIdAndUpdate(req.query.id, req.body, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "city not found with id " + req.params.id
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "city not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating city with id " + req.params.id
            });
        });
};

exports.updateMarry = (req, res) => {
    Candidate.findOneAndUpdate({ _id: req.query.id }, { isMarry: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "updateMarry not found with id " + req.params.id
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "updateMarry not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating updateMarry with id " + req.params.id
            });
        });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Candidate.findByIdAndRemove(req.params.id)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "city not found with id " + req.params.id
                });
            }
            res.send({ message: "Class deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "city not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Could not delete city with id " + req.params.id
            });
        });
};
