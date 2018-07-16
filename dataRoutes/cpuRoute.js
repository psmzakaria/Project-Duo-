const express = require("express");
const cpurouter = express.Router();
const cpuData = require("./../utilis/cpuprocessorData.json");

//GET all the cpu data
cpurouter.get("/", (req, res) => {
  res.json(cpuData);
});

//GET only processor data
cpurouter.get("/:processor", (req, res) => {
  const processors = cpuData.filter(
    element => element.processor === req.params.processor
  );
  res.json(processors);
});

//GET only processor model data
cpurouter.get("/:model", (req, res) => {
  const cpumodels = cpuData.filter(
    element => element.cpumodel === req.params.cpumodel
  );
  res.json(cpumodels);
});

module.exports = cpurouter;
