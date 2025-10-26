import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';
import Education from './Education';
import Volunteering from './Volunteering';
import Footer from './Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'experience', 'projects', 'skills', 'certifications', 'education', 'volunteering'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] paper-texture">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Volunteering />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;