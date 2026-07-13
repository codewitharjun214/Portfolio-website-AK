import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCode, FaDatabase, FaChartLine, FaBrain, FaFileAlt } from 'react-icons/fa';

const ACHIEVEMENTS = [
  {
    title: 'Data Science Intern',
    metric: '1 Year',
    detail: 'Completed a rigorous 1-year data engineering and analytical modeling internship at Gremio Technologies.',
    icon: FaAward
  },
  {
    title: 'Advanced Python scripts',
    metric: '10k+ Lines',
    detail: 'Authored robust automated data pipelines, cleaning algorithms, and modeling loops.',
    icon: FaCode
  },
  {
    title: 'Optimized SQL Databases',
    metric: '50+ Queries',
    detail: 'Wrote high-efficiency queries, window functions, and Normalized structures (MySQL).',
    icon: FaDatabase
  },
  {
    title: 'Enterprise Dashboards',
    metric: '5+ Built',
    detail: 'Constructed custom Power BI dashboards utilizing advanced DAX modeling and ETL layers.',
    icon: FaChartLine
  },
  {
    title: 'Machine Learning Models',
    metric: '92% recall',
    detail: 'Engineered predictive pipelines with high performance on unseen test datasets.',
    icon: FaBrain
  },
  {
    title: 'Analytical Case Studies',
    metric: '3 Complete',
    detail: 'Documented and validated end-to-end problems, methodologies, and business impacts.',
    icon: FaFileAlt
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-accent/5 via-transparent to-transparent rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-lightest-navy my-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-lightest-slate mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-accent"></span>
            Professional Achievements
            <span className="h-px w-8 bg-accent"></span>
          </h2>
          <p className="text-gray-600 dark:text-slate max-w-2xl mx-auto text-lg">
            A metric-driven summary of my technical deliverables, analytical accuracy, and project scope.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-light-navy p-6 rounded-2xl border border-gray-100 dark:border-lightest-navy shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-3 bg-accent/10 rounded-xl text-accent flex-shrink-0 mt-1">
                <ach.icon size={22} />
              </div>

              <div>
                <p className="text-3xl font-black text-accent tracking-tight">
                  {ach.metric}
                </p>
                <h3 className="text-base font-bold text-gray-900 dark:text-lightest-slate mt-1 mb-1">
                  {ach.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate leading-relaxed">
                  {ach.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
