import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BikeCard from "@/components/BikeCard";
import Footer from "@/components/Footer";


export default function Home() {

  const bikes = [
    {
      id: 1,
      name: "Royal Enfield Classic 350",
      price: 120,
      image: "https://images.unsplash.com/photo-1558981403-c5f9891b3e88"
    },
    {
      id: 2,
      name: "Yamaha R15",
      price: 150,
      image: "https://images.unsplash.com/photo-1611242320536-f12d3541249b"
    },
    {
      id: 3,
      name: "Honda Activa",
      price: 80,
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
    }
  ];

  return (
    <div>
      <Navbar />
      <Hero />

      <section className="px-10 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Bikes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <BikeCard
              key={bike.id}
              name={bike.name}
              price={bike.price}
              image={bike.image}
            />
          ))}

        </div>
      </section>
      <Footer/>

    </div>
  );
}
