"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PlayIcon from "./icons/PlayIcon";

export default function GrowTogether() {
    return (
        <section className="relative flex min-h-full w-full max-w-[1728px] mx-auto items-center justify-center overflow-hidden py-12 px-4 md:py-20 md:px-8 lg:py-32">
            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center"
            >
                {/* Text Block - Center aligned on mobile */}
                <div className="text-center md:text-left">
                    {/* Main Heading */}
                    <h2 className="text-[28px] font-normal leading-[1.2] tracking-tight text-white sm:text-[40px] md:text-[65px]">
                        Grow Together
                    </h2>

                    {/* On Zeedeo with Play Button */}
                    <div className="mt-1 flex items-center justify-center gap-2 md:mt-2 md:gap-3 md:justify-start">
                        <span className="text-[28px] font-normal leading-[1.2] tracking-tight sm:text-[40px] md:text-[65px]">
                            <span className="text-white">On </span>
                            <span className="text-[#e91e8c]">Zeedeo</span>
                        </span>
                        {/* Play Button Icon */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.15 }}
                            className="cursor-pointer"
                        >
                            <PlayIcon size={24} className="text-[#e91e8c] md:hidden" />
                            <PlayIcon size={70} className="text-[#e91e8c] hidden md:block" />
                        </motion.div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 max-w-[300px] mx-auto text-[14px] leading-[1.5] text-white/70 sm:text-[18px] md:mt-8 md:max-w-[600px] md:text-[28px] md:text-white/80 md:mx-0">
                        Join our community who are building
                        <br />
                        authentic connections through video.
                    </p>
                </div>

                {/* Join Beta Button - Centered */}
                <div className="mt-6 md:mt-10">
                    <Link href="/join-beta">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="h-[40px] rounded-full border border-white bg-[#c91a7a] px-6 text-[14px] font-light text-white transition-all duration-200 hover:bg-[#b51670] hover:border-white/50 sm:h-[50px] sm:px-8 sm:text-[18px] md:h-[63px] md:px-10 md:text-[28px]"
                        >
                            Join beta
                        </motion.button>
                    </Link>
                </div>

                {/* Decorative Elements - Using hero-2.png */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-8 md:mt-12"
                >
                    <Image
                        src="/hero-2.png"
                        alt="Decorative element"
                        width={200}
                        height={200}
                        className="object-contain w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px]"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
