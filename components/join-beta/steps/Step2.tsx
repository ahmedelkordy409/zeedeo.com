"use client";

import { useState } from "react";
import { StepProps } from "../types";

const goals = [
    "Post & Promote Jobs",
    "Promote Your Brand & Service",
    "Create Short Content & Grow Your Audience",
    "Pitch Your Idea",
    "Find a Co-Founder",
];

export default function Step2({ formData, updateFormData, onNext, onBack }: StepProps) {
    const [error, setError] = useState<string | null>(null);

    const toggleGoal = (goal: string) => {
        const currentGoals = formData.goals || [];
        if (currentGoals.includes(goal)) {
            updateFormData({ goals: currentGoals.filter((g) => g !== goal) });
        } else {
            updateFormData({ goals: [...currentGoals, goal] });
        }
        if (error) setError(null);
    };

    const handleNext = () => {
        if (!formData.goals || formData.goals.length === 0) {
            setError("Please select at least one goal");
            return;
        }
        onNext();
    };

    return (
        <div className="w-[440px]">
            <h2 className="mb-6 text-center text-[24px] font-semibold text-white">
                Tell Us About Your Goals
            </h2>

            <div className="space-y-3">
                {goals.map((goal) => (
                    <button
                        key={goal}
                        type="button"
                        onClick={() => toggleGoal(goal)}
                        className={`h-[44px] w-full rounded-[8px] border px-4 text-[13px] font-medium transition-colors ${formData.goals?.includes(goal)
                                ? "border-[#e91e8c] bg-[#e91e8c]/10 text-white"
                                : "border-white/15 bg-transparent text-white/80 hover:border-white/30"
                            }`}
                    >
                        {goal}
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
