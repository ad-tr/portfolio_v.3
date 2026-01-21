"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" } : {}}
      className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};
