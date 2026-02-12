import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Shield,
    CalendarCheck,
    FileSpreadsheet,
    Users
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FormMGT7 = () => {
    const faqs = [
        {
            question: "What is Form MGT-7?",
            answer: "MGT-7 is the electronic form for filing the Annual Return of a company with the Ministry of Corporate Affairs, containing details of shareholding, directors, and meetings."
        },
        {
            question: "What is MGT-7A?",
            answer: "MGT-7A is an abridged annual return form applicable only for One Person Companies (OPCs) and Small Companies."
        },
        {
            question: "What is MGT-8?",
            answer: "MGT-8 is a certificate from a practicing Company Secretary required for listed companies and companies with paid-up capital ≥ from ₹10 Cr or turnover ≥ ₹50 Cr."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Form"
                heroTitleSuffix="MGT-7"
                heroSubtitle="Annual Return Filing Service"
                heroDescription="File your Company's Annual Return seamlessly. Corpbiz ensures accurate and timely filing of Form MGT-7/MGT-7A, helping you maintain perfect secretarial compliance."
                whatsIncludedList={[
                    "Preparation of Annual Return",
                    "Filing Form MGT-7 / MGT-7A",
                    "Certification by CS (MGT-8)",
                    "Shareholding Pattern Reporting",
                    "Director & Meeting Details",
                    "Penalty Management"
                ]}
                stats={[
                    { count: "100%", label: "Timely", icon: <CalendarCheck size={20} /> },
                    { count: "Expert", label: "CS Team", icon: <Users size={20} /> },
                    { count: "Secure", label: "Data", icon: <Shield size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "Form MGT-7 - Overview",
                    imageUrl: "/ISO-overview.jpg",
                    description: [
                        "Form MGT-7 is the Annual Return filed by every company registered in India. It is a comprehensive document that provides a snapshot of the company's non-financial details as of the close of the financial year.",
                        "It includes information on registered office, principal business activities, particulars of holding, subsidiary and associate companies, shares, debentures, indebtedness, members, and management.",
                        "The due date for filing MGT-7 is generally 60 days from the date of the Annual General Meeting (AGM)."
                    ]
                }}
                advantages={{
                    title: "Compliance Importance",
                    subtitle: "Why file MGT-7?",
                    list: [
                        { title: "Statutory Duty", desc: "Mandatory under Section 92 of the Companies Act, 2013." },
                        { title: "Transparency", desc: "Provides public access to company's updated structure and management." },
                        { title: "Avoid Prosecution", desc: "Failure to file attracts heavy penalties for company and officers in default." },
                        { title: "Active Status", desc: "Keeps the company status 'Active' and prevents strike-off." }
                    ]
                }}
                eligibility={{
                    title: "Key Contents",
                    subtitle: "What goes inside?",
                    list: [
                        { title: "Business Profile", desc: "Principal business activities and registered office details." },
                        { title: "Shareholding", desc: "Pattern of shareholding (Promoters vs Public)." },
                        { title: "Directors/KMP", desc: "Details of Directors and Key Managerial Personnel." },
                        { title: "Meetings", desc: "Details of Board and General Meetings held during the year." },
                        { title: "Remuneration", desc: "Remuneration of Directors and KMP." }
                    ]
                }}
                process={{
                    title: "Filing Process",
                    subtitle: "From AGM to ROC",
                    steps: [
                        { step: "01", title: "Data Collection", desc: "Collate data from statutory registers and board minutes." },
                        { step: "02", title: "Preparation", desc: "Prepare the Annual Return draft." },
                        { step: "03", title: "Certification", desc: "Get it certified by a Practicing Company Secretary (if applicable)." },
                        { step: "04", title: "Board Approval", desc: "Approve the Annual Return in a Board Meeting (usually authorized)." },
                        { step: "05", title: "Submission", desc: "File Form MGT-7/7A on the MCA V3 portal." },
                        { step: "06", title: "Payment", desc: "Pay the statutory fee based on authorized capital." }
                    ]
                }}
                whyUs={{
                    title: "Why Corpbiz?",
                    subtitle: "Compliance Partners",
                    list: [
                        { title: "Expert CS", desc: "Our Company Secretaries handle the certification and scrutiny." },
                        { title: "Accuracy", desc: "Multi-level checks to ensure data accuracy." },
                        { title: "V3 Portal Ready", desc: "We are fully equipped to handle filings on the new MCA V3 portal." },
                        { title: "Bulk Filing", desc: "Efficient handling for groups with multiple companies." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default FormMGT7;
