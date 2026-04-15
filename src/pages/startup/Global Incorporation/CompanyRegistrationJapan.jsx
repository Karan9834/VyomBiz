import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Global Incorporation/Company Registration in Japan/benefits.png";
import overview from "../../../assets/Global Incorporation/Company Registration in Japan/overview.png";
import process from "../../../assets/Global Incorporation/Company Registration in Japan/process.png";


/**
 * CompanyRegistrationJapan Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-japan
 */

const CompanyRegistrationJapanOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Asia Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in Japan – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Japan is one of the most stable and innovation-driven markets in the world. With a strong legal system, advanced infrastructure, and global business reputation, it offers excellent opportunities for entrepreneurs and international companies.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Setting up a company in Japan requires understanding local regulations, business structures, compliance requirements, and registration procedures. With expert assistance, the process becomes efficient, compliant, and strategically structured for long-term success.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited helps global entrepreneurs and businesses establish their presence in Japan through a simplified and legally compliant company incorporation process.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Japan Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationJapanAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why Start a Business in Japan?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Japan continues to be one of the most attractive destinations for foreign investors and entrepreneurs. The country offers a stable economy, high consumer purchasing power, and access to advanced technology and global trade networks.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Japan Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-8">
                        With the right guidance, entrepreneurs can leverage Japan’s highly structured and business-friendly ecosystem.
                    </p>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Stable and Strong Economy", desc: "Japan is the third-largest economy in the world with strong financial stability." },
                        { title: "Global Market Access", desc: "Strategic location in Asia makes it ideal for international trade." },
                        { title: "Advanced Infrastructure", desc: "World-class transportation, logistics, and digital infrastructure." },
                        { title: "Innovation Hub", desc: "A leader in technology, robotics, and research-driven industries." },
                        { title: "Investor Friendly Environment", desc: "Policies encourage foreign investment and global business expansion." }
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

const JapanIncorporationEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Business Structures in Japan
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Choosing the right business structure is the first step when incorporating a company in Japan. Each structure has different legal, financial, and operational implications.
                </p>
                <div className="space-y-6">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Kabushiki Kaisha (KK) – Joint Stock Company</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-2">Kabushiki Kaisha is the most prestigious and widely recognized business structure in Japan. Many large corporations operate under this structure.</p>
                        <ul className="list-disc pl-5 text-[17px] text-slate-600 leading-relaxed">
                            <li>Suitable for medium to large businesses</li>
                            <li>Higher credibility with investors and partners</li>
                            <li>Ability to raise capital through shareholders</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Godo Kaisha (GK) – Limited Liability Company</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-2">Godo Kaisha is similar to an LLC and is often preferred by startups and small businesses.</p>
                        <ul className="list-disc pl-5 text-[17px] text-slate-600 leading-relaxed">
                            <li>Lower setup cost compared to KK</li>
                            <li>Flexible management structure</li>
                            <li>Limited liability for members</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Branch Office</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-2">Foreign companies can establish a branch office to operate directly in Japan without creating a separate legal entity.</p>
                        <ul className="list-disc pl-5 text-[17px] text-slate-600 leading-relaxed">
                            <li>Extension of the parent company</li>
                            <li>Easier operational setup</li>
                            <li>Limited independence compared to incorporated entities</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Representative Office</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-2">A representative office allows foreign companies to conduct market research or promotional activities in Japan without commercial operations.</p>
                        <ul className="list-disc pl-5 text-[17px] text-slate-600 leading-relaxed">
                            <li>No direct revenue generation allowed</li>
                            <li>Ideal for market exploration</li>
                        </ul>
                    </div>
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Vyombiz managed by Clink Consultancy Services Private Limited assists businesses in choosing the most suitable structure based on their expansion strategy and regulatory requirements.
                </p>
            </div>
        </section>
    );
};

