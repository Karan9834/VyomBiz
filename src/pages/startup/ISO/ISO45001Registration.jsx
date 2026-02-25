import React from "react";
import { HardHat, ShieldCheck, CheckCircle2, HeartPulse } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO45001Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Occupational Health & Safety
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ISO 45001 Certification – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO, or the International Organization for Standardization, is an independent, non-governmental organization that sets international standards for various management systems, including occupational health and safety.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 45001 certification is designed to improve employee safety, reduce workplace risks, and create safer working conditions by ensuring that organizations meet global safety standards. It replaces OHSAS 18001 and is part of the broader Safety Management System (SMS).
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Relevancy
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Is your brand's reputation at risk due to safety concerns? Achieve an ISO 45001 Certification and build the credibility of your business in the industry, showcasing a robust focus on creating a safer work environment.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
                            alt="ISO 45001 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO45001Advantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Systematic Security
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of ISO 45001 Health And Safety
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Obtaining ISO 45001 certification encourages a proactive approach to managing risks, showcasing the organization's commitment to safety and enhancing its reputation.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1534073828943-f801091bb18a?auto=format&fit=crop&q=80"
                            alt="ISO 45001 Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Minimized Operating Cost", desc: "Preventing incidents and ill health reduces legal costs and compensation, lowering overall operating expenses." },
                        { title: "Improved Stakeholder Relationship", desc: "Prioritizing the health and safety of customers, suppliers, and staff builds trust and loyalty and strengthens relationships." },
                        { title: "Legal Compliance Avoidance", desc: "Staying compliant with legal regulations prevents potential penalties and enhances organizational efficiency." },
                        { title: "Improved Risk Management", desc: "Improves compliance response, reducing downtime and incident costs proactively." },
                        { title: "Promotes Business Credibility", desc: "Recognizes global standards, attracts socially responsible customers, and boosts business credibility." },
                        { title: "Customer Satisfaction", desc: "Consistently meeting customer requirements helps safeguard health and safety, driving corporate social responsibility." }
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

