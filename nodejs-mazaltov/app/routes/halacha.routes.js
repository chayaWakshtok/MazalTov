const controller = require("../controllers/halacha.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/halacha/all", controller.findAll);
  app.post("/api/halacha/create", controller.create);
  app.get("/api/halacha/find", controller.findOne);
  app.put("/api/halacha/update", controller.update);
  app.get("/api/halacha/delete", controller.delete);

};
