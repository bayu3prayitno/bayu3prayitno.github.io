import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, MessageCircle, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalData, socialLinks, jobTitles } from '../data/portfolioData';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { isDarkMode: isDark } = useTheme();
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJobIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = personalData.resume;
    link.download = 'CV_ats.pdf';
    link.click();
  };

  return (
    <section id="home" className={`min-h-screen flex items-center pt-16 ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-teal-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="mb-6">
              <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {personalData.name}
                </span>
              </h1>
              <p className={`text-xl md:text-2xl ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <span className="inline-block min-w-0 transition-all duration-500 ease-in-out">
                  {jobTitles[currentJobIndex]}
                </span>
              </p>
            </div>
            
            <p className={`text-lg mb-8 max-w-2xl ${
              isDark ? 'text-gray-400' : 'text-gray-700'
            }`}>
              {personalData.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={downloadCV}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </button>
              
              <button
                onClick={() => scrollToSection('projects')}
                className={`inline-flex items-center px-6 py-3 rounded-lg border-2 transition-colors duration-200 font-medium ${
                  isDark 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Eye size={20} className="mr-2" />
                View Projects
              </button>
              
              <button
                onClick={() => window.open(socialLinks.email)}
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium"
              >
                <Mail size={20} className="mr-2" />
                Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className={`w-80 h-80 rounded-full overflow-hidden border-8 ${
                isDark ? 'border-gray-700' : 'border-white'
              } shadow-2xl`}>
                <img
                  src={personalData.image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.target.src = `https://ui-avatars.com/api/?name=${personalData.name}&size=400&background=3b82f6&color=ffffff`;
                  }}
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full blur opacity-20 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
