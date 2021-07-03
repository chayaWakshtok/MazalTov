const controller = require("../controllers/sector.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/sector/all", controller.findAll);
  app.post("/api/sector/create", controller.create);
  app.get("/api/sector/find", controller.findOne);
  app.put("/api/sector/update", controller.update);
  app.get("/api/sector/delete", controller.delete);

};
