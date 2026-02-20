import React, { useState, useLayoutEffect } from "react";

/**
 * Reusable CTA Button with a modern ripple effect.
 * 
 * Props:
 * - label: Text to display on the button
 * - onClick: Function to handle click events
 * - disabled: Boolean state to disable the button
 * - className: Optional extra tailwind classes for positioning
 */
const CTAButton = ({ label, onClick, disabled = false, className = "" }) => {
  const [ripples, setRipples] = useState([]);

  // Cleanup effect to remove ripples after animation ends (600ms)
  useLayoutEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prevRipples) => prevRipples.slice(1));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  const triggerRipple = (event) => {
    if (disabled) return;

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    // Calculate position relative to the button
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);
  };

  return (
    <button
      onMouseEnter={triggerRipple}
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`
        relative overflow-hidden
        bg-[#005a9c] text-white
        px-6 py-2.5 
        text-sm font-semibold
        rounded-lg
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer
        outline-none focus-visible:ring-2 focus-visible:ring-[#005a9c] focus-visible:ring-offset-2
        ${className}
      `}
    >
      {/* Button Text */}
      <span className="relative z-10 pointer-events-none">
        {label}
      </span>

      {/* Ripple Elements - Dark Blue */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-blue-900/40 rounded-full pointer-events-none animate-ripple"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}

      {/* Tailwind handles the base styles, 
          but the ripple animation should be defined in global CSS or as a style block */}
      <style jsx="true">{`
        @keyframes ripple {
          from {
            transform: scale(0);
            opacity: 0.8;
          }
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 1000ms linear forwards;
        }
      `}</style>
    </button>
  );
};

export default CTAButton;
