"use client";

import { useState } from "react";
import { StepProps } from "../types";

export default function Step1({ formData, updateFormData, onNext }: StepProps) {
    const [errors, setErrors] = useState<{
        fullName?: string;
        email?: string;
        confirmEmail?: string;
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

        if (!formData.confirmEmail?.trim()) {
            newErrors.confirmEmail = "Please confirm your email";
        } else if (formData.email !== formData.confirmEmail) {
            newErrors.confirmEmail = "Emails do not match";
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

    const getInputClass = (hasError: boolean) => {
        const baseClass = "h-[44px] w-full rounded-[8px] px-4 text-[13px] text-white placeholder:text-white/30 focus:outline-none transition-all duration-300 border-0 bg-transparent backdrop-blur-[8px]";
        if (hasError) {
            return `${baseClass} shadow-[inset_1px_1px_0px_rgba(255,0,0,0.5),_inset_-1px_-1px_0px_rgba(255,0,0,0.25)]`;
        }
        return `${baseClass} shadow-[inset_1px_1px_0px_rgba(255,255,255,1),_inset_-1px_-1px_0px_rgba(255,255,255,0.5)]`;
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
                        className={getInputClass(!!errors.fullName)}
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
                        className={getInputClass(!!errors.email)}
                    />
                    {errors.email && (
                        <p className="mt-1 text-[12px] text-red-400">{errors.email}</p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-[13px] font-medium text-white">
                        Confirm Email
                    </label>
                    <input
                        type="email"
                        placeholder="Confirm your email"
                        value={formData.confirmEmail || ""}
                        onChange={(e) => {
                            updateFormData({ confirmEmail: e.target.value });
                            if (errors.confirmEmail) setErrors((prev) => ({ ...prev, confirmEmail: undefined }));
                        }}
                        className={getInputClass(!!errors.confirmEmail)}
                    />
                    {errors.confirmEmail && (
                        <p className="mt-1 text-[12px] text-red-400">{errors.confirmEmail}</p>
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
                        className={`${getInputClass(!!errors.profile)} appearance-none ${formData.profile ? "text-white" : "text-white/30"}`}
                    >
                        <option value="" disabled>Select your profile</option>
                        <option value="Company">Company</option>
                        <option value="Startup Founder">Startup Founder</option>
                        <option value="University">University</option>
                        <option value="Professionals">Professionals</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Student">Student</option>
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
                        className={`${getInputClass(!!errors.mobileType)} appearance-none ${formData.mobileType ? "text-white" : "text-white/30"}`}
                    >
                        <option value="" disabled>Select your OS</option>
                        <option value="Android">Android</option>
                        <option value="IOS">iOS</option>
                        <option value="Both">Both</option>
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
                    className="h-[44px] rounded-full border border-white/20 bg-transparent px-12 text-[14px] font-medium text-white transition-all hover:bg-white/5"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
