const mongoose = require("mongoose");

const conductorSchema = mongoose.Schema({
    conductorName: {
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
    date_of_birth: {
        type: String,
        required: "Please provide employee date of Birth"
    },
    imageupload: String,

});

module.exports = mongoose.model("Conductor", conductorSchema);