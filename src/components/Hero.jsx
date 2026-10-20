import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Download, MapPin } from 'lucide-react';
import { profile, socials } from '../data/portfolio';
import Tilt from './Tilt';
import SocialIcon from './SocialIcon';

function useTypewriter(words, { typeMs = 85, deleteMs = 40, holdMs = 1500 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText((t) => (deleting ? word.slice(0, t.length - 1) : word.slice(0, t.length + 1))),
        deleting ? deleteMs : typeMs
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <motion.div className="hero-copy" variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="status-pill">
            <span className="status-dot" />
            {profile.availability}
          </motion.span>

          <motion.h1 variants={item} className="hero-title">
            Building <span className="gradient-text">digital experiences</span> that feel effortless.
          </motion.h1>

          <motion.p variants={item} className="hero-typed mono">
            <span className="prompt">&gt;</span> {typed}
            <span className="caret" />
          </motion.p>

          <motion.p variants={item} className="hero-summary">
            I&apos;m <strong>{profile.name}</strong> — {profile.summary}
          </motion.p>

          <motion.div variants={item} className="hero-meta">
            <span><MapPin size={15} /> {profile.location}</span>
          </motion.div>

          <motion.div variants={item} className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              Explore my work <ArrowRight size={17} />
            </button>
            <a className="btn btn-ghost" href={profile.resume} download>
              <Download size={17} /> Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="hero-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                className="social-chip"
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
              >
                <SocialIcon name={s.icon} size={16} />
                <span>{s.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="hero-orbit" aria-hidden="true" />
          <Tilt className="hero-card" max={8}>
            <div className="hero-card-img">
              <img src={profile.img} alt={profile.name} />
              <div className="hero-card-grad" />
            </div>
            <div className="hero-card-foot">
              <div>
                <strong>{profile.name}</strong>
                <span>{profile.role}</span>
              </div>
              <span className="live-dot" />
            </div>
          </Tilt>

          <motion.div
            className="float-badge badge-a glass"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="mono">&lt;/&gt;</span> React &amp; Vite
          </motion.div>
          <motion.div
            className="float-badge badge-b glass"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="mono">☁</span> Cloud Computing
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        className="scroll-cue"
        onClick={() => scrollTo('services')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll down"
      >
        <span className="mono">scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}
