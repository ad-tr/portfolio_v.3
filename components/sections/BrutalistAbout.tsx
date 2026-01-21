"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrutalistSection } from "@/components/ui/BrutalistSection";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { BrutalistCard } from "@/components/ui/BrutalistCard";

export const BrutalistAbout: React.FC = () => {
  return (
    <BrutalistSection id="about">
      <SectionNumber number="01" label="ABOUT" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-6xl md:text-7xl font-bold text-brutal">
          QUI SUIS-JE<span className="text-[#0066ff]">?</span>
        </h2>
      </motion.div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Text blocks */}
          <div className="border-l-4 border-[#0066ff] pl-6 relative">
            <p className="text-lg leading-relaxed">
              Étudiant en architecture logicielle à l'<span className="font-bold text-[#0066ff]">ESGI Reims</span>,
              passionné par l'intelligence artificielle. J'apprends le deep learning en{" "}
              <span className="font-bold text-[#0066ff]">réimplémentant des concepts from scratch</span> pour
              vraiment comprendre comment ils fonctionnent.
              <br />
              Mon objectif est de poursuivre un <span className="font-bold text-[#0066ff]">PhD en IA</span> pour
              contribuer à la recherche et repousser les limites de l'état de l'art. J'aime apprendre en faisant,
              que ce soit à travers la recherche ou les compétitions.
            </p>
          </div>

          {/* Approach Card */}
          <BrutalistCard className="p-8 bg-black text-black relative overflow-hidden">
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-2 h-2 bg-[#0066ff] rounded-full" />
              <div className="w-2 h-2 bg-[#0066ff] rounded-full" />
              <div className="w-2 h-2 bg-[#0066ff] rounded-full" />
            </div>

            <h3 className="text-xl font-bold text-brutal mb-4 flex items-center gap-3">
              <span className="text-[#0066ff]">{'//'}</span>
              APPROCHE
            </h3>
            <p className="text-base leading-relaxed">
              Pour comprendre, il faut construire. Je déconstruis et recode les architectures modernes
              pour maîtriser ce qui se passe sous le capot, au-delà des simples abstractions.
            </p>
          </BrutalistCard>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Objective Card */}
          <BrutalistCard className="p-8 bg-white relative h-full">
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-2 h-2 bg-black rounded-full" />
              <div className="w-2 h-2 bg-black rounded-full" />
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>

            <h3 className="text-xl font-bold text-brutal mb-4 flex items-center gap-3">
              <span className="text-[#0066ff]">{'//'}</span>
              OBJECTIF
            </h3>
            <p className="text-base leading-relaxed mb-8">
              Repousser les limites de l'état de l'art et participer aux prochaines avancées du domaine
              de l'IA à travers un <span className="font-bold">doctorat</span>.
            </p>

            {/* Mini stats inside */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t-2 border-black">
              <div className="border-2 border-black p-4 text-center hover:bg-gray-50 transition-colors">
                <div className="text-4xl font-bold text-[#0066ff] text-mono mb-2">03+</div>
                <div className="text-xs font-bold text-mono">ANNÉES</div>
              </div>
              <div className="border-2 border-black p-4 text-center hover:bg-gray-50 transition-colors">
                <div className="text-4xl font-bold text-[#0066ff] text-mono mb-2">05</div>
                <div className="text-xs font-bold text-mono">PROJETS</div>
              </div>
              <div className="border-2 border-black p-4 text-center hover:bg-gray-50 transition-colors">
                <div className="text-4xl font-bold text-[#0066ff] text-mono mb-2">PHD</div>
                <div className="text-xs font-bold text-mono">OBJECTIF</div>
              </div>
              <div className="border-2 border-black p-4 text-center hover:bg-gray-50 transition-colors">
                <div className="text-4xl font-bold text-[#0066ff] text-mono mb-2">TOP35%</div>
                <div className="text-xs font-bold text-mono">KAGGLE</div>
              </div>
            </div>
          </BrutalistCard>
        </motion.div>
      </div>
    </BrutalistSection>
  );
};
