import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay - ensure it doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.2),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-36 pb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
            Video-first creative studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Create impact with
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent"> cinematic video</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg"
          >
            We craft YouTube content, AI-powered edits, social-first reels, and premium real estate visuals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="mailto:hello@flames.studio?subject=Start%20a%20project"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/30 hover:brightness-110 transition"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/60 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/5 transition"
            >
              See our work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
