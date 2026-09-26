const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()} Shaurya Yadav. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm text-cyan-400 transition-colors hover:text-cyan-300"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;