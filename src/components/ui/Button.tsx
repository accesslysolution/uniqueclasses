"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  children?: React.ReactNode; // Explicitly define children
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', icon, className, children, ...props }, ref) => {
    const variants = {
      primary: "bg-cta text-white hover:bg-[#c93536]",
      secondary: "bg-primary text-white hover:bg-[#252a75]",
      outline: "border-2 border-primary text-primary hover:bg-primary/5",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold transition-colors cursor-pointer disabled:opacity-50",
          variants[variant],
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {icon && <span className="text-xl inline-flex">{icon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";