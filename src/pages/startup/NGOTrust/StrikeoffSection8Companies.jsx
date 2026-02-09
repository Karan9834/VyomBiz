import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * StrikeoffSection8Companies Page matching Vyombiz layout styles
 * Modeled after TrustRegistration.jsx
 */

const StrikeoffSection8Companies = () => {

    const faqs = [
        {
            question: "Why is it difficult to close a Section 8 company in India?",
            answer: "Unlike other companies, Section 8 companies cannot simply strike off. They must first convert into a normal private limited company and then apply for strike off, due to their charitable nature and asset restrictions."
        },
        {
            question: "Is it mandatory to convene a board meeting before applying for strike off?",
            answer: "Yes, the company must hold a board meeting and pass a special resolution to approve the strike off / conversion proposal before proceeding."
        },
        {
            question: "Can a Section 8 Company serve its objective after striking off?",
            answer: "No, once the company is struck off, it ceases to exist as a legal entity and cannot perform any activities or further its charitable objectives."
        },
        {
            question: "What happens to the assets of a Section 8 company upon closure?",
            answer: "Surplus assets cannot be distributed to members. They typically must be transferred to another Section 8 company with similar objects or to the government."
        },
        {
            question: "Is there any possibility of retrieving a company after strike off?",
            answer: "Generally, once a company is struck off under this process, it cannot be easily retrieved. Restoration is a complex legal process involving the NCLT."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Strike Off Section 8"
                heroTitleSuffix="Company"
                heroSubtitle="Simplify Closure & Compliance"
                heroDescription="Navigate the complex process of closing a Section 8 Company with expert assistance. We handle conversion, compliance, and final dissolution smoothly."
                whatsIncludedList={[
                    "Conversion to Normal Company",
                    "License Surrender Assistance",
                    "Asset & Liability Valuation",
                    "Final Strike Off Filing"
                ]}
                stats={[
                    { count: "500+", label: "Companies Closed", icon: <Users size={20} /> },
                    { count: "100%", label: "Compliance Rate", icon: <Briefcase size={20} /> },
                    { count: "Legal", label: "Expert Support", icon: <Building2 size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert expertise="Expertise in Strike off Section 8 Companies" />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Company Closure",
                    title: "Strike Off Section 8 Company –",
                    highlightTitle: "An Overview",
                    description: [
                        "Section 8 companies are established for charitable purposes and have distinct rules for closure compared to standard private limited companies.",
                        "Unlike other registered entities, a Section 8 company does not have a direct 'voluntary strike off' route available immediately. To close, it often needs to first convert into a normal company (e.g., Private Limited) by surrendering its Section 8 license.",
                        <strong>Why is it complex?</strong>,
                        "The government ensures that assets acquired for charitable purposes are utilized correctly. Hence, the company must prove it has transferred its 'special status' assets or converted before it can simply shut down.",
                        "The process involves strict scrutiny by the Regional Director and Registrar of Companies to ensure no charitable funds are misappropriated."
                    ],
                    whyIdealTitle: "Reasons to Strike Off",
                    whyIdealList: [
                        { title: "Non-Commencement", desc: "The company failed to start its business operations within one year of incorporation." },
                        { title: "Dormant Status", desc: "The company has been inactive for the past two financial years and hasn't applied for Dormant status." },
                        { title: "Object Change", desc: "The company's charitable objectives have become unviable or impossible to achieve." },
                        { title: "Compliance Burden", desc: "Inability to meet the heavy and evolving compliance requirements of a Section 8 entity." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Striking Off",
                    subtitle: "Closing a non-operational Section 8 company can save resources and legal liabilities.",
                    list: [
                        { title: "Avoid Compliance", desc: "Eliminates the need for annual filings, audits, and meeting mandatory regulatory requirements." },
                        { title: "Avoid Fines", desc: "Prevents accumulation of heavy penalties for non-compliance, which can even disqualify directors." },
                        { title: "Reduce Costs", desc: "Running a dormant non-profit incurs administrative costs. Striking it off stops this financial drain." },
                        { title: "Clean Slate", desc: "Allows promoters to focus on other viable ventures without the baggage of a defunct entity." },
                        { title: "Legal Safety", desc: "Formal closure ensures directors are not held liable for future defaults of a 'ghost' company." },
                        { title: "Peace of Mind", desc: "Formal dissolution brings a legal end to the entity's lifecycle, resolving all pending matters." }
                    ]
                }}
                eligibility={{
                    title: "Pre-requisites for Closure",
                    subtitle: "Conditions that must be met before initiating the strike-off process.",
                    list: [
                        { title: "Operational Status", desc: "Company should be non-operational or failed to commence business." },
                        { title: "Asset Transfer", desc: "Charitable assets often need to be transferred to another Section 8 company." },
                        { title: "No Pending Litigation", desc: "There should be no ongoing legal cases or inspections against the company." },
                        { title: "No Liabilities", desc: "All debts and liabilities must be settled, and NOCs obtained from creditors." },
                        { title: "Annual Filings", desc: "Up-to-date annual returns and financial statements must be filed." },
                        { title: "Special Resolution", desc: "Shareholders/Members must pass a special resolution approving the closure." }
                    ]
                }}
                documents={{
                    title: "Mandatory Documents",
                    description: "Documents required for Conversion and subsequent Strike Off.",
                    list: [
                        "Board Resolution & Special Resolution",
                        "Memorandum & Articles of Association (MOA & AOA)",
                        "Statement of Assets & Liabilities (Audited)",
                        "Valuation Report by Registered Valuer",
                        "NOC from all Creditors",
                        "Director's Declaration & Indemnity Bond",
                        "Certificate of Incorporation & PAN",
                        "Latest Audited Balance Sheet & P&L Account",
                        "Digital Signature Certificates (DSC) of Directors"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Closure Procedure",
                    subtitle: "A two-stage process: Conversion followed by Strike Off.",
                    steps: [
                        { step: "01", title: "Conversion App", desc: "File application with Regional Director (RD) to convert Section 8 to Normal Pvt Ltd." },
                        { step: "02", title: "License Surrender", desc: "Surrender the Section 8 license and obtain approval for conversion." },
                        { step: "03", title: "Registrar Approval", desc: "ROC issues a fresh Certificate of Incorporation as a Private Limited Company." },
                        { step: "04", title: "Strike Off App", desc: "File Form STK-2 for striking off the newly converted Private Limited company." },
                        { step: "05", title: "Final Dissolution", desc: "ROC publishes the name in the Official Gazette and dissolves the company." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "We navigate the complex legalities of Section 8 closure for you.",
                    list: [
                        { title: "Expert Strategy", desc: "Handling the two-step conversion and strike-off process efficiently." },
                        { title: "Asset Valuation", desc: "Assistance with proper valuation and transfer of charitable assets." },
                        { title: "Documentation", desc: "Drafting of all legal resolutions, affidavits, and indemnity bonds." },
                        { title: "RD Coordination", desc: "Liaisoning with Regional Director for conversion approval." },
                        { title: "Compliance Check", desc: "Ensuring all past compliances are met to avoid rejection." },
                        { title: "Cost Effective", desc: "Transparent professional fees for the entire closure service." },
                        { title: "Fast Track", desc: "Proactive follow-ups to expedite the typically long process." },
                        { title: "Peace of Mind", desc: "Complete handover of legal responsibilities to our experts." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries regarding Section 8 Company Strike Off"
                faqs={faqs}
            />

        </div>
    );
};

export default StrikeoffSection8Companies;
