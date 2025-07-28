import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className = "", delay = 0 }) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-2"
          style={{ transformOrigin: 'center bottom' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;