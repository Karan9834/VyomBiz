import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationRussia Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-russia
 */

const CompanyRegistrationRussiaOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Strategic Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in Russia – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Russia, the 11th largest economy, offers a strategic location bridging Asia and Europe, making it a key logistical hub.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Foreign investors can access a large domestic market and skilled workforce. The government supports growth through tax incentives, especially in Special Economic Zones.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why Russia?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Membership in the Eurasian Economic Union (EAEU) grants access to a market of over 183 million consumers.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With a favorable tax system and diverse business structures like OOO and AO, Russia provides a robust environment for international business.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1513326738677-0961ed2f3a05?auto=format&fit=crop&q=80"
                            alt="Russia Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationRussiaAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Formation
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why investors choose Russia for business expansion.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1513326738677-0961ed2f3a05?auto=format&fit=crop&q=80"
                            alt="Russia Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Appealing Tax System", desc: "Favorable tax environment with concessions in Special Economic Zones." },
                        { title: "Skilled Workforce", desc: "Access to experts in technology, engineering, and science." },
                        { title: "Large Domestic Market", desc: "Substantial consumer base with increasing purchasing power." },
                        { title: "Strategic Location", desc: "Critical transit hub between Europe and Asia." },
                        { title: "Government Incentives", desc: "Subsidies and tax breaks targeted at foreign investors." },
                        { title: "EAEU Access", desc: "Integrated market access to Eurasian Economic Union member countries." }
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

const RussiaIncorporationEligibility = () => {
    const list = [
        { title: "Shareholders", desc: "Minimum 1 and maximum 50 shareholders allowed." },
        { title: "Share Capital", desc: "Minimum 10,000 RUB, with 50% paid up at incorporation." },
        { title: "Local Address", desc: "Must secure a locally registered office address." },
        { title: "Directors", desc: "Minimum 1 director required. No strict requirement for a local nominee." },
        { title: "Legal Representative", desc: "Mandatory appointment of a legal representative." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Company Registration in Russia?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key criteria for starting a business in Russia.
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

const RussiaIncorporationDocumentsSection = () => {
    const list = [
        "Proposed Company Name (English & Russian)",
        "Notarized Foundation Documents",
        "Memorandum of Association (MOA)",
        "Articles of Association (AOA)",
        "Passport Copies of Directors & Shareholders",
        "Lease/Rental Documents for Registered Address",
        "Bank Statement (Share Capital Deposit)"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Russia Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents for Russia Business Registration.
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

const RussiaIncorporationProcessSection = () => {
    const steps = [
        { title: "Choose Structure", desc: "Select the appropriate legal entity (e.g., OOO, AO)." },
        { title: "Reserve Name", desc: "Check availability and reserve name with Federal Tax Service (FTS)." },
        { title: "Submit Documents", desc: "File application, notarized docs, and passports with FTS." },
        { title: "Incorporation", desc: "Receive Certificate of Incorporation from FTS." },
        { title: "Tax ID (INN)", desc: "Apply for Tax Identification Number (INN) post-registration." },
        { title: "Bank Account", desc: "Open a corporate bank account for financial transactions." },
        { title: "Licenses", desc: "Apply for mandatory industry-specific licenses and permits." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in Russia?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to incorporating in Russia.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1513326738677-0961ed2f3a05?auto=format&fit=crop&q=80" alt="Russia Company Registration Process" className="w-full rounded-lg shadow-sm" />
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

const RussiaIncorporationFeaturesSection = () => {
    const features = [
        { title: "1000+ Businesses Assisted", desc: "Proven track record with international clients." },
        { title: "End-to-End Support", desc: "From name reservation to licensing and tax compliance." },
        { title: "Reliable Professionals", desc: "Access to 200+ legal and business consultants." },
        { title: "Client-Centric", desc: "Personalized solutions for every business need." },
        { title: "99.9% Success Rate", desc: "Ensuring successful registration across jurisdictions." },
        { title: "Dedicated Support", desc: "24/7 customer support and robust data security." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner for Russian market entry.
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

const CompanyRegistrationRussia = () => {

    const faqs = [
        {
            question: "How much does it cost to register a company in Russia?",
            answer: "The approximate costs include a Minimum Share Capital of 10,000 RUB (~105 Euros), State Registration Fees of 4,000 RUB (~42 Euros), Company Seal costs between 30-40 Euros, and Notary Services around 300 Euros."
        },
        {
            question: "What is the minimum share capital required?",
            answer: "The minimum share capital required is 10,000 RUB, out of which at least 50% must be paid up at the time of incorporation."
        },
        {
            question: "Do I need a local director or partner?",
            answer: "There is no strict regulatory requirement for a local nominee director, but you must appoint at least one director (who can be foreign) and a legal representative."
        },
        {
            question: "What are the common business structures?",
            answer: "The most common structures are Limited Liability Company (OOO), Joint Stock Company (AO), Individual Entrepreneur (IP), and Branch/Representative Office."
        },
        {
            question: "How long does the registration process take?",
            answer: "The process involves several steps like name reservation, document submission, and obtaining the certificate, which typically takes a few weeks depending on document readiness."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Russia"
                heroSubtitle="Start Business Easily with VyomBiz"
                heroDescription="Establish your business in Russia, a strategic bridge between Europe and Asia. We simplify legal compliance, documentation, and setup for a smooth entry."
                whatsIncludedList={[
                    "Drafting & Notarization of Charter",
                    "Business Registration Assistance",
                    "Taxpayer Identification Number (INN)",
                    "Business Visa & Work Permit Services",
                    "Accounting & Payroll Compliance"
                ]}
                stats={[
                    { count: "1000+", label: "Founders Assisted", icon: <Users size={20} /> },
                    { count: "200+", label: "Reliable Professionals", icon: <Briefcase size={20} /> },
                    { count: "99.9%", label: "Success Rate", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationRussiaOverview />}
                advantages={<CompanyRegistrationRussiaAdvantages />}
                eligibility={<RussiaIncorporationEligibility />}
                documents={<RussiaIncorporationDocumentsSection />}
                process={<RussiaIncorporationProcessSection />}
                features={<RussiaIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in Russia"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationRussia;
