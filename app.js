//Imports
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config(); //Required to work with .env file
//For authentication
const passport = require('passport');
const userModel = require('./models/users');

//require express session
const expressSession = require('express-session')({
  secret: 'HolyWeek',
  resave: false,
  saveUninitialized: false
});
//require('../models/EmployeeRegist');

//Route middlewares
var employeeRoute = require("./routes/employeeRoutes");
var homeRoutes = require("./routes/homeRoutes");
var userRoutes = require("./routes/userRoutes");
var customerRoutes = require("./routes/customerRoutes");

//Instantiation
const app = express();

//Middlewares
app.use(express.static("public")); //Serve static files like css, js.
app.use(express.static("files"));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
//Passport
app.use(passport.initialize()); //initialize it along with its session authentication middleware,
app.use(passport.session());

//Passport local authentication
passport.use(userModel.createStrategy());

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

//Set view Enginee
app.set("view engine", "pug");
app.set("views", "./views");

//        Routes
app.use("/", homeRoutes);
app.use("/users", userRoutes);
app.use("/employee", employeeRoute);
app.use("/customer", customerRoutes);

//Non existing routes
app.get("*", (req, res) => {
  res.send("Error Page, route doesnot exist")
})

//Database Connection
mongoose.connect(process.env.LOCAL_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

app.listen(process.env.PORT, () => {
  console.log("Listening on port ", process.env.PORT);
});