import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import {
  ArrowUpRight,
  Bell,
  Code2,
  Flame,
  Home,
  LayoutGrid,
  Mail,
  Smartphone,
  User,
  Zap,
} from "lucide-react";

const BADGES = [
  { icon: Smartphone, label: "React Native", className: "-left-24 top-10", duration: 3.4, delay: 0 },
  { icon: Code2, label: "TypeScript", className: "-right-12 top-28", duration: 4.1, delay: 0.6 },
  { icon: Zap, label: "Expo", className: "-right-8 bottom-36", duration: 3.7, delay: 1.1 },
  { icon: Flame, label: "Firebase", className: "-left-14 bottom-16", duration: 4.5, delay: 0.3 },
];

/**
 * Floating 3D-tilted phone mockup rendering the portfolio as a mini
 * React Native app screen. Theme-aware (uses design tokens), mouse-parallax
 * tilt, floating glass tech badges. Desktop-only (xl+).
 */
const PhoneMockup = () => {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 110, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 110, damping: 18 });

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      ry.set(Math.max(-1, Math.min(1, dx)) * 12);
      rx.set(Math.max(-1, Math.min(1, dy)) * -9);
    };
    const onLeave = () => {
      rx.set(0);
      ry.set(0);
    };
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [reduceMotion, rx, ry]);

  return (
    <motion.div
      ref={wrapRef}
      variants={{
        hidden: { opacity: 0, y: 90, scale: 0.94 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const },
        },
      }}
      className="absolute right-0 top-1/2 hidden -translate-y-1/2 xl:block"
      style={{ perspective: 1200 }}
      aria-hidden="true"
    >
      {/* Ambient glow behind the phone */}
      <div className="absolute -inset-12 rounded-[4rem] bg-accent/10 blur-3xl" />

      {/* Floating glass tech badges */}
      {BADGES.map(({ icon: Icon, label, className, duration, delay }) => (
        <motion.div
          key={label}
          animate={{ y: [0, -9, 0] }}
          transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute z-10 flex items-center gap-2 rounded-full border border-hairline/15 bg-hairline/10 px-3.5 py-2 text-xs font-medium text-paper shadow-lg backdrop-blur-md ${className}`}
        >
          <Icon size={14} className="text-accent-text" />
          {label}
        </motion.div>
      ))}

      {/* Phone — 3D tilt follows the cursor */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Bezel */}
        <div className="h-[600px] w-[292px] rounded-[3rem] border border-hairline/20 bg-[#0b0b11] p-[10px] shadow-2xl shadow-black/40 ring-1 ring-white/5">
          {/* Screen — themed via tokens so it follows light/dark */}
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.5rem] bg-ink-2">
            {/* Dynamic island */}
            <div className="absolute left-1/2 top-2.5 h-5 w-20 -translate-x-1/2 rounded-full bg-black/90" />

            {/* Screen gloss */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08]" />

            {/* Mini status bar */}
            <div className="flex items-center justify-between px-7 pb-1 pt-4">
              <span className="text-[10px] font-semibold text-paper">9:41</span>
              <span className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-paper/70" />
                <span className="h-1 w-1 rounded-full bg-paper/70" />
                <span className="h-1.5 w-4 rounded-sm border border-paper/50" />
              </span>
            </div>

            {/* Mini app header */}
            <div className="mt-3 flex items-center gap-2.5 px-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent font-display text-[11px] font-bold text-accent-ink">
                SY
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[11px] font-semibold text-paper">
                  Shaurya Yadav
                </span>
                <span className="block text-[8px] uppercase tracking-widest text-muted">
                  Senior RN Developer
                </span>
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-full border border-hairline/15 text-muted">
                <Bell size={11} />
              </span>
            </div>

            {/* Mini hero */}
            <div className="mt-4 px-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline/10 bg-hairline/5 px-2 py-1 text-[7.5px] text-paper/80">
                <span className="ping-soft relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Available for work
              </span>
              <p className="mt-2 font-display text-[15px] font-semibold leading-tight text-paper">
                Building apps that{" "}
                <span className="text-accent-text italic">ship.</span>
              </p>
            </div>

            {/* Mini project cards */}
            <div className="mt-3 space-y-2 px-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 rounded-xl border border-hairline/10 bg-hairline/5 p-2"
                >
                  <span
                    className={`h-11 w-14 shrink-0 rounded-lg bg-gradient-to-br ${
                      i === 0
                        ? "from-accent/30 to-ai/25"
                        : "from-ai/30 to-accent/20"
                    }`}
                  />
                  <span className="min-w-0 flex-1 space-y-1.5">
                    <span className="block h-1.5 w-3/4 rounded-full bg-paper/60" />
                    <span className="block h-1.5 w-1/2 rounded-full bg-paper/25" />
                  </span>
                </div>
              ))}
            </div>

            {/* Mini stats */}
            <div className="mt-3 flex gap-2 px-4">
              {[
                { v: "5.8+", l: "Yrs" },
                { v: "10+", l: "Apps" },
                { v: "6+", l: "Stores" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="flex-1 rounded-lg border border-hairline/10 bg-hairline/5 px-2 py-1.5"
                >
                  <p className="font-display text-[11px] font-semibold text-accent-text">
                    {s.v}
                  </p>
                  <p className="text-[7px] uppercase tracking-wider text-muted">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>

            {/* Mini CTA */}
            <div className="mt-3 px-4">
              <div className="flex items-center justify-between rounded-xl bg-accent px-3 py-2.5">
                <span className="font-display text-[10px] font-bold uppercase tracking-wide text-accent-ink">
                  Let&apos;s Talk
                </span>
                <ArrowUpRight size={12} className="text-accent-ink" />
              </div>
            </div>

            {/* Mini tab bar */}
            <div className="mt-auto flex items-center justify-around border-t border-hairline/10 px-4 py-3.5">
              <Home size={14} className="text-accent-text" />
              <LayoutGrid size={14} className="text-muted" />
              <Mail size={14} className="text-muted" />
              <User size={14} className="text-muted" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhoneMockup;
