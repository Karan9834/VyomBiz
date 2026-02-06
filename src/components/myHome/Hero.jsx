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
    <section className="w-full bg-white pt-16 md:pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-[42px] md:text-[52px] font-black text-[#072b47] leading-[1.1] tracking-tight mb-6">
            Empower Your Business <br />
            <span className="text-[#f1a134]">Compliance</span> & <br />
            <span className="text-[#f1a134]">Management</span> Made <br />
            Easy With Us
          </h1>

          {/* Search Bar */}
          <div className="mt-6 flex w-full max-w-lg border border-slate-300 rounded-lg overflow-hidden shadow-sm bg-white">
            <input
              type="text"
              placeholder="E Waste License Recycling"
              className="flex-1 px-4 py-3 text-sm text-slate-600 border-none focus:outline-none bg-transparent"
            />
            <button className="bg-[#005a9c] text-white px-6 py-3 font-semibold hover:bg-[#004a7c] transition-colors">
              Search
            </button>
          </div>

          {/* Recommended Services */}
          <div className="mt-6">
            <p className="text-[11px] uppercase tracking-wider text-[#6366f1] font-bold mb-3">
              Recommended Services
            </p>

            <div className="flex flex-wrap gap-x-2 gap-y-2.5 max-w-xl">
              {services.map((item, index) => {
                const bgColors = ['bg-[#e5e7eb]', 'bg-[#fef3c7]', 'bg-[#d1fae5]'];
                const textColors = ['text-[#374151]', 'text-[#92400e]', 'text-[#065f46]'];
                const colorIndex = index % 3;

                // Force line break after every 3rd item
                const isThirdItem = (index + 1) % 3 === 0;

                return (
                  <React.Fragment key={index}>
                    <span
                      className={`px-3 py-1.5 text-[13px] rounded-md ${bgColors[colorIndex]} ${textColors[colorIndex]} font-semibold cursor-pointer hover:shadow-sm transition-shadow whitespace-nowrap`}
                    >
                      {item}
                    </span>
                    {isThirdItem && index !== services.length - 1 && <div className="w-full" />}
                  </React.Fragment>
                )
              })}
            </div>
          </div>

          {/* Rating */}
          <div className="mt-6 flex items-center gap-2 text-slate-700 text-sm">
            <span className="text-xl">⭐</span>
            <div className="flex items-center -space-x-1 mr-1">
              <div className="w-4 h-4 rounded-full bg-[#4267B2] flex items-center justify-center text-[9px] text-white font-bold border-2 border-white">f</div>
              <div className="w-4 h-4 rounded-full bg-[#EA4335] flex items-center justify-center text-[9px] text-white font-bold border-2 border-white">G</div>
            </div>
            <span className="font-medium">
              Rated at <span className="font-bold text-slate-900">4.9</span> By <span className="font-bold text-slate-900">42800 +</span> Customers Globally
            </span>
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

        <div className="relative flex justify-center items-center lg:justify-end lg:pr-4">
          {/* Main Image */}
          <img
            src="https://img.freepik.com/premium-vector/isometric-illustration-modern-office-with-employees-working-relaxing_9975-106409.jpg?w=2000"
            alt="Modern Office Illustration"
            className="w-full max-w-xl lg:max-w-2xl transition-transform duration-700 object-contain"
          />
        </div>




      </div>
    </section>
  );
};

export default Hero;
