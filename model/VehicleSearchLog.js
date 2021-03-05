const mongoose = require("mongoose");
const Schema = mongoose.Schema,
  model = mongoose.model;

const vehicleSearchLogSchema = new Schema({
  possibleRegistrationNumber: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.VehicleSearchLog ||
  model("VehicleSearchLog", vehicleSearchLogSchema);
