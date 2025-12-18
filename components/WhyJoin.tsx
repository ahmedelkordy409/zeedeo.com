"use client";

import { motion } from "framer-motion";

const features = [
    { text: "Post job made easy to\nattract the right Talent", filled: false, top: "8%", left: "28%" },
    { text: "Create Topic You Love\nto grow  audiences", filled: false, top: "18%", left: "32%" },
    { text: "Discover Businesses,\nPeople, Topics & Jobs", filled: false, top: "30%", left: "34%" },
    { text: "Promote your\npersonal brand", filled: true, top: "44%", left: "32%" },
    { text: "Video ATS to match\nTalent & Jobs", filled: false, top: "58%", left: "34%" },
    { text: "Apply smarter  focusing\non soft skills first!", filled: false, top: "72%", left: "32%" },
];

export default function WhyJoin() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#1a0a1a] py-20">
            <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-8 lg:px-16">
                {/* Left Side - Phone with Features */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative hidden w-[55%] lg:block"
                >
                    {/* Phone Container */}
                    <div className="relative ml-8">
                        {/* Phone Frame */}
                        <div className="relative h-[520px] w-[260px] rounded-[40px] border-[8px] border-[#2a2a2a] bg-[#1a1a1a] shadow-2xl">
                            {/* Phone Notch */}
                            <div className="absolute left-1/2 top-2 h-[24px] w-[80px] -translate-x-1/2 rounded-full bg-[#1a1a1a]"></div>

                            {/* Phone Screen */}
                            <div className="absolute inset-2 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#8b7355] to-[#6b5a45]">
                                {/* Image placeholder - woman sitting */}
                                <div className="absolute inset-0 flex flex-col items-center justify-end">
                                    {/* Background cafe scene */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#5a4a3a] via-[#7a6a5a] to-[#4a3a2a]" />

                                    {/* Woman silhouette */}
                                    <div className="relative z-10 mb-4 h-[70%] w-[85%] rounded-t-3xl bg-gradient-to-b from-[#2a2020] to-[#1a1515] opacity-90" />
                                </div>
                            </div>
                        </div>

                        {/* Feature Pills with Dotted Lines */}
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="absolute"
                                style={{ top: feature.top, left: feature.left }}
                            >
                                {/* Dotted Line */}
                                <svg
                                    className="absolute -left-8 top-1/2 -translate-y-1/2"
                                    width="32"
                                    height="2"
                                >
                                    <line
                                        x1="0"
                                        y1="1"
                                        x2="32"
                                        y2="1"
                                        stroke="#3a5a8a"
                                        strokeWidth="2"
                                        strokeDasharray="4 3"
                                    />
                                </svg>

                                {/* Pill */}
                                <div
                                    className={`whitespace-pre-line rounded-full px-5 py-2.5 text-center text-[11px] font-medium leading-[1.4] ${feature.filled
                                        ? "bg-[#e91e8c] text-white"
                                        : "border border-white/20 bg-[#1a0a1a]/80 text-white/90 backdrop-blur-sm"
                                        }`}
                                >
                                    {feature.text}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side - Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="w-full lg:w-[45%]"
                >
                    {/* Heading */}
                    <h2 className="text-[44px] font-semibold leading-[1.1] tracking-tight lg:text-[52px]">
                        <span className="text-white">Why Join </span>
                        <span className="text-[#e91e8c]">Zeedeo</span>
                        <span className="text-white">?</span>
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-[480px] text-[16px] leading-[1.7] text-white/70">
                        Because <span className="italic text-[#e91e8c]">YOU</span> matter! We redefine how European businesses
                        and people connect, using video as the trust layer that drives
                        social impact, helps you grow and lets you stand out in a world
                        that rewards authenticity.
                    </p>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="mt-10 flex h-[56px] items-center justify-center gap-1 rounded-full bg-[#e91e8c] px-12 text-[16px] font-medium tracking-wide text-white shadow-lg shadow-[#e91e8c]/30 transition-all duration-200 hover:bg-[#d11a7d] hover:shadow-xl hover:shadow-[#e91e8c]/40"
                    >
                        Join  beta
                        <span className="ml-1">→</span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
