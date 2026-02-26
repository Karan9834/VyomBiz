import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationAustralia Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-australia
 */

const CompanyRegistrationAustraliaOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Global Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in Australia – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Australia offers a long-standing stable economy and a transparent regulatory framework, making it an ideal destination for business expansion.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Foreign entrepreneurs can expand by registering a new company or establishing a branch office, provided they meet specific conditions like appointing a resident director.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why Australia?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It serves as a strategic gateway to the Asia-Pacific region with access to a highly skilled workforce and strong government support.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The Australian Securities and Investments Commission (ASIC) oversees company registration, ensuring a smooth and efficient process.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1624138784180-08fa6dd24b30?auto=format&fit=crop&q=80"
                            alt="Australia Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationAustraliaAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Company Formation
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why Australia is a top choice for global business.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80"
                            alt="Australia Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Stable Economy", desc: "Consistent economic growth and a robust banking sector provide a strong foundation." },
                        { title: "Strategic Location", desc: "Gateway to Asia-Pacific markets with lower tariffs through Free Trade Agreements." },
                        { title: "Ease of Doing Business", desc: "Consistently ranks high globally for its straightforward regulatory framework." },
                        { title: "Government Support", desc: "Incentives like R&D tax offsets and grants for innovation and growth." },
                        { title: "Skilled Talent", desc: "Access to a highly educated workforce and specialized talent from overseas." },
                        { title: "Quality of Life", desc: "High standard of living and work-life balance attract top talent and businesses." }
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

const AustraliaIncorporationEligibility = () => {
    const list = [
        { title: "Shareholder", desc: "Minimum of one shareholder required (can be foreign)." },
        { title: "Resident Director", desc: "Must appoint at least one director who resides in Australia." },
        { title: "Local Address", desc: "Must have a registered physical office address in Australia." },
        { title: "Local Secretary", desc: "Public companies must appoint a company secretary residing in Australia." },
        { title: "Unique Name", desc: "Business name must be unique and not resemble existing registered names." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Australia Company Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key criteria for incorporating in Australia.
                </p>
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <p key={i}>
                            <span className="font-semibold text-[#072b47]">{item.title} – </span>
                            {item.desc}
                        </p>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>
            </div>
        </section>
    );
};

const AustraliaIncorporationDocumentsSection = () => {
    const list = [
        "Completed Application Form",
        "Passport Copies (Directors & Shareholders)",
        "Proof of Registered Address",
        "Shareholder Details",
        "Director Identification Number (DIN)",
        "Consent to Act as Director/Shareholder",
        "Constitution (if applicable)"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Australia Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents for Australian Company Registration.
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

const AustraliaIncorporationProcessSection = () => {
    const steps = [
        { title: "Pre-Registration", desc: "Prepare a business plan and appoint a resident director." },
        { title: "Secure Name", desc: "Check availability and reserve your unique business name with ASIC." },
        { title: "Obtain Identifiers", desc: "Apply for Australian Company Number (ACN) and Australian Business Number (ABN)." },
        { title: "Tax Registration", desc: "Register for GST (if turnover >$75k), PAYG, and TFN." },
        { title: "Submit Application", desc: "File Form 201 with ASIC including all required documents and fees." },
        { title: "Incorporation", desc: "Receive Certificate of Incorporation and ACN via email." },
        { title: "Post-Compliance", desc: "Maintain records, file annual reviews, and meet financial reporting obligations." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in Australia?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to setting up your business.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1624138784180-08fa6dd24b30?auto=format&fit=crop&q=80" alt="Australia Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                        <div className="border-t border-slate-200" />
                        <div className="mt-12 text-center">
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Registration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AustraliaIncorporationFeaturesSection = () => {
    const features = [
        { title: "10+ Years Experience", desc: "Decade of expertise in assisting foreign and local entrepreneurs." },
        { title: "Expert Consulting", desc: "Seamless guidance on structure, compliance, and legal requirements." },
        { title: "Documentation Support", desc: "Reliable assistance in preparing and filing all necessary documents." },
        { title: "Post-Reg Compliance", desc: "Ongoing support for tax filing, annual reviews, and corporate obligations." },
        { title: "Expedited Process", desc: "Timely completion of applications for fast and seamless registration." },
        { title: "Regulatory Ties", desc: "Close coordination with ASIC for a streamlined experience." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner for Australian market entry.
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
                    <div className="border-t border-slate-300" />
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationAustralia = () => {

    const faqs = [
        {
            question: "Do I need a resident director for an Australian company?",
            answer: "Yes, you must appoint at least one director who currently resides in Australia."
        },
        {
            question: "What are the key requirements for registration?",
            answer: "Key requirements include at least one shareholder, one resident director, a local registered office address, and a unique business name."
        },
        {
            question: "What taxes do I need to register for?",
            answer: "You typically need to register for Goods and Services Tax (GST) if your turnover exceeds AUD 75,000, along with obtaining a Tax File Number (TFN) and registering for Pay As You Go (PAYG) withholding if you have employees."
        },
        {
            question: "Can a foreign company operate in Australia without a full subsidiary?",
            answer: "Yes, a foreign company can establish an Australian Branch Office. It is not a separate legal entity, and the parent company remains liable for its debts."
        },
        {
            question: "How long does the registration process take?",
            answer: "Once all documents are prepared and the application is submitted to ASIC, the certificate of incorporation is often issued quickly, sometimes within minutes to a few days."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Australia"
                heroSubtitle="Fast Approval with VyomBiz®"
                heroDescription="Start your business in Australia's stable and growing economy. We handle ABN registration, compliance, and setup so you can focus on growth."
                whatsIncludedList={[
                    "ABN Registration Support",
                    "Virtual Office Address (3 Months)",
                    "GST Registration Assistance",
                    "Director Identification Number (DIN)",
                    "Nominee Director Services"
                ]}
                stats={[
                    { count: "500+", label: "Registered", icon: <Users size={20} /> },
                    { count: "10+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationAustraliaOverview />}
                advantages={<CompanyRegistrationAustraliaAdvantages />}
                eligibility={<AustraliaIncorporationEligibility />}
                documents={<AustraliaIncorporationDocumentsSection />}
                process={<AustraliaIncorporationProcessSection />}
                features={<AustraliaIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Australian Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationAustralia;
