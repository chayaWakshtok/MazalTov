const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.city = require("./city.model");
db.sector = require("./sector.model");
db.chasidut = require("./chasidut.model");
db.matchmaker = require("./matchmaker.model");
db.candidate = require("./candidate.model");
db.halach = require("./halacha.model");
db.candidateStep = require("./candidateStep.model");

db.ROLES = ["Admin", "User", "Worker", "Rav", "Secretary", "BigAdmin", "MatchMarker"];

module.exports = db;
