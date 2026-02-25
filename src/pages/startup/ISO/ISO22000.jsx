import React from "react";
import { HardHat, ShieldCheck, CheckCircle2, Factory, Utensils } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO22000Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Global Food Safety
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ISO 22000 FSMS – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Food safety is a global concern. Regardless of size or product, all food producers are responsible for managing their products' safety and ensuring the better health of their consumers. ISO 22000 is an international standard dealing precisely with Food Safety Management Systems (FSMS).
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It specifies requirements combining interactive communication, system management, pre-requisite programs, and Hazard Analysis and Critical Control Point (HACCP) principles. It is closely aligned with ISO 9001 to enhance structural compatibility.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            GFSI & FSSC Approved
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Food Safety 22000 is a Global Food Safety Initiative (GFSI) approved scheme. It is heavily utilized in the Food Safety Systems Certification (FSSC) Scheme FS22000, combining HACCP plans with stringent pre-requisite hygienic programs.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1588611911598-a895b6c8ba02?auto=format&fit=crop&q=80"
                            alt="ISO 22000 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO22000Advantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Systematic Security
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of ISO 22000 FSMS
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The implementation of ISO 22000 FSMS effectively decreases costs from mass withdrawals while building absolute consumer trust across the global supply chain.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80"
                            alt="ISO 22000 Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Reduces Risk of Contaminants", desc: "Helps organizations physically prevent and deeply reduce the risk of structural contaminants in food products." },
                        { title: "Decreases Recalls & Withdrawals", desc: "Significantly minimizes sudden post-production costs stemming from widespread product withdrawals or unsafe recalls." },
                        { title: "Control Focuses on Priorities", desc: "Systematic pre-requisite programmatic management ensures hygienic control measures prioritize active critical hazard points." },
                        { title: "Establishes Traceability System", desc: "Helps organizations build comprehensive traceability systems spanning raw material pipelines straight down to consumption points." },
                        { title: "Better Planning", desc: "Enhances operational production planning natively, generating less reliance on tedious post-process verification testing." },
                        { title: "Global Competitive Edge", desc: "Gives massive organizations a fierce competitive advantage securely operating across regulated international food markets." }
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

