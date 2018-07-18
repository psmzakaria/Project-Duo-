const express = require("express");
const cpurouter = express.Router();
const CpuModel = require("./../models/cpu");
const { passport } = require("./passport");
let cpuData = require("./../utilis/cpuprocessorData.json");

//GET all the cpu data
cpurouter.get("/", async (req, res, next) => {
  const cpu = await CpuModel.find();
  res.status(200).json(cpu);
});

//GET only processor data
cpurouter.get("/:id", async (req, res, next) => {
  const findCpu = await CpuModel.findById(req.params.id);
  res.json(findCpu);
});

//POST processor data
cpurouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    const newCpu = new CpuModel({
      id: req.body.id,
      processor: req.body.processor,
      model: req.body.model,
      varaint: req.body.variant,
      price: req.body.price
    });
    await newCpu.save();
    res.status(201).json({ message: `You have created a new CPU Processor` });
  }
);

//PUT processor data via id number
cpurouter.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    const testing = await CpuModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(204).json();
  }
);

//DELETE processor by its id number
cpurouter.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    await CpuModel.findByIdAndDelete(req.params.id, req.body);
    res.status(204).json();
  }
);

//Export router in a mongodb use case
module.exports = app => {
  app.use(express.json());
  app.use("/cpu", cpurouter);
};
