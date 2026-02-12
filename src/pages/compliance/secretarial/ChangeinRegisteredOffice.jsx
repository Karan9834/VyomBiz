import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Change in Registered Office Page matching Vyombiz layout styles
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

const ChangeinRegisteredOffice = () => {

    const faqs = [
        {
            question: "Can I change the registered office of my company?",
            answer: "Yes, a company can change its registered office anytime by following the procedures laid down in the Companies Act, 2013, whether within the same city, state, or to a different state."
        },
        {
            question: "What is Form INC-22?",
            answer: "Form INC-22 is the official form filed with the ROC to intimate the change in the registered office address of the company. It must be filed within 15 days of the change."
        },
        {
            question: "Is Regional Director (RD) approval required?",
            answer: "RD approval is required only when shifting the registered office from the jurisdiction of one ROC to another within the same state, or from one state to another."
        },
        {
            question: "How long does the process take?",
            answer: "For local shifting (within the same city), it takes a few days. Shifting between states can take 2-4 months due to RD approval and public notice requirements."
        },
        {
            question: "Do we need to alter the MOA?",
            answer: "Yes, if the registered office is shifted from one state to another, the Memorandum of Association (MOA) must be altered, which requires a Special Resolution."
        },
        {
            question: "Can a residential property be used as a registered office?",
            answer: "Yes, a residential property can be used as a registered office provided the owner issues a No Objection Certificate (NOC) and proof of address is submitted."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Change in "
                heroTitleSuffix="Registered Office"
                heroSubtitle="Corporate Compliance Services"
                heroDescription="Seamlessly shift your company's registered office within the city, state, or across states. We handle Board Resolutions, ROC filings (INC-22, MGT-14), and RD approvals."
                whatsIncludedList={[
                    "Local Shifting (Within City)",
                    "Inter-State Shifting",
                    "ROC & RD Approvals",
                    "MOA Alteration"
                ]}
                stats={[
                    { count: "15 Days", label: "Filing Time", icon: <Users size={20} /> },
                    { count: "Form INC-22", label: "Mandatory", icon: <Briefcase size={20} /> },
                    { count: "100%", label: "Online", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Companies Act, 2013",
                    title: "Registered Office Change –",
                    highlightTitle: "Overview",
                    description: [
                        "The registered office is the official address of a company where all statutory communications are sent. Companies may need to shift this office due to growth, lease expiry, or strategic reasons.",
                        "The Companies Act, 2013 provides specific procedures for shifting the office, varying based on whether the move is within the local limits, within the state, or to another state.",
                        "All changes must be intimated to the Registrar of Companies (ROC) to maintain compliance and avoid penalties."
                    ],
                    whyIdealTitle: "Types of Shifting",
                    whyIdealList: [
                        { title: "Within Local Limits", desc: "Shifting within the same city, town, or village (Board Resolution only)." },
                        { title: "Outside Local Limits", desc: "Shifting outside the city but within the same ROC jurisdiction (Special Resolution required)." },
                        { title: "Inter-ROC (Same State)", desc: "Shifting from one ROC to another within the same state (RD Approval required, e.g., Mumbai to Pune)." },
                        { title: "Inter-State", desc: "Shifting from one state to another (MOA alteration, Central Govt/RD Approval required)." }
                    ]
                }}
                advantages={{
                    title: "Reasons for Change",
                    subtitle: "Why shift your office?",
                    list: [
                        { title: "Business Growth", desc: "Moving to a larger space to accommodate expanding teams and operations." },
                        { title: "Lease Expiry", desc: "End of rental agreement at the current premises." },
                        { title: "Strategic Location", desc: "Moving to a business hub for better visibility and opportunities." },
                        { title: "Cost Optimization", desc: "Shifting to a location with lower operational costs." },
                        { title: "Branch Consolidation", desc: "Centralizing operations by moving the registered office to the main activity center." },
                        { title: "Investor Requirement", desc: "Relocation mandated by new investors or partners." }
                    ]
                }}
                eligibility={{
                    title: "Prerequisites",
                    subtitle: "Compliance Checklist",
                    list: [
                        { title: "Board Approval", desc: "Board resolution is mandatory for all types of shifting." },
                        { title: "Shareholder Consent", desc: "Special Resolution needed for shifting outside local limits." },
                        { title: "Clean Track Record", desc: "No pending defaults in filing financial statements or annual returns." },
                        { title: "Creditor NOC", desc: "Consent from creditors is required for inter-state shifting." },
                        { title: "RD Approval", desc: "Regional Director approval for Inter-ROC or Inter-State shifts." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "For Form INC-22 Filing:",
                    list: [
                        "Board Resolution copy",
                        "Special Resolution (if applicable)",
                        "NOC from the Owner",
                        "Rent/Lease Agreement",
                        "Utility Bill (Electricity/Water/Gas, not older than 2 months)",
                        "List of Creditors (for inter-state)",
                        "Newspaper Advertisement copy (for inter-state)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Shifting Process",
                    subtitle: "Step-by-step Procedure (Local)",
                    steps: [
                        { step: "01", title: "Board Meeting", desc: "Pass Board Resolution to shift the office." },
                        { step: "02", title: "Documentation", desc: "Prepare NOC, Rent Agreement, and Utility Bill of new address." },
                        { step: "03", title: "Form INC-22", desc: "File Form INC-22 with ROC within 15 days." },
                        { step: "04", title: "Certification", desc: "Get the form certified by a practicing Professional (CS/CA)." },
                        { step: "05", title: "Approval", desc: "ROC approves the form and records the new address." },
                        { step: "06", title: "Update Records", desc: "Update letterheads, banners, and statutory registers." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Effortless Transition",
                    list: [
                        { title: "Pan-India Support", desc: "Assistance with shifting anywhere in India." },
                        { title: "Liaison with RD", desc: "Expert handling of Regional Director petitions and hearings." },
                        { title: "Documentation", desc: "Precise drafting of resolutions, notices, and newspaper ads." },
                        { title: "Timely Filing", desc: "Ensuring INC-22 is filed within the 15/30 day deadline." },
                        { title: "Cost Transparent", desc: "Clear pricing with no hidden government fee markups." },
                        { title: "Post-Shift Support", desc: "Guidance on updating GST, PAN, and other licenses." },
                        { title: "Expert Professionals", desc: "Certified Company Secretaries to manage the process." },
                        { title: "Status Tracking", desc: "Regular updates on the status of your application." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Changing Registered Office"
                faqs={faqs}
            />

        </div>
    );
};

export default ChangeinRegisteredOffice;
