import React from "react";

import { Link } from "react-router-dom";
import { HardHat, ShieldCheck, CheckCircle2, Factory, Utensils } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/ISO Certifications/iso 22000 fsms certification logo png/benefits.jpg";
import overview from "../../../assets/ISO Certifications/iso 22000 fsms certification logo png/overview.jpg";
import process from "../../../assets/ISO Certifications/iso 22000 fsms certification logo png/process.jpg"

const ISO22000Overview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Global Food Safety
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ISO 22000 FSMS – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Food safety is a global priority. Businesses involved in food production or supply must ensure that their products are safe for consumption. ISO 22000 is an internationally recognized standard for Food Safety Management Systems (FSMS).
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The standard integrates communication systems, management processes, prerequisite programs, and Hazard Analysis and Critical Control Point (HACCP) principles to maintain food safety across the supply chain.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            GFSI & FSSC Approved
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 22000 is widely used in the food industry and is recognized under various food safety frameworks. It combines HACCP-based risk control systems with strict hygiene and operational management programs.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Systematic Security
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of ISO 22000 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Implementing ISO 22000 helps organizations reduce food safety risks, prevent product recalls, and build strong consumer trust across the supply chain.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="ISO 22000 Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Prevents Food Contamination", desc: "Helps organizations identify and control potential contamination risks in food production processes." },
                        { title: "Reduces Product Recalls", desc: "Minimizes the chances of product recalls by implementing strict food safety control measures." },
                        { title: "Focus on Critical Control Points", desc: "Ensures effective monitoring of critical control points to maintain food safety standards." },
                        { title: "Improved Traceability", desc: "Creates traceability systems that track food products from raw materials to final consumption." },
                        { title: "Efficient Production Planning", desc: "Improves operational planning and reduces dependency on post-production testing." },
                        { title: "Competitive Market Advantage", desc: "Helps businesses gain a competitive advantage in global food markets by demonstrating strong food safety practices." }
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
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Pre-Requisites for ISO 22000 FSMS
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    A comprehensive set of pre-requisites for the ISO 22000 Food Safety Management System requires strict hygiene and housekeeping protocols:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Hygiene and Operational Controls
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Strict hygiene, storage, distribution, and housekeeping procedures.</li>
                            <li>Glass and brittle material handling procedures to prevent contamination.</li>
                            <li>Proper pest control and sanitation management systems.</li>
                            <li>Monitoring contractors, visitors, and maintenance activities to maintain hygiene standards.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Hazard Control Measures
                        </h3>
                        <ul className="grid grid-cols-1 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Defined allergen handling and control procedures.</li>
                            <li>Metal detection and foreign object prevention systems.</li>
                            <li>HACCP-based safety measures including safe equipment and material control.</li>
                            <li>Food defense systems to protect products from intentional contamination.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISODocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for ISO 22000
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The following documents are typically required for ISO 22000 Certification:
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
            title: "Stage 1 Audit – Documentation Review",
            desc: "An audit to evaluate whether the Food Safety Management System is prepared for certification."
        },
        {
            title: "Corrective Actions",
            desc: "Organizations must address the gaps identified during the first audit."
        },
        {
            title: "Stage 2 Audit – Certification Audit",
            desc: "A detailed on-site audit verifying the implementation of the Food Safety Management System."
        },
        {
            title: "Certification Issuance",
            desc: "After successful audit verification, the certification body issues the ISO 22000 certificate, usually valid for three years."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure for ISO 22000 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The ISO 22000 certification process generally includes the following steps:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
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
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Request Food Safety Audit
                            </Link>
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
        <section className="w-full py-6 bg-white">
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
            question: "What is ISO 22000 Food Safety Management System (FSMS)?",
            answer: "ISO 22000 FSMS is an international standard that helps organizations establish a structured system for managing food safety risks throughout the food supply chain."
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
                heroTitleSuffix="Certification Online"
                heroSubtitle="Food Safety Management System"
                heroDescription="Strengthen your food safety systems with ISO 22000 Certification. This international standard integrates HACCP principles with structured hygiene practices to ensure safe food production and protect consumers globally."
                whatsIncludedList={[
                    "HACCP Integration",
                    "Hygiene Policy Setup",
                    "Contaminant Risk Mapping",
                    "Recall Flow Audit"
                ]}
                stats={[
                    { count: "Compliance", label: "Assured", icon: <CheckCircle2 size={20} /> },
                    { count: "Safe Food", label: "Production", icon: <Factory size={20} /> },
                    { count: "Hygiene", label: "Standards", icon: <Utensils size={20} /> }
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

