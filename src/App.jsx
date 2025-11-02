import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function ContactStrip() {
  return (
    <section className="relative w-full bg-black py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white">Have a brief?</h3>
            <p className="mt-2 text-white/70">We’ll turn it into scroll-stopping video content.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://calendly.com/flames-studio/intro-call"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-purple-500/40 bg-black/60 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-purple-500/10 transition"
            >
              Book a call
            </a>
            <a
              href="mailto:hello@flames.studio?subject=Share%20a%20brief"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/30 hover:brightness-110 transition"
            >
              Share your brief
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between px-6 py-6 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Flames Studio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="https://calendly.com/flames-studio/intro-call" target="_blank" rel="noreferrer" className="hover:text-white">Book a call</a>
          <a href="mailto:hello@flames.studio" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
