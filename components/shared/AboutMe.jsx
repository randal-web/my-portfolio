"use client"

import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function AboutMe() {
    return (
        <section id="sobre-mi" className="bg-muted/50 py-20 pl-10 pr-10">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <FadeIn direction="left">
                        <div className="space-y-6">
                            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Sobre mí</div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                                Desarrollador apasionado por crear soluciones digitales impactantes
                            </h2>
                            <p className="text-muted-foreground">
                                Cuento con mas de un año de experiencia en desarrollo web, me especializo en crear aplicaciones modernas,
                                rápidas y accesibles. Mi enfoque combina habilidades técnicas con un ojo para el diseño y la
                                experiencia de usuario.
                            </p>
                            <p className="text-muted-foreground">
                                He trabajado con startups y actualmente trabajo para una empresa establecida. Me apasiona el aprendizaje continuo y mantenerme actualizado con las últimas tendencias
                                tecnológicas.
                            </p>
                            <div className="flex gap-4">
                                <Link href="https://github.com/randal-web" target="_blank">
                                    <Button variant="outline" size="sm">
                                        <Github className="mr-2 h-4 w-4" />
                                        GitHub
                                    </Button>
                                </Link>
                                <Link href="https://www.linkedin.com/in/randaledin/" target="_blank">
                                    <Button variant="outline" size="sm">
                                        <Linkedin className="mr-2 h-4 w-4" />
                                        LinkedIn
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn direction="right" delay={0.2}>
                        <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-xl border">
                            <img
                                src="/Selfie.jpg?height=500&width=500&text=Foto"
                                alt="Foto de perfil"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}