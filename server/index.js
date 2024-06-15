const express = require("express");
const connectDB = require("./database/connect");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const propertyRoutes = require("./routes/propertyRoutes");

app.use(bodyParser.json());

// Connect to MongoDB
connectDB(process.env.MONGODB_CONNECTION);

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

// property routes
app.use("/property", propertyRoutes);
