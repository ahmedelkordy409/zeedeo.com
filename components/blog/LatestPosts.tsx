"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogPost {
    id: number;
    attributes: {
        title: string;
        slug: string;
        description: string;
        createdAt: string;
        readTime?: string;
        thumbnailImage: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
    };
}

async function getPosts(): Promise<BlogPost[]> {
    const res = await fetch(
        `https://blog.zeedeo.com/api/articles/?populate=%2A&sort=publishedAt:desc`,
        {
            method: "GET",
            cache: "no-store",
        }
    );
    if (res.ok) {
        const body = await res.json();
        return body?.data;
    }
    return [];
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    const { title, slug, createdAt, thumbnailImage } = post.attributes;
    const imageUrl = thumbnailImage.data.attributes.url;

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <Link href={`/blog/${slug}`} className="block">
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
                            src={imageUrl}
                            alt={title}
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
                            {new Date(createdAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </div>

                        {/* Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="line-clamp-2 text-[17px] font-semibold leading-[1.35] text-white">
                                {title}
                            </h3>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.article>
    );
}

export default function LatestPosts() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    // Newsletter subscription state
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [subscribed, setSubscribed] = useState(false);
    const [subscribing, setSubscribing] = useState(false);
    const [subscribeError, setSubscribeError] = useState<string | null>(null);

    const validateEmail = (email: string): string | null => {
        if (!email.trim()) {
            return "Email is required";
        }
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            return "Invalid email address";
        }
        return null;
    };

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribeError(null);

        const validationError = validateEmail(email);
        if (validationError) {
            setEmailError(validationError);
            return;
        }

        setSubscribing(true);

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email.trim().toLowerCase() }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                if (response.status === 429) {
                    setSubscribeError("Too many attempts. Please try again later.");
                } else if (data.message?.includes("already subscribed")) {
                    setSubscribeError("This email is already subscribed.");
                } else {
                    setSubscribeError(data.error || data.message || "Failed to subscribe");
                }
            } else {
                setSubscribed(true);
                setEmail("");
                // Reset success message after 5 seconds
                setTimeout(() => setSubscribed(false), 5000);
            }
        } catch (err) {
            setSubscribeError("Connection error. Please try again.");
        } finally {
            setSubscribing(false);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailError(null);
        setSubscribeError(null);
    };

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    // Calculate pagination
    const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage));
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#e91e8c] border-t-transparent" />
            </div>
        );
    }

    return (
        <section className="bg-[#1a0a1a] py-16 lg:py-24">
            <div className="mx-auto  max-w-[1728px] px-4 lg:px-8">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center text-[32px] font-semibold italic tracking-tight text-white lg:text-[42px]"
                >
                    Our Latest Articles
                </motion.h2>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {currentPosts.map((post, index) => (
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
                                whileHover={currentPage > 1 ? { scale: 1.1 } : {}}
                                whileTap={currentPage > 1 ? { scale: 0.95 } : {}}
                                onClick={goToPrevPage}
                                disabled={currentPage <= 1}
                                className={`transition-colors duration-200 ${currentPage > 1
                                    ? "text-white/60 hover:text-white cursor-pointer"
                                    : "text-white/20 cursor-not-allowed"
                                    }`}
                                aria-label="Previous page"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </motion.button>

                            {/* Page Number */}
                            <span className="min-w-[20px] text-center text-[20px] font-semibold text-white">
                                {currentPage}
                            </span>

                            {/* Next Arrow */}
                            <motion.button
                                whileHover={currentPage < totalPages ? { scale: 1.1 } : {}}
                                whileTap={currentPage < totalPages ? { scale: 0.95 } : {}}
                                onClick={goToNextPage}
                                disabled={currentPage >= totalPages}
                                className={`transition-colors duration-200 ${currentPage < totalPages
                                    ? "text-white/60 hover:text-white cursor-pointer"
                                    : "text-white/20 cursor-not-allowed"
                                    }`}
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
                    className="mt-24"
                >
                    <div
                        className="relative overflow-hidden rounded-[15px] px-8 py-20 lg:px-16 lg:py-24"
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
                        <div className="relative z-10 mx-auto w-full text-center">

                            <div className="max-w-[1000px] mx-auto ">
                                <h2 className="text-[80px] font-normal tracking-tight text-white lg:text-[70px]">
                                    Subscribe to our Newsletters.
                                </h2>
                                <p className="mx-auto mt-5  text-[25px] leading-relaxed text-white lg:text-[25px]">
                                    As we grow our Zeedeo community we want to ensure that you receive some of our best content and services.
                                </p>

                            </div>
                            {/* Email Form - Input with button inside */}
                            <form className="mt-12 w-full max-w-[1200px] mx-auto" onSubmit={handleNewsletterSubmit}>
                                <div
                                    className="relative w-full rounded-[8px] overflow-hidden bg-transparent backdrop-blur-[8px]"
                                >
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        disabled={subscribing}
                                        className={`h-[70px] w-full bg-transparent pl-8 pr-[150px] text-[18px] text-white placeholder:text-white focus:outline-none rounded-[8px] ${emailError
                                                ? "shadow-[inset_1px_1px_0px_rgba(255,0,0,0.5),_inset_-1px_-1px_0px_rgba(255,0,0,0.25)]"
                                                : "shadow-[inset_1px_1px_0px_rgba(255,255,255,1),_inset_-1px_-1px_0px_rgba(255,255,255,0.5)]"
                                            }`}
                                    />
                                    <motion.button
                                        type="submit"
                                        disabled={subscribing}
                                        whileHover={!subscribing ? { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" } : {}}
                                        whileTap={!subscribing ? { scale: 0.98 } : {}}
                                        className={`absolute right-0 top-0 h-full px-10 text-[20px] font-medium text-white transition-all duration-200 bg-transparent ${subscribing ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                        style={{
                                            borderLeft: "1px solid rgba(255, 255, 255, 0.5)"
                                        }}
                                    >
                                        {subscribing ? "Sending..." : "Send"}
                                    </motion.button>
                                </div>
                                {/* Feedback Messages */}
                                <div className="mt-4 text-center">
                                    {emailError && (
                                        <p className="text-red-400 text-[16px]">{emailError}</p>
                                    )}
                                    {subscribeError && (
                                        <p className="text-red-400 text-[16px]">{subscribeError}</p>
                                    )}
                                    {subscribed && (
                                        <p className="text-green-400 text-[16px]">Successfully subscribed!</p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
