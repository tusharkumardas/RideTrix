"use client";

import { useState } from "react";

export default function AddBike() {

  const [formData, setFormData] = useState({
    bikeName: "",
    brand: "",
    model: "",
    year: "",
    description: "",
    pricePerDay: "",
    securityDeposit: "",
    city: "",
    address: "",
    rc: null,
    insurance: null,
    images: []
  });

  const handleChange = (e) => {
  const { name, value, files } = e.target;

  if (files) {
    if (name === "images") {
      setFormData((prev) => ({
        ...prev,
        images: Array.from(files),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = new FormData();

  // Append text fields
  form.append("bikeName", formData.bikeName);
  form.append("brand", formData.brand);
  form.append("model", formData.model);
  form.append("year", formData.year);
  form.append("description", formData.description);
  form.append("pricePerDay", formData.pricePerDay);
  form.append("securityDeposit", formData.securityDeposit);
  form.append("city", formData.city);
  form.append("address", formData.address);

  // Append single files
  if (formData.rc) form.append("rc", formData.rc);
  if (formData.insurance) form.append("insurance", formData.insurance);

  // Append multiple images
  formData.images.forEach((file) => {
    form.append("images", file);
  });

  try {
    const response = await fetch("http://localhost:5000/api/bikes/add", {
      method: "POST",
      body: form,
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    alert("Bike uploaded successfully 🚀");

  } catch (error) {
    console.error("Upload Error:", error);
    alert("Upload failed");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-white to-blue-200 flex items-center justify-center p-10">

      <div className="w-full max-w-4xl backdrop-blur-xl bg-white/80 border border-gray-300 shadow-2xl rounded-3xl p-10">

        <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900">
          Add New Bike 🚀
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="bikeName"
              placeholder="Bike Name"
              className="p-4 rounded-xl border border-gray-600 focus:border-black focus:ring-2 focus:ring-black outline-none text-lg placeholder:text-gray-600 text-gray-900"
              onChange={handleChange}
            />

            <input
              type="text"
              name="brand"
              placeholder="Brand"
              className="p-4 rounded-xl border border-gray-600 focus:border-black focus:ring-2 focus:ring-black outline-none text-lg placeholder:text-gray-600 text-gray-900"
              onChange={handleChange}
            />

            <input
              type="text"
              name="model"
              placeholder="Model"
              className="p-4 rounded-xl border border-gray-600 focus:border-black focus:ring-2 focus:ring-black outline-none text-lg placeholder:text-gray-600 text-gray-900"
              onChange={handleChange}
            />

            <input
              type="number"
              name="year"
              placeholder="Year"
              className="p-4 rounded-xl border border-gray-600 focus:border-black focus:ring-2 focus:ring-black outline-none text-lg placeholder:text-gray-600 text-gray-900"
              onChange={handleChange}
            />
          </div>

          <textarea
            name="description"
            placeholder="Bike Description"
            className="w-full p-4 rounded-xl border border-gray-600 focus:border-black focus:ring-2 focus:ring-black outline-none text-lg placeholder:text-gray-600 text-gray-900"
            rows="4"
            onChange={handleChange}
          />

          {/* Pricing */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="number"
              name="pricePerDay"
              placeholder="Price Per Day (₹)"
              className="p-4 rounded-xl border border-gray-600 focus:border-black focus:ring-2 focus:ring-black outline-none text-lg placeholder:text-gray-600 text-gray-900"
              onChange={handleChange}
            />

            <input
              type="number"
              name="securityDeposit"
              placeholder="Security Deposit (₹)"
              className="p-4 rounded-xl border border-gray-600 focus:border-black focus:ring-2 focus:ring-black outline-none text-lg placeholder:text-gray-600 text-gray-900"
              onChange={handleChange}
            />
          </div>

          {/* Location */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="p-4 rounded-xl border border-gray-600 focus:border-black focus:ring-2 focus:ring-black outline-none text-lg placeholder:text-gray-600 text-gray-900"
              onChange={handleChange}
            />

            <input
              type="text"
              name="address"
              placeholder="Exact Address"
              className="p-4 rounded-xl border border-gray-600 focus:border-black focus:ring-2 focus:ring-black outline-none text-lg placeholder:text-gray-600 text-gray-900"
              onChange={handleChange}
            />
          </div>

          {/* Documents */}
          <div className="space-y-6">

            <div>
              <label className="block mb-2 font-semibold text-lg text-gray-800">
                Upload RC
              </label>
              <input
                type="file"
                name="rc"
                className="w-full p-3 rounded-xl border border-gray-600 text-gray-800"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-lg text-gray-800">
                Upload Insurance
              </label>
              <input
                type="file"
                name="insurance"
                className="w-full p-3 rounded-xl border border-gray-600 text-gray-800"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-lg text-gray-800">
                Upload Bike Images
              </label>
              <input
                type="file"
                name="images"
                multiple
                className="w-full p-3 rounded-xl border border-gray-600 text-gray-800"
                onChange={handleChange}
              />
            </div>

          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-900 text-white text-xl py-4 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          >
            Submit Bike
          </button>

        </form>

      </div>
    </div>
  );
}