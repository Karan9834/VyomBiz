import { Link } from "react-router-dom";
import React from "react";
import {
    Factory,
    Briefcase,
    Building2,
    Settings,
    ShieldCheck,
    Truck
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import overview from "../../../assets/Industry Setup/Carbon Black Plant Setup/overview.jpg";
import benefits from "../../../assets/Industry Setup/Carbon Black Plant Setup/benefits.jpg";
import process from "../../../assets/Industry Setup/Carbon Black Plant Setup/process.jpg";


const CarbonBlackOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Industrial Setup
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is Carbon Black Manufacturing?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Carbon black is a fine black powder produced by the incomplete combustion of heavy petroleum products such as coal tar, ethylene cracking tar, or FCC tar. It is widely used as a reinforcing agent in tyres and rubber products and as a pigment in inks, plastics, and coatings.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Due to its industrial importance, carbon black production is considered a regulated manufacturing activity in India. Businesses must comply with environmental laws, factory regulations, and pollution control norms before starting operations.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            When entrepreneurs set up such manufacturing facilities, they often rely on professional support to ensure all legal approvals and registrations are completed smoothly. Businesses choosing Vyombiz managed by Clink Consultancy Services Private Limited benefit from structured compliance assistance, documentation support, and regulatory guidance required for industrial setup.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Carbon Black Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CarbonBlackManufacturingAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why Start a Carbon Black Manufacturing Business?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The demand for carbon black continues to grow globally due to increasing consumption in tyre manufacturing, automotive parts, plastics, and specialty chemicals.
                    </p>
                    <div className="mt-10">
                        <img
                            src={process}
                            alt="Carbon Black Manufacturing Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Rising demand", desc: "Rising demand from the rubber and tyre industry." },
                        { title: "Growing usage", desc: "Growing usage in plastics, coatings, and printing inks." },
                        { title: "Automobile expansion", desc: "Expansion of automobile manufacturing in India." },
                        { title: "Export opportunities", desc: "Export opportunities in global industrial markets." },
                        { title: "High scalability", desc: "High scalability for industrial manufacturing units." },
                        { title: "Profitable venture", desc: "With the right setup, carbon black manufacturing can become a highly profitable and sustainable industrial venture." }
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

const CarbonBlackEligibility = () => {
    const list = [
        { title: "Business Registration", desc: "A legal entity must be registered before starting the business. This may include: Private Limited Company, LLP Registration, Partnership Firm, Proprietorship." },
        { title: "Factory License", desc: "Mandatory under the Factories Act for manufacturing units employing workers and operating machinery." },
        { title: "Pollution Control Board Approval", desc: "Carbon black manufacturing requires strict environmental monitoring. Businesses must obtain: Consent to Establish (CTE), Consent to Operate (CTO)." },
        { title: "GST Registration", desc: "Required for manufacturing companies involved in product supply and commercial transactions." },
        { title: "Industrial License", desc: "Depending on the production capacity and nature of the manufacturing process." },
        { title: "Fire & Safety NOC", desc: "Necessary due to high-temperature production processes and combustible materials." },
        { title: "Local Municipal Trade License", desc: "Required to operate the facility at a specific location." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Licenses & Registrations Required for Carbon Black Manufacturing
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Since carbon black manufacturing involves chemical processing and emissions, multiple registrations and approvals are required before operations begin.
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
                    Handling these registrations requires proper documentation and coordination with authorities. Many businesses prefer structured assistance from Vyombiz managed by Clink Consultancy Services Private Limited to ensure the entire process remains legally compliant.
                </p>
                <div className="mt-8 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Registration
                            </Link>
                </div>
            </div>
        </section>
    );
};

const CarbonBlackDocumentsSection = () => {
    const list = [
        "PAN card and identity proof of directors/partners",
        "Address proof of promoters",
        "Business incorporation documents",
        "Land ownership or lease agreement",
        "Factory layout plan",
        "Pollution control compliance documents",
        "Machinery and equipment details",
        "Fire safety compliance documents"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Carbon Black Manufacturing Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To complete registrations and approvals, businesses generally need the following documents:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i} className="flex items-start">
                             <div className="mr-3 mt-1 text-yellow-400"><ShieldCheck size={18} /></div>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Preparing these documents accurately ensures faster approval from regulatory authorities.
                </p>
            </div>
        </section>
    );
};

