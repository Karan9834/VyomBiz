import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationPoland Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-poland
 */

const CompanyRegistrationPolandOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            EU Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in Poland – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Poland, located in Central Europe, is a prime destination for investment due to its strategic location and strong economic fundamentals.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            As an EU member, it offers businesses access to a unified market of 447 million consumers. The country boasts a competitive labor force and a thriving startup ecosystem.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why Poland?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Poland offers a business-friendly environment with attractive tax incentives, especially in Special Economic Zones (SEZs).
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With world-class infrastructure and a high ranking in English proficiency, Poland is an ideal location for foreign entrepreneurs to establish and grow their presence in Europe.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1519197924294-cc3a4f785c99?auto=format&fit=crop&q=80"
                            alt="Poland Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationPolandAdvantages = () => {
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
                        Why businesses choose Poland for expansion.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1519197924294-cc3a4f785c99?auto=format&fit=crop&q=80"
                            alt="Poland Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Tax Incentives", desc: "Attractive tax breaks for R&D and operations in Special Economic Zones." },
                        { title: "Strategic Location", desc: "Central location providing easy access to both Western and Eastern European markets." },
                        { title: "Skilled Workforce", desc: "Access to a highly educated, cost-effective, and multilingual labor force." },
                        { title: "Startup Ecosystem", desc: "Thriving environment for tech, e-commerce, and innovation." },
                        { title: "EU Funding", desc: "Access to various EU grants and subsidies to boost business growth." },
                        { title: "Ease of Doing Business", desc: "Digitalized processes allow for fast and efficient online registration." }
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

const PolandIncorporationEligibility = () => {
    const list = [
        { title: "Share Capital", desc: "Minimum PLN 5,000 for LLC (Sp. z o.o.)." },
        { title: "Directors", desc: "Minimum 1 director required. Can be a foreign national." },
        { title: "Shareholders", desc: "Minimum 1 shareholder required (individual or corporate entity)." },
        { title: "Registered Address", desc: "Must have a physical office address in Poland." },
        { title: "Legal Capacity", desc: "Shareholders and directors must have full legal capacity." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Company Registration in Poland?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key criteria for incorporating in Poland.
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

const PolandIncorporationDocumentsSection = () => {
    const list = [
        "Articles of Association & Memorandum (M&AOA)",
        "Proof of Share Capital Deposit",
        "Passport/ID Copies of Directors & Shareholders",
        "Power of Attorney (if applicable)",
        "KRS Consent & Declaration",
        "Registered Office Address Proof",
        "Bank Statement"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Poland Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents for Poland Company Incorporation.
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

const PolandIncorporationProcessSection = () => {
    const steps = [
        { title: "Choose Structure", desc: "Select the legal form (e.g., Sp. z o.o.) and check name availability." },
        { title: "Prepare Docs", desc: "Draft and notarize Articles of Association and other documents." },
        { title: "Appoint Board", desc: "Appoint the Management Board responsible for representation." },
        { title: "PESEL/NIP", desc: "Obtain PESEL (ID number) or NIP (Tax ID) if required." },
        { title: "KRS Registration", desc: "File application with the National Court Register (KRS)." },
        { title: "Bank Account", desc: "Open a corporate bank account and deposit share capital." },
        { title: "VAT & ZUS", desc: "Register for VAT and Social Security (ZUS) compliance." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in Poland?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to setting up your business.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1519197924294-cc3a4f785c99?auto=format&fit=crop&q=80" alt="Poland Company Registration Process" className="w-full rounded-lg shadow-sm" />
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

const PolandIncorporationFeaturesSection = () => {
    const features = [
        { title: "95% Success Rate", desc: "Proven track record in successful company formations." },
        { title: "End-to-End Support", desc: "From name reservation to VAT registration and licensing." },
        { title: "Local Presence", desc: "Virtual office services in Warsaw, Kraków, and Gdańsk." },
        { title: "Expert Consultants", desc: "Dedicated advisors for tax, legal, and compliance matters." },
        { title: "Fast Turnaround", desc: "Efficient handling to ensure registration in 1-3 days." },
        { title: "24/7 Support", desc: "Round-the-clock assistance for all your business needs." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner for Polish business entry.
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

const CompanyRegistrationPoland = () => {

    const faqs = [
        {
            question: "What is the minimum share capital for a Limited Liability Company (Sp. z o.o.) in Poland?",
            answer: "The minimum share capital required for a Limited Liability Company in Poland is PLN 5,000."
        },
        {
            question: "How long does company registration take in Poland?",
            answer: "With online registration, the process can be completed in as little as 1-3 days."
        },
        {
            question: "Do I need a local resident director?",
            answer: "No, there is no requirement for a local resident director. You must have at least one director, who can be a foreign national."
        },
        {
            question: "What are the key tax incentives?",
            answer: "Poland offers attractive incentives for businesses in Special Economic Zones (SEZs) and those involved in Research & Development (R&D)."
        },
        {
            question: "Can I register a company remotely?",
            answer: "Yes, you can register a company online without visiting Poland, using a Power of Attorney or e-signatures."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Poland"
                heroSubtitle="Start Your Business in the EU Today"
                heroDescription="Expand your business to Poland, a strategic gateway to the European Union with access to over 447 million customers. We provide end-to-end support for quick and compliant registration."
                whatsIncludedList={[
                    "Drafting & Notarization of Deed",
                    "KRS & ZUS Registration",
                    "NIP & REGON Issuance",
                    "Business Visa Support",
                    "Accounting, Payroll & Tax Compliance"
                ]}
                stats={[
                    { count: "1400+", label: "Companies Registered", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationPolandOverview />}
                advantages={<CompanyRegistrationPolandAdvantages />}
                eligibility={<PolandIncorporationEligibility />}
                documents={<PolandIncorporationDocumentsSection />}
                process={<PolandIncorporationProcessSection />}
                features={<PolandIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in Poland"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationPoland;
