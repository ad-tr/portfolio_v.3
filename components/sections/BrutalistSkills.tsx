"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrutalistSection } from "@/components/ui/BrutalistSection";
import { SectionNumber } from "@/components/ui/SectionNumber";

export const BrutalistSkills: React.FC = () => {
  const skillCategories = [
    {
      title: "DEEP_LEARNING",
      skills: ["LLM", "PyTorch", "NLP", "CNN", "Transformers"],
    },
    {
      title: "MACHINE_LEARNING",
      skills: ["RAG & LangChain", "LoRA / QLoRA", "Scikit-Learn", "Pandas", "NumPy"],
    },
    {
      title: "PROGRAMMING",
      skills: ["Python", "TypeScript", "Algorithmique", "Git"],
    },
    {
      title: "WEB_DEV",
      skills: ["Next.js / React", "Streamlit", "TailwindCSS"],
    },
  ];

  return (
    <BrutalistSection id="skills">
      <SectionNumber number="03" label="SKILLS" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-brutal mb-6">
          STACK TECHNIQUE<span className="text-[#0066ff]">.</span>
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl">
          Technologies et frameworks que j'utilise pour mes projets en IA et développement.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className="border-2 border-black bg-white brutal-shadow spotlight"
          >
            {/* Category Header */}
            <div className="bg-black text-white p-6">
              <h3 className="text-2xl font-bold text-mono">
                {category.title}
              </h3>
            </div>

            {/* Skills List */}
            <div className="p-6">
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="px-4 py-2 bg-white border-2 border-black font-bold text-sm text-mono hover:bg-[#0066ff] hover:text-white hover:border-[#0066ff] transition-all duration-300 hoverable"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </BrutalistSection>
  );
};
