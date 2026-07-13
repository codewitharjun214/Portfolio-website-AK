import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESUME_LINK } from '../constants';

const ROLES = [
  'Data Analyst',
  'Power BI Expert',
  'SQL Developer',
  'Python Specialist',
  'Machine Learning Practitioner',
  'Full Stack MERN Developer'
];

const Hero: React.FC = () => {
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIdx((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden py-12 md:py-24">
      {/* Premium Background Mesh Accent */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/10 rounded-full blur-3xl pointer-events-none animate-pulse duration-10000"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl relative z-10"
      >
        <motion.p variants={itemVariants} className="text-accent text-lg font-mono font-bold tracking-widest mb-4 uppercase">
          Hi, my name is
        </motion.p>
        
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-8xl font-black text-gray-900 dark:text-lightest-slate tracking-tight">
          Arjun Kadam
        </motion.h1>
        
        {/* Dynamic Typing/Roles Animation */}
        <motion.div variants={itemVariants} className="h-16 md:h-24 flex items-center mt-3">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-700 dark:text-slate">
            Specializing in{' '}
            <span className="text-accent relative inline-block whitespace-nowrap">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {ROLES[currentRoleIdx]}
                </motion.span>
              </AnimatePresence>
              <span className="ml-1 inline-block w-1.5 h-6 sm:h-10 bg-accent animate-ping absolute bottom-1 right-[-10px]"></span>
            </span>
          </h2>
        </motion.div>

        {/* Headline Optimized for ATS and SEO */}
        <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl font-semibold font-mono text-gray-800 dark:text-light-slate mt-2 border-l-4 border-accent pl-4 py-1">
          Data Analyst | Power BI | SQL | Python | Excel | Machine Learning
        </motion.h3>

        {/* ATS Subheading */}
        <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-xl text-gray-600 dark:text-slate leading-relaxed">
          Turning raw data into actionable business insights through analytics, visualization, and machine learning. Experienced in designing enterprise-grade dashboards, database structuring, predictive modeling, and building accompanying full-stack solutions.
        </motion.p>

        {/* CTA Buttons in a Row */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4 sm:gap-6">
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none text-center bg-accent text-white px-8 py-4 rounded-xl hover:bg-accent/90 transition-all duration-300 font-sans text-lg font-bold shadow-lg shadow-accent/20 border border-transparent"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="flex-1 sm:flex-none text-center border-2 border-accent text-accent hover:bg-accent/10 px-8 py-4 rounded-xl transition-all duration-300 font-sans text-lg font-bold"
          >
            View Projects
          </a>
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto text-center text-gray-700 dark:text-light-slate hover:text-accent hover:bg-gray-100 dark:hover:bg-lightest-navy border border-gray-200 dark:border-lightest-navy px-8 py-4 rounded-xl transition-all duration-300 font-sans text-lg font-bold"
          >
            Contact Me &rarr;
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
