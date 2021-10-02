const controller = require("../controllers/rav.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/rav/all",[authJwt.verifyToken], controller.findAll);
  app.post("/api/rav/create", controller.create);
  app.get("/api/rav/find",[authJwt.verifyToken], controller.findOne);
  app.put("/api/rav/update",[authJwt.verifyToken], controller.update);
  app.get("/api/rav/delete",[authJwt.verifyToken], controller.delete);

};
