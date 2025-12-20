import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { JoinBetaFormData, SubmissionData } from "@/components/join-beta/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Check if the profile category is a company/business type
 */
export const isCompanyCategory = (category: string): boolean =>
  category === "Company" ||
  category === "Startup Founder" ||
  category === "University";

/**
 * Validate the form data for Step1
 */
export const validateFormData = (formData: JoinBetaFormData): boolean => {
  const { fullName, email, confirmEmail, profile, mobileType } = formData;
  return !!(
    fullName &&
    email &&
    confirmEmail &&
    profile &&
    mobileType &&
    email === confirmEmail
  );
};

/**
 * Submit form data to Google Sheets via Apps Script
 */
export const saveToSheet = async (data: SubmissionData): Promise<void> => {
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyBe3mYO8326FgbVwRHpAEo0_RzhwWPIgzlX4s1usXqGOAd2peSKEZzdwzMv6O0HuT8AA/exec";
  const formDataWaitlist = new FormData();
  formDataWaitlist.append("name", data.name);
  formDataWaitlist.append("email", data.email);
  formDataWaitlist.append("category", data.category);
  formDataWaitlist.append("selectedCategory", data.selectedCategory);
  formDataWaitlist.append("selectedBenefit", data.selectedBenefit);
  formDataWaitlist.append("mobileType", data.mobileType);
  formDataWaitlist.append("createdAt", data.createdAt);

  try {
    await fetch(scriptUrl, {
      method: "POST",
      body: formDataWaitlist,
    });
  } catch (error) {
    console.error("Error submitting data:", error);
  }
};