const CarbonBlackProcessSection = () => {
    const steps = [
        { title: "Business Structure Registration", desc: "Register the legal entity for operating the manufacturing business." },
        { title: "Land & Location Selection", desc: "Choose an industrial zone or approved manufacturing area compliant with environmental regulations." },
        { title: "Pollution Control Approval", desc: "Apply for environmental clearance and pollution control board permissions." },
        { title: "Factory Setup & Equipment Installation", desc: "Install furnaces, reactors, cooling systems, and processing equipment required for production." },
        { title: "Compliance Registrations", desc: "Obtain GST registration, factory license, fire safety approvals, and other mandatory permits." },
        { title: "Production & Quality Compliance", desc: "Once approvals are secured, manufacturing operations can begin with proper quality control and safety protocols." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process to Start a Carbon Black Manufacturing Unit
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Setting up a manufacturing plant involves technical planning, regulatory approvals, and infrastructure development.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={benefits} alt="Carbon Black Plant Setup Process" className="w-full rounded-lg shadow-sm" />
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
                            Businesses seeking professional assistance for documentation, compliance filings, and regulatory approvals can rely on Vyombiz managed by Clink Consultancy Services Private Limited for structured support.
                        </p>
                        <div className="mt-12 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Setup Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CarbonBlackFeaturesSection = () => {
    const compliance = [
        "Air pollution control systems",
        "Industrial waste management",
        "Hazardous material handling protocols",
        "Worker safety and factory compliance",
        "Environmental monitoring and reporting"
    ];

    const costs = [
        "Land and industrial infrastructure",
        "Manufacturing machinery and reactors",
        "Pollution control equipment",
        "Licensing and regulatory approvals",
        "Labor and operational setup"
    ];

    const features = [
        { title: "Business registration and legal setup", desc: "Setting up a proper legal entity for your operations." },
        { title: "Industry-specific licensing support", desc: "Handling complex manufacturing permits." },
        { title: "Pollution control board approvals", desc: "Ensuring environmental compliance for smooth operations." },
        { title: "Factory license and compliance assistance", desc: "Managing documentation for factory setups." },
        { title: "Regulatory documentation and filings", desc: "Thorough assistance in preparing required paperwork." },
        { title: "End-to-end support for industrial business setup", desc: "Focus on your operations while we handle compliance." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                            Compliance Requirements
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                            Manufacturing units must follow strict environmental and safety standards to ensure sustainable operations. Important compliance areas include:
                        </p>
                        <ul className="space-y-3 mb-6">
                            {compliance.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="min-w-[8px] h-[8px] rounded-full bg-[#005a9c] mt-2 mr-3" />
                                    <span className="text-[17px] text-slate-600 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed">
                            Industrial manufacturers often require ongoing compliance support to manage regulatory filings and operational audits.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                            Cost of Setting Up
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                            The investment required depends on several factors such as plant capacity, machinery, infrastructure, and regulatory approvals. Typical cost components include:
                        </p>
                        <ul className="space-y-3 mb-6">
                            {costs.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="min-w-[8px] h-[8px] rounded-full bg-[#f59e0b] mt-2 mr-3" />
                                    <span className="text-[17px] text-slate-600 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed">
                            A well-planned setup strategy helps businesses optimize investment and maintain regulatory compliance.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        How Vyombiz Helps You Start a Carbon Black Manufacturing Business
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Starting a chemical manufacturing unit involves legal, environmental, and regulatory complexities. Professional guidance helps reduce delays and ensures every compliance requirement is fulfilled correctly.
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

const CarbonBlackManufacturing = () => {
    const faqs = [
        {
            question: "Is carbon black manufacturing allowed in India?",
            answer: "Yes, carbon black manufacturing is allowed, but businesses must obtain environmental clearances and regulatory approvals before starting operations."
        },
        {
            question: "Is pollution control approval mandatory?",
            answer: "Yes. Since the process involves emissions and industrial waste, approval from the Pollution Control Board is mandatory."
        },
        {
            question: "What industries use carbon black?",
            answer: "Carbon black is widely used in tyre manufacturing, rubber products, plastics, coatings, inks, and electronics."
        },
        {
            question: "How long does it take to set up a carbon black manufacturing unit?",
            answer: "The timeline depends on regulatory approvals, land availability, and factory setup. With proper compliance support, the process becomes significantly faster."
        },
        {
            question: "Can startups enter the carbon black manufacturing sector?",
            answer: "Yes, entrepreneurs and industrial investors can start carbon black manufacturing businesses provided they meet regulatory and environmental requirements."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Carbon Black"
                heroTitleSuffix="Manufacturing Setup in India"
                heroSubtitle="Start Your Carbon Black Manufacturing Business"
                heroDescription="Carbon black is a critical industrial material used in tyres, plastics, coatings, inks, and electronics. Setting up a carbon black manufacturing unit requires multiple approvals, environmental clearances, and regulatory registrations. With the right guidance, the process becomes faster, compliant, and scalable. Get end-to-end support for your carbon black manufacturing setup with expert guidance from industry professionals."
                whatsIncludedList={[
                    "Business Registration",
                    "Factory License Approval",
                    "Pollution Control Board Clearance",
                    "GST and Industrial Licensing",
                    "Fire & Safety NOC",
                    "Local Municipal Approvals"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Factory size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}

            {/* ================= TALK EXPERT SECTION ================= */}
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CarbonBlackOverview />}
                advantages={<CarbonBlackManufacturingAdvantages />}
                eligibility={<CarbonBlackEligibility />}
                documents={<CarbonBlackDocumentsSection />}
                process={<CarbonBlackProcessSection />}
                features={<CarbonBlackFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Carbon Black Business Setup"
                faqs={faqs}
            />

        </div>
    );
};

export default CarbonBlackManufacturing;

