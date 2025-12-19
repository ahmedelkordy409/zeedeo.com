"use client";

import { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/design-system/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "dark" | "darker" | "gradient" | "transparent";
  animate?: boolean;
  id?: string;
  ariaLabel?: string;
}

const sectionPadding = {
  none: "",
  sm: "py-12",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-24 lg:py-32",
  xl: "py-24 md:py-32 lg:py-40",
};

const sectionBackground = {
  dark: "bg-[#1a0a1a]",
  darker: "bg-[#0d0510]",
  gradient: "",
  transparent: "bg-transparent",
};

const gradientStyle: CSSProperties = {
  background: "linear-gradient(135deg, #1a0a1a 0%, #1e0e20 30%, #1a0a1a 50%, #2d1230 80%, #1a0a1a 100%)",
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Section({
  children,
  className,
  padding = "md",
  background = "dark",
  animate = true,
  id,
  ariaLabel,
}: SectionProps) {
  const classes = cn(
    sectionPadding[padding],
    sectionBackground[background],
    className
  );

  const style = background === "gradient" ? gradientStyle : undefined;

  if (animate) {
    return (
      <motion.section
        id={id}
        aria-label={ariaLabel}
        className={classes}
        style={style}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={classes}
      style={style}
    >
      {children}
    </section>
  );
}
