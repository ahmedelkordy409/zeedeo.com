"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-50"
        >
            <div className="mx-auto flex h-full max-w-[1728px] items-center justify-between px-4 py-6 md:px-8 md:py-10">
                {/* Mobile: Hamburger Menu */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex flex-col gap-1.5 p-2 md:hidden"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="h-0.5 w-6 bg-white"
                    />
                    <motion.span
                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="h-0.5 w-6 bg-white"
                    />
                    <motion.span
                        animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="h-0.5 w-6 bg-white"
                    />
                </button>

                {/* Left: Logo + Nav */}
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/zeedeo-icon-header.png"
                            alt="Zeedeo"
                            width={100}
                            height={26}
                            className="h-6 w-auto object-contain md:h-8"
                        />
                    </Link>

                    {/* Navigation - Hidden on mobile */}
                    <nav className="hidden items-center gap-10 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="relative"
                            >
                                <motion.span
                                    className={`text-[18px] font-semibold transition-colors duration-200 ${isActive(item.href)
                                        ? "text-[#e91e8c]"
                                        : "text-white/90 hover:text-white"
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {item.label}
                                </motion.span>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right: Auth Buttons */}
                <div className="flex items-center gap-2 md:gap-3">
                    <Link href="https://app.zeedeo.com/auth/sign-in">
                        <motion.span
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="inline-flex h-[36px] items-center rounded-full border border-[#B6A4A2]/50 bg-black/20 px-4 text-[14px] font-medium text-white backdrop-blur-[16px] transition-all duration-200 hover:bg-black/30 hover:border-[#B6A4A2]/70 md:h-[48px] md:px-6 md:text-[18px]"
                        >
                            Sign in
                        </motion.span>
                    </Link>
                    <Link href="https://app.zeedeo.com/auth/sign-up">
                        <motion.span
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="inline-flex h-[36px] items-center rounded-full border border-[#B6A4A2]/50 bg-[#D91883]/40 px-4 text-[14px] font-medium text-white backdrop-blur-[16px] transition-all duration-200 hover:bg-[#D91883]/50 hover:border-[#B6A4A2]/70 md:h-[48px] md:px-6 md:text-[18px]"
                        >
                            Sign Up
                        </motion.span>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute left-0 right-0 top-full bg-[#1a0a1a]/95 backdrop-blur-lg md:hidden"
                    >
                        <nav className="flex flex-col px-6 py-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`py-3 text-[18px] font-semibold transition-colors duration-200 ${isActive(item.href)
                                        ? "text-[#e91e8c]"
                                        : "text-white/90"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
