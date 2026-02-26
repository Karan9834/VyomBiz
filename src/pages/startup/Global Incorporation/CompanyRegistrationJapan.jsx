import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationJapan Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-japan
 */

const CompanyRegistrationJapanOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Asia Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in Japan – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Japan, home to global cities like Tokyo and Yokohama, is a major trading hub and the third-largest economy in the world.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It offers a stable economy, advanced infrastructure, and a highly skilled workforce, making it an ideal destination for international business expansion.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why Japan?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Japan is renowned for its technological advancement and innovation, particularly in IT, healthcare, and automation.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It maintains strong economic relationships with Asia, Latin America, and Europe, serving as a gateway to global markets.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80"
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why businesses choose Japan for expansion.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80"
                            alt="Japan Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "World-Class Infrastructure", desc: "Robust facilities supporting industries and global competitors." },
                        { title: "Double Taxation Treaties", desc: "Access to treaties that minimize withholding tax on international income." },
                        { title: "Free-Trade Zones", desc: "Zones in Tokyo, Nagasaki, and Niigata offering streamlined international trade." },
                        { title: "Competitive Workforce", desc: "Highly disciplined and educated workforce focused on innovation." },
                        { title: "Government Incentives", desc: "Grants, tax exemptions, and subsidies for R&D and startups." },
                        { title: "IP Protection", desc: "Strong intellectual property laws protecting patents and trademarks." }
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
    const list = [
        { title: "Share Capital", desc: "Minimum capital requirement of at least 1 Yen." },
        { title: "Directors", desc: "Must appoint at least 1 director." },
        { title: "Shareholders", desc: "Minimum 1 shareholder (individual or corporate entity)." },
        { title: "Local Representative", desc: "Must appoint a local representative (physical presence not always required)." },
        { title: "Registered Address", desc: "Must have a registered local office in Japan." },
        { title: "Fiscal Year", desc: "Companies can freely decide their fiscal year." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Company Registration in Japan?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key criteria for incorporating in Japan.
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

const JapanIncorporationDocumentsSection = () => {
    const list = [
        "Articles of Incorporation (AOA)",
        "ID & Address Proof of Directors/Shareholders",
        "Affidavit from Parent Company (if subsidiary)",
        "Corporate Seal Certificate (Inkan Shomeisho)",
        "Proof of Capital Contribution",
        "Business Plan & Activity Details",
        "Appointment Letter of Representative"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Japan Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents for Japan Company Incorporation.
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

const JapanIncorporationProcessSection = () => {
    const steps = [
        { title: "Structure Check", desc: "Choose the appropriate business structure (KK, GK, etc.)." },
        { title: "Name Reservation", desc: "Reserve a unique trade name and verify availability." },
        { title: "Documentation", desc: "Prepare AOA, seal certificates, and affidavits." },
        { title: "Representative", desc: "Appoint a local representative or legal proxy." },
        { title: "Application", desc: "File for registration with the Japanese Trade Register." },
        { title: "Incorporation", desc: "Receive Certificate of Incorporation from Legal Affairs Bureau." },
        { title: "Post-Setup", desc: "Open bank account, obtain company seal, and register for taxes." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in Japan?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to setting up your business.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80" alt="Japan Company Registration Process" className="w-full rounded-lg shadow-sm" />
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

const JapanIncorporationFeaturesSection = () => {
    const features = [
        { title: "Experienced Team", desc: "Network of 10,000+ consultants with 10+ years of experience." },
        { title: "Time Saver", desc: "Saved 50 Lakh+ hours for entrepreneurs with efficient processes." },
        { title: "Visa Services", desc: "Fast-track Business Manager Visa assistance." },
        { title: "Virtual Office", desc: "Addresses in Tokyo, Osaka, or Yokohama for non-residents." },
        { title: "Payroll Solutions", desc: "End-to-end management of HR and compliance operations." },
        { title: "24/7 Support", desc: "Lifetime support to ongoing business needs." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner for Japanese market entry.
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
                heroSubtitle="Start Your Business in the Land of the Rising Sun"
                heroDescription="Expand your business to Japan, the world's 3rd largest economy and a global hub for innovation. We provide comprehensive support for a smooth entry into the Asian market."
                whatsIncludedList={[
                    "Document Review within 24 Hours",
                    "Japanese Bank Account Assistance",
                    "Digital Company Seal (Hanko) Creation",
                    "Business Visa Services in 1 Week",
                    "Unlimited Name Checks"
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
