const mongoose = require("mongoose");

const truckRegisterSchema = mongoose.Schema({
  driverName: {
    type: String,
    required: "Please enter the Driver Name"
  },
  truckCode: {
    type: String,
    required: "Please provide the truckCode",
    unique: true
  },
  truckRegNo: {
    type: String,
    required: "Please provide truck RegNo"
  },
  destination: {
    type: String,
    default: "non"
  },
  clocation: {
    type: String,
    default: "non"
  },
  earning: {
    type: String
  },
  conductors: {
    type: Number,
    default: 1
  },
  service_type: {
    type: String,
    required: "Please Insert the service for this Vehicle"
  },
  status: {
    type: String
  }
});

module.exports = mongoose.model("TruckRegister", truckRegisterSchema);
