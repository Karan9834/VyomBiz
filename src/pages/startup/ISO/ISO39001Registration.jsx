import React from "react";
import { HardHat, ShieldCheck, CheckCircle2, Car } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO39001Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Road Traffic Safety
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ISO 39001 Certification – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            If your organization interacts with road traffic systems—whether you are a vehicle fleet operator, construction company, school, government entity, or public transport company—securing ISO 39001 Certification is the best move.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 39001 is an International Standard for Road Traffic Safety Management System (RTSMS). It sets out the basic criteria for effectively implementing road safety management objectives and action plans within the organization's operations, aiming to significantly reduce serious injuries resulting from road traffic accidents.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is the ISO 39001 Standard?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The ISO 39001:2012 standard is concerned with the development and correct implementation of appropriate road traffic safety policies. This versatile, inclusive standard incorporates both organizational and legal requirements to mitigate risks on the road.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1544620347-c4fd09b49e7a?auto=format&fit=crop&q=80"
                            alt="ISO 39001 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO39001Advantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Systematic Security
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of ISO 39001 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The issuance of ISO 39001 Road Traffic Safety Management certification enhances quality, safety, and reliability while bringing numerous structural benefits to the organization.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80"
                            alt="ISO 39001 Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Organizational Safety", desc: "Secures overarching safety and social responsibility targets within the organization by formally addressing road risks." },
                        { title: "Policy Compliance", desc: "Ensures that the establishment and maintenance of an effective safety system reliably complies with operational policies and internal objectives." },
                        { title: "Identify Performance Parameters", desc: "Enables organizations to transparently identify road traffic safety performance metrics against the hazards and risks involved." },
                        { title: "Customer Confidence & Reliability", desc: "Creates quality, safety, and reliability among customers, effectively reducing service complaints." },
                        { title: "Reduced Cost", desc: "Lowers the cost of operational repair and insurance through improved logistical efficiency and reduced vehicle incidents." },
                        { title: "Competitive Advantage", desc: "Gains a noticeable competitive edge by joining the forward-thinking tier of organizations that actively implement ISO 39001 parameters." }
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

