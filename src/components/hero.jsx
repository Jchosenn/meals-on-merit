import { useEffect, useRef, useState } from "react"
import { HashLink } from "react-router-hash-link"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "/imageBg/val1.jpeg",
  "/imageBg/val2.jpeg",
  "/imageBg/val3.jpg",
  "/imageBg/val4.jpeg",
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [paused])

  const handleTouchStart = (e) => {
    setPaused(true)
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return

    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (diff > 50) {
      setCurrent((prev) => (prev + 1) % images.length)
    } else if (diff < -50) {
      setCurrent((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      )
    }

    touchStartX.current = null
    setPaused(false)
  }

  return (
    <section
      className="relative h-[90vh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${images[current]})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-primaryRed/20 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 text-center">
        <motion.div
          className="max-w-3xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
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
            <HashLink
              smooth
              to="#packages"
              className="bg-white text-primaryRed 
              px-2.5 py-0.5 text-sm flex items-center
              sm:px-6 sm:py-3 sm:text-base
              rounded-full font-medium"
            >
              View Packages
            </HashLink>

            <a
              href="https://wa.me/234XXXXXXXXXX"
              className="border border-white px-6 py-3 rounded-full font-medium"
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile hint */}
          <p className="mt-6 text-xs opacity-70 sm:hidden">
            Swipe to explore →
          </p>
        </motion.div>
      </div>
    </section>
  )
}
