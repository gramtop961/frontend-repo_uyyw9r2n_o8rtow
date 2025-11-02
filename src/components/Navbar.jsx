import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-bold">F</span>
          <span className="text-sm tracking-widest text-white/80">FLAMES.STUDIO</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="mailto:hello@flames.studio" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="mailto:hello@flames.studio?subject=Project%20Inquiry"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
        >
          Start a project
        </a>
      </div>
    </header>
  );
};

export default Navbar;
