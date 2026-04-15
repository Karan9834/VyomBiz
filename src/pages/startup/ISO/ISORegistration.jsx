import React from "react";

import { Link } from "react-router-dom";
import { Award, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/ISO Certifications/iso-registration/benefits.jpg";
import cert from "../../../assets/ISO Certifications/iso-registration/cert.jpg";
import process from "../../../assets/ISO Certifications/iso-registration/process.png";
const ISOOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Global Competence
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ISO Certification – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO Certification is an internationally recognized standard that helps organizations maintain quality, efficiency, and consistency in their business operations while improving global market credibility.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Obtaining ISO Certification enables organizations to implement structured management systems that ensure quality control, operational efficiency, and consistent delivery of products and services while meeting regulatory and customer requirements.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Goal of ISO Governance
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO Certification demonstrates that a company follows internationally accepted management standards, improving credibility and strengthening trust among customers, business partners, and regulatory authorities.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={cert}
                            alt="ISO Certification Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISOAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Quality Assurance
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of ISO Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        ISO Certification helps organizations improve operational efficiency, strengthen customer trust, and expand business opportunities in both domestic and international markets.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="ISO Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Improved Operational Efficiency", desc: "Helps streamline internal processes by implementing standardized procedures and efficient workflow systems." },
                        { title: "Better Market Reputation", desc: "Enhances brand reputation by ensuring consistent delivery of high-quality products and services." },
                        { title: "International Recognition", desc: "Helps businesses gain recognition in global markets and build trust with international clients and partners." },
                        { title: "Consistent Product Quality", desc: "Improves product and service quality while reducing defects through continuous improvement processes." },
                        { title: "Eligibility for Government Tenders", desc: "Many government and large corporate tenders require ISO Certification as a qualification criterion." },
                        { title: "Business Expansion Opportunities", desc: "Helps organizations expand into new markets by demonstrating compliance with international standards." }
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

const ISOEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility for ISO Certification
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before opting actively for specific certification profiles, entities must rigorously address comprehensive eligibility boundaries effectively ensuring compliance tracking:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Basic Organizational Requirements
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>The organization must have defined operational processes and management systems.</li>
                            <li>All key business processes should be documented and clearly defined.</li>
                            <li>Management should demonstrate commitment toward quality standards and compliance.</li>
                            <li>Certification must be obtained through an accredited ISO certification body.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Qualifying Entities
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Private / Public Companies</li>
                            <li>MSMEs and Hot Startups</li>
                            <li>Manufacturing Plants</li>
                            <li>Service Sector Providers</li>
                            <li>NGOs, Trusts & Societies</li>
                            <li>Govt Organizations</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Verify Organizational Eligibility
                            </Link>
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
                    Documents Required to Obtain ISO Certificate Online
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The following documents are typically required when applying for ISO Certification:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Foundational Business Verification</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Identity and address proof of the active applicant, exact PAN Card and Voter IDs validating all core directors comprehensively, alongside explicitly mapped recent passport-sized photographs structurally confirming applicant identities.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Premise & Financial Infrastructure</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Formal utility bills or latest electricity structures strictly backing operations, explicit copies of the property sale deeds ensuring primary ownership validations, exact copies of formal rent agreements ideally alongside detailed latest bank statements.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Entity Formative Instruments</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Confirmed corporate Certificate of Incorporation efficiently mapped, precise Memorandum and Articles of Association (M&AoA) defining operational bandwidths, effectively paired with any additional operational capacity logs mapping standard alignments securely.</p>
                </div>
            </div>
        </section>
    );
};

