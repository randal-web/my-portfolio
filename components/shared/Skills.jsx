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
                        <div className="space-y-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-2">Frontend</h3>
                                <p className="text-muted-foreground">Interfaces de usuario modernas y responsivas</p>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {[
                                        { name: "HTML/CSS", icon: "/icons/html.svg" },
                                        { name: "JavaScript", icon: "/icons/javascript.svg" },
                                        { name: "TypeScript", icon: "/icons/typescript.svg" },
                                        { name: "React", icon: "/icons/react.svg" },
                                        { name: "Next.js", icon: "/icons/nextjs.svg" },
                                        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
                                        { name: "Laravel", icon: "/icons/laravel.svg" },
                                    ].map((tech) => (
                                        <StaggerItem key={tech.name}>
                                            <div className="group relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <div className="relative bg-white dark:bg-zinc-900 rounded-xl p-4 border hover:border-primary/30 transition-all duration-300 text-center flex flex-col items-center justify-center h-28">
                                                    {tech.icon && <img src={tech.icon} alt={tech.name} className="h-10 w-10 mb-2" />}
                                                    <span className="font-medium text-sm">{tech.name}</span>
                                                </div>
                                            </div>
                                        </StaggerItem>
                                    ))}
                                </StaggerChildren>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Backend */}
                    <AnimatedSection delay={0.2}>
                        <div className="space-y-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-2">Backend</h3>
                                <p className="text-muted-foreground">Servidores robustos y APIs escalables</p>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {[
                                        { name: "Java", icon: "/icons/java.svg" },
                                        { name: "Springboot", icon: "/icons/spring.svg" },
                                        { name: "MySQL", icon: "/icons/mysql.svg" },
                                        { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
                                        { name: "PHP", icon: "/icons/php3.svg" },
                                        { name: "NodeJS", icon: "/icons/nodejs.svg" },
                                        { name: "Express", icon: "/icons/express.svg" },
                                        { name: "AWS", icon: "/icons/aws.svg" },
                                        { name: "Git", icon: "/icons/git.svg" },
                                        { name: "Docker", icon: "/icons/docker.svg" },
                                        { name: "JWT" },
                                        { name: "REST API" },
                                    ].map((tech) => (
                                        <StaggerItem key={tech.name}>
                                            <div className="group relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <div className="relative bg-white dark:bg-zinc-900 rounded-xl p-4 border hover:border-primary/30 transition-all duration-300 text-center flex flex-col items-center justify-center h-28">
                                                    {tech.icon && <img src={tech.icon} alt={tech.name} className="h-10 w-10 mb-2" />}
                                                    <span className="font-medium text-sm">{tech.name}</span>
                                                </div>
                                            </div>
                                        </StaggerItem>
                                    ))}
                                </StaggerChildren>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
                Vectors and icons by <a href="https://www.svgrepo.com" target="_blank">SVG  Repo</a>
            </div>
        </section>

    )
}