const controller = require("../controllers/halacha.controller");
const { authJwt } = require("../middlewares");


module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/halacha/all", controller.findAll);
  app.post("/api/halacha/create",[authJwt.verifyToken], controller.create);
  app.get("/api/halacha/find",[authJwt.verifyToken], controller.findOne);
  app.put("/api/halacha/update",[authJwt.verifyToken], controller.update);
  app.put("/api/halacha/updateStatus",[authJwt.verifyToken], controller.updateStatus);
  app.get("/api/halacha/delete",[authJwt.verifyToken], controller.delete);

};
