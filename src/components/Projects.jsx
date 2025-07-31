import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Star, Calendar, Users, Clock, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get unique project types for filtering
  const projectTypes = ['all', ...new Set(projects.flatMap(project => 
    project.type.split(',').map(type => type.trim())
  ))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.type.toLowerCase().includes(filter.toLowerCase())
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={itemVariants}
      className="card overflow-hidden group cursor-pointer"
      onClick={() => setSelectedProject(project)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x300/3b82f6/ffffff?text=${encodeURIComponent(project.title)}`;
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.github, '_blank');
              }}
              className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              <Github size={20} />
            </button>
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <div className="bg-yellow-500 text-white p-2 rounded-full">
              <Star size={16} />
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-500 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button className="flex items-center space-x-2 text-primary-500 hover:text-primary-600 transition-colors duration-200">
            <Eye size={16} />
            <span className="text-sm font-medium">View Details</span>
          </button>
          <div className="flex space-x-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mr-4">
              <Code size={20} />
              <span className="font-medium">Filter by project type:</span>
            </div>
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === type
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-dark-900 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 border border-gray-200 dark:border-dark-700'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            key={filter} // Add key untuk re-render saat filter berubah
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={`${filter}-${project.id}-${index}`} project={project} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No projects found for this project type.</p>
              </div>
            )}
          </motion.div>

          {/* Project Modal */}
          {selectedProject && (
            <AnimatePresence>
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-dark-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                >
                  {/* Header with Image Gallery */}
                  <div className="relative">
                    <div className="relative h-80 overflow-hidden rounded-t-xl">
                      <img
                        src={selectedProject.gallery ? selectedProject.gallery[currentImageIndex] : selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/800x400/3b82f6/ffffff?text=${encodeURIComponent(selectedProject.title)}`;
                        }}
                      />
                      
                      {/* Gallery Navigation */}
                      {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                        <>
                          <button
                            onClick={() => setCurrentImageIndex(prev => 
                              prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
                            )}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
                          >
                            <ArrowLeft size={20} />
                          </button>
                          <button
                            onClick={() => setCurrentImageIndex(prev => 
                              prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
                            )}
                            className="absolute right-16 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
                          >
                            <ArrowRight size={20} />
                          </button>
                          
                          {/* Image indicators */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {selectedProject.gallery.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                  index === currentImageIndex 
                                    ? 'bg-white' 
                                    : 'bg-white bg-opacity-50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* Close Button */}
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        setCurrentImageIndex(0);
                      }}
                      className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
                    >
                      ×
                    </button>
                    
                    {/* Status Badge */}
                    {selectedProject.status && (
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          selectedProject.status === 'Completed' 
                            ? 'bg-green-500 text-white' 
                            : selectedProject.status === 'In Progress'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-gray-500 text-white'
                        }`}>
                          {selectedProject.status}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8">
                    {/* Project Header */}
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      
                      {/* Project Meta Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {selectedProject.duration && (
                          <div className="flex items-center space-x-1">
                            <Clock size={16} />
                            <span>{selectedProject.duration}</span>
                          </div>
                        )}
                        {selectedProject.team && (
                          <div className="flex items-center space-x-1">
                            <Users size={16} />
                            <span>{selectedProject.team}</span>
                          </div>
                        )}
                        {selectedProject.role && (
                          <div className="flex items-center space-x-1">
                            <CheckCircle size={16} />
                            <span>{selectedProject.role}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                    </div>

                    {/* Features Section */}
                    {selectedProject.features && (
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedProject.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Challenges & Solutions */}
                    {selectedProject.challenges && (
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          Challenges & Solutions
                        </h4>
                        <div className="space-y-2">
                          {selectedProject.challenges.map((challenge, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <Code size={16} className="text-primary-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {challenge}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {selectedProject.achievements && (
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {selectedProject.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <Star size={16} className="text-yellow-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-500 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center space-x-2"
                      >
                        <Github size={20} />
                        <span>View Code</span>
                      </a>
                      
                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex items-center space-x-2"
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatePresence>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="card p-8 bg-gradient-to-r from-primary-500 to-blue-600 text-white">
              <h3 className="text-2xl font-semibold mb-4">Want to see more?</h3>
              <p className="text-lg opacity-90 mb-6">
                Kunjungi GitHub saya untuk lebih banyak proyek dan kontribusi sumber terbuka.
              </p>
              <a
                href="https://github.com/bayu3prayitno"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-primary-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                <Github size={20} />
                <span>Visit GitHub</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
