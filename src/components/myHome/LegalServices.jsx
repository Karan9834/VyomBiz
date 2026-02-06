import React, { useState } from "react";
import { ArrowRight, BarChart3 } from "lucide-react";

// Example data for 7 options and their 4 cards each
const options = [
  {
    id: 1,
    name: "Business Registration",
    cards: [
      { title: "Company Registration", desc: "Company Registration in India Save 50% Today on Professional Services Avail consultation from our seasoned consultants for expert suppor.." },
      { title: "LLP Registration", desc: "LLP Registration in India Avail 50% Off – Professional Services Facing a delay in the process of online LLP registration in India?.." },
      { title: "One Person Company Registration", desc: "One Person Company Registration Facing challenges in making the desired choice for solopreneurs? Get expert assistance for easy-breezy On." },
      { title: "Partnership Firm Registration", desc: "Partnership Firm Registration in India Grab 50% Off on Vyombiz® Expert Services Are you seeking partnership firm registration in Ind.." },
    ],
  },
  {
    id: 2,
    name: "Government Registration",
    cards: [
      { title: "MSME Registration", desc: "MSME Registration - Get Your Udyam Certificate Easily Looking to grow your business and access government schemes and subsidies?.." },
      { title: "IEC Registration", desc: "IEC Registration Free Consultation for Import Export Code License Are you looking to scale up your business outside India? Manage your.." },
      { title: "Drone Registration", desc: "Drone Registration Are you excited about launching your drone business? Secure your drone registration with Vyombiz and commence your dro.." },
      { title: "EPF Registration", desc: "EPF Registration in India Get Approved with Zero Hassle Facing delays in EPF registration and afraid of making mistakes? Our experts e.." },
    ],
  },
  {
    id: 3,
    name: "Government Licenses",
    cards: [
      { title: "Shop & Establishment License", desc: "Shop and Establishment License The Shops and Establishment act makes sure that both organized and unorganized sectors are providing appropr.." },
      { title: "PSARA License", desc: "PSARA License in India Limited-Time Deal: Save Up to 50% on Days Worried about the challenges in PSARA License registration in India? We.." },
      { title: "CE Certification", desc: "Apply For CE Certification in India Are you experiencing delays in getting your CE certification online? Let Vyombiz experts ease the pr.." },
      { title: "Trade License", desc: "Trade License in India Are you seeking a trade license in India but unaware of the trade license online process? At Vyombiz, we ensure a.." },
    ],
  },
  {
    id: 4,
    name: "RBI Regulatory",
    cards: [
      { title: "NBFC Registration", desc: "NBFC Registration in India Save 50% Today on Professional Services Is your business engaged in financial activities such as.." },
      { title: "NBFC Takeover", desc: "NBFC Takeover Worried about legal hassles in your NBFC takeover and unsure about the true value of your target NBFC? Schedule a f.." },
      { title: "FFMC License", desc: "FFMC License in India Are you all set to operate legally in the foreign exchange market? If yes, you must opt for the FFMC license in In.." },
      { title: "Microfinance Company Registration", desc: "Microfinance Company Registration Experience Smooth Funding and get reasonable Microfinance company registration services for small.." },
    ],
  },
  {
    id: 5,
    name: "Environment Laws",
    cards: [
      { title: "EPR Fulfillment in E-Waste Management", desc: "EPR Compliance for E-Waste Management Achieve effortless EPR compliance for E-Waste management with Vyombiz. Let experts at Vyombiz guide y.." },
      { title: "E-Waste Recycling Authorization", desc: "E-Waste Recycling Authorization Ready to get your e-waste recycling authorization? Let Vyombiz guide you in taking the first step.." },
      { title: "Refurbisher Authorization and License", desc: "Refurbisher Authorization and License Ready to obtain your refurbisher authorization and license? Ensure compliance, build trust, and dri.." },
      { title: "Plastic Waste Authorization", desc: "Plastic Waste Authorization in India Get 50% off on Professional Services Today Unmanaged plastic waste can harm your brand�.." },
    ],
  },
  {
    id: 6,
    name: "Tax Filing",
    cards: [
      { title: "GST Registration", desc: "GST Registration Online Step-by-Step (REG-01) & Expert Help Are you facing challenges during GST registration? Get your GSTIN quickl.." },
      { title: "TDS Return Filing", desc: "TDS Return Filing Online Worried about missing the TDS return filing online deadlines? Vyombiz has helped 25K+ employers and organisati.." },
      { title: "GST Return Filing", desc: "GST Return Filing Starting from Just ₹ 999/ Month Do you want to maximize your input tax credit while filing GST? Talk to our experts.." },
      { title: "Professional Tax Registration", desc: "Professional Tax Registration Apply for Professional Tax Registration with Vyombiz and experience guaranteed application filing within 48.." },
    ],
  },
  {
    id: 7,
    name: "IPR",
    cards: [
      { title: "Trademark Assignment", desc: "Trademark Assignment To transfer the ownership of a trademark from one party to another whether along with or without the goodwill of the.." },
      { title: "Trademark Objection", desc: "Trademark Objection Get Vyombiz expert assistance for the trademark objection reply in 2 days. Our senior IP lawyers draft a document.." },
      { title: "Trademark Registration", desc: "Trademark Registration in India Avail 50% Off on Professional Services Are you finding it difficult to register for a trademark?.." },
      { title: "Trademark Rectification", desc: "Trademark Rectification in India In Just ₹2499 +Govt.Fee Did you discover an error in the trademark registration? If yes, get.." },
    ],
  },
];

