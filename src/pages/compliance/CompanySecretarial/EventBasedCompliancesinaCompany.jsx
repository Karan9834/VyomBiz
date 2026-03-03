import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Event-Based Compliances in a Company — Vyombiz Legal Compliance Page
 * Sections: Overview | Examples | Forms | Vyombiz Support | FAQs
 */
const EventBasedCompliancesinaCompany = () => {

    const faqs = [
        {
            question: "What are Event-Based Compliances?",
            answer: "Event-Based Compliances are mandatory filings — other than routine annual compliances — that a company must make to the ROC whenever a specific event occurs, such as a change in directors, share capital, registered office, or MOA/AOA."
        },
        {
            question: "Who should report regarding any alteration?",
            answer: "The Directors and Key Managerial Personnel (KMP) are responsible for reporting all changes to the Registrar of Companies (ROC) within the prescribed timeline."
        },
        {
            question: "What are the Kinds of Event-Based Compliances?",
            answer: "Two kinds: (1) Annual ROC Compliance — required at the end of each financial year. (2) ROC Event-Based Compliance — required each time a specific corporate event occurs, such as a change in directors, MOA/AOA, or share capital."
        },
        {
            question: "Which cases does Event Based Compliance deal with?",
            answer: "It covers change in directors or KMP, appointment of MD, change in registered office or company name, increase in share capital, modification of MOA/AOA, change in auditors, transfer or issuance of shares, and creation or modification of charges."
        },
        {
            question: "Which Authorities deal with provisions of Event-Based Compliance?",
            answer: "The Registrar of Companies (ROC) under the Ministry of Corporate Affairs (MCA) is the primary authority. The Income Tax Department handles events related to TDS, audit, and ITR filings."
        },
        {
            question: "Does CSR Policy require to be mentioned?",
            answer: "Yes. If a company meets the threshold under Section 135 of the Companies Act, it must adopt a CSR policy, form a CSR committee, and report activities in the Annual Report and Directors' Report."
        },
        {
            question: "Who should sign during submission of documents?",
            answer: "Documents must be digitally signed by a Director using a valid DSC. Most ROC forms also require certification by a practicing Company Secretary (PCS) or Chartered Accountant (CA)."
        },
        {
            question: "When to communicate the declaration about voting results?",
            answer: "Voting results must be communicated within 48 hours of the conclusion of a General Meeting and published on the company's website (if applicable)."
        },
        {
            question: "When to file E-Form INC-22?",
            answer: "INC-22 must be filed within 15 days of a change in the company's registered office address."
        },
        {
            question: "When to file E-Form MGT-14?",
            answer: "MGT-14 must be filed within 30 days from the date of passing the resolution — whether a Board Resolution or a Special/Ordinary Resolution at a General Meeting."
        }
    ];

    const navLabels = {
        overview: "Overview",
        advantages: "Examples",
        dueDates: "Forms",
        features: "Vyombiz Support",
        faq: "FAQs"
    };

    const overviewData = {
        badge: "Companies Act, 2013",
        title: "Event-Based Compliances –",
        highlightTitle: "An Overview",
        description: [
            "Event-Based Compliances are mandatory filings that a company must make to the Registrar of Companies (ROC) on the occurrence of a specific corporate event. Unlike annual compliances, these are not periodic — they are triggered by events such as a change in directors, share capital, MOA/AOA, or registered office.",
            "Once a private company is incorporated under the Companies Act, 2013, any change in its structure or management must be disclosed to the Registrar within a prescribed window — typically 15 to 30 days. These compliances apply equally to companies and LLPs.",
            "Non-disclosure or delay in filing attracts severe penalties. In case of default, both the company and its directors are liable for monetary fines and non-monetary penal consequences, including disqualification of directors."
        ],
        whyIdealTitle: "Kinds of Event-Based Compliances",
        whyIdealList: [
            {
                title: "Annual ROC Compliance",
                desc: "Mandatory at the end of each financial year — includes financial statements, annual returns, and the Directors' Report."
            },
            {
                title: "ROC Event-Based Compliance",
                desc: "Triggered by a specific event — change in directors, MOA/AOA, registered office, or share capital — must be filed promptly with supporting documents."
            },
            {
                title: "Penalty for Non-Compliance",
                desc: "Failure to report within the prescribed period results in ₹100/day additional fees and may lead to prosecution of directors under the Companies Act."
            }
        ]
    };

    const advantagesData = {
        title: "Examples of Event-Based",
        subtitle: "Compliances for Companies",
        list: [
            { title: "Change in Board of Directors", desc: "Appointment, resignation, or removal of a Director or Managing Director." },
            { title: "Change in Directors or KMP", desc: "Any change in Key Managerial Personnel, including appointment or cessation." },
            { title: "DIN / DSC Acquisition", desc: "Obtaining a Director Identification Number or Digital Signature Certificate." },
            { title: "Update of Statutory Records", desc: "Managing and updating official registers and company records." },
            { title: "Change in MOA or AOA", desc: "Any modification to the Memorandum or Articles of Association." },
            { title: "Change in Statutory Auditors", desc: "Appointment or removal of the statutory auditor under Section 139/140." },
            { title: "Transfer or Issuance of Shares", desc: "Share transfers, fresh allotments, or issuance of share certificates." },
            { title: "Increase in Authorized Capital", desc: "Any upward revision in the company's authorized share capital." },
            { title: "Change of Company Name", desc: "Any change in the registered name or title of the company." },
            { title: "Change in Registered Office", desc: "Shift of registered office within the same city, state, or to another state." },
            { title: "Board / General Meeting Resolutions", desc: "Decisions and minutes of Board, General, or Committee meetings." },
            { title: "Creation / Modification of Charge", desc: "Registration, modification, or satisfaction of any secured borrowing charge." },
            { title: "Change in Bank Signatories", desc: "Any change in the authorized signatories of the company's bank accounts." },
            { title: "Statutory Audit of Accounts", desc: "Completion and filing of statutory audit as required under the Act." },
            { title: "Annual General Meeting", desc: "Holding and filing AGM-related resolutions and disclosures." },
            { title: "Preparation of Directors' Report", desc: "Preparation and submission of the annual Directors' Report." },
            { title: "ITR and Tax Audit Requirements", desc: "Income tax return and audit where turnover or contribution thresholds are met." },
            { title: "Share Sub-division or Consolidation", desc: "Any alteration in the denomination or structure of existing shares." },
            { title: "Business Restructuring", desc: "Mergers, demergers, or corporate reorganization activities." },
            { title: "Expansion or Division of Business", desc: "Adding new business divisions or formally expanding scope of operations." },
            { title: "Private Placement", desc: "Issuance of securities through private placement under Section 42." },
            { title: "Credit Monitoring Events", desc: "Changes related to secured creditors, loan restructuring, or charges." }
        ]
    };

    const dueDatesData = {
        title: "Forms Related to Event-Based Compliances",
        subtitle: "A reference table of ROC forms and their applicable timelines",
        columns: ["Occurrence / Event", "Compliance Requirement", "Form", "Timeline"],
        rows: [
            ["Declaration of Commencement of Business", "Filed on commencement or incorporation of the company", "INC-20A", "Within 180 days"],
            ["Change in Registered Office", "Filed on change of registered office address", "INC-22", "Within 15 days"],
            ["Change in Company Name", "Filed after name approval in INC-1", "INC-24", "Within 60 days"],
            ["Conversion of the Company", "Filed on conversion to another form of company", "INC-27", "As applicable"],
            ["KYC of Directors", "Annual KYC filing for all directors", "DIR-3", "By 30th April"],
            ["Change in Directors or KMP", "Filed on appointment, resignation, or change of Director/KMP", "DIR-12", "Within 30 days"],
            ["Removal of Director", "Filed after passing special resolution for director removal", "ADT-2", "Within 30 days"],
            ["Increase in Authorised Share Capital", "Filed after passing ordinary resolution for capital increase", "SH-7", "Within 30 days"],
            ["Filing of Resolutions or Agreements", "Filed after board or shareholder resolutions are passed", "MGT-14", "Within 30 days"],
            ["Increase in Paid-Up Share Capital", "Filed after allotment of new shares", "PAS-3", "Within 15 days"],
            ["Creation / Modification of Charge", "Filed on creation, modification, or satisfaction of charges", "CHG-1", "Within 30 days"],
            ["Condonation of Delay", "Application with detailed information and required documents", "CG-1", "As applicable"],
            ["Deposits Taken", "Annual filing with audited information for all deposits received", "DPT-3", "By 30 Jun / 31 Mar"],
            ["Significant Beneficial Owner", "Filed on receipt of beneficial ownership declaration (BEN-1)", "BEN-2", "Within 30 days"]
        ]
    };

    const whyChooseUsData = {
        title: "Vyombiz Assistance in",
        subtitle: "Event-Based Compliance",
        list: [
            {
                title: "Identify Applicable Compliances",
                desc: "Our experts assess each corporate event to determine the exact forms, documents, and filing deadlines applicable under the Companies Act, 2013."
            },
            {
                title: "Documentation & Resolutions",
                desc: "We draft all required Board and General Meeting resolutions, consent letters, affidavits, and supporting documents in ready-to-file format."
            },
            {
                title: "ROC Filing & Professional Certification",
                desc: "Our in-house CS and CA professionals certify and electronically file all applicable ROC forms on your behalf within the prescribed timelines."
            },
            {
                title: "Deadline Tracking & Alerts",
                desc: "Vyombiz monitors all statutory deadlines for your company's event-based filings and proactively alerts you before penalties are triggered."
            },
            {
                title: "End-to-End Compliance Execution",
                desc: "From the initial event trigger to final ROC acknowledgement — we manage the entire compliance cycle without burdening your internal team."
            },
            {
                title: "Legal & Procedural Advisory",
                desc: "Get clear guidance on the legal implications of each corporate event and the correct compliance approach under current MCA regulations."
            }
        ]
    };

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            <HeroLayout
                heroTitleMain="Event-Based Compliances"
                heroTitleSuffix="in a Company"
                heroSubtitle="ROC & Corporate Secretarial Compliance"
                heroDescription="Every corporate event — a change in directors, registered office, share capital, or company name — triggers a mandatory ROC filing under the Companies Act, 2013. Vyombiz ensures timely, accurate event-based compliance so your company stays legally protected."
                stats={[
                    { count: "30 Days", label: "Filing Window", icon: <Briefcase size={20} /> },
                    { count: "15+", label: "Event Forms Covered", icon: <Building2 size={20} /> },
                    { count: "Expert", label: "CS / CA Support", icon: <Users size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                navLabels={navLabels}
                overview={overviewData}
                advantages={advantagesData}
                dueDates={dueDatesData}
                whyChooseUs={whyChooseUsData}
            />

            <FAQLayout
                title="Event-Based Compliance — FAQs"
                subtitle="Frequently asked questions about ROC event-based filings and corporate obligations."
                faqs={faqs}
            />

        </div>
    );
};

export default EventBasedCompliancesinaCompany;
