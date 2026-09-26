import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolio';
import { SectionHeading, staggerContainer, staggerItem } from './ui/Animation';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 sm:py-32"
      aria-labelledby="education-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Education"
          title="Academic background."
        />

        <motion.div
          className="space-y-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-5 p-6 rounded-2xl"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
              }}
              variants={staggerItem}
              whileHover={{ y: -2, borderColor: 'var(--accent)', boxShadow: '0 8px 25px rgba(99,102,241,0.07)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'var(--accent-light)', border: '1px solid rgba(99,102,241,0.15)' }}
              >
                <GraduationCap className="w-5 h-5" style={{ color: 'var(--accent)' }} />
              </div>

              <div className="flex-1">
                <h3
                  className="font-bold text-lg mb-0.5"
                  style={{ color: 'var(--foreground)', letterSpacing: '-0.01em' }}
                >
                  {edu.institution}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent)' }}>
                  {edu.degree} — {edu.program}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--muted)' }}>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
