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
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const CarbonBlackOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Industrial Setup
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Carbon Black Plant Setup – <span className="text-[#005a9c]">Business Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Carbon black is a vital industrial component used globally in cell phones, PCs, and automotive products. With advancements in transportation and construction, the demand in India is surging, making it a highly rewarding sector for new manufacturing units.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Produced from hydrocarbons like natural gas or oil through partial combustion, carbon black comes in types like Furnace Black (most common), Acetylene Black (conductive), and Lampblack (specialty inks).
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Market Potential:
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            India's carbon black market is valued at over $84 billion in 2024, driven by the massive automotive sector and infrastructure growth.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1617711246199-7f61c3905007?auto=format&fit=crop&q=80"
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Setup
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why invest in the carbon black manufacturing business?
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1596778402284-8398c7b09521?auto=format&fit=crop&q=80"
                            alt="Carbon Black Manufacturing Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Consistent High Demand", desc: "Steady needs across automotive, electronics, and packaging industries." },
                        { title: "Customizable Production", desc: "Flexible processes tailored to specific specialty market requirements." },
                        { title: "High-Profit Margins", desc: "Strong industrial demand ensures attractive returns on investment." },
                        { title: "Scalable Infrastructure", desc: "Feasible for medium-scale operations with eco-friendly expansion potential." },
                        { title: "Export Opportunities", desc: "India's cost-effective production is well-positioned for global markets." },
                        { title: "Growth in Rubber Goods", desc: "Rising demand for conveyor belts, seals, and gaskets." }
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
        { title: "Red Industry NOC", desc: "Compulsory Pollution NOC (CTE/CTO) from CPCB/SPCB." },
        { title: "Business Registration", desc: "Incorporation as a Company or Partnership firm." },
        { title: "Hazardous Waste License", desc: "Authorization for handling and storing hazardous materials." },
        { title: "Industrial Licensing", desc: "Clearance from relevant authorities based on plant capacity." },
        { title: "Safety Compliances", desc: "Building permits and mandatory fire safety approvals." },
        { title: "Labor Compliance", desc: "Adherence to labor laws and employee health & safety regulations." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Carbon Black Plant Setup?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Mandatory authorizations for legal operation.
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

const CarbonBlackDocumentsSection = () => {
    const list = [
        "Business Layout Plan & Project Report",
        "Detailed Manufacturing Process Flowchart",
        "List of Machinery and Capital Investment Details",
        "Land Ownership / Lease Proof",
        "Water Source and Quantity Requirements",
        "Waste Management and Pollution Control Plans",
        "Certified Balance Sheet and CA Certificates",
        "Consent Fees and Application Forms"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Carbon Black Plant Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Documentation needed for environmental and industrial clearances.
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

const CarbonBlackProcessSection = () => {
    const steps = [
        { title: "Technology Choice", desc: "Selecting the right process (Furnace, Acetylene, etc.) based on feedstock." },
        { title: "Licensing", desc: "Obtaining mandatory environmental and industrial authorizations." },
        { title: "Supply Chain", desc: "Establishing reliable sources for feedstock oils and natural gas." },
        { title: "Installation", desc: "Setting up reactors, heaters, dryers, and pin mixers." },
        { title: "Testing", desc: "Implementing a robust quality control lab for product standards." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Set Up a Carbon Black Plant?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guidance for plant establishment.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1617711246199-7f61c3905007?auto=format&fit=crop&q=80" alt="Carbon Black Plant Setup Process" className="w-full rounded-lg shadow-sm" />
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
                                Start Your Plant Setup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CarbonBlackFeaturesSection = () => {
    const features = [
        { title: "Sector Expertise", desc: "Deep understanding of the carbon black industry with 10+ years experience." },
        { title: "Environmental Gurus", desc: "Specialists in handling Red Category industry pollution clearances." },
        { title: "End-to-End Support", desc: "From technology selection to post-incorporation compliance." },
        { title: "High Success Rate", desc: "97% success in securing regulatory approvals for industrial plants." },
        { title: "Resource Savings", desc: "Optimizing setup costs to save significant capital for entrepreneurs." },
        { title: "Documentation Help", desc: "Hassle-free preparation of project reports and lab data." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expertise in high-impact industrial projects.
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
            question: "Is carbon black manufacturing categorized under 'Red Industry'?",
            answer: "Yes, carbon black production is classified as a 'Red Industry' by the CPCB due to its potential environmental impact, requiring strict pollution control (CTE/CTO) and hazardous waste clearances."
        },
        {
            question: "What is the primary technology used in manufacturing carbon black?",
            answer: "The 'Furnace Black Process' is the most common method today due to its high yield and the ability to control particle size and shape. Other methods include the Lampblack and Acetylene Black processes."
        },
        {
            question: "Which industries drive the demand for carbon black in India?",
            answer: "The automotive (tyre manufacturing) sector is the primary driver. It is also heavily used in plastics, printing inks, rubber products, and battery manufacturing."
        },
        {
            question: "What are the key licenses required for setup?",
            answer: "Key licenses include Business Registration, Industrial License, Pollution NOC (CTE/CTO), Hazardous Waste Management Authorization, Factory License, and Fire Safety approvals."
        },
        {
            question: "Who can set up a carbon black manufacturing plant?",
            answer: "Any individual, partnership firm, or corporate entity can set up a plant, provided they meet the regulatory standards, land ownership requirements, and environmental compliance norms."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Carbon Black"
                heroTitleSuffix="Manufacturing Setup"
                heroSubtitle="Driving Industrial & Automotive Innovation"
                heroDescription="Tap into India's multi-billion dollar carbon black market. We offer end-to-end consulting for setting up high-yield manufacturing plants with full environmental and industrial compliance."
                whatsIncludedList={[
                    "Technology Selection Advisory",
                    "Pollution Control (CTE/CTO) Liaison",
                    "Hazardous Waste Authorization",
                    "Reactor & Equipment Installation Support",
                    "Business Integration & Licensing",
                    "Project Report Preparation"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Factory size={20} /> },
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
