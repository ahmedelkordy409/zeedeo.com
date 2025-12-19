"use client";

import { motion } from "framer-motion";
import PlayIcon from "./icons/PlayIcon";

export default function GrowTogether() {
    return (
        <section className="relative flex h-screen items-center justify-center overflow-hidden">
            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 text-center"
            >
                {/* Main Heading */}
                <h2 className="text-[100px] font-normal leading-[1.2] tracking-tight text-white lg:text-[65px]">
                    Grow Together
                </h2>

                {/* On Zeedeo with Play Button */}
                <div className="mt-2 flex items-center justify-center gap-3">
                    <span className="text-[80px] font-normal leading-[1.2] tracking-tight lg:text-[65px]">
                        <span className="text-white">On </span>
                        <span className="text-[#e91e8c]">Zeedeo</span>
                    </span>
                    {/* Play Button Icon */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.15 }}
                        className="cursor-pointer"
                    >
                        <PlayIcon size={70} className="text-[#e91e8c]" />
                    </motion.div>
                </div>

                {/* Description */}
                <p className="mx-auto mt-8 max-w-[600px] text-[28px] leading-[1.5] text-white/80">
                    Join our community who are building<br />
                    authentic connections through video.
                </p>
            </motion.div>
        </section>
    );
}
