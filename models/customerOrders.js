const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: "Please enter customer Name"
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
        required: "Please provide time of request"
    },    
    no_of_trucks: {
        type: String,
        required: "Please add number of required trucks"
    },
    desired_service: {
        type: String,
        required: "Please provide the service required"
    },
    telephone: {
        type: String,
        required: "Please provide phone number"
    },
    status: {
        type: String,
        default: 'no_truck'
    },
    progress: {
        type: String,
        default: 'created'
    }
});

module.exports = mongoose.model("CustomerOrders", ordersSchema);