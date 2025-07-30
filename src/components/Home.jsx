import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, MessageCircle, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import MagneticButton from './MagneticButton';
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
    link.click();
  };

  return (
    <section id="home" className={`min-h-screen flex items-center pt-16 ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-teal-50'
    } relative overflow-hidden`}>
      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left relative z-10"
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <AnimatedText
                  text="Hi, I'm"
                  className={`text-4xl md:text-6xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={`text-4xl md:text-6xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {personalData.name}
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className={`text-xl md:text-2xl ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <motion.span 
                  key={currentJobIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block min-w-0"
                >
                  {jobTitles[currentJobIndex]}
                </motion.span>
              </motion.p>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className={`text-lg mb-8 max-w-2xl ${
              isDark ? 'text-gray-400' : 'text-gray-700'
            }`}>
              {personalData.bio}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <MagneticButton
                onClick={downloadCV}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </MagneticButton>
              
              <MagneticButton
                onClick={() => scrollToSection('projects')}
                className={`inline-flex items-center px-6 py-3 rounded-lg border-2 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg ${
                  isDark 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Eye size={20} className="mr-2" />
                View Projects
              </MagneticButton>
              
              <MagneticButton
                onClick={() => window.open(socialLinks.email)}
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg"
              >
                <Mail size={20} className="mr-2" />
                Contact Me
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative z-10"
          >
            <div className="relative">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`w-80 h-80 rounded-full overflow-hidden border-8 ${
                isDark ? 'border-gray-700' : 'border-white'
              } shadow-2xl relative`}
              >
                {/* Static border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 p-1">
                  <div className={`w-full h-full rounded-full ${
                    isDark ? 'bg-gray-900' : 'bg-white'
                  }`} />
                </div>
                <img
                  src={personalData.image}
                  alt="Profile"
                  className="w-full h-full object-cover relative z-10 rounded-full"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.target.src = `https://ui-avatars.com/api/?name=${personalData.name}&size=400&background=3b82f6&color=ffffff`;
                  }}
                />
              </motion.div>
              
              {/* Static elements around profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg" />
              
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg" />
              
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full shadow-lg" />
              
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full blur-xl opacity-20"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection('profile')}
          >
            <span className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Scroll Down
            </span>
            <ArrowDown size={20} className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
