import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import polandBenefits from "../../../assets/Global Incorporation/Company Registration in Poland/benefits.png";
import polandOverview from "../../../assets/Global Incorporation/Company Registration in Poland/overview.png";
import polandProcess from "../../../assets/Global Incorporation/Company Registration in Poland/process.png";

/**
 * CompanyRegistrationPoland Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-poland
 */

const CompanyRegistrationPolandOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Why Start a Business in Poland?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Poland has become one of the most attractive business destinations in Europe due to its stable economy, strategic location, and business-friendly policies. Entrepreneurs and global companies choose Poland to access the European Union market while benefiting from competitive operational costs.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Some of the key reasons businesses prefer Poland include:
                        </p>
                        <ul className="space-y-4 mb-6 text-[17px] text-slate-600 leading-relaxed font-medium list-disc list-inside">
                            <li>Access to the European Union single market</li>
                            <li>A rapidly growing digital and technology sector</li>
                            <li>Highly skilled and educated workforce</li>
                            <li>Competitive corporate tax rates</li>
                            <li>Strong infrastructure and logistics network</li>
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Businesses across industries—from technology startups to manufacturing firms—are increasingly establishing operations in Poland to scale within Europe.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Through Vyombiz managed by Clink Consultancy Services Private Limited, entrepreneurs and international investors can simplify the process of company incorporation while ensuring full compliance with Polish regulations.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={polandOverview}
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
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Company Registration in Poland
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Registering a company in Poland offers multiple advantages for businesses planning to expand internationally.
                    </p>
                    <div className="mt-10">
                        <img
                            src={polandBenefits}
                            alt="Poland Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-8">
                        With professional assistance from Vyombiz managed by Clink Consultancy Services Private Limited, businesses can establish their presence in Poland quickly while focusing on growth and market expansion.
                    </p>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Access to the European Market", desc: "A Polish company allows businesses to operate across all EU member states, making it an ideal gateway to the European economy." },
                        { title: "Competitive Tax Structure", desc: "Poland offers corporate tax benefits along with incentives for startups, innovation, and research-driven businesses." },
                        { title: "Skilled Workforce", desc: "Poland has a strong talent pool in engineering, IT, manufacturing, and finance sectors, making it an attractive destination for global businesses." },
                        { title: "Strategic Geographic Location", desc: "Located at the center of Europe, Poland provides strong connectivity to Western Europe, Eastern Europe, and Nordic markets." },
                        { title: "Growing Startup Ecosystem", desc: "Poland has rapidly emerged as a startup hub with government support programs and funding opportunities." }
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
        { title: "Limited Liability Company (Sp. z o.o.)", desc: "This is the most popular type of company structure in Poland. It offers limited liability protection to shareholders and is ideal for startups, SMEs, and foreign investors entering the Polish market." },
        { title: "Joint Stock Company (S.A.)", desc: "This structure is typically used by larger businesses planning to raise capital through public or institutional investments. It requires higher share capital and more complex governance." },
        { title: "Branch Office", desc: "Foreign companies can open a branch office in Poland to conduct the same activities as their parent company while operating under Polish law." },
        { title: "Representative Office", desc: "A representative office is mainly used for marketing, promotion, and research activities rather than direct commercial operations." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Companies You Can Register in Poland
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Choosing the right business structure is essential before starting the registration process. Poland offers several company structures depending on the nature, scale, and ownership of the business.
                </p>
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <p key={i}>
                            <span className="font-semibold text-[#072b47]">{item.title} – </span>
                            {item.desc}
                        </p>
                    ))}
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Experts at Vyombiz managed by Clink Consultancy Services Private Limited help businesses evaluate the best structure based on their expansion strategy and compliance requirements.
                </p>
                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Choose Your Company Structure
                            </Link>
                </div>
            </div>
        </section>
    );
};

