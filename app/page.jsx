import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Github, Linkedin, Mail, Monitor, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-zinc-950/80 dark:border-zinc-800 px-4">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Randal Dev</span>
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
      </header>

      <main>
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              Desarrollador Web Full Stack
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl">
              Creando experiencias digitales <span className="text-primary">excepcionales</span>
            </h1>
            <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed">
              Especializado en desarrollo web moderno con React, Next.js y diseño UI/UX
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group">
                Ver proyectos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Contactar
              </Button>
            </div>
          </div>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border bg-muted/50 mt-20">
            <Link href="https://www.prolimk.com.mx" className="block" target="_blank">
              <Image
                width={2000}
                height={1050}
                src="/proyecto-destacado.webp"
                alt="Vista previa de proyecto destacado"
                className="h-full w-full object-contain"
              />
            </Link>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="bg-muted/50 py-20">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Proyectos Destacados</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Una selección de mis trabajos más recientes y relevantes en desarrollo web
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((project) => (
                <Card
                  key={project}
                  className="overflow-hidden border border-muted group hover:border-primary/50 transition-all"
                >
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
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                Ver más proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="container py-20">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Mis Habilidades</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Tecnologías y herramientas que domino para crear soluciones web efectivas
              </p>
            </div>

            <Tabs defaultValue="frontend" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="tools">Herramientas</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
                    <div
                      key={skill}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all"
                    >
                      <div className="rounded-full bg-primary/10 p-2">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-center">{skill}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="backend" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "GraphQL", "REST API", "Serverless"].map(
                    (skill) => (
                      <div
                        key={skill}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all"
                      >
                        <div className="rounded-full bg-primary/10 p-2">
                          <Code className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-center">{skill}</span>
                      </div>
                    ),
                  )}
                </div>
              </TabsContent>
              <TabsContent value="tools" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {["Git", "GitHub", "VS Code", "Figma", "Docker", "Jest", "Vercel", "AWS"].map((skill) => (
                    <div
                      key={skill}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all"
                    >
                      <div className="rounded-full bg-primary/10 p-2">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-center">{skill}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* About Me Section */}
        <section id="sobre-mi" className="bg-muted/50 py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-xl border">
                <img
                  src="/placeholder.svg?height=500&width=500&text=Foto"
                  alt="Foto de perfil"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="container py-20">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">¿Interesado en trabajar juntos?</h2>
              <p className="text-muted-foreground">
                Estoy abierto a nuevas oportunidades y colaboraciones. ¡Contáctame!
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-center gap-4 p-4 rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">contacto@tudominio.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all">
                <div className="rounded-full bg-primary/10 p-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/tunombre</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all">
                <div className="rounded-full bg-primary/10 p-3">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <p className="text-sm text-muted-foreground">github.com/tunombre</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button size="lg" className="group">
                Enviar mensaje
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-zinc-950 dark:border-zinc-800">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
          </div>
        </div>
      </footer>
    </div>
  )
}
