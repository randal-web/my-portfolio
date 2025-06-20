import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="container py-24 md:py-32 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
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
  )
}
