
import React from 'react';
import { ShieldCheck, Award, Globe, Search, FileText, CheckCircle, Clock, Users } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Trademarks India/Trademark Registration in India/benefits.png";
import overview from "../../../assets/Trademarks India/Trademark Registration in India/overview.png";
import process from "../../../assets/Trademarks India/Trademark Registration in India/process.jpg";

// Placeholder for the missing image
const overviewImg = overview;

const TrademarkOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Overview of Trademark Registration
                        </h2>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Trademark registration in India protects your brand legally by securing names, logos, symbols, or slogans. It grants businesses exclusive rights to use their mark and prevents others from copying or misusing the brand identity in the marketplace. To register a trademark, an application must be filed with the Trademark Registry, followed by examination and possible responses to objections if raised. Once approved, the trademark remains valid for 10 years and can be renewed periodically.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            Registering a trademark strengthens business credibility, protects against infringement, and creates a valuable intellectual property asset. A registered trademark also helps businesses expand globally by protecting their brand identity in international markets. If you plan to register your trademark, expert assistance can help simplify the process and ensure compliance with legal requirements.
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
                    Who Should Apply for Trademark Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Entities and individuals who benefit from Trademark Registration.
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Business Owners
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        To protect brand names, product labels, and company logos.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Startups
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        To build a unique brand identity and attract potential investors.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Service Businesses
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        To secure reputation and goodwill in competitive markets.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Entrepreneurs
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        To establish legal ownership of brand identity.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Non-Profit Organizations
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        To protect logos or slogans representing their mission.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Creators and Designers
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        To protect original designs and intellectual property.
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
                    Documents Required for Trademark Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Documents needed to initiate the Trademark Registration process.
                </p>
                <div className="space-y-4">

                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Applicant Identity Proof:</span> PAN card or Aadhaar card of the applicant.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Address Proof:</span> Utility bill, passport, or other valid address proof.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Business Registration Documents:</span> Company incorporation certificate or partnership deed if applicable.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Trademark Details:</span> Brand name, logo design, or slogan to be registered.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Authorization Form:</span> Power of attorney authorizing the representative to file the application.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">MSME Certificate:</span> Certificate for small business fee concessions if applicable.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Prior Use Affidavit:</span> Required when claiming prior usage of the trademark.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Description of Goods or Services:</span> Details of products or services associated with the trademark.</p>
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
                        Trademark Registration Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to protect your brand identity.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
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
                                    Trademark Availability Search
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Checking whether the trademark is unique and available.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Application Submission
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Filing the trademark application with applicant details and mark representation.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Examination by Trademark Office
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    The registry examines the application for distinctiveness and compliance.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Responding to Objections
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Submitting replies if the Trademark Office raises objections.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Trademark Journal Publication
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    The trademark is published for third-party opposition.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                6.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Certificate Issuance
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    If no opposition is received, the trademark registration certificate is granted.
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
                        Why Choose VyomBiz for Trademark Registration
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
                                Professional Consultation
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Expert guidance on trademark eligibility and protection.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            2.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Detailed Trademark Search
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Ensuring the mark is unique before filing.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            3.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Documentation Support
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Assistance in preparing and verifying all documents.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            4.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Complete Filing Assistance
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Handling the entire trademark application process.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            5.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Application Status Updates
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Keeping you informed about progress.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            6.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Objection Response Support
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Drafting professional responses to office objections.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            7.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Transparent Pricing
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Clear pricing structure without hidden charges.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            8.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Post-Registration Assistance
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Support for renewal and trademark protection.
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
            answer: "A trademark is a word, logo, symbol, or design that represents a brand but may not yet be officially registered. A registered trademark is legally approved and allows the owner to use the ® symbol while providing stronger legal protection against unauthorized use."
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
                        Advantages of Trademark Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Secure your brand's future with legal protection and exclusive rights.
                    </p>

                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Trademark Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        {
                            title: "Exclusive Brand Protection",
                            desc: "Provides exclusive rights and prevents others from using your brand name or logo."
                        },
                        {
                            title: "Legal Ownership",
                            desc: "Grants the legal authority to take action against unauthorized use or infringement."
                        },
                        {
                            title: "Improved Business Credibility",
                            desc: "Enhances brand image and builds trust among customers and investors."
                        },
                        {
                            title: "Strong Market Identity",
                            desc: "Helps distinguish your products or services from competitors."
                        },
                        {
                            title: "Valuable Business Asset",
                            desc: "A registered trademark becomes an intellectual property asset that can be licensed or franchised."
                        },
                        {
                            title: "International Brand Protection",
                            desc: "Supports expansion into international markets with stronger brand security."
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
                heroDescription="Trademark registration in India legally protects your brand identity. It secures names, logos, symbols, and slogans by granting exclusive rights to the owner and preventing unauthorized use by others."
                whatsIncludedList={[
                    "Comprehensive Trademark Search",
                    "Expert Legal Consultation",
                    "Application Filing & Tracking",
                    "Objection Handling Support"
                ]}
                stats={[
                    { count: "5000+", label: "Trademark Applications", icon: <FileText size={20} /> },
                    { count: "High", label: "Approval Rate", icon: <Award size={20} /> },
                    { count: "Experienced", label: "IPR Professionals", icon: <Clock size={20} /> }
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
