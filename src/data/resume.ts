export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  badges?: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  start: string;
  end: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

/** Work history — newest first. Shown on /work */
export const experience: Experience[] = [
  {
    role: 'Quality Assurance Engineer Intern',
    company: 'REC',
    companyUrl: 'https://www.recgroup.com/en',
    location: 'Tuas, Singapore',
    start: 'Sep 2025',
    end: 'Dec 2025',
    current: false,
    summary: 'Identify sources of defects in solar cell production and implement quality control measures.',
    bullets: [
      'Developed control plans and reduce defect rates, as well as develop process flow for material salvaging to increase line output',
      'Assisted in the clean room to manage line operations, helping to update quality control procedures and to verify data from production line',
      'Performed product-failure analysis with a Customer Quality Engineer using Weibull analysis; developed field data collection method to verify risk of certain failure modes',
    ],
    badges: ['Microsoft Excel', 'Quality Assurance'],
  },
  {role: 'STEAMunity Mentor',
    company: 'Singapore University of Engineering and Design',
    companyUrl: 'https://www.sutd.edu.sg/',
    location: 'Changi, Singapore',
    start: 'Mar 2025',
    end: 'Apr 2025',
    current: false,
    summary: 'Mentored team of 6 students ages 15-17 through design thinking process.',
    bullets: [
      'Guided 8 secondary, JC and polytechnic students through design thinking to develop a prototype aimed at increasing airflow in HDB units',
      'Work in partnership with Housing Development Board (HDB) to evaluate feasability of proposed solutions',
    ],
    badges: ['Mentorship', 'Design Thinking', 'Leadership'],
  }
];

/** Smaller/older roles — rendered as compact rows under the main timeline */
export const earlierRoles: { role: string; company: string; start: string; end: string }[] = [
  { role: 'Engineering Intern', company: 'Some Company', start: '2020', end: '2021' },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Engineering, Honours',
    field: 'Engineering Product Design (Mechanical Engineering Track)',
    school: 'Singapore University of Engineering and Design',
    start: '2023',
    end: 'present',
  },
  {
    degree: 'Exchange Program',
    field: 'Mechanical Engineering',
    school: 'National Cheng Kung University',
    start: 'Feb 2026',
    end: 'Jun 2026',
  },
  {
    degree: 'International Baccalaureate Diploma',
    field: '',
    school: 'Antwerp International School',
    start: '2019',
    end: '2023',
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['Python', 'HTML'],
  },
  {
    title: 'Platforms & Tools',
    skills: ['Fusion 360', 'Ansys', 'Microsoft Office'],
  },
  {
    title: 'Interests',
    skills: ['Product design', 'Electronic music'],
  },
];

/** Words typed out one character at a time in the hero */
export const typingRoles = [
  'software engineer',
  'occasional photographer',
  'weekend hiker',
  'coffee enthusiast',
];
