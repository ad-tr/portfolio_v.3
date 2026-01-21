"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface BrutalistButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const BrutalistButton: React.FC<BrutalistButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-[#0066ff] text-white border-black hover:bg-black hover:text-[#0066ff]",
    secondary: "bg-white text-black border-[#0066ff] hover:bg-[#0066ff] hover:text-white",
    outline: "bg-white text-black border-black hover:bg-black hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base",
  };

  return (
    <motion.button
      whileHover={{ x: -4, y: -4 }}
      whileTap={{ x: 0, y: 0 }}
      className={`${sizes[size]} border-2 font-bold uppercase tracking-wider transition-all duration-300 brutal-shadow hoverable ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
