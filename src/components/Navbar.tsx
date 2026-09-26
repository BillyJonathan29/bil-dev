import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ui/ThemeToggle';
import { useScrollSpy, useScrolled } from '../hooks/useScrollSpy';
import { personalInfo } from '../data/portfolio';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'achievements', 'contact'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(20);
  const activeId = useScrollSpy(SECTION_IDS);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'var(--background)'
            : 'transparent',
          borderBottom: scrolled
            ? '1px solid var(--border)'
            : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 group focus-visible:outline-none"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Back to top"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                {personalInfo.firstName.charAt(0)}
              </div>
              <span
                className="font-semibold text-sm tracking-tight hidden sm:block transition-colors"
                style={{ color: 'var(--foreground)' }}
              >
                {personalInfo.firstName}
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {NAV_LINKS.map(({ label, href }) => {
                const sectionId = href.replace('#', '');
                const isActive = activeId === sectionId;
                return (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className="relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
                    style={{
                      color: isActive ? 'var(--accent)' : 'var(--muted)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--foreground)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: 'var(--accent-light)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              <motion.button
                onClick={() => handleNavClick('#contact')}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2"
                style={{
                  background: 'var(--accent)',
                  color: '#fff',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                }}
                whileHover={{ scale: 1.02, opacity: 0.92 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's Talk
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>

              {/* Mobile hamburger */}
              <motion.button
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl focus-visible:outline-none"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                }}
                onClick={() => setMobileOpen(!mobileOpen)}
                whileTap={{ scale: 0.95 }}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={mobileOpen ? 'close' : 'open'}
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.15 }}
                  >
                    {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(4px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-4 left-4 right-4 z-50 md:hidden rounded-2xl overflow-hidden"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              }}
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between p-4"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <span className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>
                  {personalInfo.firstName}
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg"
                  style={{ color: 'var(--muted)', background: 'var(--surface)' }}
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Links */}
              <nav className="p-3 space-y-1" aria-label="Mobile navigation">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
                    style={{ color: 'var(--foreground)' }}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                  >
                    {label}
                  </motion.button>
                ))}
              </nav>

              {/* Footer */}
              <div className="p-3 pt-0">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all"
                  style={{ background: 'var(--accent)' }}
                >
                  Let's Talk
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
