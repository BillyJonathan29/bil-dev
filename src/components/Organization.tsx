import { motion } from 'framer-motion';
import { Users, CheckCircle } from 'lucide-react';
import { organizations } from '../data/portfolio';
import { SectionHeading, staggerContainer, staggerItem } from './ui/Animation';

export default function Organization() {
  return (
    <section
      id="organization"
      className="py-24 sm:py-32"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      aria-labelledby="organization-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Organization"
          title="Leadership & community."
          description="Contributions beyond code — building communities and leading people."
        />

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {organizations.map((org, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-3xl"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
              }}
              variants={staggerItem}
              whileHover={{ y: -2, boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Icon + Meta */}
                <div className="flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: 'var(--accent)', boxShadow: '0 4px 15px rgba(99,102,241,0.25)' }}
                  >
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1.5">
                    <span
                      className="block text-xs font-medium uppercase tracking-widest"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {org.type}
                    </span>
                    <span
                      className="block text-xs"
                      style={{
                        color: 'var(--accent)',
                        background: 'var(--accent-light)',
                        border: '1px solid rgba(99,102,241,0.15)',
                        padding: '2px 10px',
                        borderRadius: '20px',
                        display: 'inline-flex',
                      }}
                    >
                      {org.period}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: 'var(--foreground)', letterSpacing: '-0.01em' }}
                  >
                    {org.role}
                  </h3>
                  <p
                    className="text-base font-medium mb-5"
                    style={{ color: 'var(--accent)' }}
                  >
                    {org.organization}
                  </p>

                  {/* Responsibilities */}
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-3"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      Responsibilities
                    </p>
                    <ul className="space-y-2.5">
                      {org.responsibilities.map((r, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: 'var(--muted)' }}
                        >
                          <CheckCircle
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: 'var(--accent)' }}
                            aria-hidden="true"
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills used */}
                  <div className="flex flex-wrap gap-2 mt-5 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                    {org.technologies.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium"
                        style={{
                          background: 'var(--surface)',
                          color: 'var(--muted)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
