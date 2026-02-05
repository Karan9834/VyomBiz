import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Example data for 7 options and their 4 cards each
const options = [
  {
    id: 1,
    name: "Business Registration",
    cards: [
      { title: "Company Registration", desc: "Company Registration in India Save 50% Today on Professional Services Avail consultation from our seasoned consultants for expert suppor.." },
      { title: "LLP Registration", desc: "LLP Registration in India Avail 50% Off – Professional Services Facing a delay in the process of online LLP registration in India?.." },
      { title: "One Person Company Registration", desc: "One Person Company Registration Facing challenges in making the desired choice for solopreneurs? Get expert assistance for easy-breezy On." },
      { title: "Partnership Firm Registration", desc: "Partnership Firm Registration in India Grab 50% Off on Corpbiz® Expert Services Are you seeking partnership firm registration in Ind.." },
    ],
  },
  {
    id: 2,
    name: "Government Registration",
    cards: [
      { title: "MSME Registration", desc: "MSME Registration - Get Your Udyam Certificate Easily Looking to grow your business and access government schemes and subsidies?.." },
      { title: "IEC Registration", desc: "IEC Registration Free Consultation for Import Export Code License Are you looking to scale up your business outside India? Manage your.." },
      { title: "Drone Registration", desc: "Drone Registration Are you excited about launching your drone business? Secure your drone registration with Corpbiz and commence your dro.." },
      { title: "EPF Registration", desc: "EPF Registration in India Get Approved with Zero Hassle Facing delays in EPF registration and afraid of making mistakes? Our experts e.." },
    ],
  },
  {
    id: 3,
    name: "Government Licenses",
    cards: [
      { title: "Shop & Establishment License", desc: "Shop and Establishment License The Shops and Establishment act makes sure that both organized and unorganized sectors are providing appropr.." },
      { title: "PSARA License", desc: "PSARA License in India Limited-Time Deal: Save Up to 50% on Days Worried about the challenges in PSARA License registration in India? We.." },
      { title: "CE Certification", desc: "Apply For CE Certification in India Are you experiencing delays in getting your CE certification online? Let Corpbiz experts ease the pr.." },
      { title: "Trade License", desc: "Trade License in India Are you seeking a trade license in India but unaware of the trade license online process? At Corpbiz, we ensure a.." },
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
      { title: "EPR Fulfillment in E-Waste Management", desc: "EPR Compliance for E-Waste Management Achieve effortless EPR compliance for E-Waste management with Corpbiz. Let experts at Corpbiz guide y.." },
      { title: "E-Waste Recycling Authorization", desc: "E-Waste Recycling Authorization Ready to get your e-waste recycling authorization? Let Corpbiz guide you in taking the first step.." },
      { title: "Refurbisher Authorization and License", desc: "Refurbisher Authorization and License Ready to obtain your refurbisher authorization and license? Ensure compliance, build trust, and dri.." },
      { title: "Plastic Waste Authorization", desc: "Plastic Waste Authorization in India Get 50% off on Professional Services Today Unmanaged plastic waste can harm your brand�.." },
    ],
  },
  {
    id: 6,
    name: "Tax Filing",
    cards: [
      { title: "GST Registration", desc: "GST Registration Online Step-by-Step (REG-01) & Expert Help Are you facing challenges during GST registration? Get your GSTIN quickl.." },
      { title: "TDS Return Filing", desc: "TDS Return Filing Online Worried about missing the TDS return filing online deadlines? Corpbiz has helped 25K+ employers and organisati.." },
      { title: "GST Return Filing", desc: "GST Return Filing Starting from Just ₹ 999/ Month Do you want to maximize your input tax credit while filing GST? Talk to our experts.." },
      { title: "Professional Tax Registration", desc: "Professional Tax Registration Apply for Professional Tax Registration with Corpbiz and experience guaranteed application filing within 48.." },
    ],
  },
  {
    id: 7,
    name: "IPR",
    cards: [
      { title: "Trademark Assignment", desc: "Trademark Assignment To transfer the ownership of a trademark from one party to another whether along with or without the goodwill of the.." },
      { title: "Trademark Objection", desc: "Trademark Objection Get Corpbiz expert assistance for the trademark objection reply in 2 days. Our senior IP lawyers draft a document.." },
      { title: "Trademark Registration", desc: "Trademark Registration in India Avail 50% Off on Professional Services Are you finding it difficult to register for a trademark?.." },
      { title: "Trademark Rectification", desc: "Trademark Rectification in India In Just ₹2499 +Govt.Fee Did you discover an error in the trademark registration? If yes, get.." },
    ],
  },
];

