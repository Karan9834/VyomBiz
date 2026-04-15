import React from "react";

import { Link } from "react-router-dom";
import { Zap, ShieldCheck, CheckCircle2, Factory } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/ISO Certifications/iso-50001-energy-management/benefits.png";
import overview from "../../../assets/ISO Certifications/iso-50001-energy-management/overview.png";
import plan from "../../../assets/ISO Certifications/iso-50001-energy-management/plan.jpg";

const ISO50001Overview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Energy Management
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ISO 50001 Energy Management – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 50001 Energy Management is an international standard that helps organizations establish an effective Energy Management System (EnMS) to improve energy performance and reduce energy consumption.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            An Energy Management System enables organizations to monitor, control, and optimize their energy usage by implementing structured policies, measurable objectives, and performance monitoring processes.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Primary Objective
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The primary objective of ISO 50001 is to improve energy efficiency, reduce energy costs, and lower carbon emissions by identifying and managing energy consumption effectively.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Sustainability Benefits
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of ISO 50001 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Implementing ISO 50001 helps organizations reduce energy costs, improve operational efficiency, and support environmental sustainability initiatives.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="ISO 50001 Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Measure and Monitor Energy Use", desc: "Helps businesses continuously monitor energy consumption to identify areas for efficiency improvements." },
                        { title: "Reduce Carbon Emissions", desc: "Supports environmental goals by reducing greenhouse gas emissions and overall carbon footprint." },
                        { title: "Risk Management", desc: "Identifies and mitigates risks associated with energy supply, pricing fluctuations, and regulatory compliance." },
                        { title: "Access to More Business Opportunities", desc: "Increases eligibility for government and corporate tenders that require proven environmental responsibility." },
                        { title: "Improved Operational Performance", desc: "Optimizes energy usage across various departments, reducing waste and improving overall efficiency." },
                        { title: "Better Brand Image", desc: "Demonstrates a commitment to sustainability, enhancing brand reputation among environmentally conscious customers." }
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
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Core Requirements for ISO 50001 Certification
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
                            <li>Measure and track ongoing energy consumption across operations.</li>
                            <li>Develop and implement an active policy to drive energy efficiency globally.</li>
                            <li>Continually improve the energy management system to minimize waste.</li>
                            <li>Regularly review energy policies to ensure operational effectiveness.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Data Governance
                        </h3>
                        <ul className="grid grid-cols-1 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Set specific objectives and manageable targets aligned with central compliance policies.</li>
                            <li>Collect comprehensive data to understand metrics and support informed decisions.</li>
                            <li>Structure routine internal reviews to maintain compliance and avoid potential setbacks globally.</li>
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
            title: "Phase 1 – Plan",
            desc: "Top management determines the current energy baseline and identifies areas for significant energy consumption improvement."
        },
        {
            title: "Phase 2 – Implement",
            desc: "The organization executes the planned energy policies and implements procedures to optimize energy efficiency."
        },
        {
            title: "Phase 3 – Monitor",
            desc: "Energy consumption data is collected, monitored, and analyzed against the established objectives and targets."
        },
        {
            title: "Phase 4 – Improve",
            desc: "Management reviews the results and takes actions to continually improve the energy management system."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Plan-Do-Check-Act Approach (PDCA)
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        ISO 50001 follows the Plan-Do-Check-Act (PDCA) model to continuously improve energy management performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={plan}
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
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your PDCA Process
                            </Link>
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
        <section className="w-full py-6 bg-white">
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
            question: "What is an Energy Management System (EMS)?",
            answer: "An Energy Management System (EMS) is a structured set of processes and procedures that helps organizations monitor, control, and optimize their energy consumption to improve operational efficiency and reduce costs."
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
                heroTitleSuffix="Certification Online"
                heroSubtitle="Achieve Optimal Energy Efficiency"
                heroDescription="Improve energy efficiency and sustainability with ISO 50001 Energy Management Certification. Implement a structured system that helps organizations monitor, control, and optimize energy usage while meeting internationally recognized energy performance standards."
                whatsIncludedList={[
                    "EnMS Document Gap Check",
                    "Continual Metric Audit",
                    "Plan-Do-Check-Act Layouts",
                    "CO2 Reduction Mapping"
                ]}
                stats={[
                    { count: "100,000+", label: "Businesses Served", icon: <CheckCircle2 size={20} /> },
                    { count: "Efficient", label: "Operations", icon: <Factory size={20} /> },
                    { count: "Optimized", label: "Energy Management", icon: <Zap size={20} /> }
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

