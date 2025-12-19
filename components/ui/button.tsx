"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/design-system/utils";

const buttonVariants = cva(
    // Base styles
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a0a1a] disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                primary: [
                    "bg-[#e91e8c] text-white",
                    "hover:bg-[#d11a7d]",
                    "shadow-[0_4px_20px_rgba(233,30,140,0.3)]",
                    "hover:shadow-[0_6px_30px_rgba(233,30,140,0.4)]",
                    "focus-visible:ring-[#e91e8c]",
                ],
                secondary: [
                    "bg-transparent text-white",
                    "border border-white/20",
                    "hover:bg-white/5 hover:border-white/30",
                    "focus-visible:ring-white/50",
                ],
                ghost: [
                    "bg-transparent text-white/70",
                    "hover:text-white hover:bg-white/5",
                    "focus-visible:ring-white/50",
                ],
                outline: [
                    "bg-transparent text-white",
                    "border border-[#e91e8c]",
                    "hover:bg-[#e91e8c]/10",
                    "focus-visible:ring-[#e91e8c]",
                ],
                dark: [
                    "bg-[#2a1a3a] text-white",
                    "hover:bg-[#3a2a4a]",
                    "focus-visible:ring-[#e91e8c]",
                ],
            },
            size: {
                sm: "h-9 px-4 text-[13px] rounded-full",
                md: "h-10 px-6 text-[14px] rounded-full",
                lg: "h-11 px-8 text-[14px] rounded-full",
                xl: "h-[52px] px-8 text-[16px] rounded-full",
            },
            fullWidth: {
                true: "w-full",
                false: "",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            fullWidth: false,
        },
    }
);

export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    animate?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, fullWidth, animate = true, children, ...props }, ref) => {
        const classes = cn(buttonVariants({ variant, size, fullWidth }), className);

        if (animate) {
            return (
                <motion.button
                    ref={ref}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className={classes}
                    {...(props as HTMLMotionProps<"button">)}
                >
                    {children}
                </motion.button>
            );
        }

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };
