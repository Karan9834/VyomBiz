import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * GSTAnnualReturnFiling Page matching Vyombiz layout styles
 */

const GSTAnnualReturnFiling = () => {

    const faqs = [
        {
            question: "Who is required to file GSTR-9?",
            answer: "All registered taxpayers under GST with an annual turnover exceeding ₹2 Crores are required to file GSTR-9. It provides a consolidated summary of all outward and inward supplies."
        },
        {
            question: "What is the difference between GSTR-9 and GSTR-9C?",
            answer: "GSTR-9 is the annual return filed by regular taxpayers, while GSTR-9C is a reconciliation statement that reconciles the figures in GSTR-9 with the audited financial statements. GSTR-9C is applicable for taxpayers with turnover exceeding ₹5 Crores."
        },
        {
            question: "Who is exempted from filing GSTR-9?",
            answer: "Input Service Distributors (ISD), Casual Taxable Persons, Non-resident Taxable Persons, and taxpayers deducting/collecting tax at source are generally exempted from filing GSTR-9."
        },
        {
            question: "What happens if I delay filing GSTR-9?",
            answer: "Late filing of GSTR-9 attracts a late fee. It is important to file on time to avoid penalties and ensure compliance."
        },
        {
            question: "Can I revise GSTR-9 after filing?",
            answer: "No, once filed, GSTR-9 cannot be revised. It is crucial to review all details carefully before the final submission."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="GST Annual Return"
                heroTitleSuffix="Filing"
                heroSubtitle="File GSTR-9 Online with Experts"
                heroDescription="Are you a registered taxpayer preparing for GST Annual Return Filing? Ensure a smooth and error-free process with professional assistance. We have successfully filed GST annual returns for thousands of taxpayers."
                whatsIncludedList={[
                    "GSTR-9 Preparation & Filing",
                    "Dedicated Tax Expert Review",
                    "GSTR-9C Reconciliation",
                    "Post-filing Clarification Assistance"
                ]}
                stats={[
                    { count: "10000+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "GST Compliance",
                    title: "GST Annual Return Filing –",
                    highlightTitle: "An Overview",
                    description: [
                        "Every registered taxpayer under the Goods and Services Tax (GST) system is required to file an annual return in the form of GSTR-9. This return provides a consolidated summary of all outward and inward supplies made during the financial year, covering transactions under Central GST (CGST), State GST (SGST), and Integrated GST (IGST) regulations.",
                        "The GSTR-9 filing acts as a combined record of all monthly or quarterly GST returns submitted by the taxpayer during the relevant year. It offers a clear picture of the tax liability, input tax credit, and supply details.",
                        <strong>What is GSTR-9 Filing?</strong>,
                        "GSTR-9 is a GST annual return filing that must be filed by registered taxpayers. It serves as a detailed report of all purchases and sales made throughout the financial year.",
                        "Filing this return is mandatory for businesses with an annual turnover exceeding Rs. 2 crores. It helps in avoiding penalties and discrepancies in tax records."
                    ],
                    whyIdealTitle: "Types of GST Annual Returns",
                    whyIdealList: [
                        { title: "GSTR-9", desc: "Mandatory for regular taxpayers with turnover exceeding ₹2 crores. Compiles comprehensive financial info." },
                        { title: "GSTR-9A", desc: "For taxpayers under the GST composition scheme. Specifically designed for composition dealers." },
                        { title: "GSTR-9C", desc: "Reconciliation statement matching GSTR-9 with audited financial statements. Applicable if turnover exceeds ₹5 crores." }
                    ]
                }}
                advantages={{
                    title: "Applicability & Exemptions",
                    subtitle: "Understanding who needs to file and who is exempted.",
                    list: [
                        { title: "Regular Taxpayers", desc: "All regular registered taxpayers are required to file GSTR-9 under standard GST provisions." },
                        { title: "SEZ Units", desc: "SEZ units and developers must file GSTR-9 to report their financial transactions." },
                        { title: "Composition Scheme", desc: "Taxpayers who switched from composition to regular status during the year must file GSTR-9." },
                        { title: "Exemption: ISD", desc: "Input Service Distributors are exempted from filing GSTR-9." },
                        { title: "Exemption: NRIs", desc: "Non-resident taxable individuals are not obligated to file GSTR-9." },
                        { title: "Exemption: TDS/TCS", desc: "Individuals subject to TDS/TCS under Income Tax Act are exempted." }
                    ]
                }}
                eligibility={{
                    title: "Prerequisites & Format",
                    subtitle: "Key requirements for a successful GSTR-9 filing.",
                    list: [
                        { title: "Registered Taxpayer", desc: "Must be registered as a regular GST taxpayer for at least one day in the FY." },
                        { title: "Filed GSTR-1 & 3B", desc: "Must have filed GSTR-1 and GSTR-3B for the entire financial year before GSTR-9." },
                        { title: "Basic Details", desc: "Fiscal year, GSTIN, legal name, and trade name (Auto-filled)." },
                        { title: "Outward Supplies", desc: "Details of taxable, zero-rated, and exempt supplies declared during the FY." },
                        { title: "Input Tax Credit", desc: "Details of ITC availed, reversed, and ineligible ITC." },
                        { title: "Tax Paid details", desc: "Breakup of tax payable and paid in cash or through ITC." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents to keep handy for filing GSTR-9.",
                    list: [
                        "Monthly GST Returns (GSTR-1, GSTR-3B)",
                        "Annual Financial Statements",
                        "Reconciliation Statement (GSTR-9C)",
                        "Sales and Purchase Registers",
                        "Tax Payment Challans",
                        "Audit Report (if applicable)",
                        "Digital Signature Certificate (DSC)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-9ffd4cd95525?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Filing Procedure",
                    subtitle: "Step-by-step guide to filing your GST Annual Return.",
                    steps: [
                        { step: "01", title: "Login to Portal", desc: "Visit GST official website and login with credentials." },
                        { step: "02", title: "Select FY", desc: "Choose the relevant Financial Year for the return." },
                        { step: "03", title: "Fill Details", desc: "Fill in requisite details in various tables (Outward supplies, ITC, etc.)." },
                        { step: "04", title: "Preview Draft", desc: "Preview the draft GSTR-9 to ensure accuracy." },
                        { step: "05", title: "Compute Liabilities", desc: "Compute any late fees or differential liability and pay." },
                        { step: "06", title: "Final Submission", desc: "File the return with DSC or EVC." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Us?",
                    subtitle: "Expert assistance for a hassle-free filing experience.",
                    list: [
                        { title: "Turnover Assessment", desc: "We help assess if filing is mandatory or optional for you." },
                        { title: "Reconciliation", desc: "In-depth reconciliation of monthly returns with annual data." },
                        { title: "Error-Free Filing", desc: "Expert review to prevent errors and notices." },
                        { title: "Post-Filing Support", desc: "Guidance on any subsequent queries or compliance needs." },
                        { title: "Dedicated Support", desc: "Personalized assistance from a dedicated account manager." },
                        { title: "Time Saving", desc: "We handle the complexities so you can focus on business." },
                        { title: "Penalty Avoidance", desc: "Timely filing to help you avoid late fees and penalties." },
                        { title: "Data Security", desc: "Your financial data is handled with utmost confidentiality." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about GST Annual Return Filing"
                faqs={faqs}
            />

        </div>
    );
};

export default GSTAnnualReturnFiling;
