"use client"

import Link from "next/link"
import { ArrowRight, Code, Github, Linkedin, Mail, Monitor, User } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"
import { FadeIn } from "@/components/fade-in"
import { StaggerChildren } from "@/components/stagger-children"
import { StaggerItem } from "@/components/stagger-item"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <ScrollProgress />
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-zinc-950/80 dark:border-zinc-800"
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Dev</span>Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#proyectos" className="text-sm font-medium hover:text-primary transition-colors">
              Proyectos
            </Link>
            <Link href="#habilidades" className="text-sm font-medium hover:text-primary transition-colors">
              Habilidades
            </Link>
            <Link href="#sobre-mi" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre mí
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Descargar CV
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <User className="h-4 w-4" />
            <span className="sr-only">Menú</span>
          </Button>
        </div>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section className="relative container py-20 md:py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/2 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              <FadeIn>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Disponible para proyectos
                  </span>
                </div>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn delay={0.1}>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
                    Hola, soy{" "}
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Alex
                    </span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                      Desarrollador Full Stack
                    </h2>
                    <div className="flex items-center gap-2 text-lg text-muted-foreground">
                      <span>Especializado en</span>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">React</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">
                          Next.js
                        </span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">
                          Node.js
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                    Transformo ideas en experiencias digitales excepcionales. Con más de 5 años creando aplicaciones web
                    modernas, rápidas y escalables.
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
                    Contactar
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-primary/40 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-primary/60 border-2 border-white"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">+50 proyectos completados</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Content */}
            <div className="relative lg:pl-8">
              <FadeIn delay={0.6} direction="right">
                <div className="relative">
                  {/* Main Image Container */}
                  <div className="relative aspect-square max-w-lg mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-6"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent rounded-3xl transform -rotate-3"></div>
                    <div className="relative bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-2xl border">
                      <img
                        src="/placeholder.svg?height=400&width=400&text=Tu+Foto"
                        alt="Foto de perfil"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
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
                      <span className="text-sm font-medium">5+ años</span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute top-1/2 -right-8 bg-primary text-primary-foreground rounded-full p-3 shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                  </motion.div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Stats Section */}
          <FadeIn delay={0.8}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Años experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground mt-1">Clientes felices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Satisfacción</div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Projects Section */}
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

        {/* Skills Section */}
        <section id="habilidades" className="container py-20">
          <div className="space-y-12">
            <AnimatedSection>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Mis Habilidades</h2>
                <p className="text-muted-foreground max-w-[600px] mx-auto">
                  Tecnologías y herramientas que domino para crear soluciones web efectivas
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Tabs defaultValue="frontend" className="max-w-3xl mx-auto">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="tools">Herramientas</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend" className="mt-6">
                  <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {[
                      "HTML/CSS",
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Tailwind CSS",
                      "Framer Motion",
                      "Redux",
                    ].map((skill) => (
                      <StaggerItem key={skill}>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Code className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-center">{skill}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </TabsContent>
                <TabsContent value="backend" className="mt-6">
                  <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {[
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "PostgreSQL",
                      "Firebase",
                      "GraphQL",
                      "REST API",
                      "Serverless",
                    ].map((skill) => (
                      <StaggerItem key={skill}>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Code className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-center">{skill}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </TabsContent>
                <TabsContent value="tools" className="mt-6">
                  <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {["Git", "GitHub", "VS Code", "Figma", "Docker", "Jest", "Vercel", "AWS"].map((skill) => (
                      <StaggerItem key={skill}>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Code className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-center">{skill}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </TabsContent>
              </Tabs>
            </AnimatedSection>
          </div>
        </section>

        {/* About Me Section */}
        <section id="sobre-mi" className="bg-muted/50 py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div className="space-y-6">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Sobre mí</div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                    Desarrollador apasionado por crear soluciones digitales impactantes
                  </h2>
                  <p className="text-muted-foreground">
                    Con más de 5 años de experiencia en desarrollo web, me especializo en crear aplicaciones modernas,
                    rápidas y accesibles. Mi enfoque combina habilidades técnicas con un ojo para el diseño y la
                    experiencia de usuario.
                  </p>
                  <p className="text-muted-foreground">
                    He trabajado con startups y empresas establecidas para transformar sus ideas en productos digitales
                    exitosos. Me apasiona el aprendizaje continuo y mantenerme actualizado con las últimas tendencias
                    tecnológicas.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-xl border">
                  <img
                    src="/placeholder.svg?height=500&width=500&text=Foto"
                    alt="Foto de perfil"
                    className="object-cover w-full h-full"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
      </main>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-zinc-950 dark:border-zinc-800">
        <div className="container py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">
                <span className="text-primary">Dev</span>Portfolio
              </span>
              <span className="text-sm text-muted-foreground">© {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
