const express = require("express");
const casingRouter = express.Router();
const CasingModel = require("./../models/ram");

//GET all the Casing data
casingRouter.get("/", async (req, res, next) => {
  const casing = await CasingModel.find();
  res.status(200).json(casing);
});

//GET only a specific Casing data
casingRouter.get("/:id", async (req, res, next) => {
  const findCasing = await CasingModel.findById(req.params.id);
  res.json(findCasing);
});

//POST Casing data
casingRouter.post("/", async (req, res, next) => {
  const newCasing = new CasingModel({
    id: req.body.id,
    model: req.body.model,
    formFactor:req.body.formFactor,
    piecesinKit: req.body.piecesinKit,
    ramAmount: req.body.ramAmount,
    price: req.body.price
  });
  await newCasing.save();
  res.status(201).json({ message: `You have created a new Casing` });
});

//PUT Casing data via id number
casingRouter.put("/:id", async (req, res, next) => {
  const testing = await CasingModel.findByIdAndUpdate(req.params.id, req.body);
  res.status(204).json();
});
//DELETE Casing by its id number
casingRouter.delete("/:id", async (req, res, next) => {
  await CasingModel.findByIdAndDelete(req.params.id, req.body);
  res.status(204).json();
});
//Export router in a mongodb use case
module.exports = app => {
  app.use(express.json());
  app.use("/casing", casingRouter);
};
