"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

export function StaggerChildren({
  children,
  className,
  delayStep = 0.1,
  staggerDelay = 0.1,
  threshold = 0.1,
}) {
  const { ref, isInView } = useInView(threshold)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayStep,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}
