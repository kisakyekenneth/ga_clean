const express = require('express');
const route = express.Router();

//Home is the login
route.get("/", (req, res) => {

    res.render("login", {
        title: "Register and Login"
    });

});

route.get("/home", (req, res) => {
    if (req.session.user) {
        res.render("customerList", {
            title: "List of customers"
        });
    } else {
        res.redirect('/');
    }
});
module.exports = route;