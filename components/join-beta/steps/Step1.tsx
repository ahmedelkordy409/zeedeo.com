"use client";

import { useState } from "react";
import { StepProps } from "../types";

export default function Step1({ formData, updateFormData, onNext }: StepProps) {
    const [errors, setErrors] = useState<{
        fullName?: string;
        email?: string;
        profile?: string;
        mobileType?: string;
    }>({});

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleNext = () => {
        const newErrors: typeof errors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.profile) {
            newErrors.profile = "Please select your profile";
        }

        if (!formData.mobileType) {
            newErrors.mobileType = "Please select your mobile type";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            onNext();
        }
    };

    return (
        <div className="w-[440px]">
            <div className="space-y-4">
                <div>
                    <label className="mb-2 block text-[13px] font-medium text-white">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => {
                            updateFormData({ fullName: e.target.value });
                            if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                        }}
                        className={`h-[44px] w-full rounded-[8px] border bg-transparent px-4 text-[13px] text-white placeholder:text-white/30 focus:outline-none ${errors.fullName ? "border-red-500" : "border-white/15 focus:border-white/30"
                            }`}
                    />
                    {errors.fullName && (
                        <p className="mt-1 text-[12px] text-red-400">{errors.fullName}</p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-[13px] font-medium text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => {
                            updateFormData({ email: e.target.value });
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        className={`h-[44px] w-full rounded-[8px] border bg-transparent px-4 text-[13px] text-white placeholder:text-white/30 focus:outline-none ${errors.email ? "border-red-500" : "border-white/15 focus:border-white/30"
                            }`}
                    />
                    {errors.email && (
                        <p className="mt-1 text-[12px] text-red-400">{errors.email}</p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-[13px] font-medium text-white">
                        Select your Profile
                    </label>
                    <select
                        value={formData.profile}
                        onChange={(e) => {
                            updateFormData({ profile: e.target.value });
                            if (errors.profile) setErrors((prev) => ({ ...prev, profile: undefined }));
                        }}
                        className={`h-[44px] w-full appearance-none rounded-[8px] border bg-transparent px-4 text-[13px] focus:outline-none ${formData.profile ? "text-white" : "text-white/30"
                            } ${errors.profile ? "border-red-500" : "border-white/15 focus:border-white/30"}`}
                    >
                        <option value="" disabled>Select your profile</option>
                        <option value="creator">Creator</option>
                        <option value="business">Business</option>
                        <option value="agency">Agency</option>
                    </select>
                    {errors.profile && (
                        <p className="mt-1 text-[12px] text-red-400">{errors.profile}</p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-[13px] font-medium text-white">
                        Mobile Type
                    </label>
                    <select
                        value={formData.mobileType}
                        onChange={(e) => {
                            updateFormData({ mobileType: e.target.value });
                            if (errors.mobileType) setErrors((prev) => ({ ...prev, mobileType: undefined }));
                        }}
                        className={`h-[44px] w-full appearance-none rounded-[8px] border bg-transparent px-4 text-[13px] focus:outline-none ${formData.mobileType ? "text-white" : "text-white/30"
                            } ${errors.mobileType ? "border-red-500" : "border-white/15 focus:border-white/30"}`}
                    >
                        <option value="" disabled>Select your OS</option>
                        <option value="ios">iOS</option>
                        <option value="android">Android</option>
                    </select>
                    {errors.mobileType && (
                        <p className="mt-1 text-[12px] text-red-400">{errors.mobileType}</p>
                    )}
                </div>
            </div>

            <div className="mt-6 flex justify-end">
                <button
                    type="button"
                    onClick={handleNext}
                    className="h-[40px] rounded-full bg-[#2a1a3a] px-8 text-[14px] font-medium text-white transition-colors hover:bg-[#3a2a4a]"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
