const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Please enter the name'
    },
    email: {
        type: String,
        required: 'Please provide the email address',
        unique: true
    },
    password: {
        type: String,
        required: 'Please enter a password',

    }
});

module.export = mongoose.model('UserData', userSchema)