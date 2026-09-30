import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import ThemeToggle from "../ui/ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const mobileItems = [
  { label: "Home", href: "#home" },
  ...navItems,
  { label: "Contact", href: "#contact" },
];

const sectionIds = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const frame = useRef(0);

  // rAF-throttled scroll spy
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const triggerPoint = window.innerHeight * 0.3;
      let next = "#home";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= triggerPoint) {
          next = `#${section.id}`;
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        next = "#contact";
      }

      setActiveSection((previous) => (previous === next ? previous : next));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-[110] flex justify-center px-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto relative z-10 flex w-full max-w-3xl items-center justify-between rounded-full border border-hairline/10 bg-ink/70 py-2.5 pl-5 pr-2.5 backdrop-blur-xl"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2.5"
        >
          <img
            src="/favicon.png"
            alt="Shaurya Yadav logo"
            className="h-10 w-12 rounded-full"
          />
          {/* <span className="font-display text-sm font-semibold tracking-wide text-paper">
            Shaurya<span className="text-accent">.</span>
          </span> */}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                  isActive ? "text-accent-ink" : "text-muted hover:text-paper"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Theme toggle (desktop) */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={() => handleNavClick("#contact")}
          className={`hidden rounded-full px-4 py-2 text-sm transition-colors md:block ${
            activeSection === "#contact"
              ? "bg-accent text-accent-ink"
              : "border border-hairline/15 text-paper hover:border-accent/60 hover:text-accent-text"
          }`}
        >
          Let's Talk
        </a>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline/10 text-paper"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto fixed inset-0 z-0 flex flex-col justify-center bg-ink/95 px-8 backdrop-blur-xl md:hidden"
          >
            <motion.div
              className="flex flex-col"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.1 },
                },
                closed: {
                  transition: { staggerChildren: 0.03, staggerDirection: -1 },
                },
              }}
            >
              {mobileItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 24 },
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex items-baseline gap-4 border-b border-hairline/5 py-4 ${
                    activeSection === item.href ? "text-accent-text" : "text-paper"
                  }`}
                >
                  <span className="font-display text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-4xl font-semibold">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;