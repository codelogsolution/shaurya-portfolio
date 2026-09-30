import { animate } from "motion";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type PreloaderProps = {
  onComplete: () => void;
};

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.classList.add("intro-lock");

    const controls = animate(0, 100, {
      duration: 1.6,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => setCount(Math.round(value)),
      onComplete: () => {
        window.setTimeout(() => {
          document.body.classList.remove("intro-lock");
          onComplete();
        }, 300);
      },
    });

    return () => {
      controls.stop();
      document.body.classList.remove("intro-lock");
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-sm font-medium uppercase tracking-[0.35em] text-muted"
      >
        Shaurya Yadav
      </motion.p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-7xl font-semibold tabular-nums text-paper sm:text-8xl">
          {count}
        </span>
        <span className="font-display text-2xl font-medium text-accent">
          %
        </span>
      </div>

      <div className="mt-8 h-px w-48 overflow-hidden bg-white/10 sm:w-64">
        <div
          className="h-full bg-accent transition-[width] duration-100 ease-linear"
          style={{ width: `${count}%` }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;