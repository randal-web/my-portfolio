"use client"

import { AnimatedSection } from "@/components/animated-section"
import { StaggerChildren } from "@/components/stagger-children"
import { StaggerItem } from "@/components/stagger-item"



export default function Skills() {
    return (
        <section id="habilidades" className="container py-20">
            <div className="space-y-16">
                <AnimatedSection>
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Mis Habilidades</h2>
                        <p className="text-muted-foreground max-w-[600px] mx-auto">
                            Tecnologías y herramientas que domino para crear soluciones web efectivas
                        </p>
                    </div>
                </AnimatedSection>

                {/* Technologies Grid */}
                <div className="space-y-12">
                    {/* Frontend */}
                    <AnimatedSection delay={0.1}>
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-center">Frontend</h3>
                            <StaggerChildren className="flex flex-wrap justify-center gap-4">
                                {[
                                    { name: "HTML/CSS", icon: "🌐" },
                                    { name: "JavaScript", icon: "⚡" },
                                    { name: "TypeScript", icon: "🔷" },
                                    { name: "React", icon: "⚛️" },
                                    { name: "Next.js", icon: "▲" },
                                    { name: "Tailwind CSS", icon: "🎨" },
                                    { name: "Framer Motion", icon: "🎭" },
                                    { name: "Redux", icon: "🔄" },
                                ].map((tech) => (
                                    <StaggerItem key={tech.name}>
                                        <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-zinc-900 rounded-full border hover:border-primary/50 hover:shadow-md transition-all">
                                            <span className="text-lg">{tech.icon}</span>
                                            <span className="font-medium">{tech.name}</span>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerChildren>
                        </div>
                    </AnimatedSection>

                    {/* Backend */}
                    <AnimatedSection delay={0.2}>
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-center">Backend</h3>
                            <StaggerChildren className="flex flex-wrap justify-center gap-4">
                                {[
                                    { name: "Node.js", icon: "🟢" },
                                    { name: "Express", icon: "🚀" },
                                    { name: "MongoDB", icon: "🍃" },
                                    { name: "PostgreSQL", icon: "🐘" },
                                    { name: "Firebase", icon: "🔥" },
                                    { name: "GraphQL", icon: "📊" },
                                    { name: "REST API", icon: "🔗" },
                                    { name: "Docker", icon: "🐳" },
                                    { name: "AWS", icon: "☁️" },
                                    { name: "Git", icon: "📝" },
                                ].map((tech) => (
                                    <StaggerItem key={tech.name}>
                                        <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-zinc-900 rounded-full border hover:border-primary/50 hover:shadow-md transition-all">
                                            <span className="text-lg">{tech.icon}</span>
                                            <span className="font-medium">{tech.name}</span>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerChildren>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}