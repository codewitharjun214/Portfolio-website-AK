import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import DashboardShowcase from './components/DashboardShowcase';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import BlogPlaceholder from './components/BlogPlaceholder';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { ScrollProgressBar, BackToTopButton } from './components/ScrollWidgets';

const MainContent: React.FC = () => (
  <div className="bg-off-white dark:bg-navy text-gray-700 dark:text-light-slate font-sans transition-colors duration-500 min-h-screen relative bg-mesh">
    {/* Global Smooth Navigation Elements */}
    <ScrollProgressBar />
    <Header />
    
    <main className="px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 mx-auto relative z-10 max-w-7xl">
      <Hero />
      <About />
      <Services />
      <Experience />
      <Projects />
      <DashboardShowcase />
      <Skills />
      <Achievements />
      <Certifications />
      <Testimonials />
      <BlogPlaceholder />
      <Contact />
    </main>
    
    <Footer />
    <BackToTopButton />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
