export interface JoinBetaFormData {
    fullName: string;
    email: string;
    profile: string;
    mobileType: string;
    goals: string[];
    benefits: string[];
}

export interface StepProps {
    formData: JoinBetaFormData;
    updateFormData: (data: Partial<JoinBetaFormData>) => void;
    onNext: () => void;
    onBack?: () => void;
}
