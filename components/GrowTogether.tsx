"use client";

import { motion } from "framer-motion";

export default function GrowTogether() {
    return (
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#1a0a1a]">
            {/* Background Gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2d1230]/60 via-[#1a0a1a] to-[#1a0a1a]" />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 text-center"
            >
                <h2 className="text-[36px] font-bold leading-[1.3] tracking-tight text-white lg:text-[44px]">
                    Grow Together
                </h2>
                <div className="mt-1 flex items-center justify-center gap-3">
                    <span className="text-[36px] font-bold leading-[1.3] tracking-tight lg:text-[44px]">
                        <span className="text-white">On </span>
                        <span className="text-[#e91e8c]">Zeedeo</span>
                    </span>
                    {/* Play Button Icon */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.15 }}
                        className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-[#e91e8c]"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
