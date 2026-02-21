const express = require("express");
const streamifier = require("streamifier");
const cloudinary = require("cloudinary").v2;
const upload = require("../middleware/upload");
const Bike = require("../models/Bike");
require("dotenv").config();


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const router = express.Router();

// Upload single file to Cloudinary
const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "ridetrix" },
      (error, result) => {
        if (result) resolve(result.secure_url);
        else reject(error);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

router.post(
  "/add",
  upload.fields([
    { name: "rc", maxCount: 1 },
    { name: "insurance", maxCount: 1 },
    { name: "images", maxCount: 5 },
  ]),
  async (req, res) => {
    try {
       console.log("BODY:", req.body);
       console.log("FILES:", req.files);
      const {
        bikeName,
        brand,
        model,
        year,
        description,
        pricePerDay,
        securityDeposit,
        city,
        address,
      } = req.body;

      let rcUrl = "";
      let insuranceUrl = "";
      let imageUrls = [];

      if (req.files.rc) {
        rcUrl = await uploadToCloudinary(req.files.rc[0].buffer);
      }

      if (req.files.insurance) {
        insuranceUrl = await uploadToCloudinary(req.files.insurance[0].buffer);
      }

      if (req.files.images) {
        for (const file of req.files.images) {
          const imageUrl = await uploadToCloudinary(file.buffer);
          imageUrls.push(imageUrl);
        }
      }

      const newBike = new Bike({
        bikeName,
        brand,
        model,
        year,
        description,
        pricePerDay,
        securityDeposit,
        city,
        address,
        rcUrl,
        insuranceUrl,
        imageUrls,
      });

      await newBike.save();

      res.status(201).json({ message: "Bike added successfully" });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Upload failed" });
    }
  }
);

module.exports = router;