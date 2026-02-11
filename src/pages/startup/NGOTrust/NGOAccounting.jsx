import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";


/**
 * NGOAccounting Page matching Vyombiz layout styles
 * URL: https://VyomBiz.io/ngo-accounting
 */

const NGOAccounting = () => {

    const faqs = [
        {
            question: "What is the primary purpose of NGO Accounting?",
            answer: "NGO Accounting focuses on accountability rather than profitability. It ensures that funds are spent appropriately for the intended social welfare purposes."
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
                heroDescription="Vyombiz provides specialized NGO accounting services to ensure accurate financial reporting, regulatory compliance, and transparent fund management. We help you focus on your mission while we handle the numbers."
                whatsIncludedList={[
                    "Fund-Based Accounting & Reporting",
                    "Preparation of Financial Statements",
                    "Budgeting & Grant Management",
                    "Compliance with FCRA & Income Tax"
                ]}
                stats={[
                    { count: "1000+", label: "NGOs Served", icon: <Users size={20} /> },
                    { count: "100%", label: "Audit Success", icon: <CheckCircle size={20} /> },
                    { count: "10+", label: "Years Experience", icon: <Briefcase size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert expertise="Expertise in NGO Accounting" />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Financial Integrity",
                    title: "NGO Accounting –",
                    highlightTitle: "Accountability First",
                    description: [
                        "NGO Accounting is a unique system designed to record and report business transactions for non-profit entities. Unlike for-profit organizations, the primary motive here is social welfare, not profit generation.",
                        "It involves tracking contributions, grants, and donations to ensure they are used for their specific designated purposes. Vyombiz ensures your accounting practices meet all legal requirements and donor expectations.",
                        <strong>Why is it Different?</strong>,
                        "NGOs do not have owners or shareholders. Instead of 'Equity', they have 'Net Assets'. They must track 'Restricted' vs. 'Unrestricted' funds to demonstrate that donor restrictions have been honored."
                    ],
                    whyIdealTitle: "Key Components",
                    whyIdealList: [
                        { title: "Fund Accounting", desc: "Segregating funds into Restricted, Temporarily Restricted, and Unrestricted categories." },
                        { title: "Program Tracking", desc: "Separating expenses by specific programs to analyze the surplus or deficit of each activity." },
                        { title: "No Equity", desc: "Replacing shareholder equity with 'Net Assets' in the Statement of Financial Position." },
                        { title: "Functional Expenses", desc: "Categorizing expenses into Program Services, Management, and Fundraising." }
                    ]
                }}
                advantages={{
                    title: "Advantages of Professional Accounting",
                    subtitle: "Why systematic accounting matters for NGOs.",
                    list: [
                        { title: "Transparency", desc: "Builds trust with donors, government authorities, and the general public." },
                        { title: "Program Analysis", desc: "Enables detailed analysis of each program's financial performance and impact." },
                        { title: "Regulatory Compliance", desc: "Ensures adherence to FCRA, Income Tax Act, and other statutory regulations." },
                        { title: "Fraud Prevention", desc: "Reduces the risk of mismanagement and fraud through strict financial controls." },
                        { title: "Grant Eligibility", desc: "Proper financial records are often a prerequisite for receiving government and international grants." },
                        { title: "Better Decision Making", desc: "Provides accurate financial data for strategic planning and resource allocation." }
                    ]
                }}
                eligibility={{
                    title: "Key Reports & Statements",
                    subtitle: "Essential Financial Documents.",
                    list: [
                        { title: "Statement of Financial Position", desc: "Equivalent to the Balance Sheet, showing Assets, Liabilities, and Net Assets." },
                        { title: "Statement of Activities", desc: "Equivalent to the Income Statement, showing Revenue, Expenses, and Changes in Net Assets." },
                        { title: "Statement of Functional Expenses", desc: "Detailed breakdown of expenses by function (Program, Admin, Fundraising) and nature." },
                        { title: "Statement of Cash Flow", desc: "Shows the inflow and outflow of cash from operating, investing, and financing activities." }
                    ]
                }}
                documents={{
                    title: "Books & Documents",
                    description: "We help you maintain the following essential records:",
                    list: [
                        "Cash & Bank Vouchers/Books",
                        "Journal Vouchers & General Ledger",
                        "Fixed Assets Register",
                        "Donation Receipt Books",
                        "Grant & Project Budgets",
                        "Utilization Certificates (UCs)",
                        "Contract & Agreement Copies",
                        "Vendor & Purchase Files",
                        "Bank Reconciliation Statements"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Our Accounting Process",
                    subtitle: "Structured approach for financial clarity.",
                    steps: [
                        { step: "01", title: "Setup", desc: " establishing the Chart of Accounts tailored to your NGO's specific programs." },
                        { step: "02", title: "Recording", desc: "Systematic recording of all donations, grants, and expenses on an accrual basis." },
                        { step: "03", title: "Allocation", desc: "Proper allocation of costs to respective projects and funding sources." },
                        { step: "04", title: "Reconciliation", desc: "Regular reconciliation of bank accounts and donor balances." },
                        { step: "05", title: "Reporting", desc: "Generation of monthly/quarterly financial reports for management review." },
                        { step: "06", title: "Compliance", desc: "Ensuring all tax filings and statutory returns are prepared accurately." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "Empowering NGOs with financial discipline.",
                    list: [
                        { title: "Sector Expertise", desc: "Deep understanding of the unique accounting challenges faced by the non-profit sector." },
                        { title: "Compliance Focused", desc: "Rigorous adherence to GAAP and local statutory requirements for NGOs." },
                        { title: "Technology Driven", desc: "Utilization of modern accounting software for efficiency and accuracy." },
                        { title: "Donor Ready", desc: "Financials prepared to meet the stringent reporting standards of international donors." },
                        { title: "Dedicated Support", desc: "A team of experienced CAs and accountants responding to your needs." },
                        { title: "Cost Effective", desc: "Professional services at a cost that respects your budget constraints." }
                    ]
                }}
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
