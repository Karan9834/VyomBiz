import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

import benefits from "../../../assets/ngo1/12AB Registration/benefits.png"
import process from "../../../assets/ngo1/12AB Registration/process.png"
import overview from "../../../assets/ngo1/12AB Registration/overview.png"
/**
 * 12ABRegistration Page matching Vyombiz layout styles
 * URL: https://VyomBiz.io/12ab-registration
 */

const Registration12ABOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            New Provision
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            12AB Registration – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The Finance Act, 2020 introduced Section 12AB, replacing the previous Section 12AA registration system. This provision establishes a new registration framework for charitable and religious institutions to improve monitoring and compliance. Under this framework, all trusts previously registered under Section 12A or 12AA must apply again under Section 12AB.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Key Change
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Unlike the earlier 12AA registration that had lifetime validity, 12AB registration is granted for a fixed period of five years and must be renewed periodically. This allows the tax authorities to review and verify the organization’s activities regularly.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="12AB Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Registration12ABAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Compliance
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of 12AB Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Key reasons why 12AB compliance is important for NGOs.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="12AB Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Electronic Database", desc: "Creates a centralized electronic database of NGOs, reducing issues related to lost records or documentation." },
                        { title: "Tax Exemption Continuity", desc: "Allows the NGO to continue claiming tax exemption on income used for charitable purposes." },
                        { title: "80G Approval", desc: "Required for obtaining or renewing 80G approval, which helps NGOs receive tax-deductible donations." },
                        { title: "Legal Compliance", desc: "Compliance with updated tax regulations helps avoid penalties and cancellation of tax benefits." },
                        { title: "Transparency", desc: "Improves transparency and builds trust among donors, regulators, and stakeholders." },
                        { title: "Systematic Verification", desc: "Ensures systematic verification of genuine charitable operations." }
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

