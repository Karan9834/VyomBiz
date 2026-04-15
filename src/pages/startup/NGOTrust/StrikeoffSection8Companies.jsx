import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import overview from "../../../assets/ngo1/Strike Off Section 8 Company/overview.png"
import benefits from "../../../assets/ngo1/Strike Off Section 8 Company/benefits.png"
import process from "../../../assets/ngo1/Strike Off Section 8 Company/process.png"

/**
 * StrikeoffSection8Companies Page matching Vyombiz layout styles
 * Modeled after TrustRegistration.jsx
 */

const StrikeOffOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Company Closure
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Strike Off Section 8 Company – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Section 8 companies are formed for charitable objectives and follow different closure rules compared to standard private limited companies. Unlike other companies, a Section 8 company usually cannot apply directly for voluntary strike off. In most cases, the company must first convert into a regular private limited company by surrendering its Section 8 license.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The government ensures that assets obtained for charitable purposes are used appropriately. Therefore, the company must confirm that its charitable assets are properly transferred or handled before closure. The process involves review by the Regional Director and Registrar of Companies to ensure that charitable funds are not misused.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Strike Off Section 8 Company Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const StrikeoffSection8CompaniesAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Legal Closure
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Striking Off
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Closing an inactive Section 8 company helps reduce compliance risks and operational costs.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Strike Off Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Avoid Compliance", desc: "Removes the requirement for annual filings, statutory audits, and other compliance obligations." },
                        { title: "Avoid Fines", desc: "Prevents penalties for non-compliance that may lead to financial liabilities or director disqualification." },
                        { title: "Reduce Costs", desc: "Maintaining an inactive entity involves administrative expenses. Striking it off eliminates these costs." },
                        { title: "Clean Slate", desc: "Allows promoters to focus on new ventures without maintaining an inactive organization." },
                        { title: "Legal Safety", desc: "Formal closure protects directors from future liabilities related to an inactive company." },
                        { title: "Peace of Mind", desc: "Legal dissolution officially ends the company’s existence and resolves outstanding obligations." }
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

const StrikeOffEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Pre-requisites for Closure?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before striking off a Section 8 Company, certain prerequisites must be fulfilled.
                    The key conditions required before starting the strike-off process are listed below.
                </p>

                {/* Operational Status */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Operational Status
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Non-operational –
                            </span>{" "}
                            The company should be inactive or should not have started business operations.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Asset Transfer –
                            </span>{" "}
                            Charitable assets may need to be transferred to another eligible Section 8 company.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">No Pending Litigation – </span>
                        The company should not have any ongoing legal disputes or regulatory investigations.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">No Liabilities – </span>
                        All outstanding debts must be cleared and No Objection Certificates obtained from creditors.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Annual Filings – </span>
                        All pending annual returns and financial statements must be filed before closure.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Special Resolution – </span>
                        Members must pass a special resolution approving the company’s closure.
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

const StrikeOffDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Mandatory Documents for Strike Off
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To strike off a Section 8 Company, you need to submit the following documents.
                    The following documents are required for conversion and the strike-off process.
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Board Resolution & Special Resolution – </span>
                            Resolutions approving conversion and strike off.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Memorandum & Articles of Association – </span>
                            MOA & AOA of the company.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Statement of Assets & Liabilities – </span>
                            Audited Statement of Assets & Liabilities.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Valuation Report – </span>
                            Valuation Report by Registered Valuer for asset transfer.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">NOC from Creditors – </span>
                            NOC from all Creditors confirming no outstanding dues.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Director's Declaration & Indemnity Bond – </span>
                            Declaration and indemnity bond from directors.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Certificate of Incorporation & PAN – </span>
                            Copy of Certificate of Incorporation and PAN Card.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Latest Audited Balance Sheet & P&L – </span>
                            Latest Audited Balance Sheet & P&L Account.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Digital Signature Certificates (DSC) – </span>
                            DSC of Directors for online filing.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const StrikeOffProcessSection = () => {
    const steps = [
        {
            title: "Conversion Application",
            desc: "Submit an application to the Regional Director for converting the Section 8 company into a private limited company."
        },
        {
            title: "License Surrender",
            desc: "Surrender the Section 8 license and receive approval for conversion from the Regional Director."
        },
        {
            title: "Registrar Approval",
            desc: "The Registrar of Companies issues a new Certificate of Incorporation after conversion."
        },
        {
            title: "Strike Off Application",
            desc: "File Form STK-2 with the Registrar of Companies to initiate the strike-off process."
        },
        {
            title: "Final Dissolution",
            desc: "The ROC publishes the strike-off notice in the Official Gazette and dissolves the company."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Strike Off a Section 8 Company?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for striking off a Section 8 Company involves a two-stage process:
                        Conversion followed by Strike Off. The step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="Section 8 Strike Off Process"
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
                                Start Your Strike Off Process Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const StrikeOffFeaturesSection = () => {
    const features = [
        {
            title: "Expert Strategy",
            desc: "Handling the two-step conversion and strike-off process efficiently with legal expertise."
        },
        {
            title: "Asset Valuation",
            desc: "Assistance with proper valuation and transfer of charitable assets."
        },
        {
            title: "Documentation",
            desc: "Drafting of all legal resolutions, affidavits, and indemnity bonds."
        },
        {
            title: "RD Coordination",
            desc: "Liaisoning with Regional Director for conversion approval."
        },
        {
            title: "Compliance Check",
            desc: "Ensuring all past compliances are met to avoid rejection."
        },
        {
            title: "Fast Track Processing",
            desc: "Proactive follow-ups to expedite the typically long process."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of Section 8 Strike Off Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Our strike off services navigate the complex legalities of Section 8 closure,
                        ensuring smooth conversion and final dissolution.
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

const StrikeoffSection8Companies = () => {

    const faqs = [
        {
            question: "Why is it difficult to close a Section 8 company in India?",
            answer: "Unlike other companies, Section 8 companies cannot be directly struck off. They usually must convert into a regular private limited company before applying for strike off because of their charitable status and asset regulations."
        },
        {
            question: "Is it mandatory to convene a board meeting before applying for strike off?",
            answer: "Yes, the company must hold a board meeting and pass a special resolution to approve the strike off / conversion proposal before proceeding."
        },
        {
            question: "Can a Section 8 Company serve its objective after striking off?",
            answer: "No, once the company is struck off, it ceases to exist as a legal entity and cannot perform any activities or further its charitable objectives."
        },
        {
            question: "What happens to the assets of a Section 8 company upon closure?",
            answer: "Surplus assets cannot be distributed to members. They typically must be transferred to another Section 8 company with similar objects or to the government."
        },
        {
            question: "Is there any possibility of retrieving a company after strike off?",
            answer: "Generally, once a company is struck off under this process, it cannot be easily retrieved. Restoration is a complex legal process involving the NCLT."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Strike Off Section 8"
                heroTitleSuffix="Company"
                heroSubtitle="Simplify Closure & Compliance"
                heroDescription="Close your Section 8 Company smoothly with expert assistance. Our team manages the entire process including conversion, compliance checks, and final company dissolution."
                whatsIncludedList={[
                    "Conversion to Normal Company",
                    "License Surrender Assistance",
                    "Asset & Liability Valuation",
                    "Final Strike Off Filing"
                ]}
                stats={[
                    { count: "500+", label: "Companies Successfully Closed", icon: <Users size={20} /> },
                    { count: "100%", label: "Compliance Success", icon: <Briefcase size={20} /> },
                    { count: "Dedicated", label: "Legal Support", icon: <Building2 size={20} /> }
                ]}
            />
            <TalkExpert expertise="Expertise in Strike off Section 8 Companies" />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<StrikeOffOverview />}
                advantages={<StrikeoffSection8CompaniesAdvantages />}
                eligibility={<StrikeOffEligibility />}
                documents={<StrikeOffDocumentsSection />}
                process={<StrikeOffProcessSection />}
                features={<StrikeOffFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries regarding Section 8 Company Strike Off"
                faqs={faqs}
            />

        </div>
    );
};

export default StrikeoffSection8Companies;

