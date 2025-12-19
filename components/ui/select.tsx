"use client";

import { forwardRef, SelectHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/design-system/utils";

const selectVariants = cva(
    // Base styles
    [
        "w-full appearance-none bg-transparent text-white transition-colors duration-200",
        "focus:outline-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        // Custom arrow
        "bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.5)%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')]",
        "bg-no-repeat bg-[right_12px_center]",
        "pr-10",
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
            selectSize: {
                sm: "h-10 px-4 text-[13px] rounded-lg",
                md: "h-11 px-4 text-[13px] rounded-lg",
                lg: "h-12 px-4 text-[14px] rounded-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            selectSize: "md",
        },
    }
);

export interface SelectProps
    extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
    label?: string;
    error?: string;
    helperText?: string;
    options: Array<{ value: string; label: string; disabled?: boolean }>;
    placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({
        className,
        variant,
        selectSize,
        label,
        error,
        helperText,
        options,
        placeholder,
        id,
        value,
        ...props
    }, ref) => {
        const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');
        const hasError = !!error;
        const currentVariant = hasError ? 'error' : variant;
        const hasValue = value !== undefined && value !== '';

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={selectId}
                        className="mb-2 block text-[13px] font-medium text-white"
                    >
                        {label}
                    </label>
                )}
                <select
                    ref={ref}
                    id={selectId}
                    value={value}
                    className={cn(
                        selectVariants({ variant: currentVariant, selectSize }),
                        !hasValue && "text-white/30",
                        hasValue && "text-white",
                        className
                    )}
                    aria-invalid={hasError}
                    aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
                    {...props}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                            className="bg-[#1a0a1a] text-white"
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && (
                    <p id={`${selectId}-error`} className="mt-1 text-[12px] text-red-400" role="alert">
                        {error}
                    </p>
                )}
                {helperText && !error && (
                    <p id={`${selectId}-helper`} className="mt-1 text-[12px] text-white/50">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Select.displayName = "Select";

export { Select, selectVariants };
