import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

export default function Header() {
    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-zinc-950/80 dark:border-zinc-800 pl-4 pr-4"
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
    )
}