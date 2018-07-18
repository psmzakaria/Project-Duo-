const express = require("express");
const gpuRouter = express.Router();
const GpuModel = require("./../models/gpu");

//GET all the gpu data
gpuRouter.get("/", async (req, res, next) => {
  const gpu = await GpuModel.find();
  res.status(200).json(gpu);
});

//GET only a specific gpu data
gpuRouter.get("/:id", async (req, res, next) => {
  const findGpu = await GpuModel.findById(req.params.id);
  res.json(findGpu);
});

//POST GPU data
gpuRouter.post("/", async (req, res, next) => {
  const newGpu = new GpuModel({
    id: req.body.id,
    gpu: req.body.gpu,
    brand: req.body.brand,
    model: req.body.model,
    sizeGb: req.body.sizeGb,
    price: req.body.price
  });
  await newGpu.save();
  res.status(201).json({ message: `You have created a new GPU` });
});

//PUT GPU data via id number
gpuRouter.put("/:id", async (req, res, next) => {
  const testing = await GpuModel.findByIdAndUpdate(req.params.id, req.body);
  res.status(204).json();
});
//DELETE GPU by its id number
gpuRouter.delete("/:id", async (req, res, next) => {
  await GpuModel.findByIdAndDelete(req.params.id, req.body);
  res.status(204).json();
});
//Export router in a mongodb use case
module.exports = app => {
  app.use(express.json());
  app.use("/gpu", gpuRouter);
};
