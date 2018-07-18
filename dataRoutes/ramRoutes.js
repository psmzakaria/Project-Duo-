const express = require("express");
const ramRouter = express.Router();
const RamModel = require("./../models/ram");

//GET all the RAM data
ramRouter.get("/", async (req, res, next) => {
  const ram = await RamModel.find();
  res.status(200).json(ram);
});

//GET only a specific RAM data
ramRouter.get("/:id", async (req, res, next) => {
  const findRam = await RamModel.findById(req.params.id);
  res.json(findRam);
});

//POST RAM data
ramRouter.post("/", async (req, res, next) => {
  const newRam = new RamModel({
    id: req.body.id,
    model_name: req.body.model_name,
    cpuCompability: req.body.cpuCompability,
    ramFrequency: req.body.ramFrequency,
    doubleDataRate: req.body.doubleDataRate,
    piecesinKit: req.body.piecesinKit,
    ramAmount: req.body.ramAmount,
    price: req.body.price
  });
  await newRam.save();
  res.status(201).json({ message: `You have created a new RAM` });
});

//PUT RAM data via id number
ramRouter.put("/:id", async (req, res, next) => {
  const testing = await RamModel.findByIdAndUpdate(req.params.id, req.body);
  res.status(204).json();
});
//DELETE RAM by its id number
ramRouter.delete("/:id", async (req, res, next) => {
  await RamModel.findByIdAndDelete(req.params.id, req.body);
  res.status(204).json();
});
//Export router in a mongodb use case
module.exports = app => {
  app.use(express.json());
  app.use("/ram", ramRouter);
};
