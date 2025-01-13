import React from "react";

const Footer = () => {
  return (
    <footer className="relative -z-5 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-black/20 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div>
            <span className="font-semibold">&copy; 2024. </span>All rights
            reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-2">
            <a
              href="https://github.com/taufiqfharhan/glassmorphism-portfolio-nextjs"
              className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold">GlassMorphism Portfolio</span>
            </a>
            <span>by</span>
            <a
              href="https://www.taufiqfharhan.com"
              className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold">Taufiq Fharhan</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
