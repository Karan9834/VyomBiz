import React from "react";

import { Link } from "react-router-dom";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import overview from "../../../assets/ngo1/NGO Accounting Services Compliance & Reporting/overview.png"
import benefits from "../../../assets/ngo1/NGO Accounting Services Compliance & Reporting/overview.png"
import process from "../../../assets/ngo1/NGO Accounting Services Compliance & Reporting/overview.png"


/**
 * NGOAccounting Page matching Vyombiz layout styles
 * URL: https://VyomBiz.io/ngo-accounting
 */

const AccountingOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Financial Integrity
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            NGO Accounting – <span className="text-yellow-400">Focus on Financial Accountability</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            NGO Accounting is a specialized system used to record and manage financial transactions for non-profit organizations. Unlike commercial businesses, NGOs operate primarily for social welfare rather than profit generation. It focuses on tracking donations, grants, and contributions to ensure funds are utilized for their intended purposes.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            NGOs do not have shareholders or owners. Instead of equity, their financial position is reflected through net assets. They must clearly track restricted and unrestricted funds to ensure donor conditions are properly followed. Vyombiz ensures your accounting system follows regulatory requirements while meeting donor reporting expectations.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="NGO Accounting Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const NGOAccountingAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Financial Integrity
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Advantages of Professional Accounting
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why proper accounting is essential for NGOs.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="NGO Accounting Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Transparency", desc: "Enhances credibility and builds trust among donors, government authorities, and the public." },
                        { title: "Program Analysis", desc: "Allows organizations to evaluate the financial performance and impact of individual programs." },
                        { title: "Regulatory Compliance", desc: "Ensures compliance with FCRA regulations, Income Tax laws, and other statutory requirements." },
                        { title: "Fraud Prevention", desc: "Minimizes financial mismanagement and fraud through proper monitoring and controls." },
                        { title: "Grant Eligibility", desc: "Well-maintained financial records improve eligibility for government and international grants." },
                        { title: "Better Decision Making", desc: "Provides reliable financial data to support planning and effective resource allocation." }
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

const AccountingEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Key Reports & Statements Required?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Proper NGO accounting requires maintaining key financial statements and records. The main financial documents include the following.
                </p>

                {/* Financial Statements */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Financial Statements
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Statement of Financial Position –
                            </span>{" "}
                            Similar to a balance sheet, it presents assets, liabilities, and net assets of the organization.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Statement of Activities –
                            </span>{" "}
                            Comparable to an income statement, it records revenue, expenses, and changes in net assets.
                        </li>
                    </ul>
                </div>

                {/* Other Statements */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">Statement of Functional Expenses – </span>
                        Provides a detailed breakdown of expenses based on programs, administration, and fundraising activities.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Statement of Cash Flow – </span>
                        Displays the inflow and outflow of cash from operating, investing, and financing activities.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Get Accounting Support Now
                            </Link>
                </div>

            </div>
        </section>
    );
};

const AccountingDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Books & Documents Required
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To maintain accurate accounts, NGOs must keep the following essential financial records.
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Cash & Bank Vouchers/Books – </span>
                            Detailed records of all cash and bank transactions.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Journal Vouchers & General Ledger – </span>
                            Complete accounting entries maintained through journals and ledgers.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Fixed Assets Register – </span>
                            Record of all fixed assets owned and maintained by the NGO.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Donation Receipt Books – </span>
                            Records and receipts issued for every donation received.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Grant & Project Budgets – </span>
                            Budgets for grants and projects undertaken.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Utilization Certificates (UCs) – </span>
                            Certificates showing utilization of grant funds.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Contract & Agreement Copies – </span>
                            Copies of all contracts and agreements.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Vendor & Purchase Files – </span>
                            Records of vendors and purchases made.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Bank Reconciliation Statements – </span>
                            Monthly bank reconciliation statements.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const AccountingProcessSection = () => {
    const steps = [
        {
            title: "Setup",
            desc: "Creating a chart of accounts aligned with the NGO’s programs and operational activities."
        },
        {
            title: "Recording",
            desc: "Recording donations, grants, and expenses systematically using standard accounting methods."
        },
        {
            title: "Allocation",
            desc: "Allocating expenses correctly to projects and specific funding sources."
        },
        {
            title: "Reconciliation",
            desc: "Periodic reconciliation of bank statements and donor fund balances."
        },
        {
            title: "Reporting",
            desc: "Preparation of monthly or quarterly financial reports for internal review."
        },
        {
            title: "Compliance",
            desc: "Ensuring accurate preparation of statutory filings and tax returns."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Our Accounting Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Structured approach for financial clarity and compliance.
                        The step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="NGO Accounting Process"
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
                                Start Your Accounting Setup Now
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const AccountingFeaturesSection = () => {
    const features = [
        {
            title: "Sector Expertise",
            desc: "Extensive experience with accounting requirements specific to non-profit organizations."
        },
        {
            title: "Compliance Focused",
            desc: "Strict adherence to accounting standards and statutory compliance requirements."
        },
        {
            title: "Technology Driven",
            desc: "Use of modern accounting tools to improve efficiency and accuracy."
        },
        {
            title: "Donor Ready",
            desc: "Financial reports prepared according to the requirements of donors and funding agencies."
        },
        {
            title: "Dedicated Support",
            desc: "A team of experienced CAs and accountants responding to your needs."
        },
        {
            title: "Cost Effective",
            desc: "Professional services at a cost that respects your budget constraints."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of NGO Accounting Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Our accounting services help NGOs maintain financial discipline while ensuring transparency and regulatory compliance.
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

const NGOAccounting = () => {

    const faqs = [
        {
            question: "What is the primary purpose of NGO Accounting?",
            answer: "NGO accounting focuses on financial accountability instead of profit generation. It ensures that funds and donations are used strictly for the intended social welfare objectives."
        },
        {
            question: "What are the tax benefits for NGOs?",
            answer: "Income received by registered NGOs is generally exempt from tax. However, to avail of these exemptions, the NGO must be registered with income tax authorities under sections like 12A."
        },
        {
            question: "Can an NGO operating in multiple locations maintain separate books?",
            answer: "Yes, if an NGO operates in multiple locations, it is often practical and sometimes required to maintain books of accounts location-wise for better tracking and control."
        },
        {
            question: "Are an NGO's financial statements public?",
            answer: "Yes, NGOs are often required to disclose their financial statements to the public, and documents filed with authorities (like the IRS in the US or ITMP in India) are generally accessible."
        },
        {
            question: "What do 'Statement of Activities' and 'Statement of Financial Position' mean?",
            answer: "The 'Statement of Activities' is equivalent to the Income Statement (Profit & Loss), showing revenue and expenses. The 'Statement of Financial Position' is the Balance Sheet, showing assets and liabilities."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="NGO Accounting Services"
                heroTitleSuffix="Compliance & Reporting"
                heroSubtitle="Transparent Financial Management for Social Impact"
                heroDescription="Vyombiz offers specialized NGO accounting services to maintain accurate financial records, ensure regulatory compliance, and promote transparent fund management. Our experts handle the financial processes so you can focus on your social mission."
                whatsIncludedList={[
                    "Fund-Based Accounting & Reporting",
                    "Preparation of Financial Statements",
                    "Budgeting & Grant Management",
                    "Compliance with FCRA & Income Tax"
                ]}
                stats={[
                    { count: "1000+", label: "NGOs Supported", icon: <Users size={20} /> },
                    { count: "100%", label: "Audit Compliance", icon: <CheckCircle size={20} /> },
                    { count: "10+", label: "Years of Experience", icon: <Briefcase size={20} /> }
                ]}
            />
            <TalkExpert expertise="Expertise in NGO Accounting" />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<AccountingOverview />}
                advantages={<NGOAccountingAdvantages />}
                eligibility={<AccountingEligibility />}
                documents={<AccountingDocumentsSection />}
                process={<AccountingProcessSection />}
                features={<AccountingFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about NGO Accounting"
                faqs={faqs}
            />

        </div>
    );
};

export default NGOAccounting;

