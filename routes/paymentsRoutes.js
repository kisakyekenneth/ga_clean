const express = require("express");
const route = express.Router();

const Payments = require('../models/payments');

route.get("/", async (req, res) => {
  if (req.session.user) {
    try {
      res.render("payments");
    } catch (err) {
      res.send("Failed to retrive payments data");
    }
  } else {
    res.redirect('/')
  }
});


route.get("/list", async (req, res) => {
  if (req.session.user) {
    try {
      const payments = await Payments.find();
        console.log(payments)
      res.render("paymentsLists", {
        servicePayments: payments,
        title: "Cost for the services"
      });
    } catch (err) {
      res.send("Failed to retrive Paymetns failed");
    }
  } else {
    res.redirect('/')
  }
});

// Save the updated employee information
route.post("/update", async (req, res) => {
  if (req.session.user) {
    try {
      await Payments.findOneAndUpdate(
        {
          _id: req.query.id
        },
        req.body
      );
      res.redirect("/payments/list");
    } catch (err) {
      res.status(404).send("Unable to update item in the database");
    }
    
  } else {
    res.redirect("/");
  }
});

route.get("/update/:id", async (req, res) => {
  if (req.session.user) {
    try {
      const payments = await Payments.findOne({
        _id: req.params.id
      });
      res.render("updatePayments", {
        servicePayments: payments
      });
    } catch (err) {
      res.status(400).send("Unable to find item in the database");
    }
  } else {
    res.redirect("/");
  }
});


//Record Customer calls for service
route.post("/", async (req, res) => {
  if (req.session.user) {
    try {
      const payments = new Payments(req.body);
      //Passing the subscription fees
      console.log(req.body)
      payments.sewage_subscription = (req.body.sewage_weekily * 24)- req.body.discount_sewage;
      payments.garbage_subscription = (req.body.garbage_weekily * 24)-req.body.discount_garbage;

      payments.save();
      res.redirect("/payments/list");
    } catch (error) {
      console.log(error);
      res.send("Sorry! Something went wrong.");
    }
  } else {
    res.redirect('/')
  }
});

//Delete customer calls for service
route.post("/delete", async (req, res) => {
  if (req.session.user) {
    try {
      await Payments.deleteOne({
        _id: req.body.id
      });
      res.redirect("back");
    } catch (err) {
      res.status(400).send("Unable to delete record in the database");
    }
  } else {
    res.redirect("/");
  }
});


module.exports = route;