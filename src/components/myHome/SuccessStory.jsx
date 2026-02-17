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
    <section className="bg-blue-600 py-10 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Success Story</h2>
        </div>

        {/* Stats Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-center">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold">{stat.number}</span>
                <span className="text-lg font-medium">{stat.label}</span>
              </div>
              {/* Add pipe separator except for last item */}
              {index !== stats.length - 1 && (
                <span className="hidden sm:block text-2xl font-bold mx-4">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
