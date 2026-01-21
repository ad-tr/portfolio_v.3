"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Section, SectionTitle, Card, Button } from "@/components/ui";

export const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "adrien@tranchant.ai",
      link: "mailto:adrien@tranchant.ai",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/adrien-tranchant",
      link: "https://linkedin.com",
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/adrientranchant",
      link: "https://github.com",
    },
  ];

  const links = [
    { label: "Accueil", href: "#" },
    { label: "À Propos", href: "#about" },
    { label: "Projets", href: "#projects" },
    { label: "Compétences", href: "#skills" },
    { label: "Parcours", href: "#experience" },
  ];

  return (
    <Section id="contact" className="bg-gradient-to-br from-primary/5 to-secondary/5">
      <Container>
        <SectionTitle
          title="CONTACT"
          subtitle="Restons en contact"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card hover={false}>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                ADRIEN TRANCHANT
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Étudiant en architecture logicielle, aspirant chercheur. Mon objectif : contribuer aux futures avancées
                de l'IA à travers un doctorat.
              </p>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <span className="text-3xl mr-4">{method.icon}</span>
                    <div>
                      <div className="text-sm text-gray-600">{method.title}</div>
                      <div className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Right side - Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card hover={false}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Explorer
              </h3>
              <div className="space-y-3 mb-8">
                {links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-primary font-medium"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Mes réseaux</h4>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                    aria-label="LinkedIn"
                  >
                    💼
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    aria-label="GitHub"
                  >
                    🐙
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-br from-primary to-secondary text-white">
            <h3 className="text-3xl font-bold mb-4">
              Discutons de votre projet
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Vous avez un projet en IA ou souhaitez collaborer ? N'hésitez pas à me contacter.
            </p>
            <a href="mailto:adrien@tranchant.ai">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Me contacter
                <span className="ml-2">→</span>
              </Button>
            </a>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
};
