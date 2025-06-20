import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#23252b]">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
