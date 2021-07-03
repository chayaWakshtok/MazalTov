const controller = require("../controllers/candidateStep.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/candidateStep/getSameSteps",[authJwt.verifyToken], controller.getSameSteps);
  app.post("/api/candidateStep/create",[authJwt.verifyToken], controller.create);
  app.put("/api/candidateStep/update",[authJwt.verifyToken], controller.updateStep);
  app.get("/api/candidateStep/findOne",[authJwt.verifyToken], controller.findOne);
};
