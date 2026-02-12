import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Form AOC-4 Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section (Left Content, Right Form)
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Benefits Section
 * 5. Eligibility/Checklist
 * 6. Documents Required
 * 7. Registration Process
 * 8. Why Choose Us
 * 9. FAQ
 */

const FormAOC4 = () => {

    const faqs = [
        {
            question: "What is Form AOC-4?",
            answer: "Form AOC-4 is used by companies to file their financial statements (Balance Sheet, Profit & Loss Account, etc.) with the Registrar of Companies (ROC) for every financial year."
        },
        {
            question: "What is the difference between Form AOC-4 and MGT-7?",
            answer: "Form AOC-4 is for filing Financial Statements, whereas Form MGT-7 is for filing the Annual Return (details of shareholders, directors, and meetings)."
        },
        {
            question: "What is the due date for filing AOC-4?",
            answer: "The due date for filing Form AOC-4 is 30 days from the date of the Annual General Meeting (AGM)."
        },
        {
            question: "What is the penalty for late filing?",
            answer: "A penalty of ₹100 per day is charged for the period of delay, in addition to the normal filing fees. Directors may also face prosecution."
        },
        {
            question: "Is certification by a professional required?",
            answer: "Yes, Form AOC-4 must be certified by a practicing Chartered Accountant (CA), Company Secretary (CS), or Cost Accountant."
        },
        {
            question: "Who needs to file in XBRL format?",
            answer: "Companies listed on stock exchanges, companies with paid-up capital of ₹5 Crore or more, or turnover of ₹100 Crore or more must file using XBRL format."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Form AOC-4 "
                heroTitleSuffix="Filing"
                heroSubtitle="Financial Statement Filing with ROC"
                heroDescription="File your company's Balance Sheet, Profit & Loss Account, and Director's Report with the ROC. We ensure accurate, timely, and convenient filing of Form AOC-4."
                whatsIncludedList={[
                    "Preparation of Financials",
                    "AOC-4 Form Filling",
                    "XBRL Conversion (if applicable)",
                    "ROC Submission"
                ]}
                stats={[
                    { count: "30 Days", label: "From AGM", icon: <Users size={20} /> },
                    { count: "Mandatory", label: "Compliance", icon: <Briefcase size={20} /> },
                    { count: "Expert", label: "Assistance", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Section 137",
                    title: "AOC-4 Filing –",
                    highlightTitle: "Overview",
                    description: [
                        "Every company registered under the Companies Act, 2013 is required to file its financial statements pursuant to Section 137.",
                        "Form AOC-4 is the prescribed form for filing the Balance Sheet, Statement of Profit and Loss, and other documents with the Registrar of Companies (ROC).",
                        "This filing serves as a public disclosure of the company's financial health and performance to its stakeholders and the government."
                    ],
                    whyIdealTitle: "Why File AOC-4?",
                    whyIdealList: [
                        { title: "Statutory Requirement", desc: "Mandatory for every company (Pvt Ltd, Public, OPC) to file annually." },
                        { title: "Transparency", desc: "Provides transparency to shareholders, creditors, and investors." },
                        { title: "Avoid Penalties", desc: "Timely filing avoids hefty daily penalties and legal action." },
                        { title: "Creditworthiness", desc: "Updated compliance records improve the company's credit capability." },
                        { title: "Director Status", desc: "Non-filing can lead to director disqualification." }
                    ]
                }}
                advantages={{
                    title: "Components of AOC-4",
                    subtitle: "What goes into the form?",
                    list: [
                        { title: "Balance Sheet", desc: "Statement of assets, liabilities, and equity." },
                        { title: "Profit & Loss Account", desc: "Summary of revenues, costs, and expenses." },
                        { title: "Cash Flow Statement", desc: "Inflow and outflow of cash (unless exempted)." },
                        { title: "Director's Report", desc: "Report by the Board on company performance." },
                        { title: "Auditor's Report", desc: "Audit findings and comments by the Statutory Auditor." },
                        { title: "CSR Report", desc: "Details of Corporate Social Responsibility expenditure (if applicable)." }
                    ]
                }}
                eligibility={{
                    title: "Who Must File?",
                    subtitle: "Eligibility Criteria",
                    list: [
                        { title: "All Companies", desc: "Every company formed under the Companies Act." },
                        { title: "Private Limited", desc: "Including Small Companies and Startups." },
                        { title: "Public Limited", desc: "Both listed and unlisted public companies." },
                        { title: "OPC", desc: "One Person Companies (within 180 days of year end)." },
                        { title: "Section 8", desc: "Non-profit companies." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "For Form AOC-4 Filing:",
                    list: [
                        "Audited Financial Statements (BS, PL, CF)",
                        "Board's Report with Annexures",
                        "Auditor's Report",
                        "Notice of AGM",
                        "Statement of Subsidiaries (Form AOC-1, if any)",
                        "CSR Policy & Report (if applicable)",
                        "Secretarial Audit Report (if applicable)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Filing Process",
                    subtitle: "Step-by-step Procedure",
                    steps: [
                        { step: "01", title: "Audit", desc: "Get accounts audited by Statutory Auditor." },
                        { step: "02", title: "Board Approval", desc: "Board approves Financial Statements and Directors' Report." },
                        { step: "03", title: "AGM", desc: "Adoption of accounts by shareholders in AGM." },
                        { step: "04", title: "Preparation", desc: "Prepare Form AOC-4 (or AOC-4 XBRL) with attachments." },
                        { step: "05", title: "Certification", desc: "Get the form certified by a practicing professional (CA/CS)." },
                        { step: "06", title: "Filing", desc: "Upload Form AOC-4 on MCA portal." },
                        { step: "07", title: "Payment", desc: "Pay the applicable government fees." },
                        { step: "08", title: "SRN Generation", desc: "Receive Service Request Number (SRN) as proof of filing." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Reliable Compliance Partner",
                    list: [
                        { title: "Timely Filing", desc: "We ensure your returns are filed well before the due date." },
                        { title: "XBRL Expertise", desc: "Specialists in XBRL conversion and filing." },
                        { title: "Accuracy", desc: "Meticulous verification to prevent defective filings." },
                        { title: "Professional Support", desc: "Certified professionals to sign and certify forms." },
                        { title: "Cost Effective", desc: "Competitive pricing for annual compliance packages." },
                        { title: "Advisory", desc: "Expert advice on accounting standards and disclosures." },
                        { title: "Dashboard Access", desc: "Track your compliance status online." },
                        { title: "Complete Solution", desc: "We handle audit coordination, drafting, and filing." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about AOC-4 Filing"
                faqs={faqs}
            />

        </div>
    );
};

export default FormAOC4;
