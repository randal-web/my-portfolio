"use client"

import { ScrollProgress } from "@/components/scroll-progress"
import Header from "@/components/shared/Header"
import HeroSection from "@/components/shared/HeroSection"
import ExperienciaTimeline from "@/components/shared/ExperienciaTimeline"
import Projects from "@/components/shared/Projects"
import Skills from "@/components/shared/Skills"
import AboutMe from "@/components/shared/AboutMe"
import Contact from "@/components/shared/Contact"
import Footer from "@/components/shared/Footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <ExperienciaTimeline />
        <Projects />
        <Skills />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
