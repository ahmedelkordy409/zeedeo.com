"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PlayIcon from "./icons/PlayIcon";

export default function Hero() {
    return (
        <section className="relative h-[calc(100vh-72px)] overflow-hidden flex items-center">
            <div className="mx-auto grid w-full grid-cols-1 items-center gap-8 px-8 lg:grid-cols-5 lg:px-16">
                {/* Left Content - 3 columns */}
                <div className="relative z-10 lg:col-span-3">
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-[56px] font-normal font-light leading-[1.15] tracking-tight text-white lg:text-[72px]"
                    >
                        Social Video Discovery,
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="mt-1 flex items-center gap-3"
                    >
                        <span className="text-[56px] font-normal leading-[1.15] tracking-tight text-[#e91e8c] lg:text-[72px]">
                            that truly matters.
                        </span>
                        {/* Play Button Icon */}
                        <PlayIcon size={70} className="text-[#e91e8c]" />
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="mt-6 text-[28px] font-normal tracking-wide text-white/60"
                    >
                        Get real, Get discovered, Get hired, Connect, Stand out.
                    </motion.p>

                    {/* CTA Button */}
                    <Link href="/join-beta">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-10 h-[70px] rounded-full border-1 border-white bg-[#c91a7a] px-12 text-[30px] font-light text-white transition-all duration-200 hover:bg-[#b51670] hover:border-white/50"
                        >
                            Join beta
                        </motion.button>
                    </Link>

                    {/* Decorative Elements */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute bottom-[-90px] left-[250px]"
                    >
                        <Image
                            src="/hero-2.png"
                            alt="Decorative element"
                            width={250}
                            height={250}
                            className="object-contain   "
                        />
                    </motion.div>
                </div>

                {/* Right Content - 2 columns */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="relative hidden lg:col-span-2 lg:block"
                >

                    {/* Image Container */}
                    <div className="relative h-[70vh] max-w-[550px] overflow-hidden ml-auto">
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
