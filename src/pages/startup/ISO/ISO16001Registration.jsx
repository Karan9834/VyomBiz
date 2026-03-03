import React from "react";
import { Award, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO16001Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Object Detection Systems
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Overview of <span className="text-[#005a9c]">ISO 16001 Certification</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO 16001:2017 specifies basic requirements and describes the method or procedure for evaluating and testing the performance of the object detection systems (ODSs) and visibility aids (VAs) used on earth-moving machines.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            This ISO 16001 Certification applies to machines defined under ISO 6165. An ODS, VA, or both are used to augment the operator's direct vision, informing the operator whether a person or object is in the machine's path, primarily during rearward movement.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Covered Aspects
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It includes the detection or visibility of objects (including people), visual and/or audible warnings, system operational reliability, and compatibility and environmental specifications.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1550592704-6c76defa99ce?auto=format&fit=crop&q=80"
                            alt="ISO 16001 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO16001Requirements = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Evaluation Testing
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Pre-Requisites Required
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The performance requirements and tests required to be met before obtaining the ISO 16001 Certification are explicitly defined across multiple systemic limits.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
                            alt="ISO 16001 Pre-Requisites"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "General Requirements", desc: "Includes tests to determine the detection zone boundary, test body requirements, evaluation of test results and false signals." },
                        { title: "Operator Station Components", desc: "Covers the location and images of the monitor, warning devices for ODS, audible and visual devices, and external machine-mounted warning devices." },
                        { title: "System Activation", desc: "Focuses on system activation on engine start and system activation from standby mode for optimum functionality." },
                        { title: "Object Detection System (ODS)", desc: "Includes sensing device, warning device, and evaluation device parameters." },
                        { title: "Visibility Aid (VA)", desc: "Includes comprehensive requirements for monitors and cameras deployed." },
                        { title: "Operating Conditions", desc: "Requirements regarding self-checking, detection time, environmental standby limits, job-site organization, and warning range testing." }
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

