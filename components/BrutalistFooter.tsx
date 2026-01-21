"use client";

import React from "react";

export const BrutalistFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "LINKEDIN", href: "https://linkedin.com" },
    { label: "GITHUB", href: "https://github.com" },
    { label: "KAGGLE", href: "https://kaggle.com" },
  ];

  return (
    <footer className="bg-black text-white border-t-4 border-[#0066ff]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold text-mono mb-4">
              <span className="text-[#0066ff]">[</span>
              TRANCHANT.AI
              <span className="text-[#0066ff]">]</span>
            </div>
            <p className="text-gray-400 text-sm">
              DEEP_LEARNING_ENGINEER
              <br />
              AI_RESEARCHER
              <br />
              PHD_ASPIRANT
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold text-mono mb-4 text-[#0066ff]">
              {'//'} NAVIGATION
            </h4>
            <div className="space-y-2 text-sm">
              {["ABOUT", "PROJECTS", "SKILLS", "JOURNEY", "CONTACT"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors font-mono hoverable"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold text-mono mb-4 text-[#0066ff]">
              {'//'} CONNECT
            </h4>
            <div className="flex gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-xs font-bold hoverable"
                >
                  {link.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-mono">
            <div className="text-gray-400">
              © {currentYear} ADRIEN_TRANCHANT // ALL_RIGHTS_RESERVED
            </div>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors hoverable">
                LEGAL
              </a>
              <a href="#" className="hover:text-white transition-colors hoverable">
                PRIVACY
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 flex items-center gap-4 text-xs text-mono text-gray-600">
          <div className="flex-1 h-[1px] bg-gray-800" />
          <span>BUILT_WITH_NEXT.JS_&_TAILWINDCSS</span>
          <div className="flex-1 h-[1px] bg-gray-800" />
        </div>
      </div>
    </footer>
  );
};
