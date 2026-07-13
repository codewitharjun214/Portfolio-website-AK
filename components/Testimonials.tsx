import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const TESTIMONIALS = [
  {
    name: 'Suresh Patil',
    role: 'Operations Director',
    company: 'Sunrise Industries',
    quote: 'Arjun delivered a comprehensive industrial tracking system that fully automated our B2B orders. His combined expertise in relational data structuring and responsive user interface design increased our order processing speeds by nearly 40%. Exceptionally dedicated developer.',
    initials: 'SP'
  },
  {
    name: 'Dr. Vivek Sharma',
    role: 'Project Supervisor / Principal Consultant',
    company: 'Gremio Technologies Pvt. Ltd.',
    quote: 'During his 1-year data science internship, Arjun showed remarkable skills in handling massive, chaotic datasets. His Power BI dashboards, backed by complex DAX measures, offered us immediate operational insights. He is highly capable of advanced analytical engineering.',
    initials: 'VS'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-gray-50/50 dark:bg-navy/20 rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-lightest-navy my-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-lightest-slate mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-accent"></span>
            Professional Commendations
            <span className="h-px w-8 bg-accent"></span>
          </h2>
          <p className="text-gray-600 dark:text-slate max-w-2xl mx-auto text-lg">
            Client feedback and manager reviews validating technical competence, problem-solving speed, and deliverable reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-light-navy p-8 rounded-2xl border border-gray-100 dark:border-lightest-navy shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              {/* Giant elegant background quote symbol */}
              <div className="absolute right-6 top-6 text-accent/5 pointer-events-none">
                <FaQuoteLeft size={70} />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent font-black font-sans text-lg flex items-center justify-center border border-accent/20">
                    {test.initials}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-lightest-slate">
                      {test.name}
                    </h3>
                    <p className="text-xs font-mono font-bold text-gray-500 dark:text-slate uppercase tracking-wider">
                      {test.role} @ {test.company}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-slate leading-relaxed italic text-base">
                  "{test.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
