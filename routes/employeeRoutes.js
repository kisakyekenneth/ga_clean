const express = require("express");
const route = express.Router();
const multer = require("multer");
var moment = require("moment");

const Employee = require("../models/EmployeeRegist");

route.get("/", (req, res) => {
  if (req.session.user) {
    res.render("createEmployee", {
      title: "Employee Registration"
    });
  } else {
    res.redirect("/");
  }
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

//Register Employee
route.post("/", upload.single("imageupload"), async (req, res) => {
  if (req.session.user) {
    try {
      const employee = new Employee(req.body);
      employee.imageupload = req.file.path;
      employee.telephone =
        req.body.tel_no_1 + req.body.tel_no_2 + req.body.tel_no_3;
      var fomatted_date = moment(req.body.date_of_birth).format("DD/MM/YYYY");

      employee.date_of_birth = fomatted_date;
      employee.save();
      res.redirect("/employee/list");
    } catch (error) {
      console.log(error);
      res.send("Sorry! Something went wrong.");
    }
  } else {
    res.redirect("/");
  }
});

// Find all the data in the Employee collection.
route.get("/list", async (req, res) => {
  if (req.session.user) {
    try {
      const employeeDetails = await Employee.find();

      res.render("employee_list", {
        employees: employeeDetails,
        title: "Employee List"
      });
    } catch (err) {
      res.send("Failed to retrive employee details");
    }
  } else {
    res.redirect("/");
  }
});

//Delete an employee record from the database
route.post("/delete", async (req, res) => {
  if (req.session.user) {
    try {
      await Employee.deleteOne({
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

//Given employee id, Retrieve Employee details to be updated.
route.get("/update/:id", async (req, res) => {
  if (req.session.user) {
    try {
      const updateEmployee = await Employee.findOne({
        _id: req.params.id
      });
      res.render("updateEmployee", {
        employee: updateEmployee
      });
    } catch (err) {
      res.status(400).send("Unable to find item in the database");
    }
  } else {
    res.redirect("/");
  }
});

// Save the updated employee information
route.post("/update", async (req, res) => {
  if (req.session.user) {
    try {
      await Employee.findOneAndUpdate(
        {
          _id: req.query.id
        },
        req.body
      );
      res.redirect("/employee/list");
    } catch (err) {
      res.status(404).send("Unable to update item in the database");
    }
    script((src = "/js/loginRegValidate.js"));
  } else {
    res.redirect("/");
  }
});

//Search for employee details
route.post("/search", async (req, res) => {
  if (req.session.user) {
    try {
      const employee_filter = await Employee.find({
        employee_type: req.body.employee_type
      });
      // res.send(employee_filter);
      res.render("employee_list", {
        employees: employee_filter,
        title: "Employee List"
      });
    } catch (err) {
      res.status(404).send("Unable to update item in the database");
    }
  } else {
    res.redirect("/");
  }
});

module.exports = route;
