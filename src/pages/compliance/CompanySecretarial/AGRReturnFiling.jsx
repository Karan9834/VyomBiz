import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Shield,
    Signal,
    RadioTower,
    Server
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const AGRReturnFiling = () => {
    const faqs = [
        {
            question: "What is AGR?",
            answer: "Adjusted Gross Revenue (AGR) is the revenue share that telecom operators must pay to the government, calculated based on the gross revenue minus specific deductions."
        },
        {
            question: "Who needs to file AGR Returns?",
            answer: "All valid Telecom License holders, including ISPs, VNOs, and NLD/ILD operators, must file AGR returns."
        },
        {
            question: "What is the penalty for delay?",
            answer: "Delay in payment of license fees or filing returns attracts interest and penalties as per the license agreement terms."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="AGR Return"
                heroTitleSuffix="Filing"
                heroSubtitle="Telecom License Compliance"
                heroDescription="Expert assistance for Adjusted Gross Revenue (AGR) Returns filing. We help ISPs, VNOs, and Telecom Operators comply with DoT regulations and SARAS portal filings."
                whatsIncludedList={[
                    "AGR Computation",
                    "Quarterly Return Filing",
                    "Annual Return Filing",
                    "DoT/SARAS Portal Management",
                    "Audit Report Assistance",
                    "Revenue Assessment"
                ]}
                stats={[
                    { count: "100%", label: "Compliance", icon: <CheckCircle size={20} /> },
                    { count: "Telecom", label: "Experts", icon: <RadioTower size={20} /> },
                    { count: "Secure", label: "Filing", icon: <Shield size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "AGR Return Filing - Overview",
                    imageUrl: "/ISO-overview.jpg",
                    description: [
                        "Telecom operators in India holding licenses like UL (Unified License), VNO, or ISP are required to pay a percentage of their Adjusted Gross Revenue (AGR) as License Fee (LF) and Spectrum Usage Charges (SUC) to the Department of Telecommunications (DoT).",
                        "The filing of AGR statements is a mandatory compliance activity. These returns must be filed quarterly and annually, self-assessing the revenue and applicable fees.",
                        "Filings are typically done through the SARAS (System for Assessment of Revenue and Submission of License Fee) portal."
                    ]
                }}
                advantages={{
                    title: "Why File Correctly?",
                    subtitle: "Importance of Accuracy",
                    list: [
                        { title: "Avoid Penalties", desc: "Incorrect or delayed filing leads to heavy interest and penalties." },
                        { title: "License Safety", desc: "Non-compliance can lead to the cancellation of the Telecom License." },
                        { title: "Assessment", desc: "Proper filing ensures smooth revenue assessment by DoT." },
                        { title: "Audit Trail", desc: "Maintains a clean audit trail for statutory and internal audits." }
                    ]
                }}
                eligibility={{
                    title: "Applicability",
                    subtitle: "Who must file?",
                    list: [
                        { title: "ISP Licensees", desc: "Internet Service Providers (Category A, B, C)." },
                        { title: "VNO Licensees", desc: "Virtual Network Operators." },
                        { title: "UL Holders", desc: "Unified License holders for Access Services, NLD, ILD." },
                        { title: "IP-1 Providers", desc: "Infrastructure Providers (though regulations may vary)." }
                    ]
                }}
                process={{
                    title: "Filing Process",
                    subtitle: "Steps to Compliance",
                    steps: [
                        { step: "01", title: "Book Keeping", desc: "Maintain separate accounts for telecom revenue." },
                        { step: "02", title: "Computation", desc: "Calculate Gross Revenue and Deductions to arrive at AGR." },
                        { step: "03", title: "Payment", desc: "Pay the License Fee (usually 8% of AGR) online." },
                        { step: "04", title: "Audit", desc: "Get the AGR Statement audited by a Statutory Auditor (Annual attribute)." },
                        { step: "05", title: "Submission", desc: "Upload the statement and proof of payment on the SARAS portal." },
                        { step: "06", title: "Verification", desc: "DoT verifies the submission and may raise queries." }
                    ]
                }}
                whyUs={{
                    title: "Why Corpbiz?",
                    subtitle: "Telecom Regulatory Experts",
                    list: [
                        { title: "Domain Knowledge", desc: "Deep understanding of Telecom laws and DoT notifications." },
                        { title: "SARAS Expertise", desc: "Familiarity with the SARAS portal nuances." },
                        { title: "Audit Support", desc: "We coordinate with auditors to ensure correct certification." },
                        { title: "End-to-End", desc: "From calculation to final submission receipt." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default AGRReturnFiling;
