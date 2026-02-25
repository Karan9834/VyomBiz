import React from "react";
import { Award, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO13485Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Medical Devices Quality
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            An Overview of <span className="text-[#005a9c]">ISO 13485</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Safety and quality are not negotiated in the case of medical devices. ISO 13485 specifies the requirement of a Quality Management System suitable for organisations demonstrating abilities to provide medical devices safely matching regulatory limits consistently.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            These organisations are indulged in one or more life-cycle stages such as design, storage, distribution, production, development, or servicing of a medical device. This standard is strongly used by suppliers providing medical device component services securely.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Standard Revisions & Alignment
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The latest <span className="font-bold text-[#072b47]">ISO 13485:2016</span> replaced the older 2003 and 2012 versions. Interestingly, it aligns heavily with ISO 9001:2008 and deliberately not with ISO 9001:2015, as recent changes in 9001 were deemed unnecessary for strict medical regulations.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1550592704-6c76defa99ce?auto=format&fit=crop&q=80"
                            alt="ISO 13485 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO13485PreRequisites = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        System Requirements
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Pre-Requisites for ISO 13485 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The strict adherence to medical infrastructure limits empowers businesses securely building a deeply robust Quality Management System precisely compliant with the explicit ISO 13485 bounds.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
                            alt="ISO 13485 Pre-Requisites"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "General Requirements", desc: "Includes adherence to standard operational structures, maintaining risk trackers securely mitigating identified failure points without causing major medical events effectively safely." },
                        { title: "Documentation Requirements", desc: "Organisations require a Quality Manual strictly containing specific procedures creating device specifications carefully handling document controls successfully naturally." },
                        { title: "Management Responsibility", desc: "Management is thoroughly held liable actively guaranteeing safe operations aligned heavily with local laws securely communicating effective resources structurally seamlessly." },
                        { title: "Resource Management", desc: "Management precisely must ensure compliant sufficient infrastructure inherently delivering adequate tools accurately tracking trained personnel mapping device lifecycles explicitly safely." },
                        { title: "Product Realisation", desc: "Developing exact workflows tracing the rigid conceptualization journey fully validating how native products accurately successfully reach precise medical device specifications smoothly reliably." },
                        { title: "Measurement & Improvement", desc: "Handling active clinical complaints running effective internal evaluations analyzing collected data rigorously managing identified non-compliant parameters seamlessly dynamically effectively." }
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

const ISO13485Benefits = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Benefit of Getting ISO 13485 Certified
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Acquiring an internationally recognised EN ISO 13485 certified QMS directly safeguards active market deployments generating enormous structural industry leverage flawlessly:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Scaling
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Extensive Market Access:</strong> Significantly accelerates getting crucial regional and global access approvals confidently smoothly.</li>
                            <li><strong>Product Expansion:</strong> Opens significantly more product placement opportunities allowing seamless specialized medical component manufacturing strictly accurately.</li>
                            <li><strong>Seamless Transitions:</strong> Manufacturers efficiently transition easily engaging new specialized regulatory boundaries quickly successfully naturally.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            System Improvements
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Regulatory Confidence:</strong> Establish absolute faith accurately managing complex regulatory guidelines safely correctly rigorously.</li>
                            <li><strong>Identifying Risks:</strong> Quickly spotting crucial internal structural areas demanding focus drastically minimizing severe non-compliance limits strictly completely.</li>
                            <li><strong>Valuable Reporting:</strong> Attaining completely transparent reporting channels perfectly enhancing internal systemic understanding efficiently solidly safely.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO13485DocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for ISO 13485
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To comprehensively protect device lifecycles mapping rigorous medical controls correctly, you must generate exact records rigorously maintaining structural evidence globally:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Core Quality Documentation</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Exact Quality Manuals, defined roles mapped to regulations, precise medical device files, defined Quality Policies specifically validating software usage securely tracking documents effectively strictly inherently.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Operational Risk Records</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Risk management validations natively executing accurate design plans securely verifying outputs transferring accurately into manufacturing mapping sterilisation records and product preservation parameters solidly.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Tracking & Evaluation Logs</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Firm records reliably capturing customer feedback tightly tracking non-conformities actively managing accurate data analysis deploying precise corrective structural procedures safely communicating audits robustly precisely seamlessly.</p>
                </div>
            </div>
        </section>
    );
};

