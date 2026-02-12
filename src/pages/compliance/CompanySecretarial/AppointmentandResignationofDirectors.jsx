import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Appointment and Resignation of Directors Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section (Left Content, Right Form)
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Benefits/Types Section
 * 5. Eligibility/Checklist
 * 6. Documents Required
 * 7. Registration Process
 * 8. Why Choose Us
 * 9. FAQ
 */

const AppointmentandResignationofDirectors = () => {

    const faqs = [
        {
            question: "Who can be appointed as a Director?",
            answer: "Any individual (not a body corporate) who is above 18 years of age, holds a valid DIN, and is not disqualified under the Companies Act can be appointed as a director."
        },
        {
            question: "What is the validity of DIN?",
            answer: "Director Identification Number (DIN) is valid for a lifetime. However, the director must file DIR-3 KYC annually to keep it active."
        },
        {
            question: "Can a director resign at any time?",
            answer: "Yes, a director can resign at any time by giving a written notice to the Board of Directors. The resignation takes effect from the date of receipt of notice or the date specified in the notice."
        },
        {
            question: "Is it mandatory to file form DIR-11?",
            answer: "While the company must file DIR-12, the resigning director is also advised to file Form DIR-11 to inform the ROC about their resignation to avoid future liabilities."
        },
        {
            question: "How many directors are required in a company?",
            answer: "A Private Limited Company needs at least 2 directors, a Public Limited Company needs 3, and an OPC needs at least 1 director."
        },
        {
            question: "Can an NRI be a director in an Indian company?",
            answer: "Yes, an NRI or foreign national can be a director in an Indian company, provided they obtain a DIN and meet the eligibility criteria. At least one director must be a resident of India."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Appointment & Resignation "
                heroTitleSuffix="of Directors"
                heroSubtitle="Corporate Governance Solutions"
                heroDescription="Streamline your board management with our expert services. We handle everything from Digital Signatures (DSC) and DIN allotment to filing ROC forms for appointment or resignation."
                whatsIncludedList={[
                    "DIN Application (DIR-3)",
                    "Appointment Filing (DIR-12)",
                    "Resignation Filing (DIR-11)",
                    "Drafting Board Resolutions"
                ]}
                stats={[
                    { count: "DIN", label: "Mandatory", icon: <Users size={20} /> },
                    { count: "ROC", label: "Compliant", icon: <Briefcase size={20} /> },
                    { count: "Expert", label: "Drafting", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Section 152 & 168",
                    title: "Board Management –",
                    highlightTitle: "Overview",
                    description: [
                        "Directors are the pillars of corporate governance, responsible for the strategic direction and management of a company. Bringing new talent on board or facilitating the exit of existing directors is a common corporate event.",
                        "Section 152 of the Companies Act, 2013 governs the appointment of directors, requiring them to have a valid Director Identification Number (DIN) and consent to act.",
                        "Section 168 provides the procedure for resignation, ensuring that the director is absolved of liabilities arising after their exit."
                    ],
                    whyIdealTitle: "Types of Directors",
                    whyIdealList: [
                        { title: "Managing Director", desc: "Entrusted with substantial powers of management of the affairs of the company." },
                        { title: "Executive Director", desc: "Full-time director involved in day-to-day operations." },
                        { title: "Non-Executive Director", desc: "Participates in board meetings but not involved in daily management." },
                        { title: "Independent Director", desc: "Appointed to ensure good governance and protect minority interests." },
                        { title: "Nominee Director", desc: "Nominated by a financial institution or investor to represent their interests." }
                    ]
                }}
                advantages={{
                    title: "Why Change Directors?",
                    subtitle: "Strategic Reasons",
                    list: [
                        { title: "Fresh Leadership", desc: "Bringing in new expertise and vision for company growth." },
                        { title: "Expertise", desc: "Adding subject matter experts (technical, legal, financial) to the board." },
                        { title: "Compliance", desc: "Meeting the statutory minimum requirement of directors." },
                        { title: "Investor Requirement", desc: "Giving board representation to new investors or VCs." },
                        { title: "Succession Planning", desc: "Smooth transition of leadership roles." },
                        { title: "Personal Reasons", desc: "Voluntary exit due to health, retirement, or other commitments." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "For Appointment",
                    list: [
                        { title: "Age Limit", desc: "Must be a major (18 years). For MD/WTD, age should generally be between 21 and 70." },
                        { title: "DIN Holder", desc: "Must obtain a Director Identification Number (DIN)." },
                        { title: "Not Disqualified", desc: "Must not be disqualified under Section 164 (e.g., undischarged insolvent, convicted)." },
                        { title: "Consent", desc: "Must validly consent to act as a director in Form DIR-2." },
                        { title: "No Limit Breach", desc: "Should not hold directorship in more than 20 companies (max 10 public)." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "For Appointment/Resignation Filing:",
                    list: [
                        "PAN Card of the Director (Mandatory)",
                        "Aadhar Card / Voter ID / Passport / Driving License",
                        "Passport size photograph",
                        "Digital Signature Certificate (DSC)",
                        "Consent to Act as Director (DIR-2)",
                        "Declaration of Non-Disqualification (DIR-8)",
                        "Resignation Letter (for cessation)",
                        "Board Resolution copy"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Appointment Process",
                    subtitle: "Steps to Appoint a Director",
                    steps: [
                        { step: "01", title: "Obtain DSC", desc: "Get Digital Signature Certificate for the proposed director." },
                        { step: "02", title: "Apply DIN", desc: "Apply for Director Identification Number (Format DIR-3) if not available." },
                        { step: "03", title: "Board Meeting", desc: "Pass a resolution to appoint the additional director." },
                        { step: "04", title: "Consent & Declaration", desc: "Collect DIR-2 (Consent) and DIR-8 (Non-disqualification)." },
                        { step: "05", title: "File DIR-12", desc: "File Form DIR-12 with the ROC within 30 days of appointment." },
                        { step: "06", title: "Regularization", desc: "Regularize the appointment in the next Annual General Meeting (AGM)." },
                        { step: "07", title: "Update Records", desc: "Update Registers of Directors and Key Managerial Personnel." },
                        { step: "08", title: "Resignation (if applicable)", desc: "For resignation, file notice, hold BM, and file DIR-11 & DIR-12." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Seamless Board Transitions",
                    list: [
                        { title: "Quick DIN Service", desc: "Expedited application for Director Identification Number." },
                        { title: "Legal Drafting", desc: "Precise drafting of appointment letters and board resolutions." },
                        { title: "Due Diligence", desc: "Verifying eligibility and disqualification status." },
                        { title: "Compliance Audit", desc: "Ensuring post-appointment compliances are met." },
                        { title: "Advisory", desc: "Guidance on optimum board composition and roles." },
                        { title: "Zero Errors", desc: "Accurate filing to prevent rejection or resubmission." },
                        { title: "Cost Efficiency", desc: "Transparent pricing for all secretarial services." },
                        { title: "Dedicated Support", desc: "Account manager to handle all your queries." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Director Appointment & Resignation"
                faqs={faqs}
            />

        </div>
    );
};

export default AppointmentandResignationofDirectors;
