const express = require("express");
const cpurouter = express.Router();
let cpuData = require("./../utilis/cpuprocessorData.json");

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

//POST processor data
cpurouter.post("/", (req, res) => {
  cpuData = [...cpuData, req.body];
  res.json(cpuData);
});

//PUT processor data via id number
cpurouter.put("/:id", (req, res) => {
  cpuData = cpuData.map(data => {
    const findId = req.params.id;
    if (data.model === findId) return Object.assign(data, req.body);
    else return data;
  });
  res.json(cpuData);
});

//DELETE processor by its id number
cpurouter.delete("/:id", (req, res) => {
  remainingProcessor = cpuData.filter(data => data.id != req.params.id);
  res.json(remainingProcessor);
});
module.exports = cpurouter;
