"use client";

import { forwardRef, TextareaHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/design-system/utils";

const textareaVariants = cva(
    // Base styles
    [
        "w-full bg-transparent text-white transition-colors duration-200 resize-none",
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
            },
            textareaSize: {
                sm: "px-4 py-3 text-[13px] rounded-lg",
                md: "px-4 py-3 text-[13px] rounded-lg",
                lg: "px-4 py-4 text-[14px] rounded-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            textareaSize: "md",
        },
    }
);

export interface TextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, variant, textareaSize, label, error, helperText, id, rows = 4, ...props }, ref) => {
        const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');
        const hasError = !!error;
        const currentVariant = hasError ? 'error' : variant;

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={textareaId}
                        className="mb-2 block text-[13px] font-medium text-white"
                    >
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    id={textareaId}
                    rows={rows}
                    className={cn(textareaVariants({ variant: currentVariant, textareaSize }), className)}
                    aria-invalid={hasError}
                    aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
                    {...props}
                />
                {error && (
                    <p id={`${textareaId}-error`} className="mt-1 text-[12px] text-red-400" role="alert">
                        {error}
                    </p>
                )}
                {helperText && !error && (
                    <p id={`${textareaId}-helper`} className="mt-1 text-[12px] text-white/50">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
