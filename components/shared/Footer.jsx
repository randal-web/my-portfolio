"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { Linkedin } from "lucide-react"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="border-t bg-white dark:bg-zinc-950 dark:border-zinc-800 pl-10 pr-10">
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
                            <Link href="https://github.com/randal-web" target="_blank">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Link href="https://linkedin.com/in/randaledin" target="_blank">
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Link href="mailto:randal.rmz@outlook.com" target="_blank">
                                <Mail className="h-4 w-4" />
                                <span className="sr-only">Email</span>
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}