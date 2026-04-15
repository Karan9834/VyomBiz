import React from "react";

import { Link } from "react-router-dom";
import { Award, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import key from "../../../assets/ISO Certifications/iso-9001-2015/key.jpeg";
import overview from "../../../assets/ISO Certifications/iso-9001-2015/overview.jpg";
import process from "../../../assets/ISO Certifications/iso-9001-2015/process.jpg"


const ISO9001Overview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Quality Management
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ISO 9001:2015 – <span className="text-yellow-400">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 9001:2015 is an internationally recognized standard for establishing and maintaining a Quality Management System (QMS). Introduced in 2015, it has become one of the most widely adopted quality standards used by organizations worldwide.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The standard provides a structured framework that helps organizations deliver consistent products and services while meeting customer expectations. A Quality Management System integrates processes, resources, and policies to improve efficiency and ensure customer satisfaction.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Mission of ISO Standards
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The mission of ISO is to create internationally accepted standards that ensure quality, safety, and efficiency across industries worldwide. These standards support global trade and innovation by establishing a common framework for organizations operating across different markets.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="ISO 9001 2015 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO9001KeyClauses = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Standard Structure
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Core Clauses of ISO 9001:2015
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The strict adherence to these globally aligned clauses empowers seamless international operations and higher customer satisfaction.
                    </p>
                    <div className="mt-10">
                        <img
                            src={key}
                            alt="ISO 9001 Clauses"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Clause 4: Organizational Context", desc: "Organizations must identify internal and external factors affecting the Quality Management System and understand stakeholder expectations." },
                        { title: "Clause 5: Leadership & Commitment", desc: "Top management must actively support the QMS by establishing a quality policy and promoting a culture of continuous improvement." },
                        { title: "Clause 6: Quality Planning", desc: "This clause focuses on planning actions to address risks, identify opportunities, and achieve defined quality objectives." },
                        { title: "Clause 7: Resource Support", desc: "Organizations must provide adequate resources, training, and documented information required to operate the QMS effectively." },
                        { title: "Clause 8: Operational Control", desc: "This clause ensures proper planning and control of operational processes to meet product and service requirements." },
                        { title: "Clause 9: Performance Monitoring", desc: "Organizations must measure and evaluate QMS performance through monitoring, internal audits, and management reviews." },
                        { title: "Clause 10: Continuous Improvement", desc: "Organizations should continuously improve processes and address non-conformities through corrective actions." }
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

const ISO9001QMS = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Why ISO 9001 Certification Matters
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    ISO 9001 certification assures customers that your organization follows globally recognized quality management principles. It also acts as the foundation for many industry-specific quality standards and regulatory frameworks.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Understanding Quality Management Systems
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-4 bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            A Quality Management System (QMS) is a structured framework of policies, procedures, and processes designed to consistently deliver quality products and services. It is based on a business risk approach to operate, monitor, establish, review, and continually improve quality.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Standardisation Evolution
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Greater importance on process approach & monitoring performance</li>
                            <li>Enhanced focus on interested parties and stakeholders</li>
                            <li>Analysis of the context of the organisation</li>
                            <li>Strong emphasis on leadership and risk management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO9001DocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for ISO 9001 Certification
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To seamlessly process your application and be compliant with ISO 9001 2015, you need to produce the following vital Documents and Records:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Essential Documents</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Scope of the QMS, Quality objectives, Quality Policy, and Criteria for evaluation & selection of suppliers.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Required Records</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Records of skills, training, and qualifications. Records of non-conforming outputs, product/service requirements review, internal audit program, results of management review, and corrective actions.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Supporting Documents (Recommended)</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Procedure for addressing risks & opportunities, Sales Procedure, Procedure for Internal Audit, Procedure for document & record control, and Procedure for management of non-conformities.</p>
                </div>
            </div>
        </section>
    );
};

