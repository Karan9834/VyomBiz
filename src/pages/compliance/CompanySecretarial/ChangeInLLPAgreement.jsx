import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Shield,
    Handshake,
    FileSignature,
    PenTool
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ChangeInLLPAgreement = () => {
    const faqs = [
        {
            question: "Is stamp duty payable on the supplementary agreement?",
            answer: "Yes, stamp duty is payable on the supplementary agreement based on the state laws and the nature of the change (e.g., capital contribution increase)."
        },
        {
            question: "What form is filed for changing the LLP Agreement?",
            answer: "LLP Form 3 must be filed with the ROC within 30 days of the modification of the agreement."
        },
        {
            question: "Can we change the profit sharing ratio?",
            answer: "Yes, partners can change the profit/loss sharing ratio by executing a supplementary deed and filing Form 3."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Change in"
                heroTitleSuffix="LLP Agreement"
                heroSubtitle="LLP Deed Modification Services"
                heroDescription="Update your partnership terms seamlessly. Whether it's profit sharing, partner rights, or capital contribution, Corpbiz helps you draft and file the Supplementary LLP Agreement."
                whatsIncludedList={[
                    "Drafting Supplementary Deed",
                    "Filing LLP Form 3",
                    "Change in Profit Sharing Ratio",
                    "Admission/Resignation Clauses",
                    "Stamp Duty Advisory",
                    "Liaison with ROC"
                ]}
                stats={[
                    { count: "100%", label: "Legal Validity", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Drafting", icon: <FileSignature size={20} /> },
                    { count: "Fast", label: "Process", icon: <Award size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "Change in LLP Agreement - Overview",
                    imageUrl: "/ISO-overview.jpg",
                    description: [
                        "The LLP Agreement is the charter of the Limited Liability Partnership, defining the mutual rights and duties of partners. Any change in these terms requires the execution of a Supplementary Agreement.",
                        "Common reasons for change include changes in profit-sharing ratios, admission of new partners, resignation of existing partners, or changes in capital contribution.",
                        "All such changes must be reported to the Registrar of Companies (ROC) by filing LLP Form 3 within 30 days of the modification."
                    ]
                }}
                advantages={{
                    title: "Common Changes",
                    subtitle: "Why modify the agreement?",
                    list: [
                        { title: "Profit Sharing", desc: "Altering the ratio in which profits and losses are distributed." },
                        { title: "Capital Contribution", desc: "Increasing or decreasing the capital contributed by partners." },
                        { title: "Partner Rights", desc: "Changing the roles, responsibilities, or powers of designated partners." },
                        { title: "Business Activity", desc: "Changing the scope or nature of business activities." },
                        { title: "Operational Terms", desc: "Modifying bank operation rules or dispute resolution mechanisms." }
                    ]
                }}
                eligibility={{
                    title: "Requirements",
                    subtitle: "Documentation needed",
                    list: [
                        { title: "Original Agreement", desc: "Copy of the original LLP Agreement." },
                        { title: "Supplementary Deed", desc: "Drafted and notarized Supplementary Agreement." },
                        { title: "Resolution", desc: "Resolution passed by partners approving the change." },
                        { title: "Form 3", desc: "Filing of Form 3 is mandatory." }
                    ]
                }}
                process={{
                    title: "Change Process",
                    subtitle: "Step-by-step Guide",
                    steps: [
                        { step: "01", title: "Partner Meeting", desc: "Partners meet to discuss and agree upon the proposed changes." },
                        { step: "02", title: "Drafting", desc: "Draft the Supplementary LLP Agreement incorporating the changes." },
                        { step: "03", title: "Execution", desc: "Execute the agreement on stamp paper of appropriate value and get it notarized." },
                        { step: "04", title: "Filing", desc: "File LLP Form 3 with the ROC within 30 days of execution." },
                        { step: "05", title: "Approval", desc: "ROC approves the form, and the changes become effective on record." }
                    ]
                }}
                whyUs={{
                    title: "Why Corpbiz?",
                    subtitle: "Drafting Experts",
                    list: [
                        { title: "Custom Drafting", desc: "Tailor-made agreements to suit your specific partnership dynamics." },
                        { title: "Legal Review", desc: "Thorough review to prevent future disputes." },
                        { title: "Compliance", desc: "Ensuring all clauses are in line with the LLP Act, 2008." },
                        { title: "Hassle-Free", desc: "We handle the entire digital filing process." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default ChangeInLLPAgreement;
