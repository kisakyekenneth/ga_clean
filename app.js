//Imports
const express = require("express");

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
  res.render("login");
});

app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});
