"use client"

import { AnimatedSection } from "@/components/animated-section"
import { StaggerChildren } from "@/components/stagger-children"
import { StaggerItem } from "@/components/stagger-item"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Github, Monitor } from "lucide-react"

export default function Projects() {
    return (
        <section id="proyectos" className="bg-muted/50 py-20">
            <div className="container space-y-12">
                <AnimatedSection>
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Proyectos Destacados</h2>
                        <p className="text-muted-foreground max-w-[600px] mx-auto">
                            Una selección de mis trabajos más recientes y relevantes en desarrollo web
                        </p>
                    </div>
                </AnimatedSection>

                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((project) => (
                        <StaggerItem key={project}>
                            <Card className="overflow-hidden border border-muted group hover:border-primary/50 transition-all">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={`/placeholder.svg?height=300&width=600&text=Proyecto ${project}`}
                                        alt={`Proyecto ${project}`}
                                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-sm font-medium text-primary">Desarrollo Web</div>
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Github className="h-4 w-4" />
                                                <span className="sr-only">GitHub</span>
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Monitor className="h-4 w-4" />
                                                <span className="sr-only">Demo</span>
                                            </Button>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Proyecto {project}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        Una breve descripción del proyecto, tecnologías utilizadas y resultados obtenidos.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">React</div>
                                        <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Next.js</div>
                                        <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Tailwind</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerChildren>

                <AnimatedSection>
                    <div className="flex justify-center">
                        <Button variant="outline" size="lg">
                            Ver más proyectos
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}