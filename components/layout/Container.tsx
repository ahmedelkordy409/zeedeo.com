import { ReactNode } from "react";
import { cn } from "@/lib/design-system/utils";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg" | "full";
    padding?: "none" | "sm" | "md" | "lg";
    centered?: boolean;
}

const containerSizes = {
    sm: "max-w-[900px]",
    md: "max-w-[1200px]",
    lg: "max-w-[1440px]",
    full: "max-w-full",
};

const containerPadding = {
    none: "",
    sm: "px-4",
    md: "px-4 md:px-8",
    lg: "px-4 md:px-8 lg:px-16",
};

export function Container({
    children,
    className,
    size = "md",
    padding = "md",
    centered = true,
}: ContainerProps) {
    return (
        <div
            className={cn(
                containerSizes[size],
                containerPadding[padding],
                centered && "mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
}
