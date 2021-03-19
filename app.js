//Imports
const express = require("express");

//Instantiation
const app = express();

//Middlewares
app.use('/static', express.static("public")); //Serve static files like css, js.
app.use(express.static("files"));

//Set view Enginee
app.set("view engine", "pug");
app.set("views", "./views");

//Routes
app.get("/", (req, res) => {
  res.render("login");
});

app.get("/home", (req, res) => {
  res.render("homepage");
})

app.listen(process.env.HOST_PORT, () => {
  console.log("Listening on port ", process.env.HOST_PORT);
});