const mongoose = require("mongoose");

const Secretary = mongoose.model(
    "Secretary",
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
        workerRemark: String,
        isAgreement: Boolean,
        hourPrice:Number,
        monthPrice:Number,
        numHourWork:Number,
        fillForm:Boolean,
        point: { type: Number, default: 0 }
    })
);

module.exports = Secretary;
