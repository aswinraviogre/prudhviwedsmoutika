import React from 'react';

export default function ButterflyOverlay() {
  return (
    <>
      <style>{`
        @keyframes butterfly-fly {
          0%   { transform: translate(-10vw, 60vh) rotate(-8deg) scale(1); }
          20%  { transform: translate(20vw, 35vh) rotate(6deg)  scale(1.05); }
          40%  { transform: translate(45vw, 55vh) rotate(-4deg) scale(0.95); }
          60%  { transform: translate(65vw, 25vh) rotate(8deg)  scale(1.1); }
          80%  { transform: translate(85vw, 45vh) rotate(-6deg) scale(1); }
          100% { transform: translate(110vw, 30vh) rotate(4deg) scale(1); }
        }
        @keyframes butterfly-flap {
          0%, 100% { transform: scaleX(1); }
          50%      { transform: scaleX(0.55); }
        }
        .butterfly-path {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 40;
          pointer-events: none;
          animation: butterfly-fly 18s linear infinite;
          will-change: transform;
        }
        .butterfly-wings {
          display: inline-block;
          animation: butterfly-flap 0.25s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
      <div className="butterfly-path" aria-hidden="true">
        <span className="butterfly-wings">
          <svg width="38" height="32" viewBox="0 0 64 52" xmlns="http://www.w3.org/2000/svg">
            <g>
              <ellipse cx="32" cy="26" rx="1.6" ry="11" fill="#1f2937" />
              <circle cx="32" cy="14" r="2.2" fill="#1f2937" />
              <path d="M32 13 C 29 8, 27 6, 25 5" stroke="#1f2937" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M32 13 C 35 8, 37 6, 39 5" stroke="#1f2937" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M30 22 C 10 10, 2 22, 6 32 C 10 42, 24 38, 30 30 Z" fill="#3b82f6" opacity="0.95" />
              <path d="M30 30 C 18 38, 10 44, 14 48 C 20 50, 28 42, 30 36 Z" fill="#60a5fa" opacity="0.95" />
              <path d="M34 22 C 54 10, 62 22, 58 32 C 54 42, 40 38, 34 30 Z" fill="#3b82f6" opacity="0.95" />
              <path d="M34 30 C 46 38, 54 44, 50 48 C 44 50, 36 42, 34 36 Z" fill="#60a5fa" opacity="0.95" />
              <circle cx="14" cy="26" r="1.6" fill="#fff" opacity="0.85" />
              <circle cx="50" cy="26" r="1.6" fill="#fff" opacity="0.85" />
            </g>
          </svg>
        </span>
      </div>
    </>
  );
}

