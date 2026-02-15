export default function Hero() {
  return (
   <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-white text-center">
      
  <h2 className="text-5xl font-bold mb-6">
    Find Your Perfect Ride with RideTrix
  </h2>

  <p className="text-lg mb-8 text-blue-100">
    Rent bikes at affordable prices near you.
  </p>

  <div className="flex justify-center gap-4">
    <input
      type="text"
      placeholder="Enter Location"
      className="px-4 py-3 w-64 text-black rounded-lg"
    />

    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
      Search
    </button>
  </div>

</section>
  );
}
