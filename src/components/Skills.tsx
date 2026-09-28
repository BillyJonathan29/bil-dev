import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { fadeUp, staggerContainer, staggerItem } from './ui/Animation';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32"
      style={{ borderTop: '1px solid var(--border)' }}
      aria-labelledby="skills-heading"
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
          05 / Skills
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map(group => (
            <motion.div key={group.category} variants={staggerItem}>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                id="skills-heading"
                style={{ color: 'var(--fg-subtle)', letterSpacing: '0.10em' }}
              >
                {group.category}
              </p>
              <ul className="space-y-2.5">
                {group.items.map(skill => (
                  <li
                    key={skill}
                    className="text-sm"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
