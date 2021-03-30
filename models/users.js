const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    user_id: {
        type: String
    },
    username: {
        type: String,
        required: 'Please Enter UserName'
    },
    email: {
        type: String,
        unique: true,
        required: 'Please Enter User Email'
    }
})

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});
const User = mongoose.model('User', userSchema)

module.exports = User;

//Removing Password from the Schema not sending it to the database to prevent visibility
// password: {
//     type: String,
//     required: 'Please provide the password'
// },