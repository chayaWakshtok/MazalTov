const controller = require("../controllers/worker.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/worker/all",[authJwt.verifyToken], controller.findAll);
  app.post("/api/worker/create", controller.create);
  app.get("/api/worker/find",[authJwt.verifyToken], controller.findOne);
  app.put("/api/worker/update",[authJwt.verifyToken], controller.update);
  app.get("/api/worker/delete",[authJwt.verifyToken], controller.delete);

};
