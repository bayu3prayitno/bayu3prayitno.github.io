import React from 'react';

const ParticleBackground = () => {
  return (
    <canvas
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ background: 'transparent', display: 'none' }}
    />
  );
};

export default ParticleBackground;