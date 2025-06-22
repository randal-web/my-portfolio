"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
}) {
  const { ref, isInView } = useInView(threshold)

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...directionOffset[direction] }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
