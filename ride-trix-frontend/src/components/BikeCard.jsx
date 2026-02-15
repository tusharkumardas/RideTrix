export default function BikeCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        
        <p className="text-blue-600 font-bold mb-3">
          ₹{price}/hour
        </p>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          View Details
        </button>
      </div>

    </div>
  );
}
