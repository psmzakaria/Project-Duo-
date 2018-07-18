const express = require("express");
const hardDriveRouter = express.Router();
const hardDriveModel = require("./../models/harddrive");

//GET all the HardDrive data
hardDriveRouter.get("/", async (req, res, next) => {
  const harddrive = await hardDriveModel.find();
  res.status(200).json(harddrive);
});

//GET only a specific Harddrive data
hardDriveRouter.get("/:id", async (req, res, next) => {
  const findharddrive = await hardDriveModel.findById(req.params.id);
  res.json(findharddrive);
});

//POST harddrive data
hardDriveRouter.post("/", async (req, res, next) => {
  const newHardDrive = new hardDriveModel({
    id: req.body.id,
    brand: req.body.brand,
    model: req.body.model,
    type: req.body.type,
    oneTB: req.body.oneTB,
    twoTB: req.body.twoTB,
    threeTB: req.body.threeTB,
    fourTB: req.body.fourTB,
    tenTB: req.body.tenTB,
    twelveTB: req.body.twelveTB
  });
  await newHardDrive.save();
  res.status(201).json({ message: `You have created a new Hard drive` });
});

//PUT Powersupply harddrive via id number
hardDriveRouter.put("/:id", async (req, res, next) => {
  const testing = await hardDriveModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.status(204).json();
});
//DELETE harddrive by its id number
hardDriveRouter.delete("/:id", async (req, res, next) => {
  await hardDriveModel.findByIdAndDelete(req.params.id, req.body);
  res.status(204).json();
});
//Export router in a mongodb use case
module.exports = app => {
  app.use(express.json());
  app.use("/harddrive", hardDriveRouter);
};
