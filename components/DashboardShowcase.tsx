import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiX, FiCheckCircle } from 'react-icons/fi';

interface ShowcaseItem {
  title: string;
  category: string;
  description: string;
  image: string;
  kpis: string[];
}

const DASHBOARDS: ShowcaseItem[] = [
  {
    title: 'Financial Revenue & Forecasting Dashboard',
    category: 'Finance / Sales',
    description: 'A comprehensive Power BI model built to map quarterly revenue spikes, forecast sales using moving-average algorithms, and analyze cost-of-goods-sold (COGS) margins across global branches.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    kpis: ['Calculated Net Margins', '3-Month Dynamic Forecasting', 'Multi-Currency ETL Layer']
  },
  {
    title: 'HR Analytics & Employee Attrition Dashboard',
    category: 'People Analytics',
    description: 'An executive Power BI dashboard analyzing 1,470+ workforce records, mapping attrition rates (16.12%), active employees (1,233), overtime impact, and department/role turnover patterns.',
    image: '/src/assets/images/hr_analytics_dashboard_1785179582392.jpg',
    kpis: ['Attrition Rate (16.12%)', '1.47K Employee Records', 'DAX & SQL Pipeline']
  },
  {
    title: 'Operational Supply Chain Optimization Tracker',
    category: 'Operations',
    description: 'A logistics-centric dashboard consolidating fleet transit times, localized warehouse capacity thresholds, and average order cycle durations to detect distribution bottlenecks.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
    kpis: ['Transit Bottle-Neck Detection', 'Warehouse Space Threshold Alerts', 'Lead-Time Minimization']
  }
];

const DashboardShowcase: React.FC = () => {
  const [fullscreenDashboard, setFullscreenDashboard] = useState<ShowcaseItem | null>(null);

  return (
    <section id="showcase" className="py-24 relative bg-gray-50 dark:bg-navy/40 rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-lightest-navy my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DASHBOARDS.map((db, idx) => (
          <motion.div
            key={db.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="bg-white dark:bg-light-navy rounded-2xl overflow-hidden border border-gray-100 dark:border-lightest-navy shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            {/* Thumbnail Image Container */}
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <button
                  onClick={() => setFullscreenDashboard(db)}
                  className="bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
                >
                  <FiMaximize2 size={16} />
                  Inspect Report
                </button>
              </div>
              <img 
                src={db.image} 
                alt={db.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
                {db.category}
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-lightest-slate mt-2 mb-3">
                {db.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-slate leading-relaxed line-clamp-3 mb-4">
                {db.description}
              </p>

              <div className="pt-4 border-t border-gray-100 dark:border-lightest-navy">
                <p className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Key Metrics Built:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {db.kpis.map((kpi) => (
                    <span key={kpi} className="text-[11px] font-mono bg-accent/5 dark:bg-navy text-accent px-2.5 py-1 rounded-full font-semibold">
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal Fullscreen */}
      <AnimatePresence>
        {fullscreenDashboard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFullscreenDashboard(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            ></motion.div>

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white dark:bg-light-navy rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 border border-gray-100 dark:border-lightest-navy"
            >
              {/* Top Banner Control */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-lightest-navy">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
                    {fullscreenDashboard.category} REPORT
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-lightest-slate">
                    {fullscreenDashboard.title}
                  </h3>
                </div>
                <button
                  onClick={() => setFullscreenDashboard(null)}
                  className="p-2 text-gray-500 hover:text-accent rounded-full hover:bg-gray-100 dark:hover:bg-navy transition-all"
                >
                  <FiX size={22} />
                </button>
              </div>

              {/* Full Image */}
              <div className="w-full aspect-video bg-gray-100 overflow-hidden relative border-b border-gray-100 dark:border-lightest-navy">
                <img 
                  src={fullscreenDashboard.image} 
                  alt={fullscreenDashboard.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Report Explainer */}
              <div className="p-6 md:p-8 grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-sm font-mono font-bold text-accent uppercase tracking-wider">
                    Dashboard Objective & Architecture
                  </h4>
                  <p className="text-gray-700 dark:text-slate leading-relaxed text-base">
                    {fullscreenDashboard.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-slate">
                    *Dashboard simulated with enterprise sales datasets. Fully integrated with advanced DAX row-level formatting and security controls for corporate hierarchy access.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-navy p-5 rounded-xl border border-gray-100 dark:border-lightest-navy space-y-3">
                  <h4 className="text-xs font-mono font-bold text-gray-600 dark:text-slate uppercase tracking-wider border-b border-gray-200 dark:border-lightest-navy pb-2">
                    Advanced Engineering Features
                  </h4>
                  <ul className="space-y-2">
                    {fullscreenDashboard.kpis.map((k) => (
                      <li key={k} className="flex items-start text-xs font-mono text-gray-700 dark:text-light-slate">
                        <FiCheckCircle size={14} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DashboardShowcase;
