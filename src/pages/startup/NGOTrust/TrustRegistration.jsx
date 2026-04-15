import { Link } from "react-router-dom";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import overview from "../../../assets/ngo1/Trust Registration/overview.png"
import img1 from "../../../assets/ngo1/Trust Registration/img1.png"
import img2 from "../../../assets/ngo1/Trust Registration/img2.png"
/**
 * TrustRegistration Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section (Left Content, Right Form)
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Benefits Section
 * 5. Eligibility/Checklist
 * 6. Documents Required
 * 7. Registration Process
 * 8. Why Choose Us
 * 9. FAQ
 */

const TrustOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Legally Compliant
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            <span className="text-yellow-400">Trust Registration</span> in India – Overview
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Trust registration in India is governed by the Indian Trusts Act, 1882. A trust is a legal arrangement created to manage assets for charitable, religious, or private purposes. A Trust Deed is required to define the objectives, trustees, beneficiaries, and responsibilities of each trustee.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Registering a trust provides legal recognition and allows it to apply for tax exemptions under Sections 12A and 80G.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is a Trust?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A trust is a legal arrangement in which a trustee manages property or assets for the benefit of beneficiaries. Trusts provide a structured method for managing and distributing assets while ensuring legal protection and accountability.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Trust Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrustRegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Legally Compliant
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Trust Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Registering a trust offers legal recognition, financial advantages, and improved credibility.
                    </p>
                    <div className="mt-10">
                        <img
                            src={img1}
                            alt="Trust Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Tax Exemptions", desc: "Trusts can apply for 12A and 80G registrations to receive tax exemptions on income and donations." },
                        { title: "Legal Recognition", desc: "A registered trust gains legal recognition and can own property or take legal actions in its name." },
                        { title: "Social Welfare", desc: "Creates a formal structure to carry out charitable activities such as education, healthcare, and social welfare." },
                        { title: "Assets Protection", desc: "Helps protect and manage assets effectively for long-term charitable or private purposes." },
                        { title: "Avoid Probate", desc: "Assets held in a trust can be transferred to beneficiaries without lengthy probate procedures." },
                        { title: "Credibility", desc: "Improves credibility among donors, government authorities, and the public." }
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

const TrustEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Trust Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before registering a trust in India, it is important to understand the basic eligibility requirements.
                    The key criteria and elements required for trust registration are listed below.
                </p>

                {/* Minimum Trustees */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Minimum Number of Trustees
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Minimum 2 Trustees –
                            </span>{" "}
                            At least two trustees are required to establish a trust.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Settlor Presence –
                            </span>{" "}
                            The founder or creator of the trust must be clearly identified.
                        </li>
                    </ul>
                </div>

                {/* Trust Name and Objectives */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Trust Name and Objectives
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Unique Name – </span>
                            The trust name should be unique and must not conflict with existing organizations.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Trust Objectives – </span>
                            The trust must clearly define its charitable or social objectives.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">Registered Office – </span>
                        A valid physical address in India is required for official communication.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Trust Deed – </span>
                        A legal document drafted on stamp paper defining trustees, objectives, and assets.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Trust Registration Now
                            </Link>
                </div>

            </div>
        </section>
    );
};

const TrustDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Trust Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The following documents are generally required for trust registration in India.
                    Complete list of documents required for Trustees, Settlors, and the Registered Office:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Passport Size Photographs – </span>
                            Photographs of all Trustees and Settlor.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card Copy – </span>
                            PAN Card copies of Trustees and Settlor.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Aadhaar / Voter ID – </span>
                            Identity proof of Trustees and Settlor.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Latest Bank Statement – </span>
                            Bank statements of Trustees and Settlor.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Electricity / Water Bill – </span>
                            Utility bill for the registered office address.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Rent Agreement – </span>
                            Required if the office is rented.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">NOC from Property Owner – </span>
                            No Objection Certificate from the property owner.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Ownership Proof – </span>
                            Required if the office is owned.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const TrustProcessSection = () => {
    const steps = [
        {
            title: "Trust Name Selection",
            desc: "Select a unique trust name that reflects its objectives and does not conflict with existing names."
        },
        {
            title: "Draft Trust Deed",
            desc: "Draft the Trust Deed including objectives, trustees, beneficiaries, and management provisions."
        },
        {
            title: "Documentation",
            desc: "Gather identity and address proof documents for trustees, settlor, and the registered office."
        },
        {
            title: "Registrar Filing",
            desc: "Submit the Trust Deed to the Sub-Registrar office with the required stamp duty and fees."
        },
        {
            title: "Certificate Issue",
            desc: "Receive the registered Trust Deed after verification and approval by the registrar."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for Trust Registration in India?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Trust registration involves documentation, approval from the registrar, and compliance with legal requirements. The
                        step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src={img2}
                            alt="Trust Registration Process"
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
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Trust Registration Now
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const TrustFeaturesSection = () => {
    const features = [
        {
            title: "Expert Consultation",
            desc: "Legal guidance on trust structure and objectives from experienced professionals."
        },
        {
            title: "Deed Drafting",
            desc: "Professional drafting of Trust Deed to avoid legal loopholes and ensure compliance."
        },
        {
            title: "Name Check",
            desc: "Ensuring the selected name is available and compliant with legal requirements."
        },
        {
            title: "Fast Filing",
            desc: "Expedited filing process with the Registrar for quicker approval."
        },
        {
            title: "Online Documentation",
            desc: "Hassle-free online documentation support for all required documents."
        },
        {
            title: "12A & 80G Support",
            desc: "Assistance in obtaining tax exemption registrations after trust registration."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of Trust Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Trust registration provides legal structure, financial benefits, and long-term credibility
                        for your charitable or religious objectives.
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

const TrustRegistration = () => {
    const faqs = [
        {
            question: "What is the time frame for Trust Registration?",
            answer: "The trust registration process usually takes around 6 to 8 weeks, depending on document verification and approval by the registrar office."
        },
        {
            question: "Is it mandatory to register a Trust Deed?",
            answer: "Yes, for a trust to be legally valid and eligible for tax exemptions under sections 12A and 80G, the trust deed must be registered with the appropriate authority."
        },
        {
            question: "Can a Trust operate in multiple states?",
            answer: "Yes, a registered trust can operate across India. However, the trust deed should clearly mention the scope of its activities."
        },
        {
            question: "What is the difference between a Trustee and a Beneficiary?",
            answer: "A Trustee manages the trust and its assets, while a Beneficiary is the person or group for whose benefit the trust is created."
        },
        {
            question: "Can an NRI be a trustee in an Indian Trust?",
            answer: "Yes, an NRI can be a trustee, but certain conditions and RBI guidelines regarding foreign contributions (FCRA) may apply."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Trust Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Hassle-free Trust Registration Services"
                heroDescription="Planning to support causes like education, science, or social welfare? Connect with our experts for a smooth and hassle-free trust registration process in India."
                whatsIncludedList={[
                    "Successfully Assisted in 1000+ Trust Registration in India",
                    "Assets Worth Rs 2500 Crore are Managed by Trusts Registered with Us",
                    "Expert Legal Consultation",
                    "Dedicated Relationship Manager"
                ]}
                stats={[
                    { count: "42,000+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Legal Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Service Locations", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<TrustOverview />}
                advantages={<TrustRegistrationAdvantages />}
                eligibility={<TrustEligibility />}
                documents={<TrustDocumentsSection />}
                process={<TrustProcessSection />}
                features={<TrustFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about Trust Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default TrustRegistration;

