export default function Hero() {
  return (
    <section className="w-full px-6 py-20 text-center max-w-4xl mx-auto bg-[url('/imageBg/val-couple.jpg')]">
      <span className="text-softPink uppercase tracking-wide text-sm">
        Valentine Special ❤️
      </span>

      <h1 className="text-4xl md:text-5xl font-bold font-montserrat mt-4">
        Made With Love.
        <span className="text-brandYellow"> Served With Intention.</span>
      </h1>

      <p className="mt-6 text-gray-300 max-w-2xl mx-auto font-dm-sans">
        This Valentine, say “I love you” with meals that warm the heart and
        satisfy the soul. Perfect for lovers, friends, family and you.
      </p>

      <div className="flex justify-center gap-4 mt-10">
        <a
          href="#packages"
          className="bg-brandYellow text-brandDark px-6 py-3 rounded-full font-medium"
        >
          View Packages
        </a>

        <a
          href="https://wa.me/234XXXXXXXXXX"
          className="border border-brandYellow px-6 py-3 rounded-full font-medium"
        >
          Order via WhatsApp
        </a>
      </div>
    </section>
  );
}
