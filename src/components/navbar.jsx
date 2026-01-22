import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto font-dm-sans">
        <div className="flex items-center gap-2">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition
              ${
                scrolled
                  ? "bg-primaryRed text-white"
                  : "bg-white text-primaryRed"
              }
            `}
          >
            M
          </div>
          <span
            className={`font-semibold text-lg transition ${
              scrolled ? "text-textDark" : "text-white"
            }`}
          >
            Meals on Merit
          </span>
        </div>

        <a
          href="#order"
          className={`px-4 py-2 rounded-full font-medium transition
            ${
              scrolled
                ? "bg-primaryRed text-white"
                : "bg-white text-primaryRed"
            }
          `}
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
