const express = require("express");
const route = express.Router();
const multer = require('multer');

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

route.post("/", upload.single("imageupload"), (req, res) => {
  try {
    console.log(req.file);
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});

module.exports = route;