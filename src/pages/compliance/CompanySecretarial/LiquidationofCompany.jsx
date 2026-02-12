import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Liquidation of Company Page matching Vyombiz layout styles
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

const LiquidationofCompany = () => {

    const faqs = [
        {
            question: "What is the difference between Voluntary and Compulsory Liquidation?",
            answer: "Voluntary Liquidation is initiated by the company's members or creditors without any external default, whereas Compulsory Liquidation is ordered by a Tribunal (NCLT) usually upon a petition by creditors due to the company's inability to pay debts."
        },
        {
            question: "Who is a Liquidator?",
            answer: "A Liquidator is an authorized Insolvency Professional appointed to take custody of the company's assets, verify claims, sell assets, and distribute proceeds to creditors and shareholders."
        },
        {
            question: "How long does the liquidation process take?",
            answer: "Voluntary liquidation under IBC typically takes about 270 days (9 months) to complete. Compulsory liquidation can take significantly longer, up to 2 years, depending on legal complexities."
        },
        {
            question: "What happens to the directors during liquidation?",
            answer: "Upon the appointment of a liquidator, the powers of the Board of Directors are suspended and vested in the liquidator. Directors must cooperate with the liquidator."
        },
        {
            question: "Can creditors claim money during liquidation?",
            answer: "Yes, creditors must submit their claims to the liquidator within the specified time. Repayment is made based on the priority of claims (waterfall mechanism) defined in the IBC."
        },
        {
            question: "What is the role of NCLT in liquidation?",
            answer: "The National Company Law Tribunal (NCLT) is the adjudicating authority. It approves the liquidation order, appoints the liquidator, and sanctions the final dissolution of the company."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Liquidation of "
                heroTitleSuffix="Company"
                heroSubtitle="Winding Up & Asset Distribution"
                heroDescription="Formal legal process to close a company's operations, sell assets, and settle debts under the Insolvency and Bankruptcy Code (IBC), 2016. We assist with both Voluntary and Compulsory Liquidation."
                whatsIncludedList={[
                    "Voluntary Liquidation Support",
                    "Insolvency Professional (Liquidator)",
                    "Claim Verification & Asset Sale",
                    "NCLT Representation"
                ]}
                stats={[
                    { count: "IBC 2016", label: "Compliant", icon: <Users size={20} /> },
                    { count: "End-to-End", label: "Support", icon: <Briefcase size={20} /> },
                    { count: "NCLT", label: "Advisory", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Insolvency & Bankruptcy Code",
                    title: "Company Liquidation –",
                    highlightTitle: "Overview",
                    description: [
                        "Liquidation is the formal process of bringing a company's existence to an end. It involves selling the company's assets and using the proceeds to pay off creditors and shareholders.",
                        "Under the Insolvency and Bankruptcy Code (IBC), liquidation can be initiated voluntarily by solvent companies or compulsorily by creditors for insolvent ones.",
                        "The process ensures an orderly distribution of assets and final dissolution of the corporate entity."
                    ],
                    whyIdealTitle: "Types of Liquidation",
                    whyIdealList: [
                        { title: "Member’s Voluntary Liquidation (MVL)", desc: "Initiated by shareholders when the company is solvent and able to pay debts in full." },
                        { title: "Creditors’ Voluntary Liquidation (CVL)", desc: "Initiated when the company is insolvent and shareholders/creditors agree to wind up." },
                        { title: "Compulsory Liquidation", desc: "Ordered by the Tribunal (NCLT) on petition by creditors due to default or other grounds." }
                    ]
                }}
                advantages={{
                    title: "Implications of Liquidation",
                    subtitle: "Why proceed with liquidation?",
                    list: [
                        { title: "Closure", desc: "Provides a formal legal exit for a business that is no longer viable." },
                        { title: "Debt Resolution", desc: "Stops legal actions from creditors and provides a structured repayment mechanism." },
                        { title: "Director Liability", desc: "Clarifies director responsibilities and can mitigate personal liability if procedures are followed." },
                        { title: "Asset Distribution", desc: "Ensures fair distribution of remaining assets among stakeholders." },
                        { title: "Employee Claims", desc: "Addresses employee dues and claims through the liquidation estate." },
                        { title: "Legal Compliance", desc: "Avoids penalties associated with maintaining a defunct company." }
                    ]
                }}
                eligibility={{
                    title: "Pre-requisites",
                    subtitle: "Before You Start",
                    list: [
                        { title: "Solvency Declaration", desc: "For voluntary liquidation, directors must declare the company is solvent." },
                        { title: "Shareholder Approval", desc: "Special Resolution by shareholders is required." },
                        { title: "Creditor Consent", desc: "Approval from creditors representing 2/3rds of debt value." },
                        { title: "Insolvency Practitioner", desc: "Appointment of a licensed IP to act as Liquidator." },
                        { title: "Audit", desc: "Up-to-date financial statements are necessary." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documentation for Liquidation.",
                    list: [
                        "Declaration of Solvency by Directors",
                        "Audited Financial Statements (Last 2 years)",
                        "Board Resolution for Liquidation",
                        "Special Resolution by Shareholders",
                        "No Objection Certificate from Creditors",
                        "Statement of Assets and Liabilities",
                        "Indemnity Bond",
                        "Proof of Appointment of Liquidator",
                        "Pan Card & ID Proofs of Directors"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Liquidation Process",
                    subtitle: "Step-by-step Procedure (Voluntary)",
                    steps: [
                        { step: "01", title: "Declaration", desc: "Directors file Declaration of Solvency with ROC." },
                        { step: "02", title: "Resolution", desc: "Shareholders pass Special Resolution to liquidate and appoint Liquidator." },
                        { step: "03", title: "Public Announcement", desc: "Liquidator makes public announcement inviting claims." },
                        { step: "04", title: "Claim Verification", desc: "Liquidator verifies claims from creditors and employees." },
                        { step: "05", title: "Asset Sale", desc: "Liquidator realizes assets and forms Liquidation Estate." },
                        { step: "06", title: "Distribution", desc: "Proceeds distributed in order of priority (waterfall)." },
                        { step: "07", title: "Final Report", desc: "Liquidator submits Final Report to NCLT." },
                        { step: "08", title: "Dissolution", desc: "NCLT passes Dissolution Order; Company ceases to exist." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert Insolvency Professionals",
                    list: [
                        { title: "Licensed IPs", desc: "Team includes licensed Insolvency Professionals." },
                        { title: "IBC Expertise", desc: "Deep understanding of the Insolvency and Bankruptcy Code." },
                        { title: "Creditor negotiation", desc: "Skilled in negotiating and settling creditor claims." },
                        { title: "Asset Valuation", desc: "Assistance with accurate valuation of company assets." },
                        { title: "NCLT Representation", desc: "Legal representation during tribunal hearings." },
                        { title: "Compliance Management", desc: "Handling all ROC and IBBI filings." },
                        { title: "Transparent Process", desc: "Clear communication and reporting throughout." },
                        { title: "Efficient Closure", desc: "Striving for the fastest possible resolution." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Liquidation"
                faqs={faqs}
            />

        </div>
    );
};

export default LiquidationofCompany;
