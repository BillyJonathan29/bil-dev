import { motion } from 'framer-motion';
import { Trophy, Medal, Users } from 'lucide-react';
import { achievements } from '../data/portfolio';
import { SectionHeading, AnimatedSection, staggerContainer, staggerItem } from './ui/Animation';

export default function Achievements() {
  const featured = achievements.filter(a => a.featured);
  const others = achievements.filter(a => !a.featured);

  return (
    <section
      id="achievements"
      className="py-24 sm:py-32"
      aria-labelledby="achievements-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Achievements"
          title="Milestones & recognition."
          description="Competitions and challenges that pushed me beyond my comfort zone."
        />

        {/* Featured achievement */}
        {featured.map((item, idx) => (
          <AnimatedSection key={idx} className="mb-10">
            <motion.div
              className="relative rounded-3xl overflow-hidden p-8 sm:p-12"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.06) 100%)',
                border: '1px solid rgba(99,102,241,0.2)',
              }}
              whileHover={{ boxShadow: '0 20px 60px rgba(99,102,241,0.12)' }}
            >
              {/* Background decoration */}
              <div
                className="absolute top-0 right-0 text-[200px] font-black leading-none select-none pointer-events-none opacity-[0.03]"
                aria-hidden="true"
                style={{ color: 'var(--accent)', lineHeight: 0.85 }}
              >
                {item.number}
              </div>

              {/* Trophy icon */}
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'var(--accent)', boxShadow: '0 4px 20px rgba(99,102,241,0.3)' }}
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Trophy className="w-7 h-7 text-white" />
              </motion.div>

              <div className="relative">
                {/* Rank */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-bold"
                  style={{
                    background: 'rgba(255,215,0,0.12)',
                    color: '#D97706',
                    border: '1px solid rgba(255,215,0,0.25)',
                  }}
                >
                  🏆 {item.rank}
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight"
                  style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}
                >
                  {item.competition}
                </h3>

                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                    style={{
                      background: 'var(--accent-light)',
                      color: 'var(--accent)',
                      border: '1px solid rgba(99,102,241,0.2)',
                    }}
                  >
                    {item.category}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>
                    {item.year}
                  </span>
                  {item.team && (
                    <span
                      className="inline-flex items-center gap-1 text-xs"
                      style={{ color: 'var(--muted)' }}
                    >
                      <Users className="w-3.5 h-3.5" />
                      Team Achievement
                    </span>
                  )}
                </div>

                <p
                  className="text-base leading-relaxed max-w-2xl"
                  style={{ color: 'var(--muted)' }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}

        {/* Other achievements */}
        {others.length > 0 && (
          <AnimatedSection delay={0.1}>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {others.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                  }}
                  variants={staggerItem}
                  whileHover={{ y: -2, borderColor: 'var(--accent)', boxShadow: '0 8px 25px rgba(99,102,241,0.08)' }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--accent-light)' }}
                    >
                      <Medal className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-xs font-semibold mb-1"
                        style={{ color: 'var(--accent)' }}
                      >
                        {item.rank}
                      </div>
                      <h3
                        className="font-bold mb-1 text-sm sm:text-base"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {item.competition}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                          {item.year}
                        </span>
                        {item.team && (
                          <span className="inline-flex items-center gap-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                            · <Users className="w-3 h-3" /> Team
                          </span>
                        )}
                      </div>
                      <p className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--muted)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
