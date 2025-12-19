"use client";

import { motion } from "framer-motion";
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
        //    className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-[#1a0a1a]/80 backdrop-blur-sm"
        >
            <div className="mx-auto flex h-full max-w-full items-center justify-between px-8 py-10">
                {/* Left: Logo + Nav */}
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/zeedeo-icon-header.png"
                            alt="Zeedeo"
                            width={150}
                            height={40}
                            className="h-13 w-auto object-contain"
                        />
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
                                    className={`text-[23px] font-medium transition-colors duration-200 ${isActive(item.href)
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
                        className="h-[48px] rounded-full border border-[#313131]/50 bg-black/25 px-6 text-[23px] font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/35 hover:border-[#313131]/70"
                    >
                        Sign in
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="h-[48px] rounded-full border border-[#D91883]/20 bg-[#D91883]/40 px-6 text-[23px] font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-[#D91883]/50 hover:border-[#D91883]/30"
                    >
                        Sign Up
                    </motion.button>
                </div>
            </div>
        </motion.header>
    );
}
