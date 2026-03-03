"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { portfolioData } from "@/config/data";
import { useState } from "react";

export default function NextSteps() {
    const { achievements, personal } = portfolioData;
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate network request
        setTimeout(() => setStatus("success"), 1500);
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 border-b brutalist-border bg-background">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Achievements Column */}
                <div className="flex flex-col border-r brutalist-border lg:pr-16 lg:-ml-6 lg:pl-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-heading uppercase tracking-widest mb-12 text-muted-foreground"
                    >
                        [05] Awards & Certifications
                    </motion.h2>

                    <ul className="flex flex-col divide-y divide-border brutalist-border border-y border-x">
                        {achievements.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 hover:bg-[#111] transition-colors font-mono text-sm uppercase tracking-wide flex justify-between items-center"
                            >
                                <span>{item}</span>
                                <span className="text-accent">+</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="flex flex-col justify-between hidden-reveal">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-heading font-bold uppercase tracking-tighter leading-[0.85] mb-8"
                        >
                            Init <br /> Connection
                        </motion.h2>
                        <p className="text-muted-foreground font-sans max-w-md text-lg">
                            Currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-12 lg:mt-0">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                required
                                placeholder="Name"
                                className="bg-transparent text-foreground brutalist-border p-4 font-mono text-sm uppercase tracking-wide placeholder:text-muted-foreground outline-none border focus:border-accent transition-colors"
                            />
                            <input
                                type="email"
                                required
                                placeholder="Email"
                                className="bg-transparent text-foreground brutalist-border p-4 font-mono text-sm uppercase tracking-wide placeholder:text-muted-foreground outline-none border focus:border-accent transition-colors"
                            />
                        </div>

                        <textarea
                            required
                            rows={4}
                            placeholder="Message"
                            className="bg-transparent text-foreground brutalist-border p-4 font-mono text-sm uppercase tracking-wide placeholder:text-muted-foreground outline-none border focus:border-accent transition-colors resize-none"
                        />

                        <button
                            disabled={status !== "idle"}
                            type="submit"
                            className="group bg-foreground text-background brutalist-border p-6 flex justify-between items-center hover:bg-accent hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed border"
                        >
                            <span className="font-bold uppercase tracking-widest text-xl">
                                {status === "idle" ? "Send Message" : status === "submitting" ? "Transmitting..." : "Message Sent"}
                            </span>
                            <Send className={`w-6 h-6 transition-transform ${status === "success" ? "translate-x-4 opacity-0" : "group-hover:translate-x-2"}`} />
                        </button>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <a
                                href={personal.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="group bg-transparent text-foreground brutalist-border p-6 flex justify-between items-center hover:bg-[#111] transition-colors border"
                            >
                                <span className="font-mono uppercase tracking-widest text-sm">LinkedIn</span>
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noreferrer"
                                className="group bg-transparent text-foreground brutalist-border p-6 flex justify-between items-center hover:bg-[#111] transition-colors border"
                            >
                                <span className="font-mono uppercase tracking-widest text-sm">GitHub</span>
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}
