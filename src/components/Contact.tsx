import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Check, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { AnimatedSection } from './ui/Animation';

function SocialLink({
  href,
  icon,
  label,
  handle,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  handle: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noreferrer"
      className="flex items-center gap-3 p-4 rounded-2xl group transition-all focus-visible:outline-none"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
      }}
      whileHover={{ y: -2, borderColor: 'var(--accent)', boxShadow: '0 8px 25px rgba(99,102,241,0.08)' }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
        style={{ background: 'var(--surface)', color: 'var(--muted)' }}
      >
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
          {label}
        </div>
        <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
          {handle}
        </div>
      </div>
      <ArrowRight
        className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
        style={{ color: 'var(--accent)' }}
        aria-hidden="true"
      />
    </motion.a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--accent)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--border)';
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32"
      style={{ borderTop: '1px solid var(--border)' }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero CTA */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'var(--accent)' }}
            >
              Contact
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ color: 'var(--foreground)', letterSpacing: '-0.03em' }}
            id="contact-heading"
          >
            Let's build something{' '}
            <span className="gradient-text-accent">together.</span>
          </h2>
          <p
            className="text-base sm:text-lg max-w-lg mx-auto leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            Have a project, opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Social links */}
          <AnimatedSection className="lg:col-span-2 space-y-4">
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Find me on
            </h3>

            <SocialLink
              href={personalInfo.github}
              label="GitHub"
              handle={`@${personalInfo.firstName.toLowerCase()}`}
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              }
            />

            <SocialLink
              href={personalInfo.linkedin}
              label="LinkedIn"
              handle={personalInfo.firstName}
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
            />

            <SocialLink
              href={personalInfo.instagram}
              label="Instagram"
              handle={`@${personalInfo.firstName.toLowerCase()}`}
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              }
            />

            <SocialLink
              href={`mailto:${personalInfo.email}`}
              label="Email"
              handle={personalInfo.email}
              icon={<Mail className="w-5 h-5" />}
            />
          </AnimatedSection>

          {/* Right: Contact form */}
          <AnimatedSection className="lg:col-span-3" delay={0.15}>
            <div
              className="rounded-3xl overflow-hidden"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div
                className="px-6 py-5"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <h3
                  className="font-semibold"
                  style={{ color: 'var(--foreground)' }}
                >
                  Send a message
                </h3>
                <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>
                  I usually respond within 24 hours.
                </p>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      className="py-12 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
                      >
                        <Check className="w-7 h-7" style={{ color: '#10B981' }} />
                      </div>
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                        Message sent!
                      </h4>
                      <p className="text-sm" style={{ color: 'var(--muted)' }}>
                        Thanks for reaching out. I'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-xs font-medium mb-1.5"
                            style={{ color: 'var(--foreground)' }}
                            htmlFor="contact-name"
                          >
                            Name
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            placeholder="Your name"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className="w-full px-4 py-2.5 rounded-xl text-sm transition-all outline-none"
                            style={{
                              background: 'var(--surface)',
                              border: '1px solid var(--border)',
                              color: 'var(--foreground)',
                            }}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-xs font-medium mb-1.5"
                            style={{ color: 'var(--foreground)' }}
                            htmlFor="contact-email"
                          >
                            Email
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className="w-full px-4 py-2.5 rounded-xl text-sm transition-all outline-none"
                            style={{
                              background: 'var(--surface)',
                              border: '1px solid var(--border)',
                              color: 'var(--foreground)',
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          className="block text-xs font-medium mb-1.5"
                          style={{ color: 'var(--foreground)' }}
                          htmlFor="contact-message"
                        >
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          required
                          placeholder="Tell me about your project or idea..."
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none resize-none"
                          style={{
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            color: 'var(--foreground)',
                          }}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={submitting}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all focus-visible:outline-none disabled:opacity-60"
                        style={{ background: 'var(--accent)' }}
                        whileHover={{ scale: submitting ? 1 : 1.01 }}
                        whileTap={{ scale: submitting ? 1 : 0.98 }}
                      >
                        {submitting ? (
                          <>
                            <motion.div
                              className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
