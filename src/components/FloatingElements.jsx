import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Circles */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-sm"
      />
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-25 blur-sm"
      />
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
        className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-15 blur-sm"
      />
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-sm"
      />

      {/* Pulsing Elements */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full opacity-10 blur-md"
      />
      
      <motion.div
        variants={pulseVariants}
        animate="animate"
        style={{ animationDelay: '1.5s' }}
        className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full opacity-15 blur-md"
      />

      {/* Geometric Shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-primary-300 opacity-10 rounded-lg"
      />
    </div>
  );
};

export default FloatingElements;