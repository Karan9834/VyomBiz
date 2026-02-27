import React from "react";
import { Award, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO9001Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Quality Management
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            An Overview of <span className="text-[#005a9c]">ISO 9001 2015</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 9001 2015 is an international standard for maintaining, creating and implementing a Quality Management System (QMS). It was first introduced in September 2015 and is already the most widely adopted standard in the history of standards.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It outlines a framework for improving quality & a vocabulary of understanding for any company looking to provide goods & services that steadily meet the customers' expectations. The Quality Management System is the collective of all the resources, cultural values, processes & assets that support the goal of customer satisfaction & organizational efficiency.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is the Fundamental Mission of ISO?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The fundamental mission of ISO is to provide common specifications, standards, terms, & units of measurement to organisations around the globe. ISO facilitates international trade & innovation to allow every organisation to have a common language & common expectations.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1550592704-6c76defa99ce?auto=format&fit=crop&q=80"
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Standard Structure
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Key Clauses of ISO 9001 2015
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The strict adherence to these globally aligned clauses empowers seamless international operations and higher customer satisfaction.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
                            alt="ISO 9001 Clauses"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Clause 4: Context of the Organisation", desc: "Align your business objectives & intent with the QMS. Know the external & internal issues, needs & expectations." },
                        { title: "Clause 5: Leadership", desc: "Top management must demonstrate leadership & commitment, establish & communicate a quality policy." },
                        { title: "Clause 6: Planning for the QMS", desc: "Covers organisational QMS planning to address organisational risks, changes, opportunities & quality objectives." },
                        { title: "Clause 7: Support", desc: "Covers the resources required for the QMS, ensuring employees are capable & aware, providing Documented details." },
                        { title: "Clause 8: Operation", desc: "Covers the control & plan processes required to meet the requirements for goods & services." },
                        { title: "Clause 9: Performance Evaluation", desc: "Requires your organisation's QMS to measure, analyse, monitor, and evaluate your performance." },
                        { title: "Clause 10: Improvement", desc: "Select opportunities for improvement, take action against non-conformities, implement corrective actions." }
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
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Why is ISO 9001 Certification Essential?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    This certification provides your customers reassurance that you have set up a QMS based on the 7 management principles of ISO 9001. It acts as the foundation when industry groups desire to create their own industry standards.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is QMS?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-4 bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            QMS or Quality Management System is defined as a set of interrelated or interacting elements to create policies, objectives & processes to achieve those objectives regarding quality. It is based on a business risk approach to operate, monitor, establish, review, and continually improve quality.
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
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    List of Vital Documents and Records
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To seamlessly process your application and be compliant with ISO 9001 2015, you need to produce the following vital Documents and Records:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Vital Documents Required</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Scope of the QMS, Quality objectives, Quality Policy, and Criteria for evaluation & selection of suppliers.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Mandatory Records</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Records of skills, training, and qualifications. Records of non-conforming outputs, product/service requirements review, internal audit program, results of management review, and corrective actions.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Non-Mandatory Documents (Most Commonly Used)</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Procedure for addressing risks & opportunities, Sales Procedure, Procedure for Internal Audit, Procedure for document & record control, and Procedure for management of non-conformities.</p>
                </div>
            </div>
        </section>
    );
};

const ISO9001ProcessSection = () => {
    const steps = [
        {
            title: "Preparation & Internal Audit",
            desc: "This is in place for you to check your QMS processes. The goal is to confirm compliance and find problems and weaknesses that would otherwise stay hidden."
        },
        {
            title: "Management Review",
            desc: "A review by your management to evaluate the facts regarding the management system processes in order to make appropriate decisions & assign resources."
        },
        {
            title: "Corrective Actions",
            desc: "After the internal audit & management review, you need to correct the root cause of any identified problems & Document how they were resolved."
        },
        {
            title: "Documentation Review (Stage 1)",
            desc: "The auditors from your chosen certification body will check to confirm your Documents meets the ISO 9001 2015 requirements."
        },
        {
            title: "Main Audit (Stage 2)",
            desc: "The certification body auditors will check whether your activities comply with both ISO 9001 & your paper works by checking Documents, company practices & records."
        },
        {
            title: "Certification",
            desc: "Upon successfully clearing rigorous audits and closing any non-conformities, your company is granted the ISO 9001 2015 Certification."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure to Get ISO 9001 2015 Certified
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        For the company QMS to be certified, you need to finish the implementation first, then perform the following steps to ensure a successful certification:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
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
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Certification Flow
                            </button>
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
            title: "Expert QMS Implementation",
            desc: "Executing a rigorously detailed GAP evaluation and structurally scanning existing process limits to securely plot exact intervention points targeting absolute compliance."
        },
        {
            title: "Comprehensive Auditing",
            desc: "Helping rigorously conduct tight internal tracking and dedicated management reviews to thoroughly identify any non-compliance prior to official audits."
        },
        {
            title: "Seamless Certification Coordination",
            desc: "We coordinate massively with accredited certification bodies to guarantee smooth execution timelines and safely close explicit observation loops."
        },
        {
            title: "Global Reliability & Trust",
            desc: "Join thousands of clients worldwide who have effectively elevated their operational standards and market credibility through our tailored ISO 9001 guidance."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Us For ISO 9001 2015
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
            question: "What is ISO 9001?",
            answer: "It's the world's most used standard for QMS and it gives organisations a set of management guidelines that help ensure consistently high-quality products & results."
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
                heroTitleMain="ISO 9001 2015"
                heroTitleSuffix="Certification"
                heroSubtitle="Quality Management Systems"
                heroDescription="Unlock an effortless ISO 9001 2015 certification journey with minimal investment. Discover simplified processes as we guide you step-by-step to success."
                whatsIncludedList={[
                    "QMS Implementation",
                    "Internal Audit Support",
                    "Management Review",
                    "Certification Audit"
                ]}
                stats={[
                    { count: "1 Lakh+", label: "Clients Globally", icon: <Globe size={20} /> },
                    { count: "100%", label: "Compliant", icon: <ShieldCheck size={20} /> },
                    { count: "Top Rated", label: "Service", icon: <CheckCircle2 size={20} /> }
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
