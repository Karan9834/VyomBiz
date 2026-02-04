// StartCompliance.jsx
import React from "react";

const StartCompliance = () => {
  return (
    <section className="bg-blue-900 py-12 px-6 rounded-xl text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side text */}
        <div className="text-left md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold">
            Start your 10,000+ compliance with us!
          </h2>
        </div>

        {/* Right side download + button */}
        <div className="text-left md:text-right md:w-1/2 flex flex-col items-start md:items-end gap-4">
          <p className="text-lg">Download compliance calendar</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartCompliance;
