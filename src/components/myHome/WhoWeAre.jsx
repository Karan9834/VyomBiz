import React from "react";
import { CheckCircle, Play } from "lucide-react";
import processImage from "/Home-page/who-we-are.png";
import CTAButton from "../common/CTAButton";

const WhoWeAre = () => {
  const processSteps = [
    { text: "We Do Our Research.", delay: "0ms" },
    { text: "We Meet Our Client.", delay: "100ms" },
    { text: "We Create Ideas.", delay: "200ms" },
    { text: "We Revise or Make Changes.", delay: "300ms" },
    { text: "We Execute the Work.", delay: "400ms" },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#072b47] mb-4 tracking-tight">
            Who We Are
          </h2>
          <p className="text-[#005a9c] text-lg font-bold mb-4 tracking-wide">
            A business consulting company that constitutes faith.
          </p>
          <div className="w-16 h-1 bg-[#005a9c] mx-auto rounded mt-4"></div>
        </div>

        {/* Main Content - Image with Overlay */}
        <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl group">
          {/* Background Image with Overlay */}
          <div className="relative h-[500px] md:h-[600px]">
            <img
              src={processImage}
              alt="Our Process"
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-8 md:px-16 lg:px-20">
              <div className="max-w-2xl">
                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 md:mb-12 leading-tight">
                  Watch Our Process
                </h3>

                {/* Process Steps */}
                <div className="space-y-4 md:space-y-5 mb-10">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300"
                      style={{ animationDelay: step.delay }}
                    >
                      {/* Check Icon */}
                      <div className="shrink-0 w-8 h-8 bg-[#005a9c] rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                      {/* Text */}
                      <p className="text-white text-base md:text-lg font-bold tracking-wide">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-4">
                  <CTAButton label="Get Started" className="!px-10 !py-4 !text-lg" />
                </div>

              </div>
            </div>

            {/* Play Button in Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm border-4 border-white rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all shadow-2xl group/play">
                <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-1 group-hover/play:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;
