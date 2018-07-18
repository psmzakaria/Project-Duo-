const mongoose = require("mongoose");

// Create a schema
const motherboardschema = mongoose.Schema({
  id: Number,
  model: String,
  cpuCompability: String,
  price: Number
});

//Export model
const moherboardModel = mongoose.model("motherboardModel", motherboardschema);
module.exports = motherboardModel;
