const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema(
  {
    bikeName: { type: String, required: true },
    brand: String,
    model: String,
    year: Number,
    description: String,
    pricePerDay: Number,
    securityDeposit: Number,
    city: String,
    address: String,

    rcUrl: String,
    insuranceUrl: String,
    imageUrls: [String],

    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bike", bikeSchema);