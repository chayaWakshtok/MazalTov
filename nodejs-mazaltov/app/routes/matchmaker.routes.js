const controller = require("../controllers/matchmaker.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/matchmaker/all",[authJwt.verifyToken], controller.findAll);
  app.post("/api/matchmaker/create",[authJwt.verifyToken], controller.create);
  app.get("/api/matchmaker/findMatchmaker",[authJwt.verifyToken], controller.getMatchmaker);
  app.get("/api/matchmaker/find",[authJwt.verifyToken], controller.findOne);
  app.get("/api/matchmaker/countFinish",[authJwt.verifyToken], controller.getCloseCount);
  app.get("/api/matchmaker/countTryMatch",[authJwt.verifyToken], controller.getMatchCount);
  app.put("/api/matchmaker/update",[authJwt.verifyToken], controller.update);
  app.get("/api/matchmaker/delete",[authJwt.verifyToken], controller.delete);

};
