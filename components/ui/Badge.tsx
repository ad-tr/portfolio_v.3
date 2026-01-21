import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "neutral";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  className = ""
}) => {
  const variants = {
    primary: "bg-blue-100 text-primary border-blue-200",
    secondary: "bg-purple-100 text-secondary border-purple-200",
    neutral: "bg-gray-100 text-gray-700 border-gray-200",
  };

  return (
    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
