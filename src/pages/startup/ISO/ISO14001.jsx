import React from "react";
import { HardHat, ShieldCheck, CheckCircle2, Leaf, Recycle } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO14001Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Environmental Safety
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ISO 14001 EMS – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Historically, environment protection in the corporate sector primarily focused on systematic monitoring of on-site impacts regarding strict statutory compliance. Environmental Management Systems (EMS) expands this by actively making all employees aware of core environmental protection.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The ISO 14001 EMS is an internationally recognised standard providing a strict tested framework. It supports the corporate sector in transitioning towards absolute environmental sustainability, remaining applicable to any type of organization across all industries.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Objective of Environmental Management Systems
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The objective of ISO 14001 is to provide organizations with a concrete framework to protect the environment alongside fulfilling socio-economic obligations. It formally controls the procedure of designing, manufacturing, distribution, and consumption using a sustainable life cycle perspective.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1402804364005-ee22874100dc?auto=format&fit=crop&q=80"
                            alt="ISO 14001 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO14001Advantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Systematic Security
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of ISO 14001 EMS
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Obtaining the ISO 14001 EMS Certificates natively establishes strong environmental credentials while significantly cutting downstream operational costs through efficient process streamlining.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"
                            alt="ISO 14001 Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Circular Eco-Driven Approach", desc: "Actively implements the 'Reduce, Reuse, and Recycle' methodology deep within core business activities." },
                        { title: "Statutory Compliance", desc: "Strictly aligns operational footprints with external environmental laws, proactively meeting formal legal compliance." },
                        { title: "Corporate Social Responsibility", desc: "Solidifies organizational goodwill, providing transparent public proof of fulfillment toward Corporate Social Responsibility (CSR)." },
                        { title: "Reduced Wastes & Risks", desc: "Dramatically curtails physical waste generation, effectively preventing environmental liabilities and localized pollution." },
                        { title: "Boosts Employee Consciousness", desc: "Enhances direct environmental awareness at the workplace, driving sustainable habits throughout the employee base." },
                        { title: "Increased Profitability", desc: "Reduces resource waste, thereby substantially lowering operational energy costs and increasing market sustainability." }
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

