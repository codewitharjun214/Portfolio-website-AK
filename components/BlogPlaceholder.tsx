import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiChevronRight } from 'react-icons/fi';

const POSTS = [
  {
    title: 'Exploratory Data Analysis: The Core Foundation of High-Recall ML Models',
    date: 'June 2026',
    readTime: '6 min read',
    snippet: 'Why diving straight into model training leads to poor generalizations, and how detailed outlier mitigation, KNN imputation, and feature engineering save validation cycles.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Optimizing Complex SQL Queries: Subqueries vs. Window Functions',
    date: 'May 2026',
    readTime: '8 min read',
    snippet: 'A deep comparative analysis of execution times under high table volumes, outlining the power of index mappings, partitioning, and the DENSE_RANK function.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop'
  }
];

const BlogPlaceholder: React.FC = () => {
  return (
    <section id="blog" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-lightest-slate mb-4 flex items-center">
              Insights & Technical Writing
              <span className="flex-grow h-px bg-gray-300 dark:bg-lightest-navy ml-4"></span>
            </h2>
            <p className="text-gray-600 dark:text-slate max-w-xl text-lg">
              Drafting research-driven insights covering machine learning, BI dashboard design, and backend efficiency.
            </p>
          </div>
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-mono text-xs font-bold rounded-full border border-accent/20 h-fit self-start md:self-end">
            Articles Coming Soon
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {POSTS.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-light-navy rounded-2xl border border-gray-100 dark:border-lightest-navy shadow-sm hover:shadow-xl overflow-hidden group transition-all duration-300 flex flex-col"
            >
              <div className="h-44 overflow-hidden relative">
                <div className="absolute inset-0 bg-accent/10 mix-blend-multiply opacity-40"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-mono text-gray-500 dark:text-slate mb-3">
                  <span className="flex items-center gap-1">
                    <FiCalendar />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-lightest-slate mb-2 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-slate leading-relaxed mb-6">
                  {post.snippet}
                </p>

                <div className="flex items-center text-accent font-mono text-xs font-bold gap-1 mt-auto group-hover:underline">
                  Read Article (Coming Soon)
                  <FiChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BlogPlaceholder;
