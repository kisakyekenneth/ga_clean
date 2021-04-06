const express = require("express");
const route = express.Router();
const multer = require("multer");


const Conductor = require("../models/conductors");

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

//Incase of get request
route.get("/", (req, res) => {
    if (req.session.user) {
        res.render("registerConductor")
    } else {
        res.redirect("/")
    }
})

//Register Conductors
route.post("/", upload.single("imageupload"), async (req, res) => {
    if (req.session.user) {
        try {
            const conductor = new Conductor(req.body);
            conductor.imageupload = req.file.path;
            conductor.save();
            res.redirect("/employee/list");
        } catch (error) {
            console.log(error);
            res.send("Sorry! Something went wrong.");
        }
    } else {
        res.redirect('/')
    }
});

// Find all the data in the Employee collection.
route.get("/list", async (req, res) => {
    if (req.session.user) {
        try {
            const conductorDetails = await Conductor.find();

            res.render("conductorList", {
                conductors: conductorDetails,
                title: "Conductor List"
            });
        } catch (err) {
            res.send("Failed to retrive employee details");
        }
    } else {
        res.redirect('/')
    }
});
module.exports = route;