import React from "react";
import {
    Activity,
    Briefcase,
    Building2,
    ShieldCheck,
    Truck,
    Settings
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const SyntheticRubberOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Industrial Growth
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Synthetic Rubber Plant – <span className="text-[#005a9c]">Strategic Setup</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Synthetic rubber is a critical material for the modern automotive, aerospace, and industrial sectors. With advancements in polymer science, the demand for specialty synthetic rubber variants is growing rapidly in India.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Setting up a manufacturing plant involves navigating complex chemical processes and ensuring strict adherence to environmental safety protocols and industrial standards.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Strategic Goal:
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            To establish high-yield, sustainable production lines that meet the diverse needs of tire manufacturers and industrial goods producers.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                            alt="Synthetic Rubber Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SyntheticRubberBusinessAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Business Benefits
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why invest in synthetic rubber manufacturing?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Strong margins in the specialty elastomer segments.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                            alt="Synthetic Rubber Business Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Growing Automotive Sector", desc: "Increased vehicle production directly drives tire and gasket demand." },
                        { title: "Export Expansion", desc: "India is emerging as a global hub for chemical and polymer exports." },
                        { title: "Technological Edge", desc: "Opportunity to implement advanced, efficient polymerization techniques." },
                        { title: "Diverse Grade Sourcing", desc: "Flexibility to cater to specialized niche industrial markets." },
                        { title: "Sustainable Practices", desc: "Adopting recycling and eco-friendly byproduct management." },
                        { title: "Long-term ROI", desc: "Strong margins in the specialty elastomer segments." }
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

const SyntheticRubberBusinessEligibility = () => {
    const list = [
        { title: "Pollution NOC", desc: "Mandatory CTE/CTO from the State Pollution Control Board." },
        { title: "Factory License", desc: "Certification under the Factories Act for operational safety." },
        { title: "Safety Audits", desc: "Regular industrial safety and chemical hazard assessments." },
        { title: "Waste Management", desc: "Authorization for handling and disposal of chemical waste." },
        { title: "DPIIT License", desc: "Industrial licensing based on the scale of production." },
        { title: "Fire Safety", desc: "Comprehensive NOC from the Fire Department." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Synthetic Rubber Business Setup?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Regulatory framework for chemical manufacturing.
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

const SyntheticRubberBusinessDocumentsSection = () => {
    const list = [
        "Detailed Project Report (DPR)",
        "Manufacturing Process Flowchart",
        "List of Raw Materials and Feedstock",
        "Plant Layout and Site Map",
        "Pollution Control Equipment Specifications",
        "Business Incorporation Documents",
        "Land Ownership / Lease Agreement",
        "Safety and Hazard Management Plan"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Synthetic Rubber Business Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documentation for project approval.
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

const SyntheticRubberBusinessProcessSection = () => {
    const steps = [
        { title: "Feasibility", desc: "Assessing feedstock availability and local market demand." },
        { title: "Engineering", desc: "Finalizing plant design and machinery procurement." },
        { title: "Licensing", desc: "Securing environmental and industrial authorizations." },
        { title: "Commissioning", desc: "Installation of polymerization reactors and testing lines." },
        { title: "Production", desc: "Launching commercial production with quality control." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Set Up a Synthetic Rubber Business?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Our systematic approach to plant establishment.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" alt="Synthetic Rubber Business Setup Process" className="w-full rounded-lg shadow-sm" />
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

const SyntheticRubberBusinessFeaturesSection = () => {
    const features = [
        { title: "Deep Industry Insight", desc: "Specialists in polymer and chemical business setups." },
        { title: "Compliance Mastery", desc: "Handling complex environmental NOCs with a high success rate." },
        { title: "Technology Partners", desc: "Connecting you with the best equipment providers." },
        { title: "End-to-End Support", desc: "From project report to post-launch compliance assistance." },
        { title: "Cost-Effective Solutions", desc: "Optimizing setup costs without compromising on quality." },
        { title: "Dedicated Advisor", desc: "A single point of contact for all regulatory and technical queries." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Experts in chemical and industrial consulting.
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

const SyntheticRubberBusiness = () => {
    const faqs = [
        {
            question: "What is Synthetic Rubber?",
            answer: "Synthetic rubber is an artificial elastomer, usually synthesized from petroleum byproducts. It is designed to mimic or improve upon the properties of natural rubber, particularly in terms of heat resistance, chemical durability, and elasticity."
        },
        {
            question: "Is synthetic rubber manufacturing considered a 'Red Category' industry?",
            answer: "Yes, similar to other chemical-heavy manufacturing processes, synthetic rubber production requires strict pollution control (CTE/CTO) and hazardous waste management authorizations from the SPCB/CPCB."
        },
        {
            question: "What are the common applications of synthetic rubber?",
            answer: "It is widely used in automotive tires, shoe soles, adhesives, sealants, gaskets, and various industrial hoses where high durability and chemical resistance are required."
        },
        {
            question: "What are the key licenses required for setup?",
            answer: "Key licenses include Business Incorporation, Factory License, Pollution NOC (CTE/CTO), Fire Department NOC, and Hazardous Waste Management Authorization."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Synthetic Rubber"
                heroTitleSuffix="Business Setup"
                heroSubtitle="Innovating the Elastomer Industry"
                heroDescription="Enter the high-growth synthetic rubber market with our expert setup services. We manage everything from technology selection to complex environmental licensing for your manufacturing unit."
                whatsIncludedList={[
                    "Technology Licensing & Setup",
                    "Environmental Clearance (Pollution NOC)",
                    "Hazardous Waste Authorization",
                    "Factory Act Compliance",
                    "Supply Chain Integration",
                    "BIS/ISO Certification Support"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Activity size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={<SyntheticRubberOverview />}
                advantages={<SyntheticRubberBusinessAdvantages />}
                eligibility={<SyntheticRubberBusinessEligibility />}
                documents={<SyntheticRubberBusinessDocumentsSection />}
                process={<SyntheticRubberBusinessProcessSection />}
                features={<SyntheticRubberBusinessFeaturesSection />}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Synthetic Rubber Business"
                faqs={faqs}
            />
        </div>
    );
};

export default SyntheticRubberBusiness;
