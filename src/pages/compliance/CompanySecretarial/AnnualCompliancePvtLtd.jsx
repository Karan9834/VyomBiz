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
            question: "Is annual compliance mandatory for all Private Limited Companies?",
            answer: "Yes. Every Private Limited Company must complete annual compliance filings regardless of business activity or revenue."
        },
        {
            question: "What is the due date for annual compliance?",
            answer: "Annual return and financial statement filings must generally be completed within prescribed timelines after the AGM."
        },
        {
            question: "Can a company operate without annual compliance?",
            answer: "Operating without completing annual compliance can lead to penalties, director disqualification, and possible company strike-off."
        },
        {
            question: "What happens if compliance filings are delayed?",
            answer: "Late filings attract penalties that accumulate daily until the filing is completed."
        },
        {
            question: "Can compliance filings be corrected later?",
            answer: "Yes, corrections can be made through revised filings or additional forms depending on the nature of the error."
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
        advantages: "Benefits",
        eligibility: "Checklist",
        documents: "Documents Required",
        process: "Process",
        features: "Services",
        dueDates: "Deadline",
        faq: "FAQs"
    };

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Annual Compliance for"
                heroTitleSuffix="Private Limited Companies"
                heroSubtitle="Stay Compliant. Stay Confident. Grow Without Legal Worries."
                heroDescription="Running a Private Limited Company in India comes with several mandatory compliance requirements under the Companies Act. Missing deadlines can lead to heavy penalties, director disqualification, and legal complications. Simplify your Annual Compliance with experts. With Vyombiz managed by Clink Consultancy Services Private Limited, your company filings, statutory registers, and ROC submissions are handled accurately and on time — so you can focus on growing your business."
                whatsIncludedList={[
                    "ROC Filings",
                    "Annual Returns & Financial Statements",
                    "Director KYC Compliance",
                    "Expert Compliance Support"
                ]}
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
                    title: "What is Annual Compliance for",
                    highlightTitle: "Private Limited Companies?",
                    badge: "MCA & ROC COMPLIANCE",
                    description: [
                        "Annual compliance refers to the mandatory legal filings and regulatory obligations that every Private Limited Company must complete each financial year. These filings are submitted to the Ministry of Corporate Affairs (MCA) to ensure transparency and proper corporate governance.",
                        "Regardless of whether a company is active, inactive, profitable, or loss-making, it must fulfill annual compliance requirements under the Companies Act 2013.",
                        "These compliances mainly include:",
                        "• Filing financial statements",
                        "• Filing annual returns",
                        "• Conducting board meetings",
                        "• Maintaining statutory registers",
                        "• Auditor appointment filings",
                        "Businesses that fail to complete these obligations can face substantial penalties and legal consequences.",
                        "Through Vyombiz managed by Clink Consultancy Services Private Limited, companies receive structured compliance support to ensure every filing is completed accurately and within the required timelines."
                    ],
                    whyIdealTitle: "Mandatory Compliance",
                    whyIdealList: [
                        { title: "MCA Relevance", desc: "Compliance with Ministry of Corporate Affairs regulations." },
                        { title: "ROC Compliance", desc: "Annual reporting to the Registrar of Companies." },
                        { title: "Income Tax", desc: "Filing returns as per the Income Tax Act of 1961." }
                    ]
                }}
                advantages={{
                    title: "Why Annual Compliance is Important",
                    subtitle: "Maintaining annual compliance is not just a legal requirement — it plays a vital role in building credibility and operational transparency.",
                    list: [
                        { title: "Ensures Legal Continuity", desc: "Regular compliance ensures that your company remains legally active and avoids government penalties." },
                        { title: "Builds Business Credibility", desc: "Properly maintained compliance records improve your company's trustworthiness with investors, banks, and partners." },
                        { title: "Prevents Heavy Penalties", desc: "Late filings attract daily penalties which can accumulate significantly over time." },
                        { title: "Supports Business Growth", desc: "A compliant company structure makes it easier to raise funds, obtain loans, and attract strategic partnerships." },
                        { title: "Better Decision Making", desc: "Up-to-date statements help you make informed decisions for growth." },
                        { title: "Good Standing", desc: "Helps maintain active status with the ROC and prevents striking off." }
                    ]
                }}
                eligibility={{
                    title: "Mandatory Annual Compliance for Private Limited Companies",
                    subtitle: "Every Private Limited Company in India must fulfill several statutory compliances each year.",
                    list: [
                        { title: "Board Meetings", desc: "A company must conduct at least four board meetings in a year, with a maximum gap of 120 days between two meetings." },
                        { title: "Annual General Meeting (AGM)", desc: "Every company must hold an AGM once every year where shareholders review financial statements and company performance." },
                        { title: "Financial Statement Filing (Form AOC-4)", desc: "Companies must submit financial statements including balance sheet, profit & loss account, and auditor report to MCA." },
                        { title: "Annual Return Filing (Form MGT-7)", desc: "This filing contains information about the company's shareholding pattern, directors, and registered office." },
                        { title: "Director KYC (DIR-3 KYC)", desc: "Every director with a Director Identification Number must complete annual KYC verification." },
                        { title: "Auditor Appointment (ADT-1)", desc: "The appointment of the statutory auditor must be filed with the ROC." },
                        { title: "Tax Audit", desc: "Submission of audit report within deadlines." },
                        { title: "GST & TDS", desc: "Monthly and quarterly filings as per pre-determined deadlines." }
                    ]
                }}
                documents={{
                    title: "Documents Required for Annual Compliance",
                    description: "To complete annual compliance filings, companies must maintain the following documents. Maintaining these records ensures smooth and error-free compliance submissions.",
                    list: [
                        "Certificate of Incorporation",
                        "Memorandum of Association (MOA)",
                        "Articles of Association (AOA)",
                        "PAN Card of the Company",
                        "Duly Audited Financial Statements (Balance Sheet, P&L, Notes)",
                        "Director Identification Number (DIN) details",
                        "Shareholder information",
                        "Auditor appointment details"
                    ],
                    imageUrl: "Documents.jpg"
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
                    title: "Our Annual Compliance Services",
                    subtitle: "We provide end-to-end compliance management designed for startups, SMEs, and growing companies.",
                    list: [
                        { title: "Compliance Assessment", desc: "We analyze your company's compliance status and identify pending filings." },
                        { title: "Annual ROC Filings", desc: "Preparation and filing of AOC-4, MGT-7, and other statutory forms." },
                        { title: "Statutory Register Maintenance", desc: "Maintaining company registers and documentation as required by law." },
                        { title: "Director Compliance", desc: "DIR-3 KYC filing and director documentation management." },
                        { title: "Compliance Alerts", desc: "Timely reminders to ensure your company never misses a filing deadline." },
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
                whyChooseUs={{
                    title: "Why Choose Us for Annual Compliance?",
                    subtitle: "Businesses trust Vyombiz managed by Clink Consultancy Services Private Limited to maintain their corporate compliance with efficiency and accuracy.",
                    list: [
                        { title: "Experienced Compliance Professionals", desc: "Our team understands regulatory procedures and filing requirements in detail." },
                        { title: "Timely Filing Assurance", desc: "We track deadlines to ensure filings are completed before penalties arise." },
                        { title: "Transparent Process", desc: "Clear documentation, professional support, and complete transparency." },
                        { title: "End-to-End Support", desc: "From compliance assessment to final ROC filing, everything is handled seamlessly." },
                        { title: "Penalty Avoidance", desc: "By partnering with us, businesses can avoid serious consequences like director disqualification or company strike-off." }
                    ]
                }}
            />

            <FAQLayout
                title="Frequently Asked Questions (FAQs)"
                subtitle="Common queries about Private Limited Company Annual Compliance"
                faqs={faqs}
            />
        </div>
    );
};

export default AnnualCompliancePvtLtd;