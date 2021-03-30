const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  userName: {
    type: String,
    required: "Please enter the name"
  },
  nin_number: {
    type: String,
    required: "Please provide the nin",
    unique: true
  },
  residence: {
    type: String,
    required: "Please provide your residence"
  },
  driving_license: {
    type: String,
    required: "Please provide your Driver license Number"
  },
  date_of_birth: {
    type: String,
    required: "Please provide employee date of Birth"
  },
  employee_type: {
    type: String,
    required: "Please select the role(Driver or conductor)"
  },
  past_incidences: [
    {
      type: String
    }
  ],
  imageupload: String,
  tel_no_1: {
    type: String,
    required: "Please provide Default phone code"
  },
  tel_no_2: {
    type: String,
    required: "Please provide Default phone digit"
  },
  tel_no_3: {
    type: String,
    required: "Please provide the rest of phone number details"
  },
  telephone: {
    type: String,
    required: "Please provide phone number"
  }
});

module.exports = mongoose.model("Employee", employeeSchema);
