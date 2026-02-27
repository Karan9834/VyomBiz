import React from "react";
import { Award, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO20000Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            IT Service Management
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            An Overview of <span className="text-[#005a9c]">ISO 20000</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 20000 is an International Standard for ITSM (Information Technology Service Management), published by ISO and ICE and revised in 2011 & 2018. It reflects best practice guidance contained within the ITIL Framework.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 20000 Certification Standard aids IT Departments in ensuring their ITSM Framework processes are aligned with global best practices & business requirements. It helps benchmark measure service levels, deliver accurate services, and assess performance globally.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Importance of ISO 20000 Certification
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            This certification helps and advises organisations to improve performance, evaluate gap analysis, and properly plan service management implementation using tools and technology. It ensures a properly structured and applied service management plan.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1550592704-6c76defa99ce?auto=format&fit=crop&q=80"
                            alt="ISO 20000 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO20000Sections = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        System Layout
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Sections of ISO 20000
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The management needs to be familiar with the various operational sections to successfully achieve ISO 20000 Certification across their IT workflows.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
                            alt="ISO 20000 Sections"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Design & Generation of Services", desc: "Covers developing, planning, transitioning, and designing new or altered IT services efficiently." },
                        { title: "Resolution Management", desc: "Includes comprehensive problem management alongside incident & service request management protocols." },
                        { title: "General Requirements of the SMS", desc: "Focuses on documentation, resource management, improving, implementing, and operating the Service Management System (SMS)." },
                        { title: "Control Processes", desc: "Encompasses configuration management, deploying changes, and strict change management control." },
                        { title: "Service Delivery Processes", desc: "Addresses continuity of service, availability testing, accounting for IT services, info security, and service level reporting." },
                        { title: "Relationship Processes", desc: "Governs business relationship management and secure external supplier management integrations." }
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

const ISO20000Benefits = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Benefits of ISO 20000 Certification
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Implementing ISO 20000 significantly upgrades how IT services are deployed, delivering unmatched tangible advantages over competitors securely mapped to business alignment:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Excellence
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Reduce the IT Cost:</strong> Better manage & understand the cost of IT, and plan financial costs with greater accuracy.</li>
                            <li><strong>Gain a Competitive Advantage:</strong> Through efficient IT services, respond quickly to issues freeing up time for strategic IT development.</li>
                            <li><strong>Increased Customer Satisfaction:</strong> Deliver improved IT services that better meet internal and external needs securely.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Strategic Alignment
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Fully Integrated Processes:</strong> Align IT Services with an extensive business strategy focused on the best-suited ITSM solutions.</li>
                            <li><strong>Create a Culture of Improvement:</strong> Ensure the organisation continuously improves its processes in response to customer feedback and digital innovation.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO20000DocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Mandatory Records & Documents Required
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To seamlessly process your ISO 20000:2018 certification, you need to arrange the following compliant documentary evidence strictly mapping ITSM:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Core SMS Documents</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Scope of SMS, Service Management Plan, Service Continuity Plan, Release acceptance criteria, and specific documented procedures for managing major incidents and restoring working conditions.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Policy & Objectives</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Service management objectives & policy, Change management policy, Risk assessment & management plans, Information security policy, and Service Level Agreement(s).</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Mandatory Verification Records</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Results of service availability monitoring, Internal audit programs, Configuration details, Information security incidents, Records of known errors, Service requests, and Management review results.</p>
                </div>
            </div>
        </section>
    );
};

