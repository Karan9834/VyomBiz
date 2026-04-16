import React from "react";

/**
 * TextReveal Component
 * Reveals text from left to right using clip-path for a smooth, premium feel.
 * The animation loops infinitely with a pause when fully revealed.
 */
const TextReveal = ({ text, className = "" }) => {
  return (
    <span className={`relative inline-block overflow-hidden align-middle ${className}`}>
      {/* Invisible placeholder to maintain layout size */}
      <span className="opacity-0 pointer-events-none select-none whitespace-nowrap">
        {text}
      </span>
      
      {/* Animated layer */}
      <span className="absolute left-0 top-0 whitespace-nowrap animate-text-reveal">
        {text}
      </span>

      <style>{`
        @keyframes text-reveal-glow {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
            transform: translateX(-10px);
          }
          15% {
            opacity: 1;
          }
          35% {
            clip-path: inset(0 0 0 0);
            transform: translateX(0);
          }
          75% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
            transform: translateX(0);
          }
          90% {
            opacity: 0;
          }
          100% {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
            transform: translateX(0);
          }
        }

        .animate-text-reveal {
          animation: text-reveal-glow 5s ease-in-out infinite;
          will-change: clip-path, opacity, transform;
        }
      `}</style>
    </span>
  );
};

export default TextReveal;
