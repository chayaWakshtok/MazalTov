const mongoose = require("mongoose");

const Worker = mongoose.model(
    "Worker",
    new mongoose.Schema({
        user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        chasidut: String,
        city: String,
        address: String,
        tell: String,
        phone: String,
        fax: String,
        sector: String,
        experiance: Number,
        confidentComment: String,
        workerRemark: String,
        isAgreement: Boolean,
        categoryWork:String,
        hourPrice:Number,
        monthPrice:Number,
        numHourWork:Number,
        fillForm:Boolean,
        point: { type: Number, default: 0 }
    })
);

module.exports = Worker;
