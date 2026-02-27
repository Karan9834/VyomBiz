import React from "react";
import { Award, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO31000Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Risk Management
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            An Overview of <span className="text-[#005a9c]">ISO 31000</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 31000 is an international standard that provides businesses with principles & guidelines for risk management. Whether you work in a private, public, or community enterprise, you can benefit from this certification.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            By implementing the guidelines and principles of ISO 31000, your organisation can improve operational efficiency, stakeholder confidence & governance while minimising losses. It boosts health & safety performance and establishes a robust foundation for decision making.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Key Innovations in ISO 31000
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It relies on the notion of <span className="font-bold text-[#072b47]">risk appetite</span> and provides a new meaning of risk—the effect of uncertainty on achieving objectives. It explicitly defines the risk management framework as a formal part of strategic decision-making.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1550592704-6c76defa99ce?auto=format&fit=crop&q=80"
                            alt="ISO 31000 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO31000Framework = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        System Architecture
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        ISO 31000 Framework
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The success of risk management explicitly depends on the framework providing the correct foundations & leadership embedding it dynamically across the organisation.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
                            alt="ISO 31000 Framework Structure"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Design Context", desc: "Organisations need to design a risk management strategy that comprehensively works based strictly on business priorities." },
                        { title: "Leadership Initiative", desc: "Leaders within the firm must safely ensure ISO 31000 is applied in ways aligning precisely with organisational culture & core objectives." },
                        { title: "Continual Improvement", desc: "Organisations should continuously track frameworks exploring structural ways to improve standard implementations securely." },
                        { title: "Assessment Evaluation", desc: "Rigorous evaluations determine what precisely works structurally and what processes crucially need refinements." },
                        { title: "Process Implementation", desc: "This strictly integrates risk management design into all explicit business operations using formal deadlines & tracking targets." },
                        { title: "Operational Integration", desc: "Safely integrating risk metrics without causing rigid structural bottlenecks in tracking day-to-day dynamic core operations." }
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

const ISO31000Benefits = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Benefits of ISO 31000 Standard
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Mitigating risks systematically via ISO 31000 actively enhances stability. A well-executed standard delivers remarkable structural leverage across various segments:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Strategic Advancements
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Increase Profitability:</strong> Decreasing risks directly mitigates massive financial impairments stemming from unregulated external events dynamically.</li>
                            <li><strong>Drive Pre-Emptive Control:</strong> Shifts operational behaviors significantly turning fundamentally reactive approaches completely proactive perfectly.</li>
                            <li><strong>Create Mitigation Culture:</strong> Training active staff dynamically embedding security mindsets organically directly boosting productivity actively.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Leverage
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Address Risks Standardly:</strong> Explicitly serves as a perfect framework securely tracking explicit drivers defining standard procedures explicitly.</li>
                            <li><strong>Global Effectiveness:</strong> Utilizes validated explicit global procedures completely maximizing operational security boundaries seamlessly everywhere.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO31000ClausesSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Key Clauses of ISO 31000
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To comprehensively protect value seamlessly via accurate tracking, an organisation must accurately execute these critical domain guidelines consistently:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Core Principles</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Risk management operates deeply addressing explicit uncertainty. It relies explicitly on inclusive cultural input generating dynamic, tailored systematic outputs constantly prioritizing core corporate valuation strictly securely.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Management Framework</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Solid foundational execution directly verifying explicit reports continuously utilized securely building decision metrics protecting explicit accountability inherently avoiding external gaps logically managing risks effectively.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Risk Process Implementation</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">This explicitly calls for deeply coordinated internal communications and consultation establishing criteria strictly outlining tracking behaviors organically mapped securely into routine practices driving standard resilience seamlessly.</p>
                </div>
            </div>
        </section>
    );
};

