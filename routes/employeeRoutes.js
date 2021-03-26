const express = require("express");
const route = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');


const Employee = require('../models/EmployeeRegist');

route.get("/", (req, res) => {
  res.render("createEmployee", {
    title: "Employee Registration"
  });
});

// image upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
var upload = multer({
  storage: storage
});

route.post('/', upload.single('imageupload'), async (req, res) => {
  try {
    const employee = new Employee(req.body);
    employee.imageupload = req.file.path;
    employee.save()
    res.redirect('/employee/list')
  } catch (error) {
    console.log(error)
    res.send('Sorry! Something went wrong.');
  }
})

route.get("/list", async (req, res) => {
  try {
    // find all the data in the Employee collection
    const employeeDetails = await Employee.find();
    res.render('employeeList', {
      employees: employeeDetails,
      title: 'Employee List'
    })
  } catch (err) {
    res.send('Failed to retrive employee details');
  }
});

module.exports = route;