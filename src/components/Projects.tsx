import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { fadeUp, staggerContainer, staggerItem } from './ui/Animation';

// Arrow icon
function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectRow({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Divider top */}
      <div className="divider" />

      <div
        className="py-8 sm:py-10 transition-colors duration-200"
        style={{ background: hovered ? 'var(--brown-faint)' : 'transparent' }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
          {/* Number */}
          <span
            className="label-section flex-shrink-0 pt-1 hidden sm:block"
            style={{ width: '28px' }}
          >
            {project.number}
          </span>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-8 mb-4">
              <div>
                <h3
                  className="font-bold leading-tight mb-1"
                  style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    color: 'var(--fg)',
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {project.subtitle}
                </p>
              </div>

              {/* Year + context */}
              <div className="flex-shrink-0 text-right hidden sm:block">
                <p className="text-xs" style={{ color: 'var(--fg-subtle)' }}>
                  {project.context}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--fg-subtle)' }}>
                  {project.year}
                </p>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--fg-muted)', maxWidth: '56ch', lineHeight: 1.75 }}
            >
              {project.description}
            </p>

            {/* Tech stack */}
            <p
              className="text-xs mb-5"
              style={{ color: 'var(--fg-subtle)' }}
            >
              {project.technologies.join(' · ')}
            </p>

            {/* Context mobile */}
            <p className="text-xs mb-5 sm:hidden" style={{ color: 'var(--fg-subtle)' }}>
              {project.context} · {project.year}
            </p>

            {/* Links */}
            <div className="flex items-center gap-5">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="arrow-link"
                >
                  View Project
                  <motion.span animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
                    <ArrowRight />
                  </motion.span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="arrow-link"
                >
                  GitHub
                  <motion.span animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
                    <ArrowRight />
                  </motion.span>
                </a>
              )}
              {!project.demo && !project.github && (
                <span className="text-xs" style={{ color: 'var(--fg-subtle)' }}>
                  Private / In Progress
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="py-24 sm:py-32"
      style={{ borderTop: '1px solid var(--border)' }}
      aria-labelledby="work-heading"
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
          02 / Selected Work
        </motion.p>

        {/* Project list */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map(project => (
            <ProjectRow key={project.id} project={project} />
          ))}
          {/* Last divider */}
          <div className="divider" />
        </motion.div>
      </div>
    </section>
  );
}
