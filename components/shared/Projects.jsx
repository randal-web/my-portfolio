"use client"

import { AnimatedSection } from "@/components/animated-section"
import { StaggerChildren } from "@/components/stagger-children"
import { StaggerItem } from "@/components/stagger-item"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Github, Monitor } from "lucide-react"

export default function Projects() {
    const projectsData = [
        {
            id: 1,
            title: "Proyecto Prolimk",
            description: "Una plataforma e-commerce para la venta de productos veterinarios, para mascotas como arena para gato.",
            imageUrl: "/proyecto-destacado.webp?height=300&width=600&text=Proyecto+Alpha",
            category: "E-commerce",
            demoUrl: "https://www.prolimk.com.mx/",
            tags: ["React", "Next.js", "Tailwind CSS", "Stripe"]
        },
        {
            id: 2,
            title: "Foro Web",
            description: "Un blog personal para discutir sobre temas variados y compartir ideas con otros usuarios.",
            imageUrl: "/placeholder.svg?height=300&width=600&text=Proyecto+Beta",
            category: "Blog",
            githubUrl: "https://github.com",
            demoUrl: "#",
            tags: ["Java", "Springboot", "NextJS", "Tailwind CSS", "MySQL", "JWT"]
        },
        {
            id: 3,
            title: "Gestor de finanzas personales",
            description: "Un panel de administración para visualizar y gestionar datos financieros personales.",
            imageUrl: "/placeholder.svg?height=300&width=600&text=Proyecto+Gamma",
            category: "Dashboard",
            githubUrl: "https://github.com",
            demoUrl: "#",
            tags: ["React", "Vite", "Auth.js"]
        }
    ];

    return (
        <section id="proyectos" className="bg-muted/50 py-20 pl-10 pr-10">
            <div className="container space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Proyectos Destacados</h2>
                    <p className="text-muted-foreground max-w-[600px] mx-auto">
                        Una selección de mis trabajos más recientes y relevantes en desarrollo web
                    </p>
                </div>

                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                        <StaggerItem key={project.id}>
                            <Card className="overflow-hidden border border-muted group hover:border-primary/50 transition-all">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-sm font-medium text-primary">{project.category}</div>
                                        <div className="flex gap-2">
                                            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <Github className="h-4 w-4" />
                                                    <span className="sr-only">GitHub</span>
                                                </a>
                                            </Button>
                                            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                    <Monitor className="h-4 w-4" />
                                                    <span className="sr-only">Demo</span>
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <div key={tag} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{tag}</div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerChildren>

                {/* <AnimatedSection>
                    <div className="flex justify-center">
                        <Button variant="outline" size="lg">
                            Ver más proyectos
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </AnimatedSection> */}
            </div>
        </section>
    )
}