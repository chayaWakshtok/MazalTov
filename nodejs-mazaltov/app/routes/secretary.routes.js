const controller = require("../controllers/secretary.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/secretary/all",[authJwt.verifyToken], controller.findAll);
  app.post("/api/secretary/create", controller.create);
  app.get("/api/secretary/find",[authJwt.verifyToken], controller.findOne);
  app.put("/api/secretary/update",[authJwt.verifyToken], controller.update);
  app.get("/api/secretary/delete",[authJwt.verifyToken], controller.delete);

};
