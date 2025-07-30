import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Static Circles - no animation */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-sm" />
      
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-25 blur-sm" />
      
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-15 blur-sm" />
      
      <div className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-sm" />

      {/* Static Elements - no animation */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full opacity-10 blur-md" />
      
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full opacity-15 blur-md" />

      {/* Static Geometric Shape - no animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-primary-300 opacity-10 rounded-lg" />
    </div>
  );
};

export default FloatingElements;