// SuccessStory.jsx
import React from "react";

const stats = [
  { number: "100000+", label: "Happy Customers" },
  { number: "10000+", label: "Professionals" },
  { number: "400+", label: "Dedicated CA, CS & Lawyers" },
  { number: "6+", label: "Years of Journey" },
];

const SuccessStory = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a3d64] to-[#072b47] py-14 md:py-20 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our <span className="text-[#FFE90A]">Success Story</span>
          </h2>
          <div className="w-16 h-1 bg-[#FFE90A] mx-auto rounded mt-4"></div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-center">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-[#FFE90A] drop-shadow-md mb-2">{stat.number}</span>
                <span className="text-sm md:text-base font-bold tracking-wide text-white/90 uppercase">{stat.label}</span>
              </div>
              {/* Add pipe separator except for last item */}
              {index !== stats.length - 1 && (
                <span className="hidden sm:block text-3xl font-light text-white/20 mx-4">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
