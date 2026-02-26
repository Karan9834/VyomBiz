import React from "react";
import { Users, Clock, Shield } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const AnnualCompliancePvtLtd = () => {
    const faqs = [
        {
            question: "Can I submit the annual filing of Pvt Ltd company online?",
            answer: "Yes, all annual filings for a Private Limited Company can be submitted online through the Ministry of Corporate Affairs (MCA) portal. Vyombiz simplifies this process by handling the entire digital submission for you."
        },
        {
            question: "What are the advantages of maintaining timely private limited company compliance?",
            answer: "Timely compliance prevents heavy penalties, protects directors from disqualification, maintains the company's 'Active' status, and builds trust with investors and lenders."
        },
        {
            question: "What are the major filings for a private limited company?",
            answer: "The major filings include AOC-4 (Financial Statements), MGT-7 (Annual Return), DIR-3 KYC (Director KYC), and ITR-6 (Income Tax Return)."
        },
        {
            question: "How often do I need to hold board meetings for my private limited company?",
            answer: "A private limited company must hold at least four board meetings in a financial year, with a maximum interval of 120 days between two consecutive meetings."
        },
        {
            question: "What will happen if I miss any deadline for annual ROC compliance?",
            answer: "Missing deadlines leads to a penalty of ₹100 per day per form. Continued non-compliance can result in the disqualification of directors and the company being struck off by the ROC."
        },
        {
            question: "Is it mandatory to fulfil annual ROC compliances every year?",
            answer: "Yes, it is mandatory for every registered company to file annual returns even if the company has not conducted any business activities during the year (Nil Filing)."
        },
        {
            question: "Do I need to get my financial statements audited before filing?",
            answer: "Yes, under the Companies Act 2013, every private limited company must get its accounts audited by a qualified statutory auditor (Chartered Accountant) before filing with the ROC."
        },
        {
            question: "Do I need to file director's report even without operations?",
            answer: "Yes, a Director's Report is a mandatory attachment to Form AOC-4 and must be prepared and filed even if there are no business operations."
        },
        {
            question: "Is it compulsory to pass a board resolution for every general meeting?",
            answer: "Yes, a board resolution is required to convene a general meeting, approve the notice, and authorize a director or secretary to issue the notice."
        },
        {
            question: "Do I need to appoint an auditor each year?",
            answer: "An auditor is typically appointed for a term of 5 years (until the conclusion of the 6th AGM). However, the company must intimate the ROC about the appointment using Form ADT-1."
        },
        {
            question: "Is GST compliance mandatory?",
            answer: "GST compliance is mandatory if your turnover exceeds the prescribed threshold (₹20/40 Lakhs) or if you are engaged in inter-state supply, E-commerce, or other specific categories."
        },
        {
            question: "Which form should I file for the appointment of the statutory auditor?",
            answer: "Form ADT-1 must be filed with the Registrar of Companies (ROC) to intimate the appointment of the statutory auditor."
        },
        {
            question: "What is the annual ROC compliance for private limited companies?",
            answer: "It refers to the annual mandatory reporting of financial performance and organizational changes to the Registrar of Companies through forms like AOC-4 and MGT-7."
        },
        {
            question: "What are the penalties for non-compliance?",
            answer: "Penalties include late fees (₹100/day), additional fines on the company and its officers, potential imprisonment in severe cases, and striking off of the company name."
        },
        {
            question: "What is the main objective of annual compliance?",
            answer: "The main objective is to ensure transparency by providing updated information about the company's financial health, management, and ownership to the government and stakeholders."
        },
        {
            question: "Do I need to appoint a company secretary?",
            answer: "A full-time Company Secretary (CS) is mandatory only if the paid-up share capital of the company is ₹10 Crore or more. For other companies, secretarial tasks can be handled by directors or external consultants."
        }
    ];

    const navLabels = {
        overview: "Overview",
        advantages: "Advantages",
        eligibility: "Checklist",
        documents: "Documents Required",
        process: "Process",
        features: "Features",
        dueDates: "Deadline",
        faq: "FAQs"
    };

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Annual Filing for"
                heroTitleSuffix="Private Limited Company"
                heroSubtitle="Ensure Worry-Free Annual ROC & Tax Filings"
                heroDescription="Stay 100% compliant with MCA and Income Tax regulations. Vyombiz handles your AOC-4, MGT-7, Audit, and Tax returns with a 98% on-time filing rate, protecting your company from hefty penalties."
                stats={[
                    { count: "98%", label: "On-Time Filing", icon: <Clock size={20} /> },
                    { count: "5000+", label: "Companies Trusted", icon: <Users size={20} /> },
                    { count: "Zero", label: "Hidden Charges", icon: <Shield size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                navLabels={navLabels}
                overview={{
                    title: "Annual Filing of",
                    highlightTitle: "Pvt Ltd Company",
                    badge: "MCA & ROC COMPLIANCE",
                    description: [
                        "The annual filing of Pvt Ltd company in India is a mandatory compliance obligation that ensures a company is running as per the Companies Act of 2013 and Income Tax Act of 1961.",
                        "The procedure involved filing of financial statements, MCA-ROC mandatory requirements, and tax filing returns for annual compliance for a private limited company."
                    ],
                    whyIdealTitle: "Mandatory Compliance",
                    whyIdealList: [
                        { title: "MCA Relevance", desc: "Compliance with Ministry of Corporate Affairs regulations." },
                        { title: "ROC Compliance", desc: "Annual reporting to the Registrar of Companies." },
                        { title: "Income Tax", desc: "Filing returns as per the Income Tax Act of 1961." }
                    ]
                }}
                advantages={{
                    title: "What are the Benefits of Private Limited Annual Compliance?",
                    subtitle: "Ensure transparent, trustworthy and stable business growth.",
                    list: [
                        { title: "Saves Lakhs in Fines", desc: "On-time annual compliance saves money by preventing hefty fines and legal disputes." },
                        { title: "Increases Trust", desc: "Demonstrates transparency and integrity, building trust with creditors and investors." },
                        { title: "Helpful in Raising Funds", desc: "100% compliant companies find it easier to raise capital from VCs." },
                        { title: "Business Continuity", desc: "Prevents business closure and permit revocations through continued compliance." },
                        { title: "Better Decision Making", desc: "Up-to-date statements help you make informed decisions for growth." },
                        { title: "Good Standing", desc: "Helps maintain active status with the ROC and prevents striking off." }
                    ]
                }}
                eligibility={{
                    title: "Checklist for Annual Compliance",
                    subtitle: "Mandatory filings and requirements for every Private Limited Company.",
                    list: [
                        { title: "DPT-3", desc: "Deposits and outstanding loans by June 30." },
                        { title: "Annual General Meeting", desc: "Hold within 6 months of financial year end." },
                        { title: "AOC-4", desc: "Financial statement reporting after AGM." },
                        { title: "MGT-7", desc: "General annual return filing within 60 days of AGM." },
                        { title: "Board Meetings", desc: "Hold at least four times a year." },
                        { title: "ITR-6", desc: "Income tax filing by September 30th." },
                        { title: "Tax Audit", desc: "Submission of audit report within deadlines." },
                        { title: "Advance Tax", desc: "Quarterly assessment and payment." },
                        { title: "GST & TDS", desc: "Monthly and quarterly filings as per pre-determined deadlines." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents needed to complete annual compliance filings:",
                    list: [
                        "Duly Audited Financial Statements (Balance Sheet, P&L, Notes)",
                        "Directors' Report signed by the Board",
                        "Auditors' Report issued by Statutory Auditor",
                        "Notice of AGM and Minutes of Meeting",
                        "Board Resolution Checklist",
                        "List of Shareholders & Debenture holders",
                        "DSC of Director and Professional (CS/CA)",
                        "PAN Card and Certificate of Incorporation"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                }}
                process={{
                    title: "How to Fulfil Annual Compliance?",
                    subtitle: "Vyombiz follows a streamlined process to ensure timely filings.",
                    steps: [
                        { step: "01", title: "Contact Us", desc: "Connect and explain your company's activities to our experts." },
                        { step: "02", title: "Expert Assigned", desc: "Get an individual case manager to guide you throughout." },
                        { step: "03", title: "Prep Filings", desc: "Prepare financial statements, books of accounts, and KYC data." },
                        { step: "04", title: "Doc Collection", desc: "Gather mandatory documents like audit reports and certificates." },
                        { step: "05", title: "Submission", desc: "Final submission of returns to ROC and Income Tax Department." }
                    ]
                }}
                features={{
                    title: "Vyombiz Support Services",
                    subtitle: "Comprehensive management of your corporate obligations.",
                    list: [
                        { title: "MCA Portal Management", desc: "Assistance with login, submissions, and reminders on the MCA portal." },
                        { title: "Automated Dashboards", desc: "Cloud-based documentation and error-free return generation." },
                        { title: "Dedicated Advisor", desc: "Single point of contact expert for all your compliance needs." },
                        { title: "Compliance Monitoring", desc: "Real-time tracking of regulatory and legislative developments." },
                        { title: "Secretarial Services", desc: "Preparation of meeting minutes and statutory registers." },
                        { title: "Tax Dashboard", desc: "Complete assessment of Income Tax, GST, and TDS filings." }
                    ]
                }}
                dueDates={{
                    title: "Important Deadlines",
                    subtitle: "Stay ahead of key dates to avoid massive penalties.",
                    columns: ["Compliance Type", "Form", "Due Date"],
                    rows: [
                        ["Commencement of Business Operations declaration", "Form INC 20A", "Within 180 days of incorporation."],
                        ["Annual General Meeting", "-", "Within 9 months of incorporation and subsequently within 6 months every year."],
                        ["Mandatory Appointment of Auditor", "Form ADT-1", "Within 15 days of the annual general meeting."],
                        ["Board Meetings", "-", "Four times a year with two meetings within 120 days gap."],
                        ["Financial Statement Declaration", "Form AOC-4", "Within 30 days of the annual general meeting."],
                        ["Annual Return of Small and One-Person Companies", "Form MGT-7A", "Within 60 days from the AGM."],
                        ["Director KYC Submission", "Form DIR-3 KYC", "September 30th each year"],
                        ["Board Resolution Filing", "Form MGT-14", "Within 30 days of filing of the resolution."],
                        ["Return of Deposits / Outstanding Loans", "Form DPT-3", "June 30th each year."],
                        ["Disclosure of Interest in Other Companies", "Form MBP-1", "Within 30 days of the first board meeting."],
                        ["Active KYC of a Company", "Form INC-22A", "Within 180 days of incorporation."],
                        ["Director Declaration of Good Standing", "Form DIR-8", "Each financial year end."],
                        ["Individual Director's Report", "-", "Within 21 days before the AGM."]
                    ]
                }}
            />

            <FAQLayout
                title="Annual Filing FAQs"
                subtitle="Frequently asked questions about Private Limited Company compliance."
                faqs={faqs}
            />
        </div>
    );
};

export default AnnualCompliancePvtLtd;
