const jwt = require("jsonwebtoken");
const User = require("../database/models/user");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const authenticate = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    console.log("token not found");
    return res.status(401).json({ message: "Authentication required" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("decoded", decoded);
    const user = await User.findOne({ _id: decoded._id });

    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { authenticate };
