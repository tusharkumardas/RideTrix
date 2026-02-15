export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-12 mt-20">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500 mb-4">
            RideTrix
          </h2>
          <p className="text-gray-400">
            Smart bike rentals at affordable prices.
            Ride anywhere. Anytime.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Browse Bikes</li>
            <li className="hover:text-white cursor-pointer">How It Works</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} RideTrix. All rights reserved.
      </div>

    </footer>
  );
}
