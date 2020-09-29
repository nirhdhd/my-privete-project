const router = require("express").Router();
let User = require("../models/user.model");

router.route("/login").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log("from server:", email, password);
  User.find({ email: email, password: password })
    .then((user) => {
      //if cant find user...
      if (user.length == 0) res.send(false);
      else {
        res.send(true);
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/register").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
    username: username,
    email: email,
    password: password,
  });

  console.log(username, email, password);

  User.find({ email: email })
    .then((user) => {
      //if cant find user...
      if (user.length == 0) {
        newUser.save().catch((err) => res.status(400).json("Error: " + err));
        res.send(true);
      } else {
        res.send(false);
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
