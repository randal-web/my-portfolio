import { forwardRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Github, Monitor } from "lucide-react"

const ProjectsSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="proyectos" className="bg-muted/50 py-20 px-10">
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
  )
})

ProjectsSection.displayName = "ProjectsSection"

export default ProjectsSection
