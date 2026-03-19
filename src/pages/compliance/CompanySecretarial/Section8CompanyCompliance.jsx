import React from "react";
import { Shield, FileText, CheckCircle, Users, Award, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const Section8CompanyCompliance = () => {
    const navLabels = {
        overview: "Overview",
        advantages: "Importance",
        eligibility: "Mandatory Compliance",
        process: "Checklist",
        documents: "Documents Required",
        postCompliance: "Penalties",
        features: "How We Help",
        whyChooseUs: "Why Choose Us",
        faq: "FAQs"
    };

    const faqs = [
        {
            question: "Is compliance mandatory for Section 8 companies?",
            answer: "Yes. Section 8 companies must comply with annual ROC filings, board meetings, financial reporting, and other regulatory requirements under the Companies Act, 2013."
        },
        {
            question: "How many board meetings are required for a Section 8 company?",
            answer: "A minimum of two board meetings every year must be conducted."
        },
        {
            question: "What happens if Section 8 compliance is not completed?",
            answer: "Failure to comply can result in penalties, legal notices, and in severe cases cancellation of the company’s Section 8 status."
        },
        {
            question: "Do Section 8 companies need to file income tax returns?",
            answer: "Yes. Even if the company has tax exemptions, it must file income tax returns and maintain proper records."
        }
    ];

    const overviewData = {
        title: "What is Section 8",
        highlightTitle: "Company Compliance?",
        description: [
            "A Section 8 Company is a special type of non-profit entity registered under the Companies Act, 2013 with the objective of promoting social welfare, education, research, art, charity, environmental protection, and similar causes.",
            "Unlike other companies, Section 8 companies operate without the motive of profit distribution. However, they must strictly follow regulatory requirements set by the Ministry of Corporate Affairs (MCA).",
            "Regular compliance ensures that the organization maintains its legal status, avoids penalties, and continues to operate transparently.",
            "Vyombiz managed by Clink Consultancy Services Private Limited helps non-profit organizations handle their statutory responsibilities efficiently, ensuring full compliance with corporate laws and regulatory frameworks."
        ]
    };

    const advantagesData = {
        title: "Why Section 8 Company Compliance is Important",
        subtitle: "Maintaining compliance is essential not only for legal purposes but also for maintaining credibility among donors, stakeholders, and government authorities. Proper compliance helps organizations:",
        list: [
            { title: "Maintain legal recognition", desc: "Maintain legal recognition under the Companies Act." },
            { title: "Avoid penalties", desc: "Avoid heavy penalties and legal complications." },
            { title: "Build trust", desc: "Build trust among donors and partners." },
            { title: "Ensure transparency", desc: "Ensure transparency in financial reporting." },
            { title: "Continue eligibility", desc: "Continue eligibility for grants and funding." }
        ],
        description: "Vyombiz managed by Clink Consultancy Services Private Limited supports organizations in maintaining structured compliance systems so they can focus on their social mission."
    };

    const eligibilityData = {
        title: "Mandatory Compliance for Section 8 Companies",
        subtitle: "Section 8 companies must adhere to several annual and event-based compliances. These filings ensure transparency, accountability, and proper corporate governance.",
        list: [
            { title: "Board Meetings", desc: "Every Section 8 company must conduct at least two board meetings every year to review operations, finances, and governance matters." },
            { title: "Annual General Meeting (AGM)", desc: "An Annual General Meeting must be held every year to present financial statements and discuss key decisions with members." },
            { title: "Filing of Financial Statements", desc: "The company must submit its financial statements to the Registrar of Companies through Form AOC-4." },
            { title: "Annual Return Filing", desc: "Every Section 8 company must file an annual return through Form MGT-7, which contains details about shareholders, directors, and company activities." },
            { title: "Income Tax Compliance", desc: "If the organization has tax exemptions under Section 12A or 80G, periodic tax filings and compliance must be maintained." }
        ],
        description: "Vyombiz managed by Clink Consultancy Services Private Limited ensures every filing is completed accurately and on time."
    };

    const processData = {
        title: "Annual Compliance Checklist for Section 8 Companies",
        subtitle: "To stay compliant with corporate regulations, organizations must complete the following activities every financial year:",
        steps: [
            { step: "01", title: "Board Meetings", desc: "Conduct minimum board meetings." },
            { step: "02", title: "AGM", desc: "Hold Annual General Meeting (AGM)." },
            { step: "03", title: "Financials", desc: "Prepare financial statements." },
            { step: "04", title: "Annual Returns", desc: "File annual returns with the Registrar of Companies." },
            { step: "05", title: "Statutory Records", desc: "Maintain statutory registers and records." },
            { step: "06", title: "Income Tax", desc: "File income tax returns." },
            { step: "07", title: "Audit", desc: "Ensure proper accounting and audit." }
        ],
        description: "Proper compliance management helps avoid regulatory issues and keeps the organization operational without disruptions."
    };

    const documentsData = {
        title: "Documents Required for Section 8 Compliance",
        description: "To complete annual compliance filings, certain documents and records are required. Vyombiz managed by Clink Consultancy Services Private Limited helps organize and manage these documents to simplify the compliance process.",
        list: [
            "Certificate of Incorporation",
            "Memorandum and Articles of Association (MOA & AOA)",
            "Financial Statements and Balance Sheet",
            "Board Meeting Minutes",
            "Director Identification Numbers (DIN) of directors",
            "Auditor’s Report",
            "Annual Return details"
        ],
        imageUrl: "Documents.jpg"
    };

    const postComplianceData = {
        title: "Penalties for Non-Compliance",
        subtitle: "Failure to meet statutory obligations can result in significant penalties and regulatory consequences. Common risks include:",
        list: [
            { title: "Monetary penalties", desc: "Imposed by the Registrar of Companies." },
            { title: "Director Disqualification", desc: "Disqualification of acting directors." },
            { title: "Loss of benefits", desc: "Loss of tax benefits." },
            { title: "Legal action", desc: "Legal action or cancellation of Section 8 status." }
        ],
        description: "Maintaining timely compliance is essential to avoid these complications. Vyombiz managed by Clink Consultancy Services Private Limited ensures your organization remains fully compliant and protected from legal risks."
    };

    const featuresData = {
        title: "How Vyombiz Helps with Section 8 Company Compliance",
        subtitle: "Managing compliance can be complex for non-profit organizations that are focused on social impact. Professional support helps simplify the process and ensures all legal requirements are fulfilled.",
        list: [
            { title: "Annual ROC filing", desc: "Accurate filing for Section 8 companies." },
            { title: "Board meeting documentation support", desc: "Assistance with notices and minutes." },
            { title: "Annual return & statements", desc: "Filing of AOC-4 and MGT-7." },
            { title: "Compliance reminders", desc: "Calendar management and prompt reminders." },
            { title: "Corporate governance advisory", desc: "Expert advisory for NGOs." },
            { title: "Legal documentation", desc: "Ensuring proper documentation and reporting." }
        ],
        description: "Our experts ensure that every compliance requirement is handled professionally and accurately."
    };

    const whyChooseUsData = {
        title: "Why Choose Vyombiz for Compliance Management",
        subtitle: "Organizations need a reliable partner who understands regulatory frameworks and compliance requirements. Vyombiz managed by Clink Consultancy Services Private Limited provides:",
        list: [
            { title: "Experienced professionals", desc: "Experienced legal and compliance professionals." },
            { title: "Timely filing support", desc: "Timely filing and documentation support." },
            { title: "Transparent management", desc: "Transparent compliance management." },
            { title: "End-to-end assistance", desc: "End-to-end regulatory assistance." },
            { title: "Simplified digital process", desc: "Simplified digital compliance process." }
        ],
        description: "This allows organizations to focus on their core mission while ensuring legal compliance is handled efficiently."
    };

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Section 8 Company"
                heroTitleSuffix="Compliance"
                heroSubtitle="Stay Compliant. Sustain Your Mission."
                heroDescription="Section 8 companies are created to serve social, charitable, and non-profit objectives—but maintaining compliance with the Companies Act, 2013 is equally important to keep that mission alive. With expert compliance support, your organization can focus on impact while the legal responsibilities are handled professionally. Ensure seamless Section 8 compliance with expert guidance."
                whatsIncludedList={[
                    "Annual ROC Fillings",
                    "Board Meeting Documentation Support",
                    "Financial Statement & Audit Assistance",
                    "Tax Exemption Renewals"
                ]}
                stats={[
                    { count: "Expert", label: "Compliance Support", icon: <Users size={20} /> },
                    { count: "MCA", label: "Accurate Filings", icon: <Building2 size={20} /> },
                    { count: "Timely", label: "Delivery", icon: <CheckCircle size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                navLabels={navLabels}
                overview={overviewData}
                advantages={advantagesData}
                eligibility={eligibilityData}
                process={processData}
                documents={documentsData}
                postCompliance={postComplianceData}
                features={featuresData}
                whyChooseUs={whyChooseUsData}
            />

            <FAQLayout title="Frequently Asked Questions" subtitle="Common questions regarding Section 8 Company Compliance" faqs={faqs} />
        </div>
    );
};

export default Section8CompanyCompliance;