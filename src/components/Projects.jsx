import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import Tilt from './Tilt';
import { projects } from '../data/portfolio';

export default function Projects() {
  const filters = useMemo(() => ['All', ...new Set(projects.map((p) => p.badge))], []);
  const [filter, setFilter] = useState('All');
  const list = filter === 'All' ? projects : projects.filter((p) => p.badge === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title">
            Projects I&apos;m <span className="gradient-text">proud of</span>
          </h2>
          <p>
            A mix of AI, systems and web experiments — each one built to solve a concrete, real-world
            problem rather than to sit in a folder.
          </p>
        </Reveal>

        <div className="filter-row">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'is-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {filter === f && (
                <motion.span layoutId="filter-pill" className="filter-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
              )}
              <span>{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {list.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <Tilt className="project-card glass" max={5}>
                  <div className="project-glow" style={{ backgroundImage: project.accent }} />
                  <div className="project-top">
                    <span className="project-badge">{project.badge}</span>
                    {project.featured && <span className="project-featured">Featured</span>}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <ul className="project-features">
                    {project.items.map((feat) => (
                      <li key={feat}>
                        <CheckCircle2 size={15} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="project-bottom">
                    <div className="chip-row">
                      {project.tags.map((tag) => (
                        <span className="chip chip-sm" key={tag}>{tag}</span>
                      ))}
                    </div>
                    <span className="project-open"><ArrowUpRight size={18} /></span>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
