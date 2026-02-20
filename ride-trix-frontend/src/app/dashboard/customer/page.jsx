"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bike, LayoutDashboard, Moon, Sun, LogOut, User } from "lucide-react";

export default function CustomerDashboard() {

  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "customer") {
      router.push("/login");
    }
  }, []);

  // Animated counters
  useEffect(() => {
    let a = 0, b = 0, c = 0;

    const interval = setInterval(() => {
      if (a < 3) { a++; setCount1(a); }
      if (b < 1) { b++; setCount2(b); }
      if (c < 2) { c++; setCount3(c); }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.push("/login");
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-100 via-white to-purple-100 text-black"} min-h-screen flex`}>

      {/* Sidebar */}
      <div className="w-64 backdrop-blur-lg bg-white/40 dark:bg-gray-800/60 border-r border-white/30 p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-10">RideTrix</h2>

        <div className="space-y-6">
          <div className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
            <LayoutDashboard size={20} />
            Dashboard
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
            <Bike size={20} />
            My Bookings
          </div>

          <div
            onClick={handleLogout}
            className="flex items-center gap-3 cursor-pointer hover:text-red-500"
          >
            <LogOut size={20} />
            Logout
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <div className="flex items-center gap-6">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-white shadow-md"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <User size={18} />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/60 rounded-3xl p-8 shadow-lg hover:scale-105 transition">
            <p className="text-lg">Total Bookings</p>
            <h2 className="text-4xl font-bold mt-2">{count1}</h2>
          </div>

          <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/60 rounded-3xl p-8 shadow-lg hover:scale-105 transition">
            <p className="text-lg">Active Rentals</p>
            <h2 className="text-4xl font-bold mt-2">{count2}</h2>
          </div>

          <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/60 rounded-3xl p-8 shadow-lg hover:scale-105 transition">
            <p className="text-lg">Completed Trips</p>
            <h2 className="text-4xl font-bold mt-2">{count3}</h2>
          </div>
        </div>

        {/* Floating Bike Cards */}
        <h2 className="text-3xl font-bold mb-6">Available Bikes</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map((bike) => (
            <div
              key={bike}
              className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 rounded-3xl p-8 shadow-xl hover:-translate-y-3 transition duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mb-6 flex items-center justify-center">
                Bike Image
              </div>

              <h3 className="text-2xl font-bold">
                Yamaha R15
              </h3>
              <p className="mt-2 text-lg">
                ₹500 / day
              </p>

              <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl">
                Book Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}