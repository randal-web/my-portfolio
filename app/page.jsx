'use client'

import { useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Portfolio() {
  const [isHeaderVisible, setHeaderVisible] = useState(false)
  const projectsRef = useRef(null)

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#23252b]">
      <AnimatePresence>
        {isHeaderVisible && <Header />}
      </AnimatePresence>
      <main>
        <HeroSection 
          setHeaderVisible={setHeaderVisible} 
          handleScrollToProjects={handleScrollToProjects} 
        />
        <ProjectsSection ref={projectsRef} />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
