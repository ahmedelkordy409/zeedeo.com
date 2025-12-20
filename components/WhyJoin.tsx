"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
    { text: "Post Job made easy to\nattract the right Talent", filled: false, offset: -60, video: "/videos/zeedeo-helps-video-1-1.mp4" },
    { text: "Create Topic You Love\nto grow audiences", filled: false, offset: -30, video: "/videos/zeedeo-helps-video-2.mp4" },
    { text: "Discover Businesses,\nPeople, Topics & Jobs", filled: false, offset: -20, video: "/videos/zeedeo-helps-video-3.mp4" },
    { text: "Promote your\npersonal brand", filled: true, offset: 20, video: "/videos/zeedeo-helps-video-4.mp4" },
    { text: "Video ATS to match\nTalent & Jobs", filled: false, offset: 10, video: "/videos/zeedeo-helps-video-5-1.mp4" },
    { text: "Apply smarter  focusing\non soft skills first!", filled: false, offset: -10, video: "/videos/zeedeo-helps-video-6.mp4" },
];

// Wavy Line Component - uses exact Vector from Figma design
const WavyLine = ({ index }: { index: number }) => {
    const paths: { [key: number]: string } = {
        0: "M0,40 C30,40 50,20 80,15 C100,12 110,15 120,20",
        1: "M0,10 C30,10 50,30 80,35 C100,38 110,35 120,30",
        2: "M0,25 C20,25 30,40 50,40 C70,40 70,10 50,10 C30,10 40,25 60,25 C80,25 100,25 120,25",
        3: "M0,15 C30,15 50,35 70,40 C90,45 100,35 100,25 C100,15 90,15 95,25 C100,35 110,30 120,25",
        4: "M114,22 C-28,182 228,41 0,0",
        5: "M114,22 C-28,182 228,41 0,0",
    };

    if (index === 1) {
        return (
            <svg width="92" height="40" viewBox="0 0 92 40" fill="none"
                className="hidden lg:block flex-shrink-0 absolute -left-[92px] top-1/2 -translate-y-1/2">
                <defs>
                    <linearGradient id={`lineGradient${index}`} x1="47" y1="22" x2="38" y2="-3" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EA52F8" />
                        <stop offset="1" stopColor="#0066FF" />
                    </linearGradient>
                </defs>
                <path d="M0.33465 39.1956C97.0129 -47.9097 -94.1384 54.5786 91.6631 0.480106"
                    stroke={`url(#lineGradient${index})`} strokeLinejoin="round" strokeDasharray="4 6" fill="none" />
            </svg>
        );
    }

    if (index === 2) {
        return (
            <svg width="129" height="65" viewBox="0 0 129 65" fill="none"
                className="hidden lg:block flex-shrink-0 absolute -left-[129px] top-1/2 -translate-y-1/2">
                <defs>
                    <linearGradient id={`lineGradient${index}`} x1="66" y1="49" x2="52" y2="12" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EA52F8" />
                        <stop offset="1" stopColor="#0066FF" />
                    </linearGradient>
                </defs>
                <path d="M128.14 26.3854C-49.1585 13.1655 238.091 -41.5399 0.203195 64.407"
                    stroke={`url(#lineGradient${index})`} strokeLinejoin="round" strokeDasharray="4 6" fill="none" />
            </svg>
        );
    }

    if (index === 3) {
        return (
            <svg width="124" height="53" viewBox="0 0 124 53" fill="none"
                className="hidden lg:block flex-shrink-0 absolute -left-[124px] top-1/2 -translate-y-1/2">
                <defs>
                    <linearGradient id={`lineGradient${index}`} x1="60" y1="23" x2="73" y2="57" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EA52F8" />
                        <stop offset="1" stopColor="#0066FF" />
                    </linearGradient>
                </defs>
                <path d="M122.991 0.371948C-7.1222 117.328 250.036 -20.3936 0.1401 52.4245"
                    stroke={`url(#lineGradient${index})`} strokeLinejoin="round" strokeDasharray="4 6" fill="none" />
            </svg>
        );
    }

    if (index === 4) {
        return (
            <svg width="106" height="82" viewBox="0 0 106 82" fill="none"
                className="hidden lg:block flex-shrink-0 absolute -left-[106px] top-1/2 -translate-y-1/2">
                <defs>
                    <linearGradient id={`lineGradient${index}`} x1="55" y1="76" x2="31" y2="8" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EA52F8" />
                        <stop offset="1" stopColor="#0066FF" />
                    </linearGradient>
                </defs>
                <path d="M105.705 57.8016C-61.8976 -22.384 184.87 -21.9515 0.243053 80.8379"
                    stroke={`url(#lineGradient${index})`} strokeLinejoin="round" strokeDasharray="4 6" fill="none" />
            </svg>
        );
    }

    if (index === 5) {
        return (
            <svg width="115" height="98" viewBox="0 0 115 98" fill="none"
                className="hidden lg:block flex-shrink-0 absolute -left-[115px] top-full -translate-y-1/2">
                <defs>
                    <linearGradient id={`lineGradient${index}`} x1="57" y1="0" x2="57" y2="97" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F587FF" />
                        <stop offset="1" stopColor="#0066FF" />
                    </linearGradient>
                </defs>
                <path d="M114.089 22.4395C-28.1337 182.272 227.875 41.1682 0.0878906 0.492188"
                    stroke={`url(#lineGradient${index})`} strokeLinejoin="round" strokeDasharray="4 6" fill="none" />
            </svg>
        );
    }

    const path = paths[index] || paths[0];

    return (
        <svg width="120" height="50" viewBox="0 0 120 50" fill="none"
            className="hidden lg:block flex-shrink-0 absolute -left-[120px] top-1/2 -translate-y-1/2">
            <defs>
                <linearGradient id={`lineGradient${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F587FF" />
                    <stop offset="100%" stopColor="#0066FF" />
                </linearGradient>
            </defs>
            <path d={path} stroke={`url(#lineGradient${index})`} strokeWidth="1.5"
                strokeDasharray="4 6" strokeLinejoin="round" fill="none" />
        </svg>
    );
};

export default function WhyJoin() {
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Change video when active index changes
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.src = features[activeIndex].video;
        video.load();
        video.play().catch(() => { });
    }, [activeIndex]);

    // Handle pill click - just change the active tab
    const handlePillClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        // Section fits content naturally
        <section
            className="relative min-h-screen py-16 lg:py-24 flex items-center"
        >
            <div className="mx-auto px-6 lg:px-16 w-full">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">

                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="order-1 lg:col-span-7 text-center lg:text-left max-w-[800px]"
                    >
                        <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight sm:text-[52px] lg:text-[80px]">
                            <span className="text-white">Why Join </span>
                            <span className="text-[#e91e8c]">Zeedeo</span>
                            <span className="text-[#e91e8c]">?</span>
                        </h2>

                        <p className="mt-6 text-[16px] font-light leading-[1.7] text-white/70 sm:text-[18px] lg:text-[30px]">
                            Because <span className="text-[#e91e8c]">YOU</span> matter!
                            <br />
                            We redefine how European businesses and people connect, get discovered, using video as the trust layer that drives social impact, helps you grow and stand out in a world that rewards authenticity.
                        </p>

                        {/* Progress indicator */}
                        <div className="mt-8 flex items-center gap-3">
                            {features.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePillClick(index)}
                                    className={`h-1 rounded-full transition-all duration-500 ${index === activeIndex
                                        ? 'w-8 bg-gradient-to-r from-[#e91e8c] to-[#00c8ff]'
                                        : index < activeIndex
                                            ? 'w-4 bg-[#e91e8c]/50'
                                            : 'w-4 bg-white/20'
                                        }`}
                                />
                            ))}
                            <span className="ml-2 text-sm text-white/40">
                                {activeIndex + 1}/{features.length}
                            </span>
                        </div>
                    </motion.div>

                    {/* Right Side - Phone + Pills Container */}
                    <div className="order-2 lg:col-span-5">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-8">

                            {/* Phone */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                                className="flex-shrink-0"
                            >
                                {/* Aspect ratio based on phone-frame.png: 1024x1536 (2:3) */}
                                <div className="relative w-[320px] lg:w-[450px] overflow-hidden rounded-[40px] lg:rounded-[55px]" style={{ aspectRatio: '1024/1536' }}>
                                    {/* Phone Frame */}
                                    <Image
                                        src="/phone-frame.png"
                                        alt="Phone Frame"
                                        fill
                                        className="z-20 object-contain pointer-events-none"
                                        priority
                                    />
                                    {/* Video inside phone screen - cropped to fit screen area */}
                                    <div className="absolute inset-0 z-10 overflow-hidden"
                                        style={{
                                            top: '2%',
                                            left: '15%',
                                            right: '15%',
                                            bottom: '2%',
                                            borderRadius: '40px',
                                        }}
                                    >
                                        <video
                                            ref={videoRef}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                                        >
                                            <source src={features[0].video} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Feature Pills */}
                            <div className="flex flex-col gap-4 lg:gap-10 lg:pt-8 lg:pl-12">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.15 * index }}
                                        className="relative cursor-pointer"
                                        style={{ marginLeft: `${feature.offset}px` }}
                                        onClick={() => handlePillClick(index)}
                                    >
                                        <WavyLine index={index} />

                                        <div
                                            className={`relative p-[1.5px] rounded-full shadow-lg shadow-black/20 w-fit transition-all duration-500 ${index === activeIndex
                                                ? 'bg-gradient-to-r from-[#00c8ff] to-[#e91e8c] scale-105'
                                                : 'bg-gradient-to-r from-[#00c8ff]/60 to-[#e91e8c]/60 scale-100 opacity-70 hover:opacity-90'
                                                }`}
                                        >
                                            <div
                                                className={`whitespace-pre-line rounded-full px-6 py-3 text-center text-[13px] font-medium leading-[1.35] w-[210px] flex items-center justify-center transition-all duration-500 ${index === activeIndex
                                                    ? "bg-[#5b21b6] text-white"
                                                    : "bg-[#0a0512]/90 text-white/80"
                                                    }`}
                                            >
                                                {feature.text}
                                            </div>
                                        </div>

                                        {index === activeIndex && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#00c8ff]/20 to-[#e91e8c]/20 blur-xl"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
