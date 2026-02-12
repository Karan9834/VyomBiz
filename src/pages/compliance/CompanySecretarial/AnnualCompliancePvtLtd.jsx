import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Shield,
    Calendar,
    Briefcase,
    FileCheck
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const AnnualCompliancePvtLtd = () => {
    const faqs = [
        {
            question: "Is it mandatory to file annual returns for a private limited company even if there is no business?",
            answer: "Yes, filing annual returns is mandatory for every registered company, regardless of whether it has conducted business activities or not. Nil returns must be filed."
        },
        {
            question: "What are the penalties for late filing of annual returns?",
            answer: "The penalty for late filing of annual returns (Form MGT-7 and AOC-4) is ₹100 per day of delay for each form. This penalty continues until the forms are filed and has no upper limit."
        },
        {
            question: "When is the first AGM to be held?",
            answer: "The first Annual General Meeting (AGM) must be held within 9 months from the closing of the first financial year."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Annual Compliance for"
                heroTitleSuffix="Private Limited Company"
                heroSubtitle="Pvt. Ltd. Company Compliance Services"
                heroDescription="Stay compliant with the Companies Act, 2013. Corpbiz handles all your mandatory annual filings, ensuring your Private Limited Company avoids penalties and maintains good legal standing."
                whatsIncludedList={[
                    "Annual Return Filing (MGT-7)",
                    "Financial Statements Filing (AOC-4)",
                    "Director KYC (DIR-3 KYC)",
                    "Auditor Appointment (ADT-1)",
                    "Statutory Register Maintenance",
                    "Secretarial Audit Assistance"
                ]}
                stats={[
                    { count: "100%", label: "Compliance", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <Globe size={20} /> },
                    { count: "Zero", label: "Penalties", icon: <Shield size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "Annual Compliance for Pvt. Ltd. Company - Overview",
                    imageUrl: "/ISO-overview.jpg", // Using placeholder
                    description: [
                        "Annual compliance for a Private Limited Company involves mandatory filings and procedures required by the Companies Act, 2013. These must be completed to maintain the company\\'s active legal status.",
                        "Key compliances include filing of Annual Returns (Form MGT-7), Financial Statements (Form AOC-4), holding the Annual General Meeting (AGM), and maintaining statutory registers.",
                        "Non-compliance can lead to heavy penalties, disqualification of directors, and even striking off of the company\\'s name by the Registrar of Companies (ROC)."
                    ]
                }}
                advantages={{
                    title: "Why is Compliance Crucial?",
                    subtitle: "Benefits of Timely Filing",
                    list: [
                        { title: "Avoid Penalties", desc: "Timely filing saves the company from heavy late fees and legal action." },
                        { title: "Credibility", desc: "Maintains a good compliance score, increasing trust among investors and banks." },
                        { title: "Active Status", desc: "Ensures the company remains 'Active' on the MCA portal." },
                        { title: "Legal Safety", desc: "Protects directors from disqualification and prosecution." },
                        { title: "Financial Visibility", desc: "Regular filing ensures financial transparency and better creditworthiness." }
                    ]
                }}
                eligibility={{
                    title: "Checklist",
                    subtitle: "Key Annual Compliances",
                    list: [
                        { title: "Form AOC-4", desc: "Filing of Balance Sheet, P&L Account, and Directors' Report." },
                        { title: "Form MGT-7", desc: "Filing of Annual Return containing shareholding and management details." },
                        { title: "AGM", desc: "Holding Annual General Meeting within 6 months of financial year end." },
                        { title: "Auditor Appointment", desc: "Filing Form ADT-1 for appointment of Statutory Auditor." },
                        { title: "Director KYC", desc: "Filing DIR-3 KYC for all directors annually." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Documents needed for annual filing",
                    imageUrl: "/ISO-document-required.jpg",
                    list: [
                        "Audited Financial Statements (Balance Sheet & P&L)",
                        "Directors' Report",
                        "Notice of AGM",
                        "MGT-9 (Extract of Annual Return)",
                        "List of Shareholders and Directors",
                        "DSC of Directors"
                    ]
                }}
                process={{
                    title: "Filing Process",
                    subtitle: "Step-by-step Annual Filing Process",
                    steps: [
                        { step: "01", title: "Bookkeeping", desc: "Maintain proper books of accounts throughout the year." },
                        { step: "02", title: "Audit", desc: "Get accounts audited by a Statutory Auditor." },
                        { step: "03", title: "Board Meeting", desc: "Approve financial statements and call for AGM." },
                        { step: "04", title: "AGM", desc: "Hold AGM to adopt financial statements." },
                        { step: "05", title: "Filing AOC-4", desc: "File financial statements with ROC within 30 days of AGM." },
                        { step: "06", title: "Filing MGT-7", desc: "File Annual Return with ROC within 60 days of AGM." }
                    ]
                }}
                whyUs={{
                    title: "Timeline & Due Dates",
                    subtitle: "Important dates to remember",
                    list: [
                        { title: "AGM", desc: "On or before 30th September." },
                        { title: "Form AOC-4", desc: "Within 30 days of AGM (Due: 30th October)." },
                        { title: "Form MGT-7", desc: "Within 60 days of AGM (Due: 29th November)." },
                        { title: "DIR-3 KYC", desc: "On or before 30th September." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default AnnualCompliancePvtLtd;
