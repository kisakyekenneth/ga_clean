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
    employee.telephone = req.body.tel_no_1 + req.body.tel_no_2 + req.body.tel_no_3;
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

//delete and employee record from the database
route.post('/delete', async (req, res) => {
  try {
    await Employee.deleteOne({
      _id: req.body.id
    })
    res.redirect('back')
  } catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }
})

//Retrieve Employee details to be updated
route.get('/update/:id', async (req, res) => {
  try {
    const updateEmployee = await Employee.findOne({
      _id: req.params.id
    })
    res.render('updateEmployee', {
      employee: updateEmployee
    })
  } catch (err) {
    res.status(400).send("Unable to find item in the database");
  }
})

// Save the updated employee information
route.post('/update', async (req, res) => {
  try {
    await Employee.findOneAndUpdate({
      _id: req.query.id
    }, req.body)
    res.redirect('/employee');
  } catch (err) {
    res.status(404).send("Unable to update item in the database");
  }
})


module.exports = route;