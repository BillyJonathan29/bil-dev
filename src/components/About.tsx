import { motion } from 'framer-motion';
import { Code2, Rocket, Palette, MapPin } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolio';
import { SectionHeading, AnimatedSection, staggerContainer, staggerItem } from './ui/Animation';

const highlights = [
  {
    icon: <Code2 className="w-4 h-4" />,
    label: 'Clean Code',
    description: 'Terstruktur & maintainable',
  },
  {
    icon: <Rocket className="w-4 h-4" />,
    label: 'Performance',
    description: 'Cepat & optimal',
  },
  {
    icon: <Palette className="w-4 h-4" />,
    label: 'Great UX',
    description: 'User-centric design',
  },
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      className="p-5 rounded-2xl"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
      }}
      variants={staggerItem}
      whileHover={{
        scale: 1.02,
        borderColor: 'var(--accent)',
        boxShadow: '0 8px 20px rgba(99,102,241,0.08)',
      }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="text-2xl font-bold mb-1 tracking-tight"
        style={{ color: 'var(--accent)', letterSpacing: '-0.02em' }}
      >
        {value}
      </div>
      <div className="text-xs font-medium" style={{ color: 'var(--muted)' }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Building things that matter."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <AnimatedSection>
            <div className="space-y-6">
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--muted)' }}
              >
                {personalInfo.bio}
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--muted)' }}
              >
                {personalInfo.bioExtended}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="p-3 rounded-xl text-center"
                    style={{
                      background: 'var(--accent-light)',
                      border: '1px solid rgba(99,102,241,0.15)',
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-lg mx-auto mb-2"
                      style={{ background: 'var(--accent)', color: '#fff' }}
                    >
                      {h.icon}
                    </div>
                    <div
                      className="text-xs font-semibold mb-0.5"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {h.label}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--muted)' }}>
                      {h.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Location tag */}
              <div className="flex items-center gap-2 pt-2">
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                <span className="text-sm" style={{ color: 'var(--muted)' }}>
                  Based in {personalInfo.location} — Available for remote & on-site
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Stats grid */}
          <AnimatedSection delay={0.15}>
            <div>
              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 gap-3 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {stats.map((stat) => (
                  <StatCard key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </motion.div>

              {/* Bio card */}
              <div
                className="p-6 rounded-2xl relative overflow-hidden"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* Accent corner */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-[80px]"
                  style={{ background: 'var(--accent-light)' }}
                  aria-hidden="true"
                />

                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 font-bold text-lg"
                    style={{ background: 'var(--accent)', color: '#fff' }}
                  >
                    {personalInfo.firstName.charAt(0)}
                  </div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {personalInfo.firstName}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                    {personalInfo.role}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Web Development', 'Frontend', 'Backend'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium"
                        style={{
                          background: 'var(--surface)',
                          color: 'var(--muted)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
