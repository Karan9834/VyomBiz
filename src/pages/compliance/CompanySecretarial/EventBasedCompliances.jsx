import React from "react";
import { CheckCircle, Globe, Award, Shield, Calendar, Briefcase, FileCheck, Users, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Event Based Compliances — Vyombiz Legal Compliance Page
 * Sections: Overview | Why Comply | Common Events | Filing Process | Vyombiz Support | FAQ
 * Governed by: Companies Act, 2013 | ROC Forms | MCA Portal
 */

const EventBasedCompliances = () => {

    const navLabels = {
        overview: "Overview",
        advantages: "Importance",
        eligibility: "Common Events",
        postCompliance: "Challenges",
        process: "How We Support",
        features: "Who Needs This",
        whyChooseUs: "Why Vyombiz",
        faq: "FAQ"
    };

    const overviewData = {
        title: "What Are",
        highlightTitle: "Event-Based Compliances?",
        description: [
            "Event-based compliances refer to legal obligations that arise when specific corporate actions or events occur within a company. Unlike annual or periodic compliances, these filings are required immediately after a particular business decision or structural change.",
            "Examples of such events include:",
            "• Appointment or resignation of directors",
            "• Change in company name",
            "• Issue or transfer of shares",
            "• Alteration of Memorandum or Articles",
            "• Change in registered office",
            "• Increase in authorised capital",
            "Whenever these corporate events occur, companies must notify regulatory authorities like the Ministry of Corporate Affairs (MCA) through proper filings and documentation.",
            "Businesses that fail to complete these filings within prescribed timelines may face late fees, penalties, or legal restrictions.",
            "Vyombiz managed by Clink Consultancy Services Private Limited helps businesses identify, prepare, and file event-based compliances seamlessly, ensuring your company remains fully compliant with regulatory requirements."
        ]
    };

    const advantagesData = {
        title: "Why Event-Based Compliances Are Important",
        subtitle: "Many companies focus mainly on annual filings but overlook event-based obligations. However, these compliances are equally important for maintaining the legal status and transparency of a business entity.",
        list: [
            {
                title: "Maintain Legal Validity",
                desc: "Corporate decisions must be officially recorded with regulatory authorities to remain legally enforceable."
            },
            {
                title: "Avoid Penalties",
                desc: "Delayed or missed filings often lead to significant financial penalties under the Companies Act."
            },
            {
                title: "Build Corporate Transparency",
                desc: "Timely filings ensure that shareholders, regulators, and stakeholders have access to accurate company records."
            },
            {
                title: "Protect Directors and Shareholders",
                desc: "Compliance protects the management and owners from potential legal liabilities."
            }
        ],
        description: "With structured compliance management, companies can confidently execute strategic business decisions."
    };

    const eligibilityData = {
        title: "Common Event-Based Compliances for Companies",
        subtitle: "Different corporate events require specific filings with authorities. Below are some of the most common event-based compliances that companies must complete.",
        list: [
            {
                title: "Appointment or Resignation of Directors",
                desc: "Whenever a director joins or leaves the company, the change must be reported to the MCA through appropriate filings within the prescribed timeline."
            },
            {
                title: "Change in Registered Office",
                desc: "If a company shifts its registered office location, the change must be approved by the board and updated in the MCA records."
            },
            {
                title: "Increase in Authorised Share Capital",
                desc: "When a company decides to expand its capital structure, the authorised capital must be modified through proper filings."
            },
            {
                title: "Issue or Allotment of Shares",
                desc: "Issuing new shares to investors or shareholders requires statutory reporting and documentation."
            },
            {
                title: "Change in Company Name",
                desc: "A company planning to rebrand must follow the legal procedure for name change approval and filings."
            },
            {
                title: "Amendment of MOA or AOA",
                desc: "Any change in the Memorandum of Association (MOA) or Articles of Association (AOA) must be properly approved and filed with the authorities."
            },
            {
                title: "Change in Directors’ Details",
                desc: "Any modification in directors’ personal details, designation, or DIN-related updates must also be filed."
            }
        ],
        description: "Vyombiz managed by Clink Consultancy Services Private Limited assists companies in identifying which events trigger compliance requirements and ensuring timely filings."
    };

    const postComplianceData = {
        title: "Challenges Businesses Face With Event-Based Compliances",
        subtitle: "Many companies struggle to keep track of event-based regulatory obligations due to:",
        list: [
            { title: "Regulatory Updates", desc: "Frequent regulatory updates" },
            { title: "Complex Procedures", desc: "Complex filing procedures" },
            { title: "Short Deadlines", desc: "Short compliance deadlines" },
            { title: "Documentation", desc: "Documentation requirements" },
            { title: "Legal Interpretations", desc: "Legal interpretation challenges" }
        ],
        description: "A single missed filing can cause financial penalties or compliance notices from regulatory authorities. Having professional compliance support helps companies stay proactive instead of reactive."
    };

    const processData = {
        title: "How Vyombiz Supports Your Event-Based Compliances",
        subtitle: "Vyombiz managed by Clink Consultancy Services Private Limited provides end-to-end compliance management for businesses, ensuring that all statutory filings are handled efficiently.",
        steps: [
            {
                step: "01",
                title: "Compliance Identification",
                desc: "We analyse corporate events and identify all applicable compliance requirements."
            },
            {
                step: "02",
                title: "Documentation Preparation",
                desc: "Our experts prepare resolutions, forms, and necessary supporting documents."
            },
            {
                step: "03",
                title: "MCA Filing & Submission",
                desc: "We handle the complete filing process with regulatory authorities."
            },
            {
                step: "04",
                title: "Timeline Monitoring",
                desc: "Our team ensures every compliance is completed within statutory deadlines."
            },
            {
                step: "05",
                title: "Compliance Record Management",
                desc: "We maintain organised records of all filings and approvals for future reference."
            }
        ],
        description: "This structured approach helps businesses focus on growth while ensuring regulatory peace of mind."
    };

    const featuresData = {
        title: "Who Needs Event-Based Compliance Support?",
        list: [
            { title: "Private Limited Companies", desc: "Essential for standard private entities." },
            { title: "Startups and Growing Businesses", desc: "Scaling companies with frequent changes." },
            { title: "Companies Raising Funding", desc: "For investors demanding compliance." },
            { title: "Restructuring Operations", desc: "Businesses restructuring ownership or management." },
            { title: "Expanding Operations", desc: "Companies expanding operations." }
        ],
        description: "Any organisation undergoing corporate changes must ensure that all regulatory filings are properly handled."
    };

    const whyChooseUsData = {
        title: "Why Choose Vyombiz?",
        subtitle: "Businesses require more than just compliance filing—they need strategic compliance management. Vyombiz managed by Clink Consultancy Services Private Limited offers:",
        list: [
            {
                title: "Expert secretarial compliance support",
                desc: "Expert compliance operations."
            },
            {
                title: "Accurate and timely filings",
                desc: "Prevent penalties with right filings."
            },
            {
                title: "End-to-end documentation assistance",
                desc: "We handle the entire documentation."
            },
            {
                title: "Proactive compliance tracking",
                desc: "Prevent delays through proactive management."
            },
            {
                title: "Transparent and reliable service",
                desc: "Clear interactions at every phase."
            }
        ],
        description: "Our goal is to help companies maintain complete legal compliance while enabling smooth business operations.\n\nEnsure Your Corporate Events Stay Compliant: Corporate changes are part of business growth, but every event must follow proper legal procedures. Vyombiz managed by Clink Consultancy Services Private Limited ensures your company handles every event-based compliance accurately, efficiently, and on time.\nStay compliant. Stay confident. Focus on growing your business."
    };

    const faqs = [
        {
            question: "What are event-based compliances under the Companies Act?",
            answer: "Event-based compliances are mandatory ROC filings that become necessary only when a specific corporate event or structural change occurs — such as a change in directors, registered office address, share capital, company name, or shareholding pattern. Unlike annual compliances, these are triggered by events and must typically be filed within 30 days of the event."
        },
        {
            question: "What is the time limit for filing event-based forms?",
            answer: "Most event-based forms must be filed with the ROC within 30 days from the date of the triggering event (e.g., passing of a Board/General Meeting resolution or execution of an agreement). Delayed filing attracts additional fees of ₹100 per day per form."
        },
        {
            question: "Is professional certification required for event-based forms?",
            answer: "Yes. Most event-based forms require signatures from a Director and/or Company Secretary and may additionally require certification by a practicing CA/CS/CMA — depending on the nature and significance of the change. For example, MGT-14 (resolution filing) must be signed by a director with a valid DSC."
        },
        {
            question: "What form is used to report a change in director?",
            answer: "Form DIR-12 is filed to report changes in directorship — including appointment, resignation, removal, or vacation of office. It must be filed within 30 days of the change, with a CTC of the Board Resolution and, in case of resignation, letter of resignation."
        },
        {
            question: "What is the difference between INC-22A (ACTIVE) and INC-22?",
            answer: "Form INC-22 is filed to notify the ROC of a change in Registered Office address. Form INC-22A (ACTIVE) was a one-time filing to confirm active company details including registered office proof — it is separate from INC-22 for address changes."
        },
        {
            question: "When is Form MGT-14 required to be filed?",
            answer: "Form MGT-14 must be filed within 30 days of passing certain resolutions — primarily Special Resolutions and Board Resolutions for specific actions listed in Section 179(3) of the Companies Act, 2013. Examples include resolutions for capital increase, borrowings, amendment of MOA/AOA, or buy-back of shares."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            <HeroLayout
                heroTitleMain="Event-Based Compliances"
                heroTitleSuffix="in a Company"
                heroSubtitle="Stay Compliant When Business Events Occur"
                heroDescription="Every major decision in a company—like appointing a director, issuing shares, or changing the registered office—triggers legal compliance requirements. Missing these obligations can lead to penalties and legal complications. With expert compliance support, businesses can ensure every statutory requirement is completed accurately and on time. Ensure every corporate event is legally compliant — without stress."
                whatsIncludedList={[
                    "Director Appointment / Resignation (DIR-12)",
                    "Increase in Authorized Capital (SH-7)",
                    "Change of Registered Office (INC-22)",
                    "Change of Company Name (INC-24)",
                    "Allotment of Shares (PAS-3)",
                    "Resolution Filing with ROC (MGT-14)"
                ]}
                stats={[
                    { count: "30 Days", label: "Standard Filing Window", icon: <Briefcase size={20} /> },
                    { count: "₹100/Day", label: "Penalty After Deadline", icon: <Building2 size={20} /> },
                    { count: "Expert", label: "CS & CA Support", icon: <Users size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                navLabels={navLabels}
                overview={overviewData}
                advantages={advantagesData}
                eligibility={eligibilityData}
                postCompliance={postComplianceData}
                process={processData}
                features={featuresData}
                whyChooseUs={whyChooseUsData}
            />

            <FAQLayout
                title="Event Based Compliances — FAQs"
                subtitle="Frequently asked questions on event-based ROC filings, timelines, penalties, and the forms required for common corporate events."
                faqs={faqs}
            />

        </div>
    );
};

export default EventBasedCompliances;