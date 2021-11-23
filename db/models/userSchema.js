const mongoose = require("mongoose");

const User = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  emial: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  score: { type: Number },
});




module.exports = mongoose.model("User", User);
