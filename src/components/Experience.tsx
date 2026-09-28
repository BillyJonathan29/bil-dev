import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { fadeUp, staggerContainer, staggerItem } from './ui/Animation';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32"
      style={{ borderTop: '1px solid var(--border)' }}
      aria-labelledby="experience-heading"
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
          03 / Experience
        </motion.p>

        <motion.div
          className="space-y-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
            >
              <div className="divider" />

              <div className="py-8 sm:py-10">
                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:gap-12">
                  {/* Left — period */}
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{ color: 'var(--fg-subtle)', letterSpacing: '0.08em' }}
                    >
                      {item.period}
                    </p>
                    <p
                      className="text-xs mt-1 capitalize"
                      style={{ color: 'var(--fg-subtle)' }}
                    >
                      {item.type}
                    </p>
                  </div>

                  {/* Right — content */}
                  <div>
                    <h3
                      className="font-bold mb-0.5 uppercase"
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--fg)',
                        letterSpacing: '0.02em',
                      }}
                      id="experience-heading"
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm mb-5"
                      style={{ color: 'var(--brown)' }}
                    >
                      {item.company}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-5">
                      {item.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed flex items-start gap-3"
                          style={{ color: 'var(--fg-muted)', lineHeight: 1.7 }}
                        >
                          <span
                            className="flex-shrink-0 mt-2 w-1 h-1 rounded-full"
                            style={{ background: 'var(--fg-subtle)' }}
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <p className="text-xs" style={{ color: 'var(--fg-subtle)' }}>
                      {item.technologies.join(' · ')}
                    </p>
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
