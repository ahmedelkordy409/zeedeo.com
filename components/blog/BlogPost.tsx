"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

interface BlogPostProps {
    data: any;
    thumbnail: string;
}

export default function BlogPost({ data, thumbnail }: BlogPostProps) {
    const { attributes } = data;
    const { title, author, blogContent, seo, heroImage, publishedAt, createdAt } = attributes;

    // Format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const displayDate = publishedAt || createdAt;

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

    // Share URLs
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);

    const socialLinks = [
        { icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, label: 'Share on Facebook' },
        { icon: Twitter, href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, label: 'Share on Twitter' },
        { icon: Instagram, href: '#', label: 'Share on Instagram' },
        { icon: Linkedin, href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, label: 'Share on LinkedIn' },
        { icon: Mail, href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`, label: 'Share via Email' },
    ];

    return (
        <article className="relative">
            {/* Hero Section with Title */}
            <header className="relative px-6 pt-16 pb-12 lg:pt-24 lg:pb-16">
                <div className="mx-auto max-w-5xl text-center">
                    {/* Title */}
                    <h1 className="text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-[42px] lg:text-[56px]">
                        {title}
                    </h1>

                    {/* Date */}
                    {displayDate && (
                        <p className="mt-6 text-[14px] text-white/50 lg:text-[16px]">
                            {formatDate(displayDate)}
                        </p>
                    )}

                    {/* Social Share Icons */}
                    <div className="mt-6 flex items-center justify-center gap-5">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-white/70 transition-colors duration-200 hover:text-white"
                            >
                                <social.icon size={22} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                </div>
            </header>

            {/* Hero Image */}
            {heroImage?.data && (
                <div className="mx-auto max-w-5xl px-6">
                    <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
                        <Image
                            src={heroImage.data.attributes.url}
                            alt={title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
                <div
                    className="blog-content prose prose-lg prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: blogContent }}
                />
            </div>

            {/* Bottom Share Section */}
            <div className="mx-auto max-w-4xl px-6 pb-16">
                <div className="border-t border-white/10 pt-8">
                    <div className="flex items-center justify-center gap-5">
                        <span className="text-[14px] text-white/50">Share this article:</span>
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-white/70 transition-colors duration-200 hover:text-[#e91e8c]"
                            >
                                <social.icon size={20} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Blog Content Styles */}
            <style jsx global>{`
                .blog-content {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 17px;
                    line-height: 1.8;
                }

                .blog-content h1 {
                    color: white;
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                }

                .blog-content h2 {
                    color: white;
                    font-size: 1.75rem;
                    font-weight: 600;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    line-height: 1.3;
                }

                .blog-content h3 {
                    color: white;
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                    line-height: 1.4;
                }

                .blog-content h4 {
                    color: white;
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-top: 1.5rem;
                    margin-bottom: 0.5rem;
                }

                .blog-content p {
                    color: rgba(255, 255, 255, 0.75);
                    margin-bottom: 1.5rem;
                }

                .blog-content strong,
                .blog-content b {
                    color: white;
                    font-weight: 600;
                }

                .blog-content a {
                    color: #e91e8c;
                    text-decoration: none;
                    transition: opacity 0.2s;
                }

                .blog-content a:hover {
                    opacity: 0.8;
                    text-decoration: underline;
                }

                .blog-content ul,
                .blog-content ol {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                }

                .blog-content li {
                    color: rgba(255, 255, 255, 0.75);
                    margin-bottom: 0.5rem;
                }

                .blog-content li::marker {
                    color: #e91e8c;
                }

                .blog-content blockquote {
                    border-left: 4px solid #e91e8c;
                    padding-left: 1.5rem;
                    margin: 2rem 0;
                    font-style: italic;
                    color: rgba(255, 255, 255, 0.7);
                }

                .blog-content code {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.2rem 0.4rem;
                    border-radius: 4px;
                    font-size: 0.9em;
                    color: #e91e8c;
                }

                .blog-content pre {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 1.5rem;
                    overflow-x: auto;
                    margin: 1.5rem 0;
                }

                .blog-content pre code {
                    background: transparent;
                    padding: 0;
                    color: rgba(255, 255, 255, 0.8);
                }

                .blog-content img {
                    border-radius: 12px;
                    margin: 2rem 0;
                    max-width: 100%;
                    height: auto;
                }

                .blog-content hr {
                    border: none;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    margin: 2.5rem 0;
                }

                .blog-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1.5rem 0;
                }

                .blog-content th,
                .blog-content td {
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 0.75rem 1rem;
                    text-align: left;
                }

                .blog-content th {
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                    font-weight: 600;
                }

                .blog-content td {
                    color: rgba(255, 255, 255, 0.75);
                }
            `}</style>
        </article>
    );
}
