import React from "react";
import { HardHat, ShieldCheck, CheckCircle2, Scale, Search } from "lucide-react";
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
                            Corporate Integrity
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ISO 37001:2016 Certification – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The ISO 37001:2016 Certification states the requirements and guidance of compliance measures regarding Establishing, Implementing, Maintaining, Reviewing, and Improving the Anti-Bribery Management System. This system can be integrated as a stand-alone overarching operational framework.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The regulations stated in these ISO standards are restricted specifically to bribery. It outlines Anti-Bribery Laws and complying measures to seamlessly detect, prevent, and respond to any bribery-related activities, ensuring organizations maintain high ethical practices.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Scope of the Standard
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The standard is highly versatile and generically applicable to all organizations regardless of type, size, or sector (public, private, or non-profit). It covers direct and indirect bribery, whether through personnel, business associates, or third parties offering or accepting bribery on behalf of the organization.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
                            alt="ISO 37001 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO37001Advantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Systematic Security
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits & Compliance Measures
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The implementation of ISO 37001:2016 standards provides a verified framework to protect your organization's ethical standing and legal integrity worldwide.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80"
                            alt="ISO 37001 Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Benchmarked Execution", desc: "Formally benchmarks an Anti-Bribery Management System meeting international structural expectations." },
                        { title: "Partner Confirmation", desc: "Serves as direct confirmation to executives, financial specialists, clients, and partners that the association strictly prevents bribery." },
                        { title: "Legal Protection Evidence", desc: "Provides concrete proof in case of legal examination that an association has established proactive ways to counteract illegal bribery." },
                        { title: "Anti-Bribery Controls", desc: "Implants Preventive Financial and Non-Financial controls ensuring all monetary transactions remain clean and highly transparent." },
                        { title: "Risk Assessments", desc: "Mandates regular Bribery Risk Assessments ensuring changing operational vulnerabilities are tracked and mitigated continually." },
                        { title: "Due Diligence", desc: "Enforces strict Due Diligence frameworks, especially when heavily engaging with new active Business Partners or third-party networks." }
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

const ISO37001Eligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Prerequisites & Structural Policies
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To integrate the standard accurately, entities must incorporate core leadership governance policies ensuring compliance from the top down:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Baseline Criteria
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Commitment actively driving Anti-Bribery Leadership and Responsibility.</li>
                            <li>Formal Appointment of an isolated internal Monitoring Personnel or Body.</li>
                            <li>Visible constraints on Facilitation Payments and Hospitality/Entertainment Expenses.</li>
                            <li>Rigorous structural control addressing internal Conflicts of Interest safely.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Essential Policies & Guidelines
                        </h3>
                        <ul className="grid grid-cols-1 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Detailed enforcement of the Code of Conduct & Business Ethics.</li>
                            <li>Strict compliance with a clear Gift / No Gift Policy.</li>
                            <li>Proper structural reporting frameworks backing a Whistle Blowing Policy.</li>
                            <li>Documented guidelines managing Charitable Contributions, Sponsorships, and Donations.</li>
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
                    Documents Required for ISO 37001
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Implementing the anti-bribery standard requires comprehensive paper trails mapping procedural approaches to mitigate corruption correctly:
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">System Frameworks</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>Comprehensive ISO 37001:2016 System Manual.</li>
                            <li>Strict System Procedures and clearly defined Process Approaches.</li>
                            <li>Formalized internal Anti-Bribery Policy declarations.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Assessment Matrices</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>Extensive operational Exhibits and legal proofs of ethical frameworks.</li>
                            <li>Sample Blank & Filled Forms addressing due diligence pipelines.</li>
                            <li>ISO 37001 Pre-Certification internal Audit Checklist.</li>
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
            desc: "Voluntary Site inspection is conducted, and quality management documents are actively reviewed, assessing the organisation's readiness for full-scale Phase I and II auditing."
        },
        {
            title: "Audit - Stage I",
            desc: "Assessment for organizational eligibility of certification is determined by results of on-site auditing and early quality management document analysis limits."
        },
        {
            title: "Audit - Stage II",
            desc: "Heavy on-site evaluation of the Quality Management System for excellence in applied practice and anti-bribery efficiency seamlessly eliminating critical hazards."
        },
        {
            title: "Grant of Certificate",
            desc: "The official confirmation certifies the precise integrity of your management system and verifies full active compliance with the established international metrics securely."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure for ISO 37001 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Executing standard portal tracking procedures effectively aligns organizational capacity directly protecting operational assets safely:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80"
                            alt="ISO 37001 Process"
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
                                Start Your Anti-Bribery Audit
                            </button>
                        </div>
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
            answer: "The ISO 37001:2016 are strict standards set for robust governance over the Anti-Bribery Management System, which was established in 2016 and is determined as a foundational international standard."
        },
        {
            question: "Does the standard openly address general corporate fraud as well?",
            answer: "No, these particular ISO standards do not directly address adjacent activities such as fraud, broad cartels, anti-trust offences, or systemic money laundering, restricting their required scope exclusively to bribery limits."
        },
        {
            question: "Are there any Normative References stated within the ISO 37001 rules?",
            answer: "No, structurally there aren't any Normative References directly mentioned or explicitly mandated in the ISO 37001:2016 Certification."
        },
        {
            question: "What is the importance of Clause 4 embedded within the standards?",
            answer: "Clause 4 effectively states the context of the organization, detailing expectations of active stakeholders, identifying external issues, and defining the precise scope and coverage of the Anti-Bribery framework."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 37001:2016"
                heroTitleSuffix="Certification"
                heroSubtitle="Anti-Bribery Management System"
                heroDescription="Elevate corporate trust and compliance ethics actively. Execute ISO 37001:2016 Certification parameters to implement robust preventative controls actively eliminating internal and external bribery liabilities across operational chains."
                whatsIncludedList={[
                    "Ethics Policy Setting",
                    "Due Diligence Mapping",
                    "Financial Control Audits",
                    "Risk Tracking Matrix"
                ]}
                stats={[
                    { count: "Compliance", label: "Assured", icon: <CheckCircle2 size={20} /> },
                    { count: "Ethical", label: "Operations", icon: <Scale size={20} /> },
                    { count: "Transparent", label: "Audit Trails", icon: <Search size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO37001Overview />}
                advantages={<ISO37001Advantages />}
                eligibility={<ISO37001Eligibility />}
                documents={<ISODocumentsSection />}
                process={<ISO37001ProcessSection />}
                features={<></>} // No notable specific standalone feature component needed from the parsed data
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 37001:2016 Certification"
                subtitle="Understanding explicit legal ethical corporate boundaries safely."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO37001Registration;
