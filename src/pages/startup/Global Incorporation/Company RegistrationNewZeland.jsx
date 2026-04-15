import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Global Incorporation/Company Registration in Newzealand/benefits.png"
import overview from "../../../assets/Global Incorporation/Company Registration in Newzealand/overview.png"
import process from "../../../assets/Global Incorporation/Company Registration in Newzealand/process.png"

/**
 * Company RegistrationNewZeland Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-new-zealand
 */

const CompanyRegistrationNewZealandOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Global Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in New Zealand – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Expand your business into one of the world’s most business-friendly economies. New Zealand offers a transparent regulatory system, quick company formation, and global credibility for entrepreneurs and investors.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With Vyombiz managed by Clink Consultancy Services Private Limited, you get expert guidance to register your company in New Zealand smoothly—without navigating complex legal processes alone.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why Start a Company in New Zealand?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            New Zealand consistently ranks among the top countries globally for ease of doing business. Its stable economy, supportive government policies, and digital-friendly registration process make it an attractive destination for international entrepreneurs.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Key advantages include fast company registration, strong global reputation for transparency, access to international markets through strategic trade agreements, and 100% foreign ownership allowed in most sectors. For startups, SMEs, and global businesses, New Zealand offers a reliable and growth-focused environment.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Registering your company in New Zealand offers several strategic advantages for international businesses.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="New Zealand Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Strong Business Environment", desc: "New Zealand has a transparent legal system and a stable political environment that supports business growth." },
                        { title: "Simplified Compliance", desc: "The country has streamlined regulatory procedures, allowing companies to focus more on business development than administrative complexities." },
                        { title: "Global Trade Opportunities", desc: "New Zealand’s extensive trade relationships provide access to key markets across Asia-Pacific and beyond." },
                        { title: "Innovation-Driven Economy", desc: "The country supports innovation, technology, and startups through various initiatives and business-friendly policies." }
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
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Business Entities in New Zealand
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Choosing the right structure is crucial for legal protection, taxation, and operational flexibility.
                </p>
                <div className="space-y-6">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">1. Limited Liability Company (LLC)</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-2">The most common structure used by businesses in New Zealand.</p>
                        <p className="text-[17px] text-slate-600 font-medium">Features include:</p>
                        <ul className="list-disc pl-5 text-[17px] text-slate-600 leading-relaxed">
                            <li>Separate legal identity from shareholders</li>
                            <li>Limited liability protection</li>
                            <li>Flexible management structure</li>
                            <li>Suitable for startups and international investors</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">2. Branch Office</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-2">Foreign companies may establish a branch of their existing business in New Zealand.</p>
                        <p className="text-[17px] text-slate-600 font-medium">Key characteristics:</p>
                        <ul className="list-disc pl-5 text-[17px] text-slate-600 leading-relaxed">
                            <li>Parent company retains full control</li>
                            <li>No separate legal entity</li>
                            <li>Must comply with New Zealand reporting obligations</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">3. Subsidiary Company</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-2">A foreign business can register a New Zealand subsidiary as a separate legal entity.</p>
                        <p className="text-[17px] text-slate-600 font-medium">Benefits include:</p>
                        <ul className="list-disc pl-5 text-[17px] text-slate-600 leading-relaxed">
                            <li>Independent legal structure</li>
                            <li>Limited liability protection</li>
                            <li>Greater credibility in the local market</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">4. Partnership</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">Suitable for businesses owned by two or more partners sharing profits and responsibilities. However, partners may have unlimited liability, depending on the partnership type.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const NewZealandIncorporationDocumentsSection = () => {
    const eligibilityList = [
        "At least one shareholder",
        "Minimum one director (in some cases a resident director may be required)",
        "A registered office address in New Zealand",
        "Unique company name approval",
        "Compliance with local regulatory guidelines"
    ];
    const list = [
        "Passport copy of directors and shareholders",
        "Proof of residential address",
        "Proposed company name",
        "Details of shareholders and shareholding structure",
        "Business activity description",
        "Registered office address in New Zealand"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility for Company Registration
                </h2>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed mb-10">
                    {eligibilityList.map((item, i) => (
                        <li key={i} className="flex items-start">
                             <div className="mr-3 mt-1 text-yellow-400"><Users size={18} /></div>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    These requirements may vary depending on the company structure and business activity.
                </p>

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for New Zealand Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Proper documentation is essential for a smooth incorporation process. Commonly required documents include:
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
                    Additional documents may be required based on regulatory checks.
                </p>
            </div>
        </section>
    );
};

const NewZealandIncorporationProcessSection = () => {
    const steps = [
        { title: "Company Name Reservation", desc: "A unique company name must be selected and approved by the New Zealand Companies Office." },
        { title: "Preparation of Incorporation Documents", desc: "All required legal and compliance documents are prepared and verified." },
        { title: "Director and Shareholder Registration", desc: "Details of directors and shareholders are submitted to the authorities." },
        { title: "Filing with the Companies Office", desc: "The company incorporation application is submitted digitally to the regulatory authority." },
        { title: "Company Incorporation Certificate", desc: "Once approved, the business receives its Certificate of Incorporation, confirming legal registration." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for Company Registration in New Zealand
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Understanding the incorporation process helps businesses plan efficiently.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="New Zealand Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                        
                        <div className="mt-12 bg-[#e6f0fa] rounded-2xl p-8">
                            <h3 className="text-xl font-semibold text-[#072b47] mb-4">Post-Registration Compliance Requirements</h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed mb-4">After incorporation, companies must comply with certain ongoing obligations. These may include:</p>
                            <ul className="list-disc pl-5 space-y-2 text-[17px] text-slate-600 leading-relaxed mb-4">
                                <li>Maintaining company records</li>
                                <li>Filing annual returns</li>
                                <li>Keeping financial statements updated</li>
                                <li>Complying with taxation regulations</li>
                                <li>Updating any changes in company structure</li>
                            </ul>
                            <p className="text-[17px] text-slate-600 leading-relaxed">Ensuring compliance helps maintain the company’s good standing with authorities.</p>
                        </div>
                        
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

const NewZealandIncorporationFeaturesSection = () => {
    const features = [
        { title: "Expert consultation", desc: "Expert consultation on the best business structure." },
        { title: "Assistance with documentation", desc: "Assistance with documentation and filings." },
        { title: "End-to-end support", desc: "End-to-end support for international company registration." },
        { title: "Transparent process", desc: "Transparent process and professional guidance." },
        { title: "Post-registration support", desc: "Support for post-registration compliance." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for New Zealand Company Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Setting up a company overseas involves legal, regulatory, and compliance challenges. Professional support ensures the process remains smooth and efficient. Vyombiz managed by Clink Consultancy Services Private Limited provides structured support for global business incorporation.
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
                
                <div className="mt-14 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm text-center">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Start Your New Zealand Business Journey Today
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                        New Zealand offers a modern, transparent, and globally respected business environment. Whether you’re launching a startup or expanding internationally, incorporating a company here can open new opportunities.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                        With the right guidance and structured approach, your business can establish a strong presence in New Zealand.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-semibold">
                        Get started with Vyombiz managed by Clink Consultancy Services Private Limited and take the first step toward global business expansion.
                    </p>
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
                heroSubtitle="Start Your New Zealand Business with Confidence"
                heroDescription="Expand your business into one of the world’s most business-friendly economies. New Zealand offers a transparent regulatory system, quick company formation, and global credibility for entrepreneurs and investors."
                whatsIncludedList={[
                    "Fast company registration",
                    "Business-friendly regulations",
                    "Strong global reputation",
                    "Access to international markets"
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

