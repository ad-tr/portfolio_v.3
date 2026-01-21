"use client";

import React from "react";

interface DotTextProps {
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  className?: string;
}

export const DotText: React.FC<DotTextProps> = ({
  text,
  size = "lg",
  color = "#0066ff",
  className = ""
}) => {
  const sizes = {
    sm: { dotSize: 2, gap: 2, fontSize: 24 },
    md: { dotSize: 3, gap: 3, fontSize: 48 },
    lg: { dotSize: 4, gap: 4, fontSize: 96 },
    xl: { dotSize: 6, gap: 6, fontSize: 144 },
  };

  const config = sizes[size];

  // Matrice de points pour les chiffres (5x7 grille)
  const digitPatterns: { [key: string]: number[][] } = {
    '0': [
      [0,1,1,1,0],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [0,1,1,1,0],
    ],
    '1': [
      [0,0,1,0,0],
      [0,1,1,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,1,1,1,0],
    ],
    '2': [
      [0,1,1,1,0],
      [1,0,0,0,1],
      [0,0,0,0,1],
      [0,0,1,1,0],
      [0,1,0,0,0],
      [1,0,0,0,0],
      [1,1,1,1,1],
    ],
    '3': [
      [0,1,1,1,0],
      [1,0,0,0,1],
      [0,0,0,0,1],
      [0,0,1,1,0],
      [0,0,0,0,1],
      [1,0,0,0,1],
      [0,1,1,1,0],
    ],
    '4': [
      [0,0,0,1,0],
      [0,0,1,1,0],
      [0,1,0,1,0],
      [1,0,0,1,0],
      [1,1,1,1,1],
      [0,0,0,1,0],
      [0,0,0,1,0],
    ],
    '5': [
      [1,1,1,1,1],
      [1,0,0,0,0],
      [1,1,1,1,0],
      [0,0,0,0,1],
      [0,0,0,0,1],
      [1,0,0,0,1],
      [0,1,1,1,0],
    ],
  };

  const renderCharacter = (char: string, charIndex: number) => {
    const pattern = digitPatterns[char];
    if (!pattern) return null;

    return (
      <div
        key={charIndex}
        className="inline-grid gap-[2px]"
        style={{
          gridTemplateColumns: `repeat(5, ${config.dotSize}px)`,
          gridTemplateRows: `repeat(7, ${config.dotSize}px)`,
          marginRight: `${config.gap * 2}px`,
        }}
      >
        {pattern.flat().map((dot, index) => (
          <div
            key={index}
            className="rounded-full transition-all duration-300"
            style={{
              width: `${config.dotSize}px`,
              height: `${config.dotSize}px`,
              backgroundColor: dot === 1 ? color : 'transparent',
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      {text.split('').map((char, index) => renderCharacter(char, index))}
    </div>
  );
};
