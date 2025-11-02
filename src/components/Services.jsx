import React from 'react';

const services = [
  {
    title: 'YouTube: Strategy → Series → Thumbnails',
    desc: 'End-to-end channel support: programming, scripting, production pipelines, and thumbnail systems that drive CTR.',
  },
  {
    title: 'AI Video Editing at Scale',
    desc: 'Hybrid human + AI workflow. Faster turnarounds, tighter cuts, smart captions, upscales, denoise, and style consistency.',
  },
  {
    title: 'Social-First Reels & Shorts',
    desc: 'Platform-native edits for TikTok, Reels, and Shorts with motion graphics and dynamic subtitles that boost retention.',
  },
  {
    title: 'Real Estate Edits',
    desc: 'Cinematic walkthroughs, aerial cutdowns, and neighborhood highlights tailored for listings and ads.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">What we do</h2>
          <p className="hidden max-w-xl text-sm text-white/60 md:block">
            Modular packages, clear pricing, and fast delivery. Built for creators, agents, founders, and teams.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-3 h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-400 to-cyan-400 opacity-80" />
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm text-emerald-300/90">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
