const mongoose = require('mongoose');

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

// userSchema.pre('save', async function (next) {
//     //Hash the password before saving the model
//     const user = this;
//     if (user.isModified('password')) {
//         user.password = await bcrypt.hash(user.password, 8);
//     }
//     next();
// })

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({
        email
    })
    if (!user) {
        throw new Error({
            error: 'Invalid login credentials'
        })
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error({
            error: 'Invalid login credentials'
        })
    }
    return user;
}

const User = mongoose.model('User', userSchema)

module.exports = User;