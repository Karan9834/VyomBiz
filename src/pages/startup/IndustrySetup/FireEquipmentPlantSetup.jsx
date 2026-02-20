import React from "react";
import {
    Flame,
    Briefcase,
    Building2,
    ShieldCheck,
    AlertCircle,
    Settings
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FireEquipmentPlantOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Safety Industry
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Fire Equipment Plant – <span className="text-[#005a9c]">Manufacturing Excellence</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The fire equipment industry is a critical sector driven by mandatory safety regulations across residential, commercial, and industrial spaces. With urbanization and industrial growth, the demand for certified, high-quality fire safety products is at an all-time high.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Setting up a manufacturing unit requires specialized testing laboratories, precision machining, and absolute adherence to Bureau of Indian Standards (BIS) norms to ensure equipment functionality during emergencies.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Industry Core:
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            In this sector, product reliability is non-negotiable. Every unit produced is a life-saving device, making quality control the most important operational pillar.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80"
                            alt="Fire Equipment Plant Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FireEquipmentPlantAdvantages = () => {
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
                        Why invest in fire safety manufacturing?
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1516591101565-5903b44e69b0?auto=format&fit=crop&q=80"
                            alt="Fire Equipment Plant Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Compliance Driven", desc: "Market is fueled by mandatory statutory requirements." },
                        { title: "Public Trust", desc: "Building a brand associated with safety and life protection." },
                        { title: "Export Potential", desc: "High demand in the Middle East, Africa, and Southeast Asia." },
                        { title: "Modern Technology", desc: "Transitioning to AI-integrated fire detection systems." },
                        { title: "Multiple Verticals", desc: "Servicing retail, industrial, and government sectors." },
                        { title: "Consistent ROI", desc: "Stable recurring business through refills and system maintenance." }
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

const FireEquipmentPlantEligibility = () => {
    const list = [
        { title: "BIS/ISI Mark", desc: "Crucial certification for product legality and trust." },
        { title: "PESO License", desc: "Required for high-pressure fire extinguisher cylinder manufacturing." },
        { title: "Factory License", desc: "Registration for workspace and machinery operations." },
        { title: "Pollution NOC", desc: "Consent from SPCB for manufacturing activities." },
        { title: "Fire Safety Audit", desc: "Internal safety clearances for the production facility." },
        { title: "Trademark", desc: "Protecting your safety brand in a competitive market." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Fire Equipment Plant Setup?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Navigating the safety regulatory framework.
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

const FireEquipmentPlantDocumentsSection = () => {
    const list = [
        "Detailed Project Report (DPR) with Laboratory setup",
        "Plant Layout and Infrastructure Blueprint",
        "Technical Specifications of Raw Materials (Steel, Chemicals)",
        "Pollution Monitoring and Control Plan",
        "Business Registration Certificates",
        "Land Possession/Lease Documents",
        "Testing Equipment List and Calibration Certificates",
        "Safety and Hazard Management Protocol"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Fire Equipment Plant Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Required paperwork for industrial safety plant setup.
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

const FireEquipmentPlantProcessSection = () => {
    const steps = [
        { title: "Product Selection", desc: "Deciding the range of fire safety equipment to manufacture." },
        { title: "Compliance Audit", desc: "Pre-assessing BIS norms and lab requirements for the site." },
        { title: "Licensing", desc: "Obtaining Factory, Pollution, and PESO authorizations." },
        { title: "Installation", desc: "Setting up production lines and the mandatory testing lab." },
        { title: "BIS Certification", desc: "Final inspection by authorities for the ISI mark grant." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Set Up a Fire Equipment Plant?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Our systematic approach to safety manufacturing.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80" alt="Fire Equipment Plant Setup Process" className="w-full rounded-lg shadow-sm" />
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

const FireEquipmentPlantFeaturesSection = () => {
    const features = [
        { title: "BIS Specialists", desc: "Extensive experience in securing ISI marks for diverse products." },
        { title: "PESO Coordination", desc: "Liaisoning for high-pressure equipment manufacturing licenses." },
        { title: "Complete Industrial Setup", desc: "From lab design to machinery selection and procurement." },
        { title: "Regulatory Mastery", desc: "Navigating SPCB and Factory Act requirements efficiently." },
        { title: "Post-Setup Support", desc: "Assisting in annual returns, audits, and certification renewals." },
        { title: "Quality Consultants", desc: "Helping you build a manufacturing unit that meets global standards." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Experts in industrial safety consulting.
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

const FireEquipmentPlantSetup = () => {
    const faqs = [
        {
            question: "Is BIS Certification mandatory for fire equipment?",
            answer: "Yes, almost all fire-fighting equipment, including extinguishers, hoses, and alarms, must carry the ISI mark (BIS certification) to be legally sold in the Indian market."
        },
        {
            question: "What licenses are required for setup?",
            answer: "Key licenses include Factory License, Pollution NOC, PESO Authorization (for specific high-pressure cylinders), Fire Department NOC, and Business Incorporation."
        },
        {
            question: "What are the common products manufactured?",
            answer: "The portfolio includes Fire Extinguishers (various types), Fire Hydrant Systems, Smoke Detectors, Fire Sprinklers, and Specialized Fire-Retardant Clothing."
        },
        {
            question: "Can I export fire equipment from India?",
            answer: "Yes, India is a growing exporter of fire safety goods. You will need to comply with international standards like CE or UL depending on your target export market."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Fire Equipment"
                heroTitleSuffix="Plant Setup"
                heroSubtitle="Manufacturing for Safety & Compliance"
                heroDescription="Lead the safety revolution with your own fire equipment manufacturing unit. We guide you through the rigorous BIS certification process and industrial licensing for a compliant startup."
                whatsIncludedList={[
                    "BIS/ISI Certification Advisory",
                    "PESO License Support (for cylinders)",
                    "Factory Act & Safety Audit Compliance",
                    "SPCB Pollution NOC Services",
                    "Plant Machinery & Lab Setup",
                    "Standard Operating Procedure (SOP) Design"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Flame size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={<FireEquipmentPlantOverview />}
                advantages={<FireEquipmentPlantAdvantages />}
                eligibility={<FireEquipmentPlantEligibility />}
                documents={<FireEquipmentPlantDocumentsSection />}
                process={<FireEquipmentPlantProcessSection />}
                features={<FireEquipmentPlantFeaturesSection />}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Fire Equipment Plant Setup"
                faqs={faqs}
            />
        </div>
    );
};

export default FireEquipmentPlantSetup;
