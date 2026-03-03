"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/config/data";

export default function Projects() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 border-b brutalist-border relative bg-background">
            <div className="flex flex-col gap-16 md:gap-24">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b brutalist-border pb-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl uppercase tracking-tighter"
                    >
                        [03] <br />
                        Select <br />
                        <span className="text-accent text-outline">Deployments</span>
                    </motion.h2>
                    <div className="font-mono text-sm tracking-widest uppercase text-muted-foreground text-right">
                        System Architecture <br /> & Full-Stack Implementation
                    </div>
                </div>

                {/* Projects List */}
                <div className="flex flex-col gap-0 border-t brutalist-border">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="group flex flex-col lg:flex-row border-b brutalist-border hover:bg-[#111] transition-all duration-500"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 * index, duration: 0.6 }}
                        >
                            {/* Project Title Area */}
                            <div className="lg:w-1/3 p-8 lg:p-12 lg:border-r brutalist-border flex flex-col justify-between hidden-reveal">
                                <div>
                                    <span className="font-mono text-accent mb-4 block">00{index + 1} {"//"}</span>
                                    <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight mb-4">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="flex gap-4 mt-8">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm hover:text-accent transition-colors">
                                        <Github className="w-5 h-5" /> {"[ SRC ]"}
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm hover:text-accent transition-colors">
                                        <ExternalLink className="w-5 h-5" /> {"[ LIVE ]"}
                                    </a>
                                </div>
                            </div>

                            {/* Project Details Area */}
                            <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-between gap-8">

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Problem</h4>
                                        <p className="text-foreground/80 leading-relaxed font-sans">{project.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Architecture</h4>
                                        <p className="text-foreground/80 leading-relaxed font-sans">{project.architecture}</p>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Key Implemented Features</h4>
                                    <ul className="flex flex-col gap-2">
                                        {project.features.map(feature => (
                                            <li key={feature} className="flex gap-3 items-start font-sans text-sm text-foreground/90">
                                                <span className="text-accent mt-0.5 font-bold">+</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t brutalist-border">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="font-mono text-[10px] md:text-xs uppercase tracking-wider px-3 py-1 bg-muted brutalist-border text-muted-foreground group-hover:bg-background group-hover:text-foreground transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
