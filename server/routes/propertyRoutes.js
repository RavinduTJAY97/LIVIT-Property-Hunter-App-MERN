var express = require("express");
var router = express.Router();
const Property = require("../database/models/property");

// add a property
router.post("/", async (req, res) => {
  try {
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
    const { page = 1, limit = 4, status, propertyType, search } = req.query;
    const skip = (page - 1) * limit;
    let query = {};

    if (status) {
      query.status = status;
    }

    if (propertyType) {
      query.propertyType = propertyType;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    const [properties, total] = await Promise.all([
      Property.find(query).skip(skip).limit(limit),
      Property.countDocuments(query),
    ]);

    res.send({ properties, total });
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).send({ error: "Error fetching properties" });
  }
});

// get property by id
router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).send({ error: "Property not found" });
    }
    res.send(property);
  } catch (error) {
    console.error("Error fetching property:", error);
    res.status(500).send({ error: "Error fetching property" });
  }
});

// update property
router.put("/:id", async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!property) {
      return res.status(404).send({ error: "Property not found" });
    }
    res.send(property);
  } catch (error) {
    console.error("Error updating property:", error);
    res.status(500).send({ error: "Error updating property" });
  }
});

// delete property
router.delete("/:id", async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).send({ error: "Property not found" });
    }
    res.send(property);
  } catch (error) {
    console.error("Error deleting property:", error);
    res.status(500).send({ error: "Error deleting property" });
  }
});

module.exports = router;
