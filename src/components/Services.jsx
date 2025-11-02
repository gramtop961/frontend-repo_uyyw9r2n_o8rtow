import { motion } from 'framer-motion';
import { Video, Wand2, Share2, Building2 } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'YouTube Content Creation',
    desc: 'Strategy, scripting, production, and performance-driven optimization for consistent growth.',
  },
  {
    icon: Wand2,
    title: 'AI Video Editing',
    desc: 'Accelerated workflows with AI-assisted cuts, sound design, captions, and versioning.',
  },
  {
    icon: Share2,
    title: 'Social Media Edits',
    desc: 'Vertical reels and shorts designed to hook attention and retain viewers across platforms.',
  },
  {
    icon: Building2,
    title: 'Real Estate Edits',
    desc: 'Cinematic walkthroughs and aerial edits that showcase properties with clarity and emotion.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Services
        </motion.h2>
        <p className="mt-3 max-w-2xl text-white/70">
          End-to-end support from idea to publish, tuned for performance and brand consistency.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-600/10 to-fuchsia-500/10" />
              <div className="relative">
                <div className="inline-flex items-center justify-center rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <s.icon className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
