"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
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

      // 🔥 Store JWT + role
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      alert("Login successful 🎉");

      if (data.role === "customer") {
        router.push("/dashboard/customer");
      } else {
        router.push("/dashboard/provider");
      }

    } catch (error) {
      console.error("Login Error:", error);
      alert("Server error. Please try again.");
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