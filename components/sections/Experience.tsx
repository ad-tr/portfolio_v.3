"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Section, SectionTitle, Badge } from "@/components/ui";

export const Experience: React.FC = () => {
  const experiences = [
    {
      period: "2021-2026",
      title: "Alternance Développeur",
      company: "Carbono",
      location: "Reims, France",
      description: "Alternance pendant 4 ans chez Carbono à Reims, où j'ai pu développer mes compétences en développement web et mettre en pratique mes connaissances en développement logiciel.",
      tags: ["JavaScript", "TypeScript", "React"],
      icon: "💼",
    },
    {
      period: "2025-2027",
      title: "Master Architecture des Logiciels",
      company: "ESGI Reims",
      location: "Reims, France",
      description: "Suite à ma formation en Bachelor Architecture des Logiciels, pour approfondir mes connaissances en développement logiciel et systèmes d'information.",
      tags: ["JavaScript", "TypeScript", "Next.js", "Et d'autres.."],
      icon: "🎓",
    },
    {
      period: "2022-2025",
      title: "Bachelor Architecture des Logiciels",
      company: "ESGI Reims",
      location: "Reims, France",
      description: "Formation en développement logiciel, bases de données et systèmes d'information. Une base solide pour comprendre l'ingénierie derrière l'IA.",
      tags: ["JavaScript", "TypeScript", "Next.js", "Et d'autres.."],
      icon: "📚",
    },
    {
      period: "2022",
      title: "Baccalauréat",
      company: "Lycée",
      location: "Epernay, France",
      description: "Spécialités Physique-Chimie et NSI (Numérique Sciences Informatiques). Mes premiers pas en programmation et algorithmique.",
      tags: ["Python", "Algorithmes", "Mathématiques"],
      icon: "🏫",
    },
  ];

  return (
    <Section id="experience" className="bg-gradient-to-br from-gray-50 to-purple-50">
      <Container>
        <SectionTitle
          title="PARCOURS"
          subtitle="Professional Journey"
        />

        <p className="text-center text-gray-700 mb-16 max-w-3xl mx-auto">
          Je passe du développement logiciel à l'ingénierie IA avec une conviction : pour comprendre, il faut construire.
          Je déconstruis et recode les architectures modernes pour maîtriser ce qui se passe sous le capot, au-delà des
          simples abstractions.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-primary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-gray-100">
                    {/* Period Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="primary">{exp.period}</Badge>
                      <span className="text-4xl">{exp.icon}</span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="text-lg font-semibold text-primary mb-1">
                      {exp.company}
                    </div>
                    <div className="text-sm text-gray-600 mb-4 flex items-center">
                      <span className="mr-1">📍</span>
                      {exp.location}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="neutral">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10" />

                {/* Spacer for other side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
