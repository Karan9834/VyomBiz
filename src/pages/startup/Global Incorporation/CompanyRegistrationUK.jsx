import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * UKIncorporation Page matching TrustRegistration layout
 * Content sourced from: https://Vyombiz.io/company-registration-in-uk
 */

const CompanyRegistrationUKOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            European Gateway
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Business Incorporation in UK – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The United Kingdom offers a prestigious and well-regulated business environment, making it a top choice for international entrepreneurs. Ranked highly for ease of doing business, the UK serves as a strategic gateway to European and global markets.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Setting up a company in the UK is straightforward, with digital-first processes allowing for quick incorporation.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why Incorporate in UK?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The UK provides a politically stable economy, a robust legal framework, and significant tax incentives for businesses. It is particularly renowned for its strong fintech ecosystem and access to a highly skilled workforce.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With a corporate tax rate that is competitive among major economies, the UK remains a hub for innovation and investment.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80"
                            alt="UK Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationUKAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of UK Company Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Strategic advantages for your business growth in the United Kingdom.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80"
                            alt="UK Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "100% Foreign Ownership", desc: "Complete ownership allowed for foreign investors without local partner requirements." },
                        { title: "Tax Incentives", desc: "Favorable corporate tax rates and extensive double taxation treaties." },
                        { title: "Limited Liability", desc: "Protects personal assets of directors and shareholders from business debts." },
                        { title: "Global Credibility", desc: "A UK-registered company is recognized and trusted worldwide." },
                        { title: "Fintech Hub", desc: "Access to a world-leading financial ecosystem and banking infrastructure." },
                        { title: "Skilled Workforce", desc: "Access to a diverse pool of highly educated and talented professionals." }
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

const UKIncorporationEligibility = () => {
    const list = [
        { title: "Unique Name", desc: "Company name must be unique and not sensitive or offensive." },
        { title: "Registered Office", desc: "Must have a physical address in the UK for official notices." },
        { title: "Director", desc: "Minimum one director required (natural person), can be non-resident." },
        { title: "Shareholder", desc: "Minimum one shareholder required. Can be same as director." },
        { title: "Memorandum & Articles", desc: "Must adopt constitutional documents (MOA & AOA)." },
        { title: "SIC Code", desc: "Must select at least one Standard Industrial Classification code." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for UK Company Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key checklist for setting up your UK company.
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

const UKIncorporationDocumentsSection = () => {
    const list = [
        "Passport Copies of Directors/Shareholders",
        "Proof of Residential Address (Utility Bill/Bank Statement)",
        "Director's Service Address",
        "Proposed Company Name",
        "Memorandum of Association (MOA)",
        "Articles of Association (AOA)",
        "Statement of Capital",
        "Completed Form IN01"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for UK Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents to proceed with UK incorporation.
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

const UKIncorporationProcessSection = () => {
    const steps = [
        { title: "Choose Structure", desc: "Select the legal entity type (e.g., Private Limited Company)." },
        { title: "Name Check", desc: "Verify availability of your desired company name." },
        { title: "Prepare Documents", desc: "Draft MOA, AOA, and collect ID/Address proofs." },
        { title: "Submit Application", desc: "File Form IN01 with Companies House (online/post)." },
        { title: "Incorporation", desc: "Receive Certificate of Incorporation upon approval." },
        { title: "Post-Setup", desc: "Register for taxes (Corporation Tax, VAT, PAYE)." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in UK?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Simple steps to launch your UK business.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80" alt="UK Company Registration Process" className="w-full rounded-lg shadow-sm" />
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

const UKIncorporationFeaturesSection = () => {
    const features = [
        { title: "Global Expertise", desc: "In-depth knowledge of UK corporate laws and regulations." },
        { title: "Fast-Track", desc: "Expedited registration process to get you trading sooner." },
        { title: "Compliance Support", desc: "Ongoing assistance with annual filings and tax compliance." },
        { title: "Bank Account", desc: "Guidance on opening a UK corporate bank account." },
        { title: "Registered Address", desc: "Virtual office and registered address services available." },
        { title: "Transparent Pricing", desc: "Clear fee structure with no hidden costs." },
        { title: "24/7 Support", desc: "Dedicated support team for all your queries." },
        { title: "One-Stop Solution", desc: "From incorporation to accounting and legal advisory." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Partner with VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Seamless UK entry strategy and execution.
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

const UKIncorporation = () => {

    const faqs = [
        {
            question: "What addresses are required for company registration in the UK?",
            answer: "You need an official registered office address for correspondence with Companies House, and a service address for each director (which can be the same as the registered office)."
        },
        {
            question: "Can a non-resident register a company in the UK?",
            answer: "Yes, non-residents can register a company in the UK. There is no requirement effectively for directors or shareholders to be UK residents."
        },
        {
            question: "What is the minimum capital requirement?",
            answer: "There is no specific minimum capital requirement for a Private Limited Company (LTD), though at least one share must be issued."
        },
        {
            question: "Do I need a physical office in the UK?",
            answer: "You must have a registered office address in the UK for official mail, but you do not necessarily need a physical operational office if you operate remotely."
        },
        {
            question: "What is a SIC Code?",
            answer: "The Standard Industrial Classification (SIC) Code classifies your business activities for data reporting to Companies House."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in UK"
                heroSubtitle="Fast & Efficient UK Company Setup"
                heroDescription="Expand your business to the United Kingdom with our expert company registration services. Enjoy 100% foreign ownership, tax benefits, and access to a dynamic global marketplace."
                whatsIncludedList={[
                    "100% Foreign Ownership",
                    "No Resident Director Required",
                    "Fast Online Incorporation",
                    "Access to UK Banking"
                ]}
                stats={[
                    { count: "5000+", label: "UK Companies Formed", icon: <Users size={20} /> },
                    { count: "150+", label: "Legal Experts", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationUKOverview />}
                advantages={<CompanyRegistrationUKAdvantages />}
                eligibility={<UKIncorporationEligibility />}
                documents={<UKIncorporationDocumentsSection />}
                process={<UKIncorporationProcessSection />}
                features={<UKIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about UK Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default UKIncorporation;
