import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Global Incorporation/Company Registration in South Africa/benefits.png";
import overview from "../../../assets/Global Incorporation/Company Registration in South Africa/overview.png";
import process from "../../../assets/Global Incorporation/Company Registration in South Africa/process.png";

/**
 * CompanyRegistrationSouthAfrica Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-south-africa
 */

const CompanyRegistrationSouthAfricaOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            African Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in South Africa – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Expanding into South Africa opens doors to one of Africa’s most dynamic and business-friendly economies. From strong financial infrastructure to access to global markets, the country offers excellent opportunities for entrepreneurs and global investors.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With the right guidance, the company registration process becomes simple, compliant, and fast.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz helps entrepreneurs and global businesses establish their presence in South Africa smoothly with expert legal and compliance support.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="South Africa Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationSouthAfricaAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why Start a Business in South Africa?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        South Africa is considered one of the most developed and investor-friendly economies in Africa. Its strong legal system, financial markets, and strategic geographic location make it a gateway to the African continent.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="South Africa Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Access to African and global markets", desc: "A strategic geographic location makes it a gateway to the African continent." },
                        { title: "Well-regulated framework", desc: "Benefit from a well-regulated corporate and legal framework." },
                        { title: "Developed infrastructure", desc: "Access to highly developed banking and financial infrastructure." },
                        { title: "Skilled workforce", desc: "A strong entrepreneurial ecosystem and skilled workforce." },
                        { title: "Diverse Opportunities", desc: "Opportunities across industries such as mining, technology, finance, agriculture, and manufacturing." }
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

const SouthAfricaIncorporationEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Companies in South Africa
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before starting the registration process, it is important to select the right business structure. Each structure serves different business goals, ownership models, and compliance requirements.
                </p>
                <div className="space-y-6">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Private Company (Pty Ltd)</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-2">This is the most commonly registered business structure in South Africa. A Private Company limits liability for shareholders and is suitable for startups, SMEs, and international businesses.</p>
                        <p className="text-[17px] text-slate-600 font-medium">Key Features:</p>
                        <ul className="list-disc pl-5 text-[17px] text-slate-600 leading-relaxed">
                            <li>Limited liability for shareholders</li>
                            <li>Requires at least one director</li>
                            <li>No restriction on nationality of shareholders</li>
                            <li>Ideal for small and medium enterprises</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Public Company (Ltd)</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-2">Public companies are suitable for large businesses planning to raise capital from the public through stock exchanges.</p>
                        <p className="text-[17px] text-slate-600 font-medium">Key Features:</p>
                        <ul className="list-disc pl-5 text-[17px] text-slate-600 leading-relaxed">
                            <li>Shares can be publicly traded</li>
                            <li>Higher regulatory and compliance requirements</li>
                            <li>Suitable for large-scale businesses</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Non-Profit Company (NPC)</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-2">This structure is ideal for organizations working towards social, cultural, or charitable objectives.</p>
                        <p className="text-[17px] text-slate-600 font-medium">Key Features:</p>
                        <ul className="list-disc pl-5 text-[17px] text-slate-600 leading-relaxed">
                            <li>Focus on public benefit activities</li>
                            <li>Profits cannot be distributed to members</li>
                            <li>Commonly used by NGOs and social organizations</li>
                        </ul>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Branch Office</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">Foreign companies can establish a branch office in South Africa to operate locally while remaining part of the parent organization.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SouthAfricaIncorporationDocumentsSection = () => {
    const list = [
        "Passport copies of directors and shareholders",
        "Proof of residential address",
        "Proposed company name",
        "Business activity details",
        "Shareholding structure",
        "Registered office address in South Africa"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To register a company in South Africa, certain documents and information are required for verification and regulatory approval. Typical documents include:
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
                    Accurate documentation ensures faster registration and compliance with regulatory authorities.
                </p>
            </div>
        </section>
    );
};

