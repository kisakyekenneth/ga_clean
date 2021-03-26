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
    onboard_date: {
        type: Date,
        default: Date.now
    },
    employee_type: {
        type: String,
        required: 'Please select the driver type'
    },
    imageupload: String
});

module.exports = mongoose.model('Employee', employeeSchema)