const mongoose = require("mongoose");
const express = require("express");
const { passport } = require("./dataRoutes/passport");
const morgan = require("morgan");
const cpurouter = require("./dataRoutes/cpuRoute");
const docRouter = require("./dataRoutes/documentationRoute");
const motherboardrouter = require("./dataRoutes/motherboardroute");
const { handle404, handle500 } = require("./Middleware/errorHandler");
const router = require("./dataRoutes/userroute");
const bodyParser = require("body-parser");
const mongodb_uri =
  process.env.MONGODB_URI || "mongodb://localhost/mongoDB-computers";

mongoose.connect(mongodb_uri);
const db = mongoose.connection;
db.on("error", () => {});
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(passport.initialize());
app.use(bodyParser());
app.get("/", function(req, res) {
  res.json("Hello World!");
});
motherboardrouter(app);
router(app);
cpurouter(app);
docRouter(app);
app.use(handle404);
app.use(handle500);

module.exports = app;
