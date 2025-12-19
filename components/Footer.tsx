"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="py-10"
        //   style={{
        //       background: "linear-gradient(90deg, #2d1230 0%, #1a0a1a 40%, #1a0a1a 100%)"
        //    }}
        >
            <div className="mx-auto flex items-end justify-between px-8 lg:px-16">
                {/* Left Side - Stacked Logo and Links */}
                <div className="flex items-end gap-10">
                    {/* Logo Column - Stacked */}
                    <div className="flex flex-col items-start gap-3">
                        {/* Logo with name included in image */}
                        <Link href="/">
                            <Image
                                src="/zeedeo-icon-footer.png"
                                alt="Zeedeo"
                                width={180}
                                height={48}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>

                        {/* Terms & Conditions below logo - aligned to left edge */}
                        <motion.a
                            href="/terms"
                            whileHover={{ opacity: 1 }}
                            className="text-[16px] text-white/60 transition-colors duration-200 hover:text-white"
                        >
                            Terms & Conditions
                        </motion.a>
                    </div>

                    {/* Privacy Policy */}
                    <motion.a
                        href="/privacy"
                        whileHover={{ opacity: 1 }}
                        className="text-[16px] text-white/60 transition-colors duration-200 hover:text-white"
                    >
                        Privacy Policy
                    </motion.a>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <motion.a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.15 }}
                            className="text-white/70 transition-colors duration-200 hover:text-white"
                            aria-label="Facebook"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5} d="M6.182 10.333c-.978 0-1.182.192-1.182 1.111v1.667c0 .92.204 1.111 1.182 1.111h2.363v6.667c0 .92.205 1.111 1.182 1.111h2.364c.978 0 1.182-.192 1.182-1.111v-6.667h2.654c.741 0 .932-.135 1.136-.806l.507-1.666c.349-1.149.133-1.417-1.137-1.417h-3.16V7.556c0-.614.529-1.112 1.181-1.112h3.364c.978 0 1.182-.191 1.182-1.11V3.11C19 2.191 18.796 2 17.818 2h-3.364c-3.263 0-5.909 2.487-5.909 5.556v2.777z" clipRule="evenodd"></path></svg>
                        </motion.a>
                        <motion.a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.15 }}
                            className="text-white/70 transition-colors duration-200 hover:text-white"
                            aria-label="Twitter"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"></path></svg>
                        </motion.a>
                        <motion.a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.15 }}
                            className="text-white/70 transition-colors duration-200 hover:text-white"
                            aria-label="Instagram"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1}><path strokeLinejoin="round" strokeWidth={1.5} d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"></path><path strokeWidth={1.5} d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.508 6.5h-.01"></path></g></svg>
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.15 }}
                            className="text-white/70 transition-colors duration-200 hover:text-white"
                            aria-label="LinkedIn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M4.5 9.5H4c-.943 0-1.414 0-1.707.293S2 10.557 2 11.5V20c0 .943 0 1.414.293 1.707S3.057 22 4 22h.5c.943 0 1.414 0 1.707-.293S6.5 20.943 6.5 20v-8.5c0-.943 0-1.414-.293-1.707S5.443 9.5 4.5 9.5Zm2-5.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0Z"></path><path strokeLinejoin="round" d="M12.326 9.5H11.5c-.943 0-1.414 0-1.707.293S9.5 10.557 9.5 11.5V20c0 .943 0 1.414.293 1.707S10.557 22 11.5 22h.5c.943 0 1.414 0 1.707-.293S14 20.943 14 20v-3.5c0-1.657.528-3 2.088-3c.78 0 1.412.672 1.412 1.5v4.5c0 .943 0 1.414.293 1.707s.764.293 1.707.293h.499c.942 0 1.414 0 1.707-.293c.292-.293.293-.764.293-1.706L22 14c0-2.486-2.364-4.5-4.703-4.5c-1.332 0-2.52.652-3.297 1.673c0-.63 0-.945-.137-1.179a1 1 0 0 0-.358-.358c-.234-.137-.549-.137-1.179-.137Z"></path></g></svg>
                        </motion.a>
                    </div>
                </div>

                {/* Right Side - Copyright */}
                <div className="text-[16px] text-white/50">
                    2026  ZEEDEO. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
