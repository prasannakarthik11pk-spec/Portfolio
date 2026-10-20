import pkimg from '../assets/port pic.jpeg';
import resumeUrl from '../assets/23CSR164--RESUME.pdf';

export const profile = {
  name: 'Prasannakarthik S',
  short: 'PK',
  img: pkimg,
  role: 'Aspiring Software Developer',
  tagline: 'I build fast, elegant, human-centred digital products.',
  summary:
    'Computer Science student with a strong interest in cloud computing, modern web development, and solving real-world problems through clean, high-performance code. I care about the details that make software feel effortless.',
  location: 'Coimbatore, Tamil Nadu, India',
  availability: 'Open to internships & full-time roles',
  email: 'prasannakarthik11pk@gmail.com',
  phone: '+91 88380 07708',
  phoneHref: '+918838007708',
  resume: resumeUrl,
  roles: ['Frontend Developer', 'React Engineer', 'UI / UX Enthusiast', 'Cloud Explorer'],
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/prasannakarthik11pk-spec', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/prasannakarthik-s-803126325/', icon: 'linkedin' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/prasannakarthik_111/', icon: 'leetcode' },
  { label: 'Email', href: 'mailto:prasannakarthik11pk@gmail.com', icon: 'mail' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: 'K+', label: 'Lines of Code' },
  { value: 5, suffix: '+', label: 'Hackathons' },
  { value: 4, suffix: '+', label: 'Years Learning' },
];

export const services = [
  {
    icon: 'layout',
    title: 'Frontend Development',
    desc: 'Responsive, accessible and beautiful interfaces built with React, modern CSS and motion — engineered to feel instant.',
    tags: ['React', 'Vite', 'Framer Motion'],
  },
  {
    icon: 'sparkles',
    title: 'UI / UX Design',
    desc: 'From wireframes and prototypes to polished design systems, I design flows that people understand without a manual.',
    tags: ['Figma', 'Wireframing', 'Prototyping'],
  },
  {
    icon: 'trending',
    title: 'Business Development',
    desc: 'Driving growth through strategic planning, relationship building and identifying new market opportunities.',
    tags: ['Strategy', 'Communication', 'Research'],
  },
  {
    icon: 'server',
    title: 'Backend & Data',
    desc: 'Practical APIs and data layers with Node, Express, SQL and MongoDB — built to scale beyond the demo.',
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
];

export const skillGroups = [
  { name: 'Java', level: 88, group: 'Languages' },
  { name: 'JavaScript (ES6+)', level: 86, group: 'Languages' },
  { name: 'C', level: 78, group: 'Languages' },
  { name: 'React', level: 85, group: 'Frontend' },
  { name: 'HTML & CSS', level: 92, group: 'Frontend' },
  { name: 'Vite', level: 80, group: 'Frontend' },
  { name: 'Node.js / Express', level: 74, group: 'Backend' },
  { name: 'SQL', level: 78, group: 'Data' },
  { name: 'MongoDB', level: 76, group: 'Data' },
  { name: 'AWS / Firebase', level: 68, group: 'Cloud' },
  { name: 'Git & GitHub', level: 85, group: 'Tools' },
  { name: 'Figma & Canva', level: 82, group: 'Tools' },
];

export const skillGroupsMeta = [
  { id: 'Languages', icon: 'terminal' },
  { id: 'Frontend', icon: 'layout' },
  { id: 'Backend', icon: 'server' },
  { id: 'Data', icon: 'database' },
  { id: 'Cloud', icon: 'cloud' },
  { id: 'Tools', icon: 'wrench' },
];

export const marqueeWords = [
  'React', 'JavaScript', 'Java', 'Node.js', 'MongoDB', 'SQL', 'AWS',
  'Figma', 'Vite', 'Express', 'UI / UX', 'Cloud', 'Problem Solving',
];

export const projects = [
  {
    badge: 'AI',
    title: 'AI Chatbot for Admissions',
    description:
      'An AI-powered assistant for university admissions that automates query handling and streamlines communication workflows.',
    items: ['NLP intent recognition', 'FAQ + complex query handling', 'Reduced staff response load'],
    accent: 'linear-gradient(135deg, #22d3ee, #6366f1)',
    tags: ['AI', 'NLP', 'Web'],
    featured: true,
  },
  {
    badge: 'Systems',
    title: 'Factory Management System',
    description:
      'A management system for a sago manufacturing unit covering raw material intake, production tracking, inventory and dispatch.',
    items: ['Automated batch processing', 'Live stock updates', 'Accurate production reports'],
    accent: 'linear-gradient(135deg, #a855f7, #ec4899)',
    tags: ['Java', 'SQL', 'Automation'],
  },
  {
    badge: 'Healthcare',
    title: 'Hospital Management System',
    description:
      'An AI chatbot handling hospital admission queries, appointment scheduling and patient FAQs to cut administrative overhead.',
    items: ['Smart scheduling', 'Patient FAQ automation', 'Lower response delays'],
    accent: 'linear-gradient(135deg, #6366f1, #a855f7)',
    tags: ['AI', 'Scheduling', 'UX'],
  },
  {
    badge: 'Web App',
    title: 'E-Commerce Dashboard',
    description:
      'A full-stack analytics dashboard for tracking real-time sales, revenue and customer behaviour at a glance.',
    items: ['Real-time updates', 'Interactive visualisations', 'Secure authentication'],
    accent: 'linear-gradient(135deg, #fbbf24, #ec4899)',
    tags: ['React', 'Node', 'Charts'],
  },
];

export const timeline = [
  {
    year: '2023 — 2027',
    title: 'B.E. Computer Science & Engineering',
    place: 'Kongu Engineering College',
    text: 'Pursuing my degree with a CGPA of 7.78 (till 6th semester), focused on web development, cloud computing and operating systems.',
    type: 'education',
  },
  {
    year: '2021 — 2023',
    title: 'Higher Secondary Certificate',
    place: 'SRV Senior Secondary School',
    text: 'Completed HSC with 79.2%, building the analytical foundation that led me into computer science.',
    type: 'education',
  },
  {
    year: '2025',
    title: 'Hackathons & Achievement',
    place: 'HackBuzz · You and Me Hackathon · CIT',
    text: 'Finalist at HackBuzz, participant in the You and Me Hackathon at Coimbatore Institute of Technology, and winner of the Centies Athletics Overall Championship.',
    type: 'achievement',
  },
  {
    year: '2025',
    title: 'Sports Excellence',
    place: 'Anna University Zonal Competition',
    text: 'Won Silver at the Anna University Zonal Competition — discipline and consistency that carry into how I build software.',
    type: 'achievement',
  },
];

export const certifications = [
  { title: 'MongoDB Associate Developer', issuer: 'MongoDB', date: '2024' },
  { title: 'Java SE 17 Certified', issuer: 'Oracle', date: '2024' },
];

export const interests = ['Cloud Computing', 'Web Development', 'Operating Systems', 'UI / UX'];
