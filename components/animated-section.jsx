"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

export function AnimatedSection({ children, className, delay = 0 }) {
    const { ref, isInView } = useInView(0.1)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

