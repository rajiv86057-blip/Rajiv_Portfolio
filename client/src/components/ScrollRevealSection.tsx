import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReactNode } from "react";

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollRevealSection({
  children,
  className = "",
  delay = 0,
}: ScrollRevealSectionProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      } ${className}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
