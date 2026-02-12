import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Shield,
    Landmark,
    Banknote,
    FileCheck
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const NidhiCompanyCompliance = () => {
    const faqs = [
        {
            question: "What is form NDH-1?",
            answer: "NDH-1 is the Return of Statutory Compliances filed annually by Nidhi Companies to demonstrate compliance with net owned funds and deposit limits."
        },
        {
            question: "Can a Nidhi Company open branches?",
            answer: "Yes, but subject to certain conditions like profitability and having operated for at least 3 years inside the district/state."
        },
        {
            question: "What is the minimum member requirement for a Nidhi Company?",
            answer: "A Nidhi Company must ensure it has at least 200 members within one year of its incorporation."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Nidhi Company"
                heroTitleSuffix="Compliance"
                heroSubtitle="Annual & Event-Based Filings"
                heroDescription="Ensure your Nidhi Company stays compliant with Nidhi Rules, 2014. From NDH-1 to NDH-3, Corpbiz manages all your statutory filings and regulatory obligations."
                whatsIncludedList={[
                    "NDH-1 (Statutory Compliance)",
                    "NDH-2 (Extension Application)",
                    "NDH-3 (Half-Yearly Return)",
                    "Form AOC-4 & MGT-7",
                    "Net Owned Fund Maintenance",
                    "Member Register Management"
                ]}
                stats={[
                    { count: "100%", label: "Compliance", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Advisory", icon: <Globe size={20} /> },
                    { count: "Zero", label: "Errors", icon: <Shield size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "Nidhi Company Compliance - Overview",
                    imageUrl: "/ISO-overview.jpg",
                    description: [
                        "Nidhi Companies are non-banking finance entities classified as 'Mutual Benefit Companies'. They deal with lending and borrowing money amongst their members. To safeguard the interest of members, they are strictly regulated by the Ministry of Corporate Affairs (MCA) under Nidhi Rules, 2014.",
                        "Post-incorporation, a Nidhi Company must comply with stringent requirements such as maintaining a minimum of 200 members and a Net Owned Fund (NOF) ratio of 1:20 within the first year.",
                        "Annual and event-based compliances like filing NDH forms, annual returns, and financial statements are mandatory to avoid penalties and revocation of Nidhi status."
                    ]
                }}
                advantages={{
                    title: "Compliance Importance",
                    subtitle: "Why adherance to Nidhi Rules is vital",
                    list: [
                        { title: "Legal Status", desc: "Maintains the legal validity of the Nidhi License." },
                        { title: "Trust", desc: "Builds trust among members and depositors regarding the safety of their funds." },
                        { title: "Avoid Penalties", desc: "Non-compliance attracts heavy fines and potential closure orders." },
                        { title: "Operational Freedom", desc: "Compliant companies can operate branches and expand business smoothly." }
                    ]
                }}
                eligibility={{
                    title: "Mandatory Forms",
                    subtitle: "Key NDH Returns",
                    list: [
                        { title: "Form NDH-1", desc: "Return of Statutory Compliances. Filed within 90 days from the closure of the first FY." },
                        { title: "Form NDH-2", desc: "Application for extension of time to meet compliance requirements." },
                        { title: "Form NDH-3", desc: "Half-yearly return to be filed with ROC within 30 days from the end of each half-year." },
                        { title: "Form AOC-4", desc: "Filing of Financial Statements annually." },
                        { title: "Form MGT-7", desc: "Filing of Annual Return annually." }
                    ]
                }}
                process={{
                    title: "Compliance Requirements",
                    subtitle: "Post-Incorporation Milestones (First Year)",
                    steps: [
                        { step: "01", title: "Members", desc: "Acquire minimum 200 members within 1 year." },
                        { step: "02", title: "Net Owned Funds", desc: "Maintain Net Owned Funds (NOF) of at least ₹10 Lakhs (or ₹20 Lakhs as per new rules)." },
                        { step: "03", title: "Unencumbered Deposits", desc: "Maintain unencumbered term deposits of not less than 10% of outstanding deposits." },
                        { step: "04", title: "Ratio", desc: "Ensure NOF to Deposits ratio does not exceed 1:20." },
                        { step: "05", title: "Filing", desc: "File NDH-1 duly certified by a CA/CS/CMA." }
                    ]
                }}
                whyUs={{
                    title: "Why Corpbiz?",
                    subtitle: "Nidhi Experts",
                    list: [
                        { title: "Nidhi Specialization", desc: "Dedicated team for Nidhi Company regulations." },
                        { title: "Timely Alerts", desc: "We remind you before every due date." },
                        { title: "Audit Support", desc: "Assistance with statutory and internal audits." },
                        { title: "Growth Advisory", desc: "Consultation on expanding your Nidhi business legally." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default NidhiCompanyCompliance;
