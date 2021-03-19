//Imports
const express = require("express");
require("dotenv").config(); //Required to work with .env file

//Instantiation
const app = express();

//Middlewares
app.use(express.static("public")); //Serve static files like css, js.
app.use(express.static("files"));

//Set view Enginee
app.set("view engine", "pug");
app.set("views", "./views");

//Routes
app.get("/", (req, res) => {
  res.render("login", { title: "Login" }); //Dynamically passing the page title as object
});

app.get("/home", (req, res) => {
  res.render("homepage", { title: "createEmployee" });
});

app.listen(process.env.HOST_PORT, () => {
  console.log("Listening on port ", process.env.HOST_PORT);
});
