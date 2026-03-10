import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export default function Button({ children, variant = "primary", className = "", onClick, href, disabled }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "fiery-gradient text-white molten-glow-hover hover:scale-105",
    secondary: "bg-white text-secondary hover:bg-light",
    outline: "border-2 border-primary text-light hover:bg-primary/10",
  };

  const content = (
    <motion.button
      whileHover={{ y: disabled ? 0 : -2 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
