import { Link } from "react-router-dom";
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
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/Industry Setup/Green Hydrogen Plant Setup/benefits.png";
import overview from "../../../assets/Industry Setup/Green Hydrogen Plant Setup/overview.png";
import process from "../../../assets/Industry Setup/Green Hydrogen Plant Setup/process.jpg";

const GreenHydrogenPlantOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Renewable Energy
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is a Green Hydrogen Plant?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Green Hydrogen Plant is a facility that produces hydrogen fuel through the electrolysis of water using renewable energy sources such as solar or wind power. Unlike conventional hydrogen production methods that rely on fossil fuels, green hydrogen generation produces zero carbon emissions, making it one of the most promising clean energy solutions for the future.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Green hydrogen is increasingly used in sectors such as steel manufacturing, refineries, heavy transportation, and power generation. With India pushing for energy independence and decarbonization, setting up a hydrogen production facility has become a strategic investment opportunity.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited assists businesses in navigating the legal, regulatory, and operational framework required to establish a compliant hydrogen production infrastructure in India.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why Green Hydrogen is the Future of Energy
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Green hydrogen is rapidly emerging as a cornerstone of the global clean energy transition. Governments, industries, and investors are focusing on hydrogen-based solutions to achieve carbon neutrality and sustainable industrial growth.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Green Hydrogen Plant Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Zero Carbon Emissions", desc: "Green hydrogen production uses renewable electricity, eliminating greenhouse gas emissions." },
                        { title: "Energy Storage Solution", desc: "Hydrogen allows long-term storage of renewable energy and helps balance power supply fluctuations." },
                        { title: "Industrial Decarbonization", desc: "Industries like steel, cement, fertilizers, and refining can significantly reduce emissions using hydrogen fuel." },
                        { title: "Export Opportunities", desc: "India is emerging as a global hub for green hydrogen production and export." }
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
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Our Green Hydrogen Plant Setup Services
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Setting up a hydrogen production plant involves multiple legal, environmental, and technical approvals. Our experts provide a structured and streamlined process to help businesses establish hydrogen infrastructure efficiently.
                </p>
                <div className="space-y-6">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-2">Business Entity Setup</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">We help investors establish the right legal structure such as private limited companies, LLPs, or joint ventures to operate hydrogen production facilities.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-2">Land Identification & Compliance</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">Our team assists with zoning verification, industrial land documentation, and land conversion approvals required for hydrogen plant development.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-2">Environmental & Pollution Clearances</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">Green hydrogen plants require environmental permissions and pollution control approvals. We ensure all regulatory requirements are properly fulfilled.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-2">Power & Renewable Integration Approvals</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">Electrolysis plants require renewable power sources. We help obtain approvals for solar or wind integration with hydrogen production systems.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-2">Licensing & Government Registrations</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">We manage the required licenses, permits, and registrations necessary for operating a hydrogen production facility in India.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-2">Ongoing Compliance Management</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">After plant setup, we provide compliance management services to ensure smooth business operations and regulatory adherence.</p>
                    </div>
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Vyombiz managed by Clink Consultancy Services Private Limited ensures every step of the process is handled professionally so businesses can focus on operations and growth.
                </p>
            </div>
        </section>
    );
};

const GreenHydrogenPlantDocumentsSection = () => {
    const list = [
        "Company incorporation documents",
        "Land ownership or lease agreements",
        "Environmental impact assessment reports",
        "Pollution control board approvals",
        "Renewable power purchase agreements",
        "Project feasibility and technical reports"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Green Hydrogen Plant Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Businesses planning to establish a hydrogen production facility typically require the following documentation:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i} className="flex items-start">
                             <div className="mr-3 mt-1 text-yellow-400"><Zap size={18} /></div>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Our experts help prepare, verify, and submit all required documentation to ensure faster approvals.
                </p>
            </div>
        </section>
    );
};

