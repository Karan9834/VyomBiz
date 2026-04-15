import { Link } from "react-router-dom";
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
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is UK Company Registration?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            UK company registration is the legal process of incorporating a business with Companies House, the official registrar of companies in the United Kingdom. Once incorporated, your company becomes a separate legal entity capable of operating internationally, opening business bank accounts, entering contracts, and building credibility in global markets.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Many entrepreneurs choose the UK as a business destination because of its business-friendly regulations, strong financial ecosystem, and global credibility. The most common business structure is the Private Limited Company (Ltd), which offers limited liability protection and operational flexibility.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited simplifies this process by assisting entrepreneurs, startups, and global founders with the documentation, compliance, and registration procedures required to establish a company in the UK.
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
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why Register a Company in the UK?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The United Kingdom is one of the most attractive destinations for global entrepreneurs. A UK-registered company provides international credibility and access to global markets.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80"
                            alt="UK Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-8">
                        Vyombiz managed by Clink Consultancy Services Private Limited helps businesses leverage these advantages through a streamlined incorporation process.
                    </p>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Global Business Reputation", desc: "UK companies are widely trusted worldwide, helping businesses build credibility with investors, clients, and financial institutions." },
                        { title: "Easy Company Formation", desc: "The UK offers one of the fastest and simplest incorporation systems with minimal regulatory barriers." },
                        { title: "Limited Liability Protection", desc: "A private limited company protects the personal assets of shareholders and directors." },
                        { title: "International Market Access", desc: "Operating through a UK company allows easier entry into European and international markets." },
                        { title: "Strong Financial Ecosystem", desc: "Businesses gain access to advanced banking, fintech solutions, and global payment systems." },
                        { title: "Flexible Business Ownership", desc: "Non-UK residents can register and operate companies in the UK without physical presence." }
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
    const types = [
        { title: "Private Limited Company (Ltd)", desc: "The most popular company structure. Shareholders have limited liability, and the company operates as a separate legal entity." },
        { title: "Public Limited Company (PLC)", desc: "Suitable for large organizations planning to raise capital through public shares." },
        { title: "Limited Liability Partnership (LLP)", desc: "A partnership structure where partners have limited liability protection." },
        { title: "Sole Trader", desc: "A simple business structure for individual entrepreneurs operating independently." },
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Companies You Can Register in the UK
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Understanding the company structure is important before incorporation. The UK offers several business structures depending on the business model.
                </p>
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    {types.map((item, i) => (
                        <p key={i}>
                            <span className="font-semibold text-[#072b47]">{item.title} – </span>
                            {item.desc}
                        </p>
                    ))}
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Most international entrepreneurs choose the Private Limited Company (Ltd) due to its flexibility, credibility, and limited liability protection.
                </p>
                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Check Your Eligibility Now
                            </Link>
                </div>
            </div>
        </section>
    );
};

const UKIncorporationDocumentsSection = () => {
    const list = [
        "Passport copy of directors and shareholders",
        "Proof of residential address",
        "Proposed company name",
        "UK registered office address",
        "Details of company share structure",
        "Director and shareholder information"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for UK Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The documentation process is straightforward but must comply with Companies House requirements. Basic documents include:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Vyombiz managed by Clink Consultancy Services Private Limited assists in organizing and verifying these documents to ensure smooth submission.
                </p>
            </div>
        </section>
    );
};

