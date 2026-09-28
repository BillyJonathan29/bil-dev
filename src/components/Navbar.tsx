import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ui/ThemeToggle';
import { useScrolled } from '../hooks/useScrollSpy';
import { personalInfo } from '../data/portfolio';

const NAV_LINKS = [
  { label: 'Work',       href: '#work' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

function scrollTo(href: string) {
  const id = href.replace('#', '');
  const el = id === '' ? document.documentElement : document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(40);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'var(--bg)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div
          className="max-w-5xl mx-auto px-6 lg:px-8 flex items-center justify-between"
          style={{ height: '56px' }}
        >
          {/* Logo */}
          <button
            onClick={() => { scrollTo(''); setOpen(false); }}
            className="font-bold text-sm tracking-widest uppercase"
            style={{
              color: 'var(--fg)',
              letterSpacing: '0.12em',
              fontFamily: 'var(--font-sans)',
            }}
            aria-label="Back to top"
          >
            {personalInfo.firstName.toUpperCase()}
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-sm transition-colors"
                style={{ color: 'var(--fg-muted)', fontWeight: 500 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-muted)'; }}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <motion.span
                className="block w-full h-px"
                style={{ background: 'var(--fg)' }}
                animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-full h-px"
                style={{ background: 'var(--fg)' }}
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.1 }}
              />
              <motion.span
                className="block w-full h-px"
                style={{ background: 'var(--fg)' }}
                animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'var(--bg)', paddingTop: '56px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col px-6 pt-8 gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => { scrollTo(href); setOpen(false); }}
                  className="text-left text-2xl font-semibold"
                  style={{ color: 'var(--fg)', letterSpacing: '-0.01em' }}
                >
                  {label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
