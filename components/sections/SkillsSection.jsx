import { Code } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SkillsSection() {
  return (
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
  )
}
