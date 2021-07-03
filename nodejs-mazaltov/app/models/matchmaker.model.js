const mongoose = require("mongoose");

const Matchmaker = mongoose.model(
    "Matchmaker",
    new mongoose.Schema({
        user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        city: String,
        address: String,
        tell: String,
        phone: String,
        fax: String,
        sector: String,
        medicalProblem: String,
        experiance: Number,
        numMatching: Number,
        childrenMatchmaking: Number,
        confidentComment: String,
        workerRemark: String,
        isAgreement: Boolean,
        point: { type: Number, default: 0 }
    })
);

module.exports = Matchmaker;