const ISO31000ProcessSection = () => {
    const steps = [
        {
            title: "Align Business Objectives",
            desc: "The explicit strategy strictly must completely map ongoing organisational core missions completely naturally rather than opposing fundamental business boundaries blindly."
        },
        {
            title: "Assess Existing Governance",
            desc: "Actively evaluate ongoing tracking matrices. Existing leadership protocols optimally simplify formulating roles efficiently directing new management frameworks natively."
        },
        {
            title: "Plan Commitment & Resources",
            desc: "Evaluate exactly the capital limits natively assigned carefully preparing investment ratios tracking continuous explicit management execution organically perfectly."
        },
        {
            title: "Consultation & Communication",
            desc: "Ensure transparent awareness securely driving internal stakeholder explicit insights optimally verifying core strategic information reliably across all major channels securely."
        },
        {
            title: "Define Context & Scope",
            desc: "Structurally review criteria explicitly tracking limits ensuring the adopted risk protocols map flawlessly handling dynamic operational and external risk limits reliably natively."
        },
        {
            title: "Execute Risk Assessment",
            desc: "Vigorously execute explicit identification inherently tracing possible limit breaches actively running structural analysis successfully tracking mitigation securely finally evaluating explicit compliance safely."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Implement ISO 31000?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Although every entity actively tailors its specific execution intrinsically, implementing risk matrices typically strictly demands standard cyclic operations reliably natively executed:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                            alt="ISO 31000 Risk Process"
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
                                Begin Your Certification Journey
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO31000FeaturesSection = () => {
    const features = [
        {
            title: "Expert Risk Treatment Implementation",
            desc: "Running targeted analysis ensuring any potential compliance gaps actively identify appropriate secure treatments smoothly neutralizing complex impacts fundamentally logically safely."
        },
        {
            title: "Routine Monitoring Capabilities",
            desc: "Empowering management natively by effectively preparing precise tracking controls routinely maintaining an ongoing resilient operational infrastructure permanently explicitly confidently."
        },
        {
            title: "Holistic Risk Evaluations",
            desc: "Helping thoroughly capture diverse criteria properly identifying complex risk variables effortlessly matching custom frameworks inherently minimizing compliance anomalies thoroughly comprehensively safely."
        },
        {
            title: "Trusted Certification Partnership",
            desc: "Serving an established global customer structure strongly efficiently mapping global standards natively executing precise ISO processes transparently actively properly fully."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Us For ISO 31000
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Navigate global uncertainties inherently securely relying meticulously precisely explicitly establishing continuous operational resilience properly reliably seamlessly.
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

const ISO31000Registration = () => {
    const faqs = [
        {
            question: "What is ISO 31000?",
            answer: "It's an international standard published in 2009 that provides guidelines & principles for effective risk management."
        },
        {
            question: "What is the purpose of ISO 31000?",
            answer: "It completely identifies risk management principles, defines the risk management framework & finally the risk management process."
        },
        {
            question: "What are the stages in risk assessment?",
            answer: "The first is identifying the hazards, the second is assessing the risks and the last stage is putting control measures in place."
        },
        {
            question: "What are the different components of the ISO 31000 framework?",
            answer: "The primary framework components include Mandate, plan, implement, checks & improvements."
        },
        {
            question: "What is risk appetite?",
            answer: "It's the amount of risk an organisation is willing to take or explicitly deemed acceptable in pursuing structural objectives that have measurable corporate value."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 31000"
                heroTitleSuffix="Certification"
                heroSubtitle="Risk Management Guidelines"
                heroDescription="Elevate health and safety with ISO 31000 Certification. Enhance performance, establish a solid decision-making foundation, and foster proactive management safely."
                whatsIncludedList={[
                    "Risk Identification",
                    "Framework Implementation",
                    "Risk Appetite Tracking",
                    "Continual Process Audits"
                ]}
                stats={[
                    { count: "1 Lakh+", label: "Clients Globally", icon: <Globe size={20} /> },
                    { count: "100%", label: "Compliant", icon: <ShieldCheck size={20} /> },
                    { count: "Risk Zero", label: "Analysis", icon: <CheckCircle2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO31000Overview />}
                advantages={<ISO31000Framework />}
                eligibility={<ISO31000Benefits />}
                documents={<ISO31000ClausesSection />}
                process={<ISO31000ProcessSection />}
                features={<ISO31000FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 31000 Certification"
                subtitle="Frequently Asked Questions mapping operational security and assessment limits natively."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO31000Registration;
