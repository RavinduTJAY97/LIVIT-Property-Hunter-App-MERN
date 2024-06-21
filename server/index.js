const express = require("express");
const connectDB = require("./database/connect");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const propertyRoutes = require("./routes/propertyRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
// Connect to MongoDB
connectDB(process.env.MONGODB_CONNECTION);

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

// property routes
app.use("/property", propertyRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
