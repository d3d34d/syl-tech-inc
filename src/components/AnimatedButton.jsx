import React, { useState } from 'react';
import './AnimatedButton.css';

const AnimatedButton = ({ 
  text, 
  hoverText, 
  onClick, 
  variant = 'primary',
  showPulse = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`animated-btn ${variant} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      data-no-scramble
    >
      {/* Live pulse indicator */}
      {showPulse && (
        <div className="pulse-container">
          <span className="pulse-ping"></span>
          <span className="pulse-dot"></span>
        </div>
      )}

      {/* Text sliding container */}
      <div className="text-container">
        <span className="text-primary-label">{text}</span>
        <span className="text-hover-label">{hoverText || text}</span>
      </div>

      {/* Arrow icon */}
      <svg
        className="btn-arrow"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </button>
  );
};

export default AnimatedButton;
