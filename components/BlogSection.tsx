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
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                    {/* Image */}
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Date Badge */}
                    <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-gray-800 backdrop-blur-sm">
                        {post.date}
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-white">
                            {post.title}
                        </h3>
                    </div>
                </motion.div>
            </Link>
        </motion.article>
    );
}

export default function BlogSection() {
    return (
        <section className="bg-[#1a0a1a] py-16 lg:py-24">
            <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
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
                    <div className="flex items-center gap-8 rounded-full border border-white/20 bg-[#1a0a1a] px-6 py-3">
                        {/* Previous Arrow */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white/70 transition-colors duration-200 hover:text-white"
                            aria-label="Previous page"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </motion.button>

                        {/* Page Number */}
                        <span className="min-w-[24px] text-center text-[18px] font-medium text-white">
                            1
                        </span>

                        {/* Next Arrow */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white/70 transition-colors duration-200 hover:text-white"
                            aria-label="Next page"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </motion.button>
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
                        className="relative overflow-hidden rounded-[24px] px-8 py-16 lg:px-16 lg:py-20"
                        style={{
                            background: "linear-gradient(135deg, #1e1e2f 0%, #252538 20%, #1a1a2a 40%, #1e1e2f 60%, #2a1a2f 80%, #351a30 100%)"
                        }}
                    >
                        {/* Subtle gradient overlay for depth */}
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background: "radial-gradient(ellipse at 80% 50%, rgba(80, 40, 80, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 20% 50%, rgba(40, 40, 80, 0.1) 0%, transparent 50%)"
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
                            <form className="mt-10">
                                <div className="flex flex-col gap-3 sm:flex-row sm:gap-0">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="h-[52px] flex-1 rounded-full border border-white/20 bg-transparent px-6 text-[14px] text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none sm:rounded-r-none sm:border-r-0"
                                    />
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="h-[52px] rounded-full border border-white/20 bg-[#2a1a3a] px-8 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-[#3a2a4a] sm:rounded-l-none"
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
