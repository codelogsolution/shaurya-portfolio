import type { CSSProperties, ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  gap?: string;
  className?: string;
};

/** Infinite horizontal marquee (pure CSS, pauses on hover). */
const Marquee = ({
  children,
  reverse = false,
  duration = 36,
  gap = "3rem",
  className = "",
}: MarqueeProps) => {
  const style = {
    "--marquee-duration": `${duration}s`,
    "--marquee-gap": gap,
  } as CSSProperties;

  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""} ${className}`}
      style={style}
    >
      <div className="marquee__track">{children}</div>
      <div className="marquee__track" aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

export default Marquee;