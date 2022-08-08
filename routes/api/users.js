const express = require("express");
const router = express.Router();

// User Model
const User = require("../../models/User");

router.get("/:userId", function (req, res, next) {
  User.find({ auth: req.params.userId })
    .then((user) => {
      res.send(user);
    })
    .catch((error) => res.status(404));
});

// @route POST api/users
// @desc Create a User
// @access Public
router.post("/", function (req, res, next) {
  const newUser = new User({
    auth: req.body.auth,
    name_first: req.body.name_first,
    name_last: req.body.name_last,
    email: req.body.email,
    register_date: req.body.register_date,
  });

  newUser
    .save()
    .then((user) => res.send(user))
    .catch((error) => console.error(error));
});

module.exports = router;
