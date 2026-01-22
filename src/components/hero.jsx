import { useEffect, useState } from "react";

const images = [
  "/imageBg/val1.jpeg",
  "/imageBg/val2.jpeg",
  "/imageBg/val3.jpg",
  "/imageBg/val4.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-primaryRed/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <div className="max-w-3xl text-white">
          <span className="uppercase tracking-wide text-sm">
            Valentine Specials ❤️
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Love Tastes Better <br /> When It’s Shared
          </h1>

          <p className="mt-6 text-white/90">
            This Valentine, express your love with carefully prepared meals
            made to create unforgettable moments.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <a
              href="#packages"
              className="bg-white text-primaryRed 
      px-2.5 py-0.5 text-sm text-center flex items-center
      sm:px-6 sm:py-3 sm:text-base
      rounded-full font-medium"
            >
              View Packages
            </a>

            <a
              href="https://wa.me/234XXXXXXXXXX"
              className="border border-white px-6 py-3 rounded-full font-medium"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
