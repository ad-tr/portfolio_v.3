"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrutalistSection } from "@/components/ui/BrutalistSection";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { BrutalistCard } from "@/components/ui/BrutalistCard";
import { DotText } from "@/components/ui/DotText";

export const BrutalistProjects: React.FC = () => {
  const projects = [
    {
      id: "001",
      title: "Fine-Tuning Mistral & RAG",
      category: "LLM_ENGINEERING",
      year: "2025",
      status: "IN_PROGRESS",
      description: "Spécialisation de Mistral 7B via Fine-Tuning (LoRA/QLoRA) et implémentation d'un pipeline RAG pour une expertise dans domaine ciblée.",
      tags: ["PYTHON", "MISTRAL_7B", "LORA", "RAG"],
      link: null,
    },
    {
      id: "002",
      title: "LLM From Scratch",
      category: "DEEP_LEARNING",
      year: "2025",
      status: "COMPLETED",
      description: "Implémentation complète d'un Decoder-only Transformer avec PyTorch pour comprendre les mécanismes internes des LLMs.",
      tags: ["PYTHON", "PYTORCH", "SENTENCEPIECE"],
      link: "https://github.com",
    },
    {
      id: "003",
      title: "Tokenizer BPE",
      category: "NLP",
      year: "2025",
      status: "COMPLETED",
      description: "Implémentation from scratch d'un tokenizer BPE avec support des tokens spéciaux, inspiré de GPT-2.",
      tags: ["PYTHON", "STREAMLIT", "REGEX"],
      link: "https://github.com",
    },
    {
      id: "004",
      title: "CNN Image Classification",
      category: "COMPUTER_VISION",
      year: "2023",
      status: "COMPLETED",
      description: "Mon premier projet en deep learning : construction d'un réseau de neurones simple pour la classification d'images.",
      tags: ["PYTHON", "NUMPY", "MATPLOTLIB"],
      link: null,
    },
    {
      id: "005",
      title: "Kaggle Housing Prices",
      category: "MACHINE_LEARNING",
      year: "2024-2025",
      status: "TOP_35%",
      description: "Participation au challenge Kaggle pour prédire des prix immobiliers avec un score dans le top 35% des participants.",
      tags: ["PYTHON", "SCIKIT-LEARN", "PANDAS"],
      link: "https://kaggle.com",
    },
  ];

  return (
    <BrutalistSection id="projects" className="bg-[#fafafa]">
      <SectionNumber number="02" label="PROJECTS" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-brutal">
          MES RÉALISATIONS<span className="text-[#0066ff]">.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <BrutalistCard key={1+project.id} delay={index * 0.1} className="p-8 hoverable">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="opacity-30">
                <DotText text={project.id.replace(/^0+/, '0')} size="lg" color="#0066ff" />
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-mono bg-[#0066ff] text-white px-3 py-1 mb-2">
                  {project.category}
                </div>
                <div className="text-xs font-bold text-mono text-black">
                  {project.year}
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="mb-4">
              <span className={`text-xs font-bold text-mono px-3 py-1 border-2 ${
                project.status === 'IN_PROGRESS'
                  ? 'border-[#0066ff] text-[#0066ff]'
                  : 'border-black text-black'
              }`}>
                STATUS: {project.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-brutal mb-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-[#0066ff] rounded-full flex-shrink-0" />
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-base leading-relaxed mb-6 text-gray-700">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold text-mono bg-white border border-black px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-mono text-[#0066ff] hover:text-black transition-colors hoverable group"
              >
                VIEW_PROJECT
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            )}
          </BrutalistCard>
        ))}
      </div>
    </BrutalistSection>
  );
};
