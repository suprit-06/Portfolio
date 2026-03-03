"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/data";

export default function About() {
    const { summary } = portfolioData.personal;

    return (
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 border-b brutalist-border relative">
            <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">

                {/* Section Header */}
                <div className="md:w-1/3 shrink-0">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl uppercase tracking-tighter"
                    >
                        [01] <br />
                        System <br />
                        <span className="text-accent text-outline">Overview</span>
                    </motion.h2>
                    <div className="mt-8 h-1 w-24 bg-foreground" />
                </div>

                {/* Content Area - Typographic Brutalism */}
                <div className="md:w-2/3">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl md:text-3xl lg:text-4xl leading-[1.3] font-medium tracking-tight text-muted-foreground"
                    >
                        {summary.split('. ').map((sentence, i, arr) => (
                            <span key={i} className="hover:text-foreground transition-colors duration-300">
                                {sentence}{i !== arr.length - 1 ? '. ' : ''}
                            </span>
                        ))}
                    </motion.div>

                    {/* Decorative Technical Elements */}
                    <motion.div
                        className="mt-16 flex gap-8 font-mono text-xs md:text-sm tracking-widest text-muted-foreground uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="flex flex-col border-l brutalist-border pl-4">
                            <span className="text-foreground">Status</span>
                            <span>Online / Ready</span>
                        </div>
                        <div className="flex flex-col border-l brutalist-border pl-4">
                            <span className="text-foreground">Location</span>
                            <span>Global _</span>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
