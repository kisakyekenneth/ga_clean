//Imports
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config(); //Required to work with .env file
//For authentication
const passport = require('passport');
const userModel = require('./models/users');

//Connect-flash
const flash = require('connect-flash');

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
var registrationRoute = require("./routes/registrationRoutes");
var customerRoutes = require("./routes/customerRoutes");
var logoutRoutes = require('./routes/logoutRoutes');
var loginRoutes = require('./routes/loginRoutes');
var conductorRoutes = require('./routes/conductorRoutes');
var truckRoutes = require('./routes/truckRoutes');

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

// Flash messages middleware
app.use(flash())

//Passport and Express-session to create session on success login
app.use(expressSession);
app.use(passport.initialize()); //initialize it along with its session authentication middleware,
app.use(passport.session());

//Passport local authentication
passport.use(userModel.createStrategy());

//Gloabl variables for Passport
app.use(function (req, res, next) {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

//Set view Enginee
app.set("view engine", "pug");
app.set("views", "./views");

//        Routes
app.use("/", homeRoutes);
app.use("/login", loginRoutes);
app.use("/logout", logoutRoutes);
app.use("/registerUser", registrationRoute);
app.use("/employee", employeeRoute);
app.use("/customer", customerRoutes);
app.use("/conductor", conductorRoutes);
app.use("/truck", truckRoutes);

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