import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { fadeUp, staggerContainer, staggerItem } from './ui/Animation';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 sm:py-32"
      style={{ borderTop: '1px solid var(--border)' }}
      aria-labelledby="education-heading"
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
          06 / Education
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              <div className="divider" />
              <div className="py-8 sm:py-10">
                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:gap-12">
                  {/* Period */}
                  <p
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: 'var(--fg-subtle)', letterSpacing: '0.08em', paddingTop: '3px' }}
                  >
                    {edu.year}
                  </p>

                  {/* Content */}
                  <div>
                    <h3
                      className="font-bold mb-1"
                      id="education-heading"
                      style={{
                        fontSize: '1.05rem',
                        color: 'var(--fg)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {edu.institution}
                    </h3>
                    <p
                      className="text-sm font-medium mb-0.5"
                      style={{ color: 'var(--brown)' }}
                    >
                      {edu.program}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: 'var(--fg-subtle)' }}
                    >
                      {edu.faculty} · {edu.location}
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
