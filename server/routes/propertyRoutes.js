var express = require("express");
var router = express.Router();
const Property = require("../database/models/property");

// add a property
router.post("/", async (req, res) => {
  try {
    const property = new Property({
      ...req.body, // Destructure all fields from req.body
    });
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
    const properties = await Property.find();
    res.send(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).send({ error: "Error fetching properties" });
  }
});

module.exports = router;
