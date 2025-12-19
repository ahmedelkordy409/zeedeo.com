"use client";

import { motion } from "framer-motion";

interface ContentSection {
    type: "heading" | "paragraph" | "list";
    content: string;
    items?: string[];
}

interface BlogContentProps {
    sections: ContentSection[];
}

export default function BlogContent({ sections }: BlogContentProps) {
    return (
        <article className="bg-[#1a0a1a] px-4 py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-[700px]">
                {sections.map((section, index) => {
                    if (section.type === "heading") {
                        return (
                            <motion.h2
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="mb-6 mt-10 text-[20px] font-semibold italic leading-tight text-white first:mt-0 lg:text-[24px]"
                            >
                                {section.content}
                            </motion.h2>
                        );
                    }

                    if (section.type === "paragraph") {
                        return (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="mb-6 text-[14px] leading-relaxed text-white/70 lg:text-[15px]"
                            >
                                {section.content}
                            </motion.p>
                        );
                    }

                    if (section.type === "list" && section.items) {
                        return (
                            <motion.ul
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="mb-6 space-y-2 pl-4"
                            >
                                {section.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="relative text-[14px] leading-relaxed text-white/70 before:absolute before:-left-4 before:content-['•'] lg:text-[15px]"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </motion.ul>
                        );
                    }

                    return null;
                })}
            </div>
        </article>
    );
}
