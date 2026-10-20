import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';
import { useScrollSpy } from '../hooks/useScrollSpy';

const ids = navLinks.map((l) => l.id);

export default function Navbar({ theme, toggleTheme }) {
  const active = useScrollSpy(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <button className="nav-brand" onClick={() => go('home')} aria-label="Go home">
          <span className="nav-brand-mark">{profile.short}</span>
          <span className="nav-brand-text">
            {profile.name}
            <em>Software Developer</em>
          </span>
        </button>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${active === link.id ? 'is-active' : ''}`}
              onClick={() => go(link.id)}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="nav-link-bg"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            title="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.28 }}
                style={{ display: 'grid', placeItems: 'center' }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a className="btn btn-primary nav-cta" href={profile.resume} download>
            <Download size={16} /> Resume
          </a>

          <button
            className="icon-btn nav-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                className={`nav-drawer-link ${active === link.id ? 'is-active' : ''}`}
                onClick={() => go(link.id)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="mono">0{i + 1}</span>
                {link.label}
              </motion.button>
            ))}
            <a className="btn btn-primary" href={profile.resume} download>
              <Download size={16} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
