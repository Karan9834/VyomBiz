import React from "react";
import { HardHat, ShieldCheck, CheckCircle2, DraftingCompass, ServerCog } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISO2768Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Mechanical Equipment Precision
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ISO 2768-1 Standard – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The ISO 2768-1 standard heavily measures the exact level of discrepancy that shall be tolerated in mechanical equipment. Developed safely by the technical committee of the ISO in 1989, it meticulously delineates accepted angular and linear dimensional limits securely bridging manufacturing tolerances.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Accuracy is highly desirable while physically producing mechanical equipment; however, human error intrinsically mandates structural discrepancy mapping. ISO 2768-1 accurately simplifies these rigid tolerances, giving manufacturers an acceptable physical buffer mitigating excessive part failures reliably.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Applicability
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Businesses dealing directly with the heavy production of mechanical components can secure the ISO 2768-1 designation seamlessly proving their dimensional engineering falls within strict global compliance thresholds safely protecting downstream functionality.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                            alt="ISO 2768-1 Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO2768Advantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Operational Excellence
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of ISO 2768-1 Compliance
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The strict integration of standardized mechanical tolerances immediately establishes unquestionable engineering integrity bridging domestic and international manufacturing chains.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
                            alt="ISO 2768-1 Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Improved Efficiency", desc: "Actively guarantees smoother assemblies heavily reducing scrap materials and minimizing downtime spent repairing incompatible equipment parts securely." },
                        { title: "Increased Marketability", desc: "Proves exceptional product consistency strictly giving your mechanical supply a massive edge over uncertified unstandardized machinery rivals." },
                        { title: "Global Recognition", desc: "Instantly elevates consumer and vendor trust globally as compliance meets international industrial hardware safety and reliability metrics natively." },
                        { title: "Enhanced Customer Satisfaction", desc: "Diminishes product failures drastically driving consistent functional performance generating widespread end-user satisfaction dependably." },
                        { title: "Government Tender Advantages", desc: "Heavily aids organizations correctly receiving massive manufacturing tenders directly sourced by the Government where standard compliance is mandated." },
                        { title: "Ensures Lofty Standards", desc: "Provides strict baseline rules actively aligning facility engineering methods minimizing dangerous dimensional drifting during heavy manufacturing sprints." }
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