const ISO13485ProcessSection = () => {
    const steps = [
        {
            title: "Optional Preliminary Audit",
            desc: "A completely voluntary site inspection safely checking quality documents verifying exactly if the active system structurally completely securely readies itself handling extensive auditing phases effortlessly."
        },
        {
            title: "Phase Preparation Layout",
            desc: "Gathering native data structurally evaluating the current operational bandwidth strictly plotting missing procedures rapidly closing compliance borders natively seamlessly perfectly effectively."
        },
        {
            title: "Audit: Stage I",
            desc: "Assessment explicitly testing deep active eligibility checking robust on-site structural documents mapping exact medical controls reliably determining auditing capabilities properly efficiently successfully safely."
        },
        {
            title: "Quality Implementation Review",
            desc: "Organisations rigidly resolve the initially diagnosed documentation gaps safely verifying clinical implementations strongly adhering flawlessly matching identified internal fixes effectively seamlessly precisely confidently."
        },
        {
            title: "Audit: Stage II",
            desc: "A final complex on-site systemic evaluation inherently testing the practical applied efficiency capturing any last structural QMS limits naturally driving deep compliance validation correctly solidly deeply."
        },
        {
            title: "Certification Issuance",
            desc: "Official independent confirmation definitively certifying explicit strict system integrity strongly indicating complete exact active standard compliance universally solidly practically completely smoothly accurately."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure to Obtain ISO 13485 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Meeting clinical operational standards rigidly demands companies systematically undergo heavy structured auditing sequences flawlessly navigating regulatory systems:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                            alt="ISO 13485 Certification Process"
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
                                Begin Your Certification Journey
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO13485FeaturesSection = () => {
    const features = [
        {
            title: "Dedicated Compliance Specialists",
            desc: "Executing rigorous targeted medical validations inherently safely navigating the massive complex regulatory limits flawlessly identifying exact tracking loops completely reliably explicitly securely."
        },
        {
            title: "Rigorous System Enhancements",
            desc: "Empowering organizational tracking naturally optimizing deep complex medical data firmly maintaining highly exact robust infrastructures permanently handling all regulatory anomalies cleanly carefully properly."
        },
        {
            title: "Holistic Clinical Readiness",
            desc: "Helping extensively check diverse medical variables systematically structuring flawless workflows dynamically limiting error margins thoroughly capturing clinical compliance accurately explicitly structurally precisely perfectly."
        },
        {
            title: "Proven Certification Legacy",
            desc: "Serving thousands comprehensively tracking strict limits smoothly properly operating across a verified worldwide customer matrix seamlessly delivering precise ISO workflows fully actively confidently reliably."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Us For ISO 13485
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Navigate global clinical uncertainties accurately establishing deep proactive standard compliance systematically managing medical constraints accurately effortlessly completely safely explicitly reliably.
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

const ISO13485Registration = () => {
    const faqs = [
        {
            question: "What is the purpose of ISO 13485?",
            answer: "It provides a practical foundation for manufacturers to comprehensively address the EU Medical Device Directive and other regulations securely committing to device safety & quality natively."
        },
        {
            question: "What is the latest version of ISO 13485?",
            answer: "The latest highly adopted version explicitly is ISO 13485:2016, which was securely adopted centrally in March 2016."
        },
        {
            question: "Who are eligible to be certified under ISO 13485?",
            answer: "Systematic designers, active manufacturers, and distributors explicitly mapping medical devices completely securely naturally."
        },
        {
            question: "What does the ISO 13485 require?",
            answer: "It firmly requires identifying the exact role structurally assigned under active regulatory limits explicitly incorporating all medical regulatory boundaries confidently efficiently safely within QMS."
        },
        {
            question: "What is ISO 13485:2016?",
            answer: "It is officially the third central edition specifically titled Medical Device: Quality Management Systems: Requirements strictly established for active regulatory purposes precisely confidently natively."
        },
        {
            question: "Does ISO provide the certificates under ISO 13485?",
            answer: "No, inherently ISO definitively does not generate the certificates directly securely; they are dynamically obtained strictly through verified accredited third-party clinical certification bodies securely."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 13485"
                heroTitleSuffix="Certification"
                heroSubtitle="Medical Device QMS Standard"
                heroDescription="Ensure deep proactive management safely elevating clinical health and device safety limits with an explicit ISO 13485 Quality Management compliance solidly naturally perfectly."
                whatsIncludedList={[
                    "Clinical QMS Optimization",
                    "Regulatory Role Mapping",
                    "Stage I & II Audit Setup",
                    "Device Risk Mitigation"
                ]}
                stats={[
                    { count: "1 Lakh+", label: "Safe Devices", icon: <Globe size={20} /> },
                    { count: "100%", label: "Clinical Pass", icon: <ShieldCheck size={20} /> },
                    { count: "Zero Error", label: "Accuracy", icon: <CheckCircle2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO13485Overview />}
                advantages={<ISO13485PreRequisites />}
                eligibility={<ISO13485Benefits />}
                documents={<ISO13485DocumentsSection />}
                process={<ISO13485ProcessSection />}
                features={<ISO13485FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 13485 Certification"
                subtitle="Clarifying global clinical boundaries completely tracking active compliance safely reliably efficiently."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO13485Registration;
