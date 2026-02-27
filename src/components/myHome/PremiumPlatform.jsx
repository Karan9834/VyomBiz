import React from "react";
import { useNavigate } from "react-router-dom";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

const businessServices = [
  { name: "Private Limited Company Registration", path: "/company-registration" },
  { name: "Limited Liability Partnership Registration", path: "/llp-registration" },
  { name: "One Person Company Registration", path: "/one-person-company-registration" },
  { name: "Sole Proprietorship Registration", path: "/sole-proprietorship-registration" },
  { name: "Producer Company Registration", path: "/producer-company-registration" },
  { name: "Partnership Firm Registration", path: "/partnership-firm-registration" },
  { name: "Startup India Registration", path: "/startup-india-registration" },
  { name: "NGO Registration", path: "/ngo-registration" },
  { name: "Fundraising for startup", path: "/fundraising-startup" },
];

const PremiumPlatform = () => {
  const navigate = useNavigate();
  return (
    <section id="premium-platform-section" className="w-full bg-white py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Updated Block with Matching Background */}
        <div className="bg-[#ecf2fd] rounded-2xl p-6 md:p-8 lg:p-10 border border-blue-100/50 shadow-sm">
          {/* Header Section with Enhanced Typography */}
          <div className="mb-12 md:mb-16 relative">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-4 h-4 rounded-full bg-[#FFE90A] mt-3 shrink-0 shadow-[0_0_10px_rgba(255,233,10,0.4)]"></div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#072b47] leading-tight mb-3">
                  Start and Register <span className="text-[#d99e00]">Your Business</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Launch your business journey with expert-guided incorporation, registrations, and licensing services.
                  Choose from our comprehensive range of business registration options tailored for your needs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Section - Services List with Enhanced UX */}
            <div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-[#072b47] mb-1">Available Services</h3>
                <p className="text-base text-gray-600">Select a service to get started</p>
              </div>
              <div className="space-y-2">
                {businessServices.map((service, index) => (
                  <div
                    key={index}
                    onClick={() => service.path !== "#" && navigate(service.path)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50/50 hover:shadow-sm cursor-pointer transition-all duration-300 group border border-transparent hover:border-[#005a9c]/20"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-[#005a9c]/10 rounded-lg shrink-0 group-hover:bg-[#FFE90A]/20 transition-all duration-300">
                      <Building2 className="w-4 h-4 text-[#005a9c] group-hover:text-[#072b47]" strokeWidth={2} />
                    </div>
                    <span className="text-[#072b47] font-semibold text-base group-hover:text-[#005a9c] transition-colors flex-1 leading-snug">
                      {service.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#005a9c] group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Illustration */}
            <div className="flex items-center justify-center">
              <img
                src="/Home-page/Start-and-register-your-bussiness.png"
                alt="Business Registration Illustration"
                className="w-full h-auto max-w-[900px] scale-110 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumPlatform;
