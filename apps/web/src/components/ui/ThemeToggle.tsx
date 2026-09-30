import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../hooks/useTheme";

/** Animated dark/light toggle. Persists choice + updates theme-color meta. */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      aria-pressed={theme === "light"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline/10 text-paper transition-colors duration-200 hover:border-accent/60 hover:text-accent-text"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="flex"
        >
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;