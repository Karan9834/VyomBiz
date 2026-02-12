import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Shield,
    Landmark,
    FileBarChart2,
    Briefcase
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const NBFCCompliance = () => {
    const faqs = [
        {
            question: "What is COSMOS in NBFC compliance?",
            answer: "COSMOS is the RBI's online reporting platform where NBFCs must submit their various periodic returns."
        },
        {
            question: "Is statutory audit mandatory for NBFCs?",
            answer: "Yes, all NBFCs registered with RBI must undergo a statutory audit of their accounts annually."
        },
        {
            question: "What are the consequences of non-compliance for NBFCs?",
            answer: "RBI may impose heavy penalties, cancel the Certificate of Registration (CoR), or even initiate winding-up proceedings."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="NBFC"
                heroTitleSuffix="Compliance"
                heroSubtitle="RBI & Statutory Compliance for NBFCs"
                heroDescription="Stay on the right side of RBI regulations. Corpbiz provides comprehensive compliance management services for Non-Banking Financial Companies (NBFCs) including periodic returns and audits."
                whatsIncludedList={[
                    "RBI Monthly/Quarterly Returns",
                    "NBS-9 & NBS-7 Filing",
                    "Statutory Audit Assistance",
                    "ALM Returns",
                    "KYC/AML Policy Drafting",
                    "Fair Practices Code Compliance"
                ]}
                stats={[
                    { count: "100%", label: "RBI Compliant", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Fintech Team", icon: <Globe size={20} /> },
                    { count: "Secure", label: "Data Handling", icon: <Shield size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "NBFC Compliance - Overview",
                    imageUrl: "/ISO-overview.jpg",
                    description: [
                        "Non-Banking Financial Companies (NBFCs) are strictly regulated by the Reserve Bank of India (RBI). Compliance is not a one-time event but a continuous process involving various periodic filings and adherence to prudential norms.",
                        "NBFCs must comply with the Master Directions issued by RBI, which cover returns on financials, prudential norms, asset-liability management (ALM), and more.",
                        "Compliance requirements vary based on the NBFC's size (Base Layer, Middle Layer, etc.) and whether it accepts public deposits."
                    ]
                }}
                advantages={{
                    title: "Value of Compliance",
                    subtitle: "Sustaining your Financial Business",
                    list: [
                        { title: "License Retention", desc: "Ensures the RBI Certificate of Registration (CoR) remains valid." },
                        { title: "Investor Confidence", desc: "High compliance standards attract equity investors and debt funding." },
                        { title: "Risk Management", desc: "Helps identification and mitigation of financial and operational risks." },
                        { title: "Market Reputation", desc: "Builds credibility with borrowers and the financial market." }
                    ]
                }}
                eligibility={{
                    title: "Key Filings",
                    subtitle: "RBI Returns for NBFCs",
                    list: [
                        { title: "NBS-9", desc: "Annual return for Non-Deposit taking NBFCs (Base Layer)." },
                        { title: "NBS-7", desc: "Quarterly statement of capital funds, risk assets, etc." },
                        { title: "ALM Returns", desc: "Asset Liability Management returns (Monthly/Half-yearly)." },
                        { title: "SAC Certificate", desc: "Statutory Auditor Certificate regarding compliance with RBI norms." },
                        { title: "Fiu-IND", desc: "Reporting of suspicious transactions to Financial Intelligence Unit." }
                    ]
                }}
                process={{
                    title: "Compliance Cycle",
                    subtitle: "Periodic Obligations",
                    steps: [
                        { step: "01", title: "Monthly", desc: "File monthly returns if applicable (e.g., for larger NBFCs)." },
                        { step: "02", title: "Quarterly", desc: "File NBS-7 and other quarterly statements." },
                        { step: "03", title: "Annual", desc: "File NBS-9, Statutory Audit, and SAC filing." },
                        { step: "04", title: "Event Based", desc: "Report changes in directors, registered office, or shareholding." },
                        { step: "05", title: "Policies", desc: "Review and update Fair Practices Code, IT Policy, and KYC Policy." }
                    ]
                }}
                whyUs={{
                    title: "Why Corpbiz?",
                    subtitle: "Fintech & NBFC Specialists",
                    list: [
                        { title: "Regulatory Tech", desc: "We use advanced tools to track RBI updates." },
                        { title: "Former Bankers", desc: "Advisory board includes ex-bankers and financial experts." },
                        { title: "End-to-End", desc: "From incorporation to ongoing compliance management." },
                        { title: "Audit Ready", desc: "We keep your books and records audit-ready at all times." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default NBFCCompliance;
