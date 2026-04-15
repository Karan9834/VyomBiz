import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Global Incorporation/Company Registration in USA/benefits.png";
import overview from "../../../assets/Global Incorporation/Company Registration in USA/overview.png";
import process from "../../../assets/Global Incorporation/Company Registration in USA/process.png";


/**
 * USAIncorporation Page matching TrustRegistration layout
 * Content sourced from: https://Vyombiz.io/company-registration-in-usa
 */

const CompanyRegistrationUSAOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Global Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Expand Globally With a <span className="text-yellow-400">US Company</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The United States is one of the most attractive destinations for entrepreneurs and startups looking to operate globally. Setting up a company in the US offers credibility, access to international markets, global payment systems, and strong legal protection.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Many founders, freelancers, SaaS businesses, and e-commerce entrepreneurs choose US incorporation because it provides a strong brand presence and opens doors to global investors and customers.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited helps entrepreneurs worldwide register their US companies with a simplified process. Our experts handle documentation, filing, and compliance so you can focus on building your business.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="USA Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationUSAAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why Register a Company in the USA?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Registering a company in the US offers several advantages for global entrepreneurs and businesses looking to expand internationally.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="USA Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Global Business Credibility", desc: "A US-registered company builds trust with international clients, investors, and business partners." },
                        { title: "Access to Global Payment Gateways", desc: "Open accounts with international platforms and payment processors that support global transactions." },
                        { title: "Investor-Friendly Structure", desc: "The US startup ecosystem attracts venture capital, angel investors, and global funding opportunities." },
                        { title: "Flexible Business Structures", desc: "Choose from popular structures like LLCs or Corporations depending on your business goals." },
                        { title: "Strong Legal Framework", desc: "US corporate laws provide transparency, protection, and well-defined governance for businesses." },
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
                    <div className="bg-[#e6f0fa] border border-[#005a9c] rounded-2xl p-8 shadow-sm">
                        <p className="text-[17px] text-[#072b47] leading-relaxed font-medium">
                            With expert guidance from Vyombiz managed by Clink Consultancy Services Private Limited, entrepreneurs can complete US company registration without navigating complex legal procedures alone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const USAIncorporationEligibility = () => {
    const list = [
        { title: "Limited Liability Company (LLC)", desc: "An LLC is one of the most popular choices for startups and international entrepreneurs. It offers liability protection and flexible taxation." },
        { title: "C-Corporation", desc: "C-Corporations are preferred by startups planning to raise venture capital or attract global investors." },
        { title: "S-Corporation", desc: "This structure allows pass-through taxation but has eligibility requirements and is typically used by US residents." },
        { title: "Partnership", desc: "A partnership structure works well for businesses owned by two or more partners." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Business Entities in the USA
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Choosing the right business structure is crucial for taxation, ownership, and compliance.
                </p>
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <p key={i}>
                            <span className="font-semibold text-[#072b47]">{item.title} – </span>
                            {item.desc}
                        </p>
                    ))}
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-10">
                    Our experts help you select the best entity type based on your business model and long-term growth plans.
                </p>
            </div>
        </section>
    );
};

const USAIncorporationDocumentsSection = () => {
    const list = [
        "Passport copy of the directors or owners",
        "Address proof of the shareholders",
        "Business name preference",
        "Description of business activities",
        "Email ID and contact details"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for US Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To register a company in the United States, the following documents are generally required:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-5">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Our team ensures all documents are verified and submitted correctly to avoid delays or rejections.
                </p>
            </div>
        </section>
    );
};

