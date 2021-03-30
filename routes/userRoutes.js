const express = require("express");
const mongoose = require('mongoose');
require('../models/users');
const User = mongoose.model('User')


const route = express.Router();
const app = express();
app.use(express.urlencoded({
    extended: true
}));


route.post("/login", async (req, res) => {
    //Login a registered user
    try {

        // const email = req.body.email;
        // const password = req.body.password;


        // const find_user = await db_model.findOne({
        //     email: email
        // })
        // if (!find_user) {
        //     res.json({
        //         message: "User EMail not found please verify and try again"
        //     });
        // }
        // console.log(user)
        res.redirect("/customer");

    } catch (error) {
        res.json({
            message: "error"
        });
    }
});

route.post("/", async (req, res) => {
    //register a user
    try {

        // let passwd = await bcrypt.hash(req.body.password, 8)
        // let customer_name = req.body.username;
        const user_data = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        await user_data.save(() => {
            //res.send("Successful")
            res.redirect('/')
        })


        // res.redirect("/customer");
    } catch (error) {
        console.log(error, "Failed to save")
    }
});


route.get("*", (req, res) => {
    res.send("Please check your specified path");
});




module.exports = route;