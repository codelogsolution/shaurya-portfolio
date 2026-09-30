import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Custom cursor: lime dot + trailing ring that expands over
 * interactive elements. Desktop (fine pointer) only.
 */
const CursorGlow = () => {
  const [enabled] = useState(
    () => window.matchMedia("(pointer: fine)").matches,
  );
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setActive(
        Boolean(
          target?.closest("a, button, [role='button'], input, textarea"),
        ),
      );
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y, enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="cursor-dot"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden="true"
        className={`cursor-ring ${active ? "cursor-ring--active" : ""}`}
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
};

export default CursorGlow;