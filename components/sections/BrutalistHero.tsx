"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrutalistButton } from "@/components/ui/BrutalistButton";
import { GlitchText } from "@/components/ui/GlitchText";

export const BrutalistHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-[10%] w-[2px] h-full bg-gradient-to-b from-transparent via-[#0066ff] to-transparent opacity-20" />
      <div className="absolute top-0 right-[10%] w-[2px] h-full bg-gradient-to-b from-transparent via-[#0066ff] to-transparent opacity-20" />

      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 relative z-10">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-4"
        >

        </motion.div>

        {/* Main Title */}
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-massive text-brutal leading-none mb-4"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <span className="block">
              <GlitchText text="ADRIEN" />
            </span>
            <span className="block text-[#0066ff]">
              <GlitchText text="TRANCHANT" />
            </span>
          </motion.h1>

          {/* Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="h-2 bg-black"
          />
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-2xl md:text-3xl leading-relaxed text-black font-medium mb-6">
            MACHINE LEARNING ENGINEER
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Réimplémentation de concepts pour comprendre les architectures modernes.
            De l'implémentation from scratch aux compétitions Kaggle.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <BrutalistButton
            variant="primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VIEW_PROJECTS →
          </BrutalistButton>
          <BrutalistButton
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            GET_IN_TOUCH
          </BrutalistButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer hoverable"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs font-bold text-mono mb-2">SCROLL</span>
            <div className="w-[2px] h-12 bg-[#0066ff]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
