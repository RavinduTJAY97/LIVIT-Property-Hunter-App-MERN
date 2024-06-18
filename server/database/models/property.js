const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  numberOfBathrooms: { type: Number, required: true },
  numberOfBedrooms: { type: Number, required: true },
  numberOfParkings: { type: Number, required: true },
  description: { type: String, required: true },
  contact: { type: String, required: true },
  propertyType: { type: String, required: true },
  status: { type: String, required: true },
  mainImageUrl: { type: String },
  imageUrls: { type: [String] },
  createdAt: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;
