const mongoose = require("mongoose");
const Schema = mongoose.Schema,
  model = mongoose.model;

const vehicleSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.models.Vehicle || model("Vehicle", vehicleSchema);
