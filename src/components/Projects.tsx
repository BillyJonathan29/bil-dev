import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Star } from 'lucide-react';
import { projects } from '../data/portfolio';
import { SectionHeading, AnimatedSection, staggerContainer, staggerItem } from './ui/Animation';

// GitHub icon SVG inline
function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, { bg: string; text: string; dot: string }> = {
    Live: { bg: 'rgba(16,185,129,0.1)', text: '#10B981', dot: '#10B981' },
    Completed: { bg: 'rgba(99,102,241,0.1)', text: '#6366F1', dot: '#6366F1' },
    'In Progress': { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B', dot: '#F59E0B' },
  };
  const c = colors[status] || colors['Completed'];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
      style={{ background: c.bg, color: c.text, border: `1px solid ${c.dot}30` }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.dot }} />
      {status}
    </span>
  );
}

// Featured large card
function FeaturedProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      className="rounded-3xl overflow-hidden group relative"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
      }}
      whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(99,102,241,0.12)' }}
      transition={{ duration: 0.25 }}
    >
      {/* Image / preview area */}
      <div
        className="relative h-64 sm:h-80 overflow-hidden flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, var(--surface) 0%, var(--accent-light) 100%)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3">
            <FolderGit2
              className="w-16 h-16 transition-transform duration-500 group-hover:scale-110"
              style={{ color: 'var(--accent)' }}
              aria-hidden="true"
            />
            <span className="text-sm font-medium" style={{ color: 'var(--muted)' }}>
              {project.title}
            </span>
          </div>
        )}

        {/* Featured badge */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            <Star className="w-3 h-3 fill-white" />
            Featured
          </span>
        </div>

        <div className="absolute top-4 right-4">
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className="text-xl sm:text-2xl font-bold tracking-tight"
            style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}
          >
            {project.title}
          </h3>
        </div>

        <p
          className="text-sm sm:text-base leading-relaxed mb-6"
          style={{ color: 'var(--muted)' }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg text-xs font-medium"
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

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white focus-visible:outline-none"
              style={{ background: 'var(--accent)' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium focus-visible:outline-none"
              style={{
                background: 'var(--surface)',
                color: 'var(--muted)',
                border: '1px solid var(--border)',
              }}
              whileHover={{ scale: 1.03, color: 'var(--foreground)' }}
              whileTap={{ scale: 0.97 }}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Regular project card
function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      className="flex flex-col rounded-2xl overflow-hidden group h-full"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
      }}
      variants={staggerItem}
      whileHover={{ y: -3, borderColor: 'var(--accent)', boxShadow: '0 12px 30px rgba(99,102,241,0.08)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Preview */}
      <div
        className="h-40 flex items-center justify-center relative overflow-hidden flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, var(--surface) 0%, var(--accent-light) 100%)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <FolderGit2
            className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            style={{ color: 'var(--accent)' }}
            aria-hidden="true"
          />
        )}
        <div className="absolute top-3 right-3">
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="font-bold mb-2"
          style={{ color: 'var(--foreground)', letterSpacing: '-0.01em' }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--muted)' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map(tech => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-xs font-medium"
              style={{
                background: 'var(--surface)',
                color: 'var(--muted)',
                border: '1px solid var(--border)',
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 rounded-md text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
              style={{ color: 'var(--accent)' }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
              style={{ color: 'var(--muted)' }}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const regular = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Selected projects."
          description="A collection of projects I've worked on — from hackathons to personal experiments."
        />

        {/* Featured */}
        {featured.length > 0 && (
          <AnimatedSection className="mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map(p => (
                <FeaturedProjectCard key={p.id} project={p} />
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Other projects */}
        {regular.length > 0 && (
          <AnimatedSection delay={0.1}>
            <div className="mb-6 flex items-center gap-3">
              <span
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: 'var(--muted-foreground)' }}
              >
                More Projects
              </span>
              <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {regular.map(p => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </motion.div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
