const express = require("express");
const db_model = require('../models/users');

const route = express.Router();
const app = express();
app.use(express.urlencoded({
    extended: true
}));


route.post("/login", async (req, res) => {
    //Login a registered user
    try {

        const email = req.body.email;
        const password = req.body.password;


        const find_user = await db_model.findOne({
            email: email
        })
        if (!find_user) {
            res.json({
                message: "User EMail not found please verify and try again"
            });
        }
        console.log(user)
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
        res.json(req.body)
        let passwd = await bcrypt.hash(req.body.password, 8)
        let customer_name = req.body.username;
        const user_data = new db_model({
            username: req.body.username,
            email: req.body.email,
            password: passwd
        });
        console.log(saved_userData)
        const saved_userData = await user_data.save();
        console.log(saved_userData)

        //res.redirect("/customer");
    } catch (error) {
        res.json({
            message: "Failure check the connection"
        });
    }
});


route.get("*", (req, res) => {
    res.send("Please check your specified path");
});




module.exports = route;