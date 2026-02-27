import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from '../../../assets/ngo/Society Registration/benefits.png'
import overview from '../../../assets/ngo/Society Registration/overview.png'

import Process from '../../../assets/ngo/Society Registration/Process.png'

/**
 * SocietyRegistration Page
 * Refactored to match TrustRegistration design using shared layouts.
 */

const SocietyOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Philanthropic Goals
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Society Registration in India – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            In India, the main purpose of a society is to accomplish philanthropic goals. As per the Societies Registration Act of 1860, the founding members of a society must adhere to certain requirements for the organization to be registered. Registering as a society gives it legal status, allowing it to operate legally and take advantage of certain government benefits.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is a Society?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A society is an organization where people who share interests get together to perform certain tasks as a group. Generally, societies are registered to further common endeavours in the fields of athletics, music, culture, religion, art, and education. While it is not required, registering these institutions under the Societies Registration Act of 1860 is recommended for increased growth, legal recognition, and transparency.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Society Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SocietyRegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Community Growth
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Society Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Registering a society enables legal operations, financial benefits, and builds credibility.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Society Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Recognition", desc: "Registration acts as legal recognition, allowing the society to operate independently of its members." },
                        { title: "Perpetual Succession", desc: "A registered society has perpetual succession; it continues to exist even if membership changes." },
                        { title: "Limited Liability", desc: "Members enjoy limited liability, shielding personal assets from the legal obligations of the society." },
                        { title: "Access to Funds", desc: "Easier access to grants, donations, and resources from public and private entities." },
                        { title: "Tax Exemptions", desc: "Charitable societies are eligible for tax exemptions under sections like 12A and 80G." },
                        { title: "Credibility", desc: "Increases trust among donors, stakeholders, and the public, enhancing the society's reputation." }
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

const SocietyEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Society Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To register a Society in India, it's essential to understand the eligibility criteria first.
                    Essential criteria for registering a Society in India are mentioned below-
                </p>

                {/* Minimum Members */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Minimum Number of Members
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Minimum 7 People –
                            </span>{" "}
                            A minimum of 7 persons are required to form a society.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Members Can Be –
                            </span>{" "}
                            Members can be individuals, companies, foreigners, or registered societies.
                        </li>
                    </ul>
                </div>

                {/* Society Objectives */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Society Objectives
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Societies Act Object – </span>
                            Objectives must align with the Societies Registration Act, 1860.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Non-profit Nature – </span>
                            Must function as a non-profit and independent organization.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">Unique Name – </span>
                        The society name must be distinct and different from existing ones.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Registered Office – </span>
                        Must have a verified registered office address in India.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Governing Body – </span>
                        Formation of a governing body to manage affairs and operations.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Start Your Society Registration Now
                    </button>
                </div>

            </div>
        </section>
    );
};

const SocietyDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Society Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To register a Society in India, you need to submit the following documents.
                    Complete list of documents required for Society Registration:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card of all Members – </span>
                            PAN Card copies of all founding members.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Aadhaar / Voter ID – </span>
                            Identity proof of all members.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Passport / Driving License – </span>
                            Additional identity proof of members.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Latest Bank Statement – </span>
                            Bank statements of all members.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Memorandum of Association (MOA) – </span>
                            MOA outlining the society's objectives and rules.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Rules & Regulations – </span>
                            Rules & Regulations of the Society governing its operations.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Covering Letter – </span>
                            Covering letter requesting registration from the Registrar.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Proof of Registered Office – </span>
                            Rent Agreement/NOC for the registered office address.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const SocietyProcessSection = () => {
    const steps = [
        {
            title: "Documentation",
            desc: "Gather PAN, KYC, and address proofs of all members required for registration."
        },
        {
            title: "Name Selection",
            desc: "Choose a unique, compliant name for the society that reflects its objectives."
        },
        {
            title: "Drafting",
            desc: "Draft MOA and Rules & Regulations of the Society outlining objectives and governance."
        },
        {
            title: "Application",
            desc: "Submit application to the Registrar of Societies along with all required documents."
        },
        {
            title: "Certification",
            desc: "Get Registration Certificate upon approval from the Registrar of Societies."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for Society Registration in India?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for Society registration in India involves structured documentation,
                        regulatory approvals, and compliance with statutory requirements. The
                        step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src={Process}
                            alt="Society Registration Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Steps */}
                    <div className="lg:col-span-2">

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200"
                            >
                                {/* Step Number */}
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    {index + 1}.
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Bottom border */}
                        <div className="border-t border-slate-200"></div>

                        {/* CTA */}
                        <div className="mt-12 text-center">
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Society Registration Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const SocietyFeaturesSection = () => {
    const features = [
        {
            title: "Expert Consultation",
            desc: "Guidance on legal and structural requirements from experienced professionals."
        },
        {
            title: "Documentation Support",
            desc: "Complete support in drafting MOA and Rules & Regulations of the Society."
        },
        {
            title: "Seamless Filing",
            desc: "Hassle-free application filing with the Registrar for quick processing."
        },
        {
            title: "Regulatory Compliance",
            desc: "Ensuring all legal norms are met as per the Societies Registration Act, 1860."
        },
        {
            title: "End-to-End Assistance",
            desc: "From name search to final certification, comprehensive support throughout."
        },
        {
            title: "Post-Registration Support",
            desc: "Guidance on annual filings and compliances to maintain legal status."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of Society Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Society registration enables legal operations, financial benefits, and builds credibility
                        for your philanthropic goals.
                    </p>
                </div>

                {/* Features Rows */}
                <div>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300"
                        >
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                {index + 1}.
                            </div>

                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    {feature.title}
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const SocietyRegistration = () => {
    const faqs = [
        {
            question: "How can I register my society online in India?",
            answer: "To register a society, you typically need to submit a cover letter requesting registration, a Memorandum of Association, a copy of the Society's rules and regulations, a list of all members, declarations from office holders, and residential proof for each participant."
        },
        {
            question: "What is the minimum number of members required to form a society?",
            answer: "According to the Societies Registration Act, 1860, a minimum of seven persons are required to form a society in India."
        },
        {
            question: "Can a Society operate for profit?",
            answer: "No, a society is formed for charitable, literary, scientific, or religious purposes and functions as a non-profit organization. Any income generated must be used for the promotion of its objectives."
        },
        {
            question: "Is it mandatory to register a society?",
            answer: "While registration is not strictly mandatory, it is highly recommended. A registered society gains legal status, can sue and be sued, can hold property, and is eligible for tax exemptions."
        },
        {
            question: "Who can be a member of a society in India?",
            answer: "Any individual, company, foreigner, or registered society can subscribe to the Memorandum of Association of the society."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Society Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Simplify Community Progress"
                heroDescription="Society Registration is pivotal for community progress. We simplify this procedure, guaranteeing a quick and easy registration process to accomplish your philanthropic goals."
                whatsIncludedList={[
                    "More than 500 societies registered with our assistance",
                    "Trusted by 50,000+ customers for compliance & registration",
                    "Expert Legal Consultation",
                    "Dedicated Relationship Manager"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<SocietyOverview />}
                advantages={<SocietyRegistrationAdvantages />}
                eligibility={<SocietyEligibility />}
                documents={<SocietyDocumentsSection />}
                process={<SocietyProcessSection />}
                features={<SocietyFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about Society Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default SocietyRegistration;
