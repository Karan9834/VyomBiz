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
        {/* Faint rocket icon */}
        <div className="absolute top-24 right-20 opacity-10">
          <Rocket className="w-32 h-32 text-blue-300" strokeWidth={1} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.2] mb-4 max-w-4xl mx-auto tracking-wide">
            Build Your Business with Passion. <br />
            Run It Smarter with <span className="text-[#f1a134]">VyomBiz</span>.
          </h1>

          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto mb-6">
            Simplifying Legal, Tax, and Compliance, the{" "}
            <span className="bg-purple-500/30 text-purple-200 px-2 py-1 rounded-md font-semibold text-sm">
              AI-Driven
            </span>{" "}
            Way. Trusted by millions. Backed by real experts.
          </p>

          {/* Navigation Buttons Below Heading */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-6">
            {topButtons.map((button, index) => (
              <button
                key={index}
                className="px-4 md:px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs md:text-sm font-medium hover:bg-white/20 hover:border-white/50 transition-all duration-300"
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
                className={`group w-full md:w-[28%] bg-white rounded-3xl p-6 md:p-8 cursor-pointer shadow-[0_10px_40px_rgba(241,161,52,0.3)] hover:shadow-[0_20px_60px_rgba(241,161,52,0.5)] transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ring-1 ring-[#f1a134]/30 flex flex-col min-h-[260px] md:min-h-[350px] ${arrangementClasses}`}
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] h-[200px] md:h-[320px] bg-black rounded-[100%] z-40 translate-y-1/2 overflow-hidden pointer-events-none">
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
      </div>
    </section>
  );
};

export default Hero;
