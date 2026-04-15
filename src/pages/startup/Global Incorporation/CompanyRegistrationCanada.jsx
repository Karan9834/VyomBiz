import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Global Incorporation/Company Registration in Canada/benefits.png";
import overview from "../../../assets/Global Incorporation/Company Registration in Canada/overview.png";
import process from "../../../assets/Global Incorporation/Company Registration in Canada/process.png";

/**
 * CompanyRegistrationCanada Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-canada
 */

const CompanyRegistrationCanadaOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Global Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Why Register a Company in Canada?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Canada has become one of the most attractive destinations for entrepreneurs and global businesses. With a stable economy, transparent legal system, and strong international reputation, registering a company here can open doors to global markets.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Entrepreneurs choose Canada because it offers a strong business environment supported by innovation, government incentives, and global trade access. The country consistently ranks among the top nations for ease of doing business and corporate governance.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            When businesses register through Vyombiz managed by Clink Consultancy Services Private Limited, they gain structured legal support that simplifies international expansion and compliance.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Key Advantages Include:
                        </h3>
                        <ul className="list-disc pl-5 text-[17px] text-slate-600 leading-relaxed font-medium">
                            <li>Access to North American markets</li>
                            <li>Strong legal protection for businesses</li>
                            <li>Global credibility and investor confidence</li>
                            <li>Transparent tax and compliance structure</li>
                            <li>Supportive ecosystem for startups and tech companies</li>
                        </ul>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Company Registration in Canada
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why businesses choose Canada for expansion.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Canada Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Global Market Access", desc: "Canada’s strong trade agreements provide access to markets across North America, Europe, and Asia." },
                        { title: "Business-Friendly Environment", desc: "Government policies encourage innovation, entrepreneurship, and foreign investment." },
                        { title: "Limited Liability Protection", desc: "Incorporation protects personal assets by separating business liabilities from owners." },
                        { title: "Investor Confidence", desc: "Canadian registered companies often gain better credibility with investors and financial institutions." },
                        { title: "Stable Economy", desc: "Canada offers political stability, strong infrastructure, and a well-regulated financial system." }
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
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Company Structures in Canada
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Choosing the right business structure is important before incorporation. Each structure has different legal, tax, and operational implications.
                </p>
                <div className="space-y-6">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Federal Corporation</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">A federal corporation allows businesses to operate across all provinces in Canada under one registered entity. It provides wider name protection and national credibility.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Provincial Corporation</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">This type of incorporation allows a business to operate within a specific province. It is suitable for businesses focusing on regional markets.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Sole Proprietorship</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">A simple structure owned and operated by one individual. It has minimal compliance requirements but offers limited liability protection.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Partnership</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">A business structure where two or more individuals share ownership, responsibilities, and profits.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Subsidiary Company</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">Foreign businesses expanding into Canada often register a subsidiary to maintain a local presence while remaining connected to their parent company.</p>
                    </div>
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Experts at Vyombiz managed by Clink Consultancy Services Private Limited help entrepreneurs choose the right structure based on business goals and expansion plans.
                </p>
            </div>
        </section>
    );
};

const CanadaIncorporationDocumentsSection = () => {
    const list = [
        "Proposed company name",
        "Passport copy of directors/shareholders",
        "Proof of residential address",
        "Business activity details",
        "Shareholding structure",
        "Registered office address in Canada"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Company Registration in Canada
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To incorporate a company, businesses typically need the following documents:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i} className="flex items-start">
                             <div className="mr-3 mt-1 text-yellow-400"><Users size={18} /></div>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    The compliance team at Vyombiz managed by Clink Consultancy Services Private Limited ensures all documentation meets Canadian regulatory requirements.
                </p>
            </div>
        </section>
    );
};

const CanadaIncorporationProcessSection = () => {
    const steps = [
        { title: "Business Consultation", desc: "Understanding your business model, expansion plans, and suitable company structure." },
        { title: "Name Availability Check", desc: "Verifying and reserving the company name to ensure uniqueness." },
        { title: "Document Preparation", desc: "Drafting incorporation documents, shareholder details, and corporate structure." },
        { title: "Company Incorporation Filing", desc: "Submitting the required forms to Canadian authorities." },
        { title: "Business Number Registration", desc: "Obtaining the official Business Number (BN) required for taxation and government filings." },
        { title: "Compliance & Corporate Setup", desc: "Completing post-registration compliance and documentation for smooth business operations." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process to Register a Company in Canada
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Canada Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                            With Vyombiz managed by Clink Consultancy Services Private Limited, the entire incorporation journey is guided by experienced professionals to ensure accuracy and efficiency.
                        </p>
                        <div className="mt-12 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Registration
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CanadaIncorporationFeaturesSection = () => {
    const complianceItems = [
        "Annual corporate filings",
        "Tax registrations and filings",
        "Accounting records maintenance",
        "Shareholder documentation updates",
        "Corporate governance compliance"
    ];

    const services = [
        "End-to-end company incorporation assistance",
        "Experienced global business consultants",
        "Structured documentation and compliance support",
        "Transparent process and professional guidance",
        "Support for international business expansion"
    ];

    const whoShould = [
        "International entrepreneurs expanding globally",
        "Startups targeting North American markets",
        "Technology and SaaS companies",
        "E-commerce businesses selling internationally",
        "Investors building global business structures"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="mb-14">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Compliance Requirements After Incorporation
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Once your company is registered, businesses must maintain certain regulatory requirements.
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        {complianceItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Professional support helps businesses stay compliant while focusing on growth.
                    </p>
                </div>

                <div className="mb-14">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Why Choose Vyombiz for Canada Company Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Starting a company in a foreign country involves multiple legal and compliance steps. Working with experienced professionals simplifies the process.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Businesses partnering with Vyombiz managed by Clink Consultancy Services Private Limited benefit from:
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        {services.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Our goal is to make global company formation simple, efficient, and accessible for entrepreneurs worldwide.
                    </p>
                </div>

                <div className="mb-14">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Who Should Register a Company in Canada?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Company incorporation in Canada is ideal for:
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        {whoShould.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Canada offers the infrastructure, credibility, and stability required for sustainable international growth.
                    </p>
                </div>

                <div className="mt-14 bg-[#e6f0fa] rounded-2xl p-8 lg:p-12 text-center">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Start Your Canada Business Journey
                    </h2>
                    <p className="text-[17px] text-slate-700 leading-relaxed max-w-4xl mx-auto mb-6">
                        Expanding your business globally begins with the right foundation. Canada provides a trusted and innovative environment for companies looking to scale internationally.
                    </p>
                    <p className="text-[17px] text-slate-700 leading-relaxed max-w-4xl mx-auto mb-6">
                        With professional guidance from Vyombiz managed by Clink Consultancy Services Private Limited, registering your company in Canada becomes a smooth and structured process.
                    </p>
                    <p className="text-[17px] text-slate-700 leading-relaxed max-w-4xl mx-auto font-semibold">
                        Launch your Canada company with confidence today.
                    </p>
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
                heroTitleMain="Start Your Company in Canada"
                heroTitleSuffix="— The Smart Gateway to Global Business"
                heroSubtitle="Register your company in one of the world’s most stable and business-friendly economies."
                heroDescription="From incorporation to compliance, we simplify the entire process so you can focus on growing globally."
                whatsIncludedList={[
                    "Fast Incorporation",
                    "100% Online Process",
                    "Expert Legal Support",
                    "Global Business Credibility"
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

