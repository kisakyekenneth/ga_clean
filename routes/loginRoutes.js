const express = require("express");
const mongoose = require("mongoose");
require("../models/users");
const User = mongoose.model("User");

const passport = require("passport");

const route = express.Router();


// checks username and password using passport
route.post(
    "/",
    passport.authenticate("local", {
        failureRedirect: "/"
    }),
    (req, res) => {
        req.session.user = req.user;
        res.redirect("/customer");
    }
);


module.exports = route;