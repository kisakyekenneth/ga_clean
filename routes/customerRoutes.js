const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  if (req.session.user) {
    res.render("customerList");
  } else {
    res.redirect("/");
  }
});

route.get("/calls", (req, res) => {
  if (req.session.user) {
    res.render("customerCalls", {
      title: "Record customer calls"
    });
  } else {
    res.redirect("/");
  }
});

module.exports = route;