const ISO9001ProcessSection = () => {
    const steps = [
        {
            title: "Internal QMS Audit",
            desc: "This is in place for you to check your QMS processes. The goal is to confirm compliance and find problems and weaknesses that would otherwise stay hidden."
        },
        {
            title: "Management Evaluation",
            desc: "A review by your management to evaluate the facts regarding the management system processes in order to make appropriate decisions & assign resources."
        },
        {
            title: "Corrective Implementation",
            desc: "After the internal audit & management review, you need to correct the root cause of any identified problems & Document how they were resolved."
        },
        {
            title: "Stage 1 Certification Audit",
            desc: "The auditors from your chosen certification body will check to confirm your Documents meets the ISO 9001 2015 requirements."
        },
        {
            title: "Stage 2 Certification Audit",
            desc: "The certification body auditors will check whether your activities comply with both ISO 9001 & your paper works by checking Documents, company practices & records."
        },
        {
            title: "ISO 9001 Certification Approval",
            desc: "Upon successfully clearing rigorous audits and closing any non-conformities, your company is granted the ISO 9001 2015 Certification."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        ISO 9001 Certification Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        For the company QMS to be certified, you need to finish the implementation first, then perform the following steps to ensure a successful certification:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="ISO 9001 Certification Process"
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

const ISO9001FeaturesSection = () => {
    const features = [
        {
            title: "Professional QMS Implementation",
            desc: "Executing a rigorously detailed GAP evaluation and structurally scanning existing process limits to securely plot exact intervention points targeting absolute compliance."
        },
        {
            title: "Thorough Audit Support",
            desc: "Helping rigorously conduct tight internal tracking and dedicated management reviews to thoroughly identify any non-compliance prior to official audits."
        },
        {
            title: "Smooth Certification Coordination",
            desc: "We coordinate massively with accredited certification bodies to guarantee smooth execution timelines and safely close explicit observation loops."
        },
        {
            title: "Trusted by Businesses Worldwide",
            desc: "Join thousands of clients worldwide who have effectively elevated their operational standards and market credibility through our tailored ISO 9001 guidance."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Our ISO 9001 Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Scale actively by integrating the absolute highest degree of international quality management principles locally and explicitly.
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

const ISO9001Registration = () => {
    const faqs = [
        {
            question: "What is ISO 9001:2015 Certification?",
            answer: "ISO 9001:2015 is the most widely used quality management standard that helps organizations maintain consistent product and service quality while improving operational efficiency."
        },
        {
            question: "Who should obtain ISO 9001 Certification?",
            answer: "This certification has the capability to benefit businesses in a wide variety of industries such as construction, medical device manufacturing, automotive, aerospace, and many more."
        },
        {
            question: "How much cost is required for ISO 9001 Certification?",
            answer: "The cost varies based on various factors, including business size, risk, audit duration & how close you are meeting ISO 9001 requirements when you begin implementing the system."
        },
        {
            question: "Does ISO 9001 require a Management Rep?",
            answer: "No."
        },
        {
            question: "What is the main difference between retained and maintained information in ISO 9001 Certification?",
            answer: "You retain Documented evidence such as records and you maintain elements of the system, for example, infrastructure."
        },
        {
            question: "What is the difference between ISO 9001, ISO 9001 2015, and ISO 9000?",
            answer: "Prior to Dec 2000, there were ISO 9001, 9002 & 9003 standards; all were referred to as ISO 9000. Eventually, all were merged into ISO 9001. As for ISO 9001 2015, 2015 indicated the year of revision of ISO 9001."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 9001:2015"
                heroTitleSuffix="Quality Management Certification"
                heroSubtitle="Quality Management Systems"
                heroDescription="Start your ISO 9001:2015 certification journey with expert guidance and a simplified process. We help businesses implement quality management systems efficiently and achieve certification smoothly."
                whatsIncludedList={[
                    "QMS Implementation",
                    "Internal Audit Support",
                    "Management Review",
                    "Certification Audit"
                ]}
                stats={[
                    { count: "100,000+", label: "Businesses Served Globally", icon: <Globe size={20} /> },
                    { count: "100%", label: "Compliance Support", icon: <ShieldCheck size={20} /> },
                    { count: "Highly Rated", label: "Professional Service", icon: <CheckCircle2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO9001Overview />}
                advantages={<ISO9001KeyClauses />}
                eligibility={<ISO9001QMS />}
                documents={<ISO9001DocumentsSection />}
                process={<ISO9001ProcessSection />}
                features={<ISO9001FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 9001 2015 Certification"
                subtitle="Frequently Asked Questions"
                faqs={faqs}
            />
        </div>
    );
};

export default ISO9001Registration;

