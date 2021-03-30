const express = require("express");
const mongoose = require("mongoose");
require("../models/users");
const User = mongoose.model("User");

const passport = require("passport");

const route = express.Router();


/**
 * Logout
 * Check if the session exists then destroy the session.
 * Have a callback fuction incase error is encoutered during the session destroy.
 */
route.get("/", (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(400).send("Unable to log out");
            } else {
                req.logout();
                res.redirect("/");
            }
        });
    }
});

module.exports = route;