"use client";

import React from "react";
import { motion } from "framer-motion";
import { DotText } from "./DotText";

interface SectionNumberProps {
  number: string;
  label: string;
}

export const SectionNumber: React.FC<SectionNumberProps> = ({ number, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-8 mb-16"
    >
      <DotText text={number} size="xl" color="#0066ff" />
      <div className="flex-1 h-[2px] bg-black" />
      <span className="text-brutal text-xl md:text-2xl">
        {label}
      </span>
    </motion.div>
  );
};
