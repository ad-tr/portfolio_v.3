"use client";

import React from "react";
import { motion } from "framer-motion";

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const BrutalistCard: React.FC<BrutalistCardProps> = ({
  children,
  className = "",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative bg-white border-2 border-black brutal-shadow spotlight ${className}`}
    >
      {children}
    </motion.div>
  );
};
