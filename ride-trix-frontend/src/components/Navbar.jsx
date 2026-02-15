export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      
      <h1 className="text-2xl font-bold text-blue-600">
        RideTrix
      </h1>

      <div className="space-x-6">
        <button className="hover:text-blue-600">Login</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Sign Up
        </button>
      </div>

    </nav>
  );
}
