import React, { useState, useLayoutEffect } from "react";

/**
 * Reusable CTA Button with a modern ripple effect.
 *
 * Props:
 * - label: Text to display on the button
 * - onClick: Function to handle click events
 * - disabled: Boolean state to disable the button
 * - className: Optional extra tailwind classes for positioning/sizing
 * - variant: "blue" (default) | "yellow" — controls color scheme
 */
const CTAButton = ({ label, onClick, disabled = false, className = "", variant = "blue" }) => {
  const [ripples, setRipples] = useState([]);

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
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    setRipples((prev) => [...prev, { x, y, size, id: Date.now() }]);
  };

  // Variant-based styling
  const variantClasses = variant === "yellow"
    ? "bg-[#FFE90A] text-[#072b47] border border-[#FFE90A] hover:bg-[#072b47] hover:text-[#FFE90A] hover:border-[#FFE90A]"
    : "bg-[#005a9c] text-white border border-transparent hover:bg-[#072b47] hover:text-[#FFE90A] hover:border-[#FFE90A]";

  const rippleColor = variant === "yellow" ? "bg-[#072b47]/20" : "bg-[#FFE90A]/40";

  return (
    <button
      onMouseEnter={triggerRipple}
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`
        relative overflow-hidden
        px-6 py-2.5
        text-sm font-semibold
        rounded-lg
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer
        outline-none focus-visible:ring-2 focus-visible:ring-[#005a9c] focus-visible:ring-offset-2
        active:scale-95
        ${variantClasses}
        ${className}
      `}
    >
      {/* Button Text */}
      <span className="relative z-10 pointer-events-none">
        {label}
      </span>

      {/* Ripple Elements */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={`absolute ${rippleColor} rounded-full pointer-events-none animate-ripple`}
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}

      <style jsx="true">{`
        @keyframes ripple {
          from { transform: scale(0); opacity: 0.8; }
          to { transform: scale(4); opacity: 0; }
        }
        .animate-ripple {
          animation: ripple 1000ms linear forwards;
        }
      `}</style>
    </button>
  );
};

export default CTAButton;
