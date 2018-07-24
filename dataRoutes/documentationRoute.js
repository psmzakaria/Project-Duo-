const swaggerUi = require("swagger-ui-express");
const express = require("express");
const swaggerDocument = require("../utilis/swagger-documentation-Ecommerce-app.json");
const docRouter = express.Router();
docRouter.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app => {
  app.use(express.json());
  app.use("/docs", docRouter);
};
