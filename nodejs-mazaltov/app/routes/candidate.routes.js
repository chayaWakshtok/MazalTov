const controller = require("../controllers/candidate.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/candidate/all", [authJwt.verifyToken], controller.findAll);
  app.get("/api/candidate/notMarry", [authJwt.verifyToken], controller.findNotMarry);
  app.get("/api/candidate/treatedBy", [authJwt.verifyToken], controller.treatedBy);
  app.get("/api/candidate/treatedByInStep", [authJwt.verifyToken], controller.treatedByInStep);
  app.post("/api/candidate/create", [authJwt.verifyToken], controller.create);
  app.post("/api/candidate/updateStep", [authJwt.verifyToken], controller.updateStep);
  app.get("/api/candidate/find", [authJwt.verifyToken], controller.findOne);
  app.put("/api/candidate/update", [authJwt.verifyToken], controller.update);
  app.get("/api/candidate/delete", [authJwt.verifyToken], controller.delete);

};
