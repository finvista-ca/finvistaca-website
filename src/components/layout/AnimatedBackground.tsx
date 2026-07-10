import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="global-animated-bg">
      {/* Layer 1: Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* Layer 2: Particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 30}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          ></div>
        ))}
      </div>

      {/* Layer 3: Flowing Lines */}
      <svg className="flowing-lines" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
        </pattern>
        <rect width="200%" height="100%" fill="url(#gridPattern)" />
      </svg>

      {/* Layer 4: Light Streaks */}
      <div className="light-streak streak-1"></div>
      <div className="light-streak streak-2"></div>
    </div>
  );
};

export default AnimatedBackground;
