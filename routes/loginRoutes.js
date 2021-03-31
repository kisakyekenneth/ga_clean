const express = require("express");
const mongoose = require("mongoose");
require("../models/users");
const User = mongoose.model("User");

const passport = require("passport");

const route = express.Router();

var msg = "failed to login"


// Checks username and password using passport. FailureRedirect:'back' makes user stay on the same page
route.post(
    "/",
    passport.authenticate("local", {
        failureRedirect: "back",
        failureFlash: 'Invalid userEmail or password.',
        successFlash: 'Welcome!'
    }),
    (req, res) => {

        req.session.user = req.user;
        res.redirect("/customer");
    }
);

//  failureRedirect: "/?success=true&message=Logged In Successfully"
module.exports = route;