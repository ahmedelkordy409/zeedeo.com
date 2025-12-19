import { ReactNode } from "react";
import { cn } from "@/lib/design-system/utils";

interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: "default" | "bordered" | "glass";
    padding?: "none" | "sm" | "md" | "lg";
    rounded?: "md" | "lg" | "xl" | "2xl";
    hover?: boolean;
}

const cardVariants = {
    default: "bg-[#0d0510]/60",
    bordered: "bg-[#0d0510]/60 border border-white/10",
    glass: "bg-white/5 backdrop-blur-sm border border-white/10",
};

const cardPadding = {
    none: "",
    sm: "p-4",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10 lg:p-12",
};

const cardRounded = {
    md: "rounded-lg",
    lg: "rounded-xl",
    xl: "rounded-2xl",
    "2xl": "rounded-3xl",
};

export function Card({
    children,
    className,
    variant = "bordered",
    padding = "md",
    rounded = "xl",
    hover = false,
}: CardProps) {
    return (
        <div
            className={cn(
                cardVariants[variant],
                cardPadding[padding],
                cardRounded[rounded],
                hover && "transition-all duration-300 hover:border-white/20 hover:bg-[#0d0510]/80",
                className
            )}
        >
            {children}
        </div>
    );
}
