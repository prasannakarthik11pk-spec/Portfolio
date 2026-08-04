import './App.css'
import pkimg from './assets/port pic.jpeg'
const skills = [
  { title: 'Programming Languages', text: 'Java, C, Java SE 17' },
  { title: 'Web Technologies', text: 'HTML, CSS, Web Development Fundamentals' },
  { title: 'Database', text: 'SQL, MongoDB, MongoDB Associate Developer' },
  { title: 'Design & Soft Skills', text: 'Canva, Figma, Teamwork, Time Management' },
]

const projects = [
  {
    badge: 'AI Project',
    title: 'AI Chatbot for Admission Queries',
    description:
      'Designed and deployed an AI-powered chatbot for university admissions to automate query handling and streamline communication workflows.',
    items: [
      'Integrated NLP-based intent recognition and entity extraction',
      'Handled FAQs and complex admission queries',
      'Improved communication efficiency and response quality',
    ],
  },
  {
    badge: 'System Project',
    title: 'Factory Management System',
    description:
      'Developed a Factory Management System for a sago manufacturing unit to manage raw material intake, production tracking, inventory, and dispatch operations efficiently.',
    items: [
      'Automated batch processing and stock updates',
      'Improved production reporting accuracy',
      'Reduced manual errors in operations',
    ],
  },
  {
    badge: 'System Project',
    title: 'Hospital Management System',
    description:
      'Developed an AI-powered chatbot to handle hospital admission queries, appointment scheduling, and patient FAQs, improving operational efficiency and patient experience.',
    items: [
      'Reduced response delays through automation',
      'Improved patient support and workflow efficiency',
      'Supported scalable conversational AI interactions',
    ],
  },
]

const experience = [
  {
    year: '2021 - 2023',
    title: 'Education',
    text: 'Completed higher secondary education at SRV Senior Secondary School with 79.2% in HSC.',
  },
  {
    year: '2023 - 2027',
    title: 'B.E. Computer Science and Engineering',
    text: 'Currently pursuing B.E. in Computer Science and Engineering at Kongu Engineering College with CGPA 7.78 till 6th semester.',
  },
  {
    year: 'Achievements',
    title: 'Hackathons & Championship',
    text: 'Finalist in HackBuzz, participant in You and Me Hackathon by CIT, and winner of the Centies Athletics Overall Championship in 2025 with a silver medal in Anna University zonal competition.',
  },
]

function App() {
  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <div className="brand" aria-label="Prasanna Karthik S home">
            PK<span></span>
          </div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="nav-button" href="#contact">
            Hire Me
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">Aspiring Software Developer</p>
            <h1>Building practical solutions with code and creativity.</h1>
            <p className="lead">
              I’m <strong>PRASANNAKARTHIK S</strong>, a Computer Science student with a strong
              interest in cloud computing, web development, and software engineering. I enjoy
              solving real-world problems through scalable and efficient solutions.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                View My Work
              </a>
              <a className="secondary-btn" href="#contact">
                Let’s Talk
              </a>
              <a className="download-btn" href="src/assets/23CSR164--RESUME.pdf" download>
                Download Resume
              </a>
            </div>

            <div className="mini-stats" aria-label="Professional statistics">
              <div>
                <strong>2+</strong>
                <span>Core Projects</span>
              </div>
              <div>
                <strong>6+</strong>
                <span>Semesters</span>
              </div>
              <div>
                <strong>7.78</strong>
                <span>CGPA</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile card">
            <div className="profile-card">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="profile-photo-wrap">
                <img
                  src={pkimg}
                  alt="Prasanna Karthik S"
                />
              </div>

              <div className="card-content">
                <p className="card-label">Available for work</p>
                <h2>Product &amp; Web Developer</h2>
                <ul>
                  <li>UI/UX-focused builds</li>
                  <li>Responsive frontends</li>
                  <li>Modern web solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about container">
          <div className="section-heading">
            <p className="eyebrow">Career Objective</p>
            <h2>Driven to build impactful software and grow with technology.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                Aspiring Software Developer with strong proficiency in web development and
                programming. Demonstrates a solid understanding of agile methodologies and the
                ability to design and deliver scalable solutions.
              </p>
              <p>
                Eager to contribute cutting-edge technical skills to drive innovation and
                organizational growth while continuously learning and improving in cloud, web,
                and software engineering domains.
              </p>
            </div>

            <div className="about-highlights">
              <div>
                <span>01</span>
                <p>Strong interest in cloud computing and modern software systems</p>
              </div>
              <div>
                <span>02</span>
                <p>Focused on web development, Java programming, and database solutions</p>
              </div>
              <div>
                <span>03</span>
                <p>Committed to teamwork, time management, and continuous learning</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills container">
          <div className="section-heading">
            <p className="eyebrow">Technical Skills</p>
            <h2>Core areas I’m building expertise in.</h2>
          </div>

          <div className="skill-grid">
            {skills.map(({ title, text }) => (
              <div className="skill-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container">
          <div className="section-heading">
            <p className="eyebrow">Area of Interest</p>
            <h2>Fields that inspire my learning.</h2>
          </div>
          <div className="interest-list">
            <span>Cloud Computing</span>
            <span>Web Development</span>
            <span>Operating System</span>
            <span>Java SE 17</span>
            <span>MongoDB</span>
          </div>
        </section>

        <section id="projects" className="projects container">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>A few highlights from my work.</h2>
          </div>

          <div className="project-grid">
            {projects.map(({ badge, title, description, items }) => (
              <article className="project-card" key={title}>
                <div className="project-badge">{badge}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience container">
          <div className="section-heading">
            <p className="eyebrow">Education & Achievements</p>
            <h2>Academic growth and accomplishments.</h2>
          </div>

          <div className="timeline">
            {experience.map(({ year, title, text }) => (
              <div className="timeline-item" key={year}>
                <div className="timeline-date">{year}</div>
                <div className="timeline-content">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="eyebrow">Let’s connect</p>
            <h2>Ready to build something great?</h2>
          </div>

          <div className="contact-links">
            <a href="mailto:prasannakarthik11pk@gmail.com">prasannakarthik11pk@gmail.com</a>
            <a href="https://linkedin.com/in/prasannakarthik-s-803126325/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/prasannakarthik11pk-spec" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://leetcode.com/u/prasannakarthik_111/" target="_blank" rel="noreferrer">
              LeetCode
            </a>
            <a href="tel:+918838007708">+91 88380 07708</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
