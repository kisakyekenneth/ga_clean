const express = require("express");
const user_model = require("../models/users");

const route = express.Router();

route.get("/", (req, res) => {
    res.render("customerList", {
        title: "Customer List"
    });
});



module.exports = route;