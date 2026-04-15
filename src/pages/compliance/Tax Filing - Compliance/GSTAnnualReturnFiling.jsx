import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * GSTAnnualReturnFiling Page matching Vyombiz layout styles
 */

const GSTAnnualReturnFiling = () => {

    const faqs = [
        {
            question: "Who needs to file GSTR-9?",
            answer: "Registered GST taxpayers whose turnover exceeds the prescribed limit are generally required to file GSTR-9 as an annual summary of their GST transactions."
        },
        {
            question: "What is the difference between GSTR-9 and GSTR-9C?",
            answer: "GSTR-9 is the annual return filed by regular taxpayers, while GSTR-9C is a reconciliation statement that reconciles the figures in GSTR-9 with the audited financial statements. GSTR-9C is applicable for taxpayers with turnover exceeding ₹5 Crores."
        },
        {
            question: "Who is exempted from filing GSTR-9?",
            answer: "Input Service Distributors (ISD), Casual Taxable Persons, Non-resident Taxable Persons, and taxpayers deducting/collecting tax at source are generally exempted from filing GSTR-9."
        },
        {
            question: "What happens if I delay filing GSTR-9?",
            answer: "Late filing of GSTR-9 attracts a late fee. It is important to file on time to avoid penalties and ensure compliance."
        },
        {
            question: "Can GSTR-9 be revised after submission?",
            answer: "Once GSTR-9 is filed on the GST portal, it cannot be revised. Therefore, it is important to carefully verify all details before final submission to avoid errors or discrepancies."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="GST Annual Return"
                heroTitleSuffix="Filing Online"
                heroSubtitle="File GSTR-9 Online with Experts"
                heroDescription="Are you a registered taxpayer preparing to file your GST Annual Return? Ensure a smooth and accurate filing process with expert assistance. Our professionals help businesses complete GST annual return filing efficiently while ensuring full compliance with GST regulations."
                whatsIncludedList={[
                    "GSTR-9 Preparation & Filing",
                    "Dedicated Tax Expert Review",
                    "GSTR-9C Reconciliation",
                    "Post-filing Clarification Assistance"
                ]}
                stats={[
                    { count: "12,000+", label: "Businesses Served", icon: <Users size={20} /> },
                    { count: "3,500+", label: "Professional Advisors", icon: <Briefcase size={20} /> },
                    { count: "60+", label: "Offices Across India", icon: <Building2 size={20} /> }
                ]}
            />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Annual GST Compliance Made Simple",
                    title: "Overview of",
                    highlightTitle: "GST Annual Return Filing",
                    description: [
                        "Under the Goods and Services Tax (GST) system, registered taxpayers are required to file an annual return in Form GSTR-9. This return provides a consolidated summary of all outward and inward supplies made during the financial year, including transactions under CGST, SGST, and IGST.",
                        "GSTR-9 serves as a summary of the monthly or quarterly GST returns filed during the year. It helps provide a clear overview of tax liabilities, input tax credit claimed, and total supplies reported by the taxpayer.",
                        <strong>What is GSTR-9 Annual Return?</strong>,
                        "GSTR-9 is the annual return that registered GST taxpayers must file at the end of each financial year. It contains detailed information about all purchases, sales, tax paid, and input tax credit claimed during the year.",
                        "Businesses with turnover exceeding ₹2 crore are generally required to file this return. Filing GSTR-9 helps maintain accurate tax records and ensures compliance with GST regulations."
                    ],
                    whyIdealTitle: "Types of GST Annual Return Forms",
                    whyIdealList: [
                        { title: "GSTR-9", desc: "Annual return for regular taxpayers summarizing all GST transactions during the financial year." },
                        { title: "GSTR-9A", desc: "Annual return previously applicable for taxpayers registered under the GST composition scheme." },
                        { title: "GSTR-9C", desc: "Reconciliation statement that compares GSTR-9 figures with audited financial statements for large taxpayers." }
                    ]
                }}
                advantages={{
                    title: "Who Must File and Who is Exempt",
                    subtitle: "Understanding who needs to file and who is exempted.",
                    list: [
                        { title: "Regular GST Taxpayers", desc: "All registered regular taxpayers must file GSTR-9 for the relevant financial year." },
                        { title: "SEZ Units and Developers", desc: "Special Economic Zone entities must report their GST transactions through GSTR-9." },
                        { title: "Taxpayers Switching Schemes", desc: "Businesses that shift from composition scheme to regular GST during the year may need to file GSTR-9." },
                        { title: "Exemption – ISD", desc: "Input Service Distributors are not required to file GSTR-9." },
                        { title: "Exemption – Non-Resident Taxpayers", desc: "Non-resident taxable persons are generally exempt from filing GSTR-9." },
                        { title: "Exemption – TDS/TCS Deductors", desc: "Entities deducting or collecting tax under GST provisions are not required to file GSTR-9." }
                    ]
                }}
                eligibility={{
                    title: "Prerequisites for Filing GSTR-9",
                    subtitle: "Key requirements for a successful GSTR-9 filing.",
                    list: [
                        { title: "GST Registration", desc: "The taxpayer must be registered under GST during the financial year." },
                        { title: "Filed Monthly Returns", desc: "GSTR-1 and GSTR-3B must be filed for the entire financial year." },
                        { title: "Basic Taxpayer Details", desc: "GSTIN, legal name, trade name, and financial year details are auto-populated." },
                        { title: "Outward Supply Details", desc: "Information about taxable, zero-rated, and exempt supplies during the year." },
                        { title: "Input Tax Credit Details", desc: "Details of ITC claimed, reversed, or ineligible during the year." },
                        { title: "Tax Liability Details", desc: "Breakdown of taxes paid through cash or input tax credit." }
                    ]
                }}
                documents={{
                    title: "Documents Required for GSTR-9 Filing",
                    description: "Essential documents to keep handy for filing GSTR-9.",
                    list: [
                        "GSTR-1 and GSTR-3B Returns",
                        "Annual financial statements",
                        "Reconciliation statement (if applicable)",
                        "Sales and purchase registers",
                        "GST tax payment challans",
                        "Audit report (if required)",
                        "Digital Signature Certificate (DSC)"
                    ],
                    imageUrl: "Documents.jpg"
                }}
                process={{
                    title: "Steps to File GST Annual Return",
                    subtitle: "Step-by-step guide to filing your GST Annual Return.",
                    steps: [
                        { step: "01", title: "Login to GST Portal", desc: "Visit GST official website and login with credentials." },
                        { step: "02", title: "Select Financial Year", desc: "Choose the relevant Financial Year for the return." },
                        { step: "03", title: "Enter Required Information", desc: "Fill in requisite details in various tables (Outward supplies, ITC, etc.)." },
                        { step: "04", title: "Review Draft Return", desc: "Preview the draft GSTR-9 to ensure accuracy." },
                        { step: "05", title: "Calculate Additional Tax Liability", desc: "Compute any late fees or differential liability and pay." },
                        { step: "06", title: "Submit Return with DSC or EVC", desc: "File the return with DSC or EVC." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for GST Annual Return Filing?",
                    subtitle: "Expert assistance for a hassle-free filing experience.",
                    list: [
                        { title: "Turnover Evaluation", desc: "We help assess if filing is mandatory or optional for you." },
                        { title: "Comprehensive Data Reconciliation", desc: "In-depth reconciliation of monthly returns with annual data." },
                        { title: "Accurate and Error-Free Filing", desc: "Expert review to prevent errors and notices." },
                        { title: "Post Filing Compliance Support", desc: "Guidance on any subsequent queries or compliance needs." },
                        { title: "Dedicated Expert Assistance", desc: "Personalized assistance from a dedicated account manager." },
                        { title: "Save Time and Effort", desc: "We handle the complexities so you can focus on business." },
                        { title: "Avoid Late Fees and Penalties", desc: "Timely filing to help you avoid late fees and penalties." },
                        { title: "Secure and Confidential Data Handling", desc: "Your financial data is handled with utmost confidentiality." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about GST Annual Return Filing"
                faqs={faqs}
            />

        </div>
    );
};

export default GSTAnnualReturnFiling;
