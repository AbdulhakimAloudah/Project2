
const express = require("express");
const { signup, login } = require("../controllers/usercontroller");

const userroute = express.Router()

userroute.post("/signup", signup);
userroute.post("/login", login);


module.exports = userroute;