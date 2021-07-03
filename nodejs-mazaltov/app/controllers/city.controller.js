const config = require("../config/auth.config");
const db = require("../models");
const City = db.city;


// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    if (!req.body.cityName) {
        return res.status(400).send({
            message: "City name can not be empty"
        });
    }

    // Create a Note
    const city = new City({
        cityName: req.body.name,
    });

    // Save Note in the database
    city.save()
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
    City.find()
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
    City.findById(req.params.id)
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
    // Validate Request
    if (!req.body.name) {
        return res.status(400).send({
            message: "city content can not be empty"
        });
    }

    // Find note and update it with the request body
    City.findByIdAndUpdate(req.query.id, {
        cityName: req.body.cityName,
    }, { new: true })
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
    City.findByIdAndRemove(req.params.id)
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
