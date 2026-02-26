import React from "react";
import {
    Zap,
    Briefcase,
    Building2,
    Wind,
    Sun,
    Droplets
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const GreenHydrogenPlantOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Renewable Energy
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Green Hydrogen Plant – <span className="text-[#005a9c]">Strategic Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Green hydrogen is the cornerstone of India's transition to a sustainable energy future. Produced by splitting water using electricity from renewable sources like solar and wind, it is the only zero-emission hydrogen variant.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With the India green hydrogen market valued at billions and supported by the National Green Hydrogen Mission, this sector offers unparalleled growth opportunities for investors focused on a low-carbon economy.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Industry Goal:
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            To replace traditional Grey Hydrogen (fossil fuel-based) with Green Hydrogen, significantly reducing India's carbon footprint and dependence on energy imports.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80"
                            alt="Green Hydrogen Plant Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const GreenHydrogenPlantAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Strategic Benefits
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Leverage India's aggressive clean energy policies.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80"
                            alt="Green Hydrogen Plant Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Waiver of Charges", desc: "25-year waiver on interstate transmission charges for early projects." },
                        { title: "Priority Grid Access", desc: "Guaranteed connectivity to ensure energy supply and output stability." },
                        { title: "Land Allocation", desc: "Priority access to land within dedicated solar and renewable energy parks." },
                        { title: "RPO Credits", desc: "Production counts towards the manufacturer's Renewable Purchase Obligations." },
                        { title: "Logistical Support", desc: "Bunkers near ports facilitated by authorities for storage and export." },
                        { title: "Tax Incentives", desc: "Beneficiary policies designed to reduce the cost of clean energy equipment." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-[20px] font-semibold text-[#072b47] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const GreenHydrogenPlantEligibility = () => {
    const list = [
        { title: "Environmental NOC", desc: "CTE and CTO from the State/Central Pollution Control Board." },
        { title: "PESO Approval", desc: "Mandatory safety license from the Petroleum & Explosive Safety Organization." },
        { title: "Factory License", desc: "Registration under the Factories Act for operational safety." },
        { title: "Pollution Permits", desc: "Environmental Impact Assessment (EIA) for large-scale setups." },
        { title: "Building Safety", desc: "NOC from the Fire Department and local municipal authorities." },
        { title: "Labor Compliance", desc: "Adherence to hazardous waste management and health & safety standards." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Green Hydrogen Plant Setup?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Regulatory framework for green energy setup.
                </p>
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <p key={i}>
                            <span className="font-semibold text-[#072b47]">{item.title} – </span>
                            {item.desc}
                        </p>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>
            </div>
        </section>
    );
};

const GreenHydrogenPlantDocumentsSection = () => {
    const list = [
        "Certificate of Incorporation and Company PAN",
        "Plant Layout and Site Map",
        "Environmental Clearance Permits (SPCB/CPCB)",
        "Electricity Board Approval and Grid Permission",
        "Industrial & Factory Licenses",
        "PESO Safety Certification Documents",
        "Hazardous Waste Management Plan",
        "Detailed Project Report (DPR) and Feasibility Analysis"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Green Hydrogen Plant Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documentation for green hydrogen project licensing.
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

const GreenHydrogenPlantProcessSection = () => {
    const steps = [
        { title: "Project Design", desc: "Site identification and procurement of electrolyser technology." },
        { title: "Financing", desc: "Raising capital and ensuring funding for the 3-4 year setup phase." },
        { title: "Licensing", desc: "Securing environmental, industrial, and PESO safety permits." },
        { title: "Energy Sourcing", desc: "Procuring renewable power (Solar/Wind) and water sources." },
        { title: "Installation", desc: "Setting up storage systems and distribution infrastructure." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Set Up a Green Hydrogen Plant?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        From project entity formation to production.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80" alt="Green Hydrogen Plant Setup Process" className="w-full rounded-lg shadow-sm" />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">{index + 1}.</div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">{step.title}</h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200" />
                        <div className="mt-12 text-center">
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Setup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const GreenHydrogenPlantFeaturesSection = () => {
    const features = [
        { title: "Green Energy Experts", desc: "Successfully assisted in over 500 green energy and industrial projects." },
        { title: "Industry-Leading Success", desc: "99.2% success rate in securing complex licensing approvals." },
        { title: "Regulatory Liaison", desc: "Direct experience working with 50+ government authorities and bodies." },
        { title: "Capital Optimization", desc: "Saving significant licensing and compliance costs for greenpreneurs." },
        { title: "Network of Specialists", desc: "Dedicated consultants specializing in energy and environmental laws." },
        { title: "24/7 Assistance", desc: "Comprehensive support to simplify the complex journey of plant setup." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your partner in the green revolution.
                    </p>
                </div>
                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{feature.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300" />
                </div>
            </div>
        </section>
    );
};

const GreenHydrogenPlant = () => {
    const faqs = [
        {
            question: "What exactly is Green Hydrogen?",
            answer: "Green hydrogen is produced through electrolysis splitting water into hydrogen and oxygen using renewable energy sources like solar or wind. Unlike grey or blue hydrogen, it is completely emission-free."
        },
        {
            question: "What are the key government incentives for setup in India?",
            answer: "The government offers waivers on interstate transmission charges for 25 years (for projects before June 2025), priority grid connectivity, land in renewable energy parks, and streamlined clearances through a dedicated portal."
        },
        {
            question: "What is the typical setup cost for a green hydrogen plant?",
            answer: "The starting self-investment range for a small to mid-scale plant is approximately Rs. 10 to 15 crore. Large-scale industrial plants can require much higher investments depending on capacity."
        },
        {
            question: "How long does it take to establish a plant?",
            answer: "A large-scale green hydrogen plant setup can take around 3 to 4 years, factoring in technology procurement, installation, and rigorous regulatory approvals."
        },
        {
            question: "Which licenses are mandatory for legal operation?",
            answer: "Essential licenses include Environmental Clearance (Pollution NOC), Factory License, PESO Approval (explosives safety), and Fire Department NOC."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Green Hydrogen"
                heroTitleSuffix="Plant Setup"
                heroSubtitle="Fueling a Clean Energy Future"
                heroDescription="Be a pioneer in India's green revolution. We provide strategic consulting for Green Hydrogen plant setup, ensuring you leverage government incentives while meeting global environmental standards."
                whatsIncludedList={[
                    "Incentive & Policy Advisory",
                    "Renewable Energy Sourcing Support",
                    "Electrolyser Technology Consulting",
                    "Environmental & PESO Licensing",
                    "Grid Connectivity Liaison",
                    "Financial Viability Analysis"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Zap size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}
            <TrustedBrands />

            {/* ================= TALK EXPERT SECTION ================= */}
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<GreenHydrogenPlantOverview />}
                advantages={<GreenHydrogenPlantAdvantages />}
                eligibility={<GreenHydrogenPlantEligibility />}
                documents={<GreenHydrogenPlantDocumentsSection />}
                process={<GreenHydrogenPlantProcessSection />}
                features={<GreenHydrogenPlantFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Green Hydrogen Plant Setup"
                faqs={faqs}
            />

        </div>
    );
};

export default GreenHydrogenPlant;
