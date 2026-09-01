import React, { useState } from 'react';

interface PLRCLogoProps {
  className?: string;
  size?: number;
  customSrc?: string;
}

export const PLRCLogo: React.FC<PLRCLogoProps> = ({ 
  className = 'w-24 h-24', 
  size = 120,
  customSrc = '/images/logo/logo-plrc.png'
}) => {
  const [currentSrc, setCurrentSrc] = useState(customSrc);
  const [useFallbackSvg, setUseFallbackSvg] = useState(false);

  const handleImageError = () => {
    if (currentSrc === '/images/logo/logo-synthesis.png') {
      // If specific synthesis logo not found, try general plrc logo
      setCurrentSrc('/images/logo/logo-plrc.png');
    } else {
      // If neither exists, fallback to crisp gold vector seal
      setUseFallbackSvg(true);
    }
  };

  // If user provided a custom image file in public/images/logo/, render it directly
  if (!useFallbackSvg && currentSrc) {
    return (
      <img
        src={currentSrc}
        alt="PLRC Seal & Logo"
        width={size}
        height={size}
        onError={handleImageError}
        className={`${className} object-contain`}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Curved Path for Top Text */}
        <path
          id="topArc"
          d="M 28,100 A 72,72 0 0,1 172,100"
        />
        {/* Curved Path for Bottom Text */}
        <path
          id="bottomArc"
          d="M 172,100 A 72,72 0 0,1 28,100"
        />
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7e59d" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#9e7b13" />
        </linearGradient>
        <linearGradient id="navyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0b1329" />
        </linearGradient>
      </defs>

      {/* Outer Gold Border */}
      <circle cx="100" cy="100" r="96" fill="url(#navyGrad)" stroke="url(#goldGrad)" strokeWidth="3.5" />
      <circle cx="100" cy="100" r="91" fill="none" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="3 2" />

      {/* Inner Deep Navy Ring */}
      <circle cx="100" cy="100" r="88" fill="#0d1527" />

      {/* Inner White/Parchment Circle */}
      <circle cx="100" cy="100" r="62" fill="#faf8f4" stroke="url(#goldGrad)" strokeWidth="3" />

      {/* Top Arc Text: PRESIDENT UNIVERSITY */}
      <text fill="url(#goldGrad)" fontSize="9.5" fontWeight="bold" fontFamily="serif, sans-serif" letterSpacing="1.6">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          PRESIDENT UNIVERSITY
        </textPath>
      </text>

      {/* Bottom Arc Text: LITERATURE & RESEARCH CLUB */}
      <text fill="url(#goldGrad)" fontSize="8" fontWeight="bold" fontFamily="serif, sans-serif" letterSpacing="1.1">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          LITERATURE & RESEARCH CLUB
        </textPath>
      </text>

      {/* Left and Right Gold Stars */}
      <path d="M 28 100 l 2 -4 l 4 2 l -3 3 l 1 4 l -4 -2 l -4 2 l 1 -4 l -3 -3 l 4 -2 z" fill="url(#goldGrad)" />
      <path d="M 172 100 l 2 -4 l 4 2 l -3 3 l 1 4 l -4 -2 l -4 2 l 1 -4 l -3 -3 l 4 -2 z" fill="url(#goldGrad)" />

      {/* CENTER EMBLEM: Open Book + Quill/Fountain Pen */}
      <g transform="translate(100, 100) scale(0.95)">
        {/* Book shadow */}
        <path d="M -32 12 Q 0 4 32 12 L 32 -18 Q 0 -26 -32 -18 Z" fill="#0f172a" opacity="0.12" />

        {/* Left Book Page */}
        <path d="M -30 10 Q -15 2 0 8 L 0 -22 Q -15 -28 -30 -20 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="1" />

        {/* Right Book Page */}
        <path d="M 30 10 Q 15 2 0 8 L 0 -22 Q 15 -28 30 -20 Z" fill="#2d3f58" stroke="#0f172a" strokeWidth="1" />

        {/* Gold Page Edge Highlights */}
        <path d="M -30 -20 Q -15 -28 0 -22" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
        <path d="M 30 -20 Q 15 -28 0 -22" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />

        {/* Center Spine */}
        <line x1="0" y1="-22" x2="0" y2="8" stroke="url(#goldGrad)" strokeWidth="2" />

        {/* Text lines on left page */}
        <line x1="-24" y1="-14" x2="-6" y2="-18" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <line x1="-24" y1="-8" x2="-6" y2="-12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <line x1="-24" y1="-2" x2="-10" y2="-5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

        {/* Text lines on right page */}
        <line x1="6" y1="-18" x2="24" y2="-14" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
        <line x1="6" y1="-12" x2="24" y2="-8" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
        <line x1="6" y1="-6" x2="18" y2="-3" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />

        {/* Fountain Pen Nib overlay */}
        <g transform="translate(10, -5) rotate(-35) scale(0.65)">
          <path d="M 0 0 L -6 -18 L 0 -30 L 6 -18 Z" fill="url(#goldGrad)" stroke="#1e293b" strokeWidth="1" />
          <circle cx="0" cy="-14" r="1.5" fill="#1e293b" />
          <line x1="0" y1="-14" x2="0" y2="-30" stroke="#1e293b" strokeWidth="1" />
        </g>
      </g>
    </svg>
  );
};
