import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-[#23252b]/80 backdrop-blur-sm px-4">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="text-white">Randal Dev</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#proyectos"
            className="text-sm font-medium text-white transition-transform hover:scale-110"
          >
            Proyectos
          </Link>
          <Link
            href="#habilidades"
            className="text-sm font-medium text-white transition-transform hover:scale-110"
          >
            Habilidades
          </Link>
          <Link
            href="#sobre-mi"
            className="text-sm font-medium text-white transition-transform hover:scale-110"
          >
            Sobre mí
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium text-white transition-transform hover:scale-110"
          >
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
  )
}
