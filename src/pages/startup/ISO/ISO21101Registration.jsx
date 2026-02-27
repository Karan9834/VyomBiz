import React from "react";
import { Award, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO21101Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Adventure Tourism Safety
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            An Overview of <span className="text-[#005a9c]">ISO 21101:2014</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The ISO 21101:2014 Certification Standards outline the Safety Management System for Activity Providers of Adventure Tourism. It ensures the expectations of safety measures are safely met regarding participants and staff members.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The purpose is to enhance safety and performance, continually demonstrating safe practice, and supporting compliance measures with applicable legal requirements. The set ISO standards can be utilised for all kinds of service providers universally across regions.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Purpose within Adventure Tourism
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Adventure tourism is a globally established industry that continuously keeps growing. These specific ISO standards accurately establish a firm basis for the adventure tourism activity providers for planning, communicating, and safely delivering activities.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1550592704-6c76defa99ce?auto=format&fit=crop&q=80"
                            alt="ISO 21101 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO21101Requirements = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        System Elements
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Requirements of ISO 21101:2014
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The strict adherence to targeted requirements ensures activity providers execute comprehensive tracking to secure human operations appropriately and effectively.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
                            alt="ISO 21101 Requirements"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Risk & Hazard Management", desc: "Rigorous focus on comprehensively identifying internal and external dangers to effectively deploy proactive risk mitigation protocols." },
                        { title: "Leadership & Commitments", desc: "Outlining exact specific management limits correctly, ensuring explicit roles are communicated to secure human confidence strongly." },
                        { title: "Staff Awareness & Skills", desc: "Safely ensuring adequate continuous tracking while strongly developing skills to efficiently deploy highly functional activity personnel." },
                        { title: "Incident Preparedness", desc: "Constantly executing precise emergency logistics, correctly handling complex operational incidents, and mapping response times precisely." },
                        { title: "Resource & PPE Control", desc: "Reliably governing vendor limits comprehensively mapping protective equipment structurally controlling external operations fully." },
                        { title: "Communication & Info", desc: "Thoroughly tracking documented information and monitoring systemic metrics to safely deploy secure tracking globally." }
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

const ISO21101Benefits = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Benefits of ISO 21101:2014 Certification
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Acquiring explicit compliance provides extensive competitive market dominance accurately maintaining rigorous globally acceptable SMS controls effortlessly:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Safety Optimization
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Decreases Associated Risk:</strong> Substantially increases the rigorous safety margins for both participants and staff.</li>
                            <li><strong>Standardized SMS Control:</strong> Maintains a completely secure, internationally accepted standard, avoiding common tourism vulnerabilities.</li>
                            <li><strong>Demonstrate Safe Practice:</strong> Automatically projects immense structural trust, securing participant loyalty effectively.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Credibility
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Regulatory Conformity:</strong> Provides deep explicit conformity accurately matching highly specific legal operating boundaries globally.</li>
                            <li><strong>Market Expansions:</strong> Immensely increases dynamic chances of safely expanding into new national and international markets properly.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO21101ProcessSection = () => {
    const steps = [
        {
            title: "Optional Preliminary Audit",
            desc: "Voluntary specific site inspections strictly evaluate how effectively prepared the organisation is prior to undergoing full-scale phase audits."
        },
        {
            title: "Phase Preparation Workflow",
            desc: "Assessing current structural safety logs comprehensively to address any identified non-compliance and mapping safe procedures correctly."
        },
        {
            title: "Audit: Stage I",
            desc: "Explicit assessment verifying completely exact active criteria strongly based precisely upon rigorous on-site operations and quality constraints."
        },
        {
            title: "Internal Systems Review",
            desc: "Organizations completely resolve identified documentation gaps to safely verify operations adherence, seamlessly addressing all compliance limits."
        },
        {
            title: "Audit: Stage II",
            desc: "Rigorous active complex analysis directly evaluating the on-site QMS correctly, deeply and comprehensively testing the practical procedures."
        },
        {
            title: "Grant of Certificate",
            desc: "Once all safety elements natively and securely match the desired structural benchmarks, the firm officially grants you compliance Certification."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        The Procedure for ISO 21101 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Executing standard safety strictly demands entities precisely specifically map rigorous complex auditing limits structurally reliably perfectly accurately actively correctly deeply correctly:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                            alt="ISO 21101 Certification Process"
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
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Tourism Certification
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO21101FeaturesSection = () => {
    const features = [
        {
            title: "Expert Assistance Planning",
            desc: "Purchase a robust plan natively ensuring exact expert guidance safely completing structural documentation comprehensively smoothly globally comfortably logically seamlessly."
        },
        {
            title: "Quick Query Resolution",
            desc: "Directly address any explicit operational queries rapidly reliably utilizing highly responsive dedicated expert teams seamlessly actively efficiently completely effectively safely."
        },
        {
            title: "End-to-end Application Prep",
            desc: "Formally preparing exact explicit applications strongly fulfilling deep exact eligibility criteria securely tracking all procedural compliance naturally accurately smartly professionally effortlessly gracefully."
        },
        {
            title: "Seamless Client Interactions",
            desc: "Ensuring consistently positive structural interactions dynamically directly mapping firm legal and compliance requirements solidly explicitly accurately strictly securely flawlessly actively efficiently."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Opt for VyomBiz Assistance?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Navigate global safety standard uncertainties accurately establishing deep proactive standard compliance systematically structurally tracking accurately efficiently gracefully safely neatly correctly.
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

const ISO21101DocumentsSection = () => {
    return (
        <section className="w-full py-14 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Mandatory Registration Documentation
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        To seamlessly process digital applications precisely addressing rigorous international standards, submit the following verified entity records securely:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-[20px] font-semibold text-[#072b47] mb-4">Foundational Business Verification</h3>
                        <ul className="space-y-3 text-[16px] text-slate-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Identity and address proof of the active applicant</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>PAN Card and Voter IDs validating all core directors</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Recent passport-sized photographs</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-[20px] font-semibold text-[#072b47] mb-4">Premise & Financial Infrastructure</h3>
                        <ul className="space-y-3 text-[16px] text-slate-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Formal utility bills or latest electricity structures</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Property sale deeds or formal rent agreements</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Detailed latest bank statements</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-[20px] font-semibold text-[#072b47] mb-4">Entity Formative Instruments</h3>
                        <ul className="space-y-3 text-[16px] text-slate-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Corporate Certificate of Incorporation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Memorandum and Articles of Association (M&AoA)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Additional operational capacity logs</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO21101Registration = () => {
    const faqs = [
        {
            question: "What is the necessity of the ISO Standards?",
            answer: "The precise ISO standards are fundamentally required to safely maintain an active Quality Management System ensuring structural compliance at all times."
        },
        {
            question: "What do Adventure Tourism Providers require to issue the ISO 21101 Certification?",
            answer: "The explicit certification efficiently provides massive protection safely establishing trust and building confidence within the customer's mind efficiently."
        },
        {
            question: "Where are the ISO Standards deemed applicable?",
            answer: "These specific standards are seamlessly deemed applicable across all kinds of adventure tourism providers gracefully regardless of size or geographic location."
        },
        {
            question: "What are the eligibility criteria for obtaining an ISO 21101:2014 Certification?",
            answer: "The standards intelligently provide a firm basis for providers seamlessly organizing, safely planning, natively communicating, and delivering safe tourism correctly."
        },
        {
            question: "What is the importance of Safety Management in ISO 21101 Certification?",
            answer: "Safety management seamlessly provides an optimal framework explicitly ensuring proper security and continuity dynamically across all adventure activities gracefully."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 21101:2014"
                heroTitleSuffix="Certification"
                heroSubtitle="Adventure Tourism SMS"
                heroDescription="Ensure SMS compliance specifically optimized for Adventure Tourism elegantly reducing active hazards reliably enforcing safety explicitly."
                whatsIncludedList={[
                    "Incident Management",
                    "Safety Optimizations",
                    "Targeted SMS Planning",
                    "Pre-Audit Workflows"
                ]}
                stats={[
                    { count: "Safe SMS", label: "Implementations", icon: <Globe size={20} /> },
                    { count: "100%", label: "Approval Rates", icon: <ShieldCheck size={20} /> },
                    { count: "Best In", label: "Industry", icon: <CheckCircle2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO21101Overview />}
                advantages={<ISO21101Requirements />}
                eligibility={<ISO21101Benefits />}
                documents={<ISO21101DocumentsSection />}
                process={<ISO21101ProcessSection />}
                features={<ISO21101FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 21101 Certification"
                subtitle="Clarifying commonly asked questions about Adventure Tourism SMS effectively."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO21101Registration;
