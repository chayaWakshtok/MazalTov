const controller = require("../controllers/city.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/city/all", controller.findAll);
  app.post("/api/city/create", controller.create);
  app.get("/api/city/find", controller.findOne);
  app.put("/api/city/update", controller.update);
  app.get("/api/city/delete", controller.delete);

};