const ISO22000Eligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Pre-Requisites for FSMS
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    A comprehensive set of pre-requisites for the ISO 22000 Food Safety Management System requires strict hygiene and housekeeping protocols:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Hygiene Controls
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Strict Hygiene, Despatch, Distribution, and Housekeeping Management.</li>
                            <li>Formal Glass Policy & Brittle Material Breakage Procedures.</li>
                            <li>Effective Management of active Pest Control metrics.</li>
                            <li>Active Control of Contractors, outside visitors, and internal maintenance mapping.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Critical Hazard Prevention
                        </h3>
                        <ul className="grid grid-cols-1 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Thorough Nut handling procedures and formal Allergen Control Procedures.</li>
                            <li>Mandatory Metal Detection and Ingredients Foreign Body Control Policies.</li>
                            <li>Core HACCP Pre-requisites including safe Control of Knives and First Aid Dressings.</li>
                            <li>Robust Food Defence Systems maintaining safety against malicious interference.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISODocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for ISO 22000
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Obtaining ISO 22000 FSMS Certification correctly relies heavily upon submitting verified business and operational document trails:
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Primary Verifications</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>Core Business Registration Proof and Desired Certification Scope.</li>
                            <li>Clear address declarations via Letterheads or visiting cards.</li>
                            <li>Verifiable Sale and Purchase invoices or formal GST Registration Certificates.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Operational Mapping</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>Process and operations manuals, including legal obligations constraints.</li>
                            <li>Data concerning Human and technical production resources mapping capability.</li>
                            <li>Information mapping outsourced processes possibly affecting system conformity.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO22000ProcessSection = () => {
    const steps = [
        {
            title: "Stage 1 Audit (Readiness Check)",
            desc: "An audit assessing whether the Food Safety Management System physically conforms to ISO standards. It verifies design scope and readiness before granting stage 2 tracking."
        },
        {
            title: "Addressing Deficiencies",
            desc: "Before the secondary tracking audit proceeds, the organization must actively perform all required clarifications. This gap typically cannot exceed six isolated months."
        },
        {
            title: "Stage 2 Audit (Certification Audit)",
            desc: "Carried out onsite to confirm the functional implementation of the FSMS. Validates exact evidence of conformity fulfilling statutory and strict safety regulatory constraints."
        },
        {
            title: "Final Review & Certification",
            desc: "Following audit completion, reports are closely reviewed. Based strictly upon evidence recommendations, the Chief Executive definitively grants the formal 3-year certification."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure for ISO 22000 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        A defined execution scope ensures HACCP plans securely merge completely with active facility regulations natively:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1621644026330-97eb3363f8bb?auto=format&fit=crop&q=80"
                            alt="ISO 22000 Process"
                            className="w-full rounded-lg shadow-sm sticky top-32"
                        />
                    </div>

                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    {index + 1}.
                                </div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200"></div>

                        <div className="mt-12 text-center">
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Request Food Safety Audit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO22000FeaturesSection = () => {
    const features = [
        {
            title: "Normative Continuity (ISO 9001 Alignment)",
            desc: "Embeds operational definitions directly from ISO 9001 frameworks securely ensuring strict corporate management continuity comprehensively."
        },
        {
            title: "Validation & verification Improvement",
            desc: "Deploys strict scientific principles continuously verifying the management components securely, mitigating any long-term decay in safety execution limits."
        },
        {
            title: "Planning & Realisation Mechanisms",
            desc: "Aligns Good Manufacturing Practices (GMP) securely combining preventive hygienic routines reducing heavily dangerous biological or chemical risks."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Key Standard Components of FSMS
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        ISO 22000 structures complex execution controls natively targeting distinct systemic layers of the corporate matrix safely:
                    </p>
                </div>

                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                {index + 1}.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    {feature.title}
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const ISO22000Registration = () => {
    const faqs = [
        {
            question: "What exactly is ISO 22000 FSMS?",
            answer: "ISO 22000 FSMS is a heavy international standard providing structure requiring an approach mechanism to manage the total safety of food products and operations securely across producers."
        },
        {
            question: "What is Hazard Analysis Critical Control Points (HACCP)?",
            answer: "HACCP is a globally accepted method deeply addressing food safety natively by analyzing and safely controlling biological, chemical, and physical risks from production handling straight to distribution consumption."
        },
        {
            question: "Are there specific pre-requisite hygienic policies required?",
            answer: "Absolutely. Entities must formally institute rigid procedures covering glass breakage policies, metal detection grids, allergen tracking controls, and heavy pest management maintenance strictly."
        },
        {
            question: "Can ISO 22000 be tightly integrated with ISO 9001 systems?",
            answer: "Yes, ISO 22000 is intentionally aligned squarely with ISO 9001 rules cleanly to heavily enhance the compatibility of Quality Management Systems directly combined with FSMS safety controls."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 22000 FSMS"
                heroTitleSuffix="Certification"
                heroSubtitle="Food Safety Management System"
                heroDescription="Elevate food safety integrity securely. ISO 22000 natively merges robust operational HACCP mechanisms with extensive procedural hygiene protocols actively protecting consumers globally."
                whatsIncludedList={[
                    "HACCP Integration",
                    "Hygiene Policy Setup",
                    "Contaminant Risk Mapping",
                    "Recall Flow Audit"
                ]}
                stats={[
                    { count: "Compliance", label: "Assured", icon: <CheckCircle2 size={20} /> },
                    { count: "Risk Free", label: "Production", icon: <Factory size={20} /> },
                    { count: "Hygienic", label: "Procedures", icon: <Utensils size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO22000Overview />}
                advantages={<ISO22000Advantages />}
                eligibility={<ISO22000Eligibility />}
                documents={<ISODocumentsSection />}
                process={<ISO22000ProcessSection />}
                features={<ISO22000FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 22000 FSMS Certification"
                subtitle="Understanding explicit legal execution requirements strictly."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO22000Registration;
