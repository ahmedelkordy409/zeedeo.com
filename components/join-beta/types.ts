export interface JoinBetaFormData {
    fullName: string;
    email: string;
    confirmEmail: string;
    profile: string;
    mobileType: string;
    goals: string[];
    benefits: string[];
}

export interface SubmissionData {
    name: string;
    category: string;
    email: string;
    mobileType: string;
    selectedCategory: string;
    selectedBenefit: string;
    createdAt: string;
}

export interface StepProps {
    formData: JoinBetaFormData;
    updateFormData: (data: Partial<JoinBetaFormData>) => void;
    onNext: () => void;
    onBack?: () => void;
    onSubmit?: () => Promise<void>;
}
