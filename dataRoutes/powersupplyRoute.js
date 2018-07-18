const express = require("express");
const powersupplyRouter = express.Router();
const PowersupplyModel = require("./../models/ram");

//GET all the Powersupply data
powersupplyRouter.get("/", async (req, res, next) => {
  const powersupply = await PowersupplyModel.find();
  res.status(200).json(powersupply);
});

//GET only a specific Powersupply data
powersupplyRouter.get("/:id", async (req, res, next) => {
  const findPowersupply = await PowersupplyModel.findById(req.params.id);
  res.json(findPowersupply);
});

//POST Powersupply data
powersupplyRouter.post("/", async (req, res, next) => {
  const newPowersupply = new PowersupplyModel({
    id: req.body.id,
    brand: req.body.brand,
    model: req.body.model,
    watt: req.body.watt,
    price: req.body.price
  });
  await newPowersupply.save();
  res.status(201).json({ message: `You have created a new Powersupply` });
});

//PUT Powersupply data via id number
powersupplyRouter.put("/:id", async (req, res, next) => {
  const testing = await PowersupplyModel.findByIdAndUpdate(req.params.id, req.body);
  res.status(204).json();
});
//DELETE Powersupply by its id number
powersupplyRouter.delete("/:id", async (req, res, next) => {
  await PowersupplyModel.findByIdAndDelete(req.params.id, req.body);
  res.status(204).json();
});
//Export router in a mongodb use case
module.exports = app => {
  app.use(express.json());
  app.use("/powersupply", powersupplyRouter);
};
