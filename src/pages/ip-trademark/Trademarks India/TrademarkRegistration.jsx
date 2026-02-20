
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
                eligibility={{
                    title: "Who Should Register?",
                    subtitle: "Entities and individuals who benefit from Trademark Registration.",
                    list: [
                        { title: "Business Owners", desc: "To protect their names, logos, and products from being copied." },
                        { title: "Startups", desc: "To ensure a unique brand identity and to attract investors." },
                        { title: "Service Providers", desc: "To protect their goodwill in the competitive market landscape." },
                        { title: "Entrepreneurs", desc: "To build their brand reputation and legal ownership." },
                        { title: "NGOs", desc: "To protect their logos or slogans that reflect their mission and cause." },
                        { title: "Artists/Designers", desc: "To safeguard intellectual property rights for their distinctive designs." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Documents needed to initiate the Trademark Registration process.",
                    list: [
                        "Identity Proof (PAN / Aadhaar) of Applicant",
                        "Address Proof (Utility Bill / Passport)",
                        "Incorporation Certificate / Partnership Deed (if applicable)",
                        "Trademark Details (Logo, Slogan, Brand Name)",
                        "Form TM-48 (Power of Attorney)",
                        "MSME / Udyog Aadhaar Certificate (for fee concession)",
                        "User Affidavit (if claiming prior use)",
                        "Business Objectives & Description of Goods/Services"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413575b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to protect your brand identity.",
                    steps: [
                        { step: "01", title: "Trademark Search", desc: "Conducting an in-depth search to ensure the trademark is unique." },
                        { step: "02", title: "Application Filing", desc: "Submitting the application with applicant details and trademark graphic." },
                        { step: "03", title: "Office Review", desc: "Examination by the Trademark Office for distinctiveness and objections." },
                        { step: "04", title: "Objection Response", desc: "Clarifying any objections raised by the office within the stipulated time." },
                        { step: "05", title: "Journal Publication", desc: "Publication in the Trademark Journal for third-party opposition." },
                        { step: "06", title: "Registration", desc: "Issuance of Registration Certificate if no opposition is filed." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted partner for Intellectual Property Rights.",
                    list: [
                        { title: "Expert Consultation", desc: "Guiding you through eligibility to safeguard brand identity." },
                        { title: "Comprehensive Search", desc: "Conducting detailed searches to ensure unique and available trademarks." },
                        { title: "Document Preparation", desc: "Assisting in collecting documents to reduce errors and delays." },
                        { title: "Application Filing", desc: "Managing the entire filing process ensuring legal compliance." },
                        { title: "Real-Time Updates", desc: "Regular updates on application status throughout the process." },
                        { title: "Objection Handling", desc: "Drafting strong replies to trademark objections." },
                        { title: "Cost Transparency", desc: "Clear cost breakdowns with no hidden charges." },
                        { title: "Post-Reg Support", desc: "Continued support for renewals and enforcement." }
                    ]
                }}
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
