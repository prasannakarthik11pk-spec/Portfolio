import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Layout, Terminal, Mail, Phone, Download, CheckCircle, Award, Briefcase, Send, Plus } from 'lucide-react';
import pkimg from './assets/port pic.jpeg';
import './App.css';

const skills = [
  { title: 'Programming Languages', text: 'Java, C, Java SE 17, JavaScript (ES6+)', icon: Terminal },
  { title: 'Web Technologies', text: 'HTML, CSS, React, Vite, Node.js, Express', icon: Layout },
  { title: 'Database & Cloud', text: 'SQL, MongoDB, AWS Basics, Firebase', icon: Database },
  { title: 'Soft Skills', text: 'Teamwork, Time Management, UI/UX Design, Leadership', icon: Code },
  { title: 'UX Research', text: 'Wireframing, Prototyping, Usability Testing', icon: Briefcase },
  { title: 'DevOps', text: 'Git, GitHub, CI/CD, Docker basics', icon: Award },
];

const services = [
  { title: "Frontend Development", desc: "Building responsive, modern, and beautiful user interfaces using React, tailored CSS, and Framer Motion." },
  { title: "Business Development Engineer", desc: "Driving business growth through strategic planning, relationship building, and identifying new market opportunities." }
];

const stats = [
  { label: "Projects Delivered", value: "15+" },
  { label: "Lines of Code Written", value: "100K+" },
  { label: "Hackathons Attended", value: "5+" },
  { label: "Happy Clients", value: "100%" }
];

const certifications = [
  { title: "MongoDB Associate Developer", issuer: "MongoDB", date: "2024" },
  { title: "Java SE 17 Certified", issuer: "Oracle", date: "2024" }
];

const projects = [
  {
    badge: 'AI Project',
    title: 'AI Chatbot for Admission',
    description: 'Designed and deployed an AI-powered chatbot for university admissions to automate query handling.',
    items: ['NLP-based intent recognition', 'Handled complex admission queries', 'Improved response quality']
  },
  {
    badge: 'System Project',
    title: 'Factory Management',
    description: 'Developed a Factory Management System for a sago unit to track production and dispatch efficiently.',
    items: ['Automated batch processing', 'Improved reporting accuracy', 'Reduced manual errors']
  },
  {
    badge: 'System Project',
    title: 'Hospital Management',
    description: 'Developed an AI chatbot to handle admission scheduling and FAQs to improve efficiency.',
    items: ['Reduced response delays', 'Improved patient support', 'Scalable AI interactions']
  },
  {
    badge: 'Web App',
    title: 'E-Commerce Dashboard',
    description: 'A full-stack dashboard for tracking real-time sales and revenue metrics.',
    items: ['Real-time WebSockets', 'Interactive Data Visualizations', 'Secure User Authentication']
  }
];

const experience = [
  { year: '2023 - 2027', title: 'B.E. Computer Science', text: 'Pursuing B.E. at Kongu Engineering College with CGPA 7.78 till 6th semester.' },
  { year: '2021 - 2023', title: 'Higher Secondary', text: 'Completed education at SRV Senior Secondary School with 79.2%.' },
  { year: 'Achievements', title: 'Hackathons & Sports', text: 'Finalist in HackBuzz, participant in You and Me Hackathon, winner of Centies Athletics overall championship.' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const pulseStat = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

function App() {
  return (
    <div className="app-container">
      <motion.header
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="brand">
          PK<span className="brand-accent"></span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="primary-btn" style={{ padding: '0.5rem 1.25rem' }}>
          Hire Me
        </a>
      </motion.header>

      <main>
        <section className="hero">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="hero-tagline">
              Premium Software Developer
            </motion.div>
            <motion.h1 variants={itemVariants} className="hero-title">
              Crafting <span className="gradient-text">digital</span> experiences that matter.
            </motion.h1>
            <motion.p variants={itemVariants} className="hero-subtitle">
              I’m <strong>Prasannakarthik S</strong>, a Computer Science student with a strong
              interest in cloud computing, modern web development, and solving real-world challenges through elegant, high-performance code.
            </motion.p>
            <motion.div variants={itemVariants} className="hero-actions">
              <a href="#projects" className="primary-btn">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="src/assets/23CSR164--RESUME.pdf" download className="secondary-btn">
                <Download size={18} /> Resume
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="hero-image-wrapper">
              <img src={pkimg} alt="Prasannakarthik S" />
            </div>
          </motion.div>
        </section>

        {/* Statistics Section */}
        <section id="stats">
          <motion.div
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={pulseStat} className="stat-card glass-panel">
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">What I Do</span>
            <h2 className="section-title">Professional Services</h2>
          </motion.div>
          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {services.map((service, idx) => (
              <motion.div key={idx} variants={itemVariants} className="service-card glass-panel">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Expertise</span>
            <h2 className="section-title">Core Skills</h2>
          </motion.div>
          <motion.div
            className="skills-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="skill-card glass-panel">
                  <div className="skill-icon-wrapper">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="skill-title">{skill.title}</h3>
                  <p className="skill-desc">{skill.text}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        {/* Certificates */}
        <section id="certificates">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Validation</span>
            <h2 className="section-title">Certifications</h2>
          </motion.div>
          <motion.div
            className="cert-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {certifications.map((cert, idx) => (
              <motion.div key={idx} variants={itemVariants} className="cert-card glass-panel">
                <h3>{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
          </motion.div>
          <motion.div
            className="projects-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {projects.map((project, idx) => (
              <motion.article key={idx} variants={itemVariants} className="project-card glass-panel">
                <span className="project-badge">{project.badge}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-features">
                  {project.items.map((item, i) => (
                    <div key={i} className="feature-item">
                      <CheckCircle size={16} className="feature-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Timeline Section */}
        <section id="about">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Journey</span>
            <h2 className="section-title">Education & Highlights</h2>
          </motion.div>
          <motion.div
            className="timeline-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {experience.map((exp, idx) => (
              <motion.div key={idx} variants={itemVariants} className="timeline-item glass-panel">
                <div className="timeline-year">{exp.year}</div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <p>{exp.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title">Let's Work Together</h2>
          </motion.div>
          <motion.div
            className="contact-container glass-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group full-width">
                <label>Message</label>
                <textarea rows="4" placeholder="Hello Prasannakarthik..."></textarea>
              </div>
              <button className="primary-btn submit-btn" type="submit">
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      <motion.footer
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="footer-info">
          <h3 style={{ fontFamily: 'Outfit', fontSize: '1.8rem' }}>PK.</h3>
          <p>Available for new opportunities.</p>
        </div>
        <div className="social-links">
          <a href="mailto:prasannakarthik11pk@gmail.com" className="social-btn"><Mail size={20} /></a>
          <a href="https://linkedin.com/in/prasannakarthik-s-803126325/" target="_blank" rel="noreferrer" className="social-btn">Li</a>
          <a href="https://github.com/prasannakarthik11pk-spec" target="_blank" rel="noreferrer" className="social-btn">Gh</a>
          <a href="tel:+918838007708" className="social-btn"><Phone size={20} /></a>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
