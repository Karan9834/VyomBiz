import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationSingapore Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-singapore
 */

const CompanyRegistrationSingaporeOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Asia Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in Singapore – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Singapore is one of the most developed nations in Asia, offering advanced infrastructure and a strong economy. It is a top destination for fintech, manufacturing, and trade.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The country provides a stable business environment with transparent regulatory policies, making it ideal for foreign entrepreneurs and LLCs.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why Singapore?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It offers a strategic location, skilled workforce, and double taxation agreements with over 90 countries.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Singapore's tax system is highly attractive, with low corporate tax rates and exemptions for new startups.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80"
                            alt="Singapore Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationSingaporeAdvantages = () => {
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
                        Why global entrepreneurs choose Singapore.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80"
                            alt="Singapore Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Low Tax Rates", desc: "Corporate tax rate is capped at 17%, with significant exemptions for new companies." },
                        { title: "100% Foreign Ownership", desc: "Foreigners can own 100% of the shares in a Singapore Private Limited Company." },
                        { title: "Double Tax Agreements", desc: "Avoid double taxation with Singapore's network of DTAs with over 90 countries." },
                        { title: "Ease of Doing Business", desc: "Consistently ranked as one of the easiest places in the world to do business." },
                        { title: "Skilled Workforce", desc: "Access to a highly educated and English-speaking workforce." },
                        { title: "Strategic Location", desc: "Gateway to Southeast Asia and major global markets." }
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

const SingaporeIncorporationEligibility = () => {
    const list = [
        { title: "Director", desc: "Minimum one resident director required (Citizen, PR, or EntrePass holder)." },
        { title: "Shareholder", desc: "Minimum one shareholder (individual or corporate entity)." },
        { title: "Company Secretary", desc: "Must appoint a qualified company secretary within 6 months of incorporation." },
        { title: "Paid-up Capital", desc: "Minimum paid-up capital of SGD 1." },
        { title: "Registered Address", desc: "Must have a local physical address in Singapore (P.O. Box not allowed)." },
        { title: "Bank Account", desc: "Need to open a corporate bank account in Singapore." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Singapore Company Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key criteria for Singapore company incorporation.
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

const SingaporeIncorporationDocumentsSection = () => {
    const list = [
        "Passport Copies of Directors & Shareholders",
        "Address Proof (foreign & local)",
        "Company Name Approval",
        "Memorandum of Association (MOA)",
        "Articles of Association (AOA)",
        "Details of Shareholders (Individual/Corporate)",
        "Consent to Act as Director",
        "Consent to Act as Secretary"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Singapore Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents for ACRA verification.
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

const SingaporeIncorporationProcessSection = () => {
    const steps = [
        { title: "Name Approval", desc: "Check and reserve your company name with ACRA." },
        { title: "Prepare Documents", desc: "Prepare MOA, AOA, and get details of directors/shareholders." },
        { title: "ACRA Registration", desc: "Submit application to ACRA and pay registration fees." },
        { title: "Receive UEN", desc: "Get your Unique Entity Number (UEN) and Business Profile." },
        { title: "Open Bank Account", desc: "Open a corporate bank account with a local or international bank." },
        { title: "Tax Registration", desc: "Register for GST (if applicable) and corporate tax." },
        { title: "Licenses & Permits", desc: "Apply for any necessary business licenses based on your industry." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in Singapore?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to incorporating in Singapore.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80" alt="Singapore Company Registration Process" className="w-full rounded-lg shadow-sm" />
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

const SingaporeIncorporationFeaturesSection = () => {
    const features = [
        { title: "Expert Knowledge", desc: "Deep understanding of Singapore's regulatory landscape." },
        { title: "One-Stop Solution", desc: "From incorporation to secretarial services and tax filing." },
        { title: "Local Presence", desc: "Assistance with local directors and registered address services." },
        { title: "Cost Effective", desc: "Transparent pricing with no hidden fees." },
        { title: "Fast Turnaround", desc: "Efficient processing to get your business running quickly." },
        { title: "Compliance Support", desc: "Ongoing support to ensure you stay compliant with ACRA and IRAS." },
        { title: "Bank Account Help", desc: "Guidance on opening corporate bank accounts." },
        { title: "Dedicated Manager", desc: "Personalized service for your business needs." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Trust VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your partner for seamless Singapore business setup.
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

const CompanyRegistrationSingapore = () => {

    const faqs = [
        {
            question: "Why should I register a business in Singapore?",
            answer: "Singapore offers a robust infrastructure, tax-free dividends, 100% foreign ownership, strong IP protection, and a stable political environment."
        },
        {
            question: "What is the process for company registration in Singapore?",
            answer: "The process involves business name search, address registration, submitting documents to ACRA, obtaining the registration certificate, and setting up a bank account."
        },
        {
            question: "Do I need to obtain an Entrepass as a foreigner?",
            answer: "You may need an EntrePass if you plan to be actively involved in the management of the business in Singapore. It serves as a work pass for foreign entrepreneurs."
        },
        {
            question: "What are the document requirements for registration?",
            answer: "Requirements include passports of directors/shareholders, business plan, Memorandum of Association (MOA), Articles of Association (AOA), and business address details."
        },
        {
            question: "What is the minimum number of directors required?",
            answer: "A private limited company must have at least one director who is a resident of Singapore (citizen, permanent resident, or EntrePass holder)."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Singapore"
                heroSubtitle="Set Up Your Business in Asia's Leading Financial Hub"
                heroDescription="Register your company in Singapore with 100% foreign ownership. Benefit from low tax rates, a robust economy, and a strategic gateway to Asian markets."
                whatsIncludedList={[
                    "ACRA Name Checking (Unlimited)",
                    "Nominee Director Service",
                    "Registered Address for 1 Yr",
                    "Annual Tax Return Filing",
                    "Free 1st Yr Company Secretary"
                ]}
                stats={[
                    { count: "1000+", label: "Companies Registered", icon: <Building2 size={20} /> },
                    { count: "10+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "43k+", label: "Happy Clients", icon: <Users size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationSingaporeOverview />}
                advantages={<CompanyRegistrationSingaporeAdvantages />}
                eligibility={<SingaporeIncorporationEligibility />}
                documents={<SingaporeIncorporationDocumentsSection />}
                process={<SingaporeIncorporationProcessSection />}
                features={<SingaporeIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Singapore Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationSingapore;
