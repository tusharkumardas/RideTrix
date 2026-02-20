const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// Connect to MongoDB FIRST
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000
})
.then(() => {
  console.log("MongoDB Connected ✅");

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

})
.catch((err) => {
  console.log("MongoDB Connection Error ❌");
  console.log(err.message);
});