import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { Code } from "lucide-react"
import { Github } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
    return (
        <section className="relative container py-20 md:py-32 overflow-hidden pl-10 pr-10 mb-20">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/2 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                <div className="space-y-8 lg:pr-8">
                    <div className="space-y-6">
                        <FadeIn delay={0.1}>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
                                Hola, soy{" "}
                                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                    Randal
                                </span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                                    Desarrollador de Software
                                </h2>
                                <div className="flex items-center gap-2 text-lg text-muted-foreground">
                                    <span>Especializado en</span>
                                    <div className="flex gap-1">
                                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">React</span>
                                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">
                                            Next.js
                                        </span>
                                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">
                                            Java - Springboot
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                                Transformo ideas en experiencias digitales excepcionales. Con mas de 1 año de experiencia en creando aplicaciones web modernas, rápidas y escalables.
                            </p>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="group text-base px-8 py-6">
                                Ver mis proyectos
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button size="lg" variant="outline" className="text-base px-8 py-6">
                                <Mail className="mr-2 h-5 w-5" />
                                Contactarme
                            </Button>
                        </div>
                    </FadeIn>
                </div>

                <div className="relative lg:pl-8">
                    <FadeIn delay={0.6} direction="right">
                        <div className="relative">
                            <div className="relative aspect-square max-w-lg mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-6"></div>
                                <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent rounded-3xl transform -rotate-3"></div>
                                <div className="relative bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-2xl border">
                                    <img
                                        src="/Selfie.jpg?height=400&width=400&text=Tu+Foto"
                                        alt="Foto de perfil"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                            </div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-lg border"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-sm font-medium">Disponible</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-lg border"
                            >
                                <div className="flex items-center gap-2">
                                    <Code className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium">+1 año</span>
                                </div>
                            </motion.div>
                            <Link href="https://github.com/randal-web" target="_blank">
                                <motion.div
                                    animate={{ rotate: [0, 5, 0] }}
                                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                    className="absolute top-1/2 -right-8 bg-primary text-primary-foreground rounded-full p-3 shadow-lg"
                                >
                                    <Github className="w-5 h-5" />
                                </motion.div>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}