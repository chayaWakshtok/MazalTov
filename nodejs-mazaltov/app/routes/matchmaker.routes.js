const controller = require("../controllers/matchmaker.controller");


module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/matchmaker/all", controller.findAll);
  app.post("/api/matchmaker/create", controller.create);
  app.get("/api/matchmaker/find", controller.findOne);
  app.put("/api/matchmaker/update", controller.update);
  app.get("/api/matchmaker/delete", controller.delete);

};
