const packages = [
  {
    title: "Lovers’ Delight ❤️",
    desc: "A romantic meal package crafted for couples who want an intimate dining experience.",
  },
  {
    title: "Self-Love Feast 🌸",
    desc: "A premium solo meal for those choosing to celebrate themselves.",
  },
  {
    title: "Friends & Family Combo 💕",
    desc: "A generous spread made for sharing love with friends and family.",
  },
  {
    title: "Office Love Box 💌",
    desc: "Perfect for corporate gifting and team appreciation.",
  },
];

export default function ValentinePackages() {
  return (
    <section id="packages" className="px-6 py-20 bg-softRed">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primaryRed">
          Valentine Packages
        </h2>

        <p className="text-center mt-4">
          Thoughtfully curated meals for every kind of love.
        </p>

        <div className="mt-12 space-y-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white rounded-2xl p-6 shadow-sm"
            >
              <div>
                <h3 className="font-semibold text-lg text-primaryRed">
                  {pkg.title}
                </h3>
                <p className="mt-2 text-gray-700">{pkg.desc}</p>
              </div>

              <span className="text-sm font-medium text-primaryRed">
                View details →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
