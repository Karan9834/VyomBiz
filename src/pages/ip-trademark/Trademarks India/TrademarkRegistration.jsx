
import React from 'react';
import { ShieldCheck, Award, Globe, Search, FileText, CheckCircle, Clock, Users } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

// Placeholder for the missing image
const overviewImg = "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

const TrademarkOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Trademark Registration – An Overview
                        </h2>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Trademark registration in India is a process that safeguards your brand legally.
                            The process protects brand names, logos, symbols, or slogans, facilitating
                            exclusive rights to the businesses to use their mark. Trademark prevents the
                            unauthorized use of your brand's originality in the market. However, to register
                            a trademark, you must follow a series of steps, including filing an application
                            with the Indian Trademark Office, undergoing verification, and responding if
                            any objections are raised. A registered trademark is valid for 10 years and can
                            be renewed.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            Trademark registration is essential for boosting your business's credibility,
                            offering protection against infringements, creating a valuable asset, and
                            facilitating global trademark protection. A trademark registered in India helps
                            you expand your business globally by safeguarding your interests internationally.
                            If you are looking to register trademark, you must connect with our seasoned IPR
                            experts today.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overviewImg}
                            alt="Trademark Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>

                </div>
            </div>
        </section>

    );
};


const TrademarkRegistrationEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Should Register?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Entities and individuals who benefit from Trademark Registration.
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Business Owners
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        To protect their names, logos, and products from being copied.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Startups
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        To ensure a unique brand identity and to attract investors.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Service Providers
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        To protect their goodwill in the competitive market landscape.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Entrepreneurs
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        To build their brand reputation and legal ownership.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        NGOs
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        To protect their logos or slogans that reflect their mission and cause.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Artists/Designers
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        To safeguard intellectual property rights for their distinctive designs.
                    </p>
                </div>
            </div>
        </section>
    );
};

const TrademarkRegistrationDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Required Documents
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Documents needed to initiate the Trademark Registration process.
                </p>
                <div className="space-y-4">

                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Identity Proof (PAN / Aadhaar) of Applicant</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Address Proof (Utility Bill / Passport)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Incorporation Certificate / Partnership Deed (if applicable)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Trademark Details (Logo, Slogan, Brand Name)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Form TM-48 (Power of Attorney)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">MSME / Udyog Aadhaar Certificate (for fee concession)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">User Affidavit (if claiming prior use)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Business Objectives & Description of Goods/Services</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrademarkRegistrationProcessSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Registration Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to protect your brand identity.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">

                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                1.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Trademark Search
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Conducting an in-depth search to ensure the trademark is unique.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Application Filing
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Submitting the application with applicant details and trademark graphic.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Office Review
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Examination by the Trademark Office for distinctiveness and objections.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Objection Response
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Clarifying any objections raised by the office within the stipulated time.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Journal Publication
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Publication in the Trademark Journal for third-party opposition.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                6.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Registration
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Issuance of Registration Certificate if no opposition is filed.
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-slate-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrademarkRegistrationFeaturesSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner for Intellectual Property Rights.
                    </p>
                </div>
                <div>

                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            1.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Expert Consultation
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Guiding you through eligibility to safeguard brand identity.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            2.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Comprehensive Search
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Conducting detailed searches to ensure unique and available trademarks.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            3.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Document Preparation
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Assisting in collecting documents to reduce errors and delays.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            4.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Application Filing
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Managing the entire filing process ensuring legal compliance.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            5.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Real-Time Updates
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Regular updates on application status throughout the process.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            6.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Objection Handling
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Drafting strong replies to trademark objections.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            7.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Cost Transparency
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Clear cost breakdowns with no hidden charges.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            8.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Post-Reg Support
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Continued support for renewals and enforcement.
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const TrademarkRegistration = () => {

    const faqs = [
        {
            question: "What is the difference between a trademark and a registered trademark?",
            answer: "A trademark includes a symbol, word, or logo representing a brand that has not been registered officially. A registered trademark is a trademark that has been registered legally, giving the owner exclusive rights to use the ® symbol and offering stronger legal protection."
        },
        {
            question: "How can I register a trademark?",
            answer: "To register a trademark: 1) Conduct a thorough trademark search. 2) Fill out Form TM-A and submit it to the authority. 3) Pay the necessary fee. 4) The Registrar examines and publishes the application. 5) If no opposition is filed, the registration certificate is issued."
        },
        {
            question: "What are the documents required to register a trademark?",
            answer: "Required documents include: Incorporation Certificate (for companies), Partnership Deed (for firms), PAN Card & Aadhaar Card of authorized signatory, Form-48 (duly signed), Brand Logo, and MSME Certificate (if applicable)."
        },
        {
            question: "Who can apply for a trademark?",
            answer: "Any individual, company, proprietor, or legal entity claiming to be the owner of a trademark can apply. This includes NGOs, startups, and foreign companies."
        },
        {
            question: "How long is a trademark valid?",
            answer: "A registered trademark is valid for 10 years from the date of filing and can be renewed indefinitely every 10 years."
        }
    ];

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Brand Protection
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Trademark Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Secure your brand's future with legal protection and exclusive rights.
                    </p>

                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1554224154-260327c00c4c?auto=format&fit=crop&q=80"
                            alt="Trademark Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        {
                            title: "Brand Protection",
                            desc: "Grants exclusive rights, preventing unauthorized use of your brand name or logo."
                        },
                        {
                            title: "Legal Rights",
                            desc: "Offers legal ownership and facilitates actions against infringers for compensation."
                        },
                        {
                            title: "Business Credibility",
                            desc: "Boosts brand credibility, demonstrating professionalism and promoting trust with customers and investors."
                        },
                        {
                            title: "Market Differentiation",
                            desc: "Distinguishes your products from competitors and strengthens brand recognition in the marketplace."
                        },
                        {
                            title: "Asset Creation",
                            desc: "Becomes an intangible business asset that can be licensed or franchised for long-term financial benefits."
                        },
                        {
                            title: "Global Protection",
                            desc: "Helps secure international trademark protection and safeguards your brand across different markets worldwide."
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                        >
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

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Trademark Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Protect Your Brand Identity"
                heroDescription="Trademark registration in India is a process that safeguards your brand legally. It protects brand names, logos, symbols, or slogans, facilitating exclusive rights to businesses to use their mark and preventing unauthorized use."
                whatsIncludedList={[
                    "Comprehensive Trademark Search",
                    "Expert Legal Consultation",
                    "Application Filing & Tracking",
                    "Objection Handling Support"
                ]}
                stats={[
                    { count: "5000+", label: "Trademarks Filed", icon: <FileText size={20} /> },
                    { count: "98%", label: "Success Rate", icon: <Award size={20} /> },
                    { count: "10+", label: "Years Experience", icon: <Clock size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<TrademarkOverview />}
                advantages={advantagesContent}
                eligibility={<TrademarkRegistrationEligibility />}
                documents={<TrademarkRegistrationDocumentsSection />}
                process={<TrademarkRegistrationProcessSection />}
                features={<TrademarkRegistrationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Trademark Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default TrademarkRegistration;
