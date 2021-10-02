const controller = require("../controllers/user.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/user/all",[authJwt.verifyToken], controller.findAll);
  app.get("/api/user/find",[authJwt.verifyToken], controller.findOne);
  app.put("/api/user/update",[authJwt.verifyToken], controller.update);
  app.put("/api/user/updateStats", controller.updateStatus);
  app.get("/api/user/delete",[authJwt.verifyToken], controller.delete);
  app.get("/api/user/getDataAdminHome1",[authJwt.verifyToken], controller.getDataAdminHome1);
  app.get("/api/user/getDataAdminHome2",[authJwt.verifyToken], controller.getDataAdminHome2);
  app.get("/api/user/getDataAdminHome3", [authJwt.verifyToken],controller.getDataAdminHome3);
  app.get("/api/user/getDataHome",controller.getDataHome);
};

