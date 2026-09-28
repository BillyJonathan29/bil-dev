import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { fadeUp, staggerContainer, staggerItem } from './ui/Animation';

function scrollTo(href: string) {
  document.getElementById(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center"
      style={{ paddingTop: '56px' }}
      aria-label="Introduction"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <div className="py-24 sm:py-32 lg:py-40">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Role — small label */}
            <motion.p
              variants={staggerItem}
              className="label-section mb-8"
            >
              {personalInfo.role}
            </motion.p>

            {/* Name — large editorial */}
            <motion.h1
              variants={staggerItem}
              className="mb-8 font-bold leading-none tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                color: 'var(--fg)',
                letterSpacing: '-0.03em',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {personalInfo.firstName}
              <br />
              <span style={{ color: 'var(--fg-muted)' }}>{personalInfo.lastName}</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={staggerItem}
              className="max-w-md text-base leading-relaxed mb-12"
              style={{ color: 'var(--fg-muted)', lineHeight: 1.75 }}
            >
              I build web applications and digital experiences
              with a focus on clean interfaces and functional systems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-6 mb-16"
            >
              <button
                onClick={() => scrollTo('work')}
                className="text-sm font-semibold transition-colors"
                style={{ color: 'var(--fg)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--brown)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg)'; }}
              >
                View My Work →
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="text-sm font-medium transition-colors"
                style={{ color: 'var(--fg-muted)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-muted)'; }}
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Meta info */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-6"
              style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)' }}
            >
              <span className="text-xs" style={{ color: 'var(--fg-subtle)' }}>
                Based in {personalInfo.location}
              </span>
              <span className="text-xs" style={{ color: 'var(--border)' }}>—</span>
              <span className="text-xs" style={{ color: 'var(--fg-subtle)' }}>
                Software Development · Web · Technology
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
