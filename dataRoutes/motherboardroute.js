const express = require("express");
const motherboardrouter = express.Router();
const motherboardModel = require("./../models/motherboard");

//GET all the motherboard data
motherboardrouter.get("/", async (req, res, next) => {
  const motherboards = await motherboardModel.find();
  
  if (req.query == {}) {
    res.status(200).json(motherboards);
  } else {
    const requestedModel = req.query.model.toLowerCase()

    const filteredBoards = motherboards.filter(board => {
      currentBoardName = board.model.toLowerCase()
      return currentBoardName.includes(requestedModel)
    })

    res.status(200).json(filteredBoards)
  }
});

//GET only a specific motherboard model data
motherboardrouter.get("/:id", async (req, res, next) => {
  const findMotherboard = await motherboardModel.findById(req.params.id);
  res.json(findMotherboard);
});

//POST motherboard data
motherboardrouter.post("/", async (req, res, next) => {
  const newMotherboard = new motherboardModel({
    id: req.body.id,
    model: req.body.model,
    cpuCompability: req.body.cpuCompability,
    price: req.body.price
  });
  await newMotherboard.save();
  res.status(201).json({ message: `You have created a new Motherboard` });
});

//PUT motherboard data via id number
motherboardrouter.put("/:id", async (req, res, next) => {
  const testing = await motherboardModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.status(204).json();
});
//DELETE motherboard by its id number
motherboardrouter.delete("/:id", async (req, res, next) => {
  await motherboardModel.findByIdAndDelete(req.params.id, req.body);
  res.status(204).json();
});
//Export router in a mongodb use case
module.exports = app => {
  app.use(express.json());
  app.use("/motherboard", motherboardrouter);
};
