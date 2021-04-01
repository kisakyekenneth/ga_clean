const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: "Please enter the name"
    },
    nin: {
        type: String,
        required: "Please provide the nin",
        unique: true
    },
    location: {
        type: String,
        required: "Please provide customer location"
    },
    time_requested: {
        type: String,
        required: "Please provide your Driver license Number"
    },
    type_of_request: {
        type: String,
        required: "Please provide employee date of Birth"
    },
    no_of_trucks: {
        type: String,
        required: "Please select add number of desired trucks"
    },
    service_requested: [{
        type: String
    }],
    telephone: {
        type: String,
        required: "Please provide phone number"
    }
});

module.exports = mongoose.model("CustomerOrders", ordersSchema);