import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useScrollSpy';

// ── Reusable fade-up animation variants
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut', delay },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

// ── AnimatedSection wrapper
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fadeUp' | 'fadeIn' | 'scale';
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = 'fadeUp',
}: AnimatedSectionProps) {
  const prefersReduced = useReducedMotion();
  const variants = { fadeUp, fadeIn, scale: scaleIn }[variant];

  return (
    <motion.div
      className={className}
      variants={prefersReduced ? {} : variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

// ── Section heading component
interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({ label, title, description, centered = false }: SectionHeadingProps) {
  return (
    <AnimatedSection className={`mb-14 ${centered ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-2 mb-4 ${centered ? 'justify-center' : ''}`}>
        <span
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase"
          style={{ color: 'var(--accent)' }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'var(--accent)' }}
          />
          {label}
        </span>
      </div>
      <h2
        className="text-3xl sm:text-4xl font-bold tracking-tight"
        style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
          style={{ color: 'var(--muted)' }}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
