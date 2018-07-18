const mongoose = require("mongoose");

// Create a schema
const motherboardschema = mongoose.Schema({
  id: Number,
  model: String,
  cpuCompability: String,
  price: Number
});

//Export model
const MotherboardModel = mongoose.model("MotherboardModel", motherboardschema);
module.exports = MotherboardModel;
