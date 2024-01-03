const db = require("../models");
const Candidate = db.candidate;
const User = db.user;
const Role = db.role;
const CandidateStep = db.candidateStep;


// Create and Save a new Note
exports.create = (req, res) => {
    const step = new CandidateStep(req.body);
    step.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        else {
            res.send(user);
        }
    });
};

exports.getSameSteps = (req, res) => {
    CandidateStep.find({ female: req.body.female, male: req.body.male })
        .populate({
            path: 'male',
            populate: { path: 'user' }
        }).populate({
            path: 'female',
            populate: { path: 'user' }
        }).populate({
            path: 'treatedByUser',
            populate: { path: 'user' }
        }).exec()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving city."
            });
        });
}

exports.findOne = (req, res) => {
    CandidateStep.findById(req.query.id).populate({
        path: 'male',
        populate: { path: 'user' }
    }).populate({
        path: 'female',
        populate: { path: 'user' }
    }).exec()
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

exports.treatedByInStep = (req, res) => {
    CandidateStep.find({ treatedByUser: req.userId, step: { $ne: 7 } })
        .populate({
            path: 'male',
            populate: { path: 'user' }
        }).populate({
            path: 'female',
            populate: { path: 'user' }
        }).exec()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving city."
            });
        });
};

exports.updateStep = (req, res) => {
    CandidateStep.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "CandidateStep not found with id " + req.body.id
                });
            }
            Candidate.findByIdAndUpdate(req.body.female._id, { step: req.body.step }).then(r => {
                Candidate.findByIdAndUpdate(req.body.male._id, { step: req.body.step }).then(r => {
                    res.send(note);
                })
            })

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

exports.deleteTreatedByInStep = (req, res) => {
    CandidateStep.findByIdAndRemove(req.query.id)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "CandidateStep not found with id " + req.query.id
                });
            }
            Candidate.findByIdAndUpdate(note.female._id, { step: 0 }).then(r => {
                Candidate.findByIdAndUpdate(note.male._id, { step: 0 }).then(r => {
                    res.send({ message: "CandidateStep deleted successfully!" });
                })
            })

        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "CandidateStep not found with id " + req.query.id
                });
            }
            return res.status(500).send({
                message: "Could not delete CandidateStep with id " + req.query.id
            });
        });
};
