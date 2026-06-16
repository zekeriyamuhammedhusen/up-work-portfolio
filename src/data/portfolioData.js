export const portfolioMeta = {
  name: 'Zekeriya Muhammedhusen',
  role: 'MERN Stack Developer',
  location: 'Addis Ababa, Ethiopia',
  email: 'zakm01163@gmail.com',
  phone: '+251964020334',
  phoneDisplay: '+251 96 402 0334',
  github: 'https://github.com/zekeriyamuhammedhusen',
  linkedin: 'https://www.linkedin.com/in/zekeriyam/',
  upwork: 'https://upwork.com/freelancers/~0117eed50314cbda96',
  facebook: 'https://web.facebook.com/zakariya.m.husen',
  instagram: 'https://www.instagram.com/zakiman_mu/',
  education: "B.Sc. Computer Science, Wollo University",
  languages: 'English, Amharic',
  availability: 'Available for immediate start',
  timezone: 'EAT (UTC+3)',
  hourlyRate: '$5-10',
  responseTime: '< 2 hours',
};

export const socialLinks = [
  { name: 'GitHub', href: portfolioMeta.github },
  { name: 'LinkedIn', href: portfolioMeta.linkedin },
  { name: 'Upwork', href: portfolioMeta.upwork, primary: true },
  { name: 'Facebook', href: portfolioMeta.facebook },
  { name: 'Instagram', href: portfolioMeta.instagram },
];

export const heroStats = [
  { num: '4+', label: 'Projects shipped' },
  { num: 'MERN', label: 'Core stack' },
  { num: 'JWT', label: 'Auth & security' },
  { num: '100%', label: 'Responsive UIs' },
];

export const services = [
  {
    icon: '{ }',
    title: 'Full-Stack Web Apps',
    description:
      'End-to-end MERN applications — from database schema and API design to a polished, responsive React frontend.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    icon: '\u21C4',
    title: 'REST API Development',
    description:
      'Secure, well-documented APIs with Express and Mongoose, including authentication, validation, and role-based access.',
    tags: ['Express', 'JWT', 'Postman'],
  },
  {
    icon: '\u25A3',
    title: 'Responsive UI Development',
    description:
      'Pixel-aware, mobile-first interfaces built with React, Tailwind CSS, and Bootstrap that work across every device.',
    tags: ['Tailwind', 'Bootstrap', 'CSS'],
  },
  {
    icon: '\u2692',
    title: 'CRUD & Admin Dashboards',
    description:
      'Inventory systems, content management, and admin panels with create / read / update / delete flows and clean data tables.',
    tags: ['MongoDB', 'React', 'REST'],
  },
  {
    icon: '\u21BB',
    title: 'Bug Fixes & Feature Additions',
    description:
      'Jumping into an existing MERN codebase to fix issues, add new functionality, or improve performance and structure.',
    tags: ['Debugging', 'Refactoring'],
  },
  {
    icon: '\u2699',
    title: 'API Integration',
    description:
      'Connecting your app to third-party services and external APIs, with clean error handling and predictable data flow.',
    tags: ['Integration', 'Auth'],
  },
];

export const aboutInfo = [
  { k: 'NAME', v: portfolioMeta.name },
  { k: 'ROLE', v: portfolioMeta.role },
  { k: 'EDUCATION', v: portfolioMeta.education },
  { k: 'LOCATION', v: portfolioMeta.location },
  { k: 'TIMEZONE', v: portfolioMeta.timezone },
  { k: 'AVAILABILITY', v: portfolioMeta.availability, accent: true },
  { k: 'LANGUAGES', v: portfolioMeta.languages },
];

export const upworkInfo = [
  { label: 'Hourly Rate', value: portfolioMeta.hourlyRate, icon: '💰' },
  { label: 'Availability', value: portfolioMeta.availability, icon: '✅' },
  { label: 'Response Time', value: portfolioMeta.responseTime, icon: '⚡' },
  { label: 'Timezone', value: portfolioMeta.timezone, icon: '🌍' },
];

export const LIVE_LINK_PLACEHOLDERS = [
  "https://stock-frontend-6up1.onrender.com",
  "https://crud-frontend-l7bz.onrender.com/",
  "https://abugida-frontend-i304.onrender.com",
  "https://zekeriyamuhammedhusen.github.io/Netflix-clone/",
];

export const featuredProjects = [
  {
    title: "Stock Management System",
    type: "MERN Stack Application",
    summary:
      "Full-stack inventory management system with JWT authentication and role-based access control.",
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: portfolioMeta.github,
    demo: LIVE_LINK_PLACEHOLDERS[0],
  },
  {
    title: "Full Stack CRUD Application",
    type: "Web Application",
    summary:
      "Responsive full-stack application implementing create, read, update, and delete operations using React, Express, and MongoDB.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: portfolioMeta.github,
    demo: LIVE_LINK_PLACEHOLDERS[1],
  },
  {
    title: "Abugida E-Learning Platform",
    type: "Learning Management System",
    summary:
      "Full-stack LMS with authentication, course management, student progress tracking, and messaging features.",
    stack: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
    github: portfolioMeta.github,
    demo: LIVE_LINK_PLACEHOLDERS[2],
  },
  {
    title: "Netflix Clone",
    type: "Web Application",
    summary:
      "Responsive Netflix-style browsing experience built with React, featuring dynamic movie browsing via the OMDb API.",
    stack: ["React", "CSS", "OMDb API"],
    github: portfolioMeta.github,
    demo: LIVE_LINK_PLACEHOLDERS[3],
  },
];

export const skills = {
  Frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "API Integration"],
  Tools: ["Git & GitHub", "Postman", "VS Code"],
  Concepts: ["JWT Authentication", "CRUD Operations", "Responsive Design", "Role-Based Access"],
};

export const processSteps = [
  {
    num: '01',
    title: 'Scope the work',
    description:
      'We talk through what you need, I ask questions to remove ambiguity, and confirm deliverables and timeline before any code is written.',
  },
  {
    num: '02',
    title: 'Build in milestones',
    description:
      'I break the work into clear milestones and share progress regularly, so you can review and give feedback early.',
  },
  {
    num: '03',
    title: 'Test & refine',
    description:
      'I test functionality across devices and edge cases, then refine based on your feedback until it works the way you expect.',
  },
  {
    num: '04',
    title: 'Deliver & support',
    description:
      "You get clean, documented code and a short handover. I'm available afterward for fixes, tweaks, or follow-on work.",
  },
];
