"use client";
import { useRouter } from "next/navigation";


import { useState } from "react";

export default function Signup() {
    const router = useRouter();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.password || !formData.role) {
    alert("Please fill all fields");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    alert("Signup successful 🎉");

    if (formData.role === "customer") {
      router.push("/dashboard/customer");
    } else {
      router.push("/dashboard/provider");
    }

  } catch (error) {
    console.error("Signup Error:", error);
    alert("Server error. Please try again.");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Your RideTrix Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
            onChange={handleChange}
          />

          <select
            name="role"
            className="w-full px-4 py-2 border rounded-lg"
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="customer">Customer</option>
            <option value="provider">Provider</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>

        </form>

      </div>

    </div>
  );
}