const PolandIncorporationDocumentsSection = () => {
    const list = [
        "Passport copies of directors and shareholders",
        "Proof of residential address",
        "Company name and business activity details",
        "Shareholding structure information",
        "Registered office address in Poland",
        "Articles of Association"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Company Registration in Poland
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The documentation process is a critical part of company incorporation in Poland. Proper documentation ensures a smooth and legally compliant registration process. Typical documents required include:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Depending on the chosen company structure and shareholder composition, additional documents may also be required. Professional support from Vyombiz managed by Clink Consultancy Services Private Limited ensures that documentation is accurately prepared and submitted to the relevant authorities.
                </p>
            </div>
        </section>
    );
};

const PolandIncorporationProcessSection = () => {
    const steps = [
        { title: "Business Structure Selection", desc: "Choose the most suitable company structure based on your business objectives and expansion plans." },
        { title: "Company Name Reservation", desc: "Verify and reserve the company name to ensure it is unique and compliant with Polish naming regulations." },
        { title: "Drafting Legal Documents", desc: "Prepare the Articles of Association and other incorporation documents required for registration." },
        { title: "Share Capital Deposit", desc: "Deposit the minimum required share capital depending on the company structure." },
        { title: "Registration with the National Court Register", desc: "Submit incorporation documents to the Polish National Court Register (KRS) for official company registration." },
        { title: "Tax and VAT Registration", desc: "After registration, businesses must obtain tax identification numbers and complete VAT registration if applicable." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Company Registration Process in Poland
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Registering a company in Poland involves several legal and administrative steps. A structured approach ensures faster approval and compliance with Polish business regulations.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={polandProcess} alt="Poland Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                            With end-to-end assistance from Vyombiz managed by Clink Consultancy Services Private Limited, businesses can complete the registration process smoothly while avoiding delays and compliance issues.
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

const PolandIncorporationFeaturesSection = () => {
    const complianceItems = [
        "Maintaining proper accounting records",
        "Filing annual financial statements",
        "Corporate tax compliance",
        "VAT filings (if applicable)",
        "Maintaining a registered office address"
    ];

    const services = [
        "Complete company incorporation support",
        "Documentation and legal compliance assistance",
        "International business advisory",
        "Post-incorporation compliance services",
        "Dedicated expert support throughout the process"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Compliance Requirements After Company Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Once a company is registered in Poland, businesses must comply with several ongoing legal and regulatory obligations. Key compliance requirements include:
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        {complianceItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Ensuring compliance is essential to maintain the company’s legal standing and operational stability in Poland.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Businesses partnering with Vyombiz managed by Clink Consultancy Services Private Limited receive continuous guidance to manage post-registration compliance efficiently.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Why Choose Vyombiz for Company Registration in Poland?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Expanding your business internationally requires expert guidance, accurate documentation, and strong compliance support. Choosing the right partner can make the entire process faster and more reliable.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Vyombiz managed by Clink Consultancy Services Private Limited provides comprehensive global incorporation services designed for startups, entrepreneurs, and established businesses. Our services include:
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        {services.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Our goal is to help businesses establish their international presence smoothly while focusing on growth and opportunities in global markets.
                    </p>
                </div>

                <div className="bg-[#e6f0fa] rounded-2xl p-8 lg:p-12 text-center">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Start Your Company Registration in Poland Today
                    </h2>
                    <p className="text-[17px] text-slate-700 leading-relaxed max-w-4xl mx-auto mb-6">
                        Entering the European market begins with the right foundation. Establish your company in Poland with expert assistance and a seamless registration process.
                    </p>
                    <p className="text-[17px] text-slate-700 leading-relaxed max-w-4xl mx-auto mb-8">
                        Connect with professionals at Vyombiz managed by Clink Consultancy Services Private Limited and take the first step toward building your global business presence.
                    </p>
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
                heroTitleMain="Start Your Business in Poland with"
                heroTitleSuffix="Confidence"
                heroSubtitle="Build your European presence today."
                heroDescription="Expand your business into one of Europe’s fastest-growing economies. Register your company in Poland with expert support, complete compliance guidance, and a seamless incorporation process."
                whatsIncludedList={[
                    "100% Compliant Registration",
                    "Expert Documentation Support",
                    "Fast & Transparent Process"
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

