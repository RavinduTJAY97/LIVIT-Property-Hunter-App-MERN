var express = require("express");
var router = express.Router();
const User = require("../database/models/user");
const bcrypt = require("bcrypt");

// add a user
router.post("/", async (req, res) => {
  //bcrypt hashing
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(req.body.password, saltRounds);

  try {
    const user = new User({
      ...req.body,
      password: hashPassword,
    });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    // check if the error is a duplicate key error
    if (error.code === 11000 && error.keyValue && error.keyValue.email) {
      res.status(400).json({ error: "Email already exists" });
    } else {
      res.status(500).json(error);
    }
  }
});

module.exports = router;
