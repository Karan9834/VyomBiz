// Testimonials.jsx
import React from "react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    heading: "Ms Seema Singh",
    title: "CFO - Online food Delivery App",
    description:
      "We would recommend Vyombiz incorporation services to any founder without a second doubt. The process was beyond efficient and shows Vyombiz founder's commitment and vision to truly help entrepreneurs and early stage startups to get them incorporated with ease.",
  },
  {
    heading: "Mr. Vinay Arora",
    title: "MD, India",
    description:
      "Really thankful to Vyombiz. Our experience with its expert was tremendous. Strong professional approach towards clients. My Company Registration was filed in a very less time, thanks to Vyombiz experts.",
  },
  {
    heading: "Priti Singh",
    title: "MD, India",
    description:
      "I was searching for a company for assistance in the incorporation services. Then one of my friend tell me about Vyombiz and definitely the Vyombiz team is really efficient and has an experienced staff to guide us through the entire process of Company Incorporation.",
  },
  {
    heading: "Arjun Mehta, Startup Founder, Chennai",
    title: "Verified User",
    description:
      "Vyombiz is very reliable and efficient. They managed all paperwork, resolved my queries, and completed my GST registration much quicker than I expected.",
  },
  {
    heading: "Lavanya Singh, Startup Founder, Greater Noida",
    title: "Verified User",
    description:
      "Setting up our Bio Medical Waste Recycling Plant was a huge project. Mukul managed the entire compliance framework seamlessly from start to finish.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#072b47] mb-4 tracking-tight">
          Voices of <span className="text-[#d99e00]">Success.</span>
        </h2>
        <div className="w-16 h-1 bg-[#FFE90A] mx-auto rounded mb-6"></div>
        <p className="text-slate-500 text-sm md:text-base mt-2 max-w-2xl mx-auto font-medium">
          Hear from the entrepreneurs who have grown with VyomBiz.
        </p>
      </div>

      {/* Slider with side blurs */}
      <div className="relative group">
        {/* Left Blur Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

        {/* Right Blur Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex gap-8 animate-marquee-slow py-4">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="w-80 md:w-96 bg-white border border-[#072b47]/20 rounded-2xl p-7 shrink-0 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:border-[#072b47]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#FFE90A] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 font-medium text-sm leading-relaxed italic mb-6 line-clamp-4">
                "{t.description}"
              </p>
              <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[#072b47] text-sm shrink-0">
                  {t.heading.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-[#072b47] text-[14px] truncate">{t.heading}</h3>
                  <h4 className="text-slate-400 font-semibold text-[10px] uppercase tracking-widest truncate">{t.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Reviews Button */}
      <div className="text-center mt-12 px-4">
        <Link to="/reviews">
          <button className="bg-[#FFE90A] text-[#072b47] font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-[#072b47] hover:text-[#FFE90A] border border-[#FFE90A] hover:border-[#FFE90A] transition-all shadow-md active:scale-95 duration-200 group">
            <span className="flex items-center gap-2">
              Explore All Stories
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
