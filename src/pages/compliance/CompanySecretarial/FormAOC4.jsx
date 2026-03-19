import React from "react";
import { CheckCircle, Shield, FileText, Users, Building2, AlertTriangle, Clock } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FormAOC4 = () => {
    const navLabels = {
        overview: "Overview",
        advantages: "Who Files",
        eligibility: "Timeline",
        documents: "Documents Required",
        features: "Form Types",
        process: "Process",
        postCompliance: "Penalties",
        whyChooseUs: "Why Choose Us",
        faq: "FAQs"
    };

    const faqs = [
        {
            question: "What is the due date for filing Form AOC-4?",
            answer: "Form AOC-4 must be filed within 30 days of the Annual General Meeting."
        },
        {
            question: "Can Form AOC-4 be revised after filing?",
            answer: "Yes. In case of errors, companies may need to submit a revised form depending on the circumstances and ROC guidelines."
        },
        {
            question: "Is AOC-4 mandatory for all companies?",
            answer: "Yes. Every company registered under the Companies Act 2013 must submit its financial statements through AOC-4."
        },
        {
            question: "What happens if AOC-4 is not filed?",
            answer: "Failure to file the form can result in penalties, compliance issues, and regulatory action."
        }
    ];

    const overviewData = {
        title: "What is",
        highlightTitle: "Form AOC-4?",
        description: [
            "Form AOC-4 is a mandatory compliance form filed by companies in India for submitting their financial statements to the Registrar of Companies (ROC) after the Annual General Meeting (AGM).",
            "The form includes key financial documents such as the balance sheet, profit & loss account, auditor’s report, and director’s report. Filing Form AOC-4 ensures transparency and regulatory compliance under the provisions of the Companies Act 2013.",
            "Businesses that fail to submit this form within the prescribed timeline may face significant penalties and compliance issues.",
            "To avoid such risks, Vyombiz managed by Clink Consultancy Services Private Limited offers professional support for accurate and timely filing of Form AOC-4, ensuring your company stays compliant with ROC regulations."
        ]
    };

    const advantagesData = {
        title: "Who Needs to File Form AOC-4?",
        subtitle: "The following companies are required to file Form AOC-4. Any company registered under the Companies Act must file its financial statements through this form after conducting its AGM.",
        list: [
            { title: "Private Limited Companies", desc: "Standard private operations." },
            { title: "One Person Companies (OPC)", desc: "Single-founder companies must file independently." },
            { title: "Public Limited Companies", desc: "Includes listed and unlisted public companies." },
            { title: "Section 8 Companies", desc: "Required for non-profit companies to declare finances." },
            { title: "Financial statement obligations", desc: "Companies with financial statements requiring ROC submission." }
        ]
    };

    const eligibilityData = {
        title: "When Should Form AOC-4 Be Filed?",
        subtitle: "Companies must file Form AOC-4 within 30 days from the date of the Annual General Meeting (AGM). If a company fails to conduct its AGM, the form must still be filed within 30 days from the last date on which the AGM should have been held.",
        list: [
            { title: "Annual General Meeting", desc: "Conducted annually." },
            { title: "Form AOC-4 Filing", desc: "Within 30 days of AGM." },
            { title: "Late Filing", desc: "Additional government fees apply." }
        ],
        description: "Experts at Vyombiz managed by Clink Consultancy Services Private Limited ensure that your filings are completed well within the regulatory deadline."
    };

    const documentsData = {
        title: "Documents Required for AOC-4 Filing",
        description: "To file Form AOC-4 successfully, companies must prepare and submit the following documents. Accurate documentation is crucial to avoid rejection or delays in the filing process.",
        list: [
            "Balance Sheet of the company",
            "Profit & Loss Account",
            "Auditor’s Report",
            "Director’s Report",
            "Cash Flow Statement (if applicable)",
            "Statement of subsidiaries (if any)",
            "Notice of Annual General Meeting",
            "Board Report attachments"
        ],
        imageUrl: "Documents.jpg"
    };

    const featuresData = {
        title: "Types of AOC-4 Forms",
        subtitle: "Different types of AOC-4 forms are used depending on the nature of the company.",
        list: [
            { title: "AOC-4", desc: "Used by most companies to file their financial statements with ROC." },
            { title: "AOC-4 XBRL", desc: "Applicable to companies required to file financial statements in XBRL (Extensible Business Reporting Language) format." },
            { title: "AOC-4 CFS", desc: "Used when companies submit consolidated financial statements for group companies or subsidiaries." }
        ],
        description: "Our experts at Vyombiz managed by Clink Consultancy Services Private Limited help determine the correct form applicable to your company."
    };

    const processData = {
        title: "Step-by-Step Process for Filing Form AOC-4",
        subtitle: "With Vyombiz managed by Clink Consultancy Services Private Limited, this process becomes smooth, quick, and error-free.",
        steps: [
            { step: "01", title: "Financial Statement Prep", desc: "The company prepares audited financial statements after the financial year ends." },
            { step: "02", title: "Conduct AGM", desc: "The financial statements are approved during the AGM." },
            { step: "03", title: "Document Compilation", desc: "All required attachments are collected and verified." },
            { step: "04", title: "Form Prep & Digital Sign", desc: "The form is prepared and digitally signed by directors and certified professionals." },
            { step: "05", title: "Filing with ROC", desc: "The completed form is uploaded on the MCA portal along with government filing fees." },
            { step: "06", title: "Acknowledgement", desc: "Once submitted successfully, the ROC generates an acknowledgement confirming compliance." }
        ]
    };

    const postComplianceData = {
        title: "Penalties for Late Filing of AOC-4",
        subtitle: "Failure to file Form AOC-4 within the prescribed deadline leads to additional government penalties.",
        list: [
            { title: "Additional Fees", desc: "Late filing fees calculated per day." },
            { title: "Status Implication", desc: "Compliance status impact on the company." },
            { title: "Director Repercussions", desc: "Possible legal implications for directors." }
        ],
        description: "Timely filing is essential to avoid unnecessary financial and legal burdens."
    };

    const whyChooseUsData = {
        title: "Why Choose Vyombiz for AOC-4 Filing?",
        subtitle: "Managing compliance requirements can be complex, especially when dealing with financial documentation and regulatory deadlines. Vyombiz managed by Clink Consultancy Services Private Limited simplifies the process through professional assistance and structured compliance management.",
        list: [
            { title: "Expert compliance professionals", desc: "Knowledgeable experts handle your filing perfectly." },
            { title: "Accurate financial statement filing", desc: "We ensure precision in numbers and documents." },
            { title: "Timely ROC submission", desc: "Guaranteed submission before strict deadlines." },
            { title: "End-to-end documentation support", desc: "Comprehensive handling of all statutory papers." },
            { title: "Transparent pricing", desc: "Transparent pricing with no hidden charges." }
        ],
        description: "Our goal is to help businesses stay fully compliant while focusing on their growth."
    };

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Form AOC-4"
                heroTitleSuffix="Filing"
                heroSubtitle="File Your Form AOC-4 with Accuracy & On-Time Compliance"
                heroDescription="Avoid penalties and ensure smooth corporate compliance with expert-assisted Form AOC-4 filing. Our professionals simplify the process so your company’s financial statements are filed correctly with the Registrar of Companies. Stay compliant. Stay stress-free."
                whatsIncludedList={[
                    "Expert-assisted filing",
                    "Accurate financial statement submission",
                    "Quick and hassle-free process",
                    "AOC-4 & XBRL filings supported"
                ]}
                stats={[
                    { count: "Expert", label: "Professionals", icon: <Users size={20} /> },
                    { count: "30 Days", label: "Post-AGM Filing", icon: <Clock size={20} /> },
                    { count: "MCA", label: "Guaranteed Submission", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                navLabels={navLabels}
                overview={overviewData}
                advantages={advantagesData}
                eligibility={eligibilityData}
                documents={documentsData}
                features={featuresData}
                process={processData}
                postCompliance={postComplianceData}
                whyChooseUs={whyChooseUsData}
            />

            <div className="bg-[#002147] py-16 mt-8">
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Stay Compliant with Expert AOC-4 Filing</h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Ensure accurate financial statement submission and avoid late penalties with professional assistance. Get your Form AOC-4 filed quickly and correctly with expert guidance.</p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors">Start Your Filing Today</button>
                </div>
            </div>

            <FAQLayout title="Frequently Asked Questions (FAQs)" subtitle="Common questions regarding AOC-4 filing timelines and compliance" faqs={faqs} />
        </div>
    );
};

export default FormAOC4;