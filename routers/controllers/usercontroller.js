const User = require("./../../db/models/userSchema");

const signup = (req, res) => {
  const newSomeData = new User(req.body);
  newSomeData
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { signup };