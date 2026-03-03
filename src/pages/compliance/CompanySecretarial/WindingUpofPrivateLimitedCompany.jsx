import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Winding Up of Private Limited Company Page for Vyombiz
 * Reverted to standard DetailsLayout structure as requested.
 */
const WindingUpofPrivateLimitedCompany = () => {

    const faqs = [
        {
            question: "What are the main reasons companies wind up?",
            answer: "A company decides to wind up mostly when it is not active, or it is failing to fulfil the business compliances, or due to insolvency or unwillingness of the directors to continue operations."
        },
        {
            question: "What happens when a company fails to maintain compliance and does not wind up?",
            answer: "If the company fails to fulfil its compliances, it can be held liable for heavy fines and penalties. Additionally, its directors can be disqualified from incorporating another entity."
        },
        {
            question: "What are the companies that can apply for fast track winding up?",
            answer: "Companies that meet the criteria under Section 361 for Summary Procedure, such as those with assets below a certain threshold or specific classes of companies as notified by the Central Government, can apply."
        },
        {
            question: "What are the companies which are not eligible for Voluntary Winding-up?",
            answer: "Companies that have pending litigations, unpaid secured creditors without consent, or those involved in ongoing regulatory investigations may not be eligible for voluntary winding up until those issues are resolved."
        },
        {
            question: "What is the benefit of the Companies (Winding-Up) Rules 2020?",
            answer: "These rules systematize the procedure for winding up under Section 271 and provide a Summary Procedure under Section 361, making the process more efficient with standardized forms."
        },
        {
            question: "What are the main obligations of a company before going for its Winding up?",
            answer: "A company must clear its debts, obtain consent from creditors, prepare a certified statement of assets and liabilities, and pass a special resolution in a board/general meeting."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Winding Up of Private Limited "
                heroTitleSuffix="Company"
                heroSubtitle="Legal & Professional Dissolution Services"
                heroDescription="Ensure a smooth exit for your business. We handle the complete liquidation process, from solvency declarations to final dissolution, minimizing legal risks for directors."
                whatsIncludedList={[
                    "Solvency Declaration",
                    "Special Resolution Filing",
                    "Liquidator Coordination",
                    "IT & Regulatory NOCs"
                ]}
                stats={[
                    { count: "500+", label: "Companies Dissolved", icon: <Building2 size={20} /> },
                    { count: "100%", label: "Compliance Rate", icon: <Briefcase size={20} /> },
                    { count: "Expert", label: "Legal Support", icon: <Users size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    advantages: "Benefits",
                    eligibility: "Listicles",
                    process: "Registration Procedure",
                    postCompliance: "Other Info",
                    features: "Vyombiz Support",
                    faq: "FAQ"
                }}
                overview={{
                    badge: "Business Liquidation",
                    title: "Winding Up –",
                    highlightTitle: "Overview",
                    description: [
                        "The Private Limited Company initiates the process of liquidation to close its business. There are many reasons, such as insolvency, unwillingness to perform business activities, etc., because of which a company decides to wind up. Liquidation means liquidating the assets of the Company to satisfy responsibilities and repay liabilities.",
                        "Section 270 of the Companies Act 2013 states that a private company can go for winding up either by the National Company Tribunal (NCT) or voluntarily. Winding up includes a complete shutdown of all activities and selling off all assets to clear debts, with remaining assets shared among shareholders.",
                        "If a company fails to fulfil its compliances, it can be held liable for fines and penalties, or directors can be disqualified. Therefore, it is advisable for a company to wind up the moment it becomes inactive or insolvent."
                    ],
                    whyIdealTitle: "Key Objectives",
                    whyIdealList: [
                        { title: "Asset Liquidation", desc: "Selling assets to satisfy all outstanding business responsibilities." },
                        { title: "Debt Repayment", desc: "Using proceeds to clear liabilities owed to creditors and stakeholders." },
                        { title: "Legal Dissolution", desc: "Formal termination of the corporate entity's existence in the eyes of law." },
                        { title: "Member Distribution", desc: "Sharing any remaining surplus among the company's shareholders." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Winding Up",
                    subtitle: "Advantages of a structured legal closure",
                    list: [
                        { title: "Release from Duties", desc: "Once liquidation is over, officers and directors are free from all future liabilities and administrative pressure." },
                        { title: "Avoiding Legal Actions", desc: "Passing a voluntary winding-up resolution helps directors avoid potential legal proceedings against the company." },
                        { title: "Cost-Effective Process", desc: "The expense is comparatively low as charges are often applicable to the sale of assets during the liquidation." },
                        { title: "Lease Termination", desc: "Lease agreements for business premises can be legally cancelled, and dues cleared from asset sales." },
                        { title: "Creditor Benefits", desc: "Creditors benefit from a structured, default payment system concerning all credits given to the company." },
                        { title: "Compliance Cleanliness", desc: "Prevents future penalties for non-filing of annual returns for a defunct or inactive business." }
                    ]
                }}
                eligibility={{
                    title: "Listicles & Checklists",
                    subtitle: "Critical reasons and document requirements",
                    list: [
                        { title: "Reasons for Winding Up", desc: "Unpaid debts, special resolutions, illegal acts, fraud, default in filing for 5 years, or Tribunal orders." },
                        { title: "Documents Required", desc: "Consent of creditors, Indemnity bond, Certified statement of assets/liabilities, Affidavit from directors." },
                        { title: "Mandatory Filings", desc: "CTC of special resolution, Digital signatures (DSC), PAN & Aadhaar of directors, and Consent letters." },
                        { title: "Legal Clearances", desc: "Statement of pending litigation and No Objection Certificate (NOC) from the Income Tax Department." }
                    ]
                }}
                process={{
                    title: "Registration Procedure",
                    subtitle: "Modes and Step-by-Step Winding Up Process",
                    steps: [
                        { step: "01", title: "Passing Resolution", desc: "Ordinary or Special resolution passed in the general meeting of the company." },
                        { step: "02", title: "Declaration of Solvency", desc: "Directors declare solvency via affidavit, filed with the Registrar within 5 weeks." },
                        { step: "03", title: "Creditors' Consent", desc: "Meeting of creditors to obtain agreement from at least 2/3rd in value for voluntary closure." },
                        { step: "04", title: "Liquidator Appointment", desc: "Registrar or Tribunal appoints a liquidator to execute assets and examine accounts." },
                        { step: "05", title: "Final Report filing", desc: "Liquidator submits the final report to the winding-up Committee or Tribunal for approval." },
                        { step: "06", title: "Official Order", desc: "Tribunal/Registrar passes the order of dissolution and publishes it in the Official Gazette." }
                    ]
                }}
                postCompliance={{
                    title: "Other Information",
                    subtitle: "Legal rules and administrative guidelines",
                    list: [
                        { title: "Winding-Up Rules 2020", desc: "Systematizes procedures under Section 271 and sets Summary Procedures under Section 361." },
                        { title: "Tribunal Scrutiny", desc: "The NCT or courts accept/reject petitions after scrutinizing the credibility of the winding-up grounds." },
                        { title: "Official Gazette Notice", desc: "The Registrar of Company sends the notice for final publication once the name is strike off." },
                        { title: "Summary Procedure", desc: "Fast-track liquidation for specific classes of companies as defined in the 2020 Rules." }
                    ]
                }}
                whyChooseUs={{
                    title: "Vyombiz Support",
                    subtitle: "How we assist in your company closure journey",
                    list: [
                        { title: "Purchase a Plan", desc: "Select a professional assistance plan tailored for your specific winding-up mode." },
                        { title: "Expert Consultation", desc: "Add queries and discuss your company's status with our experienced Vyombiz legal team." },
                        { title: "Document Handling", desc: "Simply provide the required documents to our experts; we handle the verification and filing." },
                        { title: "Declaration Drafting", desc: "We prepare all necessary declarations, affidavits, and petitions required for the winding up." },
                        { title: "End-to-End Tracking", desc: "From resolution filing to the final order, we complete all actions and get your Winding Up done." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Winding Up"
                faqs={faqs}
            />

        </div>
    );
};

export default WindingUpofPrivateLimitedCompany;
