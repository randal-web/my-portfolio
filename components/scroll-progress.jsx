"use client"

import { useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          scale: isScrolled ? 1 : 0.8,
          pointerEvents: isScrolled ? "auto" : "none",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 rounded-full bg-primary text-primary-foreground p-3 shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
        <span className="sr-only">Volver arriba</span>
      </motion.button>
    </>
  )
}
