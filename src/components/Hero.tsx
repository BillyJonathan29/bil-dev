import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { staggerContainer, staggerItem } from './ui/Animation';
import { personalInfo } from '../data/portfolio';

// Animated subtle grid background
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Grid lines */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Large gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Top-right glow */}
      <div
        className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(192,132,252,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Animated floating orb */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)' }}
        animate={{
          x: [0, 20, 0, -20, 0],
          y: [0, -30, -10, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

// Social icon button
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        color: 'var(--muted)',
      }}
      whileHover={{
        scale: 1.08,
        borderColor: 'var(--accent)',
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}

export default function Hero() {
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16"
      aria-label="Introduction"
    >
      <GridBackground />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div variants={staggerItem} className="mb-8">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border"
              style={{
                background: 'var(--accent-light)',
                borderColor: 'rgba(99,102,241,0.2)',
                color: 'var(--accent)',
              }}
            >
              <span className="relative flex w-2 h-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: 'var(--accent)' }}
                />
                <span
                  className="relative inline-flex rounded-full w-2 h-2"
                  style={{ background: 'var(--accent)' }}
                />
              </span>
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={staggerItem} className="mb-6">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              style={{ color: 'var(--foreground)', letterSpacing: '-0.03em' }}
            >
              <span>Hi, I'm </span>
              <span style={{ color: 'var(--accent)' }}>
                {personalInfo.firstName}
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-3 font-semibold"
                style={{ color: 'var(--foreground)', letterSpacing: '-0.025em' }}>
                {personalInfo.role}
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: 'var(--muted)' }}
          >
            {personalInfo.tagline}
            <span className="block mt-1">{personalInfo.bio.split('.')[0]}.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-3 mb-12">
            <motion.button
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2"
              style={{ background: 'var(--accent)', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
              whileHover={{ scale: 1.02, opacity: 0.92 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
              }}
              whileHover={{ scale: 1.02, borderColor: 'var(--accent)' }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={staggerItem} className="flex items-center gap-3">
            <SocialLink
              href={personalInfo.github}
              label="GitHub"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              }
            />
            <SocialLink
              href={personalInfo.linkedin}
              label="LinkedIn"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
            />
            <SocialLink
              href={personalInfo.instagram}
              label="Instagram"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              }
            />
            <span className="w-px h-5 mx-1" style={{ background: 'var(--border)' }} />
            <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
              {personalInfo.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Scroll</span>
          <motion.div
            className="w-px h-8"
            style={{ background: 'linear-gradient(to bottom, var(--border), transparent)' }}
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
