"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navItems = [
    { label: "Home", href: "/", active: true },
    { label: "Blog", href: "/blog", active: false },
    { label: "Contact", href: "/contact", active: false },
];

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-[#1a0a1a]/80 backdrop-blur-sm"
        >
            <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-8">
                {/* Left: Logo + Nav */}
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Zeedeo Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        />
                        <span className="text-[22px] font-semibold tracking-tight text-white">
                            Zeedeo
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="relative"
                            >
                                <motion.span
                                    className={`text-[15px] font-medium transition-colors duration-200 ${item.active
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
                <div className="flex items-center gap-3">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="h-[38px] rounded-full border border-white/30 bg-transparent px-5 text-[14px] font-medium text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/5"
                    >
                        Sign in
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="h-[38px] rounded-full border border-[#e91e8c] bg-[#e91e8c]/10 px-5 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-[#e91e8c]/20"
                    >
                        Sign Up
                    </motion.button>
                </div>
            </div>
        </motion.header>
    );
}
