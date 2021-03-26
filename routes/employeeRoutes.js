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

route.post('/', upload.single('imageupload'), (req, res) => {
  const employee = new Employee(req.body);
  employee.imageupload = req.file.path;
  employee.save()
    .then(() => {
      res.send('Thank you for your registration!')
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    })
})

module.exports = route;