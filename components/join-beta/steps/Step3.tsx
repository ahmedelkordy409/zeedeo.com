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

export default function Step3({ formData, updateFormData, onBack, onSubmit }: StepProps) {
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const toggleBenefit = (benefit: string) => {
        const currentBenefits = formData.benefits || [];
        if (currentBenefits.includes(benefit)) {
            updateFormData({ benefits: currentBenefits.filter((b) => b !== benefit) });
        } else {
            updateFormData({ benefits: [...currentBenefits, benefit] });
        }
        if (error) setError(null);
    };

    const handleSubmit = async () => {
        if (!formData.benefits || formData.benefits.length === 0) {
            setError("Please select at least one benefit");
            return;
        }
        if (onSubmit) {
            setIsSubmitting(true);
            await onSubmit();
            setIsSubmitting(false);
        }
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
                        className={`h-[44px] w-full rounded-[8px] border-0 px-4 text-[13px] font-medium transition-all duration-300 backdrop-blur-[8px] ${formData.benefits?.includes(benefit)
                            ? "shadow-[inset_1px_1px_0px_rgba(233,30,140,1),_inset_-1px_-1px_0px_rgba(233,30,140,0.5)] bg-[#e91e8c]/10 text-white"
                            : "shadow-[inset_1px_1px_0px_rgba(255,255,255,1),_inset_-1px_-1px_0px_rgba(255,255,255,0.5)] bg-transparent text-white/80 hover:bg-white/5"
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
                    disabled={isSubmitting}
                    className="h-[44px] flex-1 rounded-full border border-white/20 bg-transparent px-8 text-[14px] font-medium text-white transition-all hover:bg-white/5 disabled:opacity-50"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="h-[44px] flex-1 rounded-full border border-white/20 bg-transparent px-8 text-[14px] font-medium text-white transition-all hover:bg-white/5 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Submitting...
                        </>
                    ) : (
                        "Submit"
                    )}
                </button>
            </div>
        </div>
    );
}
