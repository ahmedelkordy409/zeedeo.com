"use client";

import { useState } from "react";
import { StepProps } from "../types";

const benefits = [
    "Promotion your Jobs for Free",
    "Subscription Discounts & Promotions",
    "Get Your Startup Founder Badge",
    "Vote for your Top and Upcoming Features",
    "Zeedeo Meet Up within the Community",
    "Invite your Friends and Colleagues First",
];

export default function Step3({ formData, updateFormData, onNext, onBack }: StepProps) {
    const [error, setError] = useState<string | null>(null);

    const toggleBenefit = (benefit: string) => {
        const currentBenefits = formData.benefits || [];
        if (currentBenefits.includes(benefit)) {
            updateFormData({ benefits: currentBenefits.filter((b) => b !== benefit) });
        } else {
            updateFormData({ benefits: [...currentBenefits, benefit] });
        }
        if (error) setError(null);
    };

    const handleNext = () => {
        if (!formData.benefits || formData.benefits.length === 0) {
            setError("Please select at least one benefit");
            return;
        }
        onNext();
    };

    return (
        <div className="w-[440px]">
            <h2 className="mb-6 text-center text-[24px] font-semibold leading-tight text-white">
                Which Benefits Are You<br />Interested In?
            </h2>

            <div className="space-y-3">
                {benefits.map((benefit) => (
                    <button
                        key={benefit}
                        type="button"
                        onClick={() => toggleBenefit(benefit)}
                        className={`h-[44px] w-full rounded-[8px] border px-4 text-[13px] font-medium transition-colors ${formData.benefits?.includes(benefit)
                                ? "border-[#e91e8c] bg-[#e91e8c]/10 text-white"
                                : "border-white/15 bg-transparent text-white/80 hover:border-white/30"
                            }`}
                    >
                        {benefit}
                    </button>
                ))}
            </div>

            {error && (
                <p className="mt-3 text-center text-[12px] text-red-400">{error}</p>
            )}

            <div className="mt-6 flex items-center justify-between gap-4">
                <button
                    type="button"
                    onClick={onBack}
                    className="h-[40px] flex-1 rounded-full border border-white/20 bg-transparent px-8 text-[14px] font-medium text-white transition-colors hover:bg-white/5"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={handleNext}
                    className="h-[40px] flex-1 rounded-full bg-[#2a1a3a] px-8 text-[14px] font-medium text-white transition-colors hover:bg-[#3a2a4a]"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
