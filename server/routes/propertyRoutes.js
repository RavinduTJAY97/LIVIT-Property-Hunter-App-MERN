var express = require("express");
var router = express.Router();
const Property = require("../database/models/property");

// add a property
router.post("/", async (req, res) => {
  try {
    console.log("request", req.body);
    const property = new Property({
      ...req.body, // Destructure all fields from req.body
    });
    property.author = "60d0fe4f5311236168a109ca";
    await property.save();
    res.status(201).send(property);
  } catch (error) {
    console.error("Error saving property:", error);

    if (error.name === "ValidationError") {
      return res.status(400).send({ error: error.message });
    }
    res.status(500).send({ error: "Error saving property" });
  }
});

// get all properties
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 4 } = req.query;
    const skip = (page - 1) * limit;

    const [properties, total] = await Promise.all([
      Property.find().skip(skip).limit(Number(limit)),
      Property.countDocuments(),
    ]);

    res.send({ properties: properties, total });
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).send({ error: "Error fetching properties" });
  }
});

module.exports = router;
