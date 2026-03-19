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
        }
    ];

    const navLabels = {
        overview: "Overview",
        advantages: "Benefits",
        eligibility: "Mandatory Compliance",
        documents: "Documents Required",
        postCompliance: "Penalties",
        features: "Our Services",
        whyChooseUs: "Why Choose Us",
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
                        { title: "Supports Business Growth", desc: "A compliant company structure makes it easier to raise funds, obtain loans, and attract strategic partnerships." }
                    ],
                    description: "With Vyombiz managed by Clink Consultancy Services Private Limited, businesses can maintain seamless compliance while focusing on their core operations."
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
                        { title: "Auditor Appointment (ADT-1)", desc: "The appointment of the statutory auditor must be filed with the ROC." }
                    ],
                    description: "Through Vyombiz managed by Clink Consultancy Services Private Limited, companies receive expert assistance to complete each of these filings accurately and efficiently."
                }}
                documents={{
                    title: "Documents Required for Annual Compliance",
                    description: "To complete annual compliance filings, companies must maintain the following documents. Maintaining these records ensures smooth and error-free compliance submissions.",
                    list: [
                        "Certificate of Incorporation",
                        "Memorandum of Association (MOA)",
                        "Articles of Association (AOA)",
                        "PAN Card of the Company",
                        "Financial Statements",
                        "Director Identification Number (DIN) details",
                        "Shareholder information",
                        "Auditor appointment details"
                    ],
                    imageUrl: "Documents.jpg"
                }}
                postCompliance={{
                    title: "Penalties for Non-Compliance",
                    subtitle: "Failure to complete annual compliance can lead to serious consequences for companies and directors.",
                    list: [
                        { title: "Late Filing Penalties", desc: "ROC imposes daily penalties for delayed filings of annual returns and financial statements." },
                        { title: "Director Disqualification", desc: "Directors of non-compliant companies may be disqualified from holding director positions in other companies." },
                        { title: "Company Strike-Off", desc: "If compliance requirements are ignored for a prolonged period, the Registrar of Companies may remove the company from the official register." }
                    ],
                    description: "By partnering with Vyombiz managed by Clink Consultancy Services Private Limited, businesses can avoid these risks and maintain continuous legal compliance."
                }}
                features={{
                    title: "Our Annual Compliance Services",
                    subtitle: "We provide end-to-end compliance management designed for startups, SMEs, and growing companies.",
                    list: [
                        { title: "Compliance Assessment", desc: "We analyze your company's compliance status and identify pending filings." },
                        { title: "Annual ROC Filings", desc: "Preparation and filing of AOC-4, MGT-7, and other statutory forms." },
                        { title: "Statutory Register Maintenance", desc: "Maintaining company registers and documentation as required by law." },
                        { title: "Director Compliance", desc: "DIR-3 KYC filing and director documentation management." },
                        { title: "Compliance Alerts", desc: "Timely reminders to ensure your company never misses a filing deadline." }
                    ],
                    description: "With Vyombiz managed by Clink Consultancy Services Private Limited, companies gain a structured and hassle-free compliance system."
                }}
                whyChooseUs={{
                    title: "Why Choose Us for Annual Compliance?",
                    list: [
                        { title: "Experienced Compliance Professionals", desc: "Our team understands regulatory procedures and filing requirements in detail." },
                        { title: "Timely Filing Assurance", desc: "We track deadlines to ensure filings are completed before penalties arise." },
                        { title: "Transparent Process", desc: "Clear documentation, professional support, and complete transparency." },
                        { title: "End-to-End Support", desc: "From compliance assessment to final ROC filing, everything is handled seamlessly." }
                    ],
                    description: "Businesses trust Vyombiz managed by Clink Consultancy Services Private Limited to maintain their corporate compliance with efficiency and accuracy."
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