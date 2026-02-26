// BrandLogos.jsx
import React from "react";

const BrandLogos = () => {
  const brands = [
    { name: "bigbasket", logo: "bb" },
    { name: "HDFC BANK", logo: "HDFC" },
    { name: "amazon", logo: "amazon" },
    { name: "OYO", logo: "OYO" },
    { name: "SWIGGY", logo: "SWIGGY" },
  ];

  // Duplicate brands for seamless scrolling
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="w-full bg-gray-800 py-4 md:py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-8 md:gap-12 lg:gap-16 animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="shrink-0 flex items-center justify-center min-w-[120px] md:min-w-[150px]"
            >
              {brand.name === "bigbasket" && (
                <div className="flex items-center gap-2 text-white">
                  <div className="w-10 h-10 border-2 border-white rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">bb</span>
                  </div>
                  <span className="text-white font-semibold text-sm md:text-base">bigbasket</span>
                </div>
              )}
              {brand.name === "HDFC BANK" && (
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded">
                  <div className="w-8 h-8 border-2 border-gray-800 rounded flex items-center justify-center relative">
                    <div className="absolute inset-1 border border-gray-800 rounded"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-800"></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-800"></div>
                  </div>
                  <span className="text-gray-800 font-bold text-xs md:text-sm">HDFC BANK</span>
                </div>
              )}
              {brand.name === "amazon" && (
                <div className="flex items-center gap-1 text-white">
                  <span className="text-white font-semibold text-sm md:text-base">amazon</span>
                  <svg className="w-16 h-4" viewBox="0 0 100 20" fill="none">
                    <path
                      d="M 0 10 Q 25 0, 50 10 T 100 10"
                      stroke="#ff9900"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 0 10 Q 25 20, 50 10 T 100 10"
                      stroke="#ff9900"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
              {brand.name === "OYO" && (
                <div className="text-white font-bold text-lg md:text-xl tracking-tight">
                  OYO
                </div>
              )}
              {brand.name === "SWIGGY" && (
                <div className="flex items-center gap-2 text-white">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  </div>
                  <span className="text-white font-bold text-sm md:text-base">SWIGGY</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandLogos;
