"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const [formData, setFormData] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.role) {
      alert("Please fill all fields");
      return;
    }

    console.log("Login Data:", formData);

    // Simulated login redirect
    if (formData.role === "customer") {
      router.push("/dashboard/customer");
    } else if (formData.role === "provider") {
      router.push("/dashboard/provider");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to RideTrix
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

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
            Login
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?
          <a href="/signup" className="text-blue-600 ml-1">
            Sign Up
          </a>
        </p>
      </div>

    </div>
  );
}
