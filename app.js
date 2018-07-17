const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cpurouter = require("./dataRoutes/cpuRoute");
const motherboardrouter = require("./dataRoutes/motherboardroute");
const bodyParser = require("body-parser");
const mongodb_uri =
  process.env.MONGODB_URI || "mongodb://localhost/mongoDB-computers";
  
  mongoose.connect(mongodb_uri);
  const db = mongoose.connection;
  db.on("error", () => {
    console.error("An error has occured====>");
  });
  
app.use(express.json());
app.use(bodyParser());
app.use("/motherboard", motherboardrouter);
app.get("/", function(req, res) {
  res.json("Hello World!");
});

cpurouter(app);

module.exports = app;
