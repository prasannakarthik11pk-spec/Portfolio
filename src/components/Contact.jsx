import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import Reveal from './Reveal';
import SocialIcon from './SocialIcon';
import { profile, socials } from '../data/portfolio';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email address';
    if (form.message.trim().length < 10) next.message = 'A little more detail please (10+ characters)';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    const subject = `Portfolio enquiry from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => {
      window.location.href = mailto;
      setStatus('sent');
      setForm(initialForm);
      window.setTimeout(() => setStatus('idle'), 5000);
    }, 900);
  };

  const details = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
    { icon: MapPin, label: 'Location', value: profile.location },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Get in touch</span>
          <h2 className="section-title">
            Let&apos;s build something <span className="gradient-text">together</span>
          </h2>
          <p>
            Have a role, a project or just a question? My inbox is always open — I usually reply within
            a day.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-info">
            {details.map((d) => {
              const Icon = d.icon;
              const content = (
                <>
                  <span className="contact-info-icon"><Icon size={18} /></span>
                  <span className="contact-info-text">
                    <em>{d.label}</em>
                    <strong>{d.value}</strong>
                  </span>
                </>
              );
              return d.href ? (
                <a className="contact-info-card glass" key={d.label} href={d.href}>
                  {content}
                </a>
              ) : (
                <div className="contact-info-card glass" key={d.label}>
                  {content}
                </div>
              );
            })}

            <div className="contact-socials glass">
              <span className="mono">Find me online</span>
              <div className="social-row">
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
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap glass" delay={0.1}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className={`field ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Ada Lovelace"
                  autoComplete="name"
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className={`field ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className={`field ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell me about your project or role…"
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <button className="btn btn-primary submit-btn" type="submit" disabled={status !== 'idle'}>
                <AnimatePresence mode="wait" initial={false}>
                  {status === 'idle' && (
                    <motion.span key="idle" className="btn-inner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Send size={17} /> Send message
                    </motion.span>
                  )}
                  {status === 'sending' && (
                    <motion.span key="sending" className="btn-inner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Loader2 size={17} className="spin" /> Sending…
                    </motion.span>
                  )}
                  {status === 'sent' && (
                    <motion.span key="sent" className="btn-inner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <CheckCircle2 size={17} /> Opening your mail app
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <AnimatePresence>
                {status === 'sent' && (
                  <motion.p
                    className="form-success"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Thanks! Your message is ready in your email client — hit send and I&apos;ll get back to you soon.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
