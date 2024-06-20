var express = require("express");
var router = express.Router();
const User = require("../database/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email" });
    }

    // check if the password is correct
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Credentials not match" });
    }

    // create a token
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1H",
      }
    );
    res.send({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Error logging in" });
  }
});

module.exports = router;
