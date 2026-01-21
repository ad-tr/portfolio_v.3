"use client";

import React from "react";

interface ElectricBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  className = ""
}) => {
  return (
    <div className={`electric-border ${className}`}>
      {children}
    </div>
  );
};
