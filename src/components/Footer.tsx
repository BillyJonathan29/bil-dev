import { personalInfo } from '../data/portfolio';

const socials = [
  { label: 'GitHub',   href: personalInfo.github },
  { label: 'LinkedIn', href: personalInfo.linkedin },
  { label: 'Email',    href: `mailto:${personalInfo.email}` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ borderTop: '1px solid var(--border)' }}
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Name + role */}
          <div>
            <p
              className="font-semibold text-sm"
              style={{ color: 'var(--fg)', letterSpacing: '-0.01em' }}
            >
              {personalInfo.name}
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--fg-subtle)' }}>
              {personalInfo.role}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="text-xs transition-colors"
                style={{ color: 'var(--fg-subtle)', textDecoration: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-subtle)'; }}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: 'var(--fg-subtle)' }}>
            © {year} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
