"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        title: "The Rise of Social Video Apps VS the Struggle for Website Visibility Online",
        date: "April 4, 2025",
        image: "https://picsum.photos/seed/blog1/600/450",
        slug: "rise-of-social-video-apps"
    },
    {
        id: 2,
        title: "5 Reasons Why Social Video Will Dominate Your Business Strategy...",
        date: "April 3, 2025",
        image: "https://picsum.photos/seed/blog2/600/450",
        slug: "social-video-business-strategy"
    },
    {
        id: 3,
        title: "5 Reasons Why Social Video Will Dominate Your Business Strategy...",
        date: "April 3, 2025",
        image: "https://picsum.photos/seed/blog3/600/450",
        slug: "social-video-business-strategy-2"
    },
    {
        id: 4,
        title: "5 Reasons Why Social Video Will Dominate Your Business Strategy...",
        date: "April 3, 2025",
        image: "https://picsum.photos/seed/blog4/600/450",
        slug: "social-video-business-strategy-3"
    },
    {
        id: 5,
        title: "5 Reasons Why Social Video Will Dominate Your Business Strategy...",
        date: "April 3, 2025",
        image: "https://picsum.photos/seed/blog5/600/450",
        slug: "social-video-business-strategy-4"
    },
    {
        id: 6,
        title: "5 Reasons Why Social Video Will Dominate Your Business Strategy...",
        date: "April 3, 2025",
        image: "https://picsum.photos/seed/blog6/600/450",
        slug: "social-video-business-strategy-5"
    },
    {
        id: 7,
        title: "5 Reasons Why Social Video Will Dominate Your Business Strategy...",
        date: "April 3, 2025",
        image: "https://picsum.photos/seed/blog7/600/450",
        slug: "social-video-business-strategy-6"
    },
    {
        id: 8,
        title: "5 Reasons Why Social Video Will Dominate Your Business Strategy...",
        date: "April 3, 2025",
        image: "https://picsum.photos/seed/blog8/600/450",
        slug: "social-video-business-strategy-7"
    },
    {
        id: 9,
        title: "5 Reasons Why Social Video Will Dominate Your Business Strategy...",
        date: "April 3, 2025",
        image: "https://picsum.photos/seed/blog9/600/450",
        slug: "social-video-business-strategy-8"
    },
];

interface BlogCardProps {
    post: {
        id: number;
        title: string;
        date: string;
        image: string;
        slug: string;
    };
    index: number;
}

function BlogCard({ post, index }: BlogCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <Link href={`/blog/${post.slug}`} className="block">
                {/* Outer wrapper with gradient border */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="relative rounded-[16px] p-[1px]"
                    style={{
                        background: "linear-gradient(135deg, rgba(217, 24, 131, 0.6) 0%, rgba(217, 24, 131, 0.3) 50%, rgba(217, 24, 131, 0.15) 100%)"
                    }}
                >
                    {/* Inner card container */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-[#1a0a1a]">
                        {/* Image */}
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Dark Overlay - stronger gradient from bottom */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.1) 60%, transparent 100%)"
                            }}
                        />

                        {/* Date Badge */}
                        <div
                            className="absolute right-4 top-4 rounded-full border border-white/20 px-4 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm"
                            style={{
                                background: "rgba(30, 20, 40, 0.7)"
                            }}
                        >
                            {post.date}
                        </div>

                        {/* Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="line-clamp-2 text-[17px] font-semibold leading-[1.35] text-white">
                                {post.title}
                            </h3>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.article>
    );
}

export default function BlogSection() {
    return (
        <section className="bg-[#1a0a1a] py-16 lg:py-24">
            <div className="mx-auto  px-4 lg:px-8">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center text-[32px] font-semibold italic tracking-tight text-white lg:text-[42px]"
                >
                    Discover Our Latest Articles
                </motion.h2>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>

                {/* Pagination */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 flex justify-center"
                >
                    {/* Outer glow wrapper */}
                    <div
                        className="rounded-full p-[1px]"
                        style={{
                            background: "linear-gradient(135deg, rgba(100, 80, 120, 0.4) 0%, rgba(60, 50, 80, 0.2) 50%, rgba(80, 60, 100, 0.3) 100%)"
                        }}
                    >
                        <div
                            className="flex items-center gap-12 rounded-full px-8 py-3"
                            style={{
                                background: "linear-gradient(180deg, rgba(30, 25, 40, 0.95) 0%, rgba(20, 15, 30, 0.98) 100%)"
                            }}
                        >
                            {/* Previous Arrow */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-white/60 transition-colors duration-200 hover:text-white"
                                aria-label="Previous page"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </motion.button>

                            {/* Page Number */}
                            <span className="min-w-[20px] text-center text-[20px] font-semibold text-white">
                                1
                            </span>

                            {/* Next Arrow */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-white/60 transition-colors duration-200 hover:text-white"
                                aria-label="Next page"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16"
                >
                    <div
                        className="relative overflow-hidden rounded-[32px] px-8 py-20 lg:px-16 lg:py-24"
                        style={{
                            background: "linear-gradient(135deg, #1a1a2e 0%, #1e1e35 20%, #1a1a30 40%, #251a35 60%, #351a3a 80%, #401a40 100%)",
                            border: "1px solid #D91883"
                        }}
                    >
                        {/* Blue gradient on left side */}
                        <div
                            className="pointer-events-none absolute inset-0 rounded-[32px]"
                            style={{
                                background: "radial-gradient(ellipse 80% 100% at 0% 50%, rgba(83, 89, 226, 0.25) 0%, transparent 50%)"
                            }}
                        />

                        {/* Pink/magenta gradient on right side - main glow */}
                        <div
                            className="pointer-events-none absolute inset-0 rounded-[32px]"
                            style={{
                                background: "radial-gradient(ellipse 80% 120% at 100% 50%, rgba(217, 24, 131, 0.35) 0%, transparent 50%)"
                            }}
                        />

                        {/* Additional pink center-right glow */}
                        <div
                            className="pointer-events-none absolute inset-0 rounded-[32px]"
                            style={{
                                background: "radial-gradient(ellipse 60% 80% at 75% 60%, rgba(217, 24, 131, 0.20) 0%, transparent 50%)"
                            }}
                        />

                        {/* Content */}
                        <div className="relative z-10 mx-auto max-w-[680px] text-center">
                            {/* Heading */}
                            <h2 className="text-[28px] font-semibold tracking-tight text-white lg:text-[36px]">
                                Subscribe to our Newsletters.
                            </h2>

                            {/* Subtext */}
                            <p className="mt-4 text-[14px] leading-relaxed text-white/60 lg:text-[16px]">
                                As we grow our Zeedeo community we want to ensure that you receive some of our best content and services.
                            </p>

                            {/* Email Form */}
                            <form className="mt-10 w-full">
                                <div
                                    className="relative w-full rounded-[8px] overflow-hidden bg-transparent backdrop-blur-[8px]"
                                >
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="h-[55px] w-full bg-transparent pl-6 pr-[130px] text-[16px] text-white placeholder:text-white/30 focus:outline-none rounded-[8px] shadow-[inset_1px_1px_0px_rgba(255,255,255,1),_inset_-1px_-1px_0px_rgba(255,255,255,0.5)]"
                                    />
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="absolute right-0 top-0 h-full px-8 text-[16px] font-medium text-white transition-all duration-200 bg-transparent"
                                        style={{
                                            borderLeft: "1px solid rgba(255, 255, 255, 0.5)"
                                        }}
                                    >
                                        Send
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
