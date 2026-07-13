import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaChartPie, FaChartLine, FaDatabase, FaTerminal, FaProjectDiagram, FaNetworkWired, FaCode } from 'react-icons/fa';

const SERVICES = [
  {
    title: 'Data Analysis',
    description: 'Performing multi-variate statistical tests, customer segmentation, and exploratory analysis to isolate revenue triggers and efficiency gaps.',
    icon: FaChartBar
  },
  {
    title: 'Dashboard Development',
    description: 'Constructing dynamic visual reporting maps using modern layout hierarchies, user-experience flows, and targeted visual grids.',
    icon: FaChartPie
  },
  {
    title: 'Power BI Reports',
    description: 'Drafting pixel-perfect Power BI reports using optimized DAX formulas, high-performance star schemas, and row-level data access filters.',
    icon: FaChartLine
  },
  {
    title: 'SQL Query Optimization',
    description: 'Writing complex relational database logic, multi-table indexing systems, and indexing strategies to compress execution times under heavy data load.',
    icon: FaDatabase
  },
  {
    title: 'Data Cleaning',
    description: 'Automating multi-step ETL pipelines, cleansing null records, rectifying schema outliers, and standardizing categorical fields using Python and SQL.',
    icon: FaTerminal
  },
  {
    title: 'Business Intelligence',
    description: 'Aligning operations metrics directly with corporate strategy dashboards, enabling continuous operational audits and predictive performance monitoring.',
    icon: FaProjectDiagram
  },
  {
    title: 'Machine Learning Models',
    description: 'Engineering high-accuracy regression, classification, and customer clustering algorithms utilizing Scikit-Learn pipelines.',
    icon: FaNetworkWired
  },
  {
    title: 'Full Stack Development',
    description: 'Architecting customized web data interfaces, secure databases, and dashboard sites using the MERN stack (React, Express, Node, MongoDB).',
    icon: FaCode
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-lightest-slate mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-accent"></span>
            Professional Services
            <span className="h-px w-8 bg-accent"></span>
          </h2>
          <p className="text-gray-600 dark:text-slate max-w-2xl mx-auto text-lg">
            High-impact data consulting, analytical engineering, and custom software delivery tailored for major enterprise consulting firms and tech ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-light-navy p-6 rounded-2xl border border-gray-100 dark:border-lightest-navy shadow-sm hover:shadow-xl hover:shadow-accent/5 dark:hover:shadow-accent/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Premium Top Indicator */}
              <span className="absolute top-0 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full"></span>

              <div className="p-3 bg-accent/10 rounded-xl text-accent w-fit mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <srv.icon size={24} />
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-lightest-slate mb-2">
                {srv.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-slate leading-relaxed">
                {srv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
