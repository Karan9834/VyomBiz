import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Globe,
    Zap
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const CentralFssaiLicense = () => {
    const faqs = [
        {
            question: "Who needs a Central FSSAI License?",
            answer: "A Central FSSAI License is mandatory for Food Business Operators (FBOs) with an annual turnover exceeding ₹20 Crores. It is also required for importers, exporters, e-commerce food platforms, and businesses operating in central government agencies like airports or railways."
        },
        {
            question: "What is the validity of a Central FSSAI License?",
            answer: "The license comes with a flexible validity duration ranging from 1 to 5 years. The cost varies depending on the number of years selected."
        },
        {
            question: "When should I renew my Central FSSAI License?",
            answer: "The Central FSSAI License must be renewed at least 30 days before the expiration date to avoid late fees and ensure continuous legal operation."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Central FSSAI"
                heroTitleSuffix="License"
                heroSubtitle="Regulatory Excellence for Large-Scale Food Enterprises"
                heroDescription="Drive your global food business with a Central FSSAI License. Mandatory for large-scale manufacturers, importers, and e-commerce giants, this license is your gateway to nationwide operations and international trade."
                whatsIncludedList={[
                    "Central Authority Liaisoning",
                    "Import/Export Compliance (IEC)",
                    "FoSCoS Central Application Filing",
                    "Audited FSMS Plan Support",
                    "Multi-State Operation Guidance",
                    "Global Safety Standard Assessment"
                ]}
                stats={[
                    { count: "5000+", label: "Central Licenses", icon: <Globe size={20} /> },
                    { count: "₹20Cr+", label: "Turnover Entry", icon: <Zap size={20} /> },
                    { count: "3 Days", label: "Docs Ready", icon: <FileText size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={{
                    badge: "National Level",
                    title: "Central FSSAI Authority –",
                    highlightTitle: "Global Footprint",
                    description: [
                        "The FSSAI Central License is the highest level of food safety certification in India. It is specifically designed for Large Food Business Operators (FBOs) that have reached a massive scale or are involved in international trade.",
                        "This license ensures that your products meet the highest safety norms formulated under the FSS Act, 2006. It is a mandatory requirement for e-commerce platforms, importers, and entities operating across multiple states.",
                        <strong>Key Eligibility:</strong>,
                        "Mandatory for all FBOs with annual revenues over ₹20 Crore, 100% Export-Oriented Units, food units in central government agencies, seaports, and airports."
                    ],
                    whyIdealTitle: "Strategic Advantages",
                    whyIdealList: [
                        { title: "Worldwide Identity", desc: "Helps establish a global reputation and brand name in international markets." },
                        { title: "Business Expansion", desc: "Easily open new outlets and extend your footprint to any location in India." },
                        { title: "Legal Advantage", desc: "Acting as definitive evidence that food quality meets the highest standards." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Central License",
                    subtitle: "Why large-scale enterprises trust Central FSSAI certification.",
                    list: [
                        { title: "Nationwide Operations", desc: "Operate across all states under a single, centralized licensing system." },
                        { title: "Investor Confidence", desc: "Makes it significantly easier to secure funding and loans for expansion." },
                        { title: "Consumer Awareness", desc: "Gain an advantage with an increasingly safety-conscious consumer base." },
                        { title: "Hygiene Benchmarking", desc: "Adhere to advanced hygiene norms that cater to premium market segments." },
                        { title: "Export Facilitation", desc: "Essential for shipping food articles abroad with an IEC certificate." },
                        { title: "Regulatory Security", desc: "Stay safe from heavy fines by following the most stringent safety norms." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who must apply for a Central FSSAI License?",
                    list: [
                        { title: "Large Manufacturers", desc: "FBOs with an annual turnover exceeding ₹20 Crores." },
                        { title: "Importers & Exporters", desc: "Any entity involved in the international trade of food products." },
                        { title: "E-commerce Platforms", desc: "Food aggregators and online delivery systems operating nationally." },
                        { title: "Central Gov. Agencies", desc: "Eateries at airports, seaports, and railway stations." },
                        { title: "Multi-State Units", desc: "Businesses having units in more than one state." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Comprehensive list for central level filing.",
                    list: [
                        "Form B (Designated Officer signature required)",
                        "Blueprint/Layout plan of the processing unit",
                        "List of Directors/Partners with full contact details",
                        "Certificate of Incorporation/Partnership Deed",
                        "Import Export Code (IEC) from DGFT",
                        "Food Safety Management System (FSMS) Plan",
                        "Analysis report of water from a recognized lab",
                        "NOC from the Ministry of Tourism (for hotels)"
                    ]
                }}
                process={{
                    title: "The Central Process",
                    subtitle: "Path to securing national food safety approval.",
                    steps: [
                        { step: "01", title: "Registration", desc: "Start by registering on the FoSCoS portal as a Central License applicant." },
                        { step: "02", title: "Form B Filing", desc: "Submit Form B with accurate financial and operational details." },
                        { step: "03", title: "Doc Verification", desc: "Central officials conduct a thorough audit of the submitted documents." },
                        { step: "04", title: "High-Level Inspection", desc: "Premises inspection by central authorities to verify global safety norms." },
                        { step: "05", title: "License Issuance", desc: "The Central License is granted and mailed to the registered business." }
                    ]
                }}
                features={{
                    title: "Service Features",
                    subtitle: "Tailored support for major corporations.",
                    list: [
                        { title: "Dedicated Liaison", desc: "Direct contact point for interacting with central FSSAI officials." },
                        { title: "Complex FSMS Drafting", desc: "Expert drafting of high-level Food Safety Management Systems." },
                        { title: "IEC Integration", desc: "Seamless integration of your Import-Export data with FSSAI filings." },
                        { title: "Multi-State Consolidation", desc: "Manage all your state-level units through a single central dashboard." }
                    ]
                }}
                postCompliance={{
                    title: "Post Compliance",
                    subtitle: "Mandatory actions for central license holders.",
                    list: [
                        "Filing of Annual Returns (Form D1) by 31st May",
                        "Display of 14-digit FSSAI license number on all packages",
                        "Regular testing of water and food products at NABL labs",
                        "Quarterly health checks for all production staff",
                        "Maintaining detailed records of raw material sourcing",
                        "Immediate notification of changes in production capacity"
                    ]
                }}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default CentralFssaiLicense;
