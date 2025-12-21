"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
    { text: "Post Job made easy to\nattract the right Talent", video: "/videos/zeedeo-helps-video-1-1.mp4" },
    { text: "Create Topic You Love\nto grow audiences", video: "/videos/zeedeo-helps-video-2.mp4" },
    { text: "Discover Businesses,\nPeople, Topics & Jobs", video: "/videos/zeedeo-helps-video-3.mp4" },
    { text: "Promote your\npersonal brand", video: "/videos/zeedeo-helps-video-4.mp4" },
    { text: "Video ATS to match\nTalent & Jobs", video: "/videos/zeedeo-helps-video-5-1.mp4" },
    { text: "Pitch your\napplication focusing\non soft skills first!", video: "/videos/zeedeo-helps-video-6.mp4" },
];

// Desktop pill offsets for staggered layout
const desktopOffsets = [-60, -30, -20, 20, 10, -10];

// Wavy Line Component for desktop
const WavyLine = ({ index }: { index: number }) => {
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

    return (
        <svg width="120" height="50" viewBox="0 0 120 50" fill="none"
            className="hidden lg:block flex-shrink-0 absolute -left-[120px] top-1/2 -translate-y-1/2">
            <defs>
                <linearGradient id={`lineGradient${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F587FF" />
                    <stop offset="100%" stopColor="#0066FF" />
                </linearGradient>
            </defs>
            <path d="M0,40 C30,40 50,20 80,15 C100,12 110,15 120,20" stroke={`url(#lineGradient${index})`} strokeWidth="1.5"
                strokeDasharray="4 6" strokeLinejoin="round" fill="none" />
        </svg>
    );
};

// Mobile Wavy Line - connects pill to phone center
const MobileWavyLine = ({ position }: { position: 'left' | 'right' }) => {
    if (position === 'left') {
        return (
            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="absolute -right-[35px] top-1/2 -translate-y-1/2">
                <defs>
                    <linearGradient id="mobileLineLeft" x1="0" y1="15" x2="40" y2="15" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0066FF" />
                        <stop offset="1" stopColor="#EA52F8" />
                    </linearGradient>
                </defs>
                <path d="M0,15 C10,15 15,5 25,10 C35,15 40,15 40,15" stroke="url(#mobileLineLeft)" strokeWidth="1" strokeDasharray="3 4" fill="none" />
            </svg>
        );
    }
    return (
        <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="absolute -left-[35px] top-1/2 -translate-y-1/2">
            <defs>
                <linearGradient id="mobileLineRight" x1="40" y1="15" x2="0" y2="15" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0066FF" />
                    <stop offset="1" stopColor="#EA52F8" />
                </linearGradient>
            </defs>
            <path d="M40,15 C30,15 25,5 15,10 C5,15 0,15 0,15" stroke="url(#mobileLineRight)" strokeWidth="1" strokeDasharray="3 4" fill="none" />
        </svg>
    );
};

export default function WhyJoin() {
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const mobileVideoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const mobileVideo = mobileVideoRef.current;

        if (video) {
            video.src = features[activeIndex].video;
            video.load();
            video.play().catch(() => { });
        }
        if (mobileVideo) {
            mobileVideo.src = features[activeIndex].video;
            mobileVideo.load();
            mobileVideo.play().catch(() => { });
        }
    }, [activeIndex]);

    const handlePillClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="py-8 md:py-16 lg:py-24 px-4 md:px-6">
            <div className="mx-auto w-full max-w-[1728px]">

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    {/* Header - Mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-6"
                    >
                        <h2 className="text-[20px] font-semibold leading-[1.2] tracking-tight sm:text-[24px]">
                            <span className="text-white">Why Join </span>
                            <span className="text-[#e91e8c]">Zeedeo?</span>
                        </h2>

                        <p className="mt-3 text-[9px] font-light leading-[1.6] text-white/60 sm:text-[11px] max-w-[260px] mx-auto">
                            Because <span className="text-[#e91e8c]">YOU</span> matter! We redefine how European businesses and people connect, using video as the trust layer that drives social impact, helps you grow and stand out in a world that rewards authenticity.
                        </p>
                    </motion.div>

                    {/* Phone with Pills Container - Centered Phone with pills around */}
                    <div className="relative w-full" style={{ height: '420px' }}>

                        {/* Phone - Centered */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="absolute left-1/2 -translate-x-1/2 top-[40px] z-10"
                        >
                            <div className="relative w-[120px] sm:w-[140px] overflow-hidden rounded-[18px] sm:rounded-[22px]" style={{ aspectRatio: '1024/1536' }}>
                                <Image
                                    src="/phone-frame.png"
                                    alt="Phone Frame"
                                    fill
                                    className="z-20 object-contain pointer-events-none"
                                    priority
                                />
                                <div className="absolute inset-0 z-10 overflow-hidden"
                                    style={{
                                        top: '2%',
                                        left: '15%',
                                        right: '15%',
                                        bottom: '2%',
                                        borderRadius: '14px',
                                    }}
                                >
                                    <video
                                        ref={mobileVideoRef}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover"
                                    >
                                        <source src={features[0].video} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </motion.div>

                        {/* Pill 1: Create Topic - Top Left */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="absolute left-[2px] top-[50px] cursor-pointer z-20"
                            onClick={() => handlePillClick(1)}
                        >
                            <div className={`relative p-[1px] rounded-full transition-all duration-300 ${activeIndex === 1 ? 'bg-gradient-to-r from-[#00c8ff] to-[#e91e8c]' : 'bg-gradient-to-r from-[#00c8ff]/50 to-[#e91e8c]/50'}`}>
                                <div className={`whitespace-pre-line rounded-full px-2 py-1 text-[6px] font-medium leading-[1.3] text-center ${activeIndex === 1 ? 'bg-[#5b21b6] text-white' : 'bg-[#0a0512]/90 text-white/70'}`}>
                                    {features[1].text}
                                </div>
                            </div>
                        </motion.div>

                        {/* Pill 0: Post Job - Top Right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className="absolute right-[2px] top-[35px] cursor-pointer z-20"
                            onClick={() => handlePillClick(0)}
                        >
                            <div className={`relative p-[1px] rounded-full transition-all duration-300 ${activeIndex === 0 ? 'bg-gradient-to-r from-[#00c8ff] to-[#e91e8c]' : 'bg-gradient-to-r from-[#00c8ff]/50 to-[#e91e8c]/50'}`}>
                                <div className={`whitespace-pre-line rounded-full px-2 py-1 text-[6px] font-medium leading-[1.3] text-center ${activeIndex === 0 ? 'bg-[#5b21b6] text-white' : 'bg-[#0a0512]/90 text-white/70'}`}>
                                    {features[0].text}
                                </div>
                            </div>
                        </motion.div>

                        {/* Pill 3: Promote - Middle Left */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="absolute left-[2px] top-[140px] cursor-pointer z-20"
                            onClick={() => handlePillClick(3)}
                        >
                            <div className={`relative p-[1px] rounded-full transition-all duration-300 ${activeIndex === 3 ? 'bg-gradient-to-r from-[#00c8ff] to-[#e91e8c]' : 'bg-gradient-to-r from-[#00c8ff]/50 to-[#e91e8c]/50'}`}>
                                <div className={`whitespace-pre-line rounded-full px-2 py-1 text-[6px] font-medium leading-[1.3] text-center ${activeIndex === 3 ? 'bg-[#5b21b6] text-white' : 'bg-[#0a0512]/90 text-white/70'}`}>
                                    {features[3].text}
                                </div>
                            </div>
                        </motion.div>

                        {/* Pill 2: Discover - Middle Right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.25 }}
                            className="absolute right-[2px] top-[115px] cursor-pointer z-20"
                            onClick={() => handlePillClick(2)}
                        >
                            <div className={`relative p-[1px] rounded-full transition-all duration-300 ${activeIndex === 2 ? 'bg-gradient-to-r from-[#00c8ff] to-[#e91e8c]' : 'bg-gradient-to-r from-[#00c8ff]/50 to-[#e91e8c]/50'}`}>
                                <div className={`whitespace-pre-line rounded-full px-2 py-1 text-[6px] font-medium leading-[1.3] text-center ${activeIndex === 2 ? 'bg-[#5b21b6] text-white' : 'bg-[#0a0512]/90 text-white/70'}`}>
                                    {features[2].text}
                                </div>
                            </div>
                        </motion.div>

                        {/* Pill 5: Pitch - Bottom Left */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="absolute left-[10px] top-[260px] cursor-pointer z-20"
                            onClick={() => handlePillClick(5)}
                        >
                            <div className={`relative p-[1px] rounded-full transition-all duration-300 ${activeIndex === 5 ? 'bg-gradient-to-r from-[#00c8ff] to-[#e91e8c]' : 'bg-gradient-to-r from-[#00c8ff]/50 to-[#e91e8c]/50'}`}>
                                <div className={`whitespace-pre-line rounded-full px-2 py-1 text-[6px] font-medium leading-[1.3] text-center ${activeIndex === 5 ? 'bg-[#5b21b6] text-white' : 'bg-[#0a0512]/90 text-white/70'}`}>
                                    {features[5].text}
                                </div>
                            </div>
                        </motion.div>

                        {/* Pill 4: Video ATS - Bottom Right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.35 }}
                            className="absolute right-[10px] top-[240px] cursor-pointer z-20"
                            onClick={() => handlePillClick(4)}
                        >
                            <div className={`relative p-[1px] rounded-full transition-all duration-300 ${activeIndex === 4 ? 'bg-gradient-to-r from-[#00c8ff] to-[#e91e8c]' : 'bg-gradient-to-r from-[#00c8ff]/50 to-[#e91e8c]/50'}`}>
                                <div className={`whitespace-pre-line rounded-full px-2 py-1 text-[6px] font-medium leading-[1.3] text-center ${activeIndex === 4 ? 'bg-[#5b21b6] text-white' : 'bg-[#0a0512]/90 text-white/70'}`}>
                                    {features[4].text}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="lg:col-span-6 text-left max-w-[800px] lg:ml-auto order-2"
                    >
                        <h2 className="text-[80px] font-semibold leading-[1.1] tracking-tight">
                            <span className="text-white">Why Join </span>
                            <span className="text-[#e91e8c]">Zeedeo</span>
                            <span className="text-[#e91e8c]">?</span>
                        </h2>

                        <p className="mt-6 text-[30px] font-light leading-[1.7] text-white/70">
                            Because <span className="text-[#e91e8c]">YOU</span> matter!
                            <br />
                            We redefine how European businesses and people connect, get discovered, using video as the trust layer that drives social impact, helps you grow and stand out in a world that rewards authenticity.
                        </p>

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

                    {/* Left Side - Phone + Pills Container */}
                    <div className="lg:col-span-6 order-1">
                        <div className="flex flex-row items-start gap-8">
                            {/* Phone */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                                className="flex-shrink-0"
                            >
                                <div className="relative w-[450px] overflow-hidden rounded-[55px]" style={{ aspectRatio: '1024/1536' }}>
                                    <Image
                                        src="/phone-frame.png"
                                        alt="Phone Frame"
                                        fill
                                        className="z-20 object-contain pointer-events-none"
                                        priority
                                    />
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
                                            <source src={features[activeIndex].video} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Feature Pills */}
                            <div className="flex flex-col gap-10 pt-8 -ml-3">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.15 * index }}
                                        className="relative cursor-pointer"
                                        style={{ marginLeft: `${desktopOffsets[index]}px` }}
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
