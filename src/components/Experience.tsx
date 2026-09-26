import { motion } from 'framer-motion';
import { Briefcase, Building2, Users } from 'lucide-react';
import { experience } from '../data/portfolio';
import { SectionHeading, staggerContainer, staggerItem } from './ui/Animation';

const typeIcon: Record<string, React.ReactNode> = {
  Project: <Briefcase className="w-3.5 h-3.5" />,
  Organization: <Users className="w-3.5 h-3.5" />,
  Work: <Building2 className="w-3.5 h-3.5" />,
};

const typeColor: Record<string, string> = {
  Project: '#6366F1',
  Organization: '#10B981',
  Work: '#F59E0B',
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="My journey so far."
          description="Roles, projects, and contributions that have shaped my growth as a developer."
        />

        <div className="relative">
          {/* Vertical line — desktop */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'var(--border)' }}
            aria-hidden="true"
          />

          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {experience.map((item, index) => {
              const iconColor = typeColor[item.type] || '#6366F1';
              const icon = typeIcon[item.type] || <Briefcase className="w-3.5 h-3.5" />;

              return (
                <motion.div
                  key={index}
                  className="relative flex gap-0 md:gap-8"
                  variants={staggerItem}
                >
                  {/* Timeline node — desktop */}
                  <div className="hidden md:flex flex-col items-center relative w-16 flex-shrink-0">
                    <motion.div
                      className="w-4 h-4 rounded-full border-2 z-10 flex-shrink-0 mt-5"
                      style={{
                        background: item.current ? iconColor : 'var(--card)',
                        borderColor: iconColor,
                      }}
                      whileInView={{ scale: [0.5, 1.2, 1] }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    className="flex-1 p-6 rounded-2xl"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                    }}
                    whileHover={{
                      borderColor: iconColor + '40',
                      boxShadow: `0 8px 25px ${iconColor}12`,
                      y: -2,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {/* Type badge */}
                          <span
                            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium"
                            style={{
                              background: iconColor + '15',
                              color: iconColor,
                              border: `1px solid ${iconColor}25`,
                            }}
                          >
                            {icon}
                            {item.type}
                          </span>

                          {item.current && (
                            <span
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium"
                              style={{
                                background: 'rgba(16,185,129,0.1)',
                                color: '#10B981',
                                border: '1px solid rgba(16,185,129,0.2)',
                              }}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ background: '#10B981' }}
                              />
                              Current
                            </span>
                          )}
                        </div>

                        <h3
                          className="text-lg font-semibold"
                          style={{ color: 'var(--foreground)', letterSpacing: '-0.01em' }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>
                          {item.organization}
                        </p>
                      </div>

                      {/* Year */}
                      <span
                        className="text-sm font-medium flex-shrink-0"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: 'var(--muted)' }}
                    >
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors"
                          style={{
                            background: 'var(--surface)',
                            color: 'var(--muted)',
                            border: '1px solid var(--border)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
