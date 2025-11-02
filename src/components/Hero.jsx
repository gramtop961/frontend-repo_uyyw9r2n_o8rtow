import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability - doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Interactive. Minimal. Futuristic.
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Content that moves fast and looks cinematic.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
          We’re a video-first studio powering creators and brands — from YouTube strategy
          to AI-accelerated editing and platform-native social cuts, including premium
          real estate walkthroughs and property promos.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@flames.studio?subject=Let’s%20Build%20Your%20Content"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Start a project
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
          >
            View work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
