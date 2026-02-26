import React from "react";
import { ChevronRight, Rocket, FileText, CheckCircle2, Shield, Upload, FileCheck } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for header/navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const topButtons = [
    "Trademark Registration",
    "GST Registration",
    "Company Registration",
    "Lawyer Consultation",
  ];

  const cards = [
    {
      id: 1,
      title: "Start Your Business",
      description: "Launch your business effortlessly with expert-guided incorporation, registrations, and licensing.",
      sectionId: "premium-platform-section",
      illustration: "certificate",
    },
    {
      id: 2,
      title: "Manage Your Business",
      description: "Stay compliant and in control with automated tax filings, smart dashboards, and real-time alerts.",
      sectionId: "start-compliance-section",
      illustration: "filing",
    },
    {
      id: 3,
      title: "Protect Your Business",
      description: "Secure your brand with trademark registration, contracts, and legal support from trusted experts.",
      sectionId: "working-process-section",
      illustration: "brand",
    },
  ];

  return (
    <section className="w-full bg-[#072b47] pt-16 md:pt-20 pb-16 md:pb-20 relative overflow-hidden">
      {/* Background decorative elements - Abstract geometric shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-16 w-24 h-24 border-2 border-blue-400 rounded-lg rotate-12 transform skew-y-12"></div>
        <div className="absolute top-48 right-32 w-20 h-20 border-2 border-blue-300 rounded-lg rotate-45 transform skew-x-12"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 border-2 border-blue-400 rounded-lg rotate-12 transform"></div>
        <div className="absolute top-72 right-1/3 w-16 h-16 border-2 border-blue-300 rounded-lg transform -rotate-12"></div>
        <div className="absolute bottom-32 right-16 w-20 h-20 border-2 border-blue-400 rounded-lg rotate-45"></div>
      </div>

      {/* Yellow rocket icon */}
      <div className="absolute top-24 right-20 opacity-50 z-0">
        <Rocket className="w-32 h-32 text-yellow-400 drop-shadow-md" strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.15] mb-4 max-w-4xl mx-auto tracking-wide group">
            Build Your Business with Passion. <br />
            Run It Smarter with <span className="text-[#FFE90A] relative inline-block">VyomBiz <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#FFE90A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div></span>.
          </h1>
          <div className="w-24 h-1 bg-[#FFE90A] mx-auto rounded-full mb-8"></div>

          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto mb-6">
            Simplifying Legal, Tax, and Compliance, the{" "}
            <span className="bg-yellow-500/30 text-yellow-300 px-2 py-1 rounded-md font-semibold text-sm">
              AI-Driven
            </span>{" "}
            Trusted by millions. Backed by real experts.
          </p>

          {/* Navigation Buttons Below Heading */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-6">
            {topButtons.map((button, index) => (
              <button
                key={index}
                className="px-4 md:px-5 py-2 bg-[#FFE90A] border border-[#FFE90A]/60 rounded-full text-[#072b47] text-xs md:text-sm font-bold hover:bg-white hover:border-white hover:text-[#072b47] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
              >
                {button}
              </button>
            ))}
          </div>
        </div>

        {/* Three Interactive Cards with Fan Layout */}
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-0 max-w-7xl mx-auto relative z-20 mb-12 md:mb-0 px-4 md:px-0">
          {cards.map((card, index) => {
            const arrangementClasses =
              index === 0 ? "rotate-[-4deg] md:rotate-[-6deg] translate-y-[20px] md:translate-y-[40px] z-[10]" :
                index === 1 ? "rotate-[0deg] -mt-16 md:mt-0 translate-y-[0px] md:translate-y-[-30px] z-[20]" :
                  "rotate-[4deg] md:rotate-[6deg] -mt-16 md:mt-0 translate-y-[40px] z-[30]";

            return (
              <div
                key={card.id}
                onClick={() => scrollToSection(card.sectionId)}
                className={`group w-full md:w-[28%] bg-white rounded-3xl p-6 md:p-8 cursor-pointer shadow-[0_10px_40px_rgba(0,90,156,0.2)] hover:shadow-[0_20px_60px_rgba(0,90,156,0.4)] transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ring-1 ring-[#005a9c]/30 flex flex-col min-h-[260px] md:min-h-[350px] ${arrangementClasses}`}
              >
                {/* Card Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-[#072b47] leading-tight">
                      {card.title}
                    </h3>
                    <div className="shrink-0 w-4 h-4 bg-[#072b47] flex items-center justify-center translate-y-1" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 font-medium">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Massive Convex Curve Bottom Section - The "Floor" */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[260px] md:h-[420px] z-40 translate-y-1/2 pointer-events-none">

        {/* Base Black Layer (solid across) */}
        <div className="absolute inset-0 bg-black rounded-[100%]"></div>

        {/* Faded Glow Layer (Less glow from right and left edges) */}
        <div
          className="absolute inset-0 rounded-[100%]"
          style={{
            borderTop: '5px solid rgba(56, 189, 248, 0.9)',
            boxShadow: '0 -8px 30px rgba(56, 189, 248, 0.8), 0 -25px 90px rgba(79, 70, 229, 0.6), inset 0 8px 30px rgba(56, 189, 248, 0.6)',
            maskImage: 'linear-gradient(to right, transparent 2%, black 25%, black 75%, transparent 98%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 2%, black 25%, black 75%, transparent 98%)'
          }}
        ></div>

        {/* Content layer (clipped by rounded-[100%]) */}
        <div className="absolute inset-0 rounded-[100%] overflow-hidden">
          {/* Decorative Grid Pattern for Depth */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
          {/* Subtle Diagonal Lines */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 15px,
              rgba(255, 255, 255, 0.08) 15px,
              rgba(255, 255, 255, 0.08) 30px
            )`,
          }}></div>

          {/* Attractive Trust Text inside the black curve */}
          <div className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2 w-full flex flex-col items-center text-center px-4">
            <h3 className="text-gray-200 text-xs md:text-base lg:text-lg font-medium tracking-[0.15em] uppercase mb-2 md:mb-3 drop-shadow-md">
              Empowering <span className="text-[#FFE90A] font-bold drop-shadow-[0_0_8px_rgba(255,233,10,0.6)]">10,000+</span> Businesses Nationwide
            </h3>
            <div className="flex items-center justify-center gap-2 md:gap-4 opacity-90 mx-auto">
              <div className="h-[1px] w-8 md:w-20 bg-gradient-to-r from-transparent to-indigo-500"></div>
              <p className="text-[9px] md:text-xs text-indigo-300 font-light tracking-[0.2em] md:tracking-[0.3em]">
                YOUR VISION • OUR EXPERTISE
              </p>
              <div className="h-[1px] w-8 md:w-20 bg-gradient-to-l from-transparent to-indigo-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
