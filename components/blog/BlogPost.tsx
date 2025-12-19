"use client";

import Image from "next/image";
import { useEffect } from "react";

interface BlogPostProps {
    data: any;
    thumbnail: string;
}

export default function BlogPost({ data, thumbnail }: BlogPostProps) {
    const { attributes } = data;
    const { title, author, blogContent, seo, heroImage } = attributes;

    useEffect(() => {
        // Update SEO metadata
        if (seo) {
            document.title = seo.metaTitle || `${title} | Zeedeo`;

            const metaTitle = document.querySelector('meta[name="title"]');
            if (metaTitle) {
                metaTitle.setAttribute("content", seo.metaTitle || title);
            }

            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute("content", seo.metaDescription || "");
            }

            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute("content", seo.keywords || "Blog, Zeedeo");
            }
        }

        // Update Open Graph tags
        const ogImage = document.querySelector('meta[property="og:image"]');
        const imageUrl = thumbnail || heroImage?.data?.attributes?.url || "/favicon.ico";
        if (ogImage) {
            ogImage.setAttribute("content", imageUrl);
        }

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute("content", title);
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute("content", attributes.description || "");
        }
    }, [data, thumbnail, title, seo, attributes.description, heroImage]);

    return (
        <article className="mx-auto max-w-4xl px-6 py-12 lg:py-20">
            {/* Hero Image */}
            {heroImage?.data && (
                <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl border border-white/10">
                    <Image
                        src={heroImage.data.attributes.url}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Header */}
            <header className="mb-12 text-center">
                <h1 className="text-[36px] font-bold leading-tight text-white lg:text-[48px]">
                    {title}
                </h1>
                {author && (
                    <p className="mt-4 text-[16px] text-[#e91e8c]">
                        Published by {author}
                    </p>
                )}
            </header>

            {/* Content */}
            <div
                className="prose prose-invert max-w-none prose-p:text-white/70 prose-headings:text-white prose-a:text-[#e91e8c] prose-strong:text-white"
                dangerouslySetInnerHTML={{ __html: blogContent }}
            />

            {/* Share Buttons Placeholder (Can be implemented later if needed) */}
            <div className="mt-16 border-t border-white/10 pt-8">
                <div className="flex items-center justify-center gap-4">
                    <span className="text-white/60">Share this article:</span>
                    {/* Add social icons here */}
                </div>
            </div>
        </article>
    );
}
