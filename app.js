const express = require("express");
const app = express();
const cpurouter =require("./dataRoutes/cpuRoute")
const motherboardrouter=require("./dataRoutes/motherboardroute")
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser());
app.use("/cpu", cpurouter);
app.use("/motherboard", motherboardrouter);
app.get("/", function(req, res) {
  res.json("Hello World!");
});

module.exports = app;