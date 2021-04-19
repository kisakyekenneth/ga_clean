const express = require("express");
const route = express.Router();

const CustomerOrders = require('../models/customerOrders');
const TruckRegister = require('../models/truckRegister');

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

      recordCalls.status = 'no_truck';
      recordCalls.progress = 'created'

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

//Delete customer calls for service
route.post("/delete", async (req, res) => {
  if (req.session.user) {
    try {
      await CustomerOrders.deleteOne({
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

//Assign truck.
route.get("/assign/:id", async (req, res) => {
  if (req.session.user) {
    try {
      
      const orders = await CustomerOrders.findOne({
        _id: req.params.id
      });

      const truckRegister = await TruckRegister.find({ status: "available" })
      
      res.render("assignTrucks", {
        customersOrders: orders,
        trucks: truckRegister
      });
    } catch (err) {
      res.status(400).send("Unable to find item in the database");
    }
  } else {
    res.redirect("/");
  }
});

//Assign truck.
route.post("/assign", async (req, res) => {
  if (req.session.user) {
    try {
     //Update the status of order, update driver wage, conductor wage 
      await CustomerOrders.findOneAndUpdate({
        _id: req.query.id 
      }, { $set: { 'status': req.body.truck_code, 'progress': 'in_progress' } });

      const updateTruck = await TruckRegister.findOneAndUpdate({
        truckCode: req.body.truck_code
      }, { $set: { 'status': 'Not_available' } });
      
      console.log(updateTruck);
      res.redirect('/customer')     

      // const truckRegister = await TruckRegister.find({ status: "available" })
      
      // res.render("assignTrucks", {
      //   customersOrders: orders,
      //   trucks: truckRegister
      // });
    } catch (err) {
      res.status(400).send("Unable to find item in the database");
    }
  } else {
    res.redirect("/");
  }
});

//Go to thr truvk earnings and update the earnings
//Update the driver pay once truck is assigned
//Retrieve service payments from the DB, compute first
//Update customer orders so that payment is got from the order ,made
module.exports = route;