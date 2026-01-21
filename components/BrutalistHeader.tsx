"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const BrutalistHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "01_ABOUT", number: "01" },
    { href: "#projects", label: "02_PROJECTS", number: "02" },
    { href: "#skills", label: "03_SKILLS", number: "03" },
    { href: "#experience", label: "04_JOURNEY", number: "04" },
    { href: "#contact", label: "05_CONTACT", number: "05" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white border-b-2 border-black" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold text-mono hoverable flex items-center gap-3"
          >
            <span className="text-[#0066ff]">[</span>
            <span className="text-black">TRANCHANT.AI</span>
            <span className="text-[#0066ff]">]</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="relative px-4 py-2 text-xs font-bold text-mono hoverable group"
              >
                <span className="text-[#0066ff]">{link.number}_</span>
                <span className="text-black group-hover:text-[#0066ff] transition-colors">
                  {link.label.split('_')[1]}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0066ff] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hoverable">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="block h-0.5 w-full bg-black" />
              <span className="block h-0.5 w-full bg-black" />
              <span className="block h-0.5 w-full bg-black" />
            </div>
          </button>
        </div>
      </nav>
    </motion.header>
  );
};
