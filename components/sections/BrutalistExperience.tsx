"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrutalistSection } from "@/components/ui/BrutalistSection";
import { SectionNumber } from "@/components/ui/SectionNumber";

export const BrutalistExperience: React.FC = () => {
  const experiences = [
    {
      period: "2021_2026",
      title: "ALTERNANCE DÉVELOPPEUR",
      company: "CARBONO",
      location: "REIMS_FR",
      description: "Alternance pendant 4 ans chez Carbono à Reims, où j'ai pu développer mes compétences en développement web et mettre en pratique mes connaissances en développement logiciel.",
      tags: ["JAVASCRIPT", "TYPESCRIPT", "REACT"],
      type: "WORK",
    },
    {
      period: "2025_2027",
      title: "MASTER ARCHITECTURE",
      company: "ESGI_REIMS",
      location: "REIMS_FR",
      description: "Suite à ma formation en Bachelor Architecture des Logiciels, pour approfondir mes connaissances en développement logiciel et systèmes d'information.",
      tags: ["JAVASCRIPT", "TYPESCRIPT", "NEXT.JS"],
      type: "EDUCATION",
    },
    {
      period: "2022_2025",
      title: "BACHELOR ARCHITECTURE",
      company: "ESGI_REIMS",
      location: "REIMS_FR",
      description: "Formation en développement logiciel, bases de données et systèmes d'information. Une base solide pour comprendre l'ingénierie derrière l'IA.",
      tags: ["JAVASCRIPT", "TYPESCRIPT", "DATABASES"],
      type: "EDUCATION",
    },
    {
      period: "2022",
      title: "BACCALAURÉAT",
      company: "LYCÉE",
      location: "EPERNAY_FR",
      description: "Spécialités Physique-Chimie et NSI (Numérique Sciences Informatiques). Mes premiers pas en programmation et algorithmique.",
      tags: ["PYTHON", "ALGORITHMS", "PHYSICS"],
      type: "EDUCATION",
    },
  ];

  return (
    <BrutalistSection id="experience" className="bg-[#fafafa]">
      <SectionNumber number="04" label="JOURNEY" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-brutal">
          MON PARCOURS<span className="text-[#0066ff]">.</span>
        </h2>
        <p className="text-xl mt-6 max-w-3xl leading-relaxed">
          Du développement logiciel à l'ingénierie IA. Pour comprendre, il faut construire.
          Je déconstruis et recode les architectures modernes pour maîtriser ce qui se passe sous le capot.
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border-2 border-black bg-white brutal-shadow spotlight hoverable"
          >
            <div className="grid md:grid-cols-12">
              {/* Left - Period & Type */}
              <div className="md:col-span-3 bg-black text-white p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-mono text-[#0066ff] mb-2">
                    {exp.type}
                  </div>
                  <div className="text-3xl font-bold text-mono">
                    {exp.period}
                  </div>
                </div>
                <div className="text-xs text-mono text-gray-400 mt-4">
                  {exp.location}
                </div>
              </div>

              {/* Right - Content */}
              <div className="md:col-span-9 p-8">
                <h3 className="text-3xl font-bold text-brutal mb-2">
                  {exp.title}
                </h3>
                <div className="text-[#0066ff] font-bold text-mono text-sm mb-6">
                  {exp.company}
                </div>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold text-mono bg-white border border-black px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </BrutalistSection>
  );
};
