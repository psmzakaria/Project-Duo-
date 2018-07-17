const mongoose = require("mongoose");

// Create a schema
const cpuschema = mongoose.Schema({
    id:Number,
    processor: String,
    model: String,
    varaint:String,
    price:Number
  });



//Export model
const CpuModel = mongoose.model("CpuModel", cpuschema);
module.exports = CpuModel;