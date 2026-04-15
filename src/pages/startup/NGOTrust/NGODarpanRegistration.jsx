import { Link } from "react-router-dom";
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
import overview from '../../../assets/ngo1/NGO Darpan Registration/overview.png'
import benefits from '../../../assets/ngo1/NGO Darpan Registration/benefits.png'
import process from '../../../assets/ngo1/NGO Darpan Registration/process.png'


/**
 * DarpanRegistration Page
 * Refactored to match TrustRegistration design.
 */

const DarpanOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Government Grants
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            NGO Darpan Registration – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The NGO Darpan Portal is managed by NITI Aayog and acts as a bridge between NGOs/Voluntary Organizations and various government ministries and departments. Registration on the portal generates a unique Darpan ID, which is required for NGOs to apply for government grants and schemes.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The portal improves transparency, accountability, and coordination between NGOs and government bodies. Without this ID, NGOs are generally not eligible to apply for many government funding programs. Once registered, the NGO is listed in a national database, improving credibility among donors, CSR partners, and the public.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Government Grants
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Darpan ID
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Gain official recognition and access new funding and collaboration opportunities.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Darpan Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Govt. Grant Access", desc: "Apply for grants and schemes offered by different government ministries through the portal." },
                        { title: "Credibility Boost", desc: "Enhances trust and credibility among donors, partners, and stakeholders." },
                        { title: "Information Flow", desc: "Receive updates about newly launched government schemes and initiatives." },
                        { title: "Transparency", desc: "Helps maintain transparency in project activities and funding records." },
                        { title: "FCRA Assistance", desc: "Supports NGOs in the process of obtaining FCRA registration for foreign funding." },
                        { title: "Networking", desc: "Connect with a large network of voluntary organizations across India." }
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
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for NGO Darpan Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before registering on the NGO Darpan portal, it is important to understand the eligibility requirements.
                    The following entities are eligible for NGO Darpan registration.
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
                            Societies registered under the Societies Registration Act, 1860 are eligible.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Charitable Trust –
                            </span>{" "}
                            Charitable trusts registered under the Indian Trusts Act, 1882 can apply.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Section 8 Company –
                            </span>{" "}
                            Non-profit companies incorporated under Section 8 of the Companies Act, 2013 are eligible.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">Valid Registration – </span>
                        The organization must have a valid registration certificate.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">PAN Card – </span>
                        A PAN card issued in the name of the NGO or organization.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Governing Body – </span>
                        A functioning governing body or executive committee must be present.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Check Your Eligibility Now
                            </Link>
                </div>

            </div>
        </section>
    );
};

const DarpanDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for NGO Darpan Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To register on the NGO Darpan portal, you need to submit the following documents and details.
                    The following documents and details are required for registration.
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
            desc: "Create an account on the NGO Darpan portal by providing basic details."
        },
        {
            title: "Profile",
            desc: "Enter organization details including PAN, registration number, and contact information."
        },
        {
            title: "Members",
            desc: "Provide details of at least three executive members along with PAN and Aadhaar."
        },
        {
            title: "Upload",
            desc: "Upload registration certificate along with Trust Deed or MoA documents."
        },
        {
            title: "Get ID",
            desc: "After verification, a unique Darpan ID is issued by NITI Aayog."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
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
                            src={process}
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
            desc: "Expert support ensures a smooth and hassle-free registration process."
        },
        {
            title: "Document Verification",
            desc: "Complete document verification to reduce errors and avoid application rejection."
        },
        {
            title: "Profile Management",
            desc: "Guidance in creating a complete and accurate NGO profile."
        },
        {
            title: "Grant Updates",
            desc: "Regular updates about relevant government grants and funding programs."
        },
        {
            title: "Compliance Support",
            desc: "Support for maintaining compliance with NITI Aayog requirements."
        },
        {
            title: "Expert Consultants",
            desc: "Experienced team specializing in non-profit sector registrations."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of NGO Darpan Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        NGO Darpan registration helps NGOs access government schemes, improves credibility, and connects them with ministries and departments.
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
            answer: "NGO Darpan is an online platform managed by NITI Aayog that connects NGOs and voluntary organizations with government ministries and departments. It provides a unique identification number (Darpan ID) to registered organizations."
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
                heroDescription="A centralized portal by NITI Aayog connecting NGOs with government ministries. Obtain your Unique Darpan ID to access government schemes, grants, and funding opportunities."
                whatsIncludedList={[
                    "Mandatory for Govt. Grants & Schemes",
                    "Enhances Trust & Credibility",
                    "Access to 35+ Central Ministries",
                    "Lifetime Validity"
                ]}
                stats={[
                    { count: "40K+", label: "Trusted Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Professional Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Service Locations", icon: <Building2 size={20} /> }
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

