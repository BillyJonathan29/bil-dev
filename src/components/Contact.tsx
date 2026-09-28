import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { fadeUp, staggerContainer, staggerItem } from './ui/Animation';

// Arrow icon
function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const links = [
  { label: 'Email',    href: `mailto:${personalInfo.email}` },
  { label: 'LinkedIn', href: personalInfo.linkedin },
  { label: 'GitHub',   href: personalInfo.github },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 lg:py-40"
      style={{ borderTop: '1px solid var(--border)' }}
      aria-labelledby="contact-heading"
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
          07 / Contact
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Large headline */}
          <motion.h2
            variants={staggerItem}
            className="font-bold leading-tight mb-6"
            id="contact-heading"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              color: 'var(--fg)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}
          >
            Have an idea?<br />
            <span style={{ color: 'var(--fg-muted)' }}>Let's build it.</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-base mb-14 max-w-sm leading-relaxed"
            style={{ color: 'var(--fg-muted)', lineHeight: 1.8 }}
          >
            I'm open to interesting projects,
            collaboration, and opportunities.
          </motion.p>

          {/* Contact links */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col gap-4"
          >
            {links.map(link => (
              <motion.div key={link.label} variants={staggerItem}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 transition-colors"
                  style={{ color: 'var(--fg-muted)', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-muted)'; }}
                >
                  <span
                    className="font-medium"
                    style={{ fontSize: '1.15rem', letterSpacing: '-0.01em' }}
                  >
                    {link.label}
                  </span>
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
