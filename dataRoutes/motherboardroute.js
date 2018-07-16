const express = require("express");
const motherboardrouter = express.Router();
const motherboardData = require("./../utilis/motherboardData.json");

//GET all the motherboard data
motherboardrouter.get("/", (req, res) => {
  res.json(motherboardData);
});

//GET only specific motherboard data
motherboardrouter.get("/:model", (req, res) => {
  const models = motherboardData.filter(
    element => element.model === req.params.model
  );
  res.json(models);
});

module.exports = motherboardrouter;
