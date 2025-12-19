import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/design-system/utils";

interface StackProps {
    children: ReactNode;
    className?: string;
    direction?: "row" | "column";
    gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    wrap?: boolean;
    as?: ElementType;
}

const gapValues = {
    none: "",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
};

const alignValues = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
};

const justifyValues = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
};

export function Stack({
    children,
    className,
    direction = "column",
    gap = "md",
    align = "stretch",
    justify = "start",
    wrap = false,
    as: Component = "div",
}: StackProps) {
    return (
        <Component
            className={cn(
                "flex",
                direction === "row" ? "flex-row" : "flex-col",
                gapValues[gap],
                alignValues[align],
                justifyValues[justify],
                wrap && "flex-wrap",
                className
            )}
        >
            {children}
        </Component>
    );
}

// Convenience exports
export function HStack(props: Omit<StackProps, "direction">) {
    return <Stack direction="row" {...props} />;
}

export function VStack(props: Omit<StackProps, "direction">) {
    return <Stack direction="column" {...props} />;
}
