import React from "react";
import {
    Users,
    Briefcase,
    Building2,
    Landmark,
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import PricingSection from "../../../components/CompanyRegistration/PricingSection.jsx";


/**
 * DarpanRegistration Page
 * Refactored to match TrustRegistration design.
 */

const DarpanOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Government Grants
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            NGO Darpan Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The NGO Darpan Portal is a platform maintained by NITI Aayog (Govt. of India) that interfaces between Voluntary Organizations (VOs) / NGOs and key government ministries and departments. Registration generates a unique ID for your NGO, which is a mandatory requirement to apply for government grants and schemes.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It ensures transparency, efficiency, and accountability in the sector. Without the Darpan ID, you cannot apply for these funds. Your NGO gets listed in a national database, increasing your credibility with other donors, CSR agencies, and the public.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
                            alt="NGO Darpan Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const DarpanRegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Government Grants
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Darpan ID
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Get recognized by the Government of India and unlock opportunities for growth.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80"
                            alt="Darpan Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Govt. Grant Access", desc: "Apply for grants from various ministries directly through the portal." },
                        { title: "Credibility Boost", desc: "Increases trust among stakeholders, partners, and private donors." },
                        { title: "Information Flow", desc: "Receive timely updates about new government schemes and initiatives." },
                        { title: "Transparency", desc: "Maintains a transparent record of funds and projects, aiding in compliance." },
                        { title: "FCRA Assistance", desc: "Helpful for obtaining FCRA registration for foreign contributions." },
                        { title: "Networking", desc: "Part of a massive network of voluntary organizations across India." }
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

const DarpanEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for NGO Darpan Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To register on the NGO Darpan portal, it's essential to understand the eligibility criteria first.
                    Entities eligible for NGO Darpan Registration are mentioned below-
                </p>

                {/* Registered Entities */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Registered Entities
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Registered Society –
                            </span>{" "}
                            Societies registered under the Societies Registration Act, 1860.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Charitable Trust –
                            </span>{" "}
                            Trusts registered under the Indian Trusts Act, 1882.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Section 8 Company –
                            </span>{" "}
                            Non-profit companies under Section 8 of the Companies Act, 2013.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">Valid Registration – </span>
                        Must possess a valid Registration Certificate.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">PAN Card – </span>
                        PAN Card in the name of the NGO/Entity.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Governing Body – </span>
                        A functioning governing body or executive committee.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>

            </div>
        </section>
    );
};

const DarpanDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for NGO Darpan Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To register on the NGO Darpan portal, you need to submit the following documents and details.
                    Essential documents and details for registration are mentioned below:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Registration Certificate – </span>
                            Registration Certificate (Trust/Society/Co.) of the NGO.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card – </span>
                            PAN Card of the NGO.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Trust Deed / MoA & AoA – </span>
                            Copy of Trust Deed or Memorandum and Articles of Association.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card of Executive Members – </span>
                            PAN Card of 3 Executive Members.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Aadhaar Card – </span>
                            Aadhaar Card of 3 Executive Members.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Contact Details – </span>
                            Mobile Number & Email ID for communication.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Office Bearers – </span>
                            President/Chairman Name, Secretary & Treasurer Details.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Chief Functionary – </span>
                            Chief Functionary Information and contact details.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Operational Details – </span>
                            Operational Area (State/District), Key Issues & Sector of Activity.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Source of Funds – </span>
                            Details of source of funds and financial information.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const DarpanProcessSection = () => {
    const steps = [
        {
            title: "Sign Up",
            desc: "Create an account on the NGO Darpan Portal with basic details."
        },
        {
            title: "Profile",
            desc: "Fill basic details including PAN, Registration Number, and organization information."
        },
        {
            title: "Members",
            desc: "Add details of 3 executive members with their PAN and Aadhaar."
        },
        {
            title: "Upload",
            desc: "Upload Registration Certificate & Trust Deed/MoA documents."
        },
        {
            title: "Get ID",
            desc: "Unique ID is generated upon approval from NITI Aayog."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for NGO Darpan Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for NGO Darpan registration involves structured documentation,
                        online application, and verification. The step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="NGO Darpan Registration Process"
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
                                Start Your Darpan Registration Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const DarpanFeaturesSection = () => {
    const features = [
        {
            title: "Seamless Registration",
            desc: "Hassle-free process handling by experts ensuring smooth registration."
        },
        {
            title: "Document Verification",
            desc: "Thorough check to avoid rejection and ensure accurate submission."
        },
        {
            title: "Profile Management",
            desc: "Assistance in creating an accurate profile with all required details."
        },
        {
            title: "Grant Updates",
            desc: "Information on relevant government grants and funding opportunities."
        },
        {
            title: "Compliance Support",
            desc: "Guidance on maintaining compliance with NITI Aayog requirements."
        },
        {
            title: "Expert Consultants",
            desc: "Experienced team specializing in non-profit sector registrations."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of NGO Darpan Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        NGO Darpan registration provides access to government grants, enhances credibility,
                        and connects NGOs with various ministries and departments.
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

const DarpanRegistration = () => {
    const faqs = [
        {
            question: "What is NGO Darpan?",
            answer: "NGO Darpan is a platform maintained by NITI Aayog that acts as an interface between NGOs/VOs and key government ministries/departments. It provides a unique ID to registered entities."
        },
        {
            question: "Is Darpan registration mandatory?",
            answer: "Yes, it is mandatory for NGOs seeking government grants or funding from any ministry or department. The unique ID is required to apply for schemes."
        },
        {
            question: "Who can register on the NGO Darpan portal?",
            answer: "Registered Trusts, Societies, and Section 8 Companies (Non-profit companies) are eligible to register on the Darpan portal."
        },
        {
            question: "Is there a fee for NGO Darpan registration?",
            answer: "No, the registration on the NGO Darpan portal is free of cost. However, professional assistance for correct filing may be chargeable."
        },
        {
            question: "What is the validity of the Darpan ID?",
            answer: "The Unique ID generated is valid for a lifetime unless the NGO is blacklisted or dissolved. However, profiles should be updated regularly."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="NGO Darpan"
                heroTitleSuffix="Registration"
                heroSubtitle="Unlock Government Grants"
                heroDescription="A centralized platform by NITI Aayog bridging NGOs and the Government. Get your Unique ID to unlock government grants, schemes, and funding opportunities."
                whatsIncludedList={[
                    "Mandatory for Govt. Grants & Schemes",
                    "Enhances Trust & Credibility",
                    "Access to 35+ Central Ministries",
                    "Lifetime Validity"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= PRICING SECTION ================= */}
            <PricingSection />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<DarpanOverview />}
                advantages={<DarpanRegistrationAdvantages />}
                eligibility={<DarpanEligibility />}
                documents={<DarpanDocumentsSection />}
                process={<DarpanProcessSection />}
                features={<DarpanFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about NGO Darpan Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default DarpanRegistration;