const ISO20000ProcessSection = () => {
    const steps = [
        {
            title: "Creating Awareness & Planning",
            desc: "Communicate benefits to employees and ensure a clear understanding of service management best practices before determining the exact scope of certification."
        },
        {
            title: "Conducting an Initial Assessment",
            desc: "Identify gaps between standard requirements and the current situation via self-assessment benchmarks, addressing any non-conforming areas systematically."
        },
        {
            title: "Preparing for the Audit (ITSM Setup)",
            desc: "Bridge identified gaps, introduce and correct service management processes, and maintain a strict checklist tracking fulfilled requirements and records."
        },
        {
            title: "Implement Plan-Do-Check Cycle",
            desc: "Plan risk management & resources, Do manage budget and paper works mitigating risks, Check review SMS compliance and internal audit programs securely."
        },
        {
            title: "Conducting the Audit",
            desc: "An external auditor from the Registered Certification Body strictly evaluates workflows and processes to confirm ISO 20000 standard adherence natively."
        },
        {
            title: "Certification & Retention",
            desc: "After the successful audit, the organisation gets certified, making it vital to routinely renew the certificate every three years via surveillance audits."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure to get ISO 20000 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Management of any organisation needs to strictly follow structured operational steps mapped to continuous SMS compliance to obtain this IT standard:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                            alt="ISO 20000 Certification Process"
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

const ISO20000FeaturesSection = () => {
    const features = [
        {
            title: "Comprehensive GAP Assessment",
            desc: "Executing a detailed GAP evaluation scanning current IT workflows to structurally align existing limits with SMS compliant standards effortlessly."
        },
        {
            title: "Expert Internal Auditing",
            desc: "Helping rigidly conduct internal audit programs and checking SMS compliance via specialized practitioner training securely pre-audit."
        },
        {
            title: "Streamlined Certification Prep",
            desc: "We coordinate massively with certification bodies to systematically close any explicit missing non-conformities assuring smooth execution globally."
        },
        {
            title: "Continuous Legacy Support",
            desc: "Carrying a legacy of successfully integrating IT certifications seamlessly offering robust support protecting traceability and continuous renewals natively."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Us For ISO 20000
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Scale efficiently by mapping your IT and service management infrastructures explicitly matching international quality metrics completely.
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

const ISO20000Registration = () => {
    const faqs = [
        {
            question: "What is ISO 20000:2018?",
            answer: "It provides a measurable quality standard for the SMS (Service Management System). It specifies the necessary minimum requirements for processes an organisation must establish to provide & manage services of defined quality."
        },
        {
            question: "What is the objective of ISO 20000 Certification?",
            answer: "The objective is to align IT services with the current & future needs of the business & its customers, improving the overall quality of IT services delivered."
        },
        {
            question: "For which companies is an ISO 20000 Certification suitable?",
            answer: "This certification is suitable for all companies seeking to improve service processes, mostly quality-critical industries & organisations that require proof of quality-assured service processes."
        },
        {
            question: "What are key differences between ISO 9001 and ISO 20000?",
            answer: "ISO 9001 is focused on Quality Management while ISO 20000 is focused on Service Management. ISO 9001 is generic for any organisation, whereas ISO 20000 specifically targets the services part of a provider's systems."
        },
        {
            question: "Are there companies that cannot be certified as per ISO 20000?",
            answer: "No, basically every company can be certified as per ISO 20000."
        },
        {
            question: "What is the difference between ISO 20000 and ITIL?",
            answer: "ISO 20000 is a standard & code of practice; ITIL is a best practice framework. ISO 20000 awards organisations with Certification, whereas ITIL doesn't."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 20000"
                heroTitleSuffix="Certification"
                heroSubtitle="IT Service Management standard"
                heroDescription="Elevate IT service excellence with 'The ISO 20000 Path.' Boost quality, compliance, and efficiency on your journey to ITSM certification securely."
                whatsIncludedList={[
                    "ITSM Alignment mapping",
                    "Deep Gap Analysis",
                    "Continuous SMS Improvement",
                    "Service Process Control"
                ]}
                stats={[
                    { count: "1 Lakh+", label: "IT Clients Globally", icon: <Globe size={20} /> },
                    { count: "100%", label: "Compliant", icon: <ShieldCheck size={20} /> },
                    { count: "Fast", label: "Certification", icon: <Award size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO20000Overview />}
                advantages={<ISO20000Sections />}
                eligibility={<ISO20000Benefits />}
                documents={<ISO20000DocumentsSection />}
                process={<ISO20000ProcessSection />}
                features={<ISO20000FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 20000 Certification"
                subtitle="Frequently Asked Questions securely mapped"
                faqs={faqs}
            />
        </div>
    );
};

export default ISO20000Registration;
