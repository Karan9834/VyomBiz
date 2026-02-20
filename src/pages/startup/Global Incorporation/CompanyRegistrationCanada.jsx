import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationCanada Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-canada
 */

const CompanyRegistrationCanadaOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Global Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in Canada – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Canada is recognized globally for its strong financial system, abundance of natural resources, and world-class infrastructure, making it a prime location for business investment.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Entrepreneurs can register federally for nationwide protection or provincially for localized operations. The process is streamlined and investor-friendly.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why Canada?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It offers a stable economy, low corporate tax rates for small businesses, and access to the North American market through agreements like USMCA.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With a highly skilled workforce and reputation for innovation, Canada supports diverse industries from technology to manufacturing.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80"
                            alt="Canada Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationCanadaAdvantages = () => {
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
                        Why businesses choose Canada for expansion.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80"
                            alt="Canada Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Low Fees", desc: "Competitive incorporation and annual maintenance costs compared to other developed nations." },
                        { title: "Strong Economy", desc: "A stable, growing economy with a strong banking sector ensures business security." },
                        { title: "Tax Advantages", desc: "Lower corporate tax rates for small businesses and various R&D tax incentives." },
                        { title: "Global Access", desc: "Trade agreements like USMCA provide duty-free access to the US and Mexican markets." },
                        { title: "Skilled Workforce", desc: "Access to one of the most educated and diverse talent pools in the world." },
                        { title: "Legal Framework", desc: "Transparent and robust legal system protecting property rights and business interests." }
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

const CanadaIncorporationEligibility = () => {
    const list = [
        { title: "Share Capital", desc: "Minimum authorized share capital is CA$ 1." },
        { title: "Directors", desc: "Minimum 1 director. 25% must be resident Canadians (Federally). Ontario/BC have no residency requirement." },
        { title: "Shareholders", desc: "Minimum 1 shareholder required (can be an individual or corporate entity)." },
        { title: "Registered Address", desc: "Must have a physical address in Canada for service of documents (cannot be a PO Box)." },
        { title: "No Criminal Record", desc: "Directors must not have a criminal record involving fraud or bankruptcy." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Canada Company Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key criteria for registering a company in Canada.
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

const CanadaIncorporationDocumentsSection = () => {
    const list = [
        "Articles of Incorporation",
        "Form 2 (Initial Registered Office Address)",
        "Form 4 (First Directors)",
        "NUANS Name Search Report",
        "Passport Copies of Directors/Shareholders",
        "Proof of Address for Directors",
        "Business Plan (optional but recommended)"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Canada Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents for Canada Company Incorporation.
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

const CanadaIncorporationProcessSection = () => {
    const steps = [
        { title: "Select Structure", desc: "Choose between detailed structures like Corporation or Partnership." },
        { title: "Name Search", desc: "Perform a NUANS name search to ensure your business name is unique." },
        { title: "Prepare Articles", desc: "Draft and file Articles of Incorporation with Corporations Canada." },
        { title: "Federal Registration", desc: "Obtain your Certificate of Incorporation and Business Number (BN)." },
        { title: "Tax Accounts", desc: "Register for GST/HST, Payroll deductions, and Import/Export accounts." },
        { title: "Permits & Licenses", desc: "Apply for necessary municipal, provincial, or industry-specific licenses." },
        { title: "Corporate Records", desc: "Set up a corporate minute book and issue share certificates." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in Canada?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to setting up your business.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80" alt="Canada Company Registration Process" className="w-full rounded-lg shadow-sm" />
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

const CanadaIncorporationFeaturesSection = () => {
    const features = [
        { title: "Expert Guidance", desc: "10+ years of experience in international company formation." },
        { title: "End-to-End Support", desc: "From name search to bank account opening and tax registration." },
        { title: "Compliance Assurance", desc: "Ensuring your business meets all federal and provincial regulations." },
        { title: "Document Drafting", desc: "Professional preparation of by-laws, resolutions, and shareholder agreements." },
        { title: "Local Presence", desc: "Assistance with registered office services and local director requirements." },
        { title: "24/7 Support", desc: "Round-the-clock assistance for all your business queries." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner for Canadian business expansion.
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

const CompanyRegistrationCanada = () => {

    const faqs = [
        {
            question: "What is the minimum share capital required for company registration in Canada?",
            answer: "The minimum share capital required to register a company in Canada is just CA$ 1."
        },
        {
            question: "Do I need a resident director to incorporate in Canada?",
            answer: "Yes, in most jurisdictions (like federally incorporated companies), at least 25% of the directors must be resident Canadians. However, provinces like British Columbia and Ontario do not have this requirement."
        },
        {
            question: "What are the main types of business structures in Canada?",
            answer: "The most common structures are Sole Proprietorship, Partnership (General, Limited, LLP), Corporation, and Co-operative."
        },
        {
            question: "Can a foreign company operate in Canada without incorporating a new entity?",
            answer: "Yes, a foreign company can register an 'Extra-Provincial Corporation' or a Branch Office to operate in Canada without creating a separate legal entity."
        },
        {
            question: "What are the tax registration requirements?",
            answer: "Businesses must register for a Business Number (BN) and, depending on revenue, for GST/HST/PST accounts with the Canada Revenue Agency (CRA)."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Canada"
                heroSubtitle="Business Setup in CA with VyomBiz"
                heroDescription="Expand your business to Canada, a top destination for investment. We provide end-to-end support for incorporation, compliance, and tax registration."
                whatsIncludedList={[
                    "Name Reservation & Approval",
                    "Virtual Office Address (6 Months)",
                    "GST/HST Registration",
                    "Corporate Seal & Minute Book",
                    "Bank Account Opening Support"
                ]}
                stats={[
                    { count: "500+", label: "Companies Registered", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationCanadaOverview />}
                advantages={<CompanyRegistrationCanadaAdvantages />}
                eligibility={<CanadaIncorporationEligibility />}
                documents={<CanadaIncorporationDocumentsSection />}
                process={<CanadaIncorporationProcessSection />}
                features={<CanadaIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in Canada"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationCanada;