const USAIncorporationProcessSection = () => {
    const steps = [
        { title: "Business Consultation", desc: "Understand your business model and recommend the most suitable company structure." },
        { title: "Company Name Registration", desc: "Check availability and reserve your company name." },
        { title: "Documentation & Filing", desc: "Prepare incorporation documents and file them with the relevant US state authority." },
        { title: "EIN Application", desc: "Apply for the Employer Identification Number (EIN) required for tax purposes." },
        { title: "Compliance Setup", desc: "Ensure your company meets initial compliance and regulatory requirements." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for US Company Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Registering a company in the US becomes easy when the process is managed by experienced professionals.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="USA Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                        <div className="bg-[#e6f0fa] border border-[#005a9c] rounded-2xl p-6 mt-10">
                            <p className="text-[16px] text-[#072b47] leading-relaxed font-medium text-center">
                                With the support of Vyombiz managed by Clink Consultancy Services Private Limited, the entire process becomes seamless and efficient.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const USAIncorporationFeaturesSection = () => {
    const features = [
        { title: "Expert Assistance", desc: "Work with professionals experienced in international company registration." },
        { title: "Hassle-Free Process", desc: "We handle paperwork, filings, and compliance requirements." },
        { title: "Transparent Pricing", desc: "Clear pricing with no hidden costs." },
        { title: "End-to-End Support", desc: "From incorporation to compliance, we provide continuous assistance." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for US Company Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Starting a company abroad requires expert legal and compliance support. Choosing the right partner ensures a smooth incorporation journey.
                    </p>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed mt-4">
                        Vyombiz managed by Clink Consultancy Services Private Limited offers professional guidance, simplified documentation, and reliable incorporation services tailored for global entrepreneurs.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-10">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex gap-4">
                            <div className="text-yellow-400 font-bold text-xl">{index + 1}.</div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">{feature.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-2 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 bg-[#072b47] rounded-3xl p-10 text-center text-white">
                    <h2 className="text-3xl font-semibold mb-4">Start Your US Business Journey Today</h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-4">
                        Setting up a company in the United States can transform the way your business operates globally. With the right structure and professional support, entrepreneurs can access international markets, investors, and growth opportunities.
                    </p>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
                        Let Vyombiz managed by Clink Consultancy Services Private Limited help you register your US company quickly and efficiently.
                    </p>
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition">
                        Get Started With US Company Registration Today
                    </Link>
                </div>
            </div>
        </section>
    );
};

const USAIncorporation = () => {

    const faqs = [
        {
            question: "What are the documentation prerequisites for USA company formation?",
            answer: "The requirements include a unique business name, details of directors/shareholders (Passport/ID), and a registered office address in the chosen US state."
        },
        {
            question: "Is it possible to change my LLC to a C-Corp or S-Corp?",
            answer: "Yes, an LLC can elect to be taxed as a C-Corp or S-Corp by filing the appropriate forms (like Form 8832 or Form 2553) with the IRS."
        },
        {
            question: "What are the types of business structures in USA?",
            answer: "Common structures include Limited Liability Company (LLC), C-Corporation, S-Corporation, Limited Partnership (LP), and Sole Proprietorship."
        },
        {
            question: "Do I need to be a US resident to incorporate a company?",
            answer: "No, foreign nationals can incorporate an LLC or C-Corp in the USA without being a resident or having a physical presence, though a Registered Agent is required."
        },
        {
            question: "What is an EIN?",
            answer: "EIN (Employer Identification Number) is a unique nine-digit number assigned by the IRS to business entities for tax identification purposes."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="USA"
                heroSubtitle="Start Your US Company From Anywhere in the World"
                heroDescription="Register your company in the United States and unlock global business opportunities. From LLC formation to compliance support, get everything handled by experts."
                whatsIncludedList={[
                    "Fast & hassle-free incorporation",
                    "Ideal for startups, SaaS founders & global entrepreneurs",
                    "Complete documentation and compliance support"
                ]}
                stats={[
                    { count: "4000+", label: "Businesses Assisted", icon: <Users size={20} /> },
                    { count: "200+", label: "Local Consultants", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "States Covered", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationUSAOverview />}
                advantages={<CompanyRegistrationUSAAdvantages />}
                eligibility={<USAIncorporationEligibility />}
                documents={<USAIncorporationDocumentsSection />}
                process={<USAIncorporationProcessSection />}
                features={<USAIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about USA Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default USAIncorporation;

