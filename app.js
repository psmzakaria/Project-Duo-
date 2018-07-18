const mongoose = require("mongoose");
const express = require("express");
const { passport } = require("./../projectduo/dataRoutes/passportt");
const morgan = require("morgan");
const cpurouter = require("./dataRoutes/cpuRoute");
const motherboardrouter = require("./dataRoutes/motherboardroute");
const { handle404, handle500 } = require("./Middleware/errorHandler");

const bodyParser = require("body-parser");
const mongodb_uri =
  process.env.MONGODB_URI || "mongodb://localhost/mongoDB-computers";

mongoose.connect(mongodb_uri);
const db = mongoose.connection;
db.on("error", () => {
  console.error("An error has occured====>");
});
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(passport.initialize());
app.use(bodyParser());
app.use("/motherboard", motherboardrouter);
app.get("/", function(req, res) {
  res.json("Hello World!");
});

app.use(handle404);
app.use(handle500);
cpurouter(app);

module.exports = app;
