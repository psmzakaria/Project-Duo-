const mongoose = require("mongoose");

// Create a schema
const cpuSchema = mongoose.Schema({
  id: Number,
  processor: String,
  model: String,
  variant: String,
  price: Number
});

//Export model
const CpuModel = mongoose.model("CpuModel", cpuSchema);
module.exports = CpuModel;
