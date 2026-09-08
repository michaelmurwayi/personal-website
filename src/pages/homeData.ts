export interface Experience {
  company: string;
  role: string;
  period: string;
  technologies: string[];
  bullets: string[];
}

export interface Project {
  number: string;
  title: string;
  subtitle: string;
  about: string;
  technologies: string[];
  url: string;
}

export const experiences: Experience[] = [
  {
    company: 'Coffee Estate Bourgeoisie Brokers Agency',
    role: 'Full-Stack Developer',
    period: '2020 - 2023',
    technologies: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'REST APIs', 'Excel Automation'],
    bullets: [
      'Designed and developed the company website giving the company a good online posture.',
      'Built automated catalogue generation, sale processing, and farmer management modules.',
      'Developed Excel automation for auction summaries, payout files, and financial reporting helping the team transition from a manual data processing system.',
      'Implemented REST APIs using FastAPI and SQLAlchemy to handle company records increasing the accuracy and efficiency of reporting to farmers.',
      'Designed transaction-based inventory architecture supporting partial sales and complete audit trails.',
    ],
  },
  {
    company: 'Revolution Analytics',
    role: 'Full-Stack Developer',
    period: '2020 - 2023',
    technologies: ['Python', 'Web Scraping', 'BI Dashboards', 'Data Pipelines', 'Automation'],
    bullets: [
      'Developed data scraping scripts for a machine learning system.',
      'Developed analytics dashboards for business intelligence.',
      'Optimized data processing pipelines handling large datasets from web scraping, greatly reducing time used in data collection.',
      'Automated reporting workflows, reducing manual effort.',
    ],
  },
  {
    company: 'Finteklabs',
    role: 'Frontend Developer',
    period: '2019 - 2020',
    technologies: ['Vue.js', 'AngularJS', 'Material Bootstrap', 'UI/UX'],
    bullets: [
      'Designed and implemented dynamic, responsive UIs using Vue.js, AngularJS, and Material Bootstrap.',
      'Enhanced usability and visual appeal of the Zalisha Africa platform, improving user engagement.',
    ],
  },
  {
    company: 'Ona Kenya',
    role: 'Software Developer',
    period: '2018 - 2019',
    technologies: ['Django', 'Onadata', 'REST API', 'Docker'],
    bullets: [
      'Maintained and optimized the Django-based Onadata API, reducing query response times.',
      'Automated deployments with Docker, improving release reliability.',
      'Collaborated with senior engineers to enhance system scalability.',
    ],
  },
];

export const projects: Project[] = [
  {
    number: '01',
    title: 'Project Orion',
    subtitle: 'Production ERP — coffee industry',
    about: 'Farmer management, coffee inventory, sale processing, partial transactions, Excel import/export, automated reports, role-based auth,and complete audit trails.',
    technologies: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Docker', 'React', 'Material UI'],
    url: '#projects',
  },
  {
    number: '02',
    title: 'CEBBA Website',
    subtitle: 'Corporate platform · cebba.ke',
    about: 'Full company website with Home, Services,and About pages — built with React and deployed via Docker.',
    technologies: ['Docker', 'React', 'Material UI'],
    url: '#projects',
  },
  {
    number: '03',
    title: 'GIS Coffee Platform',
    subtitle: 'Spatial suitability analysis',
    about: 'Containerized GIS platform using environmental datasets for AI-powered coffee suitability analysis with spatial reporting.',
    technologies: ['Docker', 'React', 'Django REST', 'Google Earth Engine'],
    url: '#projects',
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL'],
  },
  {
    name: 'Backend',
    skills: ['FastAPI', 'Django', 'Flask', 'SQLAlchemy', 'REST API', 'JWT Authentication'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Material UI', 'Redux Toolkit', 'Vue.js', 'AngularJS'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  },
  {
    name: 'DevOps',
    skills: ['Docker', 'Docker Swarm', 'Nginx', 'GitHub Actions', 'Linux', 'AWS', 'DigitalOcean', 'GCP'],
  },
  {
    name: 'AI & Data',
    skills: ['Pandas', 'OpenPyXL', 'OCR', 'AI Integration', 'Data Analysis', 'GIS'],
  },
];

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
    institution: 'Utawala Academy',
    degree: 'Primary School Education',
    period: '2008 - 2011',
  },
  {
    institution: 'Pioneer School',
    degree: 'Secondary School Education',
    period: '2012 - 2015',
  },
  {
    institution: 'Meru University',
    degree: 'Bachelors in Computer Technology',
    period: '2016 - 2021',
  },
];

// The hero's "Core Stack" slideshow. Each tag cycles through a typewriter
// (type → pause → delete → next) animation.
export const coreStack: readonly string[] = [
  'Python',
  'Javascript/ React',
  'Database/ Mysql / Postgresql',
  'GCP/Digital Ocean/ Docker',
  'Cyber security',
  'AI & Data Science',
];
