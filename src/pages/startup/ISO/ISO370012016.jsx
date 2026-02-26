import React from "react";
import { Award, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO37001Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Anti-Bribery Management
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            An Overview of <span className="text-[#005a9c]">ISO 37001:2016</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The ISO 37001:2016 Certification states the requirements and guidance of the compliance measures in regard to Establishing, Implementing, Maintaining, Reviewing, and Improving the Anti-Bribery Management System.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The regulations stated in the particular ISO standards are restricted only to bribery. It states the Anti-Bribery Laws and complying measures to help detect, prevent and respond to any bribery-related activities.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Scope of Applicability
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The requirements stated in the particular ISO standards are very generic with the intention of being easily applicable for all organisations, regardless of the type, size, or nature of the activities.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1550592704-6c76defa99ce?auto=format&fit=crop&q=80"
                            alt="ISO 37001 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO37001Requirements = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        System Controls
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Essential Compliance Measures
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The standards enacted in ISO 37001:2016 Certification include various compliance measures and controls to secure your organization.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
                            alt="ISO 37001 Compliance Measures"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Anti-Bribery Policy", desc: "Establishing an Anti-Bribery Policy and ensuring Leadership Commitment and Responsibility." },
                        { title: "Personnel Training", desc: "Policy Communication to Personnel and Business Associates, and Personnel Controls and Training." },
                        { title: "Risk Assessments", desc: "Conducting Regular Bribery Risk Assessments and Due Diligence, Especially of Business Partners." },
                        { title: "Financial Controls", desc: "Implementing Anti-Bribery Controls, as well as Preventive Financial and Non-Financial Controls." },
                        { title: "Reporting & Auditing", desc: "Reporting, Monitoring, Investigating and Auditing to ensure ongoing compliance." },
                        { title: "Continual Improvement", desc: "Taking Corrective Action and ensuring Continual Improvement of the management system." }
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

const ISO37001Benefits = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Benefits of ISO 37001:2016 Certification
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    The following are the benefits gained from the implementation of ISO 37001:2016 standards:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Ethics
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Clear Benchmarking:</strong> Benchmarking an Anti-Bribery Management System for the organization.</li>
                            <li><strong>Stakeholder Confirmation:</strong> A confirmation to executives, financial specialists, clients, and partners that the association is finding a way to forestall bribery.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Structural Security
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Evidentiary Protection:</strong> Proof in case of an examination that an association has found a way to counteract bribery.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO37001ProcessSection = () => {
    const steps = [
        {
            title: "Optional Preliminary Audit",
            desc: "Voluntary Site inspection is conducted, and quality management Documents are reviewed, assessing the organisation's readiness for full-scale Phase I and II Auditing."
        },
        {
            title: "Audit - Stage I",
            desc: "Assessment for eligibility of Certification determined by results of on-site auditing, quality management Documents analysis along with business assessment."
        },
        {
            title: "Audit - Stage II",
            desc: "On-site Evaluation of the Quality Management System for excellence in areas of applied practice and efficiency."
        },
        {
            title: "Grant of Certificate",
            desc: "The official confirmation certifies the integrity of your quality management system and full compliance with the standards."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        The Procedure for ISO 37001 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        There are four essential steps to be followed to get ISO 37001:2016 Certification:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                            alt="ISO 37001 Certification Process"
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
                                Secure Anti-Bribery Certification
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO37001FeaturesSection = () => {
    const features = [
        {
            title: "Purchase a Plan",
            desc: "Purchase a Plan for Expert Assistance from VyomBiz."
        },
        {
            title: "Add Queries",
            desc: "Add Queries Regarding maintenance of ISO 37001:2016 Certification."
        },
        {
            title: "Provide Documents",
            desc: "Provide Documents to VyomBiz Expert and Prepare Application for ISO 37001:2016 Certification."
        },
        {
            title: "Complete Process",
            desc: "Complete all Eligibility Criteria and Procedural Actions to get your legal requirements fulfilled."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        How can VyomBiz Help You?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        VyomBiz cooperates in assisting all your legal and financial requirements being fulfilled and by connecting you with our experts in the appropriate field of law.
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

const ISO37001DocumentsSection = () => {
    return (
        <section className="w-full py-14 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Documents Required for ISO 37001:2016 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        To seamlessly process digital applications precisely addressing rigorous international standards, submit the following verified records:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-[20px] font-semibold text-[#072b47] mb-4">System Manuals</h3>
                        <ul className="space-y-3 text-[16px] text-slate-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>ISO 37001:2016 Manual</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>System Procedures</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-[20px] font-semibold text-[#072b47] mb-4">Process & Policies</h3>
                        <ul className="space-y-3 text-[16px] text-slate-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Process Approach</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Anti-Bribery Policy</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-[20px] font-semibold text-[#072b47] mb-4">Exhibits & Forms</h3>
                        <ul className="space-y-3 text-[16px] text-slate-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Exhibits</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Sample Blank & Filled Forms</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>ISO 37001 Audit Checklist</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO37001Registration = () => {
    const faqs = [
        {
            question: "What is ISO 37001:2016 Certification?",
            answer: "The ISO 37001:2016 are standards set for governance over the Anti-Bribery Management System, which was published in 2016 and is determined as an international standard."
        },
        {
            question: "What is the purpose of ISO 37001:2016 Certification?",
            answer: "The purpose is to help organisations in the implementation procedure and maintenance procedure of specific measures for preventing, detecting, and addressing bribery across all organisations and business activities."
        },
        {
            question: "What are the policies and guidelines specified to be governed?",
            answer: "The policies and guidelines include the Code of Conduct & Business Ethics, Disciplinary Policy, Gift/No Gift Policy, Whistle Blowing Policy, Charitable Contributions Policy, Facilitation Payments, and Conflicts of Interest."
        },
        {
            question: "What is the importance of Clause 4 of the ISO 37001:2016 standards?",
            answer: "Clause 4 states the context of the organisation, including understanding the organisation, needs and expectations of stakeholders, scope of the Anti-Bribery Management System, Bribery Risk Assessment, and relevant internal and external issues."
        },
        {
            question: "What is the importance of Clause 5 of the ISO 37001:2016 standards?",
            answer: "Clause 5 states requirements and guidelines to be followed by the Governing Body and Top Management along with the Anti-Bribery Compliance Function to be implemented in accordance with the Anti-Bribery Policy."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 37001:2016"
                heroTitleSuffix="Certification"
                heroSubtitle="Anti-Bribery Management"
                heroDescription="Attain ISO 37001:2016 Certification for robust anti-bribery systems. Elevate trust, compliance, and ethics in your organization with our accreditation expertise."
                whatsIncludedList={[
                    "Anti-Bribery Implementation",
                    "Safety Optimizations",
                    "Targeted Auditing Planning",
                    "Continuous Compliance Check"
                ]}
                stats={[
                    { count: "Safe Audit", label: "Implementations", icon: <Globe size={20} /> },
                    { count: "100%", label: "Approval Rates", icon: <ShieldCheck size={20} /> },
                    { count: "Zero Error", label: "Compliance", icon: <CheckCircle2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO37001Overview />}
                advantages={<ISO37001Requirements />}
                eligibility={<ISO37001Benefits />}
                documents={<ISO37001DocumentsSection />}
                process={<ISO37001ProcessSection />}
                features={<ISO37001FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 37001 Certification"
                subtitle="Frequently asked questions about ISO 37001:2016 Anti-Bribery Management Systems."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO37001Registration;
