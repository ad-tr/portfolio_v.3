"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Section, SectionTitle, Card } from "@/components/ui";

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Deep Learning",
      skills: [
        { name: "LLM", experience: "1 ans", projects: "2" },
        { name: "PyTorch", experience: "1 ans", projects: "1" },
        { name: "NLP", experience: "1 ans", projects: "3" },
        { name: "Réseaux de Neurones", experience: "2 ans", projects: "2" },
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "RAG & LangChain", experience: "1 ans", projects: "1" },
        { name: "LoRA / QLoRA", experience: "1 ans", projects: "1" },
        { name: "Scikit-Learn", experience: "2 ans", projects: "2" },
        { name: "Pandas", experience: "2 ans", projects: "2" },
      ],
    },
    {
      title: "Programmation",
      skills: [
        { name: "Python", experience: "4 ans", projects: "5" },
        { name: "NumPy", experience: "2 ans", projects: "2" },
        { name: "TypeScript", experience: "2 ans", projects: "3+" },
        { name: "Algorithmique", experience: "4 ans", projects: "5" },
      ],
    },
    {
      title: "Développement Web",
      skills: [
        { name: "Next.js / React", experience: "3 ans", projects: "3+" },
        { name: "Streamlit", experience: "1 ans", projects: "1" },
        { name: "TailwindCSS", experience: "2 ans", projects: "2" },
        { name: "Git", experience: "3 ans", projects: "5" },
      ],
    },
  ];

  const stats = [
    { value: "12+", label: "Technologies" },
    { value: "03+", label: "Papers to Code" },
    { value: "725/900", label: "TOEIC" },
  ];

  return (
    <Section id="skills" className="bg-white">
      <Container>
        <SectionTitle
          title="COMPÉTENCES"
          subtitle="Stack technique"
        />

        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Voici l'ensemble des technologies que j'ai eu l'occasion d'utiliser au cours de mes projets.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <Card>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{skill.name}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Expérience: {skill.experience}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Projets:</div>
                        <div className="font-bold text-primary">{skill.projects}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