const ISOProcessSection = () => {
    const steps = [
        {
            title: "Submit Application",
            desc: "Organizations must first submit an application to an accredited ISO certification body."
        },
        {
            title: "Document Submission",
            desc: "Provide the necessary business documents and operational process details."
        },
        {
            title: "GAP Analysis",
            desc: "The certification body evaluates existing processes to identify compliance gaps."
        },
        {
            title: "Implement Corrective Measures",
            desc: "Organizations address the identified gaps and align processes with ISO standards."
        },
        {
            title: "Certification Audit",
            desc: "Auditors conduct inspections to verify compliance with ISO standards."
        },
        {
            title: "Certification Issuance",
            desc: "Once the audit is successfully completed, the ISO Certification is issued."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Process for Obtaining ISO Certification Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The ISO Certification process generally involves the following steps:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="ISO Registration Process"
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
                                Start Your Certification Flow
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISOFeaturesSection = () => {
    const features = [
        {
            title: "GAP Analysis Expertise",
            desc: "Executing a rigorously detailed GAP evaluation structurally scanning existing process limits securely plotting exact intervention points natively targeting absolute compliance metrics safely."
        },
        {
            title: "Auditing Compliance Readiness",
            desc: "Helping rigorously conduct tight internal tracking executing dedicated management reviews thoroughly identifying absolute non-compliance and tracking continuous fixes actively pre-audit."
        },
        {
            title: "Accredited Body Coordination",
            desc: "We coordinate massively interacting specifically with accredited central certification bodies inherently guaranteeing smooth seamless execution timelines closing explicit observation loops safely."
        },
        {
            title: "10+ Years Compliance Legacy",
            desc: "Carrying a profound decade of successfully executing tight regulatory certifications dealing efficiently with changing standards globally preserving operational integrity completely."
        },
        {
            title: "Renewal & Upgradation Systems",
            desc: "Offering ongoing robust structural support seamlessly integrating annual surveillance audits driving robust continual improvement metrics inherently avoiding lapse disruptions extensively."
        },
        {
            title: "Multiple ISO Mapping",
            desc: "Ensuring deep digital records effectively mapping overlapping ISO schemas systematically protecting traceability safely tracking holistic organizational standards integrally successfully."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Trust Us For ISO Certification
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Scale actively integrating the absolute highest degree of international testing matrices comprehensively mapped locally across rigorous state boundaries explicitly.
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

const ISORegistration = () => {
    const faqs = [
        {
            question: "Who regulates ISO Certification in India?",
            answer: "ISO standards are developed by the International Organization for Standardization, while in India certification bodies are accredited by organizations such as the Bureau of Indian Standards and the National Accreditation Board for Certification Bodies."
        },
        {
            question: "What exactly constitutes an 'Internal Audit'?",
            answer: "An internal process explicitly conducted inherently by exclusively trained native staff precisely structurally assessing absolute readiness securely prior to exposing systems directly to external certification body scrutiny dynamically."
        },
        {
            question: "Is there a specific entity limit triggering ISO applicability?",
            answer: "No, inherently any entity including proprietorships, partnerships, massive private corporations natively alongside trusts strongly can explicitly trigger targeted quality standard mappings globally executing."
        },
        {
            question: "Can an existing ISO certificate practically be renewed?",
            answer: "Yes, ISO matrices are inherently subject exclusively to continuous surveillance audits routinely demanding absolute structural renewals typically explicitly tracking every completely closed 3-year validation limit successfully."
        },
        {
            question: "How long strictly does the total certification tracking take?",
            answer: "Execution intrinsically spans timelines specifically bound tracking the complete GAP closure capability, typically structurally ranging heavily depending entirely upon the exact scale mapped and compliance speed deployed."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO Certification"
                heroTitleSuffix="Registration Online"
                heroSubtitle="Achieve Global Structural Standards"
                heroDescription="Get ISO Certification online and strengthen your organization’s global credibility. Implement internationally recognized quality standards that enhance operational efficiency, customer trust, and business competitiveness."
                whatsIncludedList={[
                    "Deep GAP Analysis",
                    "Surveillance Audit Prep",
                    "Complete Document Alignment",
                    "Multi-standard Integration"
                ]}
                stats={[
                    { count: "10,000+", label: "Businesses Supported", icon: <CheckCircle2 size={20} /> },
                    { count: "100%", label: "Standards Compliance", icon: <ShieldCheck size={20} /> },
                    { count: "International", label: "Recognition", icon: <Globe size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISOOverview />}
                advantages={<ISOAdvantages />}
                eligibility={<ISOEligibility />}
                documents={<ISODocumentsSection />}
                process={<ISOProcessSection />}
                features={<ISOFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO Certification"
                subtitle="Clarifying global operational mapping boundaries actively."
                faqs={faqs}
            />
        </div>
    );
};

export default ISORegistration;

