"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrutalistSection } from "@/components/ui/BrutalistSection";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { BrutalistButton } from "@/components/ui/BrutalistButton";

export const BrutalistContact: React.FC = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "EMAIL",
      value: "adrien@tranchant.ai",
      link: "mailto:adrien@tranchant.ai",
    },
    {
      icon: "💼",
      title: "LINKEDIN",
      value: "linkedin.com/in/adrien-tranchant",
      link: "https://linkedin.com",
    },
    {
      icon: "🐙",
      title: "GITHUB",
      value: "github.com/adrientranchant",
      link: "https://github.com",
    },
  ];

  return (
    <BrutalistSection id="contact">
      <SectionNumber number="05" label="CONTACT" />

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-brutal mb-6 leading-tight">
            RESTONS EN CONTACT<span className="text-[#0066ff]">.</span>
          </h2>
          <p className="text-xl text-gray-700">
            Ouvert aux opportunités de stage, alternance ou projets de recherche en IA.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="space-y-4 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-6 p-6 border-2 border-black bg-white brutal-shadow hover:bg-black hover:text-white transition-all duration-300 group hoverable"
            >
              <span className="text-5xl">{method.icon}</span>
              <div className="flex-1">
                <div className="text-xs font-bold text-mono text-gray-600 group-hover:text-[#0066ff] transition-colors mb-1">
                  {method.title}
                </div>
                <div className="font-bold text-mono text-lg">
                  {method.value}
                </div>
              </div>
              <span className="text-[#0066ff] text-2xl group-hover:translate-x-2 transition-transform">
                →
              </span>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a href="mailto:adrien@tranchant.ai">
            <BrutalistButton variant="primary" className="text-lg px-12 py-6">
              SEND_MESSAGE →
            </BrutalistButton>
          </a>
        </motion.div>
      </div>
    </BrutalistSection>
  );
};
