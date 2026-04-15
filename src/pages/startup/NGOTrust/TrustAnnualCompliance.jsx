import React from "react";

import { Link } from "react-router-dom";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/ngo1/Trust Annual Compliance/benefits.png"
import overview from "../../../assets/ngo1/Trust Annual Compliance/overview.png"
import process from "../../../assets/ngo1/Trust Annual Compliance/process.png"
/**
 * TrustAnnualCompliance Page matching Vyombiz layout styles
 * Modeled after TrustRegistration.jsx
 */

const ComplianceOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Regulatory Adherence
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Trust Annual Compliance – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Trust, governed by the Indian Trusts Act, 1882, is a legal arrangement where trustees manage assets for the benefit of beneficiaries. To maintain legal recognition and tax benefits, trusts must follow mandatory annual compliance requirements. Annual compliance generally includes maintaining proper books of accounts, submitting audit reports, and filing income tax returns.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Failure to comply may lead to penalties, legal notices, or loss of certain benefits and registrations. Regular compliance promotes transparency and strengthens credibility with donors and government authorities. It also supports the continuation or renewal of tax registrations such as 12A and 80G.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Trust Annual Compliance Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrustAnnualComplianceAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Regulatory Adherence
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Annual Compliance
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Maintaining compliance ensures long-term stability and operational benefits for the Trust.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Trust Compliance Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Validity", desc: "Ensures continuous legal recognition and validity of the Trust entity." },
                        { title: "Tax Exemptions", desc: "Necessary for continuing tax exemptions under Section 11, 12A, and 80G." },
                        { title: "Avoid Penalties", desc: "Helps avoid penalties, fines, and notices from the Income Tax Department." },
                        { title: "Donor Trust", desc: "Improves credibility and encourages donations as well as CSR funding." },
                        { title: "Smooth Operations", desc: "Supports smooth banking transactions and asset management without legal complications." },
                        { title: "Transparency", desc: "Maintains transparent financial records and ensures accountability to trustees and beneficiaries." }
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

const ComplianceEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Needs Annual Compliance?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Understanding which entities require annual compliance is essential to maintain legal status and tax benefits.
                    The following entities generally need to follow Trust Annual Compliance requirements:
                </p>

                {/* Trust Types */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Types of Trusts
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Private Trusts –
                            </span>{" "}
                            Established for the benefit of specific individuals or family members.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Public Trusts –
                            </span>{" "}
                            Formed for charitable or religious purposes benefiting the general public.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">AOPs/BOIs – </span>
                        Associations of Persons or Bodies of Individuals operating in a trust-like structure.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Tax Exempt Entities – </span>
                        Trusts claiming tax exemptions under 12A or 80G must follow strict compliance rules.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">FCRA Registered – </span>
                        Trusts receiving foreign contributions must also comply with FCRA regulations.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">GST Registered – </span>
                        Trusts earning taxable income above the GST threshold must comply with GST requirements.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Get Compliance Support Now
                            </Link>
                </div>

            </div>
        </section>
    );
};

const ComplianceDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Trust Annual Compliance
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To file annual compliance for Trusts, you need to submit the following documents.
                    The following documents are typically required for Trust Annual Compliance filing:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card – </span>
                            PAN Card of the Trust.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Trust Deed & Registration Certificate – </span>
                            Copy of the Trust Deed along with the Registration Certificate.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Audited Balance Sheet & P&L Account – </span>
                            Audited financial statements for the relevant financial year.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Bank Statements – </span>
                            Bank statements covering the entire financial year.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Details of Trustees – </span>
                            KYC details including PAN and Aadhaar of all trustees.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Record of Donations & Grants – </span>
                            Records of all donations and grants received.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">TDS Certificates – </span>
                            TDS Certificates (Form 16/16A) if applicable.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Foreign Contributions Details – </span>
                            Details of Foreign Contributions (if any).
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const ComplianceProcessSection = () => {
    const steps = [
        {
            title: "Bookkeeping",
            desc: "Maintain accurate books of accounts and prepare financial statements for the financial year."
        },
        {
            title: "Statutory Audit",
            desc: "Have accounts audited by a Chartered Accountant if income exceeds the exemption limit."
        },
        {
            title: "File Audit Report",
            desc: "Submit Form 10B or 10BB online before the due date of the Income Tax Return."
        },
        {
            title: "File ITR-7",
            desc: "File the Income Tax Return (ITR-7) within the prescribed deadline."
        },
        {
            title: "Other Filings",
            desc: "File TDS, GST, and FCRA returns if applicable to the trust’s activities."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Complete Trust Annual Compliance?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for Trust Annual Compliance involves structured documentation,
                        audit, and filing requirements. Trust Annual Compliance involves organized documentation, auditing, and timely filing of statutory returns.
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="Trust Annual Compliance Process"
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
                                Start Your Compliance Filing Now
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const ComplianceFeaturesSection = () => {
    const features = [
        {
            title: "Experienced Team",
            desc: "Experienced team of CAs and legal professionals specializing in trust compliance."
        },
        {
            title: "Timely Alerts",
            desc: "Automated reminders and compliance calendar to ensure timely filings."
        },
        {
            title: "End-to-End Management",
            desc: "Complete support from bookkeeping to final filing of statutory returns."
        },
        {
            title: "FCRA Expertise",
            desc: "Specialized guidance for trusts handling foreign contributions."
        },
        {
            title: "Audit Support",
            desc: "Comprehensive support during statutory and internal audits."
        },
        {
            title: "Cost Effective",
            desc: "Affordable compliance packages tailored for NGOs and Trusts."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of Trust Annual Compliance Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Our compliance services help your Trust remain legally compliant, avoid penalties, and maintain important registrations and tax benefits.
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

const TrustAnnualCompliance = () => {

    const faqs = [
        {
            question: "When is the due date for filing ITR for Trusts?",
            answer: "For trusts requiring an audit, the ITR filing deadline is generally 31st October of the assessment year, while others typically file by 31st July."
        },
        {
            question: "Is it mandatory to file an Audit Report in Form 10B?",
            answer: "Yes, if the total income of the trust exceeds the maximum amount not chargeable to tax, getting accounts audited and filing Form 10B is mandatory."
        },
        {
            question: "What happens if a Trust fails to comply with annual filings?",
            answer: "Non-compliance can lead to penalties, loss of tax exemptions (like 12A/80G), and even cancellation of the Trust's registration."
        },
        {
            question: "Do Trusts need to file GST returns?",
            answer: "Yes, if the Trust is registered under GST (i.e., its turnover exceeds the threshold or it provides taxable services), it must file monthly/quarterly GST returns."
        },
        {
            question: "What compliance is needed for Foreign Contributions?",
            answer: "Trusts receiving foreign funds must be registered under FCRA and submit an annual return (Form FC-4) to the Ministry of Home Affairs."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Trust Annual"
                heroTitleSuffix="Compliance"
                heroSubtitle="Stay Compliant & Avoid Penalties"
                heroDescription="Keep your Trust legally compliant and free from penalties. Our experts manage annual filings, audits, and statutory compliance for both Private and Public Trusts."
                whatsIncludedList={[
                    "Financial Statement Preparation",
                    "Audit Report (Form 10B)",
                    "ITR Filing (ITR-7)",
                    "Annual Compliance Maintenance"
                ]}
                stats={[
                    { count: "1000+", label: "Trusts Supported", icon: <Users size={20} /> },
                    { count: "100%", label: "On-Time Filings", icon: <Briefcase size={20} /> },
                    { count: "Dedicated", label: "CA Assistance", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ComplianceOverview />}
                advantages={<TrustAnnualComplianceAdvantages />}
                eligibility={<ComplianceEligibility />}
                documents={<ComplianceDocumentsSection />}
                process={<ComplianceProcessSection />}
                features={<ComplianceFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries regarding Trust Annual Compliance"
                faqs={faqs}
            />

        </div>
    );
};

export default TrustAnnualCompliance;