const ISO45001Eligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility & Audit Checklist Parameters
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To obtain ISO 45001 certification, an organization must meet strict eligibility criteria and maintain continuous compliance:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Baseline Criteria
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Documented Occupational Health and Safety Management System (OH&SMS).</li>
                            <li>Visible leadership commitment and pervasive worker participation.</li>
                            <li>Active risk-based thinking and continuous hazard identification tracking.</li>
                            <li>Evident internal competence, awareness, and legal compliance.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Audit Preparedness Check
                        </h3>
                        <ul className="grid grid-cols-1 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Determining the scope of the environmental and safety management system accurately.</li>
                            <li>Understanding the needs and expectations of internal workers and interested external parties.</li>
                            <li>Formalizing organizational roles, responsibilities, accountabilities, and authorities safely.</li>
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
                    Documents Required for ISO 45001 Certification
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The list of documents required for ISO 45001 certification as per the international standard for occupational health and safety management systems includes:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Core OH&S Foundation</h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                        <li>Scope of the Occupational Health and Safety Management System.</li>
                        <li>Occupational Health and Safety Policy declaration.</li>
                        <li>Objectives of the OH&S Management System.</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Assessment Matrices</h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                        <li>Procedure for Hazard Identification and Assessment of OH&S Risks.</li>
                        <li>Documented Information Required by the Standard securely demonstrating past operational capacity and continuous improvement.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const ISO45001ProcessSection = () => {
    const steps = [
        {
            title: "Preliminary Audit Phase",
            desc: "In this stage, the organization's Occupational Health and Safety (OH&S) management system will be examined, along with the relevant documentation, to identify any potential non-conformities."
        },
        {
            title: "On-site Rigorous Systemic Audit",
            desc: "The implementation and effectiveness of the OH&SMS will be evaluated through interviews, observations, and document reviews to ensure compliance with ISO 45001 requirements."
        },
        {
            title: "Addressing Non-conformities",
            desc: "The concerned accredited organization shall identify the non-conformities during the audit process and accordingly provide detailed feedback and corrective action paths."
        },
        {
            title: "Granting Core Validation Certificate",
            desc: "On successful completion of the audit and final closure of major non-conformities, the concerned accredited organization will formally grant the certification."
        },
        {
            title: "Continuous Surveillance Audits",
            desc: "It is an annual audit to be conducted by an organization to meet ongoing compliance and continuous improvement requirements consistently."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Standard Process for ISO 45001 Assessment
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Executing standard portal tracking procedures correctly aligns organizational capacity directly protecting operational assets effectively:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                            alt="ISO 45001 Process"
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
                                Start Your Certification Process
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO45001FeaturesSection = () => {
    const features = [
        {
            title: "Enhances Safety Culture",
            desc: "It boosts the working culture of an organization, prioritizing safety where every management team actively complies with international safety standards and practices."
        },
        {
            title: "Worker Safety Priorities",
            desc: "It signifies that the organization is formally designed to protect employees from injury and harm. This certification ensures proactive risk identification."
        },
        {
            title: "Improve Productivity",
            desc: "A safer, secure, and healthy workplace environment leads to better efficiency natively, reducing downtime caused due to accidents or health issues."
        },
        {
            title: "Minimizing Exact Downtime",
            desc: "The explicit OH&S standard effectively shrinks mass operational lapses directly, safeguarding output while minimizing liability exposure."
        },
        {
            title: "Global Recognition",
            desc: "Provides global validation, enabling businesses to effortlessly bid on broader international projects and expand corporate credibility efficiently."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Key Elements of ISO 45001 Design
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        ISO 45001 introduces clear foundational pillars aimed at aggressively reducing corporate limitations across boundaries:
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

const ISO45001Registration = () => {
    const faqs = [
        {
            question: "How long does ISO 45001 certification last?",
            answer: "The rigorous tracking certification typically lasts for exactly 3 years, subject specifically to successful annual surveillance audits maintaining compliance limits."
        },
        {
            question: "Is this identical to the previous OHSAS 18001?",
            answer: "No, while related, ISO 45001 fully replaces OHSAS 18001 and is designed to integrate heavily with other global standards like ISO 9001 and ISO 14001, providing a robust overall management systemic framework."
        },
        {
            question: "Does it guarantee zero absolutely operating accidents?",
            answer: "While it does not guarantee 'zero' accidents outright, it enforces a deeply established, systematic framework meant to significantly minimize risk occurrences through continual hazard identification."
        },
        {
            question: "How often does surveillance occur?",
            answer: "An accredited organizational standard dictates that a tight routine surveillance audit natively occurs annually to ensure ongoing continuity and effectiveness."
        },
        {
            question: "Can explicitly SMEs actively adopt this safely?",
            answer: "Yes, ISO 45001 metrics are modularly scaled to properly fit businesses of any active size securely ranging from small manufacturing outlets to massive public sector units."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 45001 Certification"
                heroTitleSuffix="In India"
                heroSubtitle="Achieve Health & Safety Compliance"
                heroDescription="Ensure your employee safety and protect operational integrity gracefully. ISO 45001 Certification natively provides an internationally standardized structural OH&S framework designed specifically to actively eliminate physical workplace liabilities safely."
                whatsIncludedList={[
                    "OH&S GAP Check",
                    "Safety Metric Audit",
                    "Worker Risk Limits",
                    "Injury Reduction Mapping"
                ]}
                stats={[
                    { count: "Global", label: "Acceptance", icon: <CheckCircle2 size={20} /> },
                    { count: "Injury Free", label: "Operations", icon: <HeartPulse size={20} /> },
                    { count: "Secure", label: "Risk Strategy", icon: <HardHat size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO45001Overview />}
                advantages={<ISO45001Advantages />}
                eligibility={<ISO45001Eligibility />}
                documents={<ISODocumentsSection />}
                process={<ISO45001ProcessSection />}
                features={<ISO45001FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 45001 Certification"
                subtitle="Clarifying exact management limits and compliance inquiries."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO45001Registration;
