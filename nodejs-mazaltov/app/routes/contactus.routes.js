const controller = require("../controllers/contactus.controller");
const { authJwt } = require("../middlewares");


module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/contactus/all",[authJwt.verifyToken], controller.findAll);
  app.post("/api/contactus/create", controller.create);
  app.put("/api/contactus/updateStatus",[authJwt.verifyToken], controller.updateStatus);
  app.get("/api/contactus/delete",[authJwt.verifyToken], controller.delete);

};
