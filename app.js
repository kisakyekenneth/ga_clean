//Imports
const express = require("express");
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
require("dotenv").config(); //Required to work with .env file

//Instantiation
const app = express();

//Middlewares
app.use(express.static("public")); //Serve static files like css, js.
app.use(express.static("files"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//Route middlewares
const employeeRoute = require('./routes/employeeRoutes');
const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');


//Set view Enginee
app.set("view engine", "pug");
app.set("views", "./views");

//        Routes 
app.use("/employeeRegister", employeeRoute);
app.use("/", homeRoutes);
app.use("/users", userRoutes);
app.use("/customer", customerRoutes);


//Mongo database connection using Mongoose
mongoose.connect(
  process.env.DB_URL, {
    useNewUrlParser: true
  },
  () => {
    console.log("Connected to the DB");
  }
);


app.listen(process.env.PORT, () => {
  console.log("Listening on port ", process.env.PORT);
});