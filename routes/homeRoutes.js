const express = require('express');
const route = express.Router();

route.get("/", (req, res) => {
    res.render("login", {
        title: "User Login and Register"
    });
});

module.exports = route;