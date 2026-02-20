"use client";

import { useState } from "react";
import Link from "next/link";
import { Bike, ShieldCheck, Clock, Moon, Sun } from "lucide-react";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-100 via-white to-purple-100 text-black"} min-h-screen`}>

      {/* Top Section */}
      <div className="flex justify-between items-center px-10 py-6 backdrop-blur-md bg-white/40 dark:bg-gray-800/60 border-b border-white/30 shadow-sm">
        <h1 className="text-3xl font-bold">RideTrix</h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-white shadow-md"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center px-10 py-24">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Rent Bikes Easily <br />
          <span className="text-blue-600">Anytime, Anywhere</span>
        </h2>

        <p className="mt-6 text-xl max-w-2xl">
          A premium marketplace connecting bike owners and riders
          with seamless booking and secure payments.
        </p>

        <div className="mt-10 flex gap-6">
          <Link href="/signup">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition hover:scale-105">
              Get Started
            </button>
          </Link>

          <Link href="/login">
            <button className="backdrop-blur-md bg-white/60 border border-white/40 px-8 py-4 rounded-2xl text-lg shadow-lg transition hover:scale-105">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-10 pb-24">
        <h3 className="text-4xl font-bold text-center mb-16">
          Why Choose RideTrix?
        </h3>

        <div className="grid md:grid-cols-3 gap-12">

          <div className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 rounded-3xl p-10 shadow-xl hover:-translate-y-3 transition duration-300 text-center">
            <Bike size={40} className="mx-auto mb-6 text-blue-600" />
            <h4 className="text-2xl font-bold mb-4">
              Wide Selection
            </h4>
            <p className="text-lg">
              Choose from a variety of premium bikes listed by trusted providers.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 rounded-3xl p-10 shadow-xl hover:-translate-y-3 transition duration-300 text-center">
            <ShieldCheck size={40} className="mx-auto mb-6 text-green-600" />
            <h4 className="text-2xl font-bold mb-4">
              Secure Payments
            </h4>
            <p className="text-lg">
              Seamless and secure payment gateway integration.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 rounded-3xl p-10 shadow-xl hover:-translate-y-3 transition duration-300 text-center">
            <Clock size={40} className="mx-auto mb-6 text-purple-600" />
            <h4 className="text-2xl font-bold mb-4">
              Instant Booking
            </h4>
            <p className="text-lg">
              Book bikes instantly with real-time availability.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}