const UKIncorporationProcessSection = () => {
    const steps = [
        { title: "Company Name Approval", desc: "Selecting a unique company name that complies with Companies House naming guidelines." },
        { title: "Preparing Incorporation Documents", desc: "Drafting essential documents such as the Memorandum of Association and Articles of Association." },
        { title: "Director & Shareholder Registration", desc: "Providing personal details of directors and shareholders along with share allocation." },
        { title: "Registered Office Setup", desc: "Establishing a valid UK registered office address for official communication." },
        { title: "Filing with Companies House", desc: "Submitting the application and required documents to the UK Companies House for approval." },
        { title: "Certificate of Incorporation", desc: "Once approved, the company receives the official Certificate of Incorporation, confirming the company’s legal existence." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for UK Company Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Registering a company in the UK involves a structured process. With expert assistance, the procedure becomes quick and seamless.
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
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                            Vyombiz managed by Clink Consultancy Services Private Limited manages each step efficiently to ensure timely company formation.
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

const UKIncorporationFeaturesSection = () => {
    const benefits = [
        { title: "Faster Incorporation", desc: "Expert support speeds up the entire company registration process." },
        { title: "Error-Free Documentation", desc: "Professionals ensure that all filings and documentation meet Companies House requirements." },
        { title: "Compliance Support", desc: "Stay compliant with UK corporate regulations and filing obligations." },
        { title: "Business Expansion Support", desc: "Assistance beyond registration including compliance, documentation, and business advisory." }
    ];

    const suitableFor = [
        "International startups expanding globally",
        "E-commerce and digital businesses",
        "Freelancers and consultants serving global clients",
        "Technology startups and SaaS companies",
        "Investors seeking a global corporate presence"
    ];

    const whyChooseUs = [
        "Expert global incorporation support",
        "Transparent process with clear guidance",
        "Fast and efficient documentation handling",
        "Dedicated assistance for international founders",
        "Reliable compliance and advisory support"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Benefits of Registering Your UK Company with Professional Assistance
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Starting a company internationally involves regulatory requirements and compliance standards. Professional guidance ensures accuracy and efficiency throughout the process.
                    </p>
                    <div className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">{index + 1}.</div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">{benefit.title}</h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-slate-200" />
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                        Vyombiz managed by Clink Consultancy Services Private Limited provides comprehensive support to entrepreneurs looking to establish their presence in the United Kingdom.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Who Should Register a UK Company?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        UK company registration is suitable for a wide range of business professionals and entrepreneurs.
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        {suitableFor.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        For businesses aiming to operate internationally, the UK offers one of the most efficient and trusted incorporation environments.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Why Choose Vyombiz for UK Company Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Choosing the right incorporation partner simplifies global business expansion.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Vyombiz managed by Clink Consultancy Services Private Limited provides end-to-end assistance, ensuring that entrepreneurs can focus on business growth while the legal and compliance aspects are handled professionally.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6 font-semibold">Key advantages include:</p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        {whyChooseUs.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Our goal is to make global company formation simple, accessible, and efficient for modern entrepreneurs.
                    </p>
                </div>

                <div className="bg-[#e6f0fa] rounded-2xl p-8 lg:p-12 text-center">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Start Your UK Company Today
                    </h2>
                    <p className="text-[17px] text-slate-700 leading-relaxed max-w-4xl mx-auto mb-6">
                        Expanding your business globally begins with the right legal foundation. Incorporate your company in the United Kingdom and unlock international opportunities with a trusted incorporation partner.
                    </p>
                    <p className="text-[17px] text-slate-700 leading-relaxed max-w-4xl mx-auto mb-8">
                        Vyombiz managed by Clink Consultancy Services Private Limited simplifies the entire process so you can focus on building and growing your global business.
                    </p>
                    <p className="text-[19px] font-semibold text-yellow-400">
                        Register your UK company today and step into the global market with confidence
                    </p>
                </div>

            </div>
        </section>
    );
};

const UKIncorporation = () => {

    const faqs = [
        {
            question: "Can a non-resident start a company in the UK?",
            answer: "Yes. Non-UK residents can legally register and operate a UK company without being physically present in the country."
        },
        {
            question: "How long does it take to register a company in the UK?",
            answer: "Company registration typically takes 24–48 hours after submission to Companies House, provided all documents are correct."
        },
        {
            question: "Is a UK office address mandatory?",
            answer: "Yes. Every company must have a registered UK office address for official communication."
        },
        {
            question: "Do I need a UK director?",
            answer: "No. A director can be from any country, but the company must maintain a UK registered office."
        },
        {
            question: "Can I open a bank account for my UK company?",
            answer: "Yes. After incorporation, you can apply for a UK business bank account or fintech business account."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Start Your UK Company from Anywhere in the"
                heroTitleSuffix="World"
                heroSubtitle="Build a global presence with a UK-registered company."
                heroDescription="Register your business in the United Kingdom with a fast, compliant, and hassle-free incorporation process. From documentation to Companies House filing, everything is handled by experts. Start your UK company today and expand your business globally."
                whatsIncludedList={[
                    "100% Online Process",
                    "Expert Compliance Support",
                    "Fast Incorporation",
                    "Transparent Pricing"
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