const ISO14001Eligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Criteria & Prerequisites for ISO 14001
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Applying the ISO 14001 standard requires the corporate entity to strictly develop an internal structure capable of managing sustainable improvement cycles smoothly:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Baseline Criteria
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Commitment explicitly driving strict Environmental Sustainability policies.</li>
                            <li>Formalized Planning stages indicating goal settings and systemic targets.</li>
                            <li>Implementation tactics including staff training, regulatory paperwork, and communications.</li>
                            <li>Evaluation frameworks effectively monitoring programs and structural EMS reviews.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Assessment Prerequisites
                        </h3>
                        <ul className="grid grid-cols-1 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Mapping comprehensive Legislative and Regulatory operational requirements safely.</li>
                            <li>Precise identification of all significant localized Environmental Aspects.</li>
                            <li>Detailed examination and rigorous tracking of existing environmental procedures.</li>
                            <li>Close structural assessments of all previous historical environmental incidents.</li>
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
                    Documents Required for ISO 14001 EMS
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Implementing the standard effectively dictates securing comprehensive mandatory compliance schedules correctly addressing core policy metrics safely:
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Mandatory Structural Frameworks</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>Scope parameters of the deployed EMS.</li>
                            <li>Environmental Policy declaration and related Objectives constraints.</li>
                            <li>Risks and Opportunities to be specifically addressed via targeted processes.</li>
                            <li>Emergency Preparedness protocols scaling physical Response operations.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Assessment & Operational Data</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>Criteria effectively outlining the Evaluation of Significant Environmental Aspects.</li>
                            <li>Documented Evidence regarding Communication logs and Compliance Evaluation Results.</li>
                            <li>Outputs mapping continuous Monitoring, internal audits, and Management Reviews.</li>
                            <li>Records of comprehensive Training schemas, Experience, and Employee capabilities.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO14001ProcessSection = () => {
    const steps = [
        {
            title: "Internal EMS Audit",
            desc: "The applicant organization initially checks internal EMS processes to firmly ensure compliance metrics actively understand physical structural weaknesses."
        },
        {
            title: "Management Review",
            desc: "A formal evaluation conducted by the management determining relevant system capabilities to correctly make appropriate operational loop decisions."
        },
        {
            title: "Develop Corrective Actions",
            desc: "Applicants create specialized Project Plans accurately determining necessary task resources scaling the updated EMS timeline appropriately."
        },
        {
            title: "Design & Standardize Operations",
            desc: "Environmental Manuals and standard Procedures are formally built and redesigned to seamlessly align conforming to core ISO requirement expectations."
        },
        {
            title: "Third-Party Registration",
            desc: "An isolated Registrar is selected to assess conformity and execute ongoing surveillance audits, formally granting the 3-year certification validity upon success."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure for Obtaining ISO 14001
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        A defined execution scope assures an absolute, risk-free assessment tracking deployment efficiency natively:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                            alt="ISO 14001 Process"
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
                                Start Your Certification Audit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO14001FeaturesSection = () => {
    const features = [
        {
            title: "Extensive Lifecycle Perspective",
            desc: "Instead of merely checking immediate disposal parameters, ISO 14001 covers the entire product lifecycle from manufacturing routing downstream to physical disposal."
        },
        {
            title: "Integrated Leadership Alignment",
            desc: "The structurally revised 2015 edition heavily shifts the core EMS mandate directly incorporating leadership into formal system operational planning."
        },
        {
            title: "Versatile Implementation Scales",
            desc: "From standalone isolated offices targeting pure paper waste up to massive manufacturing facilities containing heavy hazards, the logic accurately scales perfectly."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Key Structural Benefits Validating EMS
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        ISO 14001 inherently solidifies sustainable environmental practices ensuring continuous functional growth natively securely:
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

const ISO14001Registration = () => {
    const faqs = [
        {
            question: "What exactly is an EMS?",
            answer: "An Environmental Management System (EMS) is a strict set of procedures formally prepared by organizations targeting internal sustainability goals explicitly meeting tight external regulatory standards."
        },
        {
            question: "Who should precisely get ISO 14001 EMS Certification?",
            answer: "Organizations of all structural sizes who decisively wish to genuinely commit to public sustainability or reduce their raw material costs broadly by using cleaner, more efficient core resources."
        },
        {
            question: "Who are classified as the 'interested parties'?",
            answer: "Interested parties natively encompass consumers, internal investors, public municipalities, non-governmental regulatory organizations, and localized employees monitoring safe standard execution requirements safely."
        },
        {
            question: "What is the certified validity tracking timeline?",
            answer: "The rigorous ISO 14001 EMS certification dictates a maximum operational validation explicitly lasting for exactly 3 years formally recorded from the initial date of successful issuance."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 14001 EMS"
                heroTitleSuffix="Certification"
                heroSubtitle="Environmental Management System"
                heroDescription="Ensure tight sustainable corporate operations actively. Execute ISO 14001 Environmental Management Systems (EMS) scaling your ecological tracking compliances securely eliminating external industrial hazards effectively natively."
                whatsIncludedList={[
                    "EMS GAP Check",
                    "Safety Metric Evaluation",
                    "Lifecycle Mapping",
                    "Hazard Reduction Procedures"
                ]}
                stats={[
                    { count: "Compliance", label: "Assured", icon: <CheckCircle2 size={20} /> },
                    { count: "Eco-Friendly", label: "Footprint", icon: <Leaf size={20} /> },
                    { count: "Sustainable", label: "Limits", icon: <Recycle size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO14001Overview />}
                advantages={<ISO14001Advantages />}
                eligibility={<ISO14001Eligibility />}
                documents={<ISODocumentsSection />}
                process={<ISO14001ProcessSection />}
                features={<ISO14001FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 14001 EMS"
                subtitle="Understanding active environmental corporate limitations safely."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO14001Registration;
