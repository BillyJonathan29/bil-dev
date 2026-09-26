import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'icon' | 'pill';
}

export function ThemeToggle({ variant = 'icon' }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();

  if (variant === 'pill') {
    return (
      <div
        className="inline-flex items-center gap-1 rounded-full p-1"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        role="group"
        aria-label="Toggle theme"
      >
        <button
          onClick={toggleTheme}
          className="relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
          style={{
            color: resolvedTheme === 'light' ? 'var(--accent)' : 'var(--muted)',
            background: resolvedTheme === 'light' ? 'var(--accent-light)' : 'transparent',
          }}
          aria-label="Light mode"
        >
          <Sun className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={toggleTheme}
          className="relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
          style={{
            color: resolvedTheme === 'dark' ? 'var(--accent)' : 'var(--muted)',
            background: resolvedTheme === 'dark' ? 'var(--accent-light)' : 'transparent',
          }}
          aria-label="Dark mode"
        >
          <Moon className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-9 h-9 rounded-xl transition-colors focus-visible:outline-none"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        color: 'var(--muted)',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={resolvedTheme}
        initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {resolvedTheme === 'dark' ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </motion.div>
    </motion.button>
  );
}
