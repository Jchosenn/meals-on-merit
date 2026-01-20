export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-brandYellow rounded-full flex items-center justify-center font-bold text-brandDark">
          M
        </div>
        <span className="font-semibold text-lg">Meals on Merit</span>
      </div>

      <a
        href="#order"
        className="bg-brandYellow text-brandDark px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
      >
        Order Now
      </a>
    </nav>
  );
}
