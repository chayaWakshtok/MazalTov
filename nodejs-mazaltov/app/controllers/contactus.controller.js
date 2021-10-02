const config = require("../config/auth.config");
const db = require("../models");
const ContactUs = db.contactus;


// Create and Save a new Note
exports.create = (req, res) => {
    // Create a Note
    const contact = new ContactUs(req.body);

    // Save Note in the database
    contact.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the ContactUs."
            });
        });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  ContactUs.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving ContactUs."
            });
        });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Halach.findByIdAndRemove(req.query.id)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "ContactUs not found with id " + req.query.id
                });
            }
            res.send({ message: "ContactUs deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "ContactUs not found with id " + req.query.id
                });
            }
            return res.status(500).send({
                message: "Could not delete ContactUs with id " + req.query.id
            });
        });
};


exports.updateStatus = (req, res) => {
    Halach.findByIdAndUpdate(req.body._id, {
      status: req.body.status,
    }, { new: true })
      .then(note => {
        if (!note) {
          return res.status(404).send({
            message: "ContactUs not found with id " + req.body._id
          });
        }
        res.send(note);
      }).catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: "ContactUs not found with id " + req.body._id
          });
        }
        return res.status(500).send({
          message: "Error updating ContactUs with id " + req.body._id
        });
      });
  };