const JapanIncorporationDocumentsSection = () => {
    const requirementsList = [
        "Company Name Reservation",
        "Registered Office Address in Japan",
        "Director or Representative Details",
        "Preparation of Articles of Incorporation",
        "Capital Investment",
        "Notarization of Company Documents",
        "Corporate Seal (Hanko)",
        "Registration with the Legal Affairs Bureau"
    ];
    const documentsList = [
        "Passport copies of directors and shareholders",
        "Proof of residential address",
        "Proposed company name and business activity details",
        "Articles of Incorporation",
        "Registered office details",
        "Capital investment proof",
        "Director consent forms"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Requirements for Company Registration in Japan
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To incorporate a company in Japan, certain legal and administrative requirements must be fulfilled. Key requirements include:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed mb-8">
                    {requirementsList.map((item, i) => (
                        <li key={i} className="flex items-start">
                             <div className="mr-3 mt-1 text-yellow-400"><Users size={18} /></div>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-12">
                    Proper documentation and compliance with Japanese corporate laws are essential to ensure a smooth incorporation process.
                </p>

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Japan Company Incorporation
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Businesses and entrepreneurs must submit specific documents during the incorporation process. Typical documents include:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed mb-8">
                    {documentsList.map((item, i) => (
                        <li key={i} className="flex items-start">
                             <div className="mr-3 mt-1 text-yellow-400"><Users size={18} /></div>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed">
                    Document requirements may vary depending on the business structure and shareholder nationality.
                </p>
            </div>
        </section>
    );
};

const JapanIncorporationProcessSection = () => {
    const steps = [
        { title: "Business Structure Selection", desc: "Identify the most suitable company structure such as KK or GK depending on the nature of the business and investment goals." },
        { title: "Company Name Approval", desc: "Choose and verify the company name to ensure it is unique and compliant with Japanese regulations." },
        { title: "Draft Articles of Incorporation", desc: "Prepare and notarize the Articles of Incorporation which define the company’s structure, objectives, and operational rules." },
        { title: "Capital Deposit", desc: "Deposit the initial capital into the designated bank account as required for registration." },
        { title: "Company Registration Filing", desc: "Submit the incorporation documents to the Legal Affairs Bureau for official company registration." },
        { title: "Corporate Seal Registration", desc: "Register the official company seal which is required for legal agreements and documentation in Japan." },
        { title: "Tax and Social Security Registration", desc: "Register the company with the tax authorities and social insurance agencies." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for Company Registration in Japan
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Setting up a company in Japan involves a structured legal procedure. Following the correct process ensures compliance and faster approval.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Japan Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                            With professional assistance, this process becomes faster and fully compliant with Japanese legal standards.
                        </p>
                        
                        <div className="mt-12 bg-[#e6f0fa] rounded-2xl p-8">
                            <h3 className="text-xl font-semibold text-[#072b47] mb-3">Estimated Timeline for Company Registration in Japan</h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                                The registration timeline may vary depending on the business structure and document readiness. Generally, the incorporation process takes 2 to 4 weeks including document preparation, notarization, and approval by the Legal Affairs Bureau.
                            </p>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-semibold">
                                Professional guidance helps avoid delays and ensures faster completion of the registration process.
                            </p>
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

const JapanIncorporationFeaturesSection = () => {
    const features = [
        { title: "Expert consultation", desc: "Expert consultation for international company formation." },
        { title: "End-to-end incorporation", desc: "End-to-end incorporation assistance." },
        { title: "Documentation support", desc: "Documentation and compliance support." },
        { title: "Global business expansion", desc: "Global business expansion guidance." },
        { title: "Transparent process", desc: "Transparent and streamlined process. Our goal is to make global company formation simple, efficient, and fully compliant." }
    ];
    
    const complianceItems = [
        "Corporate tax registration",
        "Consumption tax compliance",
        "Social insurance registration",
        "Employee payroll compliance",
        "Annual financial reporting",
        "Corporate governance requirements"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="mb-14">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Post-Registration Compliance in Japan
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        After company registration, businesses must comply with ongoing legal and tax obligations. Key compliance requirements include:
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        {complianceItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Maintaining proper compliance ensures smooth business operations and avoids legal complications.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Vyombiz managed by Clink Consultancy Services Private Limited supports businesses not only in incorporation but also in maintaining regulatory compliance in Japan.
                    </p>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for Japan Company Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expanding into a new country requires deep understanding of legal procedures, documentation, and regulatory frameworks. Professional assistance helps businesses avoid delays, errors, and compliance issues.
                    </p>
                </div>
                <div>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        With Vyombiz managed by Clink Consultancy Services Private Limited, businesses benefit from:
                    </p>
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
                        Start Your Company Registration in Japan Today
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                        Japan offers a powerful platform for innovation, technology, and global business expansion. Whether you are a startup founder, investor, or international corporation, establishing a company in Japan can open new opportunities in the Asian market.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Connect with Vyombiz managed by Clink Consultancy Services Private Limited to start your Japan company registration process with expert support and a simplified approach to global business incorporation.
                    </p>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationJapan = () => {

    const faqs = [
        {
            question: "What is the minimum capital requirement to set up a company in Japan?",
            answer: "The minimum capital requirement for establishing a company in Japan is just 1 Yen."
        },
        {
            question: "What is the most common type of company structure in Japan?",
            answer: "The most common structures are Godo Kaisha (GK) - Limited Liability Company and Kabushiki Kaisha (KK) - Joint Stock Company."
        },
        {
            question: "Do I need a local registered office address?",
            answer: "Yes, you must have a registered local office address in Japan to incorporate a company."
        },
        {
            question: "What is a 'Hanko' and is it mandatory?",
            answer: "A 'Hanko' is an official company seal used for signing contracts and legal documents. It is a mandatory requirement for companies in Japan."
        },
        {
            question: "Can I obtain a business visa for Japan?",
            answer: "Yes, establishing a company in Japan allows you to apply for a Business Manager Visa (Startup Visa), enabling you to reside and work in Japan."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Japan"
                heroSubtitle="Expand your business into one of Asia’s most advanced economies with expert guidance."
                heroDescription="Japan is one of the most stable and innovation-driven markets in the world. With a strong legal system, advanced infrastructure, and global business reputation, it offers excellent opportunities for entrepreneurs and international companies."
                whatsIncludedList={[
                    "Simplified and legally compliant process",
                    "Expert assistance with documentation",
                    "Strategic business structure guidance",
                    "Post-registration compliance support"
                ]}
                stats={[
                    { count: "3000+", label: "Companies Registered", icon: <Users size={20} /> },
                    { count: "10+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationJapanOverview />}
                advantages={<CompanyRegistrationJapanAdvantages />}
                eligibility={<JapanIncorporationEligibility />}
                documents={<JapanIncorporationDocumentsSection />}
                process={<JapanIncorporationProcessSection />}
                features={<JapanIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in Japan"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationJapan;

