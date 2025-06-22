'use client'

import { motion } from 'framer-motion'

const FadeIn = ({ children, delay = 0, direction = 'none', ...props }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
