//Imports
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config(); //Required to work with .env file

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
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

//Set view Enginee
app.set("view engine", "pug");
app.set("views", "./views");

//        Routes
app.use("/", homeRoutes);
app.use("/users", userRoutes);
app.use("/employeeRegister", employeeRoute);
app.use("/customer", customerRoutes);

//Non existing routes
app.get("*", (req, res) => {
  res.send("Error Page, route doesnot exist")
})

//Mongo database connection using Mongoose
// mongoose.connect(
//   process.env.DB_URL, {
//     useNewUrlParser: true
//   },
//   () => {
//     console.log("Connected to the DB");
//   }
// );

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