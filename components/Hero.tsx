"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PlayIcon from "./icons/PlayIcon";

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-100px)] h-auto overflow-hidden flex items-start pt-4 md:pt-36">
            <div className="mx-auto grid w-full max-w-[1728px] grid-cols-5 items-start gap-2 px-4 md:gap-8 md:px-8 lg:px-16">
                {/* Left Content - 3 columns on mobile, 3 on desktop */}
                <div className="relative z-10 col-span-3 lg:col-span-3">
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-[18px] font-light leading-[1.15] tracking-tight text-white sm:text-[28px] md:text-[56px] lg:text-[72px]"
                    >
                        Social Video Discovery,
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="mt-0.5 flex items-center gap-1 md:mt-1 md:gap-3"
                    >
                        <span className="text-[18px] italic font-normal leading-[1.15] tracking-tight text-[#e91e8c] sm:text-[28px] md:text-[56px] md:not-italic lg:text-[72px]">
                            that truly matters.
                        </span>
                        {/* Play Button Icon */}
                        <PlayIcon size={18} className="text-[#e91e8c] md:hidden" />
                        <PlayIcon size={70} className="text-[#e91e8c] hidden md:block" />
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="mt-2 text-[10px] font-normal leading-[1.4] tracking-wide text-white/70 sm:text-[14px] md:mt-6 md:text-[28px] md:text-white"
                    >
                        Get real, Get discovered, Get hired,<br className="hidden md:block" />
                        Connect and Stand out.
                    </motion.p>

                    {/* CTA Button */}
                    <Link href="/join-beta">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-4 h-[32px] rounded-full border border-white bg-[#c91a7a] px-4 text-[12px] font-light text-white transition-all duration-200 hover:bg-[#b51670] hover:border-white/50 sm:h-[40px] sm:px-6 sm:text-[16px] md:mt-10 md:h-[63px] md:px-10 md:text-[28px]"
                        >
                            Join beta
                        </motion.button>
                    </Link>

                    {/* Decorative Elements - Hidden on mobile */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute bottom-[-90px] left-[150px] hidden md:block md:left-[250px]"
                    >
                        <Image
                            src="/hero-2.png"
                            alt="Decorative element"
                            width={250}
                            height={250}
                            className="object-contain w-[150px] h-[150px] md:w-[250px] md:h-[250px]"
                        />
                    </motion.div>
                </div>

                {/* Right Content - 2 columns */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="relative col-span-2 lg:col-span-2"
                >
                    {/* Image Container */}
                    <div className="relative h-[20vh] w-full overflow-hidden sm:h-[30vh] md:h-[55vh] md:max-w-[450px] md:ml-auto lg:-mt-16">
                        <Image
                            src="/hero-1.png"
                            alt="Two women smiling"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
