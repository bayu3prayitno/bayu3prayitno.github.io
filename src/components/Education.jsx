import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { education, courses } from '../data/portfolioData';
import { useTheme } from '../contexts/ThemeContext';

const Education = () => {
  const { isDarkMode: isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="education" className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Education & Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Perjalanan pendidikan formal dan pembelajaran berkelanjutan yang membentuk expertise saya
          </p>
        </motion.div>

        {/* Formal Education - Vertical Layout */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Pendidikan Formal
          </h3>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            {education.map((edu, index) => (
              <motion.div 
                key={edu.id}
                variants={itemVariants}
                className={`${
                  isDark 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200 shadow-lg'
                } rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl group`}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={edu.image} 
                      alt={edu.degree}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(edu.institution)}&size=400&background=3b82f6&color=ffffff`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4">
                      <div className={`flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${edu.color} text-white`}>
                        <GraduationCap size={12} className="mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-2 p-6">
                    <h4 className={`text-2xl font-bold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {edu.degree}
                    </h4>
                    
                    <div className="flex items-center mb-2">
                      <BookOpen size={16} className={`mr-2 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                      <p className={`font-medium text-lg ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {edu.institution}
                      </p>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <MapPin size={16} className={`mr-2 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`} />
                      <p className={`${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {edu.location}
                      </p>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Award size={16} className={`mr-2 ${
                        isDark ? 'text-yellow-400' : 'text-yellow-600'
                      }`} />
                      <p className={`font-medium ${
                        isDark ? 'text-yellow-400' : 'text-yellow-600'
                      }`}>
                        {edu.gpa !== '-' ? `GPA: ${edu.gpa}` : 'Teknik Komputer dan Jaringan'}
                      </p>
                    </div>
                    
                    <p className={`mb-6 leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {edu.description}
                    </p>
                    
                    <div>
                      <h5 className={`font-semibold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className={`flex items-center ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mr-3"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Online Courses & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={`text-2xl font-bold mb-8 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Online Courses & Certifications
          </h3>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {courses.map((course, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                  isDark 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {course.title}
                    </h4>
                    <p className={`font-medium ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {course.provider}
                    </p>
                  </div>
                  <div className={`text-right ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <p className="font-medium">{course.year}</p>
                    <p className="text-sm">{course.duration}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={`px-3 py-1 text-xs rounded-full transition-all duration-200 hover:scale-105 ${
                      isDark 
                        ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                        : 'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
