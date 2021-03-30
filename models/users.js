const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    user_id: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});
const User = mongoose.model('User', userSchema)

module.exports = User;