const SouthAfricaIncorporationProcessSection = () => {
    const steps = [
        { title: "Company Name Reservation", desc: "The process begins with selecting and reserving a unique company name with the relevant regulatory authority." },
        { title: "Preparation of Incorporation Documents", desc: "All legal incorporation documents are prepared, including shareholder details, business activities, and governance structure." },
        { title: "Filing with the Regulatory Authority", desc: "The company registration application is submitted along with required documents for approval." },
        { title: "Company Registration Certificate", desc: "Once approved, the company receives an official registration certificate confirming its legal existence." },
        { title: "Post-Registration Compliance", desc: "After incorporation, businesses may need to complete additional steps such as tax registration, opening a business bank account, and regulatory compliance filings." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for Company Registration in South Africa
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Registering a company involves several steps, including name approval, regulatory filings, and compliance documentation.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="South Africa Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                        
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-8 font-medium">
                            Through this process, Vyombiz managed by Clink Consultancy Services Private Limited assists businesses in handling documentation, regulatory requirements, and end-to-end incorporation support.
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

const SouthAfricaIncorporationFeaturesSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <h2 className="text-3xl text-center lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Benefits of Registering Your Company with Expert Assistance
                </h2>
                <p className="text-[17px] text-center text-slate-600 leading-relaxed font-medium mb-8">
                    Starting a company in another country requires proper legal knowledge and regulatory understanding. Professional assistance ensures that your business remains compliant while saving time and effort.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Faster Registration</h3>
                        <p className="text-[17px] text-slate-600">Faster company registration process and expert handling of legal documentation.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Compliance</h3>
                        <p className="text-[17px] text-slate-600">Compliance with South African corporate regulations and reduced risk of application rejection.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm md:col-span-2">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">End-to-End Support</h3>
                        <p className="text-[17px] text-slate-600">End-to-end support for global entrepreneurs. With professional guidance, businesses can focus on growth while the compliance process is handled efficiently.</p>
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for South Africa Company Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expanding your business internationally requires trusted expertise and a streamlined approach to global incorporation. Vyombiz managed by Clink Consultancy Services Private Limited supports entrepreneurs and companies looking to establish operations in South Africa with reliable legal and compliance services.
                    </p>
                </div>
                <div className="mb-14">
                    {[
                        { title: "Expert Support", desc: "Expert support for global company formation." },
                        { title: "Complete Assistance", desc: "Complete assistance from documentation to incorporation." },
                        { title: "Structured Registration", desc: "Simplified and structured registration process." },
                        { title: "Compliance-Focused", desc: "Compliance-focused approach to international business expansion." },
                        { title: "Dedicated Support", desc: "Dedicated support for entrepreneurs and growing businesses. This ensures that businesses entering the South African market can start operations smoothly and confidently." }
                    ].map((feature, index) => (
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
                
                <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm text-center">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Start Your South Africa Company Registration Today
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                        South Africa offers a powerful platform for entrepreneurs looking to expand into African markets. With the right strategy and professional guidance, setting up a company can be quick and hassle-free.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                        Vyombiz managed by Clink Consultancy Services Private Limited helps businesses navigate the legal and compliance landscape while ensuring a seamless incorporation experience.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-semibold">
                        Start your global expansion journey today with expert company registration support.
                    </p>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationSouthAfrica = () => {

    const faqs = [
        {
            question: "What is the list of documents required for online company registration in South Africa?",
            answer: "The required documents include a copy of identity card or passport, address proof, company name, and company details."
        },
        {
            question: "What are the benefits of company registration in South Africa?",
            answer: "Benefits include tax incentives, subsidies, R&D refunds, access to over 100 tax treaties, government support for skill development, and it serves as a gateway to African markets."
        },
        {
            question: "What is the taxation structure for businesses in South Africa?",
            answer: "Companies must register with SARS. Taxes include Corporate Income Tax (28%), VAT, Skills Development Levy (SDL), Unemployment Insurance Fund (UIF), and Pay As You Earn (PAYE)."
        },
        {
            question: "Can a foreign national be a director of a South African company?",
            answer: "Yes, there are no residency requirements for directors of a Private Company (Pty Ltd). However, a company must appoint a public official who is a resident of South Africa."
        },
        {
            question: "How long does it take to register a company in South Africa?",
            answer: "With VyomBiz's assistance, the process is expedited. Once all documents are submitted, CIPC registration is typically completed swiftly."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in South Africa"
                heroSubtitle="Start Your Business in South Africa with Confidence"
                heroDescription="Expanding into South Africa opens doors to one of Africa’s most dynamic and business-friendly economies. From strong financial infrastructure to access to global markets, the country offers excellent opportunities for entrepreneurs and global investors."
                whatsIncludedList={[
                    "Access to African and global markets",
                    "Well-regulated corporate and legal framework",
                    "Developed banking and financial infrastructure",
                    "Skilled workforce and entrepreneurial ecosystem"
                ]}
                stats={[
                    { count: "500+", label: "Registrations Completed", icon: <Building2 size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Users size={20} /> }, // Sourced from content
                    { count: "50+", label: "Branch Offices", icon: <Briefcase size={20} /> }     // Sourced from content
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationSouthAfricaOverview />}
                advantages={<CompanyRegistrationSouthAfricaAdvantages />}
                eligibility={<SouthAfricaIncorporationEligibility />}
                documents={<SouthAfricaIncorporationDocumentsSection />}
                process={<SouthAfricaIncorporationProcessSection />}
                features={<SouthAfricaIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about South Africa Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationSouthAfrica;

