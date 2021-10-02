const mongoose = require("mongoose");

const Rav = mongoose.model(
    "Rav",
    new mongoose.Schema({
        user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        chasidut: String,
        Community:String,
        seatPerson:Boolean,
        questionAnswer:Boolean,
        city: String,
        address: String,
        tell: String,
        phone: String,
        fax: String,
        sector: String,
        workerRemark: String,
        categoryWork:String,
        isAgreement: Boolean,
        fillForm:Boolean,
        point: { type: Number, default: 0 }
    })
);

module.exports = Rav;
