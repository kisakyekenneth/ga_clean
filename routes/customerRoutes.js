const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.render("customerList");
});

route.get("/calls", (req, res) => {
    res.render("customerCalls", {
        title: "Record customer calls"
    });
});



module.exports = route;