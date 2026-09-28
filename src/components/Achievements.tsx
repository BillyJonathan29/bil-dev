import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio';
import { fadeUp, staggerContainer, staggerItem } from './ui/Animation';

// Arrow icon
function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 sm:py-32"
      style={{ borderTop: '1px solid var(--border)' }}
      aria-labelledby="achievements-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.p
          className="label-section mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          04 / Achievements
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {achievements.map((item, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              <div className="divider" />

              <div
                className="py-10 sm:py-12"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-6 sm:gap-12">
                  {/* Number — large */}
                  <div
                    className="font-bold leading-none"
                    style={{
                      fontSize: 'clamp(3rem, 6vw, 5rem)',
                      color: 'var(--border)',
                      letterSpacing: '-0.04em',
                      fontFamily: 'var(--font-sans)',
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    {item.number}
                  </div>

                  {/* Content */}
                  <div>
                    {/* Rank */}
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-3"
                      style={{ color: 'var(--brown)' }}
                    >
                      {item.rank}
                    </p>

                    {/* Competition */}
                    <h3
                      className="font-bold leading-tight mb-1 uppercase"
                      id="achievements-heading"
                      style={{
                        fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                        color: 'var(--fg)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.competition}
                    </h3>
                    <p
                      className="text-sm mb-1"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      {item.organizer}
                    </p>
                    <p
                      className="text-xs mb-5"
                      style={{ color: 'var(--fg-subtle)' }}
                    >
                      {item.year}
                    </p>

                    {/* Featured project */}
                    {item.project && (
                      <div
                        className="py-4 px-5 mb-4"
                        style={{
                          borderLeft: '2px solid var(--brown)',
                          background: 'var(--brown-faint)',
                        }}
                      >
                        <p
                          className="text-xs font-semibold uppercase tracking-widest mb-1"
                          style={{ color: 'var(--brown)' }}
                        >
                          Project
                        </p>
                        <p
                          className="font-semibold mb-2"
                          style={{ color: 'var(--fg)', fontSize: '0.95rem' }}
                        >
                          {item.project}
                        </p>
                        <p
                          className="text-sm leading-relaxed mb-3"
                          style={{ color: 'var(--fg-muted)', lineHeight: 1.7 }}
                        >
                          {item.projectDescription}
                        </p>
                        {item.technologies.length > 0 && (
                          <p className="text-xs" style={{ color: 'var(--fg-subtle)' }}>
                            {item.technologies.join(' · ')}
                          </p>
                        )}
                      </div>
                    )}

                    {!item.project && item.projectDescription && (
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--fg-muted)', lineHeight: 1.7 }}
                      >
                        {item.projectDescription}
                      </p>
                    )}

                    {/* Links */}
                    {item.github && (
                      <div className="mt-4 flex items-center gap-4">
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noreferrer"
                          className="arrow-link"
                        >
                          GitHub <ArrowRight />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="divider" />
        </motion.div>
      </div>
    </section>
  );
}
