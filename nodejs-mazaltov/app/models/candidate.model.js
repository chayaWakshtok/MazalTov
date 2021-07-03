const mongoose = require("mongoose");

const Candidate = mongoose.model(
  "Candidate",
  new mongoose.Schema({
    address: String,
    city: String,
    phone: String,
    sector: String,
    chasidut: String,
    medicalProblem: Number,
    medicalProblemRemark: String,
    status: Number,
    isCube: Boolean,
    reasonCube: Number,
    reasonCubeA: String,
    lastPlaceLearn: String,
    candidateWork: String,
    whoMoneyAnother: Number,
    whoMoneyGive: Number,
    clothes: String,
    heigth: Number,
    keepOn: String,
    show: String,
    nameFather: String,
    tellFather: String,
    nameMother: String,
    tellMother: String,
    familyMother: String,
    fatherWork: String,
    motherWork: String,
    numChildren: Number,
    candidateFamilies: [
      {
        age: Number,
        placeLearn: String,
        name: String
      }
    ],
    numMarried: Number,
    marrieds: [
      {
        name: String,
        phone: String,
        address: String
      }
    ],
    infoCandidates: [
      {
        name: String,
        phone: String,
        connectLevel: String,
        remark: String
      }
    ],
    remarkSecure: String,
    remark: String,
    user:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    entryByUser:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    treatedByUser:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    isMarry: { type: Boolean, default: false },
    step: { type: Number, default: 0 }

  },
    { timestamps: true }),
);

module.exports = Candidate;
