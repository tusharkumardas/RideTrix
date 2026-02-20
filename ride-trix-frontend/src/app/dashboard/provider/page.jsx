"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LayoutDashboard, Bike, PlusCircle, DollarSign, LogOut, Moon, Sun, User } from "lucide-react";

export default function ProviderDashboard() {

  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  const [totalBikes, setTotalBikes] = useState(0);
  const [activeRentals, setActiveRentals] = useState(0);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "provider") {
      router.push("/login");
    }
  }, []);

  // Animated counters
  useEffect(() => {
    let a = 0, b = 0, c = 0;

    const interval = setInterval(() => {
      if (a < 5) { a++; setTotalBikes(a); }
      if (b < 2) { b++; setActiveRentals(b); }
      if (c < 15000) { c += 1500; setEarnings(c); }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.push("/login");
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-purple-100 via-white to-blue-100 text-black"} min-h-screen flex`}>

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
            My Bikes
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
            <PlusCircle size={20} />
            Add Bike
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
            Provider Dashboard 🚀
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
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
              <User size={18} />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/60 rounded-3xl p-8 shadow-lg hover:scale-105 transition">
            <p className="text-lg">Total Listed Bikes</p>
            <h2 className="text-4xl font-bold mt-2">{totalBikes}</h2>
          </div>

          <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/60 rounded-3xl p-8 shadow-lg hover:scale-105 transition">
            <p className="text-lg">Active Rentals</p>
            <h2 className="text-4xl font-bold mt-2">{activeRentals}</h2>
          </div>

          <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/60 rounded-3xl p-8 shadow-lg hover:scale-105 transition">
            <p className="text-lg">Total Earnings</p>
            <h2 className="text-4xl font-bold mt-2">₹{earnings}</h2>
          </div>

        </div>

        {/* Bike Listings */}
        <h2 className="text-3xl font-bold mb-6">Your Listed Bikes</h2>

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
                Royal Enfield Classic
              </h3>
              <p className="mt-2 text-lg">
                ₹700 / day
              </p>

              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl">
                Edit Listing
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}