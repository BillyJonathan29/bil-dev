import { motion } from 'framer-motion';
import bilPhoto from '../assets/img/bil.png';
import { personalInfo } from '../data/portfolio';
import { fadeUp, staggerContainer, staggerItem } from './ui/Animation';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32"
      style={{ borderTop: '1px solid var(--border)' }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section label */}
        <motion.p
          className="label-section mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          01 / About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.h2
              variants={staggerItem}
              className="font-bold mb-8 leading-tight"
              id="about-heading"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--fg)',
                letterSpacing: '-0.02em',
              }}
            >
              A developer interested in building
              useful digital products.
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-base leading-relaxed mb-5"
              style={{ color: 'var(--fg-muted)', lineHeight: 1.8 }}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-base leading-relaxed mb-10"
              style={{ color: 'var(--fg-muted)', lineHeight: 1.8 }}
            >
              {personalInfo.bioExtended}
            </motion.p>

            {/* Meta */}
            <motion.div variants={staggerItem} className="flex flex-col gap-6">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: 'var(--fg-subtle)' }}
                >
                  Location
                </p>
                <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>
                  {personalInfo.location}
                </p>
              </div>

              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: 'var(--fg-subtle)' }}
                >
                  Focus
                </p>
                <ul className="space-y-1.5">
                  {personalInfo.focus.map(f => (
                    <li
                      key={f}
                      className="text-sm"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:sticky lg:top-24"
          >
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: '4 / 5',
                maxWidth: '380px',
                background: 'var(--brown-faint)',
              }}
            >
              <img
                src={bilPhoto}
                alt="Billy Jonathan"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Name caption below photo */}
            <div className="mt-4 flex items-start justify-between">
              <div>
                <p
                  className="text-xs font-semibold"
                  style={{ color: 'var(--fg)' }}
                >
                  {personalInfo.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--fg-subtle)' }}>
                  {personalInfo.role}
                </p>
              </div>
              <p className="text-xs" style={{ color: 'var(--fg-subtle)' }}>
                {new Date().getFullYear()}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
