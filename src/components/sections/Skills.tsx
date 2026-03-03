"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/data";

export default function Skills() {
    const { skills } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
    };

    return (
        <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 border-b brutalist-border bg-[#111]">
            <div className="flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Section Header */}
                <div className="md:w-1/3 shrink-0">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl uppercase tracking-tighter"
                    >
                        [02] <br />
                        Tech <br />
                        <span className="text-accent">Stack</span>
                    </motion.h2>
                    <div className="mt-8 h-1 w-24 bg-foreground" />
                </div>

                {/* Skills Grid - No rounded corners, purely borders and text */}
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l brutalist-border">
                    {Object.entries(skills).map(([category, items], i) => (
                        <motion.div
                            key={category}
                            className="border-b border-r brutalist-border p-6 hover:bg-neutral-900 transition-colors"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-6 text-foreground/80">
                                {"//"} {category}
                            </h3>
                            <ul className="flex flex-col gap-3 font-mono text-sm text-muted-foreground">
                                {items.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-accent/30 group-hover:bg-accent transition-colors block" />
                                        <span className="group-hover:text-foreground group-hover:translate-x-1 transition-all">
                                            {skill}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                    {/* Empty cell for grid balancing with technical visual */}
                    <div className="border-b border-r brutalist-border p-6 hidden lg:flex flex-col justify-end items-end opacity-20">
                        <div className="w-full h-px bg-foreground mb-2" />
                        <div className="w-2/3 h-px bg-foreground" />
                    </div>
                </div>

            </div>
        </section>
    );
}
