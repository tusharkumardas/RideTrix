"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {

  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (token) {
      setIsLoggedIn(true);
      setRole(storedRole);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      
      <Link href="/">
        <h1 className="text-xl font-bold cursor-pointer">
          RideTrix
        </h1>
      </Link>

      <div className="space-x-6">

        {isLoggedIn ? (
          <>
            {role === "customer" && (
              <Link href="/dashboard/customer">
                <button className="hover:text-blue-600">
                  Dashboard
                </button>
              </Link>
            )}

            {role === "provider" && (
              <Link href="/dashboard/provider">
                <button className="hover:text-blue-600">
                  Provider Dashboard
                </button>
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
              <button className="hover:text-blue-600">
                Login
              </button>
            </Link>

            <Link href="/signup">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Sign Up
              </button>
            </Link>
          </>
        )}

      </div>
    </nav>
  );
}