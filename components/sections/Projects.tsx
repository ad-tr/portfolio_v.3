"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Section, SectionTitle, Card, Badge } from "@/components/ui";

export const Projects: React.FC = () => {
  const projects = [
    {
      id: "001",
      title: "Fine-Tuning Mistral & RAG",
      category: "LLM Engineering",
      year: "2025 (En cours)",
      description: "Spécialisation de Mistral 7B via Fine-Tuning (LoRA/QLoRA) et implémentation d'un pipeline RAG pour une expertise dans domaine ciblée.",
      tags: ["Python", "Mistral 7B", "LoRA", "RAG"],
      link: null,
    },
    {
      id: "002",
      title: "Développement d'un LLM \"From Scratch\"",
      category: "Deep Learning",
      year: "2025",
      description: "Implémentation complète d'un Decoder-only Transformer avec PyTorch pour comprendre les mécanismes internes des LLMs.",
      tags: ["Python", "PyTorch", "SentencePiece"],
      link: "https://github.com",
    },
    {
      id: "003",
      title: "Tokenizer BPE avec Interface Streamlit",
      category: "NLP",
      year: "2025",
      description: "Implémentation from scratch d'un tokenizer BPE avec support des tokens spéciaux, inspiré de GPT-2.",
      tags: ["Python", "Streamlit", "Regex"],
      link: "https://github.com",
    },
    {
      id: "004",
      title: "Réseau de Neurones pour Classification d'Images",
      category: "Computer Vision",
      year: "2023",
      description: "Mon premier projet en deep learning : construction d'un réseau de neurones simple pour la classification d'images.",
      tags: ["Python", "NumPy", "Matplotlib"],
      link: null,
    },
    {
      id: "005",
      title: "Prédiction de Prix Immobiliers - Kaggle",
      category: "Machine Learning",
      year: "2024-2025",
      description: "Pour mon second projet en machine learning, j'ai participé au challenge Kaggle pour prédire des prix immobiliers et j'ai réussi à finir dans le top 35% des participants.",
      tags: ["Python", "Scikit-Learn", "Pandas"],
      link: "https://kaggle.com",
    },
  ];

  return (
    <Section id="projects" className="bg-gradient-to-br from-gray-50 to-blue-50">
      <Container>
        <SectionTitle
          title="MES PROJETS"
          subtitle="Mes réalisations"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                {/* Project Number & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl font-bold text-gray-200">{project.id}</span>
                  <Badge variant="primary">{project.category}</Badge>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                {/* Year */}
                <p className="text-sm text-gray-500 mb-4">{project.year}</p>

                {/* Description */}
                <p className="text-gray-700 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="neutral">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors group"
                  >
                    Voir sur Github
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
