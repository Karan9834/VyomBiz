import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationGermany Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-Germany
 */

const CompanyRegistrationGermanyOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            European Hub
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in Germany – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Germany is a global powerhouse of technology and innovation, offering access to 454 million customers in the EU.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            As the world's 2nd largest exporter, it provides a stable economy, robust infrastructure, and a highly skilled workforce.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why Germany?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Germany offers a strategic location in the heart of Europe with a business-friendly environment supported by government incentives.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With over 90 double taxation treaties, it is an attractive destination for international investors seeking to expand their global footprint.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80"
                            alt="Germany Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationGermanyAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why businesses choose Germany for expansion.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80"
                            alt="Germany Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Strong Economy", desc: "Access to one of the most stable and largest economies in Europe." },
                        { title: "Strategic Location", desc: "Central location providing easy access to all European markets." },
                        { title: "Skilled Workforce", desc: "Access to a highly educated and technically skilled labor pool." },
                        { title: "Infrastructure", desc: "World-class logistics, transportation, and communication networks." },
                        { title: "Tax Advantages", desc: "Benefit from extensive double taxation treaties to minimize tax liabilities." },
                        { title: "Legal Protection", desc: "Strong legal framework protecting intellectual property and innovation." }
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

const GermanyIncorporationEligibility = () => {
    const list = [
        { title: "Share Capital", desc: "€25,000 for GmbH, €50,000 for AG. Lower for UG." },
        { title: "Shareholders", desc: "Minimum 1 shareholder (individual or corporate entity)." },
        { title: "Directors", desc: "At least 1 director required. Can be of any nationality." },
        { title: "Registered Address", desc: "Must have a local registered office address in Germany." },
        { title: "Bank Account", desc: "Must open a corporate bank account to deposit share capital." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Germany Company Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key criteria for incorporating in Germany.
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
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>
            </div>
        </section>
    );
};

const GermanyIncorporationDocumentsSection = () => {
    const list = [
        "Memorandum & Articles of Association (MOA & AOA)",
        "Passports/IDs of Directors & Shareholders",
        "Proof of Registered Address",
        "Bank Certificate of Capital Deposit",
        "Management Board Structure Details",
        "Specimen Signatures",
        "Power of Attorney (if applicable)"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Germany Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents for Germany Company Incorporation.
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

const GermanyIncorporationProcessSection = () => {
    const steps = [
        { title: "Choose Structure", desc: "Select the legal form (e.g., GmbH, UG) suitable for your business." },
        { title: "Name Reservation", desc: "Check availability and reserve your business name." },
        { title: "Business Plan", desc: "Draft a comprehensive business plan including financial projections." },
        { title: "Notarization", desc: "Notarize the Articles of Association and other documents." },
        { title: "Bank Account", desc: "Open a bank account and deposit the required share capital." },
        { title: "Registration", desc: "Apply to the Commercial Register (Handelsregister)." },
        { title: "Tax & VAT", desc: "Register for taxes and VAT with local authorities." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in Germany?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to setting up your business.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80" alt="Germany Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Registration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const GermanyIncorporationFeaturesSection = () => {
    const features = [
        { title: "99% Success Rate", desc: "Proven track record with over 15,000 companies registered." },
        { title: "End-to-End Support", desc: "From name check to tax registration and compliance." },
        { title: "Virtual Offices", desc: "Addresses in Berlin, Frankfurt, Hamburg, and Munich." },
        { title: "Expert Team", desc: "12+ years of experience in cross-border compliance." },
        { title: "Customized Packages", desc: "Tailored solutions to meet your specific business needs." },
        { title: "24/7 Support", desc: "Round-the-clock assistance for all your queries." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner for German market entry.
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

const CompanyRegistrationGermany = () => {

    const faqs = [
        {
            question: "What is the minimum share capital for a GmbH in Germany?",
            answer: "The minimum share capital required for a Limited Liability Company (GmbH) in Germany is €25,000."
        },
        {
            question: "Can a foreigner be a director of a German company?",
            answer: "Yes, there are no restrictions on the nationality of directors. A foreigner can be appointed as a director."
        },
        {
            question: "What is a UG (Unternehmergesellschaft) company?",
            answer: "A UG, often called a 'Mini-GmbH', is an entrepreneurial company suitable for startups with lower capital requirements (starting from €1)."
        },
        {
            question: "Is a supervisory board mandatory?",
            answer: "A supervisory board is generally mandatory for Joint Stock Companies (AG) and larger GmbHs with over 500 employees."
        },
        {
            question: "How long does it take to register a company in Germany?",
            answer: "The process typically takes a few weeks, depending on the complexity and speed of the Commercial Register (Handelsregister)."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Germany"
                heroSubtitle="Fast Business Setup in Europe's Powerhouse"
                heroDescription="Establish your presence in Germany, the largest economy in Europe. We provide expert guidance for a compliant and hassle-free registration process."
                whatsIncludedList={[
                    "Drafting of MOA & AOA",
                    "Virtual Registered Address",
                    "Share Capital Assistance",
                    "Tax Advisory Services",
                    "1:1 Expert Consultation"
                ]}
                stats={[
                    { count: "15,000+", label: "Companies Registered", icon: <Users size={20} /> },
                    { count: "12+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationGermanyOverview />}
                advantages={<CompanyRegistrationGermanyAdvantages />}
                eligibility={<GermanyIncorporationEligibility />}
                documents={<GermanyIncorporationDocumentsSection />}
                process={<GermanyIncorporationProcessSection />}
                features={<GermanyIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in Germany"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationGermany;
