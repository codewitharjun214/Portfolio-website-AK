import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RESUME_LINK } from '../constants';
import { useTheme } from '../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-off-white/90 dark:bg-navy/90 shadow-lg backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-6 sm:px-12 flex justify-between items-center">
        {/* Brand/Logo Area - Kept blank as requested */}
        <div className="w-10 h-10 flex items-center justify-center">
          <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="block w-full h-full">
            {/* Blank */}
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="relative text-gray-800 dark:text-light-slate hover:text-accent transition-colors duration-300 font-mono text-sm tracking-wide after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-accent after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.name}
            </a>
          ))}
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent text-accent px-5 py-2 rounded-md hover:bg-accent/10 transition-all duration-300 font-mono text-sm font-medium"
          >
            Resume
          </a>
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle theme" 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-lightest-navy text-gray-800 dark:text-light-slate hover:text-accent transition-all duration-300"
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle theme" 
            className="p-2 text-gray-800 dark:text-light-slate hover:text-accent transition-colors duration-300"
          >
            {theme === 'light' ? <FiMoon size={22} /> : <FiSun size={22} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-accent focus:outline-none p-1"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          className="md:hidden bg-off-white dark:bg-light-navy fixed top-0 right-0 h-screen w-full sm:w-80 shadow-2xl z-50 backdrop-blur-xl flex flex-col"
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-lightest-navy">
             <span className="text-xl font-bold text-accent font-mono">Navigation</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-accent p-2">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-grow space-y-8 px-6">
            {NAV_LINKS.map((link, idx) => (
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-2xl text-gray-900 dark:text-lightest-slate hover:text-accent transition-colors duration-300 font-mono font-medium"
              >
                 {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.1 }}
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent text-accent px-8 py-4 text-xl rounded-md hover:bg-accent/10 transition-colors duration-300 font-mono w-full text-center mt-4"
            >
              Resume
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;