const GreenHydrogenPlantProcessSection = () => {
    const steps = [
        { title: "Business Structure Setup", desc: "We help establish the legal entity required to operate the plant." },
        { title: "Land & Feasibility Assessment", desc: "Industrial land verification, project feasibility studies, and site selection are conducted." },
        { title: "Regulatory Approvals", desc: "Applications are submitted for environmental clearances, pollution control permissions, and industrial approvals." },
        { title: "Infrastructure & Utility Approvals", desc: "Renewable energy integration and power infrastructure permissions are obtained." },
        { title: "Compliance & Operational Setup", desc: "All operational licenses and regulatory filings are completed before plant commissioning." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Process of Setting Up a Green Hydrogen Plant
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Setting up a hydrogen facility involves several stages. Our structured process simplifies the journey for investors and companies.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Green Hydrogen Plant Setup Process" className="w-full rounded-lg shadow-sm" />
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
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                            Vyombiz managed by Clink Consultancy Services Private Limited ensures every step is handled smoothly and efficiently.
                        </p>
                        <div className="mt-12 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Setup
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const GreenHydrogenPlantFeaturesSection = () => {
    const policies = [
        { title: "National Green Hydrogen Mission", desc: "The government aims to position India as a global hub for hydrogen production and export through financial incentives and policy support." },
        { title: "Renewable Energy Incentives", desc: "Hydrogen plants integrated with renewable energy sources can benefit from subsidies, tax incentives, and policy support." },
        { title: "Industrial Decarbonization Programs", desc: "Industries using hydrogen as fuel can receive support under emission reduction initiatives." }
    ];

    const features = [
        { title: "Industry Expertise", desc: "Our specialists understand the regulatory landscape for clean energy and industrial projects." },
        { title: "End-to-End Compliance Support", desc: "From incorporation to operational compliance, we manage the entire process." },
        { title: "Faster Approvals", desc: "Our experience with regulatory authorities helps accelerate documentation and approval timelines." },
        { title: "Dedicated Advisory", desc: "Each project is supported by specialists who guide clients through every stage of the setup process." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="mb-14">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Government Policies Supporting Green Hydrogen in India
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        India has introduced several initiatives to promote hydrogen-based energy infrastructure. These policies are designed to encourage investment and accelerate clean energy adoption.
                    </p>
                    <div className="space-y-6 mb-6">
                        {policies.map((item, index) => (
                            <div key={index} className="bg-[#e6f0fa] rounded-2xl p-6">
                                <h3 className="text-xl font-semibold text-[#072b47] mb-2">{item.title}</h3>
                                <p className="text-[17px] text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        These policy frameworks make hydrogen production one of the most attractive clean energy investments in India.
                    </p>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for Green Hydrogen Plant Setup?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Setting up a hydrogen facility requires coordination across multiple regulatory authorities and compliance frameworks. Our expert-led approach helps businesses simplify complex processes.
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
                <div className="mt-8">
                    <p className="text-[17px] text-slate-600 leading-relaxed text-center font-semibold">
                        Vyombiz managed by Clink Consultancy Services Private Limited provides businesses with a structured pathway to establish hydrogen infrastructure with confidence.
                    </p>
                </div>
            </div>
        </section>
    );
};

const GreenHydrogenPlant = () => {
    const faqs = [
        {
            question: "What is the cost of setting up a green hydrogen plant in India?",
            answer: "The cost depends on production capacity, electrolysis technology, renewable power integration, and infrastructure requirements."
        },
        {
            question: "Is government approval required for hydrogen production plants?",
            answer: "Yes. Environmental clearances, industrial approvals, and power integration permissions are generally required before operations begin."
        },
        {
            question: "Can hydrogen plants use solar or wind energy?",
            answer: "Yes. Green hydrogen production specifically requires renewable electricity sources such as solar or wind energy."
        },
        {
            question: "How long does it take to set up a hydrogen plant?",
            answer: "The timeline depends on project scale, approvals, and infrastructure readiness but typically involves multiple regulatory stages."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Green Hydrogen"
                heroTitleSuffix="Plant Setup in India"
                heroSubtitle="Build the Future with Green Hydrogen"
                heroDescription="Launch your Green Hydrogen Plant in India with expert legal, regulatory, and compliance support. From approvals and land compliance to environmental clearances, our specialists help you establish a future-ready hydrogen infrastructure. End-to-End Green Hydrogen Plant Setup Services. Start your clean energy venture with confidence. Vyombiz managed by Clink Consultancy Services Private Limited simplifies the entire process of setting up a Green Hydrogen production facility, ensuring regulatory compliance and faster approvals."
                whatsIncludedList={[
                    "Expert Legal Support",
                    "Land Identification & Compliance",
                    "Environmental Clearances",
                    "Renewable Integration Approvals",
                    "Licensing & Registrations"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Zap size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}

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

