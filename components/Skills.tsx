import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 18
      }
    },
  };

  return (
    <section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-lightest-slate mb-4 flex items-center">
          Technical Skills & Expertise
          <span className="flex-grow h-px bg-gray-300 dark:bg-lightest-navy ml-4"></span>
        </h2>
        <p className="text-gray-600 dark:text-slate mb-12 max-w-2xl text-lg">
          Categorized skillset emphasizing data analytics, visualization, database optimization, and secondary full-stack capabilities.
        </p>

        <div className="space-y-12">
          {SKILL_CATEGORIES.map((catGroup, groupIdx) => (
            <motion.div 
              key={catGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold font-mono text-accent uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                {catGroup.category}
              </h3>
              
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {catGroup.skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white dark:bg-light-navy p-5 rounded-xl flex flex-col items-center justify-center space-y-3 shadow-sm border border-gray-100 dark:border-lightest-navy hover:shadow-lg hover:shadow-accent/5 dark:hover:shadow-accent/10 relative group overflow-hidden transition-all duration-300"
                  >
                    {/* Glowing highlight decoration */}
                    <span className="absolute top-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>

                    <div className="p-3 bg-gray-50 dark:bg-navy rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <skill.icon className="text-3xl transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    
                    <span className="text-gray-800 dark:text-light-slate font-semibold text-center font-sans text-sm">
                      {skill.name}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
