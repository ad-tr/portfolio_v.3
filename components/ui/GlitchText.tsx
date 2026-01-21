"use client";

import React, { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "" }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`${isGlitching ? 'glitch' : ''} ${className}`}>
      {text}
    </span>
  );
};
