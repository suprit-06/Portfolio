"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/config/data";

export default function Hero() {
    const { name, role, tagline } = portfolioData.personal;

    return (
        <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden border-b brutalist-border">
            {/* Background Graphic Element - Breaking standard grids */}
            <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-accent/5 -z-10 translate-x-1/4 -translate-y-1/4 brutalist-border" />

            <div className="flex flex-col md:flex-row justify-between items-end gap-12 z-10 w-full mb-12">
                <motion.div
                    className="flex-1 max-w-4xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Typographic Brutalism - Massive scale */}
                    <h1 className="text-6xl md:text-8xl lg:text-[10vw] leading-[0.85] tracking-tighter uppercase mb-6 mix-blend-difference">
                        {name.split(' ').map((word, i) => (
                            <span key={i} className="block hover:text-accent transition-colors duration-500">
                                {word}
                            </span>
                        ))}
                    </h1>

                    <motion.div
                        className="flex flex-wrap items-center gap-4 text-xl md:text-2xl font-mono text-muted-foreground uppercase tracking-widest"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <span>[ {role} ]</span>
                    </motion.div>
                </motion.div>

                {/* Action area pushed to the side for 90/10 Asymmetry */}
                <motion.div
                    className="flex flex-col gap-6 md:w-1/3 shrink-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="text-lg md:text-xl font-medium border-l-2 border-accent pl-6 py-2">
                        {tagline}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <a
                            href="#projects"
                            className="group flex justify-between items-center bg-foreground text-background font-bold uppercase tracking-wider px-6 py-4 hover:bg-accent transition-all duration-300"
                        >
                            <span>View Code</span>
                            <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="/resume.pdf"
                            className="group flex justify-between items-center bg-transparent brutalist-border text-foreground font-bold uppercase tracking-wider px-6 py-4 hover:bg-[#1a1a1a] transition-all duration-300"
                        >
                            <span>Resume</span>
                            <Download className="w-5 h-5 ml-4 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Floating Image Placeholder mapped behind text contextually */}
            <motion.div
                className="absolute top-[20%] right-[15%] w-64 h-80 bg-muted brutalist-border grayscale hover:grayscale-0 transition-all duration-700 -z-5 hidden lg:block"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1000&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="absolute inset-0 bg-background/20 mix-blend-overlay" />
                <div className="absolute -bottom-4 -left-4 bg-accent text-background text-xs font-mono px-2 py-1 font-bold">
                    IMG_SRC: {name.toUpperCase()}
                </div>
            </motion.div>
        </section>
    );
}
