import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Clock,
    AlertCircle
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/FSSAI & Eating License/fssai-license-renewal/benefits.png";
import overview from "../../../assets/FSSAI & Eating License/fssai-license-renewal/overview.png";
import process from "../../../assets/FSSAI & Eating License/fssai-license-renewal/process.jpg";

const FssaiRenewalOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Time-Sensitive
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is <span className="text-yellow-400">FSSAI License Renewal?</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            FSSAI License Renewal is the process of extending the validity of your existing Food Safety and Standards Authority of India (FSSAI) registration or license. Every food business operator (FBO) must renew their license before it expires to continue operating legally in India.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The renewal application should ideally be submitted at least 30 days before the expiry date to avoid penalties or cancellation. Businesses that fail to renew their license on time may face fines, suspension of operations, or the need to apply for a fresh license.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited helps food businesses renew their FSSAI licenses efficiently while ensuring complete compliance with regulatory requirements.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="FSSAI Renewal Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiRenewalAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why FSSAI License Renewal is Important
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Renewing your FSSAI license is not just a legal requirement — it also builds trust and credibility in the food industry. Key benefits include:
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="FSSAI Renewal Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Continuity", desc: "Ensures your food business operates legally without interruption." },
                        { title: "Avoid Penalties", desc: "Late renewal can lead to daily penalties and regulatory complications." },
                        { title: "Consumer Trust", desc: "An active FSSAI license increases customer confidence in your food products." },
                        { title: "Smooth Business Operations", desc: "Prevents disruption in production, distribution, or food sales." },
                        { title: "Regulatory Compliance", desc: "Keeps your business aligned with the latest food safety regulations." }
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

const FssaiRenewalEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Needs to Renew an FSSAI License?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    All Food Business Operators (FBOs) who already have an FSSAI registration or license must renew it before expiry. This includes businesses such as:
                </p>
                <div className="mb-10">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-6">
                        <li>Restaurants and cafes</li>
                        <li>Food manufacturers and processors</li>
                        <li>Cloud kitchens</li>
                        <li>Food delivery businesses</li>
                        <li>Grocery stores and supermarkets</li>
                        <li>Importers and exporters of food products</li>
                        <li>Food traders and distributors</li>
                        <li>Catering services</li>
                        <li>Bakeries and confectionery businesses</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        Vyombiz managed by Clink Consultancy Services Private Limited assists businesses across all categories in renewing their licenses without delays.
                    </p>
                </div>

                <h2 className="text-2xl lg:text-3xl font-semibold text-[#072b47] mb-6 mt-12">
                    Types of FSSAI Licenses That Require Renewal
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    Depending on the scale of the business, different types of licenses require renewal.
                </p>
                <div className="mb-10">
                    <ul className="space-y-4 text-[17px] text-slate-600 leading-relaxed list-disc pl-6">
                        <li>
                            <span className="font-semibold text-[#072b47]">Basic FSSAI Registration - </span>
                            For small food businesses with annual turnover below ₹12 lakh.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">State FSSAI License - </span>
                            For medium-sized food businesses with turnover between ₹12 lakh and ₹20 crore.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Central FSSAI License - </span>
                            For large-scale businesses with turnover above ₹20 crore, import/export operations, or operations across multiple states.
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl lg:text-3xl font-semibold text-[#072b47] mb-6 mt-12">
                    When Should You Renew Your FSSAI License?
                </h2>
                <div className="mb-10">
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        The renewal application must be filed 30 days before the license expires.
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-6">
                        <li><span className="font-semibold text-[#072b47]">30 days before expiry:</span> Ideal time to apply for renewal</li>
                        <li><span className="font-semibold text-[#072b47]">After expiry:</span> Late fee of ₹100 per day may apply</li>
                        <li><span className="font-semibold text-[#072b47]">Extended delay:</span> License may get cancelled</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        To avoid last-minute complications, Vyombiz managed by Clink Consultancy Services Private Limited helps businesses track renewal timelines and complete the process well in advance.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FssaiRenewalDocuments = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for FSSAI License Renewal
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The required documents may vary depending on the type of license, but typically include:
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed grid sm:grid-cols-2 gap-x-6">
                        <li>Existing FSSAI License Copy</li>
                        <li>Identity proof of the business owner</li>
                        <li>Address proof of the business premises</li>
                        <li>Food safety management plan</li>
                        <li>List of food products being handled</li>
                        <li>Partnership deed / certificate of incorporation (if applicable)</li>
                        <li>Latest passport-size photographs</li>
                        <li>Business registration documents</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        Our experts ensure proper documentation to avoid delays or rejection.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FssaiRenewalProcess = () => {
    const steps = [
        { step: "01", title: "Application Preparation", desc: "Review the existing license details and gather the required documents." },
        { step: "02", title: "Online Renewal Application", desc: "Submit the renewal request through the official FSSAI portal." },
        { step: "03", title: "Document Verification", desc: "Authorities verify the submitted information and documents." },
        { step: "04", title: "Inspection (If Required)", desc: "In certain cases, food safety officers may conduct an inspection." },
        { step: "05", title: "Renewal Approval", desc: "Once approved, the renewed FSSAI license is issued with updated validity." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        FSSAI License Renewal Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Renewing an FSSAI license involves multiple steps that must be completed accurately. Vyombiz managed by Clink Consultancy Services Private Limited manages the entire process from documentation to final approval.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="The Online Renewal Path"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">{index + 1}.</div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">{step.title}</h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiRenewalFeatures = () => {
    const features = [
        { title: "Expert Compliance Support", desc: "Guidance from professionals experienced in FSSAI regulations." },
        { title: "Fast Processing", desc: "Efficient handling of documentation and application submission." },
        { title: "Complete End-to-End Assistance", desc: "From application preparation to license renewal approval." },
        { title: "Error-Free Documentation", desc: "Reduces the risk of rejection or delays." },
        { title: "Dedicated Business Support", desc: "Personalized assistance throughout the renewal process." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for FSSAI License Renewal?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Handling regulatory compliance can be complicated for food businesses. Professional assistance ensures accuracy, speed, and peace of mind. Vyombiz managed by Clink Consultancy Services Private Limited offers expert setup and support.
                    </p>
                </div>
                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{feature.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const FssaiRenewalCompliance = () => {
    const compliance = [
        "Failing to renew the FSSAI license within the required timeframe can result in penalties.",
        "Late fee of ₹100 per day after the expiry date",
        "Suspension of business operations",
        "Cancellation of the license",
        "Requirement to apply for a new license from scratch",
        "An FSSAI license can be issued for 1 to 5 years, depending on the application submitted by the business. Longer validity can help businesses reduce the frequency of renewals and administrative efforts."
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Validity and Penalty for Late Renewal
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Timely renewal helps businesses avoid unnecessary regulatory issues. Possible consequences include:
                    </p>
                </div>
                <div>
                    {compliance.map((item, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{item}</h3>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const FssaiRenewal = () => {
    const faqs = [
        {
            question: "When should I apply for FSSAI license renewal?",
            answer: "You should apply at least 30 days before the license expiry date to avoid penalties."
        },
        {
            question: "What happens if my FSSAI license expires?",
            answer: "You may have to pay a late penalty of ₹100 per day, and in some cases, you may need to apply for a new license."
        },
        {
            question: "Can I renew my FSSAI license after expiry?",
            answer: "Yes, but late fees will apply. Significant delays may lead to cancellation of the license."
        },
        {
            question: "How long does the renewal process take?",
            answer: "Typically, the renewal process can take 7–30 working days, depending on document verification and inspection requirements."
        },
        {
            question: "Do I need professional assistance for renewal?",
            answer: "While renewal can be done independently, expert support ensures proper documentation and faster approval. Vyombiz managed by Clink Consultancy Services Private Limited helps businesses complete the process smoothly and without complications."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FSSAI License"
                heroTitleSuffix="Renewal"
                heroSubtitle="Keep Your Food Business Legally Compliant — Renew Your FSSAI License On Time"
                heroDescription="Running a food business without renewing your FSSAI license can lead to penalties, business disruptions, and loss of credibility. Ensure uninterrupted operations by renewing your license before it expires. With expert assistance from Vyombiz, the renewal process becomes simple, fast, and stress-free."
                whatsIncludedList={[
                    "Renewal Eligibility Check",
                    "Document Verification & Preparation",
                    "FoSCoS Portal Online Filing",
                    "Penalty & Hassle-Free Process",
                    "Timely Renewal Reminders",
                    "Expert Legal Consultation"
                ]}
                stats={[
                    { count: "25K+", label: "Renewals Done", icon: <Clock size={20} /> },
                    { count: "₹100/day", label: "Late Fine", icon: <AlertCircle size={20} /> },
                    { count: "100%", label: "Compliance", icon: <ShieldCheck size={20} /> }
                ]}
            />
            <TalkExpert />

            <DetailsLayout
                overview={<FssaiRenewalOverview />}
                advantages={<FssaiRenewalAdvantages />}
                eligibility={<FssaiRenewalEligibility />}
                documents={<FssaiRenewalDocuments />}
                process={<FssaiRenewalProcess />}
                features={<FssaiRenewalFeatures />}
                postCompliance={<FssaiRenewalCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiRenewal;

