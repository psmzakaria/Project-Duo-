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

//PUT processor data via processor name 
router.put("/data/:name", (req, res) => {
    data = data.map(data => {
      const wahlenSchutz = req.params.name;
      if (data.name === wahlenSchutz) return Object.assign(data, req.body);
      else return data;
    });
    res.send(data);
  });


module.exports = cpurouter;
