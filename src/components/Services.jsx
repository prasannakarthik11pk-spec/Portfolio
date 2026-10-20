import { Layout, Sparkles, TrendingUp, Server, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import Tilt from './Tilt';
import { services } from '../data/portfolio';

const icons = { layout: Layout, sparkles: Sparkles, trending: TrendingUp, server: Server };

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">What I do</span>
          <h2 className="section-title">
            Turning ideas into <span className="gradient-text">shipped software</span>
          </h2>
          <p>
            I blend engineering and design — from the first wireframe to a deployed, production-ready
            product that people actually enjoy using.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = icons[service.icon] || Layout;
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <Tilt className="service-card glass" max={6}>
                  <div className="service-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                  <div className="chip-row">
                    {service.tags.map((tag) => (
                      <span className="chip" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <ArrowUpRight className="service-arrow" size={18} />
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
