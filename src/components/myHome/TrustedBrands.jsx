// TrustedBrands.jsx
import React from "react";

const brandLogos = [
  "https://corpbiz.io/admin/style/images/builder/20211225023552_marg-logo.png",
  "https://corpbiz.io/admin/style/images/builder/20211225023538_justdial.jpg",
  "https://corpbiz.io/admin/style/images/builder/20211225023524_fia-global.jpg",
  "https://corpbiz.io/admin/style/images/builder/20180628020803_DHFL.jpg",
  "https://corpbiz.io/admin/style/images/builder/20180628020851_ku.jpg",
  "https://corpbiz.io/admin/style/images/builder/20180628020825_foodpanda.jpg",
  "https://corpbiz.io/admin/style/images/builder/20211225023524_fia-global.jpg",
  "https://corpbiz.io/admin/style/images/builder/20180628020904_stripe.jpg",
  "https://corpbiz.io/admin/style/images/builder/20211225023604_milton.jpg",
  "https://corpbiz.io/admin/style/images/builder/20180628020838_30fbric.jpg",
];

const TrustedBrands = () => {
  return (
    <section className="py-16 bg-white text-center overflow-hidden">
      {/* Heading */}
      <h2 className="text-xl font-bold mb-14">
        1 Lakh+ Global Brands That Trust Us!
      </h2>

      {/* Marquee Logos */}
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee space-x-24">
          {brandLogos.map((logo, index) => (
            <div key={index} className="shrink-0">
              <img src={logo} alt={`Brand ${index + 1}`} className="h-12 object-contain" />
            </div>
          ))}
          {/* Duplicate for seamless scroll */}
          {brandLogos.map((logo, index) => (
            <div key={index + brandLogos.length} className="shrink-0">
              <img src={logo} alt={`Brand ${index + 1}`} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBrands;