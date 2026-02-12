import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Removal of Director Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section (Left Content, Right Form)
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Benefits Section
 * 5. Eligibility/Checklist
 * 6. Documents Required
 * 7. Registration Process
 * 8. Why Choose Us
 * 9. FAQ
 */

const RemovalofDirector = () => {

    const faqs = [
        {
            question: "Can a company remove a director without their consent?",
            answer: "Yes, shareholders can remove a director by passing an Ordinary Resolution in a General Meeting, provided the director is given a reasonable opportunity to be heard (Section 169)."
        },
        {
            question: "What is the time frame for removal of a director?",
            answer: "A Special Notice of at least 14 days is required before the meeting. The entire process, including calling the meeting and filing forms, takes about 30-45 days."
        },
        {
            question: "Can a director remove another director?",
            answer: "Generally, directors cannot remove another director directly. Only shareholders have the power to remove a director under Section 169. However, the Board can accept a resignation."
        },
        {
            question: "What happens if DIR-12 is not filed?",
            answer: "If DIR-12 is not filed within 30 days of removal/resignation, the company faces heavy additional fees/penalties, which increase over time (up to 12 times normal fees after 300 days)."
        },
        {
            question: "Is approval from the Central Government required?",
            answer: "No, removal of a director (except one appointed by the Tribunal/Central Govt) is an internal matter settled by shareholders' resolution."
        },
        {
            question: "What if the director does not attend board meetings?",
            answer: "If a director absents themselves from all Board Meetings for a consecutive period of 12 months (with or without leave of absence), they vacate the office under Section 167."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Removal of "
                heroTitleSuffix="Director"
                heroSubtitle="Corporate Governance & Compliance"
                heroDescription="Professional assistance in the legal removal or resignation of a company director. We ensure full compliance with Section 169 of the Companies Act, 2013, handling notices, resolutions, and ROC filings."
                whatsIncludedList={[
                    "Drafting Special Notice",
                    "Board & EGM Resolutions",
                    "Filing Form DIR-12",
                    "Filing Form DIR-11"
                ]}
                stats={[
                    { count: "Section 169", label: "Companies Act", icon: <Users size={20} /> },
                    { count: "100%", label: "Compliant", icon: <Briefcase size={20} /> },
                    { count: "Quick", label: "Filing Process", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Companies Act, 2013",
                    title: "Director Removal –",
                    highlightTitle: "Overview",
                    description: [
                        "A company may need to remove a director due to disputes, misuse of power, inactivity, or breach of duties. The Companies Act, 2013 provides a structured mechanism for this under Section 169.",
                        "Directors can be removed by shareholders passing an Ordinary Resolution, provided the director is given a fair chance to present their case ('Opportunity of being heard').",
                        "Removal can also occur due to disqualification (Section 164) or vacation of office (Section 167) if a director fails to attend board meetings for 12 months."
                    ],
                    whyIdealTitle: "Modes of Exit",
                    whyIdealList: [
                        { title: "Removal by Shareholders", desc: "Shareholders pass a resolution to remove a director before their term expires." },
                        { title: "Resignation", desc: "A director voluntarily resigns by submitting a notice to the Board." },
                        { title: "Disqualification", desc: "Automatic vacation if convicted by court or fails to file returns." },
                        { title: "Absence", desc: "Vacation of office due to absence from Board meetings for 12 months." },
                        { title: "Tribunal Order", desc: "Removal ordered by NCLT due to oppression or mismanagement." }
                    ]
                }}
                advantages={{
                    title: "Reasons for Removal",
                    subtitle: "Why initiate removal?",
                    list: [
                        { title: "Breach of Duty", desc: "Acting against the company's interest or articles." },
                        { title: "Mismanagement", desc: "Involvement in financial irregularities or fraud." },
                        { title: "Disputes", desc: "Irreconcilable differences with the Board or Shareholders." },
                        { title: "Incompetence", desc: "Failure to perform duties effectively." },
                        { title: "Non-Attendance", desc: "Continuous absence from board meetings affecting decision making." },
                        { title: "Loss of Confidence", desc: "Shareholders losing trust in the director's leadership." }
                    ]
                }}
                eligibility={{
                    title: "Prerequisites",
                    subtitle: "Compliance Check",
                    list: [
                        { title: "Special Notice", desc: "Notice signed by eligible shareholders (holding 1% voting power or ₹5 Lakh paid-up capital)." },
                        { title: "Notice Period", desc: "14 days clear notice before the General Meeting." },
                        { title: "Right to be Heard", desc: "Director must be given a chance to speak at the meeting." },
                        { title: "Ordinary Resolution", desc: "Approval by simple majority of shareholders." },
                        { title: "ROC Filing", desc: "Mandatory filing of forms with the Registrar." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "For Removal Process:",
                    list: [
                        "Special Notice from Shareholders",
                        "Notice of Board Meeting",
                        "Board Resolution calling EGM",
                        "Notice of EGM (Extraordinary General Meeting)",
                        "Copy of Resolution passed at EGM",
                        "Evidence of Cessation (if applicable)",
                        "Form DIR-12 (for ROC filing)",
                        "Form DIR-11 (filed by director, if resigning)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Removal Process",
                    subtitle: "Step-by-step Procedure (Section 169)",
                    steps: [
                        { step: "01", title: "Special Notice", desc: "Shareholders send Special Notice to Company 14 days before meeting." },
                        { step: "02", title: "Intimation", desc: "Company sends copy of notice to the Director concerned." },
                        { step: "03", title: "Board Meeting", desc: "Convene Board Meeting to call an EGM." },
                        { step: "04", title: "Notice of EGM", desc: "Send EGM Notice to all shareholders (21 days prior)." },
                        { step: "05", title: "Hold EGM", desc: "Conduct meeting; Director presents representation; Shareholders vote." },
                        { step: "06", title: "Pass Resolution", desc: "Pass Ordinary Resolution for removal." },
                        { step: "07", title: "File DIR-12", desc: "File Form DIR-12 with ROC within 30 days of passing resolution." },
                        { step: "08", title: "Update Records", desc: "Update Register of Directors and finding." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert Secretarial Services",
                    list: [
                        { title: "Legal Expertise", desc: "Correct interpretation of Companies Act sections." },
                        { title: "Drafting Support", desc: "Professional drafting of notices, resolutions, and minutes." },
                        { title: "Procedural Compliance", desc: "Ensuring all timelines (14 days, 30 days) are met." },
                        { title: "Dispute Advisory", desc: "Guidance on handling hostile removals legally." },
                        { title: "Timely Filing", desc: "Avoiding penalties by filing DIR-12 on time." },
                        { title: "Director Representation", desc: "Helping directors file DIR-11 if needed." },
                        { title: "End-to-End Service", desc: "Managing the entire process from notice to removal." },
                        { title: "Conflict Resolution", desc: "Advisory on minimizing business disruption." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Director Removal"
                faqs={faqs}
            />

        </div>
    );
};

export default RemovalofDirector;
