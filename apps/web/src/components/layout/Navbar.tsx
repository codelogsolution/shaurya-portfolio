import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../../assets/favicon.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={handleNavClick}
        >
          <img
            src={Logo}
            alt="Shaurya Yadav"
            className="h-9 w-auto"
          />

          {/* <span className="hidden text-xl font-bold tracking-wide text-white sm:block">
            <span className="text-cyan-400">{"<"}</span>
             Shauryay
            <span className="text-cyan-400">{"/>"}</span>
          </span> */}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full border border-cyan-400 px-5 py-2 text-sm font-medium text-cyan-400 transition-all hover:bg-cyan-400 hover:text-slate-950"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-slate-200 md:hidden"
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="w-fit rounded-full border border-cyan-400 px-5 py-2 text-sm font-medium text-cyan-400"
              onClick={handleNavClick}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;