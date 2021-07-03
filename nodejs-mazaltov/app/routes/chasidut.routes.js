const controller = require("../controllers/chasidut.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/chasidut/all", controller.findAll);
  app.post("/api/chasidut/create", controller.create);
  app.get("/api/chasidut/find", controller.findOne);
  app.put("/api/chasidut/update", controller.update);
  app.get("/api/chasidut/delete", controller.delete);

};
