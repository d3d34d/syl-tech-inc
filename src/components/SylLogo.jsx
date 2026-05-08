import React from 'react';

export const SylLogo = ({ size = 32, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M75 30C75 16 58 10 45 10C32 10 25 18 25 30C25 45 75 55 75 70C75 82 58 90 45 90C32 90 25 84 25 70" 
      stroke="url(#syl-gradient)" 
      strokeWidth="16" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="syl-gradient" x1="25" y1="10" x2="75" y2="90" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8570FF" />
        <stop offset="1" stopColor="#FF597B" />
      </linearGradient>
    </defs>
  </svg>
);

export const SylWatermark = () => (
  <div className="syl-watermark">
    <SylLogo size={600} className="watermark-svg" />
  </div>
);
