"use client"

import { AnimatedSection } from "@/components/animated-section"
import { StaggerChildren } from "@/components/stagger-children"
import { StaggerItem } from "@/components/stagger-item"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { Linkedin } from "lucide-react"
import { Github } from "lucide-react"

export default function Contact() {
    return (
        <section id="contacto" className="container py-20">
            <div className="max-w-2xl mx-auto space-y-12">
                <AnimatedSection>
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">¿Interesado en trabajar juntos?</h2>
                        <p className="text-muted-foreground">
                            Estoy abierto a nuevas oportunidades y colaboraciones. ¡Contáctame!
                        </p>
                    </div>
                </AnimatedSection>

                <StaggerChildren delayStep={0.2} className="grid gap-6">
                    <StaggerItem>
                        <div className="flex items-center gap-4 p-4 rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all">
                            <div className="rounded-full bg-primary/10 p-3">
                                <Mail className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-medium">Email</h3>
                                <p className="text-sm text-muted-foreground">contacto@tudominio.com</p>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="flex items-center gap-4 p-4 rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all">
                            <div className="rounded-full bg-primary/10 p-3">
                                <Linkedin className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-medium">LinkedIn</h3>
                                <p className="text-sm text-muted-foreground">linkedin.com/in/tunombre</p>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="flex items-center gap-4 p-4 rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all">
                            <div className="rounded-full bg-primary/10 p-3">
                                <Github className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-medium">GitHub</h3>
                                <p className="text-sm text-muted-foreground">github.com/tunombre</p>
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerChildren>

                <AnimatedSection delay={0.6}>
                    <div className="flex justify-center">
                        <Button size="lg" className="group">
                            Enviar mensaje
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}