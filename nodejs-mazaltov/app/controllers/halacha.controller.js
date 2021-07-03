const config = require("../config/auth.config");
const db = require("../models");
const Halach = db.halach;


// Create and Save a new Note
exports.create = (req, res) => {
    // Create a Note
    const halach = new Halach(req.body);

    // Save Note in the database
    halach.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the city."
            });
        });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Halach.find().populate("entryByUser")
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving city."
            });
        });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Halach.findById(req.params.id)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Halach not found with id " + req.params.id
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Halach not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving Halach with id " + req.params.id
            });
        });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Find note and update it with the request body
    Halach.findByIdAndUpdate(req.body._id,
        req.body
        , { new: true })
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

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Halach.findByIdAndRemove(req.params.id)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Halach not found with id " + req.params.id
                });
            }
            res.send({ message: "Class deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Halach not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Could not delete Halach with id " + req.params.id
            });
        });
};
