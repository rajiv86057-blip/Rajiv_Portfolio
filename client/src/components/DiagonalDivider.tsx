interface DiagonalDividerProps {
  className?: string;
  position?: "top" | "bottom";
}

export function DiagonalDivider({
  className = "",
  position = "bottom",
}: DiagonalDividerProps) {
  const isTop = position === "top";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        className="w-full h-auto"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="diagonalGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="oklch(0.65 0.25 200)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="oklch(0.55 0.30 280)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d={
            isTop
              ? "M 0,60 Q 300,0 600,60 T 1200,60 L 1200,0 L 0,0 Z"
              : "M 0,60 Q 300,120 600,60 T 1200,60 L 1200,120 L 0,120 Z"
          }
          fill="url(#diagonalGradient)"
        />
      </svg>
    </div>
  );
}
