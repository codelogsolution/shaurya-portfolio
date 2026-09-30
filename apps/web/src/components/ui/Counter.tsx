import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

type CounterProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

/** Animated number counter, triggered when scrolled into view. */
const Counter = ({
  to,
  suffix = "",
  prefix = "",
  duration = 1.6,
  className,
}: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;

    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        if (ref.current) {
          const display =
            to % 1 !== 0 ? value.toFixed(1) : Math.round(value).toString();
          ref.current.textContent = `${prefix}${display}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [inView, to, suffix, prefix, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
};

export default Counter;