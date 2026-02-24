import React from "react";
import { Award, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO27001Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Information Security
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            An Overview of <span className="text-[#005a9c]">ISO 27001 ISMS</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 27001 ISMS Certification is vital for any organisation that aims to enhance, nurture, or establish an information security management system to conform with its established information security requirements & policy.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 27001 provides a framework to aid organisations of any size or any industry to protect their information in a systematic & cost-effective way via the adoption of ISMS.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why is it Important?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 27001 ISMS Certification assures customers, partners & other stakeholders that your company's information security infrastructure meets their expectations. The standard is a vital component in any organisation's risk management strategy, and it has become a vital part of many organisations' IT Governance, risk & compliance (GRC) programmes.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1550592704-6c76defa99ce?auto=format&fit=crop&q=80"
                            alt="ISO 27001 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO27001Meaning = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        System Controls
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Meaning of ISMS
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        ISMS or Information Security Management System is a set of rules that a company needs to establish in order to structure their organizational security.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
                            alt="ISO 27001 ISMS Meaning"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Identify Risks", desc: "Identify which risks exist for the information." },
                        { title: "Continuously Measure", desc: "Continuously measure if the implemented controls executed as expected." },
                        { title: "Constant Improvements", desc: "Make constant improvements to make the whole ISMS work better." },
                        { title: "Set Clear Objectives", desc: "Set clear objectives on what should be achieved with information security." },
                        { title: "Define Controls", desc: "Define controls (safeguards) & other mitigation methods to meet the identified expectations & handle risks." },
                        { title: "Identify Stakeholders", desc: "Identify stakeholders & their expectations of the company regarding information security." },
                        { title: "Implement Controls", desc: "Implement all the controls & other risk treatment methods effectively." }
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

const ISO27001Benefits = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Benefits of ISO 27001 ISMS Certification
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Following are some important benefits of ISO 27001 ISMS Certification:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Security
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Reducing Risk:</strong> Help You in Reducing Information Security & Privacy Risks as poor InfoSec can be costly.</li>
                            <li><strong>Save Money and Time:</strong> It is the most cost-effective way of safeguarding or keeping your information assets secure.</li>
                            <li><strong>Competitive Advantage:</strong> You may have a benefit over competitors in the eyes of customers.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Business Trust
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Boosts Reputation & Builds Trust:</strong> Prevent severe damage to your reputation & with it your bottom line.</li>
                            <li><strong>Comply with Legal Requirements:</strong> Ideal methodology to comply with laws, regulations & contractual necessities.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO27001DocumentsSection = () => {
    return (
        <section className="w-full py-14 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Mandatory Documents Required
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        ISO 27001 defines a minimum set of policies, plans, procedures, plans, records, and other necessary papered information that are required to become compliant:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Written Documents Column 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-[20px] font-semibold text-[#072b47] mb-4">Written Documents I</h3>
                        <ul className="space-y-3 text-[16px] text-slate-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Scope of the ISMS & Info Security Policy</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Risk Treatment Plan & Methodology</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Risk Assessment Report</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Incident Management Procedure</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Statutory & Regulatory Requirements</span>
                            </li>
                        </ul>
                    </div>

                    {/* Written Documents Column 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-[20px] font-semibold text-[#072b47] mb-4">Written Documents II</h3>
                        <ul className="space-y-3 text-[16px] text-slate-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Secure System Engineering Principles</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Definition of security roles</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Inventory of Assets</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Supplier Security Policy</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Business Continuity Procedures</span>
                            </li>
                        </ul>
                    </div>

                    {/* Mandatory Records */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-[20px] font-semibold text-[#072b47] mb-4">Mandatory Records</h3>
                        <ul className="space-y-3 text-[16px] text-slate-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Monitoring & Measurement Results</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Results of Management Review</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Records of training and skills</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Logs of user activities & internal audits</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Results of Corrective Actions</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO27001ProcessSection = () => {
    const steps = [
        {
            title: "Documentation",
            desc: "Corpbiz evaluates your paper works & company records."
        },
        {
            title: "On-Site Audit",
            desc: "Then, Corpbiz reviews the compliance of your actual activities to ISO 27001 requirements and company records."
        },
        {
            title: "Close the Gap",
            desc: "Your organisation identifies & implements measures to correct the root cause of any non-conformance identified by the Audit."
        },
        {
            title: "Issuance of ISO Certification",
            desc: "After all the above steps, you will get ISO 27001 ISMS Certification and Certification Mark."
        },
        {
            title: "Surveillance Audits",
            desc: "Annual Audit is required to maintain certification validity."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Get Your ISO 27001 ISMS Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Executing standard compliance natively intelligently requires entities to precisely map complex auditing limits:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                            alt="ISO 27001 Certification Process"
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
                                Request Corpbiz Assistance
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO27001FeaturesSection = () => {
    const features = [
        {
            title: "Purchase a Plan",
            desc: "Purchase a Plan for Expert Assistance."
        },
        {
            title: "Add Queries",
            desc: "Add Queries Regarding ISO 27001 ISMS Certification."
        },
        {
            title: "Provide Documents",
            desc: "Provide required Documents to Corpbiz Expert."
        },
        {
            title: "Complete Process",
            desc: "Complete all Admissibility Criteria for Preliminary Screening and Procedural Actions to get your work done."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Corpbiz Assistance
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Corpbiz cooperates in assisting all your legal and financial requirements being fulfilled and by connecting you with our experts.
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

const ISO27001Registration = () => {
    const faqs = [
        {
            question: "What are ISO 27001 Standards?",
            answer: "It is a specification for an ISMS and an ISMS is a framework of policies & procedures that includes all physical, legal & technical controls involved in an organisation’s information risk management processes."
        },
        {
            question: "What is ISMS?",
            answer: "It stands for Information Security Management System and it’s a Documented management system consisting of a set of security controls that safeguards the availability, integrity & confidentiality of assets from threats & vulnerabilities."
        },
        {
            question: "What is the difference between ISMS & ISO 27001?",
            answer: "ISO 27001 is a certification for an Information Security Management System. ISMS is a framework that includes a set of procedures & policies, including technical, legal & physical controls involved in the information risk management process."
        },
        {
            question: "Is ISO 27001 Certification worth it?",
            answer: "Yes, it is absolutely worth it."
        },
        {
            question: "What are the domains of ISO 27001 Certification?",
            answer: "Domains of ISO 27001 Certification include Company Security Policy, Access Control, Incident Management, Asset Management, Physical & Environment Security, and Regulatory Compliance."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 27001"
                heroTitleSuffix="ISMS Certification"
                heroSubtitle="Information Security Management"
                heroDescription="Ensure top-notch information security practices by integrating ISO 27001 ISMS Certification into your organization's IT Governance, risk & compliance (GRC) programmes."
                whatsIncludedList={[
                    "Asset Protection",
                    "Safety Optimizations",
                    "Regulatory Compliance",
                    "Risk Mitigation"
                ]}
                stats={[
                    { count: "Data Security", label: "Implementations", icon: <Globe size={20} /> },
                    { count: "100%", label: "Approval Rates", icon: <ShieldCheck size={20} /> },
                    { count: "Zero Error", label: "Compliance", icon: <CheckCircle2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO27001Overview />}
                advantages={<ISO27001Meaning />}
                eligibility={<ISO27001Benefits />}
                documents={<ISO27001DocumentsSection />}
                process={<ISO27001ProcessSection />}
                features={<ISO27001FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 27001 ISMS Certification"
                subtitle="Frequently asked questions about Information Security Management Systems."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO27001Registration;
