const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.render("customerList", {
        title: "Customer List"
    });
});

route.get("/recordCalls", (req, res) => {
    res.render("customerCalls", {
        title: "Record customer calls"
    });
});



module.exports = route;