
const express = require("express");
const {signup}=require("../controllers/usercontroller")

const userroute = express.Router()

userroute.post("/signup", signup);


module.exports = userroute;