const ISO16001Benefits = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Benefits of ISO 16001 Certification
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    The following are the core benefits gained from the implementation of ISO 16001 standards:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Safety
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Decreases Risk:</strong> Significantly increases the safety of participants and staff members operating Earth-Moving machinery.</li>
                            <li><strong>Regulatory Conformity:</strong> Provides strict conformity with overarching legal and safety regulatory requirements globally.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Market Trust
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Global Acceptability:</strong> Maintains a standard for Object Detection safety that is internationally acceptable and trusted.</li>
                            <li><strong>Improves Efficiency:</strong> Prevents critical damages to organization reputation and bottom lines seamlessly.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO16001DocumentsSection = () => {
    return (
        <section className="w-full py-14 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Documents Required for ISO 16001
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The following are appropriate documents and system information required for the ISO 16001 Certification audit:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Primary Technical Documents */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-[20px] font-semibold text-[#072b47] mb-4">Functional Data</h3>
                        <ul className="space-y-3 text-[16px] text-slate-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Description of systems function</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Detection area shape, size, & variances</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Weather limitations & topography</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Description of controls</span>
                            </li>
                        </ul>
                    </div>

                    {/* Operator Instructions */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-[20px] font-semibold text-[#072b47] mb-4">Operational Instructions</h3>
                        <ul className="space-y-3 text-[16px] text-slate-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Instructions for activation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Routine maintenance instructions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Safety operation & malfunction actions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Info for job-site organization (ODS/VAs)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Certification & Performance */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-[20px] font-semibold text-[#072b47] mb-4">Extra Submissions</h3>
                        <ul className="space-y-3 text-[16px] text-slate-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Regulatory certifications (e.g. RF conformity)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Info for connection with other components</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Installation & performance verification</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#005a9c] shrink-0 mt-0.5" />
                                <span>Electrical supply requirements</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO16001ProcessSection = () => {
    const steps = [
        {
            title: "Optional Preliminary Audit",
            desc: "Voluntary Site inspection is conducted, and quality management documents are reviewed, assessing the organization's readiness for full-scale phase audits."
        },
        {
            title: "Audit: Stage I",
            desc: "Assessment of Certification eligibility is determined by on-site auditing, quality management documents analysis, and business assessment results."
        },
        {
            title: "Audit: Stage II",
            desc: "An on-site evaluation is rigorously done for excellence in applied practice, safety implementation, and system efficiency."
        },
        {
            title: "Certification",
            desc: "Official confirmation certifying the integrity of the organization's quality management system and full compliance with the ISO 16001 standards."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure to Obtain ISO 16001 Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Following these essential phases reliably structures your complete compliance pipeline:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                            alt="ISO 16001 Certification Process"
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
                                Start Your Certification Journey
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO16001FeaturesSection = () => {
    const features = [
        {
            title: "Expert Safety Guidance",
            desc: "Gain comprehensive tracking assistance for Earth-Moving Machine compliance requirements."
        },
        {
            title: "Quick Query Resolution",
            desc: "Directly address any explicit ODS operational queries rapidly utilizing highly responsive expert teams."
        },
        {
            title: "End-to-End Documentation",
            desc: "Formally preparing complex applications strongly fulfilling deep exact measurement eligibility criteria securely."
        },
        {
            title: "Regulatory Management",
            desc: "Assisting all your legal and financial requirements being fulfilled correctly and efficiently by connecting you with top experts."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        VyomBiz Assistance
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        VyomBiz cooperates in assisting all your operational constraints elegantly securely mapping accurate compliance structures seamlessly safely cleanly correctly comfortably smartly solidly smartly brilliantly actively intelligently gracefully reliably smartly solidly professionally seamlessly effortlessly effectively confidently correctly properly natively explicitly cleanly brilliantly securely successfully fully explicitly beautifully.
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

const ISO16001Registration = () => {
    const faqs = [
        {
            question: "What does ISO refer to?",
            answer: "ISO refers to the International Organisation for Standardisation, a worldwide federation of national standards bodies known as ISO member bodies."
        },
        {
            question: "What is the real focus of ISO 16001 Certification?",
            answer: "The main focus of ISO 16001 Certification is Object Detection Systems (ODSs) and Visibility Aids (VAs) used on earth-moving machines."
        },
        {
            question: "What are the aspects covered by the ISO 16001?",
            answer: "It covers detection/visibility of objects in the detection zone, warnings (visual/audible) to the operator and people, system reliability, and environmental compatibility."
        },
        {
            question: "ISO 16001:2017 is an updated version of which standard?",
            answer: "Present ISO 16001:2017 is an updated version of the previous ISO 16001:2008 standard."
        },
        {
            question: "What are test methods relating to safety under ISO 16001 Certification?",
            answer: "The ISO/TC 127/SC 1 is the recognised test method for safety and machine performance under the ISO 16001 Certification."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 16001"
                heroTitleSuffix="Certification"
                heroSubtitle="Earth-Moving Machine Safety"
                heroDescription="Ensure rigorous operational safety navigating Earth-Moving Machinery with robust compliance protocols effectively assessing Object Detection Systems safely."
                whatsIncludedList={[
                    "Detection Zone Testing",
                    "Safety Optimizations",
                    "Visibility Auditing",
                    "Continuous Compliance Check"
                ]}
                stats={[
                    { count: "Safe ODS", label: "Implementations", icon: <Globe size={20} /> },
                    { count: "100%", label: "Approval Rates", icon: <ShieldCheck size={20} /> },
                    { count: "Zero Error", label: "Compliance", icon: <CheckCircle2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO16001Overview />}
                advantages={<ISO16001Requirements />}
                eligibility={<ISO16001Benefits />}
                documents={<ISO16001DocumentsSection />}
                process={<ISO16001ProcessSection />}
                features={<ISO16001FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 16001 Certification"
                subtitle="Frequently asked questions concerning Earth-Moving safety operations and certification protocols."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO16001Registration;
