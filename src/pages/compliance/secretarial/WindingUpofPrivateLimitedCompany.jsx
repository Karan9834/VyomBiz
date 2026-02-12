import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Winding Up of Private Limited Company Page matching Vyombiz layout styles
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

const WindingUpofPrivateLimitedCompany = () => {

    const faqs = [
        {
            question: "What are the main reasons companies wind up?",
            answer: "A company usually decides to wind up when it is not active, has ceased business operations, or is failing to fulfill mandatory compliances."
        },
        {
            question: "What happens if a company fails to wind up?",
            answer: "If a non-compliant company doesn't wind up, it attracts heavy penalties, and its directors may be disqualified from incorporating or being directors in other companies."
        },
        {
            question: "What is Voluntary Winding Up?",
            answer: "Voluntary winding up is when the shareholders and/or creditors of the company mutually decide to close the company by passing a special resolution."
        },
        {
            question: "What is Compulsory Winding Up?",
            answer: "Compulsory winding up is ordered by the Tribunal (NCLT) if the company is involved in fraudulent activities, unlawful acts, or inability to pay debts."
        },
        {
            question: "Who can apply for Fast Track Winding Up?",
            answer: "Companies that have been inactive for the preceding 2 years, or haven't started business within 1 year of incorporation, and have no assets/liabilities can apply."
        },
        {
            question: "What are the key documents required?",
            answer: "Key documents include Indemnity Bond, Statement of Accounts, Affidavit of Solvency, and Special Resolution passed by the members."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Winding Up of Private Limited "
                heroTitleSuffix="Company"
                heroSubtitle="Seamless Company Closure Services"
                heroDescription="Expert assistance in legally closing your Private Limited Company through Voluntary Winding Up or Fast Track Exit. We handle the documentation, insolvency declaration, and Registrar filings."
                whatsIncludedList={[
                    "Insolvency Declaration",
                    "STK-2 Filing",
                    "Liquidator Appointment",
                    "NOC from Departments"
                ]}
                stats={[
                    { count: "500+", label: "Companies Closed", icon: <Users size={20} /> },
                    { count: "100%", label: "Compliance", icon: <Briefcase size={20} /> },
                    { count: "3-6", label: "Months Process", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Legally Close Business",
                    title: "Winding Up –",
                    highlightTitle: "Overview",
                    description: [
                        "Winding up is the legal process of dissolving a company, wherein its life comes to an end, and its assets are administered or sold to pay off creditors and members.",
                        "Under Section 270 of the Companies Act, 2013, winding up can be initiated either voluntarily by the members/creditors or compulsorily by the National Company Law Tribunal (NCLT).",
                        "It is crucial for inactive companies to wind up officially to avoid accumulating non-compliance penalties and protect the directors from disqualification."
                    ],
                    whyIdealTitle: "Modes of Winding Up",
                    whyIdealList: [
                        { title: "Voluntary Winding Up", desc: "Initiated by the company members or creditors without court interference." },
                        { title: "Compulsory Winding Up", desc: "Ordered by the NCLT on grounds of fraud, default, or public interest." },
                        { title: "Fast Track Exit (FTE)", desc: "For defunct companies with no assets/liabilities to close quickly." },
                        { title: "Insolvency Resolution", desc: "Process under IBC, 2016 for companies unable to pay debts." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Winding Up",
                    subtitle: "Why close legally?",
                    list: [
                        { title: "Release from Liabilities", desc: "Directors and members are released from future liabilities and debts." },
                        { title: "Avoid Penalties", desc: "Stops the accumulation of penalties for non-filing of annual returns." },
                        { title: "No Legal Action", desc: "Prevents future legal action against the company or directors for non-compliance." },
                        { title: "Cancel Lease/Contracts", desc: "Allows legal termination of lease agreements and other contracts." },
                        { title: "Distribution of Assets", desc: "Remaining assets are lawfully distributed among shareholders." },
                        { title: "Peace of Mind", desc: "Formal closure ensures no lingering legal or financial obligations." }
                    ]
                }}
                eligibility={{
                    title: "Reasons for Winding Up",
                    subtitle: "When should you wind up?",
                    list: [
                        { title: "Business Failure", desc: "Company is unable to carry on business profitably." },
                        { title: "Inactivity", desc: "No business operations for the last 2 years (Defunct Company)." },
                        { title: "Mutual Decision", desc: "Shareholders mutually decide to shut down the venture." },
                        { title: "Unpaid Debts", desc: "Inability to pay off debts leading to insolvency." },
                        { title: "Regulatory Default", desc: "Default in filing financial statements for 5 consecutive years." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for the process.",
                    list: [
                        "Consent of all Creditors",
                        "Indemnity Bond notarized by Directors",
                        "Statement of Assets and Liabilities (Certified by CA)",
                        "Affidavit of Solvency by Directors",
                        "Special Resolution passed by Shareholders",
                        "Digital Signature Certificates (DSC) of Directors",
                        "PAN and Aadhaar of Directors",
                        "NOC from Income Tax Department",
                        "Statement of Pending Litigation (if any)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Winding Up Procedure",
                    subtitle: "Step-by-step process (Voluntary)",
                    steps: [
                        { step: "01", title: "Declaration", desc: "Directors declare solvency via affidavit." },
                        { step: "02", title: "Resolution", desc: "Pass Special Resolution in General Meeting." },
                        { step: "03", title: "Creditors' Meet", desc: "Obtain consent from 2/3rd of creditors (in value)." },
                        { step: "04", title: "Liquidator", desc: "Appoint a liquidator to manage assets and liabilities." },
                        { step: "05", title: "Filing", desc: "File application with ROC/Tribunal along with reports." },
                        { step: "06", title: "Dissolution", desc: "ROC/Tribunal passes the order of dissolution." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert Closure Services",
                    list: [
                        { title: "Compliance Experts", desc: "Team of CS and Legal professionals." },
                        { title: "Hassle-Free", desc: "We manage the entire documentation and filing." },
                        { title: "Fast Track Support", desc: "Specialized in Fast Track Exit (FTE) applications." },
                        { title: "Cost Effective", desc: "Affordable packages for company closure." },
                        { title: "NOC Assistance", desc: "Help in obtaining necessary NOCs." },
                        { title: "Liquidator Services", desc: "Associated liquidators for seamless asset disposal." },
                        { title: "End-to-End", desc: "From resolution drafting to final dissolution order." },
                        { title: "Advisory", desc: "Guidance on the best mode of winding up for your case." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Closure"
                faqs={faqs}
            />

        </div>
    );
};

export default WindingUpofPrivateLimitedCompany;
