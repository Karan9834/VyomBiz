// WhoWeAre.jsx
import React from "react";
import processImage from "/images.jpeg"; // put your image in public folder

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Paragraph */}
      <p className="text-yellow-500 text-lg mb-4">
        A business consulting company that constitutes faith.
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-12">Who We Are</h2>

      {/* Image with overlay text */}
      <div className="relative max-w-6xl mx-auto">
        <img
          src={processImage}
          alt="Our Process"
          className="w-full rounded-lg shadow-lg"
        />

        {/* Text overlay on left */}
        <div className="absolute top-1/2 left-12 transform -translate-y-1/2 text-left text-black max-w-md">
          <h3 className="text-3xl font-bold mb-16">Watch Our Process</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>We Do Our Research.</li>
            <li>We Meet Our Client.</li>
            <li>We Create Ideas.</li>
            <li>We Revise or Make Changes.</li>
            <li>We Execute the Work.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
