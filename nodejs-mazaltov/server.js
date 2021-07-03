const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/city.routes")(app);
require("./app/routes/sector.routes")(app);
require("./app/routes/chasidut.routes")(app);
require("./app/routes/matchmaker.routes")(app);

require("./app/routes/candidate.routes")(app);
require("./app/routes/halacha.routes")(app);
require("./app/routes/candidateStep.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8070;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "Admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Admin' to roles collection");
      });

      new Role({
        name: "User"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'User' to roles collection");
      });

      new Role({
        name: "Worker"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Worker' to roles collection");
      });

      new Role({
        name: "Rav"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Rav' to roles collection");
      });

      new Role({
        name: "Secretary"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Secretary' to roles collection");
      });

      new Role({
        name: "MatchMaker"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'MatchMarker' to roles collection");
      });

      new Role({
        name: "BigAdmin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'BigAdmin' to roles collection");
      });
    }
  });
}


