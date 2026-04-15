import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import overview from '../../../assets/ngo1/80G Registration for NGOs/overview.png'
import benefits from '../../../assets/ngo1/80G Registration for NGOs/benefits.png'
import process from '../../../assets/ngo1/80G Registration for NGOs/process.png'

/**
 * 80G Registration Page matching Vyombiz layout styles
 * Modeled after TrustRegistration.jsx
 */

const Registration80GOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Tax Exemption
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            80G Registration – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            80G registration is a certification issued by the Income Tax Department that allows donors to claim tax deductions on donations made to eligible NGOs and charitable institutions. This provision allows donors to reduce their taxable income by claiming deductions on donated amounts, encouraging charitable contributions.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is Section 80G?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Section 80G of the Income Tax Act, 1961 allows individuals and organizations to claim tax deductions on donations made to approved charitable institutions. This registration is important for NGOs seeking donations from individuals or corporates because it provides a financial incentive to donors.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Donor Incentives
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of 80G Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Obtaining 80G registration provides several benefits for NGOs as well as their donors.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="80G Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Tax Deduction for Donors", desc: "Donors can claim tax deductions of 50% or 100% of the donated amount, encouraging greater contributions." },
                        { title: "Enhanced Credibility", desc: "An 80G certificate increases credibility and builds trust among donors and funding organizations." },
                        { title: "Wider Donor Reach", desc: "Helps NGOs attract more individual and corporate donors looking for tax-saving opportunities." },
                        { title: "Government Grants", desc: "Important for accessing government grants, CSR funds, and institutional funding programs." },
                        { title: "Legal Compliance", desc: "Confirms that the NGO operates in compliance with applicable tax regulations in India." },
                        { title: "Financial Stability", desc: "Improves fundraising potential and helps maintain long-term financial sustainability." }
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
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for 80G Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before applying for 80G registration, it is important to understand the eligibility requirements.
                    The following checklist helps determine whether an NGO qualifies for 80G registration.
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
                            The organization must be registered as a Trust, Society, or Section 8 Company.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Valid Registration –
                            </span>{" "}
                            A valid registration certificate from the relevant authority is required.
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
                            Income and assets must be used strictly for charitable activities.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Business Activity – </span>
                            Any business activity should only be incidental to the NGO’s main objectives.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">NGO Darpan – </span>
                        Registration on the NITI Aayog NGO Darpan portal may be required.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Proper Accounts – </span>
                        The NGO must maintain accurate financial records and conduct regular audits.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Non-Discriminatory – </span>
                        The organization should not operate solely for the benefit of a specific religious community or caste.
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

const Registration80GDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for 80G Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To apply for 80G Registration, you need to submit the following documents along with Form 10A/10AB.
                    The following documents are generally required for the 80G registration application.
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
            desc: "Collect all required legal and financial documents such as registration certificate, PAN, financial statements, and activity details."
        },
        {
            title: "Form 10A/10AB",
            desc: "Submit the application online using Form 10A or Form 10AB through the Income Tax e-filing portal."
        },
        {
            title: "Verification",
            desc: "The Income Tax Department reviews the submitted application and supporting documents."
        },
        {
            title: "Clarifications",
            desc: "Provide clarifications or additional documents if requested by the department."
        },
        {
            title: "Approval",
            desc: "After successful verification, the Income Tax Department issues the 80G registration approval."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
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
                            src={process}
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
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
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
        <section className="w-full py-6 bg-white">
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
            answer: "An 80G certificate allows donors to claim tax deductions of 50% or 100% on eligible donations. It also improves the NGO’s credibility, encourages more donations, and supports access to grants and CSR funding opportunities."
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
                heroDescription="Apply for 80G registration for your NGO with expert support. Allow donors to claim tax deductions and strengthen your fundraising credibility with a smooth registration process."
                whatsIncludedList={[
                    "Tax Exemption Benefits for Donors",
                    "Enhanced NGO Credibility",
                    "Expert Legal Documentation",
                    "End-to-End Application Support"
                ]}
                stats={[
                    { count: "10,000+", label: "80G Registrations Processed", icon: <Users size={20} /> },
                    { count: "5000+", label: "NGOs Supported", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Successful Approvals", icon: <Building2 size={20} /> }
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

