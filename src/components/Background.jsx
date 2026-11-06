import React from 'react';

const Background = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      zIndex: -2, 
      pointerEvents: 'none', 
      background: 'var(--bg-dark)', 
      transition: 'background-color 0.4s ease' 
    }}>
      {/* Grid Pattern */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        backgroundImage: 'radial-gradient(circle at 2px 2px, var(--grid-dot) 1.5px, transparent 0)',
        backgroundSize: '40px 40px',
        opacity: 0.8,
        transition: 'opacity 0.4s ease'
      }} />
      
      {/* Animated Gradient Gradients */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '120%',
        height: '120%',
        background: 'radial-gradient(circle at 10% 20%, var(--bg-grad-1) 0%, transparent 40%), radial-gradient(circle at 90% 80%, var(--bg-grad-2) 0%, transparent 40%)',
        zIndex: -1,
        transition: 'background 0.4s ease'
      }} />
      
      {/* Abstract Shapes */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx="10%" cy="10%" r="1" fill="var(--primary)" filter="url(#glow)">
          <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" />
          <animate attributeName="r" values="1;3;1" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="85%" cy="40%" r="2" fill="var(--secondary)" filter="url(#glow)">
          <animate attributeName="opacity" values="0;1;0" dur="7s" repeatCount="indefinite" />
          <animate attributeName="r" values="2;5;2" dur="7s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default Background;
