import { Link } from "react-router-dom";
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
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/Industry Setup/Fire Equipment Plant/benefits.png";
import overview from "../../../assets/Industry Setup/Fire Equipment Plant/overview.jpeg";
import process from "../../../assets/Industry Setup/Fire Equipment Plant/process.jpeg";

const FireEquipmentPlantOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Safety Industry
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is a Fire Equipment Manufacturing Plant?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A fire equipment manufacturing plant is a facility that produces fire protection products used in residential, commercial, and industrial spaces. These products are essential for fire prevention, control, and emergency response.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Common fire safety products manufactured include: Fire extinguishers, Fire hose reels, Fire alarms and detection systems, Fire sprinkler components, Fire hydrants and valves, Fire suppression systems.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Due to strict safety regulations in India, manufacturers must follow industrial safety norms, quality certifications, and regulatory approvals before starting operations.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Through structured compliance support, Vyombiz managed by Clink Consultancy Services Private Limited assists businesses in setting up legally compliant fire equipment manufacturing facilities across India.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why Start a Fire Equipment Manufacturing Business?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The fire safety equipment industry is expanding rapidly due to stricter safety regulations and increased infrastructure development.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Fire Equipment Plant Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Growing Market Demand", desc: "Government safety regulations and urban development are increasing demand for fire protection systems." },
                        { title: "Mandatory Fire Safety Compliance", desc: "Commercial buildings, factories, malls, and residential projects require certified fire safety equipment." },
                        { title: "Government Infrastructure Projects", desc: "Public infrastructure and smart city developments create consistent demand for fire protection products." },
                        { title: "High Profit Potential", desc: "Fire safety products are essential equipment with long-term recurring demand in industrial and commercial sectors." }
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
        { title: "Business Registration", desc: "The first step is establishing a legal business entity such as a Private Limited Company, LLP, or Proprietorship." },
        { title: "Factory License", desc: "If manufacturing operations involve machinery and labor, a Factory License under the Factories Act is mandatory." },
        { title: "Pollution Control Board Approval", desc: "Manufacturing units must obtain Consent to Establish (CTE) and Consent to Operate (CTO) from the Pollution Control Board." },
        { title: "BIS Certification", desc: "Certain fire safety equipment must comply with Bureau of Indian Standards (BIS) certification." },
        { title: "GST Registration", desc: "GST registration is required for selling and distributing fire safety equipment across India." },
        { title: "MSME / Udyam Registration", desc: "Registering as an MSME helps businesses access government benefits, subsidies, and easier financing options." },
        { title: "Fire Department Approval", desc: "Manufacturing plants producing fire safety equipment may require approvals from local fire authorities." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Licenses Required for Fire Equipment Plant Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    Starting a fire equipment manufacturing unit involves several legal registrations and industrial approvals.
                </p>
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <p key={i}>
                            <span className="font-semibold text-[#072b47]">{item.title} – </span>
                            {item.desc}
                        </p>
                    ))}
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Vyombiz managed by Clink Consultancy Services Private Limited simplifies these processes by handling documentation, compliance filings, and regulatory approvals.
                </p>
                <div className="mt-8 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start With Us Today
                            </Link>
                </div>
            </div>
        </section>
    );
};

const FireEquipmentPlantDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Fire Equipment Plant Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To complete registration and approvals, certain documents are necessary.
                </p>
                <div className="grid md:grid-cols-2 gap-8 text-[17px] text-slate-600 leading-relaxed">
                    <div>
                        <h3 className="font-semibold text-[#072b47] mb-3 text-[18px]">Business Documents</h3>
                        <ul className="space-y-2 mb-6 ml-4 list-disc">
                            <li>PAN card of directors/owners</li>
                            <li>Aadhaar card or identity proof</li>
                            <li>Address proof of promoters</li>
                            <li>Passport-size photographs</li>
                        </ul>
                        <h3 className="font-semibold text-[#072b47] mb-3 text-[18px]">Business Entity Documents</h3>
                        <ul className="space-y-2 ml-4 list-disc">
                            <li>Certificate of Incorporation</li>
                            <li>MOA and AOA (for companies)</li>
                            <li>Partnership deed (if applicable)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[#072b47] mb-3 text-[18px]">Factory Documents</h3>
                        <ul className="space-y-2 mb-6 ml-4 list-disc">
                            <li>Factory layout plan</li>
                            <li>Land ownership or lease agreement</li>
                            <li>Machinery details</li>
                        </ul>
                        <h3 className="font-semibold text-[#072b47] mb-3 text-[18px]">Compliance Documents</h3>
                        <ul className="space-y-2 ml-4 list-disc">
                            <li>Pollution control applications</li>
                            <li>Safety compliance documents</li>
                            <li>BIS certification documentation</li>
                        </ul>
                    </div>
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-10">
                    Professional assistance from Vyombiz managed by Clink Consultancy Services Private Limited ensures that documentation is prepared accurately to avoid delays in approvals.
                </p>
            </div>
        </section>
    );
};

