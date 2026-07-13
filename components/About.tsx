import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const STATS = [
    { label: 'DS Internship', value: '7 Months' },
    { label: 'Degree', value: 'B.E. Comp Eng.' },
    { label: 'BI Dashboards', value: '5+ Built' },
    { label: 'Full Stack Projects', value: '4+ Live' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 dark:text-lightest-slate mb-12 flex items-center"
      >
        About Me
        <span className="flex-grow h-px bg-gray-200 dark:bg-lightest-navy ml-4"></span>
      </motion.h2>
      
      <div className="grid md:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
        {/* Text Content */}
        <motion.div
          className="md:col-span-3 text-gray-700 dark:text-slate space-y-5 text-lg"
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={textItemVariants} className="leading-relaxed">
            I hold a <span className="text-accent font-semibold">Bachelor of Engineering in Computer Engineering</span> and have completed a rigorous <span className="text-accent font-semibold">7 Months Data Science Internship</span>. I am passionate about uncovering patterns, driving decisions, and telling stories through raw data.
          </motion.p>
          
          <motion.p variants={textItemVariants} className="leading-relaxed">
            During my internship, I specialized in data cleansing, pipeline engineering, statistical analysis, and interactive dashboard creation. My core expertise lies in transforming chaotic datasets into clean, actionable intelligence that directly impacts corporate strategy and performance.
          </motion.p>

          <motion.p variants={textItemVariants} className="leading-relaxed">
            In addition to data analytics, I possess a solid background as a <span className="text-accent font-semibold">Full Stack Developer (MERN Stack)</span>. This dual expertise allows me to not only analyze data but also design and build production-grade web interfaces and robust database layers to host, showcase, and collect it.
          </motion.p>

          <motion.div variants={textItemVariants} className="pt-4">
            <p className="font-mono text-sm text-accent font-bold uppercase tracking-wider mb-3">
              Core Analytical & Visualization Focus:
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm text-gray-800 dark:text-light-slate">
              <li className="flex items-center"><span className="text-accent mr-2 font-black">▹</span>Python (Pandas, NumPy)</li>
              <li className="flex items-center"><span className="text-accent mr-2 font-black">▹</span>SQL Query Optimization</li>
              <li className="flex items-center"><span className="text-accent mr-2 font-black">▹</span>Power BI & Excel Dashboards</li>
              <li className="flex items-center"><span className="text-accent mr-2 font-black">▹</span>Exploratory Data Analysis (EDA)</li>
              <li className="flex items-center"><span className="text-accent mr-2 font-black">▹</span>Machine Learning Modeling</li>
              <li className="flex items-center"><span className="text-accent mr-2 font-black">▹</span>Statistical Analysis</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Image & Key Stats Column */}
        <div className="md:col-span-2 space-y-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-lightest-navy group">
            <div className="absolute inset-0 bg-accent/10 opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
            <img
              src="https://i.postimg.cc/MKdm6PsD/Whats-App-Image-2025-09-23-at-21-30-54-15394d08.jpg"
              alt="Arjun Kadam - Data Analyst Portfolio Picture"
              className="rounded-2xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
            />
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-white dark:bg-light-navy p-4 rounded-xl border border-gray-100 dark:border-lightest-navy shadow-sm text-center"
              >
                <p className="text-2xl font-black text-accent">{stat.value}</p>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-slate mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
