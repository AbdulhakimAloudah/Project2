const mongoose = require("mongoose");

const User = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  score: { type: Number },
});


//dadsfsf/

module.exports = mongoose.model("User", User);