const ISO2768Benefits = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Key Advantages Received
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Fulfilling compliance measures intrinsically establishes several operational and structural benefits:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Business Marketability
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Global Recognition:</strong> Instantly elevates consumer and vendor trust globally as compliance meets international hardware safety limits natively.</li>
                            <li><strong>Increased Marketability:</strong> Gives your mechanical supply a massive edge over uncertified machinery rivals globally.</li>
                            <li><strong>Tendering Opportunities:</strong> Heavily aids organizations correctly receiving massive manufacturing tenders sourced by the Government.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Excellence
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li><strong>Improved Efficiency:</strong> Actively guarantees smoother assemblies reducing scrap materials and downtime effectively.</li>
                            <li><strong>Heightened Standards:</strong> Provides strict baseline rules actively aligning facility engineering methods minimizing dangerous dimensional drifting.</li>
                            <li><strong>Customer Satisfaction:</strong> Diminishes product failures drastically driving consistent functional performance dependably.</li>
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
                    Documentation Required
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Obtaining the ISO 2768-1 certification inherently relies upon swift verification of core business and physical applicant proofs outlining exact organizational identities seamlessly:
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Identity & Verification</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>The registered copy of the Company or Principal PAN Card.</li>
                            <li>Two recent authorized Passport Sized photographs tracking ownership explicitly.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Address & Trade Proofs</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>A rigorous copy of the Voter Identity Card securing explicit address verification proofs.</li>
                            <li>Two concrete copies of official sales or purchase bills reflecting active manufacturing trades efficiently.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO2768ProcessSection = () => {
    const steps = [
        {
            title: "Filing of Application",
            desc: "The applicant formally locks the appropriate ISO agency contract establishing rights, mechanical scopes, and rigid audit liabilities correctly covering angular variables securely."
        },
        {
            title: "Initial Auditor Review",
            desc: "The assigned ISO auditor actively conducts deep reviews probing facility equipment and blueprints mapping systemic deficiencies deviating from stringent standard limits natively."
        },
        {
            title: "Action Plan for Correction",
            desc: "The manufacturer actively deploys corrective adjustments comprehensively fixing measurement lacunas strictly pointed out directly by the inspector before critical physical audits proceed."
        },
        {
            title: "On-site Audit",
            desc: "A final strict on-site inspection is conducted thoroughly classifying the factory machinery explicitly as major or minor compliant. Necessary secondary rectifications must be achieved to pass."
        },
        {
            title: "Grant of Certificate",
            desc: "Following comprehensive dimensional compliance spanning angular bounds natively, the strict Registrar reviews the final inspector report deliberately granting the physical certification effectively."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure to Obtain ISO 2768-1
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Typically executed strictly spanning 6-15 months natively depending exclusively upon factory complexity scaling efficiently:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
                            alt="ISO 2768 Process"
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
                                Request Facility Audit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISO2768FeaturesSection = () => {
    const features = [
        {
            title: "Expert Measurement Guidance",
            desc: "Gain explicit deep assistance charting correct manufacturing discrepancies intelligently safely scaling rigid bounds strictly."
        },
        {
            title: "Quick Query Resolution",
            desc: "Directly resolve intricate dimensional or angular compliance hurdles swiftly connecting with dedicated expert hardware auditors natively."
        },
        {
            title: "End-to-End Application Planning",
            desc: "Formally execute and organize complex applications fulfilling deep exact measurement eligibility criteria consistently."
        },
        {
            title: "Regulatory Management",
            desc: "Secure unhindered expert compliance frameworks smoothly completing procedural actions fulfilling rigid legal demands thoroughly."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        VyomBiz Compliance Support Hub
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        VyomBiz significantly aids seamless ISO compliance intelligently securely mapping specific engineering directives thoroughly.
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

const ISO2768Registration = () => {
    const faqs = [
        {
            question: "What exactly is the ISO 2768-1 standard?",
            answer: "It measures and securely delineates the explicit strict level of discrepancy tolerated in producing rigid mechanical equipment effectively scaling dimensional and angular production boundaries securely."
        },
        {
            question: "How long does obtaining the strict ISO 2768-1 certification actively take?",
            answer: "Due to heavy on-site audits testing mechanical bounds securely, the intricate procedure routinely takes explicitly anywhere between 6 to 15 long months completely mapping modifications accurately."
        },
        {
            question: "Can an organization print 'ISO Certification' physically on standard mechanical products?",
            answer: "No, ISO formally mandates the bare phrase must never be affixed singularly. Instead, organizations must definitively use complete active identification explicitly mapping 'ISO 2768-1 certified' text accurately."
        },
        {
            question: "Does gaining compliance strongly help win major State Government projects?",
            answer: "Absolutely. Ensuring extreme dimensional accuracy drastically aids organizations successfully locking heavily lucrative Government manufacturing equipment tenders effectively requiring strict compliance natively."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO 2768-1"
                heroTitleSuffix="Certification"
                heroSubtitle="Mechanical Standardization & Tolerance Limits"
                heroDescription="Ensure ultimate precision seamlessly producing rigid mechanical equipment accurately. ISO 2768-1 structurally minimizes assembly errors guaranteeing strict globally recognized linear and angular dimensions explicitly."
                whatsIncludedList={[
                    "Dimensional Auditing",
                    "Angular Error Review",
                    "Equipment Correction Plan",
                    "Major/Minor Compliance Matrix"
                ]}
                stats={[
                    { count: "Tolerance", label: "Assured", icon: <CheckCircle2 size={20} /> },
                    { count: "Equipment", label: "Precision", icon: <ServerCog size={20} /> },
                    { count: "Engineering", label: "Validated", icon: <DraftingCompass size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISO2768Overview />}
                advantages={<ISO2768Advantages />}
                eligibility={<ISO2768Benefits />}
                documents={<ISODocumentsSection />}
                process={<ISO2768ProcessSection />}
                features={<ISO2768FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO 2768-1 Certification"
                subtitle="Understanding explicit operational compliance tolerances strictly."
                faqs={faqs}
            />
        </div>
    );
};

export default ISO2768Registration;
