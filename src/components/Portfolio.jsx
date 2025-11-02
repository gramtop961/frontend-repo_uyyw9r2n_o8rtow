import { motion } from 'framer-motion';

const work = [
  { title: 'YouTube Series', tag: 'Long-form' },
  { title: 'AI Edit Showcase', tag: 'AI workflow' },
  { title: 'Social Reels Pack', tag: 'Shorts / Reels' },
  { title: 'Real Estate Tour', tag: 'Property' },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative w-full bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Selected work</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              A snapshot of recent projects. Ask for the full case study list.
            </p>
          </div>
          <a
            href="mailto:hello@flames.studio?subject=Request%20full%20portfolio"
            className="inline-flex items-center justify-center rounded-full border border-purple-500/40 bg-black px-4 py-2 text-sm font-medium text-white hover:bg-purple-500/10 transition"
          >
            Request full portfolio
          </a>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {work.map((w, idx) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent"
            >
              {/* simulated thumbnail */}
              <div className="aspect-video w-full bg-[linear-gradient(120deg,rgba(168,85,247,0.2),transparent_30%,rgba(217,70,239,0.2))]">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.2),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(217,70,239,0.18),transparent_30%)]" />
              </div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">{w.title}</h3>
                    <p className="text-sm text-white/70">{w.tag}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-purple-300">View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
