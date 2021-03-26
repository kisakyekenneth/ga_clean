const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    userName: {
        type: String,
        required: 'Please enter the name'
    },
    nin_number: {
        type: String,
        required: 'Please provide the nin',
        unique: true
    },
    residence: {
        type: String,
        required: 'Please provide your residence'
    },
    driving_license: {
        type: String,
        required: 'Please provide your Driver license Number'
    },
    date_of_birth: {
        type: Date,
        default: Date.now
    },
    employee_type: {
        type: String,
        required: 'Please select the role(Driver or conductor)'
    },
    past_incidences: [{
        type: String
    }],
    imageupload: String
});

module.exports = mongoose.model('Employee', employeeSchema)