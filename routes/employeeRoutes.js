const express = require('express');
const route = express.Router();

route.get("/", (req, res) => {
    res.render("createEmployee", {
        title: "Employee Registration"
    });
});

module.exports = route;