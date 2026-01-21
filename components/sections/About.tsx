"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Section, SectionTitle, Card } from "@/components/ui";

export const About: React.FC = () => {
  const stats = [
    { label: "Actif", value: "Kaggle", icon: "📊" },
    { label: "Année d'études", value: "03+", icon: "📚" },
    { label: "Objectif", value: "PhD", icon: "🎓" },
    { label: "France", value: "REIMS", icon: "📍" },
  ];

  return (
    <Section id="about" className="bg-white">
      <Container>
        <SectionTitle
          title="À PROPOS"
          subtitle="Qui suis-je"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="text-9xl">👨‍💻</div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Je suis étudiant en architecture logicielle à l'ESGI Reims, passionné par l'intelligence artificielle.
                Sur mon temps libre, j'apprends le deep learning en réimplémentant des concepts pour comprendre comment
                ils fonctionnent.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mon objectif est de poursuivre un PhD en IA pour contribuer à la recherche. J'aime apprendre en faisant,
                que ce soit de la recherche ou des compétitions.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 p-4 rounded-xl border border-gray-100"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mes réalisations
              </h3>
              <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
                Ce qui me motive, c'est de pouvoir repousser les limites de l'état de l'art et de participer aux
                prochaines avancées du domaine. Pour cela, je fais des projets sur lesquels je peux découvrir de
                nouvelles technologies et approches.
              </p>
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">03</div>
                  <div className="text-sm text-gray-600">Modèles entraînés</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">05</div>
                  <div className="text-sm text-gray-600">Projets</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">01</div>
                  <div className="text-sm text-gray-600">Modèle Fine-Tuné</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
};