const FireEquipmentPlantProcessSection = () => {
    const steps = [
        { title: "Business Planning & Feasibility", desc: "Market research, product selection, investment estimation, and production planning are conducted." },
        { title: "Business Entity Registration", desc: "Register the company structure such as Private Limited, LLP, or Partnership." },
        { title: "Industrial Land & Factory Setup", desc: "Select an industrial location that meets zoning and regulatory requirements." },
        { title: "License & Regulatory Approvals", desc: "Obtain factory licenses, pollution control clearances, and fire department approvals." },
        { title: "Machinery Installation", desc: "Install manufacturing machinery for fire extinguishers, valves, alarms, and safety components." },
        { title: "Quality Certification", desc: "Apply for BIS certification and other safety compliance approvals required for fire safety equipment." },
        { title: "Production & Market Entry", desc: "Begin production and establish distribution channels with builders, industries, and safety contractors." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process to Set Up a Fire Equipment Plant
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Setting up a fire equipment manufacturing facility involves several structured stages.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Fire Equipment Plant Setup Process" className="w-full rounded-lg shadow-sm" />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">Step {index + 1}</div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">{step.title}</h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200" />
                        <div className="mt-12 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Setup Today
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FireEquipmentPlantFeaturesSection = () => {
    const features = [
        { title: "End-to-End Setup Assistance", desc: "From business registration to factory licensing and compliance approvals." },
        { title: "Expert Regulatory Guidance", desc: "Professional consultants ensure that your plant meets industrial safety and manufacturing regulations." },
        { title: "Faster Documentation & Filings", desc: "Proper documentation preparation helps avoid delays in approvals." },
        { title: "Compliance-Focused Approach", desc: "Ensures your manufacturing unit operates legally and safely." },
        { title: "Dedicated Business Support", desc: "Continuous guidance throughout the setup process and beyond." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 mb-16">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-[#072b47] mb-6">
                        Cost of Setting Up a Fire Equipment Manufacturing Plant
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        The investment required depends on multiple factors such as scale, machinery, location, and product type. Key cost components include:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 text-[17px] text-slate-600 leading-relaxed mb-6 list-disc pl-5">
                        <li>Factory infrastructure and industrial land</li>
                        <li>Manufacturing machinery and equipment</li>
                        <li>Licensing and registration fees</li>
                        <li>Raw material procurement</li>
                        <li>Labor and operational expenses</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                        A small-to-medium fire safety equipment plant can typically require moderate to high initial investment, depending on production capacity and automation level.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Proper business planning and regulatory guidance from Vyombiz managed by Clink Consultancy Services Private Limited can help optimize setup costs while ensuring full compliance.
                    </p>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for Fire Equipment Plant Setup?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Launching a manufacturing plant involves complex regulatory processes and multiple government approvals. Vyombiz managed by Clink Consultancy Services Private Limited offers comprehensive support to make the entire setup process smooth and compliant.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <div className="bg-[#e6f0fa] w-12 h-12 rounded-full flex items-center justify-center text-yellow-400 mb-4">
                                <Settings size={24} />
                            </div>
                            <h3 className="text-[18px] font-semibold text-[#072b47] mb-2">{feature.title}</h3>
                            <p className="text-[15px] text-slate-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FireEquipmentPlantSetup = () => {
    const faqs = [
        {
            question: "Is BIS certification mandatory for fire safety equipment manufacturing?",
            answer: "Yes, certain fire safety equipment products require BIS certification to ensure compliance with Indian safety standards."
        },
        {
            question: "How long does it take to set up a fire equipment manufacturing plant?",
            answer: "The timeline can vary depending on licenses and approvals, but it typically takes several weeks to a few months to complete the setup process."
        },
        {
            question: "Can MSME registration benefit fire equipment manufacturers?",
            answer: "Yes, MSME registration provides benefits like government schemes, easier access to credit, and subsidy programs."
        },
        {
            question: "Do I need pollution control approval for this industry?",
            answer: "Yes, manufacturing plants usually require Consent to Establish and Consent to Operate from the Pollution Control Board."
        },
        {
            question: "Can Vyombiz help with the complete plant setup process?",
            answer: "Yes. Vyombiz managed by Clink Consultancy Services Private Limited provides end-to-end support including registration, licenses, compliance, and documentation."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Fire Equipment"
                heroTitleSuffix="Plant Setup"
                heroSubtitle="Start Your Fire Safety Equipment Manufacturing Plant — Legally & Efficiently"
                heroDescription="India’s demand for fire safety equipment is rising rapidly across industries, residential projects, and commercial infrastructure. Setting up a fire equipment manufacturing plant requires multiple approvals, regulatory compliance, and proper business structuring. Vyombiz managed by Clink Consultancy Services Private Limited helps entrepreneurs and manufacturers establish fire safety equipment plants with complete legal, licensing, and regulatory support."
                whatsIncludedList={[
                    "Business Registration",
                    "Factory & Industrial Licenses",
                    "Pollution & Safety Approvals",
                    "BIS & Fire Safety Compliance",
                    "Documentation & Advisory"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Flame size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />
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

