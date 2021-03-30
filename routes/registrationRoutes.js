const express = require("express");
const mongoose = require("mongoose");
require("../models/users");
const User = mongoose.model("User");

const route = express.Router();

//Register a user, using the passport method register()
route.post("/", async (req, res) => {
    try {
        const registrationDetails = new User(req.body);
        await User.register(registrationDetails, req.body.password, err => {
            if (err) {
                throw err;
            }
            res.redirect("/");
        });
    } catch (error) {
        res.status(400).send("Sorry! Something went wrong.");
        console.log(error);
    }
});

module.exports = route;