import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * USAIncorporation Page matching TrustRegistration layout
 * Content sourced from: https://Vyombiz.io/company-registration-in-usa
 */

const CompanyRegistrationUSAOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Global Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in USA – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The USA is the world's largest economy, offering a robust infrastructure, diverse consumer base, and a business-friendly environment for startups and established enterprises.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Registering a company in the USA provides credibility, access to global capital markets, and the ability to conduct business in USD. Non-residents can easily form an LLC or C-Corporation.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why USA?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The US offers strong intellectual property protection, limited liability for owners, and a flexible legal framework. It serves as a gateway to international trade and innovation.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With 100% foreign ownership allowed, entrepreneurs can establish their presence without needing a local partner.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                            alt="USA Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationUSAAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of USA Company Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Unlock global opportunities and secure your business future with a US incorporation.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1485735665794-1e682955985b?auto=format&fit=crop&q=80"
                            alt="USA Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "100% Foreign Ownership", desc: "Non-US residents can own 100% of the company." },
                        { title: "Limited Liability", desc: "Personal assets are protected from business debts and lawsuits." },
                        { title: "Global Credibility", desc: "A US-registered company commands respect and trust internationally." },
                        { title: "Access to Capital", desc: "Easier access to venture capital, angel investors, and public markets." },
                        { title: "Tax Benefits", desc: "Favorable tax treaties and potential deductions for business expenses." },
                        { title: "Intellectual Property", desc: "Strong legal framework for protecting trademarks, patents, and copyrights." }
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

const USAIncorporationEligibility = () => {
    const list = [
        { title: "Unique Name", desc: "The company name must be distinguishable from existing entities." },
        { title: "Registered Agent", desc: "Must have a registered agent with a physical address in the state of incorporation." },
        { title: "Directors/Members", desc: "Minimum one director or member required. Can be a non-resident." },
        { title: "EIN Number", desc: "Must obtain an Employer Identification Number from the IRS for tax purposes." },
        { title: "Filing Articles", desc: "Must file Articles of Incorporation (Corp) or Organization (LLC)." },
        { title: "Annual Compliance", desc: "Must adhere to annual report filings and franchise tax requirements." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for USA Company Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key criteria for incorporating a company in the USA.
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

const USAIncorporationDocumentsSection = () => {
    const list = [
        "Passport Copy (Directors & Shareholders)",
        "Proof of Address (Utility Bill/Bank Statement)",
        "Email & Contact Number",
        "Proposed Company Names (3 preferences)",
        "Director Identification Number (if applicable)",
        "Social Security Number (if US Resident)",
        "Articles of Incorporation/Organization",
        "Operating Agreement or Bylaws"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for USA Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents required for USA Company Incorporation.
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

const USAIncorporationProcessSection = () => {
    const steps = [
        { title: "Business Planning", desc: "Choose business structure and state of incorporation." },
        { title: "Name Availability", desc: "Search and reserve your unique business name." },
        { title: "Appoint Registered Agent", desc: "Designate a legal representative in the state." },
        { title: "File Documents", desc: "Submit Articles of Organization/Incorporation to the State." },
        { title: "Get EIN", desc: "Apply for Employer Identification Number from IRS." },
        { title: "Operating Agreement", desc: "Draft internal operating rules and bylaws." },
        { title: "Bank Account", desc: "Open a US business bank account." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in USA?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to incorporating your US business.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" alt="USA Company Registration Process" className="w-full rounded-lg shadow-sm" />
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

const USAIncorporationFeaturesSection = () => {
    const features = [
        { title: "Expert Guidance", desc: "Comprehensive advice on structure and compliance." },
        { title: "End-to-End Support", desc: "From name reservation to post-incorporation compliance." },
        { title: "Cost-Effective", desc: "Competitive pricing with no hidden charges." },
        { title: "Quick Turnaround", desc: "Expedited filing services to get you started fast." },
        { title: "Bank Support", desc: "Assistance with opening US corporate bank accounts." },
        { title: "Tax Advisory", desc: "Guidance on US tax laws and filing requirements." },
        { title: "Dedicated Support", desc: "Relationship manager for personalized assistance." },
        { title: "Global Reach", desc: "Experience in handling incorporations across multiple jurisdictions." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner for global business expansion.
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

const USAIncorporation = () => {

    const faqs = [
        {
            question: "What are the documentation prerequisites for USA company formation?",
            answer: "The requirements include a unique business name, details of directors/shareholders (Passport/ID), and a registered office address in the chosen US state."
        },
        {
            question: "Is it possible to change my LLC to a C-Corp or S-Corp?",
            answer: "Yes, an LLC can elect to be taxed as a C-Corp or S-Corp by filing the appropriate forms (like Form 8832 or Form 2553) with the IRS."
        },
        {
            question: "What are the types of business structures in USA?",
            answer: "Common structures include Limited Liability Company (LLC), C-Corporation, S-Corporation, Limited Partnership (LP), and Sole Proprietorship."
        },
        {
            question: "Do I need to be a US resident to incorporate a company?",
            answer: "No, foreign nationals can incorporate an LLC or C-Corp in the USA without being a resident or having a physical presence, though a Registered Agent is required."
        },
        {
            question: "What is an EIN?",
            answer: "EIN (Employer Identification Number) is a unique nine-digit number assigned by the IRS to business entities for tax identification purposes."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in USA"
                heroSubtitle="Expand Your Business Globally"
                heroDescription="Incorporate your company in the USA with 100% foreign ownership and remote processing. We provide expert assistance for LLCs, C-Corps, and more."
                whatsIncludedList={[
                    "100% Remote Process",
                    "Assistance with Bank Account Opening",
                    "Registered Agent Services",
                    "EIN & Tax Filing Support"
                ]}
                stats={[
                    { count: "4000+", label: "Businesses Assisted", icon: <Users size={20} /> },
                    { count: "200+", label: "Local Consultants", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "States Covered", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationUSAOverview />}
                advantages={<CompanyRegistrationUSAAdvantages />}
                eligibility={<USAIncorporationEligibility />}
                documents={<USAIncorporationDocumentsSection />}
                process={<USAIncorporationProcessSection />}
                features={<USAIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about USA Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default USAIncorporation;
