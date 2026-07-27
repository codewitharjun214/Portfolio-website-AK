import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSearch, FiBookOpen, FiX, FiCheckCircle } from 'react-icons/fi';
import { PROJECTS, Project } from '../constants';

interface CaseStudyContent {
  title: string;
  problem: string;
  approach: string[];
  results: string[];
  impact: string;
}

const CASE_STUDIES: Record<string, CaseStudyContent> = {
  'End-to-End HR Analytics Project – Employee Attrition Dashboard': {
    title: 'End-to-End HR Analytics Project – Employee Attrition Dashboard',
    problem: 'High employee turnover creates significant financial loss and operational inefficiency. The enterprise required a unified HR analytics system to analyze employee attrition drivers across departments, job roles, age demographics, and overtime commitments.',
    approach: [
      'Executed Business Understanding and Data Processing on 1,470+ employee records using Python (Pandas) and SQL.',
      'Conducted Exploratory Data Analysis (EDA) to evaluate correlations between turnover, compensation, and work-life balance factors.',
      'Built custom DAX measures in Power BI for core workforce KPIs: Attrition Rate (16.12%), Active Workforce (1,233), Employees Left (237), and Avg Income ($6.50K).',
      'Designed an executive dashboard featuring dynamic slicers by Department, Gender, and Education Field along with job-role and overtime attrition breakdown charts.'
    ],
    results: [
      'Identified Research & Development (133 left) and Sales (92 left) as top attrition departments.',
      'Isolated Sales Executives (57) and Laboratory Technicians (62) as high-risk job roles.',
      'Discovered that employees working Overtime and those aged 25-35 experienced significantly higher turnover rates.'
    ],
    impact: 'Equips executive HR leaders with actionable data insights to launch targeted retention initiatives, improve overtime balancing, and cut costly employee replacement cycles.'
  },
  'Loan Approval Prediction & Exploratory Data Analysis': {
    title: 'Loan Approval Prediction & Exploratory Data Analysis',
    problem: 'Financial institutions lose millions annually due to default loans, while manual vetting delays approval cycles. The goal was to build an automated, highly precise classification pipeline to predict loan defaults and evaluate customer creditworthiness.',
    approach: [
      'Processed raw credit datasets by treating critical missing values (KNN Imputation) and eliminating extreme outliers.',
      'Conducted Extensive Exploratory Data Analysis (EDA) using Matplotlib and Seaborn to visualize feature correlations, distribution skewedness, and demographic patterns.',
      'Engineered advanced features such as debt-to-income ratios and credit history weighting.',
      'Trained and evaluated multiple classification models (Logistic Regression, Random Forest, and XGBoost) utilizing cross-validation and GridSearch hyperparameter tuning.'
    ],
    results: [
      'Engineered a highly precise XGBoost classifier achieving a 92% Recall score to minimize default risks.',
      'Identified critical risk indicators (credit history and loan amount) that represent 65% of predictive importance.',
      'Developed automated python scripts that cut manual dataset analysis time by 70%.'
    ],
    impact: 'Empowers finance managers to safely automate low-risk applications, speeding up credit delivery by 40% while keeping default probability constrained under tight parameters.'
  },
  'Pizza Sales Analytics Dashboard': {
    title: 'Pizza Sales Analytics Dashboard',
    problem: 'An international restaurant chain lacked direct, unified visibility into customer purchase behaviors, seasonal sales spikes, and daily peaks, preventing optimal staff scheduling and inventory planning.',
    approach: [
      'Performed ETL operations in Power Query to merge sales transactions, customer categories, and store logistics.',
      'Wrote custom DAX measures for complex variables (Average Order Value, Pizza Sales per Order, and Daily Active Trends).',
      'Engineered highly interactive dashboards featuring drill-through tables, filter sliders, and dynamically updating KPI cards.'
    ],
    results: [
      'Created sales trend visualizations isolating Fridays and Saturdays as peak periods contributing to 40% of weekly revenue.',
      'Identified Top-performing (Classic Deluxe) and Under-performing pizza categories to enable targeted dynamic pricing.',
      'Constructed predictive monthly forecasting cards using Power BI internal intelligence engines.'
    ],
    impact: 'Provides management with immediate, visual answers to operational performance, reducing inventory wastage by 18% and aligning kitchen staff shifts to peak demand hours.'
  },
  'Employee Management Database System': {
    title: 'Employee Management Database System',
    problem: 'A rapidly scaling business was tracking HR records, department budgets, and multi-team projects using fragmented spreadsheets, creating massive redundancy and query bottlenecks.',
    approach: [
      'Designed a normalized relational database schema (3NF) containing tables for Employees, Departments, Projects, and Salaries.',
      'Wrote high-efficiency SQL queries utilizing multi-table JOINs, subqueries, and window functions (e.g., DENSE_RANK, LEAD, LAG) for executive compensation tracking.',
      'Optimized query execution paths by creating index maps on critical search keys.'
    ],
    results: [
      'Reduced database search query times by 55% through optimized indexation and query structures.',
      'Successfully created triggers to automate historical wage tracking and job role transfers without manual administrative overhead.',
      'Generated instant HR metrics reports covering average tenure, gender diversity, and budget consumption per department.'
    ],
    impact: 'Ensured a unified single-source-of-truth for HR and operational leadership, allowing secure, fast access to salary planning and project staffing audits.'
  }
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'analytics' | 'fullstack'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyContent | null>(null);

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const analyticsProjects = useMemo(() => PROJECTS.filter(p => p.category === 'analytics'), []);
  const fullstackProjects = useMemo(() => PROJECTS.filter(p => p.category === 'fullstack'), []);

  return (
    <section id="projects" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-lightest-slate mb-4 flex items-center">
              Featured Portfolio Projects
              <span className="flex-grow h-px bg-gray-300 dark:bg-lightest-navy ml-4"></span>
            </h2>
            <p className="text-gray-600 dark:text-slate max-w-2xl text-lg">
              Showcasing data engineering pipeline, machine learning modeling, dashboard engineering, and full-stack MERN builds.
            </p>
          </div>
        </div>

        {/* Filters and Search Bar Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-10">
          <div className="flex bg-gray-100 dark:bg-light-navy p-1 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-accent text-white shadow-md'
                  : 'text-gray-600 dark:text-slate hover:text-accent'
              }`}
            >
              All Builds ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('analytics')}
              className={`flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeFilter === 'analytics'
                  ? 'bg-accent text-white shadow-md'
                  : 'text-gray-600 dark:text-slate hover:text-accent'
              }`}
            >
              Data Analytics ({analyticsProjects.length})
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeFilter === 'fullstack'
                  ? 'bg-accent text-white shadow-md'
                  : 'text-gray-600 dark:text-slate hover:text-accent'
              }`}
            >
              MERN Full Stack ({fullstackProjects.length})
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 dark:bg-light-navy pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-lightest-navy focus:outline-none focus:border-accent text-gray-900 dark:text-lightest-slate transition-colors text-sm"
            />
          </div>
        </div>

        {/* Projects Grid Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-light-navy rounded-2xl shadow-sm border border-gray-100 dark:border-lightest-navy flex flex-col transition-all duration-300 group overflow-hidden relative"
              >
                {/* Project Tag */}
                <div className="absolute top-4 left-4 z-20 bg-accent/90 backdrop-blur-md text-white font-mono text-xs px-3 py-1 rounded-full font-bold">
                  {project.category === 'analytics' ? 'Data Analytics' : 'MERN Full Stack'}
                </div>

                <div className="h-52 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                    <p className="text-white text-xs font-mono font-bold">View details & links below</p>
                  </div>
                  <img 
                    src={project.image} 
                    alt={`Screenshot and visualization thumbnail of ${project.title}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-lightest-slate group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-slate text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights Section */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-5 border-t border-dashed border-gray-100 dark:border-lightest-navy pt-4">
                      <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-wider mb-2.5">Key Highlights</h4>
                      <ul className="space-y-1.5">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-xs text-gray-600 dark:text-slate">
                            <span className="text-accent mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"></span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <ul className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                    {project.tech.map((t) => (
                      <li key={t} className="px-2.5 py-1 bg-gray-50 dark:bg-navy rounded text-gray-600 dark:text-light-slate font-medium">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-lightest-navy">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-50 dark:bg-navy border border-gray-200 dark:border-lightest-navy py-2.5 rounded-xl text-xs font-bold text-gray-700 dark:text-light-slate hover:bg-accent hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      <FiGithub size={16} />
                      View GitHub Repository
                    </a>

                    {project.category === 'analytics' ? (
                      <button 
                        onClick={() => {
                          if (CASE_STUDIES[project.title]) {
                            setSelectedCaseStudy(CASE_STUDIES[project.title]);
                          } else {
                            setSelectedCaseStudy({
                              title: project.title,
                              problem: 'Case study is currently in progress. The detailed analytical report containing deep business insight, methodology metrics, and execution breakdowns is currently being drafted.',
                              approach: [
                                'Analyzing datasets and designing appropriate model benchmarks.',
                                'Documenting performance improvements and critical feature selections.',
                                'Preparing clean interactive visualization reports and pipeline guides.'
                              ],
                              results: [
                                'Documentation drafting in progress.',
                                'Interactive report optimization in progress.'
                              ],
                              impact: 'Check back soon, or explore the fully-documented GitHub repository in the meantime!'
                            });
                          }
                        }}
                        className="flex-1 flex items-center justify-center gap-2 bg-accent/10 border border-accent/20 py-2.5 rounded-xl text-xs font-bold text-accent hover:bg-accent hover:text-white hover:border-transparent transition-all duration-300"
                      >
                        <FiBookOpen size={16} />
                        View Case Study
                      </button>
                    ) : (
                      project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex-1 flex items-center justify-center gap-2 bg-gray-50 dark:bg-navy border border-gray-200 dark:border-lightest-navy py-2.5 rounded-xl text-xs font-bold text-gray-700 dark:text-light-slate hover:bg-accent hover:text-white hover:border-transparent transition-all duration-300"
                        >
                          <FiExternalLink size={16} />
                          Live Demo
                        </a>
                      )
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Structured Case Study Modal Lightbox */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white dark:bg-light-navy rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl relative z-10 p-6 md:p-8 border border-gray-100 dark:border-lightest-navy text-left"
            >
              <button 
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-5 right-5 text-gray-500 hover:text-accent p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy transition-colors duration-300"
              >
                <FiX size={20} />
              </button>

              <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-lightest-slate pr-8 mb-6 border-b border-gray-100 dark:border-lightest-navy pb-4">
                {selectedCaseStudy.title} <span className="text-accent text-sm font-mono block mt-1">Analytical Case Study</span>
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-mono font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                    <FiCheckCircle size={16} />
                    The Problem
                  </h4>
                  <p className="text-gray-700 dark:text-slate text-base leading-relaxed">
                    {selectedCaseStudy.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-mono font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                    <FiCheckCircle size={16} />
                    My Methodology & Approach
                  </h4>
                  <ul className="space-y-2">
                    {selectedCaseStudy.approach.map((step, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-slate">
                        <span className="text-accent mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"></span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-mono font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                    <FiCheckCircle size={16} />
                    Quantitative Results
                  </h4>
                  <ul className="space-y-2">
                    {selectedCaseStudy.results.map((res, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-slate font-medium">
                        <span className="text-accent mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"></span>
                        <span className="leading-relaxed">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-accent/5 dark:bg-navy rounded-xl border border-accent/10">
                  <h4 className="text-sm font-mono font-bold text-accent uppercase tracking-wider mb-1">
                    Business / Stakeholder Impact
                  </h4>
                  <p className="text-gray-800 dark:text-light-slate text-sm font-medium leading-relaxed">
                    {selectedCaseStudy.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
