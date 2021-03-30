const express = require("express");
const mongoose = require('mongoose');
require('../models/users');
const User = mongoose.model('User')

const passport = require('passport');


const route = express.Router();
const app = express();
app.use(express.urlencoded({
    extended: true
}));


// checks username and password using passport
route.post('/login', passport.authenticate('local', {
    failureRedirect: '/'
}), (req, res) => {
    req.session.user = req.user;
    res.redirect('/customer');
})

//Register a user
route.post("/", async (req, res) => {
    try {

        // let passwd = await bcrypt.hash(req.body.password, 8)
        // let customer_name = req.body.username;

        // const user_data = new User({
        //     username: req.body.username,
        //     email: req.body.email,
        //     password: req.body.password
        // });

        // await user_data.save(() => {
        //     //res.send("Successful")
        //     res.redirect('/')
        // })

        const registrationDetails = new User(req.body);
        await User.register(registrationDetails, req.body.password, (err) => {
            if (err) {
                throw err
            }
            res.redirect('/')
        });
    } catch (error) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(error)
    }
});


route.get("*", (req, res) => {
    res.send("Please check your specified path");
});


module.exports = route;