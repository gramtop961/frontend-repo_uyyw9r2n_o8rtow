import React from 'react';

const items = [
  {
    tag: 'YouTube Series',
    title: 'Founder Diaries: 12-episode docu-series',
    color: 'from-sky-500/20 to-cyan-400/10',
  },
  {
    tag: 'AI Edit',
    title: 'Long-form → 12 shorts in 24h',
    color: 'from-fuchsia-500/20 to-violet-400/10',
  },
  {
    tag: 'Social Reels',
    title: 'Kinetic captions + motion graphics pack',
    color: 'from-emerald-500/20 to-teal-400/10',
  },
  {
    tag: 'Real Estate',
    title: 'Luxury property walkthrough + aerial',
    color: 'from-amber-500/20 to-orange-400/10',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">Selected work</h2>
          <a
            href="mailto:hello@flames.studio?subject=Portfolio%20Request"
            className="text-sm text-white/60 hover:text-white"
          >
            Request full portfolio →
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${item.color}`}
            >
              <div className="p-6">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                  {item.tag}
                </span>
                <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">Hover to preview motion texture.</p>
              </div>
              {/* Motion texture */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),rgba(255,255,255,0)_60%)] blur-2xl transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-4" />
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6">
          <div>
            <h4 className="text-lg font-medium">Need something specific?</h4>
            <p className="text-sm text-white/70">Send references and goals — we’ll reply with a tailored plan and quote.</p>
          </div>
          <a
            href="mailto:hello@flames.studio?subject=Custom%20Brief"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
          >
            Share brief
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
