import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from '../../../assets/Global Incorporation/Company Registration in Russia/benefits.png'
import overview from '../../../assets/Global Incorporation/Company Registration in Russia/overview.png'
import process from '../../../assets/Global Incorporation/Company Registration in Russia/process.png'


/**
 * CompanyRegistrationRussia Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-russia
 */

const CompanyRegistrationRussiaOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Strategic Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Russia Company Registration – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Russia is one of the largest economies in Eurasia and a strategic gateway between Europe and Asia, making it an attractive destination for foreign entrepreneurs, investors, and multinational businesses. With its vast natural resources, industrial strength, and growing domestic market, the country offers strong opportunities across sectors such as technology, manufacturing, energy, and logistics.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Setting up a company in Russia allows businesses to establish a legal presence, access the Russian market, and collaborate with regional partners. However, the registration process requires compliance with Russian corporate laws, tax regulations, and documentation requirements.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited simplifies the entire company formation process in Russia by assisting businesses with documentation, regulatory filings, and incorporation procedures to ensure a smooth and compliant setup.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why Start a Business in Russia?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Russia continues to attract international investors due to its strategic location and expanding economic sectors. Some of the key advantages include:
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Russia Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Large Consumer Market", desc: "Russia has a population of over 140 million people, offering businesses access to a vast domestic market." },
                        { title: "Strategic Trade Location", desc: "The country connects European and Asian markets, making it an important hub for international trade and logistics." },
                        { title: "Strong Industrial Economy", desc: "Russia has well-developed industries in energy, manufacturing, engineering, and natural resources." },
                        { title: "Skilled Workforce", desc: "The country offers a large pool of highly educated professionals, especially in engineering, technology, and science." },
                        { title: "Growing Technology Sector", desc: "Russia’s IT and technology sectors are expanding rapidly, creating opportunities for startups and tech companies." }
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
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Business Entities in Russia
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Foreign investors can establish different types of legal entities in Russia depending on their business goals and operational structure.
                </p>
                <div className="space-y-6">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Limited Liability Company (LLC)</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-2">The Limited Liability Company (OOO) is the most common business structure for foreign investors.</p>
                        <p className="text-[17px] text-slate-600 font-medium">Key features include:</p>
                        <ul className="list-disc pl-5 text-[17px] text-slate-600 leading-relaxed">
                            <li>Separate legal entity</li>
                            <li>Limited liability for shareholders</li>
                            <li>Flexible management structure</li>
                            <li>Suitable for small and medium businesses</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Joint Stock Company (JSC)</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-2">A Joint Stock Company allows businesses to issue shares and raise capital from investors.</p>
                        <p className="text-[17px] text-slate-600 font-medium">There are two types:</p>
                        <ul className="list-disc pl-5 text-[17px] text-slate-600 leading-relaxed">
                            <li>Public Joint Stock Company (PJSC)</li>
                            <li>Non-Public Joint Stock Company</li>
                        </ul>
                        <p className="text-[17px] text-slate-600 mt-2">This structure is typically used by larger companies.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Representative Office</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">Foreign companies can establish a representative office in Russia to conduct market research and promote business activities without engaging in commercial operations.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Branch Office</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">A branch office allows foreign companies to conduct business operations in Russia but remains legally dependent on the parent company.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const RussiaIncorporationDocumentsSection = () => {
    const list = [
        "Passport copies of shareholders and directors",
        "Proof of residential address",
        "Company name approval",
        "Memorandum and Articles of Association",
        "Registered office address in Russia",
        "Share capital details",
        "Power of attorney (if applicable)"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Company Registration in Russia
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To incorporate a company in Russia, the following documents are typically required:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed mb-8">
                    {list.map((item, i) => (
                        <li key={i} className="flex items-start">
                             <div className="mr-3 mt-1 text-yellow-400"><Users size={18} /></div>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed">
                    Vyombiz managed by Clink Consultancy Services Private Limited assists businesses in preparing and verifying all required documentation to ensure compliance with Russian corporate laws.
                </p>
            </div>
        </section>
    );
};

const RussiaIncorporationProcessSection = () => {
    const steps = [
        { title: "Choose the Business Structure", desc: "Select the most suitable business entity such as LLC, Joint Stock Company, or branch office." },
        { title: "Reserve the Company Name", desc: "Submit the proposed company name to the Russian registration authority for approval." },
        { title: "Prepare Legal Documents", desc: "Draft the required incorporation documents including company charter and shareholder details." },
        { title: "Register with the Federal Tax Service", desc: "Submit the incorporation application with the Russian Federal Tax Service (FTS) for official registration." },
        { title: "Obtain Tax Identification Number", desc: "After registration, the company receives a Tax Identification Number (TIN) required for business operations." },
        { title: "Open Corporate Bank Account", desc: "A corporate bank account must be opened to manage company finances and share capital deposits." },
        { title: "Register for Taxes and Compliance", desc: "Complete additional tax registrations and compliance requirements depending on the business activities." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for Company Registration in Russia
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The company registration process in Russia generally follows these steps:
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Russia Company Registration Process" className="w-full rounded-lg shadow-sm" />
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

const RussiaIncorporationFeaturesSection = () => {
    const features = [
        { title: "Cost-Effective Solutions", desc: "The cost of incorporating a company depends on multiple factors such as business structure, registration fees, and document preparation. Vyombiz provides transparent pricing for a cost-effective setup." },
        { title: "Business structure consultation", desc: "Expert support to choose the right entity type." },
        { title: "Company name registration", desc: "Assistance with reserving and approving the proposed name." },
        { title: "Preparation of incorporation documents", desc: "Help with drafting company charter and shareholder details." },
        { title: "Government filing and approvals", desc: "We manage submissions to the Federal Tax Service (FTS)." },
        { title: "Assistance with tax registrations", desc: "Obtaining TIN and registering for necessary taxes." },
        { title: "Post-registration compliance support", desc: "Assistance with opening a corporate bank account and operating compliantly." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        How Vyombiz Helps You Register a Company in Russia
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expanding a business internationally involves legal, regulatory, and administrative complexities. Vyombiz managed by Clink Consultancy Services Private Limited provides complete support for global business incorporation, including Russia company formation services.
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
                
                <div className="mt-14 items-center">
                    <h2 className="text-3xl text-center lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Why Choose Vyombiz for Global Company Registration?
                    </h2>
                    <p className="text-[17px] text-center text-slate-600 leading-relaxed font-medium mb-8">
                        Businesses choose Vyombiz managed by Clink Consultancy Services Private Limited for international incorporation because of its reliable and efficient services.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-[#072b47] mb-3">Expert Legal Guidance</h3>
                            <p className="text-[17px] text-slate-600">Our specialists ensure that every step of the incorporation process complies with local regulations.</p>
                        </div>
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-[#072b47] mb-3">End-to-End Assistance</h3>
                            <p className="text-[17px] text-slate-600">From documentation to post-registration compliance, we manage the entire process.</p>
                        </div>
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-[#072b47] mb-3">Transparent Process</h3>
                            <p className="text-[17px] text-slate-600">Clear communication and transparent pricing keep clients informed at every stage.</p>
                        </div>
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-[#072b47] mb-3">Global Expansion Support</h3>
                            <p className="text-[17px] text-slate-600">We help businesses expand internationally with simplified incorporation solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationRussia = () => {

    const faqs = [
        {
            question: "How long does it take to register a company in Russia?",
            answer: "Company registration in Russia typically takes 7–15 business days, depending on document verification and approvals."
        },
        {
            question: "Can foreigners open a company in Russia?",
            answer: "Yes, foreign individuals and companies can establish businesses in Russia, subject to compliance with local laws and regulations."
        },
        {
            question: "What is the minimum capital requirement for an LLC in Russia?",
            answer: "The minimum share capital requirement for a Limited Liability Company (OOO) is usually 10,000 Russian Rubles."
        },
        {
            question: "Do I need a local director in Russia?",
            answer: "While not always mandatory, having a local representative can simplify compliance and operational processes."
        },
        {
            question: "Is Russia a good place to start a business?",
            answer: "Russia offers a large market, industrial strength, and strong trade connectivity, making it attractive for many sectors including manufacturing, energy, and technology."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Russia"
                heroSubtitle="Expand Your Business to Russia with Confidence"
                heroDescription="Russia offers one of the largest consumer markets in Eurasia and a strong industrial ecosystem for global businesses. Start your company in Russia with expert guidance and complete compliance support."
                whatsIncludedList={[
                    "Fast incorporation process",
                    "Legal documentation handled by experts",
                    "End-to-end registration support",
                    "Global expansion made simple"
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

