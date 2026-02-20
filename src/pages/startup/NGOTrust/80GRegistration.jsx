import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * 80G Registration Page matching Vyombiz layout styles
 * Modeled after TrustRegistration.jsx
 */

const Registration80GOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Tax Exemption
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            80G Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            An 80G registration is a certificate issued by the Income Tax Department that aims at encouraging donors to claim tax deductions on contributions made to eligible NGOs and charitable institutions. It provides a pathway allowing donors to receive financial relief by claiming a deduction for the amount donated from their taxable income, thereby incentivizing philanthropy.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is Section 80G?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Section 80G of the Income Tax Act, 1961, enables individuals and organizations to claim tax deductions on donations made to eligible charitable organizations. This registration is vital for any NGO looking to raise funds from the public or corporate sector, as it offers a direct financial benefit to the donor.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80"
                            alt="80G Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Registration80GAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Donor Incentives
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of 80G Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Securing 80G registration offers multiple advantages for both the NGO and its supporters.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80"
                            alt="80G Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Tax Deduction for Donors", desc: "Donors can claim a tax deduction of 50% or 100% of the donated amount, incentivizing larger donations." },
                        { title: "Enhanced Credibility", desc: "Possessing an 80G certificate serves as a badge of trust and transparency for potential donors." },
                        { title: "Wider Donor Reach", desc: "Helps non-profit entities reach a wider pool of corporate and individual donors seeking tax benefits." },
                        { title: "Government Grants", desc: "Essential for applying to various government schemes, grants, and CSR funding opportunities." },
                        { title: "Legal Compliance", desc: "Ensures the NGO is legally recognized and operating in compliance with Indian tax laws." },
                        { title: "Financial Stability", desc: "Increases the ability to expand operations due to better inflow of funds and long-term financial stability." }
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

const Registration80GEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for 80G Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To apply for 80G Registration in India, it's essential to understand the eligibility criteria first.
                    Checklist to determine if your NGO is eligible for Section 80G Certificate:
                </p>

                {/* Registered NGO */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Registered NGO
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Legal Structure –
                            </span>{" "}
                            Must be a Trust, Society, or Section 8 Company registered under relevant acts.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Valid Registration –
                            </span>{" "}
                            Must have a valid registration certificate from the appropriate authority.
                        </li>
                    </ul>
                </div>

                {/* Charitable Purpose */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Charitable Purpose
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Purpose – </span>
                            Assets and income must be utilized strictly for charitable or religious purposes.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">No Business Income – </span>
                            Should not have significant business income; any business must be incidental to objectives.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">NGO Darpan – </span>
                        Registration on the Niti Aayog's NGO Darpan portal is often required.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Proper Accounts – </span>
                        Must maintain impeccable accounting records and have annual audits conducted.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">No Religious Bias – </span>
                        Should not be formed for the benefit of any specific religious community or caste.
                    </p>
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

const Registration80GDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for 80G Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To apply for 80G Registration, you need to submit the following documents along with Form 10A/10AB.
                    Essential documents for the 80G Registration application are mentioned below:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Copy of Registration Certificate – </span>
                            Trust Deed/MOA or Society Registration Certificate.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card – </span>
                            PAN Card of the NGO/Trust/Society.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Proof of Registered Office – </span>
                            Utility Bill (Electricity/Water) or Rent Agreement.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">NOC from Landlord – </span>
                            Required if the office is rented.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">KYC of Trustees/Members – </span>
                            PAN and Aadhaar of all trustees/members.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Activity Report – </span>
                            Activity Report of the past 3 years describing charitable work.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Audited Financial Statements – </span>
                            Audited Financial Statements for the last 3 years.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Details of Board – </span>
                            Details of Board of Trustees/Members with their roles.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const Registration80GProcessSection = () => {
    const steps = [
        {
            title: "Documentation",
            desc: "Gather all necessary legal and financial documents of the NGO including registration certificate, PAN, financial statements, and activity reports."
        },
        {
            title: "Form 10A/10AB",
            desc: "File the application online via Form 10A (Provisional) or 10AB (Regular) through the income tax e-filing portal."
        },
        {
            title: "Verification",
            desc: "The Income Tax Commissioner verifies the application and documents submitted."
        },
        {
            title: "Clarifications",
            desc: "Respond to any queries or additional information sought by the department."
        },
        {
            title: "Approval",
            desc: "Upon satisfaction, the 80G Registration Order is issued by the Income Tax Department."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for 80G Registration in India?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for 80G registration in India involves structured documentation,
                        regulatory approvals, and compliance with statutory requirements. The
                        step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="80G Registration Process"
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
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your 80G Registration Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const Registration80GFeaturesSection = () => {
    const features = [
        {
            title: "Expert Guidance",
            desc: "Experienced CAs and legal experts to handle your application with professional expertise."
        },
        {
            title: "Error-Free Filing",
            desc: "Meticulous verification to ensure zero rejection chances and smooth approval process."
        },
        {
            title: "End-to-End Support",
            desc: "From documentation to final approval, we manage it all for your convenience."
        },
        {
            title: "Compliance Management",
            desc: "Assistance with annual compliances and renewals to maintain your 80G status."
        },
        {
            title: "CSR Advisory",
            desc: "Guidance on attracting and managing CSR funds for your NGO's growth."
        },
        {
            title: "Dedicated Support",
            desc: "Quick resolution of queries by a dedicated relationship manager."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of 80G Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        80G registration enables tax deductions for donors, enhances NGO credibility,
                        and opens doors to government grants and CSR funding opportunities.
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

const Registration80G = () => {

    const faqs = [
        {
            question: "What are the benefits of an 80G certificate?",
            answer: "An 80G certificate allows donors to claim tax deductions (50% or 100%) on their donations. it also enhances the credibility of the NGO, attracts more donors, and opens doors to government grants and CSR funding."
        },
        {
            question: "Who is eligible for 80G Registration?",
            answer: "NGOs registered as Trusts, Societies, or Section 8 Companies that are created for charitable purposes and do not have any business income (unless incidental) are eligible."
        },
        {
            question: "Is 12A registration mandatory for 80G?",
            answer: "Yes, typically 12A registration (for tax exemption on NGO's income) is a prerequisite or is applied for simultaneously with 80G registration."
        },
        {
            question: "What is the validity of 80G Registration?",
            answer: "Under the new regime, provisional registration is valid for 3 years, and regular registration is valid for 5 years, renewable thereafter."
        },
        {
            question: "Can an NGO with 80G registration accept foreign contributions?",
            answer: "No, 80G is for tax benefits for Indian donors. To accept foreign contributions, an NGO must obtain FCRA registration separately."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="80G Registration"
                heroTitleSuffix="for NGOs"
                heroSubtitle="Unlock Tax Benefits & Donor Trust"
                heroDescription="Get hassle-free 80G registration for your NGO. Enable your donors to claim tax deductions and boost your fundraising credibility with expert guidance."
                whatsIncludedList={[
                    "Tax Exemption Benefits for Donors",
                    "Enhanced NGO Credibility",
                    "Expert Legal Documentation",
                    "End-to-End Application Support"
                ]}
                stats={[
                    { count: "10,000+", label: "80G Certificates", icon: <Users size={20} /> },
                    { count: "5000+", label: "NGOs Assisted", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Approval Rate", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<Registration80GOverview />}
                advantages={<Registration80GAdvantages />}
                eligibility={<Registration80GEligibility />}
                documents={<Registration80GDocumentsSection />}
                process={<Registration80GProcessSection />}
                features={<Registration80GFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries regarding 80G Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default Registration80G;
