"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
                className="relative z-10 flex flex-col items-center"
            >
                {/* Text Block - Left aligned internally */}
                <div className="text-left">
                    {/* Main Heading */}
                    <h2 className="text-[100px] font-normal leading-[1.2] tracking-tight text-white lg:text-[65px]">
                        Grow Together
                    </h2>

                    {/* On Zeedeo with Play Button */}
                    <div className="mt-2 flex items-center gap-3">
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
                    <p className="mt-8 max-w-[600px] text-[28px] leading-[1.5] text-white/80">
                        Join our community who are building<br />
                        authentic connections through video.
                    </p>
                </div>

                {/* Join Beta Button - Centered */}
                <div className="mt-10">
                    <Link href="/join-beta">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="h-[70px] rounded-full border-1 border-white bg-[#c91a7a] px-12 text-[30px] font-light text-white transition-all duration-200 hover:bg-[#b51670] hover:border-white/50"
                        >
                            Join beta
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}

