'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection({ setHeaderVisible, handleScrollToProjects }) {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.7) {
        setHeaderVisible(true)
      } else {
        setHeaderVisible(false)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress, setHeaderVisible])

  // Animation for the text blocks
  const text2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const text2Y = useTransform(scrollYProgress, [0.2, 0.4], ["20px", "0px"])

  const text3Opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
  const text3Y = useTransform(scrollYProgress, [0.5, 0.7], ["20px", "0px"])

  // Animation for the skip button
  const skipButtonOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#23252b]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="text-center flex flex-col gap-8">
          <motion.h1 
            className="text-5xl md:text-8xl font-bold text-white animate-shine"
          >
            Desarrollador de software
          </motion.h1>
          <motion.h1 
            className="text-3xl md:text-5xl font-bold text-white animate-shine px-12"
            style={{ opacity: text2Opacity, y: text2Y }}
          >
            ¡Hola, Soy Randal!, un desarrollador de software Mexicano
          </motion.h1>
          <motion.h1 
            className="text-2xl md:text-4xl font-bold text-white animate-shine px-16"
            style={{ opacity: text3Opacity, y: text3Y }}
          >
            Te ofrezco mis servicios para crear soluciones innovadoras y eficientes.
          </motion.h1>
        </div>
        <motion.div
          className="absolute bottom-10"
          style={{ opacity: skipButtonOpacity }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full animate-bounce"
            onClick={handleScrollToProjects}
          >
            <ArrowDown className="h-6 w-6 text-white" />
            <span className="sr-only">Saltar a proyectos</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
