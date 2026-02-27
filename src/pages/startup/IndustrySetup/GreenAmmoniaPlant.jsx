import React from "react";
import {
    Droplet,
    Briefcase,
    Building2,
    ShieldCheck,
    Globe,
    Zap
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const GreenAmmoniaPlantOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Eco-Industrial Fuel
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Green Ammonia Setup – <span className="text-[#005a9c]">Sustainable Innovation</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Green ammonia is an eco-friendly alternative to conventional ammonia. While traditional ammonia is produced from natural gas and emits significant CO2, green ammonia is produced using renewable energy and water, making it a critical tool for global decarbonization.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            In India, the demand is surging as industries strive to meet net-zero carbon targets. With a projected CAGR of over 117%, green ammonia is not just a fuel—it's one of the most stable mediums for hydrogen storage and transport.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Key Advantage:
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Green ammonia can be easily 'cracked' and purified back into hydrogen gas, solving the logistical and storage challenges typically associated with pure hydrogen.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80"
                            alt="Green Ammonia Plant Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const GreenAmmoniaPlantAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Strategic Market Advantages
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why green ammonia is the future of industrial energy.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1574966739982-2b672314dca9?auto=format&fit=crop&q=80"
                            alt="Green Ammonia Plant Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Energy Independence", desc: "Reduces reliance on imported natural gas and fossil fuels." },
                        { title: "Hydrogen Carrier", desc: "Acts as an efficient, stable medium for global hydrogen shipping." },
                        { title: "Reduced Emissions", desc: "Generates electricity with only water and nitrogen as byproducts." },
                        { title: "Export Powerhouse", desc: "India aims to capture 10% of the massive global green ammonia market." },
                        { title: "Subsidized Operations", desc: "Access to government incentives under the National Green Hydrogen Mission." },
                        { title: "Versatile Applications", desc: "Ideal for fertilizers, maritime shipping fuel, and industrial power." }
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

const GreenAmmoniaPlantEligibility = () => {
    const list = [
        { title: "Environmental Clearance", desc: "Approvals from the Ministry of Environment (MoEFCC) and CPCB." },
        { title: "Industrial License", desc: "Mandatory for handling hazardous chemicals from DPIIT." },
        { title: "Pollution NOC", desc: "CTE and CTO from state boards for air and water emissions." },
        { title: "Safety Certificates", desc: "Structural and fire safety certificates from municipal bodies." },
        { title: "Land Proof", desc: "Proof of ownership or registered long-term lease for the site." },
        { title: "Electricity Permits", desc: "Connections from state boards to access renewable energy benefits." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Green Ammonia Plant Setup?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Essential approvals for sustainable manufacturing.
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
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>
            </div>
        </section>
    );
};

const GreenAmmoniaPlantDocumentsSection = () => {
    const list = [
        "Certificate of Incorporation and GST/PAN Details",
        "Pollution NOC (CTE/CTO) and Waste Management Permits",
        "Detailed Project Report (DPR) and Feasibility Studies",
        "Groundwater Usage and Environmental Impact Assessments",
        "Structural and Fire Safety Certificates",
        "Technical Specifications from Technology Providers",
        "Land Ownership / Occupancy Proof",
        "Industrial Licensing Application Forms"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Green Ammonia Plant Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Documentation for industrial and regulatory clearances.
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

const GreenAmmoniaPlantProcessSection = () => {
    const steps = [
        { title: "Feasibility Study", desc: "Assessing land, power, and water availability for the project." },
        { title: "Technology Partnering", desc: "Collaborating with equipment manufacturers for modular designs." },
        { title: "Regulatory Filing", desc: "Obtaining statutory clearances through the government portals." },
        { title: "Plant Commissioning", desc: "Speedy installation of pre-fabricated equipment within months." },
        { title: "Production & Export", desc: "Setting up bunkers and supply chains for local and global sale." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Set Up a Green Ammonia Plant?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Guiding you through the green energy transition.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80" alt="Green Ammonia Plant Setup Process" className="w-full rounded-lg shadow-sm" />
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
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Setup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const GreenAmmoniaPlantFeaturesSection = () => {
    const features = [
        { title: "Decade of Experience", desc: "A pioneer in assisting greenpreneurs with industrial setups." },
        { title: "Expert Consultant Network", desc: "Access to 200+ specialized environmental and energy consultants." },
        { title: "Vast Investment Insights", desc: "Enabled over ₹5000 crore in green energy investments." },
        { title: "Compliance Specialists", desc: "Deep knowledge of the National Green Hydrogen Mission policies." },
        { title: "Feasibility Experts", desc: "Conducting robust viability studies to ensure your project's ROI." },
        { title: "End-to-End Assistance", desc: "Handling everything from licensing to technology provider liaison." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        The leader in green energy consulting.
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

const GreenAmmoniaPlant = () => {
    const faqs = [
        {
            question: "What makes Ammonia 'Green'?",
            answer: "Ammonia is considered 'Green' when it is produced using renewable energy through water electrolysis, utilizing green hydrogen as the primary ingredient. This replaces the traditional process that relies on natural gas."
        },
        {
            question: "Is India well-positioned for green ammonia production?",
            answer: "Yes, India aims to capture 10% of the global market. The government offers incentives like 25-year transmission charge waivers and priority grid connections to attract investors and manufacturers."
        },
        {
            question: "What are the common storage methods for green ammonia?",
            answer: "Green ammonia can be stored by maintaining container pressure between 10–15 bar or by lowering the temperature to -33°C. It is highly compatible with existing storage and transport infrastructure."
        },
        {
            question: "What is the typical cost for setting up a plant?",
            answer: "Production costs generally range between $720-$1,400 per ton. Large-scale projects in India have seen investments ranging from Rs 12,000 crore to Rs 40,000 crore depending on capacity and location."
        },
        {
            question: "What are the biggest challenges in this sector?",
            answer: "Major challenges include high initial capital, regulatory non-uniformity for cross-border trade, and ensuring a steady supply of firm renewable power and water resources."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Green Ammonia"
                heroTitleSuffix="Plant Setup"
                heroSubtitle="Transitioning to Sustainable Industrial Fuels"
                heroDescription="Lead the shift towards carbon-free energy. We offer specialized consulting for Green Ammonia plant setup, helping you navigate complex environmental clearances and leverage national green energy missions."
                whatsIncludedList={[
                    "Green Hydrogen Integration Advisory",
                    "Modular Plant Design Consulting",
                    "National Green Hydrogen Mission Support",
                    "Hazardous Chemical Licensing",
                    "Export & Bunker Strategy",
                    "Pollution Control (NOC) Liaison"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Droplet size={20} /> },
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
                overview={<GreenAmmoniaPlantOverview />}
                advantages={<GreenAmmoniaPlantAdvantages />}
                eligibility={<GreenAmmoniaPlantEligibility />}
                documents={<GreenAmmoniaPlantDocumentsSection />}
                process={<GreenAmmoniaPlantProcessSection />}
                features={<GreenAmmoniaPlantFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Green Ammonia Plant Setup"
                faqs={faqs}
            />

        </div>
    );
};

export default GreenAmmoniaPlant;
