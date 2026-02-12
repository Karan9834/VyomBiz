import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Shield,
    PieChart,
    Coins,
    ArrowUpCircle
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ChangeInShareCapital = () => {
    const faqs = [
        {
            question: "What is Authorized Share Capital?",
            answer: "It is the maximum amount of capital a company can issue to its shareholders as recognized by its MOA."
        },
        {
            question: "In which form is the increase in Authorized Capital filed?",
            answer: "The increase in Authorized Capital is filed in Form SH-7 with the ROC."
        },
        {
            question: "How long does it take to approve the increase?",
            answer: "Once Form SH-7 is filed with the payment of stamp duty, the approval typically comes within a few days, and the master data is updated."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Change in"
                heroTitleSuffix="Share Capital"
                heroSubtitle="Capital Structure Revision Services"
                heroDescription="Scale your business by increasing your Authorized Share Capital. Corpbiz facilitates the legal process of altering your capital clauses and filing necessary forms with ROC."
                whatsIncludedList={[
                    "AOA Modification",
                    "Board & EGM Resolutions",
                    "Filing Form SH-7",
                    "Filing Form PAS-3 (Allotment)",
                    "Stamp Duty Payment Advisory",
                    "MOA Alternation"
                ]}
                stats={[
                    { count: "100%", label: "Accuracy", icon: <CheckCircle size={20} /> },
                    { count: "Fast", label: "Filing", icon: <Award size={20} /> },
                    { count: "Expert", label: "Support", icon: <Globe size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "Change in Share Capital - Overview",
                    imageUrl: "/ISO-overview.jpg",
                    description: [
                        "A company's capital requirement grows as the business expands. To accommodate new investors or issue more shares, a company often needs to increase its Authorized Share Capital.",
                        "Authorized Capital is the limit up to which a company can issue shares. If the Paid-up Capital needs to exceed this limit, the Authorized Capital must first be increased by amending the Memorandum of Association (MOA).",
                        "This process involves seeking shareholder approval and paying sum stamp duty to the government on the increased amount."
                    ]
                }}
                advantages={{
                    title: "Reasons for Increase",
                    subtitle: "Why change capital structure?",
                    list: [
                        { title: "Fundraising", desc: "To bring in new investment from VCs, Angels, or new partners." },
                        { title: "Bonus Issue", desc: "To issue bonus shares to existing shareholders." },
                        { title: "Business Expansion", desc: "To meet the capital requirements of large projects or expansion." },
                        { title: "Regulatory Compliance", desc: "To meet minimum capital requirements for specific licenses." }
                    ]
                }}
                eligibility={{
                    title: "Key Forms",
                    subtitle: "Forms for Capital Change",
                    list: [
                        { title: "Form SH-7", desc: "For notifying the Registrar about the increase in Authorized Share Capital." },
                        { title: "Form PAS-3", desc: "Return of Allotment, filed when new shares are actually issued to shareholders." },
                        { title: "Form MGT-14", desc: "For filing Special/Ordinary Resolutions (if applicable based on AOA)." }
                    ]
                }}
                process={{
                    title: "Alteration Process",
                    subtitle: "Step-by-step Guide",
                    steps: [
                        { step: "01", title: "AOA Check", desc: "Verify if AOA authorizes increase of capital; if not, amend AOA first." },
                        { step: "02", title: "Board Meeting", desc: "Convene Board Meeting to approve the increase and call EGM." },
                        { step: "03", title: "Shareholder Meeting", desc: "Hold EGM and pass Ordinary Resolution for capital increase." },
                        { step: "04", title: "File SH-7", desc: "File Form SH-7 with ROC within 30 days along with ordinary resolution and amended MOA." },
                        { step: "05", title: "Stamp Duty", desc: "Pay the applicable stamp duty on the increased authorized capital." },
                        { step: "06", title: "Post Compliance", desc: "Once approved, the company can proceed to allot shares (files PAS-3)." }
                    ]
                }}
                whyUs={{
                    title: "Why Corpbiz?",
                    subtitle: "Capital Management",
                    list: [
                        { title: "Strategic Advice", desc: "Advisory on the optimal capital structure for your needs." },
                        { title: "Stamp Duty Calc", desc: "Accurate calculation of stamp duty to avoid over/under payment." },
                        { title: "Drafting", desc: "Professional drafting of resolutions and MOA amendments." },
                        { title: "Speed", desc: "Quick turnaround time for urgent funding rounds." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default ChangeInShareCapital;
