import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";

const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#07070b" : "#f4f3ec");
};

/**
 * Theme controller. The initial value is resolved before React mounts
 * by the inline script in index.html (stored choice → system preference),
 * so this hook simply reads the attribute that script set.
 */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* private mode — theme still applies for this session */
      }
      applyTheme(next);
      return next;
    });
  }, []);

  // Follow system preference until the user makes an explicit choice.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");

    const onChange = (event: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
      if (stored) return;

      const next: Theme = event.matches ? "light" : "dark";
      setTheme(next);
      applyTheme(next);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return { theme, toggleTheme };
};