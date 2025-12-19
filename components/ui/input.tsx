"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/design-system/utils";

const inputVariants = cva(
    // Base styles
    [
        "w-full bg-transparent text-white transition-colors duration-200",
        "placeholder:text-white/30",
        "focus:outline-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
    ],
    {
        variants: {
            variant: {
                default: [
                    "border border-white/15",
                    "focus:border-white/30",
                ],
                error: [
                    "border border-red-500",
                    "focus:border-red-400",
                ],
                success: [
                    "border border-green-500",
                    "focus:border-green-400",
                ],
            },
            inputSize: {
                sm: "h-10 px-4 text-[13px] rounded-lg",
                md: "h-11 px-4 text-[13px] rounded-lg",
                lg: "h-12 px-4 text-[14px] rounded-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            inputSize: "md",
        },
    }
);

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, inputSize, label, error, helperText, id, ...props }, ref) => {
        const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
        const hasError = !!error;
        const currentVariant = hasError ? 'error' : variant;

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="mb-2 block text-[13px] font-medium text-white"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={cn(inputVariants({ variant: currentVariant, inputSize }), className)}
                    aria-invalid={hasError}
                    aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                    {...props}
                />
                {error && (
                    <p id={`${inputId}-error`} className="mt-1 text-[12px] text-red-400" role="alert">
                        {error}
                    </p>
                )}
                {helperText && !error && (
                    <p id={`${inputId}-helper`} className="mt-1 text-[12px] text-white/50">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input, inputVariants };
