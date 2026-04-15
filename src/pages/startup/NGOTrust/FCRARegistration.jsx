import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2, Globe, FileText, CheckCircle } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from '../../../assets/ngo/FCRA Registration/benefits.png'
import overview from '../../../assets/ngo/FCRA Registration/overview.png'

import Process from '../../../assets/ngo/FCRA Registration/process.png'

/**
 * FCRARegistration Page matching Vyombiz layout styles
 * URL: https://VyomBiz.io/fcra-registration
 */

const FCRAOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Global Impact
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            FCRA Registration – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            In India, any organization intending to receive foreign contributions must obtain registration under the Foreign Contribution Regulation Act (FCRA) from the Central Government. This requirement applies to organizations involved in cultural, economic, educational, religious, or social activities.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            FCRA registration ensures transparency and accountability in the use of foreign funds, protecting both the organization and its donors. The Foreign Contribution Regulation Act regulates foreign donations received by individuals and organizations to ensure they are used responsibly and in accordance with national interests.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="FCRA Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FCRARegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Global Funding
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of FCRA Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Open the door to global funding opportunities for your NGO.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="FCRA Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Global Credibility", desc: "Enables NGOs to legally accept foreign donations, enhancing their credibility internationally." },
                        { title: "Access to Foreign Funds", desc: "Allows organizations to receive foreign contributions to support their social initiatives." },
                        { title: "Investor Confidence", desc: "Builds trust among both domestic and international donors regarding regulatory compliance." },
                        { title: "Tax Benefits", desc: "Organizations may also benefit from tax exemptions under the Income Tax Act when combined with 12A and 80G registrations." },
                        { title: "Enhanced Sustainability", desc: "Foreign funding improves financial stability and helps NGOs carry out long-term social projects." },
                        { title: "Legal Protection", desc: "Ensures the organization operates within the legal framework and avoids regulatory penalties." }
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

const FCRAEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for FCRA Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before applying for FCRA registration in India, organizations must meet certain eligibility conditions.
                    The key eligibility requirements are listed below.
                </p>

                {/* Registered Entity */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Registered Entity
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Legal Structure –
                            </span>{" "}
                            The organization must be registered under the Societies Registration Act, Indian Trusts Act, or as a Section 8 Company under the Companies Act.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                FCRA Bank Account –
                            </span>{" "}
                            The NGO must open a designated FCRA bank account with SBI New Delhi Main Branch.
                        </li>
                    </ul>
                </div>

                {/* Track Record */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Track Record and Financial Criteria
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Track Record – </span>
                            The organization must have at least three years of proven social or charitable activities.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Financial Criteria – </span>
                            At least ₹15 lakh should have been spent on core activities during the last three years.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">12A Registration – </span>
                        The organization should ideally hold a valid 12A registration under the Income Tax Act.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Clean Record – </span>
                        Key functionaries must not have any criminal record or prior legal violations.
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

const FCRADocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for FCRA Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To apply for FCRA Registration, you need to submit the following documents.
                    The following documents are generally required for the FCRA registration application.
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Registration Certificate – </span>
                            Registration Certificate of Association/Society/Trust/Section 8 Company.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Memorandum of Association (MoA) / Trust Deed – </span>
                            Copy of MoA or Trust Deed outlining objectives.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Activity Report – </span>
                            Activity report for the last three years detailing the organization’s charitable work.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Audited Statement of Accounts – </span>
                            Audited financial statements for the previous three years.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Affidavit – </span>
                            Affidavit of each key functionary.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Details of Key Functionaries – </span>
                            Aadhaar and PAN of all key functionaries.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Chief Functionary Signature & Seal – </span>
                            Signature and seal of the association.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">NITI Ayog Registration – </span>
                            NITI Ayog Registration Certificate (Darpan ID).
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const FCRAProcessSection = () => {
    const steps = [
        {
            title: "Access Portal",
            desc: "Access the FCRA online portal provided by the Ministry of Home Affairs."
        },
        {
            title: "Form Selection",
            desc: "Select Form FC-3A for fresh registration or FC-3B for prior permission."
        },
        {
            title: "Fill Application",
            desc: "Fill in the online application form with organization and functionary details."
        },
        {
            title: "Upload Documents",
            desc: "Upload the required documents and affidavits in the specified format."
        },
        {
            title: "Fee Payment",
            desc: "Pay the applicable government fee through the online portal."
        },
        {
            title: "Submission",
            desc: "Submit the application and track the approval status from the Ministry of Home Affairs."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for FCRA Registration in India?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for FCRA registration in India involves structured documentation,
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
                            alt="FCRA Registration Process"
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
                                Start Your FCRA Registration Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const FCRAFeaturesSection = () => {
    const features = [
        {
            title: "Network of Professionals",
            desc: "Supported by a network of experienced CAs, lawyers, and compliance professionals."
        },
        {
            title: "High Success Rate",
            desc: "Assisted with over 5000 FCRA registrations with a strong success record."
        },
        {
            title: "Fundraising Support",
            desc: "Supported NGOs in facilitating foreign donations exceeding ₹1200 Crore."
        },
        {
            title: "Cost Effective",
            desc: "Cost-effective processes designed to support social entrepreneurs and NGOs."
        },
        {
            title: "Dedicated Manager",
            desc: "Personalized guidance to make the process straightforward and hassle-free."
        },
        {
            title: "End-to-End Support",
            desc: "Ongoing assistance from initial consultation to post-registration compliance."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of FCRA Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        FCRA registration enables NGOs to legally accept foreign funds, ensuring compliance
                        with government regulations and transparency.
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

const FCRARegistration = () => {

    const faqs = [
        {
            question: "What is the full form of FCRA?",
            answer: "FCRA stands for the Foreign Contribution Regulation Act. It regulates how foreign contributions are received and used by individuals and organizations in India."
        },
        {
            question: "Who is eligible for FCRA Registration?",
            answer: "NGOs, Societies, Section 8 Companies, and Trusts that have been in existence for at least 3 years and have spent a minimum of Rs. 15 Lakhs on core activities are eligible."
        },
        {
            question: "Is FCRA registration mandatory for receiving foreign funds?",
            answer: "Yes, any charitable organization in India wishing to receive foreign contributions or donations must obtain FCRA registration."
        },
        {
            question: "What is the validity of FCRA Registration?",
            answer: "FCRA registration is valid for a period of 5 years and must be renewed within 6 months before the expiry date."
        },
        {
            question: "Can I apply for FCRA immediately after registering my NGO?",
            answer: "No, typically you need a 3-year track record. However, for specific projects, you can apply for 'Prior Permission' without the 3-year requirement."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FCRA Registration Services"
                heroTitleSuffix="for NGOs"
                heroSubtitle="Legally Accept Foreign Funds with Expert Support"
                heroDescription="Apply for FCRA registration with Vyombiz to legally receive foreign donations and comply with government regulations for NGOs. Our experts assist with eligibility checks, documentation, and the complete application process."
                whatsIncludedList={[
                    "End-to-End Assistance for FCRA Registration",
                    "Guidance on Prior Permission & Permanent Registration",
                    "Eligibility Check & Documentation Support",
                    "FCRA Renewal & Compliance Services"
                ]}
                stats={[
                    { count: "5000+", label: "FCRA Registrations Assisted", icon: <FileText size={20} /> },
                    { count: "₹1200Cr+", label: "Foreign Donations Facilitated", icon: <Globe size={20} /> },
                    { count: "100%", label: "Compliance Support", icon: <CheckCircle size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<FCRAOverview />}
                advantages={<FCRARegistrationAdvantages />}
                eligibility={<FCRAEligibility />}
                documents={<FCRADocumentsSection />}
                process={<FCRAProcessSection />}
                features={<FCRAFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about FCRA Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default FCRARegistration;

