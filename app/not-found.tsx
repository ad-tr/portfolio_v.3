"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BrutalistButton } from "@/components/ui/BrutalistButton";
import { DotText } from "@/components/ui/DotText";
import { BackgroundEffects } from "@/components/BackgroundEffects";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects />

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">

        {/* 404 in dots */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <DotText text="404" size="xl" color="#0066ff" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-brutal mb-4">
            PAGE_NOT_FOUND<span className="text-[#0066ff]">.</span>
          </h1>
          <div className="h-[2px] w-32 bg-black mx-auto" />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <div className="border-2 border-black p-8 brutal-shadow bg-white inline-block">
            <p className="text-xl text-gray-700 mb-2 font-mono">
              ERROR_CODE: <span className="text-[#0066ff]">404</span>
            </p>
            <p className="text-lg text-gray-600">
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <BrutalistButton size="lg" variant="primary">
              BACK_TO_HOME →
            </BrutalistButton>
          </Link>
          <Link href="/#contact">
            <BrutalistButton size="lg" variant="outline">
              CONTACT_ME
            </BrutalistButton>
          </Link>
        </motion.div>
      </div>

    </div>
  );
}
