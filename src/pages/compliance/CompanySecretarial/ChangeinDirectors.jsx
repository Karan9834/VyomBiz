import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Change in Directors Page matching Vyombiz layout styles
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

const ChangeinDirectors = () => {

    const faqs = [
        {
            question: "Can a company remove a director without their consent?",
            answer: "Yes, shareholders can remove a director by passing an ordinary resolution in a general meeting, provided the director is given a reasonable opportunity of being heard (Section 169)."
        },
        {
            question: "What is DIR-12 used for?",
            answer: "Form DIR-12 is used to file particulars of appointment of directors and the key managerial personnel and the changes among them with the Registrar of Companies."
        },
        {
            question: "Is it mandatory to have a DIN?",
            answer: "Yes, every individual intending to be appointed as a director of a company shall make an application for allotment of Director Identification Number (DIN) to the Central Government."
        },
        {
            question: "What is the time limit for filing DIR-12?",
            answer: "The company must file Form DIR-12 with the Registrar of Companies within 30 days from the date of appointment, resignation, or removal of the director."
        },
        {
            question: "Can an additional director be appointed by the Board?",
            answer: "Yes, if authorized by the Articles of Association, the Board of Directors can appoint an additional director who shall hold office up to the date of the next Annual General Meeting."
        },
        {
            question: "What are the liabilities of a resigning director?",
            answer: "A resigning director remains liable for the offences which occurred during their tenure as a director (Section 168(2))."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Change in "
                heroTitleSuffix="Directors"
                heroSubtitle="Appointment, Resignation & Removal"
                heroDescription="Expert assistance for adding new directors or removing existing ones. We handle DIN application, DIR-12 filing, drafting resolutions, and ensuring full compliance with the Companies Act, 2013."
                whatsIncludedList={[
                    "Appointment of Director",
                    "Resignation of Director",
                    "Removal of Director",
                    "DIR-12 & DIR-11 Filing"
                ]}
                stats={[
                    { count: "30 Days", label: "Filing Time", icon: <Users size={20} /> },
                    { count: "DIN", label: "Application", icon: <Briefcase size={20} /> },
                    { count: "Section 168/169", label: "Compliant", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Section 152-169",
                    title: "Director Changes –",
                    highlightTitle: "Overview",
                    description: [
                        "Directors are the agents of the company who manage its day-to-day affairs. A change in the Board of Directors can occur due to appointment, resignation, or removal.",
                        "The Companies Act, 2013 lays down specific procedures for each type of change, requiring board resolutions, shareholder approval (in some cases), and mandatory filings with the ROC.",
                        "Any change must be intimated to the Registrar of Companies within 30 days via Form DIR-12."
                    ],
                    whyIdealTitle: "Types of Changes",
                    whyIdealList: [
                        { title: "Appointment", desc: "Adding new directors (Additional, Alternate, or Regular) to the Board." },
                        { title: "Resignation", desc: "Voluntary exit of a director by submitting a notice to the Board (Section 168)." },
                        { title: "Removal", desc: "Forced exit of a director by shareholders or NCLT (Section 169)." },
                        { title: "Death/Incapacity", desc: "Vacation of office due to death or disqualification (Section 167)." }
                    ]
                }}
                advantages={{
                    title: "Key Concepts",
                    subtitle: "Important Provisions",
                    list: [
                        { title: "DIN Requirement", desc: "Every director must hold a valid Director Identification Number (DIN)." },
                        { title: "Digital Signature", desc: "DSC is required for filing forms on the MCA portal." },
                        { title: "Consent (DIR-2)", desc: "Written consent to act as a director must be filed with the company." },
                        { title: "Disclosure (MBP-1)", desc: "Directors must disclose their interest in other entities." },
                        { title: "Non-Disqualification", desc: "Declaration in Form DIR-8 that the person is not disqualified." },
                        { title: "Board Resolution", desc: "Mandatory for approving any change in the Board composition." }
                    ]
                }}
                eligibility={{
                    title: "Prerequisites",
                    subtitle: "For Appointment/Cessation",
                    list: [
                        { title: "Valid DIN", desc: "Proposed director must have an active DIN." },
                        { title: "DSC", desc: "Digital Signature Certificate for signing forms." },
                        { title: "Board Approval", desc: "Resolution passed in a Board Meeting." },
                        { title: "Shareholder Approval", desc: "Ordinary Resolution in General Meeting (for regularization or removal)." },
                        { title: "Notice", desc: "Resignation letter or Special Notice for removal." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "For Filing Form DIR-12:",
                    list: [
                        "Certified True Copy of Board Resolution",
                        "Notice of Resignation (for resignation)",
                        "Evidence of Cessation (for death/disqualification)",
                        "Consent to Act as Director (Form DIR-2)",
                        "Declaration of Non-Disqualification (Form DIR-8)",
                        "Disclosure of Interest (Form MBP-1)",
                        "Appointment Letter",
                        "PAN & ID Proof of Director"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Process Flow",
                    subtitle: "Step-by-step Procedure",
                    steps: [
                        { step: "01", title: "DIN Application", desc: "Obtain DIN for the proposed director (if not available)." },
                        { step: "02", title: "Board Meeting", desc: "Pass resolution for appointment/resignation/removal." },
                        { step: "03", title: "Consent & Declaration", desc: "Obtain DIR-2, DIR-8, and MBP-1 from the appointee." },
                        { step: "04", title: "General Meeting", desc: "Hold EGM/AGM for shareholder approval (if required)." },
                        { step: "05", title: "File DIR-12", desc: "File Form DIR-12 with ROC within 30 days of the event." },
                        { step: "06", title: "File DIR-11", desc: "Resigning director files Form DIR-11 (optional but recommended)." },
                        { step: "07", title: "Update Registers", desc: "Update Register of Directors and KMP." },
                        { step: "08", title: "External Update", desc: "Update details on company letterhead and website." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert Secretarial Support",
                    list: [
                        { title: "DIN Services", desc: "Fast-track DIN application and allotment." },
                        { title: "Drafting", desc: "Professional drafting of resolutions, notices, and letters." },
                        { title: "Compliance Check", desc: "Ensuring the appointee is not disqualified." },
                        { title: "Timely Filing", desc: "Avoiding penalties by filing DIR-12 on time." },
                        { title: "Advisory", desc: "Guidance on board composition and independence requirements." },
                        { title: "Dispute Handling", desc: "Legal support for handling hostile removals." },
                        { title: "End-to-End", desc: "Managing the entire lifecycle of a director's tenure." },
                        { title: "Cost Effective", desc: "Affordable packages for secretarial compliances." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Director Changes"
                faqs={faqs}
            />

        </div>
    );
};

export default ChangeinDirectors;
