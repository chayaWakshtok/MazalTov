const mongoose = require("mongoose");

const CandidateStep = mongoose.model(
    "CandidateStep",
    new mongoose.Schema({
        male: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Candidate"
        },
        female: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Candidate"
        },
        step: { type: Number, default: 0 },
        treatedByUser:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        checkeding: {
            dress: Boolean,
            money: Boolean,
            style: Boolean,
            character: Boolean,
            ambition: Boolean
        },
        meeting: [
            {
                numMeeting: Number,
                place: String,
                when: Date,
                longHour: Number,
                remark: String
            }
        ],
        questionRav: [
            {}
        ],
        questionClever: [{

        }],
        precent: { type: Number, default: 0 },
        remark: String,
        remarkSecure: String,
        remarkFemale: String,
        remarkmale: String,
        remarkSecureFemale: String,
        remarkSecuremale: String,
        isFail: Boolean,
        fail: {
            reasonMale: String,
            remark: String,
            resonFemale: String,
            whoFail: String
        }
    }, {
        timestamps: true
    })
);

module.exports = CandidateStep;
