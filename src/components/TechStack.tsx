import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolio';
import { SectionHeading, AnimatedSection, staggerContainer, staggerItem } from './ui/Animation';

// Tech brand colors for pills
const techColors: Record<string, { bg: string; text: string; dot: string }> = {
  html:       { bg: '#FFF4EE', text: '#E34F26', dot: '#E34F26' },
  css:        { bg: '#EEF4FF', text: '#1572B6', dot: '#1572B6' },
  js:         { bg: '#FFFBEA', text: '#F7DF1E', dot: '#CA8A04' },
  ts:         { bg: '#EFF6FF', text: '#3178C6', dot: '#3178C6' },
  react:      { bg: '#EEFBFF', text: '#61DAFB', dot: '#0EA5E9' },
  next:       { bg: '#F5F5F5', text: '#333333', dot: '#111111' },
  tailwind:   { bg: '#EDFAFA', text: '#06B6D4', dot: '#06B6D4' },
  php:        { bg: '#F0F0FF', text: '#777BB4', dot: '#777BB4' },
  laravel:    { bg: '#FFF0F0', text: '#FF2D20', dot: '#FF2D20' },
  node:       { bg: '#F0FFF4', text: '#339933', dot: '#339933' },
  hono:       { bg: '#FFF7F0', text: '#E36002', dot: '#E36002' },
  mysql:      { bg: '#F0F8FF', text: '#00758F', dot: '#00758F' },
  postgresql: { bg: '#EEF2FF', text: '#336791', dot: '#336791' },
  git:        { bg: '#FFF2EE', text: '#F05032', dot: '#F05032' },
  github:     { bg: '#F5F5F5', text: '#333333', dot: '#111111' },
  figma:      { bg: '#FFF0FA', text: '#F24E1E', dot: '#A259FF' },
  vscode:     { bg: '#EEF6FF', text: '#007ACC', dot: '#007ACC' },
};

const darkTechColors: Record<string, { bg: string; text: string; dot: string }> = {
  html:       { bg: 'rgba(227,79,38,0.12)', text: '#FB8A6B', dot: '#E34F26' },
  css:        { bg: 'rgba(21,114,182,0.12)', text: '#60A5FA', dot: '#1572B6' },
  js:         { bg: 'rgba(247,223,30,0.10)', text: '#FDE047', dot: '#CA8A04' },
  ts:         { bg: 'rgba(49,120,198,0.12)', text: '#60A5FA', dot: '#3178C6' },
  react:      { bg: 'rgba(97,218,251,0.10)', text: '#67E8F9', dot: '#0EA5E9' },
  next:       { bg: 'rgba(255,255,255,0.06)', text: '#E5E7EB', dot: '#D1D5DB' },
  tailwind:   { bg: 'rgba(6,182,212,0.10)', text: '#67E8F9', dot: '#06B6D4' },
  php:        { bg: 'rgba(119,123,180,0.12)', text: '#C4B5FD', dot: '#777BB4' },
  laravel:    { bg: 'rgba(255,45,32,0.10)', text: '#FCA5A5', dot: '#FF2D20' },
  node:       { bg: 'rgba(51,153,51,0.12)', text: '#86EFAC', dot: '#339933' },
  hono:       { bg: 'rgba(227,96,2,0.10)', text: '#FCA5A5', dot: '#E36002' },
  mysql:      { bg: 'rgba(0,117,143,0.12)', text: '#67E8F9', dot: '#00758F' },
  postgresql: { bg: 'rgba(51,103,145,0.12)', text: '#93C5FD', dot: '#336791' },
  git:        { bg: 'rgba(240,80,50,0.10)', text: '#FCA5A5', dot: '#F05032' },
  github:     { bg: 'rgba(255,255,255,0.06)', text: '#E5E7EB', dot: '#D1D5DB' },
  figma:      { bg: 'rgba(162,89,255,0.10)', text: '#E879F9', dot: '#A259FF' },
  vscode:     { bg: 'rgba(0,122,204,0.12)', text: '#60A5FA', dot: '#007ACC' },
};

function SkillPill({ name, icon, isDark }: { name: string; icon: string; isDark?: boolean }) {
  const colors = isDark
    ? (darkTechColors[icon] || { bg: 'rgba(255,255,255,0.06)', text: '#E5E7EB', dot: '#9CA3AF' })
    : (techColors[icon] || { bg: '#F3F4F6', text: '#4B5563', dot: '#9CA3AF' });

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium cursor-default"
      style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.dot}20` }}
      variants={staggerItem}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.15 }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: colors.dot }}
      />
      {name}
    </motion.div>
  );
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  // detect dark mode via CSS variable
  const isDark = document.documentElement.classList.contains('dark');

  const displayed = activeCategory
    ? skills.filter(s => s.category === activeCategory)
    : skills;

  return (
    <section
      id="skills"
      className="py-24 sm:py-32"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tech Stack"
          title="Technologies I work with."
          description="Tools and languages I use to build scalable, modern web applications."
        />

        {/* Category filter */}
        <AnimatedSection className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className="px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all"
            style={{
              background: !activeCategory ? 'var(--accent)' : 'var(--card)',
              color: !activeCategory ? '#fff' : 'var(--muted)',
              border: '1px solid var(--border)',
            }}
          >
            All
          </button>
          {skills.map(s => (
            <button
              key={s.category}
              onClick={() => setActiveCategory(s.category === activeCategory ? null : s.category)}
              className="px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all"
              style={{
                background: activeCategory === s.category ? 'var(--accent)' : 'var(--card)',
                color: activeCategory === s.category ? '#fff' : 'var(--muted)',
                border: '1px solid var(--border)',
              }}
            >
              {s.icon} {s.category}
            </button>
          ))}
        </AnimatedSection>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory || 'all'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            {displayed.map((group) => (
              <div key={group.category}>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {group.category}
                </div>
                <motion.div
                  className="flex flex-wrap gap-2.5"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {group.items.map(item => (
                    <SkillPill key={item.name} name={item.name} icon={item.icon} isDark={isDark} />
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
