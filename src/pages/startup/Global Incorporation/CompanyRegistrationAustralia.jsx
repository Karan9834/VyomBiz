import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Global Incorporation/Company Registration in Australia/benefits.png"
import overview from "../../../assets/Global Incorporation/Company Registration in Australia/overview.png"
import process from "../../../assets/Global Incorporation/Company Registration in Australia/process.png"
/**
 * CompanyRegistrationAustralia Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-australia
 */

const CompanyRegistrationAustraliaOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Why Start a Business in Australia?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Australia is considered one of the most attractive destinations for global entrepreneurs and investors. Its transparent legal system, strong financial infrastructure, and access to international markets make it an excellent location for business expansion.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Australia consistently ranks high for ease of doing business and provides strong protection for investors and intellectual property. The country offers a stable economy, skilled workforce, and access to the Asia-Pacific region, making it ideal for startups, SMEs, and global companies.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With proper guidance and regulatory compliance, entrepreneurs can quickly establish their presence and begin operating in the Australian market.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited helps businesses navigate the Australian incorporation framework smoothly, ensuring all legal and regulatory requirements are handled efficiently.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Australia Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationAustraliaAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Registering a Company in Australia
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Setting up a company in Australia offers numerous strategic advantages for entrepreneurs and global investors.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Australia Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Access to a Stable Economy", desc: "Australia has a resilient economy with strong growth across industries such as technology, mining, finance, and services." },
                        { title: "Global Market Access", desc: "Businesses can leverage Australia’s trade agreements and geographical proximity to Asia-Pacific markets." },
                        { title: "Strong Legal Framework", desc: "The country provides transparent corporate laws and strong investor protection." },
                        { title: "Reputation and Credibility", desc: "An Australian registered company often enhances business credibility in international markets." },
                        { title: "Support for Startups and Innovation", desc: "Australia actively encourages innovation through various government initiatives and funding programs." }
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
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-6">
                        Vyombiz managed by Clink Consultancy Services Private Limited assists businesses in leveraging these benefits by ensuring a smooth and compliant registration process.
                    </p>
                </div>
            </div>
        </div>
    );
};

const AustraliaIncorporationEligibility = () => {
    const list = [
        { title: "Private Company (Pty Ltd)", desc: "A Private Limited Company is the most common business structure in Australia. It offers limited liability protection and is suitable for startups and growing businesses. Key features include: requires at least one director residing in Australia, shareholders’ liability is limited to their share capital, and cannot raise funds from the public." },
        { title: "Public Company (Ltd)", desc: "Public companies are designed for larger businesses planning to raise capital from the public through shares. Key features include: minimum three directors required, higher regulatory compliance, and suitable for large-scale enterprises and publicly traded companies." },
        { title: "Branch Office of Foreign Company", desc: "Foreign companies that wish to operate in Australia without incorporating a separate legal entity can register as a branch office. This structure allows international companies to directly conduct business activities in Australia while remaining legally connected to the parent company." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Companies in Australia
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Choosing the right company structure is crucial when registering a business in Australia. The structure determines your compliance obligations, tax responsibilities, and operational flexibility.
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
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Choose Your Company Type
                    </Link>
                </div>
            </div>
        </section>
    );
};

const AustraliaIncorporationDocumentsSection = () => {
    const list = [
        "Proposed company name",
        "Details of directors and shareholders",
        "Registered office address in Australia",
        "Identification documents of directors and shareholders",
        "Share capital structure",
        "Business activity description"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Company Registration in Australia
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To incorporate a company in Australia, certain documents and information are required for regulatory submission. Typical documentation includes:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-8">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed">
                    Our experts ensure that all documents are properly prepared and submitted to avoid delays or compliance issues.
                </p>
            </div>
        </section>
    );
};

const AustraliaIncorporationProcessSection = () => {
    const steps = [
        { title: "Choose a Company Name", desc: "Select a unique company name that complies with ASIC naming rules." },
        { title: "Prepare Company Details", desc: "Provide details of directors, shareholders, company address, and share structure." },
        { title: "Document Preparation", desc: "Draft and prepare incorporation documents including consent forms and company constitution if required." },
        { title: "ASIC Registration", desc: "Submit the application to ASIC for company registration and approval." },
        { title: "Receive ACN", desc: "Once approved, the company receives its Australian Company Number (ACN) and becomes legally registered." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for Company Registration in Australia
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The company incorporation process in Australia involves registration with the Australian Securities and Investments Commission (ASIC) along with fulfilling regulatory requirements.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Australia Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited manages the entire incorporation process to ensure accuracy and timely approval.
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

const AustraliaIncorporationFeaturesSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-14">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Compliance Requirements After Company Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        After incorporation, businesses must follow certain ongoing compliance requirements in Australia. These include:
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        <li>Maintaining company records and registers</li>
                        <li>Filing annual statements with ASIC</li>
                        <li>Maintaining a registered office address</li>
                        <li>Updating ASIC about any changes in company structure</li>
                        <li>Meeting taxation and financial reporting requirements</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Proper compliance ensures the company remains legally operational and avoids penalties.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        How Vyombiz Helps with Company Registration in Australia
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Registering a company in another country can be complex due to legal and documentation requirements. With expert assistance, the process becomes faster and more reliable.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Vyombiz managed by Clink Consultancy Services Private Limited provides comprehensive support for global company incorporation. Our specialists assist businesses through every stage of the registration process, from documentation to compliance management.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Our services include:
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        <li>Company name availability check</li>
                        <li>Preparation of incorporation documents</li>
                        <li>Filing with Australian authorities</li>
                        <li>Regulatory compliance guidance</li>
                        <li>Post-registration support</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        With a structured approach and expert knowledge of international incorporation frameworks, we help businesses establish their presence in Australia with confidence.
                    </p>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationAustralia = () => {

    const faqs = [
        {
            question: "How long does it take to register a company in Australia?",
            answer: "Company registration in Australia typically takes 1–3 business days once all documents are submitted correctly."
        },
        {
            question: "Can a foreigner start a company in Australia?",
            answer: "Yes, foreign entrepreneurs can register a company in Australia. However, at least one director must be an Australian resident."
        },
        {
            question: "What is the minimum capital required?",
            answer: "Australia does not impose a strict minimum capital requirement for company registration, making it easier for startups to begin operations."
        },
        {
            question: "Do I need a local address in Australia?",
            answer: "Yes, every company must have a registered office address located in Australia for official correspondence."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Start Your Australian Business"
                heroTitleSuffix="the Smart Way"
                heroSubtitle="Company Registration in Australia"
                heroDescription="Expand globally by registering your company in Australia — one of the world’s most stable and business-friendly economies. From company incorporation to compliance support, we simplify the entire process so you can focus on growing your business."
                whatsIncludedList={[
                    "Fast & compliant company registration",
                    "Expert assistance with ASIC regulations",
                    "End-to-end support from documentation to incorporation"
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationAustraliaOverview />}
                advantages={<CompanyRegistrationAustraliaAdvantages />}
                eligibility={<AustraliaIncorporationEligibility />}
                documents={<AustraliaIncorporationDocumentsSection />}
                process={<AustraliaIncorporationProcessSection />}
                features={<AustraliaIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Australian Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationAustralia;

