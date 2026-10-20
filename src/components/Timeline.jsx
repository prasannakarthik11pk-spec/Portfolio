import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { GraduationCap, Trophy } from 'lucide-react';
import Reveal from './Reveal';
import { timeline } from '../data/portfolio';

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 65%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.4 });

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Journey</span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">highlights</span>
          </h2>
          <p>Four years of learning, building and competing — the milestones that shaped how I work.</p>
        </Reveal>

        <div className="timeline" ref={ref}>
          <div className="timeline-line" aria-hidden="true">
            <motion.span className="timeline-line-fill" style={{ scaleY }} />
          </div>

          {timeline.map((entry, i) => {
            const Icon = entry.type === 'achievement' ? Trophy : GraduationCap;
            return (
              <motion.div
                key={`${entry.title}-${i}`}
                className={`timeline-item ${i % 2 === 0 ? 'is-left' : 'is-right'}`}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="timeline-dot">
                  <Icon size={15} />
                </span>
                <div className="timeline-card glass">
                  <span className="timeline-year mono">{entry.year}</span>
                  <h3>{entry.title}</h3>
                  <span className="timeline-place">{entry.place}</span>
                  <p>{entry.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
