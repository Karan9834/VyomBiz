import React from "react";

import { Link } from "react-router-dom";
import { HardHat, ShieldCheck, CheckCircle2, Leaf, Recycle } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import overview from "../../../assets/ISO Certifications/iso-14001-ems/overview.png";
import benefits from "../../../assets/ISO Certifications/iso-14001-ems/benefits.png";
import process from "../../../assets/ISO Certifications/iso-14001-ems/process.jpg";

const ISO14001Overview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Environmental Safety
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ISO 14001 EMS – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Environmental protection in modern organizations goes beyond regulatory compliance. An Environmental Management System (EMS) encourages businesses to integrate environmental responsibility into everyday operations and employee practices.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 14001 is an internationally recognized standard that provides a structured framework for managing environmental responsibilities. It is applicable to organizations of all sizes and industries.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Objective of Environmental Management Systems
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The objective of ISO 14001 is to help organizations manage environmental impacts effectively while meeting regulatory requirements. It encourages a lifecycle approach covering product design, production, distribution, and disposal.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="ISO 14001 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO14001Advantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Systematic Security
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of ISO 14001 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Obtaining the ISO 14001 EMS Certificates natively establishes strong environmental credentials while significantly cutting downstream operational costs through efficient process streamlining.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="ISO 14001 Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Sustainable Resource Management", desc: "Promotes efficient use of resources by supporting the reduce, reuse, and recycle approach." },
                        { title: "Regulatory Compliance", desc: "Ensures alignment with environmental laws and regulatory requirements." },
                        { title: "Strong Corporate Responsibility", desc: "Enhances corporate reputation by demonstrating commitment to environmental protection." },
                        { title: "Waste Reduction", desc: "Helps organizations minimize waste generation and environmental risks." },
                        { title: "Environmental Awareness", desc: "Encourages employees to participate actively in environmental initiatives." },
                        { title: "Cost Efficiency", desc: "Improves resource efficiency and reduces operational costs related to energy and waste." }
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

const ISO14001Eligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility for ISO 14001 Certification
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Applying the ISO 14001 standard requires the corporate entity to strictly develop an internal structure capable of managing sustainable improvement cycles smoothly:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Organizational Requirements
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            Organizations must establish environmental policies, define sustainability objectives, and implement monitoring mechanisms.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Environmental Assessment
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            Businesses should identify environmental impacts, review regulatory obligations, and evaluate past environmental performance.
                        </p>
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
                    Documents Required for ISO 14001 EMS
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The following documents are generally required when applying for ISO 14001 certification: 
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Environmental Management Documents</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>Scope parameters of the deployed EMS.</li>
                            <li>Environmental Policy declaration and related Objectives constraints.</li>
                            <li>Risks and Opportunities to be specifically addressed via targeted processes.</li>
                            <li>Emergency Preparedness protocols scaling physical Response operations.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Monitoring and Compliance Records</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>Criteria effectively outlining the Evaluation of Significant Environmental Aspects.</li>
                            <li>Documented Evidence regarding Communication logs and Compliance Evaluation Results.</li>
                            <li>Outputs mapping continuous Monitoring, internal audits, and Management Reviews.</li>
                            <li>Records of comprehensive Training schemas, Experience, and Employee capabilities.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO14001ProcessSection = () => {
    const steps = [
        {
            title: "Internal Environmental Audit",
            desc: "Organizations review their existing environmental processes to identify gaps."
        },
        {
            title: "Management Evaluation",
            desc: "Leadership reviews environmental performance and system effectiveness."
        },
        {
            title: "Corrective Implementation",
            desc: "Organizations develop plans to address gaps and improve EMS processes."
        },
        {
            title: "System Documentation",
            desc: "Environmental policies, manuals, and procedures are prepared in accordance with ISO standards."
        },
        {
            title: "Certification Audit",
            desc: "An independent certification body evaluates the system and grants certification after successful verification."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        ISO 14001 Certification Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        A defined execution scope assures an absolute, risk-free assessment tracking deployment efficiency natively:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="ISO 14001 Process"
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
                                Start Your Certification Audit
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO14001FeaturesSection = () => {
    const features = [
        {
            title: "Lifecycle Environmental Management",
            desc: "Instead of merely checking immediate disposal parameters, ISO 14001 covers the entire product lifecycle from manufacturing routing downstream to physical disposal."
        },
        {
            title: "Leadership Involvement",
            desc: "The structurally revised 2015 edition heavily shifts the core EMS mandate directly incorporating leadership into formal system operational planning."
        },
        {
            title: "Flexible Implementation",
            desc: "From standalone isolated offices targeting pure paper waste up to massive manufacturing facilities containing heavy hazards, the logic accurately scales perfectly."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Key EMS Implementation Advantages
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        ISO 14001 inherently solidifies sustainable environmental practices ensuring continuous functional growth natively securely:
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

const ISO14001Registration = () => {
    const faqs = [
        {
            question: "What is an Environmental Management System (EMS)?",
            answer: "An Environmental Management System (EMS) is a structured framework that helps organizations manage environmental responsibilities, reduce environmental impact, and comply with regulations."
        },
        {
            question: "Who should precisely get ISO 14001 EMS Certification?",
            answer: "Organizations of all structural sizes who decisively wish to genuinely commit to public sustainability or reduce their raw material costs broadly by using cleaner, more efficient core resources."
        },
        {
            question: "Who are classified as the 'interested parties'?",
            answer: "Interested parties natively encompass consumers, internal investors, public municipalities, non-governmental regulatory organizations, and localized employees monitoring safe standard execution requirements safely."
        },
        {
            question: "What is the certified validity tracking timeline?",
            answer: "The rigorous ISO 14001 EMS certification dictates a maximum operational validation explicitly lasting for exactly 3 years formally recorded from the initial date of successful issuance."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 14001"
                heroTitleSuffix="Environmental Management Certification"
                heroSubtitle="Environmental Management System"
                heroDescription="Strengthen environmental responsibility with ISO 14001 Environmental Management System (EMS) certification. Improve sustainability practices, regulatory compliance, and environmental performance across your organization."
                whatsIncludedList={[
                    "EMS GAP Check",
                    "Safety Metric Evaluation",
                    "Lifecycle Mapping",
                    "Hazard Reduction Procedures"
                ]}
                stats={[
                    { count: "Compliance", label: "Assured", icon: <CheckCircle2 size={20} /> },
                    { count: "Eco-Friendly", label: "Operations", icon: <Leaf size={20} /> },
                    { count: "Sustainable", label: "Standards", icon: <Recycle size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO14001Overview />}
                advantages={<ISO14001Advantages />}
                eligibility={<ISO14001Eligibility />}
                documents={<ISODocumentsSection />}
                process={<ISO14001ProcessSection />}
                features={<ISO14001FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 14001 EMS"
                subtitle="Understanding active environmental corporate limitations safely."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO14001Registration;

