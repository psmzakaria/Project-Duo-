const mongoose = require("mongoose");
const express = require("express");
const { passport } = require("./dataRoutes/passport");
const morgan = require("morgan");
const cpuRouter = require("./dataRoutes/cpuRoute");
const docRouter = require("./dataRoutes/documentationRoute");
const motherboardRouter = require("./dataRoutes/motherboardroute");
const { handle404, handle500 } = require("./Middleware/errorHandler");
const router = require("./dataRoutes/userroute");
const bodyParser = require("body-parser");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(passport.initialize());
app.use(bodyParser());
app.get("/", function(req, res) {
  res.json("Hello World!");
});
motherboardRouter(app);
router(app);
cpuRouter(app);
docRouter(app);
app.use(handle404);
app.use(handle500);

module.exports = app;
