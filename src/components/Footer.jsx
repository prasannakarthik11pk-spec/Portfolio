import { Heart } from 'lucide-react';
import { navLinks, profile, socials } from '../data/portfolio';
import SocialIcon from './SocialIcon';

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <button className="footer-mark" onClick={toTop} aria-label="Back to top">
            {profile.short}
          </button>
          <div>
            <h3>{profile.name}</h3>
            <p>{profile.tagline}</p>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="footer-socials">
          {socials.map((s) => (
            <a
              key={s.label}
              className="footer-social"
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={s.label}
            >
              <SocialIcon name={s.icon} size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span className="footer-made">
          Built with <Heart size={13} /> React, Vite &amp; Framer Motion
        </span>
      </div>
    </footer>
  );
}
