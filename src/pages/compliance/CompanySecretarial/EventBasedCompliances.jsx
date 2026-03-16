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
        advantages: "Why Comply",
        eligibility: "Common Events",
        process: "Filing Process",
        features: "Vyombiz Support",
        faq: "FAQ"
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

    const overviewData = {
        badge: "Companies Act, 2013 — Event-Based ROC Filings",
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
        ],
        whyIdealTitle: "Key Characteristics of Event-Based Filings",
        whyIdealList: [
            {
                title: "Triggered by Specific Events",
                desc: "Unlike annual forms, these are filed only when a specific event occurs — there are no fixed annual due dates. The filing window opens immediately on the event date."
            },
            {
                title: "30-Day Filing Window (Typically)",
                desc: "Most event-based forms have a 30-day window from the date of the event (resolution, execution, exchange of communication). Beyond this, additional fees apply."
            },
            {
                title: "Professional Certification Required",
                desc: "Many event-based forms require certification by a practicing CA/CS/CMA along with a valid Director DSC — ensuring accuracy and legal compliance."
            },
            {
                title: "Penalty for Non-Filing — ₹100/Day",
                desc: "The additional fee of ₹100 per day per form accrues from the day following the due date, with no maximum cap, making prompt filing financially critical."
            }
        ]
    };

    const advantagesData = {
        title: "Why Event-Based Compliances",
        subtitle: "Are Important for Every Company",
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
            },
            {
                title: "Avoiding Strike-Off Risk",
                desc: "The ROC can mark a company as 'Non-Compliant' or initiate strike-off proceedings if critical event-based changes remain unreported — especially for address changes or continued director vacancies."
            },
            {
                title: "Clean Due Diligence Record",
                desc: "Investors and acquirers scrutinize MCA filing history during due diligence. A clean event-based compliance record is a sign of disciplined corporate governance."
            }
        ]
    };

    const eligibilityData = {
        title: "Common Event-Based Compliances",
        subtitle: "for Companies",
        list: [
            {
                title: "Appointment or Resignation of Directors — DIR-12",
                desc: "Whenever a director joins or leaves the company, the change must be reported to the MCA through appropriate filings within the prescribed timeline."
            },
            {
                title: "Change in Registered Office — INC-22",
                desc: "If a company shifts its registered office location, the change must be approved by the board and updated in the MCA records."
            },
            {
                title: "Increase in Authorised Share Capital — SH-7",
                desc: "When a company decides to expand its capital structure, the authorised capital must be modified through proper filings."
            },
            {
                title: "Issue or Allotment of Shares — PAS-3",
                desc: "Issuing new shares to investors or shareholders requires statutory reporting and documentation."
            },
            {
                title: "Change in Company Name — INC-24",
                desc: "A company planning to rebrand must follow the legal procedure for name change approval and filings."
            },
            {
                title: "Amendment of MOA or AOA — MGT-14",
                desc: "Any change in the Memorandum of Association (MOA) or Articles of Association (AOA) must be properly approved and filed with the authorities."
            },
            {
                title: "Change in Directors' Details — DIR-6",
                desc: "Any modification in directors' personal details, designation, or DIN-related updates must also be filed."
            }
        ]
    };

    const processData = {
        title: "How Vyombiz Supports Your",
        subtitle: "Event-Based Compliances",
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
            },
            {
                step: "06",
                title: "End-to-End Tracking",
                desc: "We track the status of every filed form on the MCA portal and respond to any ROC observations — giving you complete visibility and peace of mind."
            }
        ]
    };

    const whyChooseUsData = {
        title: "Why Choose Vyombiz?",
        subtitle: "Your partner for seamless event-based compliance",
        list: [
            {
                title: "Expert secretarial compliance support",
                desc: "Our team understands regulatory procedures and filing requirements in detail."
            },
            {
                title: "Accurate and timely filings",
                desc: "We track deadlines to ensure filings are completed before penalties arise."
            },
            {
                title: "End-to-end documentation assistance",
                desc: "We draft all requisite documents in precise statutory language before submission."
            },
            {
                title: "Proactive compliance tracking",
                desc: "We help companies stay proactive instead of reactive with compliance obligations."
            },
            {
                title: "Transparent and reliable service",
                desc: "Clear documentation, professional support, and complete transparency throughout the process."
            },
            {
                title: "30-Day Filing Guarantee",
                desc: "From the moment you inform us of a corporate event, Vyombiz initiates the filing process immediately — ensuring the mandatory 30-day window is never missed."
            }
        ]
    };

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
                process={processData}
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