// SVG Icon Component
const BarChartSVG = () => (
  <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.63158 24.4219H1.15789C0.850802 24.4219 0.556287 24.2888 0.339139 24.0519C0.121992 23.815 0 23.4937 0 23.1587V13.0535C0 12.7184 0.121992 12.3972 0.339139 12.1603C0.556287 11.9234 0.850802 11.7903 1.15789 11.7903H4.63158C4.93867 11.7903 5.23319 11.9234 5.45033 12.1603C5.66748 12.3972 5.78947 12.7184 5.78947 13.0535V23.1587C5.78947 23.4937 5.66748 23.815 5.45033 24.0519C5.23319 24.2888 4.93867 24.4219 4.63158 24.4219ZM12.7368 24.4219H9.26316C8.95607 24.4219 8.66155 24.2888 8.4444 24.0519C8.22726 23.815 8.10526 23.4937 8.10526 23.1587V1.68503C8.10526 1.35002 8.22726 1.02873 8.4444 0.791845C8.66155 0.554957 8.95607 0.421875 9.26316 0.421875H12.7368C13.0439 0.421875 13.3384 0.554957 13.5556 0.791845C13.7727 1.02873 13.8947 1.35002 13.8947 1.68503V23.1587C13.8947 23.4937 13.7727 23.815 13.5556 24.0519C13.3384 24.2888 13.0439 24.4219 12.7368 24.4219ZM20.8421 24.4219H17.3684C17.0613 24.4219 16.7668 24.2888 16.5497 24.0519C16.3325 23.815 16.2105 23.4937 16.2105 23.1587V9.26398C16.2105 8.92897 16.3325 8.60768 16.5497 8.37079C16.7668 8.1339 17.0613 8.00082 17.3684 8.00082H20.8421C21.1492 8.00082 21.4437 8.1339 21.6609 8.37079C21.878 8.60768 22 8.92897 22 9.26398V23.1587C22 23.4937 21.878 23.815 21.6609 24.0519C21.4437 24.2888 21.1492 24.4219 20.8421 24.4219Z"
      fill="white"
    />
  </svg>
);

const LegalServices = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].id);
  const currentCards = options.find((opt) => opt.id === selectedOption).cards;

  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold mb-2">Legal Help Across Wide Range of Services</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto rounded mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Corpbiz focuses predominantly on assisting entrepreneurs or SMEs by providing services such as Business Registration, Government Registration, Regulatory Measures, Tax Filing, IPR, and much more.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6">
        {/* Left side options */}
        <div className="md:w-1/4 flex md:flex-col gap-3 overflow-x-auto no-scrollbar pb-4 md:pb-0 px-1">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedOption(option.id)}
              className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 border shrink-0 md:shrink ${selectedOption === option.id
                ? "bg-yellow-500 border-yellow-500 text-white shadow-lg"
                : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700"
                }`}
            >
              <div className={selectedOption === option.id ? "brightness-0 invert" : ""}>
                <BarChartSVG />
              </div>
              <span className="font-bold text-sm whitespace-nowrap">{option.name}</span>
            </button>
          ))}
        </div>

        {/* Right side cards */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {currentCards.map((card, index) => (
            <div key={index} className="flex flex-col p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all group relative min-h-[180px]">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <BarChartSVG />
                </div>
                <div className="flex-1 pb-8">
                  <h4 className="font-black text-slate-900 text-lg mb-2 leading-tight group-hover:text-blue-600 transition-colors uppercase tracking-tight">{card.title}</h4>
                  <p className="text-slate-500 font-medium text-[13px] leading-relaxed line-clamp-3">{card.desc}</p>
                </div>
              </div>
              <button className="absolute bottom-6 right-6 w-10 h-10 bg-yellow-500 hover:bg-[#e6951b] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalServices;
