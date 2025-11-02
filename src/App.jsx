import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        {/* Contact strip */}
        <section id="contact" className="w-full bg-black py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-semibold">Let’s create your next hit.</h3>
                <p className="mt-1 text-sm text-white/70">Book a 15‑minute discovery call — zero fluff, clear outcomes.</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="mailto:hello@flames.studio?subject=Discovery%20Call"
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
                >
                  Email us
                </a>
                <a
                  href="#portfolio"
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:border-white/30 hover:bg-white/10"
                >
                  See selected work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-black/80 py-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Flames Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="mailto:hello@flames.studio" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
