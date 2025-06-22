import { AnimatedSection } from "@/components/animated-section"
import { FadeIn } from "@/components/fade-in"

export default function ExperienciaTimeline() {
    return (
        <section className="bg-muted/50 py-20">
            <div className="container">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2">Mi Trayectoria</h2>
                        <p className="text-muted-foreground">Evolución de mis habilidades a lo largo del tiempo</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

                        <div className="space-y-12">
                            {[
                                {
                                    year: "Junio 2024 - Agosto 2024",
                                    title: "Internship Web Developer - Mondasi",
                                    description: "Desarrollo de Landings Page con Next.js y supabase",
                                },
                                {
                                    year: "Diciembre 2024 - Actualidad",
                                    title: "Junior Developer - Psicosmart",
                                    description: "Desarrollo web con PHP, optimización de SEO y manejo de APIs"
                                },
                            ].map((item, index) => (
                                <FadeIn key={item.year} delay={0.1 * index}>
                                    <div className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                                        <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                                            <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border shadow-sm">
                                                <div className="text-primary font-bold text-lg">{item.year}</div>
                                                <div className="font-semibold mb-1">{item.title}</div>
                                                <div className="text-sm text-muted-foreground">{item.description}</div>
                                            </div>
                                        </div>
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-zinc-950"></div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}