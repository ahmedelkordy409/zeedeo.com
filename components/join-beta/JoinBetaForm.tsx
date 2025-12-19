"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JoinBetaFormData } from "./types";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

const leftContent = [
    {
        heading: "We elevate your business, talent and passion by growing your audience through the power of video.",
    },
    {
        heading: "Grow Your Business Attract Top Talent, Connect  & Get ahead.",
    },
    {
        heading: "Take a Look To Our Exclusive Benefits for Early Adopters.",
    },
];

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 100 : -100,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 100 : -100,
        opacity: 0,
    }),
};

export default function JoinBetaForm() {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(0);
    const [formData, setFormData] = useState<JoinBetaFormData>({
        fullName: "",
        email: "",
        profile: "",
        mobileType: "",
        goals: [],
        benefits: [],
    });

    const updateFormData = (data: Partial<JoinBetaFormData>) => {
        setFormData((prev) => ({ ...prev, ...data }));
    };

    const handleNext = () => {
        setDirection(1);
        setStep((prev) => Math.min(prev + 1, 4));
    };

    const handleBack = () => {
        setDirection(-1);
        setStep((prev) => Math.max(prev - 1, 1));
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <Step1
                        formData={formData}
                        updateFormData={updateFormData}
                        onNext={handleNext}
                    />
                );
            case 2:
                return (
                    <Step2
                        formData={formData}
                        updateFormData={updateFormData}
                        onNext={handleNext}
                        onBack={handleBack}
                    />
                );
            case 3:
                return (
                    <Step3
                        formData={formData}
                        updateFormData={updateFormData}
                        onNext={handleNext}
                        onBack={handleBack}
                    />
                );
            case 4:
                return <Step4 />;
            default:
                return null;
        }
    };

    if (step === 4) {
        return (
            <div className="flex min-h-[calc(100vh-72px)] items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Step4 />
                </motion.div>
            </div>
        );
    }

    return (
        <div className="flex min-h-[calc(100vh-72px)] items-start justify-between gap-16 px-8 py-20 lg:px-16">
            <div className="max-w-[420px] pt-10">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.h1
                        key={step}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="text-[36px] font-semibold italic leading-tight text-white lg:text-[42px]"
                    >
                        {leftContent[step - 1]?.heading}
                    </motion.h1>
                </AnimatePresence>
            </div>

            <div className="flex-shrink-0">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={step}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                    >
                        {renderStep()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
