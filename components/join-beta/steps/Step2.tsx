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
                        className={`h-[44px] w-full rounded-[8px] border-0 px-4 text-[13px] font-medium transition-all duration-300 backdrop-blur-[8px] ${formData.goals?.includes(goal)
                            ? "shadow-[inset_1px_1px_0px_rgba(233,30,140,1),_inset_-1px_-1px_0px_rgba(233,30,140,0.5)] bg-[#e91e8c]/10 text-white"
                            : "shadow-[inset_1px_1px_0px_rgba(255,255,255,1),_inset_-1px_-1px_0px_rgba(255,255,255,0.5)] bg-transparent text-white/80 hover:bg-white/5"
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
                    className="h-[44px] flex-1 rounded-full border border-white/20 bg-transparent px-8 text-[14px] font-medium text-white transition-all hover:bg-white/5"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={handleNext}
                    className="h-[44px] flex-1 rounded-full border border-white/20 bg-transparent px-8 text-[14px] font-medium text-white transition-all hover:bg-white/5"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
