import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-lightest-slate mb-12 flex items-center">
          Certifications
          <span className="flex-grow h-px bg-gray-300 dark:bg-lightest-navy ml-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-light-navy p-6 rounded-lg border border-transparent hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <cert.icon size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-lightest-slate leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-slate font-mono mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;