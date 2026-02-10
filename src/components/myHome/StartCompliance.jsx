// StartCompliance.jsx
import React from "react";

const StartCompliance = () => {
  return (
    <section className="w-full bg-blue-900 py-16 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/compliance-banner-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-blue-900/70" />

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left side text */}
          <div className="text-left md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Start your 10,000+ compliance with us!
            </h2>
          </div>

          {/* Right side download + button */}
          <div className="text-left md:text-right md:w-1/2 flex flex-col items-start md:items-end gap-4">
            <p className="text-lg text-white font-medium">Download compliance calendar</p>
            <button className="bg-[#f1a134] hover:bg-[#e6951b] text-white font-bold px-8 py-3 rounded-md transition-colors shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartCompliance;
