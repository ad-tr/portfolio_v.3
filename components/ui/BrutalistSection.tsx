"use client";

import React from "react";

interface BrutalistSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const BrutalistSection: React.FC<BrutalistSectionProps> = ({
  children,
  className = "",
  id
}) => {
  return (
    <section
      id={id}
      className={`relative min-h-screen flex items-center py-32 ${className}`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 relative z-10">
        {children}
      </div>
    </section>
  );
};
