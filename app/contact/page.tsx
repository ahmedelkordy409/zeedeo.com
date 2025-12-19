"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEventHandler } from "react";

interface FormData {
    fullname: string;
    email: string;
    location: string;
    category: string;
    reason: string;
    message: string;
}

interface FormErrors {
    fullname?: string;
    email?: string;
    location?: string;
    category?: string;
    reason?: string;
    message?: string;
}

const initialFormData: FormData = {
    fullname: "",
    email: "",
    location: "",
    category: "",
    reason: "",
    message: ""
};

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case "fullname":
                if (!value.trim()) return "Full name is required";
                if (value.trim().length < 2) return "Name must be at least 2 characters";
                break;
            case "email":
                if (!value.trim()) return "Email is required";
                if (!validateEmail(value)) return "Please enter a valid email";
                break;
            case "location":
                if (!value.trim()) return "Location is required";
                break;
            case "category":
                if (!value) return "Please select a category";
                break;
            case "reason":
                if (!value) return "Please select a reason";
                break;
            case "message":
                if (!value.trim()) return "Message is required";
                if (value.trim().length < 10) return "Message must be at least 10 characters";
                break;
        }
        return undefined;
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key as keyof FormData]);
            if (error) {
                newErrors[key as keyof FormErrors] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleBlur = (name: string) => {
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = validateField(name, formData[name as keyof FormData]);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
        setTouched(allTouched);

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Form Submitted:", formData);
        setShowModal(true);
        setFormData(initialFormData);
        setTouched({});
        setErrors({});
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (touched[name]) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const getInputClass = (fieldName: string) => {
        const baseClass = "h-[55px] w-full rounded-[8px] px-4 text-[14px] text-white placeholder:text-white/30 focus:outline-none transition-all duration-300 border-0 bg-transparent backdrop-blur-[8px]";
        const hasError = touched[fieldName] && errors[fieldName as keyof FormErrors];

        if (hasError) {
            return `${baseClass} shadow-[inset_1px_1px_0px_rgba(255,0,0,0.5),_inset_-1px_-1px_0px_rgba(255,0,0,0.25)]`;
        }

        return `${baseClass} shadow-[inset_1px_1px_0px_rgba(255,255,255,1),_inset_-1px_-1px_0px_rgba(255,255,255,0.5)]`;
    };

    return (
        <div className="min-h-screen bg-[#1a0a1a] font-sans">
            <Header />
            <main className="pt-[72px]">
                <section
                    className="min-h-[calc(100vh-72px)] py-12 lg:py-20 flex items-center justify-center"
                    style={{
                        background: "linear-gradient(135deg, #1a0a1a 0%, #1e0e20 30%, #1a0a1a 50%, #2d1230 80%, #1a0a1a 100%)"
                    }}
                >
                    <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-12 px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
                        {/* Left Side - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-full pt-0 lg:max-w-[350px] lg:pt-20 text-center lg:text-left"
                        >
                            <h1 className="text-[36px] font-semibold italic leading-tight text-white lg:text-[42px]">
                                We are here to help!
                            </h1>
                            <p className="mt-6 text-[16px] leading-relaxed text-white/60">
                                We are always here to support our community and make Zeedeo more accessible to everyone.
                            </p>
                        </motion.div>

                        {/* Right Side - Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative w-full max-w-[835px] rounded-[16px] p-8 backdrop-blur-[16px] bg-transparent"
                            style={{
                                border: '1px solid #B6A4A2'
                            }}
                        >
                            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-y-14">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div className="space-y-3">
                                        <label className="block text-[20px] font-semibold text-white">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullname"
                                            value={formData.fullname}
                                            onChange={handleChange}
                                            onBlur={() => handleBlur("fullname")}
                                            placeholder="Enter your full name"
                                            className={getInputClass("fullname")}
                                        />
                                        <AnimatePresence>
                                            {touched.fullname && errors.fullname && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -5 }}
                                                    className="text-[11px] text-red-400"
                                                >
                                                    {errors.fullname}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-[20px] font-semibold text-white">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={() => handleBlur("email")}
                                            placeholder="Enter your email"
                                            className={getInputClass("email")}
                                        />
                                        <AnimatePresence>
                                            {touched.email && errors.email && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -5 }}
                                                    className="text-[11px] text-red-400"
                                                >
                                                    {errors.email}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div className="space-y-3">
                                        <label className="block text-[20px] font-semibold text-white">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            onBlur={() => handleBlur("location")}
                                            placeholder="Enter your location"
                                            className={getInputClass("location")}
                                        />
                                        <AnimatePresence>
                                            {touched.location && errors.location && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -5 }}
                                                    className="text-[11px] text-red-400"
                                                >
                                                    {errors.location}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-[20px] font-semibold text-white">
                                            User Category
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                                onBlur={() => handleBlur("category")}
                                                className={`${getInputClass("category")} appearance-none bg-[#0d0510]`}
                                            >
                                                <option value="" disabled>Select the category</option>
                                                <option value="Company">Company</option>
                                                <option value="Startup Founder">Startup Founder</option>
                                                <option value="University">University</option>
                                                <option value="Professionals">Professionals</option>
                                                <option value="Graduate">Graduate</option>
                                                <option value="Student">Student</option>
                                            </select>
                                            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {touched.category && errors.category && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -5 }}
                                                    className="text-[11px] text-red-400"
                                                >
                                                    {errors.category}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-[20px] font-semibold text-white">
                                        Reason
                                    </label>
                                    <input
                                        type="text"
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur("reason")}
                                        placeholder="Enter your message..."
                                        className={getInputClass("reason")}
                                    />
                                    <AnimatePresence>
                                        {touched.reason && errors.reason && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                className="text-[11px] text-red-400"
                                            >
                                                {errors.reason}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-[20px] font-semibold text-white">
                                        How can we help you?
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur("message")}
                                        placeholder="Enter your message..."
                                        rows={6}
                                        className={`${getInputClass("message").replace("h-[44px]", "")} resize-none py-3`}
                                    />
                                    <AnimatePresence>
                                        {touched.message && errors.message && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                className="text-[11px] text-red-400"
                                            >
                                                {errors.message}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="flex justify-end">
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{
                                            scale: isSubmitting ? 1 : 1.02
                                        }}
                                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        className={`h-[48px] rounded-[8px] border border-white/20 bg-[#1a0a1a] px-10 text-[18px] font-semibold text-white transition-all flex items-center justify-center gap-3 ${isSubmitting
                                            ? "opacity-50 cursor-not-allowed"
                                            : "hover:bg-white/5"
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Success Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-[400px] overflow-hidden rounded-[24px] border border-[#D91883]/30 bg-[#1a0a1a] p-8 text-center"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D91883]/10 text-[#D91883]">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h3 className="text-[24px] font-bold text-white">Message Sent!</h3>
                            <p className="mt-4 text-[16px] leading-relaxed text-white/60">
                                Thank you for reaching out. Our team will get back to you as soon as possible.
                            </p>
                            <button
                                onClick={() => setShowModal(false)}
                                className="mt-8 h-[48px] w-full rounded-[12px] border border-white/10 bg-white/5 text-[14px] font-medium text-white transition-colors hover:bg-white/10"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
