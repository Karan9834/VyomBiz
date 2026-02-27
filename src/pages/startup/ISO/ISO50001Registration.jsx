import React from "react";
import { Zap, ShieldCheck, CheckCircle2, Factory } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO50001Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Energy Management
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ISO 50001 Energy Management – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 50001 Energy Management is a strategic tool that aids organisations to explicitly put in place an energy management system, efficiently using their energy more effectively. ISO 50001 2018 is the dynamically revised International Standard for Energy Management, providing the most robust framework for optimising energy efficiency.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            An Energy Management System (EMS) strictly helps organisations properly manage their energy use securely improving massive operational productivity. It encompasses developing and explicitly implementing stringent energy policies tracking achievable targets precisely.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Primary Objectives
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The direct primary objective inherently is to definitively improve energy-related performance and active energy efficiency constantly natively identifying strong operational energy reduction opportunities seamlessly reducing heavy CO2 footprint limits successfully.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
                            alt="ISO 50001 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO50001Advantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Sustainability Benefits
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of ISO 50001 Energy Management
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The strict adherence to this standard safely empowers massive cost savings and strongly drives an active contribution definitively supporting broad environmental climate policies perfectly.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80"
                            alt="ISO 50001 Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Measure & Monitor", desc: "Effectively monitor all continuous energy use inherently identifying exactly where to critically improve efficiency safely targeting losses." },
                        { title: "Reduce Carbon Emissions", desc: "Aggressively reduce operational carbon emissions explicitly aligning properly meeting stringent global and central government reduction targets." },
                        { title: "Risk Mitigation", desc: "Identify and smoothly manage all hidden operational risks specifically surrounding critical future energy structural supply pipelines exactly." },
                        { title: "Increase Tender Opportunities", desc: "Demonstrate verified environmental core credentials specifically aiming to significantly multiply top-tier public/private tender selection chances globally." },
                        { title: "Improve Overall Performance", desc: "Drive holistic systematic improvements practically deployed across all units comprehensively designed tracking strict cuts down energy consumption bills natively." },
                        { title: "Image Boost & Competitiveness", desc: "Create an explicitly massive green environmental image actively revealing hidden financial savings naturally building stronger broad competitive commercial advantages." }
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

