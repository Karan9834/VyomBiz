// WorkingProcess.tsx
import React from "react";
import { Shield, CheckCircle2, FileText, ArrowRight, Clock } from "lucide-react";

const ipServices = [
  "Trademark Registration",
  "Copyright Registration",
  "Patent Registration",
  "IP Infringement",
  "Design Registration",
  "Free Legal Documents",
  "Business Contracts",
];

const WorkingProcess = () => {
  return (
    <section id="working-process-section" className="w-full bg-white py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-[#ecf2fd] rounded-2xl p-6 md:p-8 lg:p-10 border border-blue-100/50 shadow-sm">
          {/* Header Section with Enhanced Typography */}
          <div className="mb-12 md:mb-16 relative">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-4 h-4 rounded-full bg-[#072b47] mt-3 shrink-0"></div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#072b47] leading-tight mb-3">
                  Protect Your IP & Legal Rights
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Secure your brand with trademark registration, contracts, and legal support from trusted experts.
                  Protect your intellectual property with our comprehensive IP services.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Section - Services List with Enhanced UX */}
            <div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-[#072b47] mb-1">IP & Legal Services</h3>
                <p className="text-base text-gray-600">Protect your intellectual property rights</p>
              </div>
              <div className="space-y-2">
                {ipServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:shadow-sm cursor-pointer transition-all duration-300 group border border-transparent hover:border-blue-200"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shrink-0 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <Shield className="w-4 h-4 text-blue-700" strokeWidth={2} />
                    </div>
                    <span className="text-[#072b47] font-semibold text-base group-hover:text-blue-700 transition-colors flex-1 leading-snug">
                      {service}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Illustration */}
            <div className="flex items-center justify-center">
              <img
                src="/Home-page/Protect-your-ipnLegal.png"
                alt="IP and Legal Illustration"
                className="w-full h-auto max-w-[900px] scale-110 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;