const packages = [
  {
    title: "Soft Love Box❤️",
    desc: "An intimate meal experience designed for couples.",
  },
  {
    title: "BAE's Favourite Box 🌸",
    desc: "Premium solo meals for treating yourself right.",
  },
  {
    title: "Couples Treat💕",
    desc: "Perfect for sharing moments and memories together.",
  },
  {
    title: "Office Love Box 💌",
    desc: "Corporate-friendly packages for teams and appreciation.",
  },
];

export default function ValentinePackages() {
  return (
    <section id="packages" className="px-6 py-20 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Valentine Specials 💝
        </h2>

        <p className="text-center text-gray-300 mt-4">
          Carefully curated packages for every kind of love.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="border border-brandYellow/30 rounded-2xl p-6 hover:border-brandYellow transition"
            >
              <h3 className="font-semibold text-lg">{pkg.title}</h3>
              <p className="text-gray-300 mt-3">{pkg.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
