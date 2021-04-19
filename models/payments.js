const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  sewage_weekily: {
    type: Number,
    required: "Please enter the cost for sewage weekily"
  },
  sewage_subscription: {
    type: Number
  },
  garbage_subscription: {
    type: Number
  },
  garbage_weekily: {
    type: Number,
    required: "Please provide the cost for garbage weekily",
   
  },
  discount_sewage: {
    type: Number,
    required: "Please provide the discount for Sewage"
  },
  discount_garbage: {
    type: Number,
    required: "Please provide the discount for garbage"
  }
  
  
});

module.exports = mongoose.model("Payments", paymentSchema);