import React from "react";

const services = [
  "Company Registration",
  "GST Registration",
  "ISO Registration",
  "NGO Registration",
  "Trademark Registration",
  "PSARA License",
  "CDSCO Registration",
  "EPR Compliance",
  "More +",
];

const Hero = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B2C4D] leading-tight">
            Empower Your Business <br />
            <span className="text-[#F5A623]">Compliance &</span> <br />
            <span className="text-[#F5A623]">Management</span> Made <br />
            Easy With Us
          </h1>

          {/* Search Bar */}
          <div className="mt-8 flex w-full max-w-md">
            <input
              type="text"
              placeholder="Search for services"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-[#0B5ED7] text-white px-6 rounded-r-md font-medium">
              Search
            </button>
          </div>

          {/* Recommended Services */}
          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
              Recommended Services
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              {services.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-md bg-green-100 text-green-700 font-medium cursor-pointer hover:bg-green-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="mt-6 text-gray-600 text-sm">
            ⭐ Rated at <span className="font-semibold">4.9</span> By{" "}
            <span className="font-semibold">42800+</span> Customers Globally
          </div>
        </div>

        {/* RIGHT IMAGE */}
        {/* <div className="flex justify-center">
          <img
            src="/download.jpeg"
            alt="Business Compliance Illustration"
            className=" w-full max-w-2xl lg:max-w-3xl"
          />
        </div> */}

        <div className="relative flex justify-center items-center">
          {/* Main Image */}
          <img
            src="/download.jpeg"
            alt="Main Illustration"
            className="w-full max-w-lg lg:max-w-xl object-contain"
          />

          {/* Overlay Image - Positioned relatively to the main image container */}
          <img
            src="/banner.png"
            alt="Compliance Services"
            className="absolute hidden md:block w-[120%] max-w-none -left-[10%] top-0 pointer-events-none"
          />
        </div>




      </div>
    </section>
  );
};

export default Hero;