// SVG Icon Component


const LegalServices = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].id);
  const currentCards = options.find((opt) => opt.id === selectedOption).cards;

  return (
    <section className="py-16 bg-slate-50">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">Legal Help Across Wide Range of Services</h2>
        <div className="w-16 h-1 bg-[#f1a134] mx-auto rounded mb-6"></div>
        <p className="text-gray-700 text-sm max-w-4xl mx-auto leading-relaxed">
          Vyombiz focuses predominantly on assisting entrepreneurs or SMEs by providing services such as Business Registration, Government Registration, Regulatory Measures, Tax Filing, IPR, and much more.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-0">
        {/* Left side - Dark Blue Sidebar */}
        <div className="md:w-[30%] bg-[#005a9c] rounded-2xl p-6 flex flex-col gap-0 relative">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedOption(option.id)}
              className={`flex items-center gap-3 p-4 transition-all duration-300 text-left relative ${selectedOption === option.id
                ? "bg-white text-[#005a9c] -mx-6 px-10 shadow-lg"
                : "bg-transparent text-white hover:bg-white/10 rounded-lg"
                }`}
            >
              <div className={`shrink-0 ${selectedOption === option.id ? "text-red-500" : "text-white"}`}>
                <BarChart3 className="w-full h-full" />
              </div>
              <div className="flex-1">
                <div className={`font-bold text-sm ${selectedOption === option.id ? "text-[#005a9c]" : "text-white"}`}>
                  {option.name}
                </div>
                <div className={`text-xs mt-0.5 ${selectedOption === option.id ? "text-slate-600" : "text-white/80"}`}>
                  {option.id === 1 && "We help you register your business"}
                  {option.id === 2 && "Get govt. registration certificates"}
                  {option.id === 3 && "Getting govt. licenses with us is easy"}
                  {option.id === 4 && "Streamline compliance with our experts"}
                  {option.id === 5 && "We ensure eco-sustainable growth"}
                  {option.id === 6 && "We simplify the process of tax filing"}
                  {option.id === 7 && "We provide top-notch IPR Services"}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Orange Vertical Separator Line */}
        <div className="hidden md:block w-1 bg-[#f1a134] mx-6 rounded-full"></div>

        {/* Right side - White Cards Grid with Shadow */}
        <div className="md:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-6">
          {currentCards.map((card, index) => (
            <div key={index} className="flex flex-col p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all group relative min-h-[180px]">
              <div className="flex gap-4">
                {/* Chart Icon */}
                <div className="shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                  <BarChart3 className="w-full h-full" strokeWidth={2.5} />
                </div>

                {/* Text Content */}
                <div className="flex-1 pb-12">
                  <h4 className="font-bold text-[#005a9c] text-base mb-2 leading-tight">
                    {card.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Circular Arrow Button */}
              <button className="absolute bottom-6 right-6 w-10 h-10 bg-[#005a9c] hover:bg-[#004a7c] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalServices;