const ISO50001Requirements = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Core Requirements for ISO 50001
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Implementing ISO 50001 Energy Management fundamentally provides a rigorous set of active operational requirements safely enabling entities securely to govern energy matrices tightly:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Actions
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Measure precisely the ongoing results obtained across consumption points.</li>
                            <li>Develop an active policy effectively driving efficient use of resources globally.</li>
                            <li>Continually inherently improve global energy management securely reducing wastes.</li>
                            <li>Review explicitly the tracking policy's operational effectiveness securely routinely.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Data & Governance
                        </h3>
                        <ul className="grid grid-cols-1 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Fix exact explicit objectives and strict active targets effectively meeting structural central policies seamlessly.</li>
                            <li>Collect critical data specifically aimed to deeply understand active metrics seamlessly empowering structural decisions tracking proper energy utilization.</li>
                            <li>Structure internal reviews perfectly matching high-level compliance limits explicitly avoiding structural defaults safely preventing losses globally.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO50001ProcessSection = () => {
    const steps = [
        {
            title: "Phase 1: Plan",
            desc: "The overall active responsibility for the installed energy management structurally must securely locate with top management. You inherently identify exactly Significant Energy Uses (SEUs) and smoothly prioritise active efficiency."
        },
        {
            title: "Phase 2: Do",
            desc: "Implement specifically the targeted energy mapping action plans effectively matching analysis of exact real-time energy structurally mapped driving explicit new high standards accurately tracking global metrics safely."
        },
        {
            title: "Phase 3: Check",
            desc: "Measure precisely explicitly auditing active workflows monitoring natively execution parameters thoroughly analysing structural results explicitly matched against baseline target compliances natively securely."
        },
        {
            title: "Phase 4: Act",
            desc: "Take tight, strict action directly led by a higher management tracking limit firmly aiming safely to thoroughly confirm continual improvements tracking the exact structural EnMS actively avoiding structural non-conformity natively."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Plan-Do-Check-Act Approach (PDCA)
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        ISO 50001 relies inherently upon a rigid cyclical method securely identifying precise execution capabilities perfectly driving overall environmental metrics:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                            alt="ISO 50001 Process"
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
                                Start Your PDCA Process
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO50001FeaturesSection = () => {
    const features = [
        {
            title: "Pre-Assessment Service",
            desc: "Providing explicitly a heavily detailed rigorous optional evaluation directly comparing exactly current EMS structures smoothly against strict formal ISO 50001 metrics perfectly saving vital operational execution time strictly."
        },
        {
            title: "Procedures & Controls Implementation",
            desc: "Helping explicitly securely check specific preparedness inherently closing hidden process gaps completely executing functional operational testing properly validating readiness seamlessly avoiding audit rejections natively."
        },
        {
            title: "Seamless Certification Journey",
            desc: "We completely coordinate the full explicit execution mapping specifically the active ISO certification process effectively guaranteeing exact 3-year validation smoothly avoiding rigorous regulatory pushbacks locally."
        },
        {
            title: "Global Compliance Expertise",
            desc: "Harness heavily profound legal structurally deployed insights correctly preventing technical structural default clauses efficiently seamlessly mapping vast international footprint guidelines tracking exact execution limits properly."
        },
        {
            title: "Modular Integration System",
            desc: "Since ISO 50001 structurally shares precise high-level PDCA mappings inherently linked directly mimicking massive exact structures of ISO 9001 and ISO 14001 naturally we ensure integrated overlapping compliances explicitly smoothly."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Us For ISO 50001
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Execute energy policies natively directly backed extensively by explicit technical operational support flawlessly mapping exact structural testing thresholds securely avoiding regulatory delays completely.
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

const ISO50001Registration = () => {
    const faqs = [
        {
            question: "What is EMS?",
            answer: "EMS formally stands natively specifically explicitly for Energy Management System and is intrinsically a tight set of operational processes that critically makes a company dynamically systematically use secure data efficiently driving structural improvement."
        },
        {
            question: "Can I be certified to ISO 50001 without having ISO 14001?",
            answer: "Yes, ISO 50001 inherently explicitly precisely has been heavily exclusively structurally actively formally rigorously developed completely securely specifically entirely as a perfectly seamless stand-alone robust management structural system exactly."
        },
        {
            question: "What is the difference between ISO 50001 and ISO 14001?",
            answer: "ISO 50001 critically primarily inherently is massively structurally interested securely closely in specific energy execution performance and active corporate energy baseline drops, whereas explicitly ISO 14001 rigorously tightly maps overall environmental issues perfectly mapping waste handling limits heavily successfully strictly."
        },
        {
            question: "What is the primary objective of an Energy Audit?",
            answer: "The explicit central primary core objective fundamentally is securely specifically inherently to seamlessly carefully discover and optimally strongly meticulously completely thoroughly map explicitly different operational techniques strictly precisely completely strictly driving exact consumption cuts securely optimally avoiding local structural penalties dynamically actively."
        },
        {
            question: "Why is it necessary to get ISO 50001 Certification?",
            answer: "Because massive energy is explicitly widely precisely effectively strictly an inherently crucial heavily essential specific operational component and a heavy drain driving overheads dynamically explicitly this perfectly securely mapping formal models intrinsically drives structural depletion halts strongly."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 50001 Energy Management"
                heroTitleSuffix="Certification"
                heroSubtitle="Data-Driven Optimal Processes"
                heroDescription="Elevate specifically with explicit absolute ISO 50001 Energy Management compliance. Improve precisely explicit energy performance limit effortlessly directly specifically driven natively flawlessly through inherently rigorous tightly data-driven tracking systematic securely compliant safe models exactly mapping strictly global standard metrics."
                whatsIncludedList={[
                    "EnMS Document Gap Check",
                    "Continual Metric Audit",
                    "Plan-Do-Check-Act Layouts",
                    "CO2 Reduction Mapping"
                ]}
                stats={[
                    { count: "100,000+", label: "Clients Globally", icon: <CheckCircle2 size={20} /> },
                    { count: "Efficient", label: "Operations", icon: <Factory size={20} /> },
                    { count: "Optimized", label: "Energy Setup", icon: <Zap size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO50001Overview />}
                advantages={<ISO50001Advantages />}
                eligibility={<ISO50001Requirements />}
                documents={null}
                process={<ISO50001ProcessSection />}
                features={<ISO50001FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 50001"
                subtitle="Clarifying global exact management mapping operational limits actively."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO50001Registration;
