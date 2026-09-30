import { ArrowUp } from "lucide-react";

import Marquee from "../ui/Marquee";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-hairline/10 bg-ink">
      {/* Giant outlined name marquee */}
      <div className="select-none py-10 sm:py-14" aria-hidden="true">
        <Marquee duration={42} gap="0rem">
          <span className="text-outline-faint mx-6 whitespace-nowrap font-display text-[clamp(4rem,12vw,10rem)] font-bold uppercase leading-none">
            Shaurya Yadav — Let's Connect —
          </span>
        </Marquee>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hairline/10 px-6 py-7 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} Shaurya Yadav. All rights reserved.
          </p>

          <p className="text-sm text-muted/70">
            Designed &amp; built with React + Motion
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-sm text-paper transition-colors hover:text-accent-text"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline/15 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;