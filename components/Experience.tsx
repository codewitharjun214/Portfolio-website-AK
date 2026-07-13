import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="experience" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-lightest-slate mb-4 flex items-center">
          Professional Experience
          <span className="flex-grow h-px bg-gray-300 dark:bg-lightest-navy ml-4"></span>
        </h2>
        <p className="text-gray-600 dark:text-slate mb-12 max-w-2xl text-lg">
          My professional history bridging advanced data engineering, enterprise business intelligence, and full-stack software development.
        </p>

        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-gray-200 dark:border-lightest-navy space-y-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-off-white dark:border-navy group-hover:scale-130 transition-transform duration-300 z-10 animate-pulse"></div>

                <div className="bg-white dark:bg-light-navy p-6 rounded-xl shadow-sm border border-gray-100 dark:border-lightest-navy transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 dark:hover:shadow-accent/10 relative overflow-hidden">
                  {/* Premium Hover Borders */}
                  <span className="absolute top-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>

                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-lightest-slate group-hover:text-accent transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium font-mono text-sm mt-1">
                        @ {exp.company}
                      </p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs font-bold rounded-full self-start sm:self-center">
                      {exp.date}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-gray-700 dark:text-slate text-base">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
