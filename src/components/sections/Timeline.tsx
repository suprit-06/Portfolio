"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/data";

export default function Timeline() {
    const { experience, education } = portfolioData;

    return (
        <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 border-b brutalist-border relative bg-[#0a0a0a]">
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
                        [04] <br />
                        Career <br />
                        <span className="text-accent text-outline">& Academic</span>
                    </motion.h2>
                    <div className="mt-8 h-1 w-24 bg-foreground" />
                </div>

                {/* Timeline Content */}
                <div className="md:w-2/3 border-l brutalist-border pl-8 md:pl-12 flex flex-col gap-16">

                    {/* Experience Block */}
                    <div>
                        <h3 className="font-mono text-xl uppercase tracking-widest text-muted-foreground mb-8">{"// Experience"}</h3>
                        <div className="flex flex-col gap-12">
                            {experience.map((job, i) => (
                                <motion.div
                                    key={job.company}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[33px] md:-left-[49px] top-1.5 w-4 h-4 bg-background brutalist-border z-10" />
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
                                        <h4 className="text-2xl font-bold uppercase">{job.role}</h4>
                                        <span className="text-accent font-mono text-sm">@ {job.company}</span>
                                    </div>
                                    <div className="inline-block bg-[#111] px-3 py-1 font-mono text-xs text-muted-foreground mb-6 brutalist-border">
                                        {job.duration}
                                    </div>
                                    <p className="text-foreground/80 leading-relaxed max-w-2xl font-sans">
                                        {job.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Block */}
                    <div className="pt-8 border-t brutalist-border">
                        <h3 className="font-mono text-xl uppercase tracking-widest text-muted-foreground mb-8">{"// Education"}</h3>
                        <div className="flex flex-col gap-12">
                            {education.map((edu, i) => (
                                <motion.div
                                    key={`edu-${edu.institution}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[33px] md:-left-[49px] top-1.5 w-4 h-4 bg-muted brutalist-border z-10" />
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
                                        <h4 className="text-2xl font-bold uppercase">{edu.degree}</h4>
                                    </div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-accent font-mono text-sm uppercase">{edu.institution}</span>
                                        <span className="inline-block bg-[#111] px-3 py-1 font-mono text-xs text-muted-foreground brutalist-border">
                                            {edu.duration}
                                        </span>
                                    </div>
                                    <p className="text-foreground/80 leading-relaxed max-w-2xl font-sans">
                                        {edu.details}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
