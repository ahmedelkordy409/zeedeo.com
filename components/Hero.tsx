"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#1a0a1a] pt-[72px]">
            <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-8 py-16 lg:px-16">
                {/* Left Content */}
                <div className="relative z-10 max-w-[600px]">
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-[48px] font-semibold leading-[1.15] tracking-tight text-white lg:text-[56px]"
                    >
                        Social Video Discovery,
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="mt-1 flex items-center gap-3"
                    >
                        <span className="text-[48px] font-semibold italic leading-[1.15] tracking-tight text-[#e91e8c] lg:text-[56px]">
                            that truly matters.
                        </span>
                        {/* Play Button Icon */}
                        <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#e91e8c]">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="mt-6 text-[18px] font-normal italic tracking-wide text-white/60"
                    >
                        Get real, Get discovered, Get hired, Connect, Stand out.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-10 flex h-[52px] items-center gap-1 rounded-full bg-[#e91e8c] px-8 text-[16px] font-medium text-white shadow-lg shadow-[#e91e8c]/30 transition-all duration-200 hover:bg-[#d11a7d] hover:shadow-xl hover:shadow-[#e91e8c]/40"
                    >
                        Join beta
                        <span className="ml-1">→</span>
                    </motion.button>

                    {/* Decorative Elements */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute bottom-[-40px] left-[180px]"
                    >
                        {/* Cursor Arrow */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute -top-6 left-[-30px]">
                            <path d="M5 3L19 12L12 13L9 21L5 3Z" fill="#f5deb3" stroke="#f5deb3" strokeWidth="1" />
                        </svg>

                        {/* Dotted Line */}
                        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="absolute -top-4 left-0">
                            <path
                                d="M0 0 Q40 20 80 60"
                                stroke="#4a6fa5"
                                strokeWidth="1.5"
                                strokeDasharray="4 4"
                                fill="none"
                            />
                        </svg>

                        {/* Briefcase Icon */}
                        <svg width="64" height="56" viewBox="0 0 64 56" fill="none" className="absolute top-8 left-[60px]">
                            <rect x="8" y="12" width="48" height="36" rx="4" stroke="#e91e8c" strokeWidth="2" fill="none" />
                            <rect x="20" y="4" width="24" height="12" rx="2" stroke="#e91e8c" strokeWidth="2" fill="none" />
                            <rect x="4" y="20" width="56" height="20" rx="2" stroke="#f5c542" strokeWidth="2" fill="none" />
                            <circle cx="32" cy="30" r="4" stroke="#00d9a5" strokeWidth="2" fill="none" />
                        </svg>
                    </motion.div>
                </div>

                {/* Right Content - Speech Bubble with Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >

                    {/* Image Container */}
                    <div className="relative h-[380px] w-[340px] overflow-hidden">
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

            {/* Background Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1a0a1a] via-transparent to-[#2d1230]/50" />
        </section>
    );
}
