const User = require("./../../db/models/userSchema");

const signup = async (req, res) => {
  let foundUser = await User.findOne({
    email: req.body.email,
  });

  console.log(foundUser);
  if (foundUser) {
    res.status(200).json("Email is already exists");
  } else {
    const newSomeData = new User(req.body);
    newSomeData.save().then((result) => {
      res.status(201).json(result);
    });
  }
};

const login = async (req, res) => {
  let foundUser = await User.findOne({
    email: req.body.email,
  });
  if (!foundUser) {
    return res.status(200).json("Email or Password Not corect");
  } else if (
    foundUser.email == req.body.email &&
    foundUser.password == req.body.password
  ) {
    return res.status(201).json(foundUser);
  } else {
    return res.status(200).json("Email or Password Not corect");
  }
};

module.exports = { signup, login };
