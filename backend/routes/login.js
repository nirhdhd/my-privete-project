const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log("from server:", email, password);
  //res.set("Content-Type", "text/html");

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

module.exports = router;
