import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: 'mailto:hello@flames.studio?subject=Start%20a%20project', label: 'Start a project' },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto mt-4 max-w-6xl rounded-full border border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/50 px-4 py-3"
      >
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-500">
              <Rocket className="h-4 w-4 text-white" />
            </span>
            <span className="font-semibold tracking-tight">Flames Studio</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.slice(0, 2).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm text-white/80 hover:text-white transition"
              >
                {l.label}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={links[2].href}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/20 hover:brightness-110 transition"
            >
              {links[2].label}
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/90"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-3 grid gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
