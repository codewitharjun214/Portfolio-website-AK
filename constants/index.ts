import { IconType } from 'react-icons';
import { FaJava, FaAws, FaDatabase, FaChartBar, FaChartPie, FaTerminal, FaFileExcel, FaProjectDiagram } from 'react-icons/fa';
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub, SiSpringboot, SiPostman, SiHeroku, SiNetlify, SiTypescript, SiTailwindcss, SiMysql, SiPython, SiNumpy, SiPandas, SiAccenture, SiScikitlearn
} from 'react-icons/si';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubLink: string;
  liveLink: string;
  image: string;
  category: 'analytics' | 'fullstack';
  caseStudyLink?: string;
  highlights?: string[];
}

export interface Experience {
  role: string;
  company: string;
  companyLink: string;
  date: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  icon: IconType;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}

export const RESUME_LINK = 'https://drive.google.com/file/d/1J7qbJOcBuF_cPMv_8yaCs-ABQwq-dqQn/view?usp=drive_link';

export const EXPERIENCES: Experience[] = [
  {
    role: 'Data Science Intern',
    company: 'Gremio Technologies Pvt. Ltd. / Remote',
    companyLink: '#',
    date: 'July 2025 - June 2026 (1 Year)',
    description: [
      'Cleaned, processed, and structured raw datasets containing over 100k+ records using Python, Pandas, and NumPy to ensure database integrity.',
      'Performed exploratory data analysis (EDA) to detect outliers, trends, and key business correlations, delivering insights to stakeholders.',
      'Designed and deployed interactive Power BI dashboards using advanced DAX functions to track crucial sales and operation metrics in real-time.',
      'Built, optimized, and evaluated predictive machine learning models (Regression, Classification, Clustering) achieving high validation accuracy.',
      'Generated data-driven business insights that contributed to a 15% increase in operational efficiency.',
      'Improved data quality and pipeline reliability by creating automated data cleaning scripts.'
    ]
  },
  {
    role: 'Full Stack Developer (Freelance)',
    company: 'Sunrise Industries',
    companyLink: '#',
    date: 'Jan 2026 - Present',
    description: [
      'Designed and implemented a comprehensive industrial management system to automate inventory tracking and order processing.',
      'Developed a real-time dashboard using React and Socket.io for monitoring production metrics and supply chain status.',
      'Optimized database queries in MongoDB, resulting in a 40% improvement in data retrieval speeds for large inventory datasets.',
      'Integrated secure payment gateways and automated invoice generation for B2B transactions.'
    ]
  },
  {
    role: 'Full Stack MERN Intern',
    company: 'Sanyu Infotech Pvt. Ltd.',
    companyLink: '#',
    date: 'May 2025 - July 2025',
    description: [
      'Developed full-stack applications using the MERN stack (MongoDB, Express, React, Node.js).',
      'Built and tested robust REST APIs using Postman and Thunder Client.',
      'Implemented secure JWT-based authentication and role-based access control.',
      'Worked in an Agile development environment, contributing to daily stand-ups and sprint planning.'
    ]
  }
];