const Registration12ABEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for 12AB Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before applying for 12AB registration, it is important to understand who is eligible.
                    The following entities are required to apply under Section 12AB.
                </p>

                {/* Existing Trusts */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Existing Trusts
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Migration Requirement –
                            </span>{" "}
                            Trusts and societies previously registered under Section 12A or 12AA must apply again under Section 12AB.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Validity Period –
                            </span>{" "}
                            Registration granted under 12AB is valid for five years.
                        </li>
                    </ul>
                </div>

                {/* New Applicants */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        New Applicants
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">New NGOs – </span>
                            Newly established organizations seeking tax exemption must apply under Section 12AB.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Provisional Registration – </span>
                            New NGOs receive provisional registration for three years before applying for permanent registration.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Section 8 Companies – </span>
                            Non-profit companies registered under the Companies Act applying for tax exemption benefits.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">80G Registered Entities – </span>
                        Institutions with 80G approval must also comply with 12AB registration requirements.
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

const Registration12ABDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for 12AB Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To apply for 12AB registration, the following documents must be submitted along with Form 10A.
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Trust Deed / Memorandum of Association (MoA) – </span>
                            Original or certified copy of the Trust Deed or MoA.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Certificate of Incorporation / Registration Certificate – </span>
                            Copy of the NGO's registration certificate.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Copy of Old 12A/12AA Registration Certificate – </span>
                            Required for existing trusts migrating to 12AB.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card – </span>
                            PAN Card of the NGO/Trust/Society.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN and Aadhaar of Trustees/Members – </span>
                            KYC documents of all trustees/members.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Address Proof – </span>
                            Utility Bill (Electricity/Water) for Address Proof.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">NOC from Landlord – </span>
                            Required if the office is rented.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Activity Report – </span>
                            Activity Report for the past 3 years or since inception.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Audited Accounts & ITR – </span>
                            Audited Accounts & ITR for the past 3 years.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const Registration12ABProcessSection = () => {
    const steps = [
        {
            title: "Login",
            desc: "Log in to the Income Tax e-filing portal using the NGO’s credentials."
        },
        {
            title: "Form Selection",
            desc: "Choose Form 10A to apply for registration under Section 12AB."
        },
        {
            title: "Fill Details",
            desc: "Provide details of the trust, trustees, and previous registration information."
        },
        {
            title: "Upload Docs",
            desc: "Upload scanned copies of all required supporting documents."
        },
        {
            title: "Verification",
            desc: "Complete verification using DSC or Electronic Verification Code (EVC)."
        },
        {
            title: "Approval",
            desc: "Receive the 12AB registration certificate after approval from the Income Tax Department."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for 12AB Registration in India?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The 12AB registration process involves proper documentation, online filing, and approval from the Income Tax Department. The
                        step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="12AB Registration Process"
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
                                Start Your 12AB Registration Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const Registration12ABFeaturesSection = () => {
    const features = [
        {
            title: "Expert Guidance",
            desc: "Navigate new tax laws with ease using our professional support from experienced CAs and tax experts."
        },
        {
            title: "Timely Filing",
            desc: "Ensure your application is filed within the deadline to avoid lapse of tax-exempt status."
        },
        {
            title: "Documentation Help",
            desc: "We assist in collating and verifying all necessary documents for seamless registration."
        },
        {
            title: "Provisional to Permanent",
            desc: "Assistance in converting provisional registration to permanent registration after 3 years."
        },
        {
            title: "Comprehensive Support",
            desc: "Handling queries and clarifications from the IT department on your behalf."
        },
        {
            title: "Cost Effective",
            desc: "Affordable packages tailored for NGOs and charitable trusts with transparent pricing."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of 12AB Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        12AB registration helps NGOs maintain tax exemptions, regulatory compliance, and eligibility for various benefits.
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

const Registration12AB = () => {

    const faqs = [
        {
            question: "What is 12AB Registration?",
            answer: "Section 12AB is a provision under the Income Tax Act, 1961 that replaced the earlier Section 12AA registration system. It requires charitable trusts and institutions previously registered under 12A or 12AA to apply again under Section 12AB to continue claiming tax exemptions."
        },
        {
            question: "Who needs to apply for 12AB Registration?",
            answer: "All charitable and religious trusts, societies, and Section 8 companies that were previously registered under Section 12A or 12AA, as well as new applicants seeking tax exemption, must apply for 12AB registration."
        },
        {
            question: "What is the validity of 12AB Registration?",
            answer: "For existing trusts re-registering, the validity is 5 years. For new provisional registrations, it is 3 years, after which it must be converted to normal registration."
        },
        {
            question: "Is it mandatory to switch from 12AA to 12AB?",
            answer: "Yes, it is mandatory. The Finance Act 2020 requires all existing trusts to migrate to the new Section 12AB to retain their tax-exempt status."
        },
        {
            question: "What form is used for 12AB Registration?",
            answer: "Form 10A is used for applying for registration under Section 12AB online through the income tax e-filing portal."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="12AB Registration"
                heroTitleSuffix="for NGOs"
                heroSubtitle="Ensure Tax Exemption Compliance with New Provisions"
                heroDescription="Secure your NGO’s tax benefits by registering under Section 12AB. Vyombiz offers expert assistance to help both existing and newly formed trusts complete the new registration process smoothly and continue their tax-exempt status."
                whatsIncludedList={[
                    "Migration from 12A/12AA to 12AB",
                    "New Provisional Registration Support",
                    "Documentation & Form 10A Filing",
                    "Compliance Advisory for NGOs"
                ]}
                stats={[
                    { count: "5000+", label: "Trusts Successfully Migrated", icon: <Users size={20} /> },
                    { count: "High", label: "Success Rate", icon: <CheckCircle size={20} /> },
                    { count: "Professional", label: "Consultation", icon: <Briefcase size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<Registration12ABOverview />}
                advantages={<Registration12ABAdvantages />}
                eligibility={<Registration12ABEligibility />}
                documents={<Registration12ABDocumentsSection />}
                process={<Registration12ABProcessSection />}
                features={<Registration12ABFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about 12AB Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default Registration12AB;

