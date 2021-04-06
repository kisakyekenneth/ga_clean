const express = require("express");
const route = express.Router();

const TruckRegister = require('../models/truckRegister');
const Employee = require("../models/EmployeeRegist");

route.get("/", async (req, res) => {
    if (req.session.user) {
        try {
            var driver_status = "not_assigned";
            const employee_filter = await Employee.find({
                status_assign: driver_status
            });

            res.render("registerTruck", {
                drivers: employee_filter,
                title: "Register truck"
            });
        } catch (err) {
            res.send("Failed to Register");
        }
    } else {
        res.redirect('/')
    }
});

route.get("/list", async (req, res) => {
    if (req.session.user) {
        try {

            const trucks = await TruckRegister.find();

            res.render("truckList", {
                trucks_details: trucks,
                title: "List of truck info"
            });
        } catch (err) {
            res.send("Failed to retrive Truck Details");
        }
    } else {
        res.redirect('/')
    }
});


route.post("/", async (req, res) => {
    if (req.session.user) {
        try {
            const truckDetails = new TruckRegister(req.body)
            //Get details of the selected driver id
            const employeeName = await Employee.findOne({
                _id: req.body.driverName
            });

            //Passing driverName associated with the id sent.
            const truck_assignment_state = "available"
            truckDetails.driverName = employeeName.userName
            truckDetails.status = truck_assignment_state

            await Employee.findOneAndUpdate({
                _id: req.body.driverName
            }, {
                $set: {
                    'status_assign': 'assigned'
                }
            });

            truckDetails.save();
            res.redirect("/truck/list")
        } catch (err) {
            res.send("Failed to Save Truck Details");
        }
    } else {
        res.redirect('/')
    }
});

//Delete truck records from DB.
route.post("/delete", async (req, res) => {
    if (req.session.user) {
        try {
            await TruckRegister.deleteOne({
                _id: req.body.id
            });
            res.redirect("back");
        } catch (err) {
            res.status(400).send("Unable to delete item in the database");
        }
    } else {
        res.redirect("/");
    }
});

module.exports = route