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
        title: "Event Based Compliances —",
        highlightTitle: "An Overview",
        description: [
            "Unlike annual compliances that follow a fixed calendar, Event Based Compliances under the Companies Act, 2013 are triggered by specific corporate events or structural changes within the company. These are non-discretionary legal requirements — the moment a triggering event occurs, the clock starts ticking for the mandatory ROC filing.",
            "Events such as a director appointment or resignation, change in registered office, increase in authorized share capital, allotment of shares, alteration of the Memorandum or Articles of Association, or a change in the company name — all require prompt and accurate reporting to the Registrar of Companies within the prescribed timeline (generally 30 days).",
            "Delays or omissions in event-based filings result in daily additional fees (₹100 per day per form), potential non-compliance status, and in severe cases, prosecution of the company and its officers in default. Vyombiz ensures every corporate event is captured and filed on time."
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
        title: "Why Timely Event-Based",
        subtitle: "Filing Matters for Every Company",
        list: [
            {
                title: "Legal Recognition of Changes",
                desc: "Changes like a new director or name change are only legally recognized in government records after the relevant form is filed and approved by the ROC. An unfiled change has no legal standing in official records."
            },
            {
                title: "Protection of Directors",
                desc: "Filing event-based forms on time protects directors from personal liability. A resigned director who files DIR-11 (resignation form) within the deadline is protected from liabilities arising post-resignation."
            },
            {
                title: "Avoidance of Compounding Penalties",
                desc: "At ₹100/day per form, a 6-month delayed filing of a single form can cost ₹18,000. Multiple delayed filings compound quickly. Prompt action keeps costs manageable."
            },
            {
                title: "Avoiding Strike-Off Risk",
                desc: "The ROC can mark a company as 'Non-Compliant' or initiate strike-off proceedings if critical event-based changes remain unreported — especially for address changes or continued director vacancies."
            },
            {
                title: "Transparency with Stakeholders",
                desc: "Shareholders, banks, and counterparties rely on MCA records for accurate company information. Timely event-based filings maintain the integrity and currency of public company records."
            },
            {
                title: "Clean Due Diligence Record",
                desc: "Investors and acquirers scrutinize MCA filing history during due diligence. A clean event-based compliance record is a sign of disciplined corporate governance."
            }
        ]
    };

    const eligibilityData = {
        title: "Common Corporate Events",
        subtitle: "& Their Required ROC Forms",
        list: [
            {
                title: "Director Appointment / Resignation / Removal — DIR-12",
                desc: "Filed within 30 days of any change in directorship. Attach CTC of Board Resolution, consent letter (DIR-2 for appointment), or resignation letter as applicable."
            },
            {
                title: "Change of Registered Office — INC-22",
                desc: "Filed within 30 days of change in registered office address within the same city, or within 30 days of passing a Special Resolution for inter-city/inter-state shifts."
            },
            {
                title: "Increase in Authorized Share Capital — SH-7",
                desc: "Filed within 30 days of passing the Ordinary Resolution in a General Meeting. Stamp duty on the incremental capital must be paid alongside the form."
            },
            {
                title: "Allotment of Shares — PAS-3",
                desc: "Return of Allotment — filed within 15 days of the date of allotment of shares. Attach list of allottees, Board Resolution for allotment, and valuation report (if a private placement)."
            },
            {
                title: "Change of Company Name — INC-24",
                desc: "Application for Central Government approval for name change based on the Special Resolution passed. Filed after obtaining new name availability via RUN application."
            },
            {
                title: "Filing of Resolutions — MGT-14",
                desc: "Filed within 30 days of passing Special Resolutions or Board Resolutions listed under Section 179(3) — such as MOA/AOA amendment, capital borrowing, or buy-back resolutions."
            }
        ]
    };

    const processData = {
        title: "General Filing Workflow",
        subtitle: "For event-based ROC submissions",
        steps: [
            {
                step: "01",
                title: "Identify the Triggering Event",
                desc: "Determine the exact nature of the corporate event — whether it is a Board decision, General Meeting resolution, contractual change, or statutory occurrence — and identify the corresponding ROC form required."
            },
            {
                step: "02",
                title: "Prepare Supporting Documentation",
                desc: "Collate all necessary documents: Board Resolutions, General Meeting notices and minutes, consent letters, resignation letters, valuation reports, or any other documents required for the specific form."
            },
            {
                step: "03",
                title: "Prepare the E-Form on MCA Portal",
                desc: "Fill the relevant e-form on the MCA V3 portal with correct and complete details. Cross-verify CIN, DIN numbers, dates, and other statutory particulars before submission."
            },
            {
                step: "04",
                title: "Professional Certification",
                desc: "Obtain certification from a practicing CA/CS/CMA if the form requires it. Ensure the certifying professional has a valid practice and that the certificate format complies with the prescribed rules."
            },
            {
                step: "05",
                title: "Digital Signing & Submission",
                desc: "Affix the valid DSC of the authorized Director (and CS, if applicable). Upload the form on the MCA V3 portal along with all required attachments."
            },
            {
                step: "06",
                title: "Pay Filing Fee & Monitor Approval",
                desc: "Pay the applicable government filing fee (plus additional fee, if filing after due date). Track the form status on the MCA portal and respond to any ROC queries within the stipulated time."
            }
        ]
    };

    const whyChooseUsData = {
        title: "Vyombiz Assistance in",
        subtitle: "Event-Based Corporate Compliance",
        list: [
            {
                title: "30-Day Filing Guarantee",
                desc: "From the moment you inform us of a corporate event, Vyombiz initiates the filing process immediately — ensuring the mandatory 30-day window is never missed."
            },
            {
                title: "Document Drafting & Preparation",
                desc: "We draft all requisite documents — Board Resolutions, Meeting Notices, Consent Letters, and MGT-14 resolutions — in precise statutory language before submission."
            },
            {
                title: "Expert CS & CA Certification",
                desc: "Our practicing Company Secretaries and Chartered Accountants provide all professional certifications required for event-based forms — ensuring regulatory acceptance."
            },
            {
                title: "Multi-Event Handling",
                desc: "For companies undergoing simultaneous changes (e.g., new investors, director changes, and office shift in the same period), we manage all related filings concurrently and in the correct sequence."
            },
            {
                title: "Penalty Calculation & Mitigation",
                desc: "If a filing window has been missed, we compute the additional fees, advise on compounding options, and file the overdue forms to restore compliance status quickly."
            },
            {
                title: "End-to-End Tracking",
                desc: "We track the status of every filed form on the MCA portal and respond to any ROC observations — giving you complete visibility and peace of mind."
            }
        ]
    };

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            <HeroLayout
                heroTitleMain="Event Based"
                heroTitleSuffix="Compliances"
                heroSubtitle="Corporate Event Filing Services — Companies Act, 2013"
                heroDescription="Every structural change in your company — a new director, office shift, capital increase, or allotment of shares — must be reported to the ROC within 30 days. Vyombiz ensures every event is captured, documented, and filed accurately — protecting your company from penalties and non-compliance status."
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
