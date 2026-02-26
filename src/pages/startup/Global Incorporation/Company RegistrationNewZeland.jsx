import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Company RegistrationNewZeland Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-new-zealand
 */

const CompanyRegistrationNewZealandOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Global Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in New Zealand – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            New Zealand offers a stable, transparent, and investor-friendly environment. It is consistently ranked highly in the World Bank’s Ease of Doing Business Index.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Entrepreneurs benefit from a corruption-free governance system and a strategic location in the Pacific capable of connecting with global markets.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why New Zealand?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It provides excellent infrastructure, supportive government policies, and access to 13 active free trade agreements.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The economy is resilient and growing, offering a supportive ecosystem for business registration and expansion.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1507699622177-388828d99617?auto=format&fit=crop&q=80"
                            alt="New Zealand Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationNewZealandAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Incorporation
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why businesses choose New Zealand for expansion.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1507699622177-388828d99617?auto=format&fit=crop&q=80"
                            alt="New Zealand Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Free Trade Agreements", desc: "Access to 13 active free trade agreements with nations worldwide." },
                        { title: "Corruption-Free Economy", desc: "Ranked as one of the least corrupt and most transparent economies globally." },
                        { title: "Strategic Location", desc: "Connects business ties with the world, increasing trade links and opportunities." },
                        { title: "Business Credibility", desc: "Registration enhances brand credibility with customers, investors, and partners." },
                        { title: "Economic Stability", desc: "Backed by a resilient economy offering a supportive ecosystem for growth." },
                        { title: "Skilled Workforce", desc: "Access to a well-educated, English-speaking, and skilled labor pool." }
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

const NewZealandIncorporationEligibility = () => {
    const list = [
        { title: "Resident Director", desc: "Must appoint at least 1 resident director (lives in NZ or Australia)." },
        { title: "Shareholder", desc: "Must have a minimum of 1 shareholder." },
        { title: "Unique Business Name", desc: "Must register a name that is not identical or offensive." },
        { title: "Registered Address", desc: "Must have a physical registered office address in New Zealand." },
        { title: "Constitution", desc: "Prepare and register the company's constitution (if applicable)." },
        { title: "IRD Number", desc: "Obtain an Inland Revenue Department (IRD) number for tax purposes." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Company Registration in New Zealand?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key criteria for registering a company in New Zealand.
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

const NewZealandIncorporationDocumentsSection = () => {
    const list = [
        "Passport/Visa Copies (Directors & Investors)",
        "Certified Copy of Utility Bill (Address Proof)",
        "Business Plan",
        "Company Constitution (MOA & AOA)",
        "Director Consent Forms",
        "Shareholder Details (Individual/Corporate)",
        "Audited Financial Statements (if existing business)",
        "Details of Registered Address"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for New Zealand Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents for NZ Company Incorporation.
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

const NewZealandIncorporationProcessSection = () => {
    const steps = [
        { title: "Name Reservation", desc: "Reserve your business name with the NZ Companies Office (valid for 20 days)." },
        { title: "Choose Structure", desc: "Select the appropriate business structure (e.g., LLC, Branch)." },
        { title: "Prepare Documents", desc: "Prepare Constitution, director consents, and identification docs." },
        { title: "Apply Online", desc: "Submit the registration application via the NZ Companies Office portal." },
        { title: "Verification", desc: "Application is assessed, including shareholder and director consents." },
        { title: "Incorporation", desc: "Receive the Certificate of Incorporation upon approval." },
        { title: "Post-Compliance", desc: "Get NZBN, IRD number, GST registration, and open bank account." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in New Zealand?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to setting up your business.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1507699622177-388828d99617?auto=format&fit=crop&q=80" alt="New Zealand Company Registration Process" className="w-full rounded-lg shadow-sm" />
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

const NewZealandIncorporationFeaturesSection = () => {
    const features = [
        { title: "Pre-Registration Consult", desc: "Expert guidance to understand the process and requirements." },
        { title: "Name Reservation", desc: "Assistance in checking availability and reserving your preferred name." },
        { title: "End-to-End Filing", desc: "Handling the entire online incorporation process with NZCO." },
        { title: "Drafting Constitution", desc: "Drafting or reviewing company constitution and governance rules." },
        { title: "Compliance Support", desc: "Guiding director/shareholder compliance and residency rules." },
        { title: "Registered Address", desc: "Assistance in securing a registered office address in New Zealand." },
        { title: "Bank Account", desc: "Streamlining financial operations by setting up a business bank account." },
        { title: "Annual Filing", desc: "Timely filing of annual returns to keep your company in good standing." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Trust VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Complete assistance for your New Zealand business setup.
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

const CompanyRegistrationNewZeland = () => {

    const faqs = [
        {
            question: "How to register a company in New Zealand from India?",
            answer: "The process involves reserving a business name, choosing a structure, gathering documents (passport/utility bill), applying online via the NZ Companies Office, verification, and obtaining the Certificate of Incorporation."
        },
        {
            question: "What are the benefits of company registration in New Zealand?",
            answer: "Benefits include access to 13 free trade agreements, a corruption-free economy, strategic global location, enhanced brand credibility, and a skilled, English-speaking workforce."
        },
        {
            question: "What are the types of companies in New Zealand?",
            answer: "Common types include Limited Liability Company (LLC), Sole Proprietorship, Partnership, Cooperative Society, Look-Through Company, and Branch Office."
        },
        {
            question: "Do I need a resident director?",
            answer: "Yes, you must appoint at least one director who lives in New Zealand or is a director of a company in a prescribed enforcement country (like Australia)."
        },
        {
            question: "What taxes do I need to register for?",
            answer: "You typically need to register for Income Tax and GST (if turnover exceeds NZD 60,000). You will also need an IRD number."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in New Zealand"
                heroSubtitle="Fast & Easy Company Registration"
                heroDescription="Start your business in New Zealand's investor-friendly economy. We provide end-to-end support for registration, tax filing, and compliance."
                whatsIncludedList={[
                    "NZBN Application Support",
                    "Assistance with IRD and GST Number",
                    "Bank Account Opening Support",
                    "Annual Return Filing",
                    "Post-Incorporation Accounting Setup"
                ]}
                stats={[
                    { count: "500+", label: "Founders Trusted", icon: <Users size={20} /> },
                    { count: "10+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationNewZealandOverview />}
                advantages={<CompanyRegistrationNewZealandAdvantages />}
                eligibility={<NewZealandIncorporationEligibility />}
                documents={<NewZealandIncorporationDocumentsSection />}
                process={<NewZealandIncorporationProcessSection />}
                features={<NewZealandIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about New Zealand Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationNewZeland;
