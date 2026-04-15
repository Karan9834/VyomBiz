import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Winding Up of Private Limited Company Page for Vyombiz
 * Reverted to standard DetailsLayout structure as requested.
 */
const WindingUpofPrivateLimitedCompany = () => {

    const faqs = [
        {
            question: "How long does it take to wind up a private limited company?",
            answer: "The timeline can vary depending on the type of winding up and the company's financial status. Generally, the process may take several months due to regulatory approvals and compliance steps."
        },
        {
            question: "Can a company with liabilities be wound up?",
            answer: "Yes, but liabilities must be settled during the winding-up process before the company can be dissolved."
        },
        {
            question: "Is winding up different from striking off a company?",
            answer: "Yes. Striking off is usually used for inactive companies with no liabilities, while winding up involves a structured liquidation and settlement process."
        },
        {
            question: "Do directors remain liable after winding up?",
            answer: "Once the winding-up process is completed and approved, directors are generally relieved from future liabilities related to the company."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Winding Up of Private Limited "
                heroTitleSuffix="Company"
                heroSubtitle="Close Your Company the Right Way — Without Legal Hassles"
                heroDescription="Winding up a private limited company requires strict compliance with regulatory procedures, documentation, and filings with the Ministry of Corporate Affairs. Whether your business has become inactive, completed its purpose, or you plan to exit, a structured closure process is essential to avoid penalties and legal complications. With expert compliance support, you can close your company smoothly while ensuring all statutory obligations are fulfilled. Simplify Your Company Closure with Expert Compliance Support"
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
                    title: "What is Winding Up of a",
                    highlightTitle: "Private Limited Company?",
                    description: [
                        "Winding up of a private limited company is the legal process of closing down a company and settling its financial and statutory obligations. During this process, the company ceases operations, its assets are liquidated, liabilities are paid off, and the remaining assets (if any) are distributed among shareholders.",
                        "Once the winding-up process is completed and approved by the relevant authorities, the company's name is removed from the official records of the Ministry of Corporate Affairs (MCA).",
                        "Businesses usually opt for winding up when they:",
                        "• Are no longer operational",
                        "• Have fulfilled their intended objectives",
                        "• Face financial difficulties",
                        "• Decide to exit the market strategically",
                        "Professional compliance guidance ensures the closure is done legally and without future liabilities.",
                        "Vyombiz managed by Clink Consultancy Services Private Limited helps businesses navigate the winding-up process efficiently while maintaining full regulatory compliance."
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
                    title: "Benefits of Proper Company Winding Up",
                    subtitle: "Closing a company through the correct legal procedure offers multiple advantages for promoters and stakeholders.",
                    list: [
                        { title: "Legal Closure of Business", desc: "The company is officially dissolved under the Companies Act and removed from MCA records." },
                        { title: "Protection from Future Liabilities", desc: "Proper winding up ensures directors and shareholders are not liable for future penalties or legal obligations." },
                        { title: "Compliance Clearance", desc: "All regulatory filings and compliance requirements are fulfilled before closure." },
                        { title: "Financial Settlement", desc: "Assets are distributed and debts are cleared systematically during the liquidation process." },
                        { title: "Clean Exit for Promoters", desc: "Entrepreneurs can move forward with new ventures without compliance burdens from inactive entities." }
                    ],
                    description: "Vyombiz managed by Clink Consultancy Services Private Limited ensures that every stage of the closure process is handled professionally and in accordance with statutory regulations."
                }}
                eligibility={{
                    title: "When Should You Consider Winding Up Your Company?",
                    subtitle: "There are several situations where winding up becomes the most practical business decision.",
                    list: [
                        { title: "Inactive Business", desc: "The company has been inactive for a long period." },
                        { title: "Objectives Achieved", desc: "Business objectives have already been achieved." },
                        { title: "Financial Losses", desc: "Financial losses make operations unsustainable." },
                        { title: "New Venture", desc: "The promoters want to start a new venture." },
                        { title: "High Compliance Costs", desc: "Regulatory compliance costs outweigh business benefits." },
                        { title: "Legal Clearances", desc: "Instead of leaving a dormant entity with pending compliance, formally winding up the company helps avoid penalties and legal complications." }
                    ]
                }}
                documents={{
                    title: "Documents Required for Winding Up a Private Limited Company",
                    description: "To initiate the winding-up process, several statutory documents must be prepared and filed with regulatory authorities. Having these documents prepared accurately helps avoid delays in the closure process.",
                    list: [
                        "Certificate of Incorporation of the company",
                        "Memorandum and Articles of Association (MOA & AOA)",
                        "Board Resolution approving winding up",
                        "Special Resolution passed by shareholders",
                        "Statement of accounts and financial statements",
                        "List of creditors and liabilities",
                        "Director identification details",
                        "PAN and tax clearance documents"
                    ],
                    imageUrl: "Documents.jpg"
                }}
                process={{
                    title: "Step-by-Step Process of Winding Up a Company",
                    subtitle: "The winding-up process involves multiple legal steps to ensure a compliant and smooth closure.",
                    steps: [
                        { step: "01", title: "Board Resolution", desc: "The directors pass a resolution proposing the winding up of the company." },
                        { step: "02", title: "Shareholder Approval", desc: "A special resolution is passed by shareholders to approve the closure of the company." },
                        { step: "03", title: "Appointment of Liquidator", desc: "A professional liquidator may be appointed to manage the liquidation process." },
                        { step: "04", title: "Settlement of Liabilities", desc: "All debts, statutory dues, and liabilities are cleared before dissolution." },
                        { step: "05", title: "Asset Distribution", desc: "Remaining assets, if any, are distributed among shareholders according to their shareholding." },
                        { step: "06", title: "Filing with MCA", desc: "Relevant forms and documents are filed with the Ministry of Corporate Affairs." },
                        { step: "07", title: "Company Dissolution", desc: "Once all compliance requirements are completed, the company is officially dissolved." }
                    ]
                }}
                typesOfCompliance={{
                    title: "Types of Company Winding Up",
                    subtitle: "Understanding the type of winding-up process applicable to your company is important for selecting the right compliance approach.",
                    list: [
                        { title: "1. Voluntary Winding Up", desc: "Voluntary winding up occurs when the shareholders of a company decide to close the business on their own. This usually happens when the company has no outstanding liabilities or has settled all debts. The process typically involves shareholder approval, appointment of a liquidator, settlement of liabilities, and final dissolution of the company." },
                        { title: "2. Compulsory Winding Up", desc: "Compulsory winding up occurs when a court or regulatory authority orders the company to be closed due to legal or financial issues. Common reasons include: Inability to pay debts; Fraudulent activities; Non-compliance with statutory requirements; Legal disputes among shareholders." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for Company Winding Up?",
                    subtitle: "Handling company closure without professional guidance can lead to compliance errors and regulatory complications. Expert support ensures the process is completed efficiently and legally.",
                    description: "Vyombiz managed by Clink Consultancy Services Private Limited offers structured compliance solutions to simplify the winding-up process.",
                    list: [
                        { title: "Expert legal and secretarial guidance", desc: "Our team ensures all legal requirements are met accurately." },
                        { title: "Accurate documentation and filings", desc: "We prepare and file all necessary documents with the MCA." },
                        { title: "Compliance with MCA regulations", desc: "We ensure every step adheres to the Companies Act." },
                        { title: "Transparent and streamlined process", desc: "We keep you informed at every stage of the closure." },
                        { title: "Dedicated professional support", desc: "You get a dedicated point of contact throughout the closure procedure." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions (FAQs)"
                subtitle="Common queries about Winding Up of a Private Limited Company"
                faqs={faqs}
            />

        </div>
    );
};

export default WindingUpofPrivateLimitedCompany;