const ISO39001Eligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility & Core Requirements
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    ISO 39001 standard is applicable to public and private organizations interacting with road traffic safety management systems. To qualify, an entity must satisfy specific prerequisites:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Eligible Organizations
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>An organization that owns a vehicle fleet or whose personnel frequently travel by road.</li>
                            <li>Organizations of all varying sizes, types, and geographical locations.</li>
                            <li>A road or public transport company (e.g., a bus company, taxi company, fleet service).</li>
                            <li>Organizations actively operating parking lots, motorways, or wide-scale highways.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Certification Requirements
                        </h3>
                        <ul className="grid grid-cols-1 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Understanding the context of the organization, including the expectations of interested parties.</li>
                            <li>A clear definition of the scope of the Road Traffic Safety Management System (RTSMS).</li>
                            <li>Demonstrating active leadership commitment and authority involvement.</li>
                            <li>Evident risk mitigation planning, disaster preparedness, and tracking continuous structural improvements.</li>
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
                    Documents Required for ISO 39001
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The documentation required to formally apply for ISO 39001 certification is divided into specific procedural directories:
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">System Frameworks</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>Road Traffic Safety System Manual.</li>
                            <li>System and Standard Operating Procedure (SOP).</li>
                            <li>Procedures, structural policies, and defined core objectives.</li>
                            <li>Corporate Mission and Vision statements concerning safety targets.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Assessment & Records</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>ISO 39001:2012 Audit Checklist and detailed Compliance Matrix.</li>
                            <li>Maintained registers containing internal Exhibits, Forms, and execution Records.</li>
                            <li>Specific document disclosures profiling the size, processes undertaken, and fleet complexity of the company.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO39001ProcessSection = () => {
    const steps = [
        {
            title: "Preliminary Audit (Optional)",
            desc: "This step initially evaluates the organization's current road traffic safety management practices against standard requirements to determine if compliance frameworks are already somewhat implemented."
        },
        {
            title: "Document Preparation",
            desc: "The applicant organization prepares and formally reviews the necessary documentation, including policies and systemic procedures, to establish a robust Road Traffic Safety Management System."
        },
        {
            title: "Initial Certification Audit - Stage I",
            desc: "This initial stage evaluates the performance frameworks of the existing system. The stage ensures a review of early audit findings and determines the necessary corrective actions to be deployed."
        },
        {
            title: "Initial Certification Audit - Stage II",
            desc: "Conducted after internal audits are complete, this Stage II assessment is carried out by an accredited certification body to ensure strict, literal compliance with ISO 39001 requirements."
        },
        {
            title: "Certification Decision & Grant",
            desc: "If the organization successfully meets all the audit criteria, the accredited body formally issues the ISO 39001 certification online. It remains valid for a period of 3 years, subject to annual surveillance."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Application Process for ISO 39001
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        A systematic, staged approach guarantees that organizational assets actively conform to operational road safety milestones:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                            alt="ISO 39001 Process"
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
                                Request Road Safety Audit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO39001FeaturesSection = () => {
    const features = [
        {
            title: "Leadership and Management Tracking",
            desc: "Ensures top-level managerial involvement that consistently establishes, maintains, and fundamentally improves Road Traffic Safety limits."
        },
        {
            title: "Business Integration",
            desc: "Rather than being an isolated metric, safety operations are fully integrated smoothly into standard corporate routines and business goals."
        },
        {
            title: "Assures Absolute Policy Conformity",
            desc: "Solidifies public confidence by formally assuring active conformity with the organization’s heavily stated Road Traffic Safety policy standards."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Key Factors Validating Certification
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        To successfully maintain certification across the standard 3-year timeline, entities focus intensely on employee improvement, legal compliance, and constant monitoring:
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

const ISO39001Registration = () => {
    const faqs = [
        {
            question: "What is the validity timeline for ISO 39001 Certification?",
            answer: "Once granted, the ISO 39001 certification holds formally valid for a period of exactly 3 years. This prolonged validity is routinely subject to strict annual surveillance tracking audits."
        },
        {
            question: "What are the common objectives of obtaining this specific Certification?",
            answer: "The primary objectives are securing Road Traffic Safety outcomes that typically exceed what is legally expected, aligning organizational safety action plans carefully with the protection of broader society."
        },
        {
            question: "How long does the entire certification process formally take to clear?",
            answer: "The practical timeline generally varies profoundly based on organizational complexity, active fleet sizes, and procedural readiness; however, the overall process largely completes systematically within 3 to 6 months."
        },
        {
            question: "Is this certification beneficial for small taxi businesses?",
            answer: "Absolutely. ISO 39001 is applicable to organizations of completely all sizes who interact closely with traffic systems, providing smaller fleet sizes vital frameworks reducing insurance premiums and securing operational capacity."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 39001 Certification"
                heroTitleSuffix="In India"
                heroSubtitle="Road Traffic Safety Management System"
                heroDescription="Ensure rigorous compliance by actively managing operational fleets. The ISO 39001 standard enables your firm to securely implement verified Road Traffic Safety matrices effectively minimizing serious traffic accident risks globally."
                whatsIncludedList={[
                    "RTSMS GAP Analysis",
                    "Fleet Documentation Support",
                    "Safety Metric Evaluation",
                    "Process Integration Mapping"
                ]}
                stats={[
                    { count: "Risk Free", label: "Fleet Logistics", icon: <CheckCircle2 size={20} /> },
                    { count: "Secure", label: "Transit Policies", icon: <Car size={20} /> },
                    { count: "Compliance", label: "Audits", icon: <HardHat size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO39001Overview />}
                advantages={<ISO39001Advantages />}
                eligibility={<ISO39001Eligibility />}
                documents={<ISODocumentsSection />}
                process={<ISO39001ProcessSection />}
                features={<ISO39001FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 39001 Certification"
                subtitle="Understanding critical road traffic limitations globally."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO39001Registration;
