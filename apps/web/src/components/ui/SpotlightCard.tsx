import { useRef, type MouseEvent, type ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

/** Card with a cursor-tracked radial spotlight (CSS var driven). */
const SpotlightCard = ({ children, className = "" }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    element.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;