export const PROJECTS: Project[] = [
  // Featured Data Analytics Projects
  {
    title: 'End-to-End HR Analytics Project – Employee Attrition Dashboard',
    description: 'Comprehensive workforce analytics solution analyzing employee attrition drivers across departments, job roles, age groups, and overtime. Built with Python, SQL, Power BI, DAX, and Exploratory Data Analysis (EDA).',
    tech: ['Python', 'Pandas', 'SQL', 'Power BI', 'DAX', 'EDA', 'Business Intelligence'],
    githubLink: 'https://github.com/codewitharjun214/HR-Analytics-End-to-End-Project',
    liveLink: 'https://github.com/codewitharjun214/HR-Analytics-End-to-End-Project',
    caseStudyLink: '#hr-analytics-case-study',
    image: '/src/assets/images/hr_analytics_dashboard_1785179582392.jpg',
    category: 'analytics',
    highlights: [
      'Cleaned, transformed, and queried 1,470+ workforce employee records using Python (Pandas) and SQL.',
      'Calculated key HR metrics using DAX: Attrition Rate (16.12%), Active Employees (1,233), Left (237), Avg Age (36.92), and Avg Income ($6.50K).',
      'Conducted Exploratory Data Analysis (EDA) uncovering key turnover drivers in R&D, Sales Executives, 25-35 age bracket, and Overtime staff.',
      'Designed a high-fidelity Power BI dashboard featuring dynamic slicing by Department, Gender, and Education Field.',
      'Formulated data-driven workforce retention strategies to mitigate costly organizational turnover.'
    ]
  },
  {
    title: 'Loan Approval Prediction & Exploratory Data Analysis',
    description: 'Analyze loan applicant data using Python, Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn. Includes data cleaning, EDA, feature engineering, visualization, and a machine learning model for loan approval prediction.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'EDA', 'Machine Learning'],
    githubLink: 'https://github.com/codewitharjun214/Loan-Analysis-Project',
    liveLink: 'https://github.com/codewitharjun214/Loan-Analysis-Project',
    caseStudyLink: '#loan-case-study',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    category: 'analytics',
    highlights: [
      'Processed raw credit datasets by treating critical missing values and eliminating extreme outliers.',
      'Conducted extensive Exploratory Data Analysis (EDA) using Matplotlib and Seaborn to visualize correlations.',
      'Engineered advanced features such as debt-to-income ratios and credit history weights.',
      'Trained and optimized classification models (Random Forest, XGBoost) using cross-validation.',
      'Developed automated python scripts that cut manual dataset cleaning and analysis time by 70%.'
    ]
  },
  {
    title: 'Pizza Sales Analytics Dashboard',
    description: 'Interactive Power BI dashboard with KPI cards, DAX measures, sales trends, category analysis, top-selling products, and business insights. Built using Power BI, Excel, and DAX.',
    tech: ['Power BI', 'Excel', 'DAX', 'Data Visualization', 'ETL', 'Business Intelligence'],
    githubLink: 'https://github.com/codewitharjun214/Pizza-Sales-PowerBI-Project',
    liveLink: 'https://github.com/codewitharjun214/Pizza-Sales-PowerBI-Project',
    caseStudyLink: '#pizza-case-study',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    category: 'analytics',
    highlights: [
      'Designed high-fidelity, interactive multi-page dashboards featuring dynamic filters and drill-downs.',
      'Wrote custom advanced DAX measures for complex variables (AOV, Pizza Sales per Order).',
      'Engineered automated ETL pipelines in Power Query to clean and structure transaction logs.',
      'Identified seasonal peaks and day-of-week sales trends to optimize store staffing.',
      'Isolated low-performing product lines to enable targeted promotions and reduce food waste.'
    ]
  },
  {
    title: 'Employee Management Database System',
    description: 'Relational database project developed using MySQL. Includes normalized database design, CRUD operations, Joins, Views, Stored Procedures, Subqueries, and SQL optimization.',
    tech: ['MySQL', 'SQL', 'Relational Database', 'Query Optimization', 'Database Normalization', 'Stored Procedures'],
    githubLink: 'https://github.com/codewitharjun214/Employee-Management-System-Sql',
    liveLink: 'https://github.com/codewitharjun214/Employee-Management-System-Sql',
    caseStudyLink: '#employee-case-study',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop',
    category: 'analytics',
    highlights: [
      'Designed a normalized relational database schema (3NF) to minimize data redundancy.',
      'Wrote high-efficiency SQL queries utilizing multi-table JOINs, subqueries, and window functions.',
      'Optimized query execution paths by creating indexes and structuring queries efficiently.',
      'Developed triggers and stored procedures to automate job transfers and historical logs.',
      'Generated unified HR analytics reports on salary distributions and departmental headcount.'
    ]
  },
  // Existing MERN projects
  {
    title: 'Movie Management System',
    description: 'A full-stack movie management platform with Admin and User roles. Admins can manage the database while users can browse and search. Integrated TMDB API and JWT authentication.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    githubLink: 'https://github.com/codewitharjun214/mern-movies-app',
    liveLink: 'https://akmoviesapp.netlify.app/',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop',
    category: 'fullstack'
  },
  {
    title: 'KisanBazaar - Smart Farmer Marketplace',
    description: 'A marketplace connecting farmers directly with consumers. Features secure authentication, product listings, and API integrations for real-world problem solving.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    githubLink: 'https://github.com/codewitharjun214/KisanBazaar-Smart-Farmer-Marketplace',
    liveLink: 'https://github.com/codewitharjun214/KisanBazaar-Smart-Farmer-Marketplace',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop',
    category: 'fullstack'
  },
  {
    title: 'MFitness Gym Website',
    description: 'A highly responsive gym website designed with a focus on premium UI/UX, high performance, and seamless mobile responsiveness.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    githubLink: 'https://github.com/codewitharjun214',
    liveLink: 'https://github.com/codewitharjun214',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    category: 'fullstack'
  },
  {
    title: 'Sunrise Industries',
    description: 'A specialized industrial management platform designed for Sunrise Industries to streamline operations, track inventory, and manage client orders with real-time updates.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubLink: 'https://github.com/codewitharjun214',
    liveLink: 'https://github.com/codewitharjun214',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    category: 'fullstack'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Tata Data Visualization', issuer: 'Tata Group / Forage', icon: FaChartPie },
  { name: 'Data Science Internship Certificate', issuer: 'Gremio Technologies Pvt. Ltd.', icon: FaProjectDiagram },
  { name: 'React', issuer: 'Lets Upgrade', icon: SiReact },
  { name: 'MongoDB for Developers', issuer: 'MongoDB University', icon: SiMongodb },
  { name: 'AWS Solution Architecture', issuer: 'AWS Training', icon: FaAws },
  { name: 'Developer Job Simulation', issuer: 'Accenture / Forage', icon: SiAccenture },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'SQL', icon: SiMysql },
      { name: 'JavaScript', icon: SiJavascript }
    ]
  },
  {
    category: 'Analytics',
    skills: [
      { name: 'EDA', icon: FaChartBar },
      { name: 'Data Cleaning', icon: FaDatabase },
      { name: 'Data Wrangling', icon: FaTerminal },
      { name: 'Statistical Analysis', icon: FaChartPie }
    ]
  },
  {
    category: 'Machine Learning',
    skills: [
      { name: 'Regression', icon: SiScikitlearn },
      { name: 'Classification', icon: SiScikitlearn },
      { name: 'Clustering', icon: SiScikitlearn }
    ]
  },
  {
    category: 'Visualization',
    skills: [
      { name: 'Power BI', icon: FaChartBar },
      { name: 'Excel', icon: FaFileExcel },
      { name: 'DAX', icon: FaChartPie },
      { name: 'Matplotlib', icon: SiPython },
      { name: 'Seaborn', icon: SiPython }
    ]
  },
  {
    category: 'Libraries',
    skills: [
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Scikit-Learn', icon: SiScikitlearn }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb }
    ]
  },
  {
    category: 'Developer Skills',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: FaTerminal }
    ]
  }
];

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/codewitharjun214',
  linkedin: 'https://www.linkedin.com/in/kadamarjun214/',
  email: 'kadamarjun171@gmail.com',
  phone: '+918261053320',
};
