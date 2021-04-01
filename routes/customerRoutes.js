const express = require("express");
const route = express.Router();

const CustomerOrders = require('../models/customerOrders');

route.get("/", async (req, res) => {
  if (req.session.user) {
    try {
      const customerCalls = await CustomerOrders.find();

      res.render("customerList", {
        customerCall: customerCalls,
        title: "Recorded Customer Calls"
      });
    } catch (err) {
      res.send("Failed to retrive Customer Calls");
    }
  } else {
    res.redirect('/')
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

// Return all Customer Calls.
route.get("/list", async (req, res) => {
  if (req.session.user) {
    try {
      const customerCalls = await CustomerOrders.find();

      res.render("customerList", {
        customerCall: customerCalls,
        title: "Recorded Customer Calls"
      });
    } catch (err) {
      res.send("Failed to retrive Customer Calls");
    }
  } else {
    res.redirect('/')
  }
});


//Record Customer calls for service
route.post("/", async (req, res) => {
  if (req.session.user) {
    try {
      const recordCalls = new CustomerOrders(req.body);
      recordCalls.telephone =
        req.body.tel_no_1 + req.body.tel_no_2 + req.body.tel_no_3;

      recordCalls.save();
      res.redirect("/customer");
    } catch (error) {
      console.log(error);
      res.send("Sorry! Something went wrong.");
    }
  } else {
    res.redirect('/')
  }
});


module.exports = route;