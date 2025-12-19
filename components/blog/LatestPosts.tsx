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
    const { title, slug, createdAt, readTime, thumbnailImage, description } = post.attributes;
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
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-800"
                >
                    {/* Image */}
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Date Badge */}
                    <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-gray-800 backdrop-blur-sm">
                        {new Date(createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-white">
                            {title}
                        </h3>
                        {readTime && (
                            <p className="mt-1 text-[11px] text-white/60">
                                {readTime} min read
                            </p>
                        )}
                    </div>
                </motion.div>
            </Link>
        </motion.article>
    );
}

export default function LatestPosts() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#e91e8c] border-t-transparent" />
            </div>
        );
    }

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
                    Our Latest Articles
                </motion.h2>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>

                {/* Newsletter Section (Reused from BlogSection) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-24"
                >
                    <div
                        className="relative overflow-hidden rounded-[24px] px-8 py-16 lg:px-16 lg:py-20"
                        style={{
                            background: "linear-gradient(135deg, #1e1e2f 0%, #252538 20%, #1a1a2a 40%, #1e1e2f 60%, #2a1a2f 80%, #351a30 100%)"
                        }}
                    >
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background: "radial-gradient(ellipse at 80% 50%, rgba(80, 40, 80, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 20% 50%, rgba(40, 40, 80, 0.1) 0%, transparent 50%)"
                            }}
                        />
                        <div className="relative z-10 mx-auto max-w-[680px] text-center">
                            <h2 className="text-[28px] font-semibold tracking-tight text-white lg:text-[36px]">
                                Subscribe to our Newsletters.
                            </h2>
                            <p className="mt-4 text-[14px] leading-relaxed text-white/60 lg:text-[16px]">
                                As we grow our Zeedeo community we want to ensure that you receive some of our best content and services.
                            </p>
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
