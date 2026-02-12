import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Event-Based Compliances Page matching Vyombiz layout styles
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

const EventBasedCompliancesinaCompany = () => {

    const faqs = [
        {
            question: "What are Event-Based Compliances?",
            answer: "Event-Based Compliances are mandatory filings that a company must submit to the ROC upon the occurrence of specific events (e.g., change in directors, registered office, capital) rather than at fixed annual intervals."
        },
        {
            question: "When should form INC-22 be filed?",
            answer: "Form INC-22 must be filed with the Registrar of Companies (ROC) within 30 days of a change in the company's registered office address."
        },
        {
            question: "What is the purpose of Form MGT-14?",
            answer: "Form MGT-14 is used to file certain resolutions and agreements with the ROC, such as special resolutions, board resolutions for certain matters, etc., within 30 days of passing."
        },
        {
            question: "When is Form DIR-12 filed?",
            answer: "Form DIR-12 must be filed within 30 days of the appointment, resignation, or change in designation of a Director or Key Managerial Personnel (KMP)."
        },
        {
            question: "What is Form SH-7 used for?",
            answer: "Form SH-7 is filed to notify the ROC about an increase in the authorized share capital of the company. It must be filed within 30 days of passing the ordinary resolution."
        },
        {
            question: "What happens if these forms are not filed on time?",
            answer: "Late filing attracts additional fees (penalties) which can range from 2 times to 12 times the normal fee depending on the delay. Continued non-compliance can lead to prosecution of officers."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Event Based "
                heroTitleSuffix="Compliances"
                heroSubtitle="Corporate Secretarial Services"
                heroDescription="Ensure timely filing for all corporate events including changes in directors, registered office, share capital, and name. We handle all ROC forms to keep your company compliant."
                whatsIncludedList={[
                    "Change in Directors (DIR-12)",
                    "Registered Office Change (INC-22)",
                    "Capital Increase (SH-7)",
                    "Resolution Filing (MGT-14)"
                ]}
                stats={[
                    { count: "ROC", label: "Filing", icon: <Users size={20} /> },
                    { count: "On-Time", label: "Compliance", icon: <Briefcase size={20} /> },
                    { count: "All Forms", label: "Covered", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Companies Act, 2013",
                    title: "Event Based Filing –",
                    highlightTitle: "Overview",
                    description: [
                        "Event-based compliances are triggered by specific actions or changes within a company. Unlike annual compliances, these are not periodic but situational.",
                        "Any change in the company's structure, management, capital, or registered details must be reported to the Registrar of Companies (ROC) within a prescribed timeline (usually 30 days).",
                        "Failure to comply can result in heavy penalties and the company status being marked as 'non-compliant'."
                    ],
                    whyIdealTitle: "Common Events",
                    whyIdealList: [
                        { title: "Change in Directors", desc: "Appointment, resignation, or removal of Directors/KMP (Form DIR-12)." },
                        { title: "Change of Address", desc: "Shifting of registered office within or outside the city/state (Form INC-22)." },
                        { title: "Increase in Capital", desc: "Increasing Authorized or Paid-up Share Capital (Form SH-7, PAS-3)." },
                        { title: "Name Change", desc: "Changing the company name (Form INC-24)." },
                        { title: "Charge Management", desc: "Creation, modification, or satisfaction of charges (Form CHG-1)." }
                    ]
                }}
                advantages={{
                    title: "Key Forms & Timelines",
                    subtitle: "Critical Compliance Deadlines",
                    list: [
                        { title: "Form DIR-12", desc: "For appointment/resignation of Directors (Within 30 Days)." },
                        { title: "Form INC-22", desc: "For change in Registered Office (Within 30 Days)." },
                        { title: "Form MGT-14", desc: "For filing Special Resolutions (Within 30 Days)." },
                        { title: "Form SH-7", desc: "For increase in Authorized Capital (Within 30 Days)." },
                        { title: "Form PAS-3", desc: "For Allotment of Shares (Within 30 Days)." },
                        { title: "Form INC-20A", desc: "Declaration of Commencement of Business (Within 180 Days of Inc)." }
                    ]
                }}
                eligibility={{
                    title: "Prerequisites",
                    subtitle: "Before Filing",
                    list: [
                        { title: "Board Resolution", desc: "Most events require a Board Resolution to be passed first." },
                        { title: "Shareholder Approval", desc: "Major changes (Name, Capital, AOA) require Shareholder approval (EGM)." },
                        { title: "DSC", desc: "Valid Digital Signature Certificate of Director/Professional." },
                        { title: "DIN", desc: "Director Identification Number for director-related changes." },
                        { title: "Professional Cert", desc: "Certification by PCS/CA is mandatory for most forms." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Varies by Event. Common documents include:",
                    list: [
                        "Certified True Copy of Board Resolution",
                        "Certified True Copy of Shareholder Resolution (if applicable)",
                        "Notice of EGM/BM",
                        "Resignation Letter / Consent Letter (DIR-2)",
                        "Proof of New Address (Lease Deed/Utility Bill)",
                        "Altered MOA & AOA",
                        "List of Allottees (for shares)",
                        "DSC of Director"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Filing Process",
                    subtitle: "General Procedure for Event Compliance",
                    steps: [
                        { step: "01", title: "Board Meeting", desc: "Convene a Board Meeting to approve the proposed change/event." },
                        { step: "02", title: "General Meeting", desc: "If required, hold an EGM to get shareholder approval." },
                        { step: "03", title: "Documentation", desc: "Prepare necessary documents (Resolutions, Letters, Notices)." },
                        { step: "04", title: "Form Preparation", desc: "Fill the relevant e-form on the MCA portal." },
                        { step: "05", title: "Attach Documents", desc: "Attach certified copies of resolutions and other proofs." },
                        { step: "06", title: "Certification", desc: "Get the form certified by a Practicing Professional (CS/CA)." },
                        { step: "07", title: "Filing & Fee", desc: "Upload form and pay government fees." },
                        { step: "08", title: "Approval", desc: "Receive ROC approval (Challan/Certificate)." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your Compliance Partner",
                    list: [
                        { title: "Alerts System", desc: "We track your compliance needs and alert you." },
                        { title: "Expert Drafting", desc: "Professional drafting of resolutions and minutes." },
                        { title: "Timely Filing", desc: "Ensuring filings are done within 30 days to avoid penalties." },
                        { title: "Professional Certification", desc: "In-house team of CS/CAs for certification." },
                        { title: "Error-Free", desc: "Meticulous verification to prevent form resubmission." },
                        { title: "Advisory", desc: "Guidance on legal implications of changes." },
                        { title: "End-to-End", desc: "From meeting notice to final ROC approval." },
                        { title: "Cost Effective", desc: "Transparent pricing without hidden charges." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about ROC Event Forms"
                faqs={faqs}
            />

        </div>
    );
};

export default EventBasedCompliancesinaCompany;
