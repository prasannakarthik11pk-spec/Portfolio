import { motion } from 'framer-motion';
import { Terminal, Layout, Server, Database, Cloud, Wrench, BadgeCheck } from 'lucide-react';
import Reveal from './Reveal';
import { skillGroups, skillGroupsMeta, certifications, interests } from '../data/portfolio';

const icons = {
  terminal: Terminal,
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Toolbox</span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">technologies</span>
          </h2>
          <p>
            A stack I keep sharpening — from core languages to the frontend, backend, data and cloud
            layers that bring products to life.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillGroupsMeta.map((meta, gi) => {
            const Icon = icons[meta.icon] || Terminal;
            const items = skillGroups.filter((s) => s.group === meta.id);
            if (!items.length) return null;
            return (
              <Reveal key={meta.id} className="skill-card glass" delay={gi * 0.06}>
                <div className="skill-card-head">
                  <span className="skill-card-icon"><Icon size={18} /></span>
                  <h3>{meta.id}</h3>
                </div>
                <div className="chip-row">
                  {items.map((skill) => (
                    <span className="chip chip-sm" key={skill.name}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="skills-extra">
          <Reveal className="cert-strip glass">
            <h3 className="mono strip-title">Certifications</h3>
            <div className="cert-list">
              {certifications.map((cert) => (
                <div className="cert-item" key={cert.title}>
                  <BadgeCheck size={18} />
                  <div>
                    <strong>{cert.title}</strong>
                    <span>{cert.issuer} · {cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="cert-strip glass" delay={0.08}>
            <h3 className="mono strip-title">Areas of interest</h3>
            <div className="chip-row">
              {interests.map((interest) => (
                <span className="chip" key={interest}>{interest}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
