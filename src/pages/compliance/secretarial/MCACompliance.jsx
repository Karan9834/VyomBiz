import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Shield,
    Calendar,
    Briefcase,
    FileCheck
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const MCACompliance = () => {
    const faqs = [
        {
            question: "What are the MCA compliances for a private limited company?",
            answer: "They include Commencement of Business (INC 20A), Auditor Appointment (ADT-1), AGM, Financial Statements (AOC-4), Annual Returns (MGT-7), KYC of Directors (DIR-3 KYC), and others like DPT-3 for deposits."
        },
        {
            question: "What is the penalty for not filing MCA annual returns?",
            answer: "Penalties can be significant, including fines for the company and directors, and potentially disqualification of directors or striking off the company name."
        },
        {
            question: "Is Director KYC mandatory every year?",
            answer: "Yes, every director with a DIN must file DIR-3 KYC annually by September 30th."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="MCA"
                heroTitleSuffix="Compliance"
                heroSubtitle="Ministry of Corporate Affairs Filing Services"
                heroDescription="Ensure seamless MCA compliance with Corpbiz expert support. We cover applicable acts, rules, guidelines, audits, and timely annual return filings in India."
                whatsIncludedList={[
                    "Annual Return Filing (MGT-7)",
                    "Financial Statement Filing (AOC-4)",
                    "Director KYC (DIR-3 KYC)",
                    "Auditor Appointment (ADT-1)",
                    "Commencement of Business (INC-20A)",
                    "Secretarial Compliance"
                ]}
                stats={[
                    { count: "25k+", label: "Compliance Cases", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <Globe size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <Award size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "MCA Compliance - Overview",
                    imageUrl: "/ISO-overview.jpg",
                    description: [
                        "MCA compliance refers to adherence to laws and regulations set forth by the Ministry of Corporate Affairs (MCA) in India. It ensures transparency, accountability, and good governance for business entities.",
                        "MCA compliance helps companies build trust with stakeholders and attract investors. It involves filing returns, maintaining records, and adhering to specific thresholds outlined in the Companies Act, 2013.",
                        "The MCA regulates corporate entities to protect interests and maintain fair business practices. Regular compliance prevents penalties and ensures smooth operations."
                    ]
                }}
                advantages={{
                    title: "Importance of Compliance",
                    subtitle: "Why is MCA Annual Compliance Crucial?",
                    list: [
                        { title: "Legal Protection", desc: "Avoids penalties, fines, and legal actions." },
                        { title: "Operational Efficiency", desc: "Ensures good governance and reduced risk." },
                        { title: "Reputation & Trust", desc: "Builds credibility with customers, employees, and investors." },
                        { title: "Financial Stability", desc: "Avoids penalties and promotes long-term stability." },
                        { title: "Access to Funds", desc: "Makes the business more attractive to banks and investors." },
                        { title: "M&A Facilitation", desc: "Simplifies due diligence during mergers and acquisitions." }
                    ]
                }}
                eligibility={{
                    title: "Key Compliances",
                    subtitle: "Essential Forms & Filings",
                    list: [
                        { title: "Form AOC-4", desc: "Filing of Financial Statements within 30 days of AGM." },
                        { title: "Form MGT-7", desc: "Filing of Annual Return within 60 days of AGM." },
                        { title: "Form ADT-1", desc: "Appointment of Auditor within 15 days of AGM." },
                        { title: "Form DIR-3 KYC", desc: "Annual KYC for Directors by September 30th." },
                        { title: "Form DPT-3", desc: "Return of Deposits filed annually by June 30th." },
                        { title: "Form INC-20A", desc: "Declaration for Commencement of Business." }
                    ]
                }}
                process={{
                    title: "Compliance Checklist",
                    subtitle: "For Private Limited Companies",
                    steps: [
                        { step: "01", title: "Commencement", desc: "File Form INC 20A before initiating business activities." },
                        { step: "02", title: "Auditor", desc: "Appoint Auditor (ADT-1) within 30 days of incorporation." },
                        { step: "03", title: "AGM", desc: "Conduct Annual General Meeting within 9 months of financial year end (first year) or 6 months (subsequent years)." },
                        { step: "04", title: "Filings", desc: "File AOC-4 (Financials) and MGT-7 (Annual Return) after AGM." },
                        { step: "05", title: "Director KYC", desc: "File DIR-3 KYC annually." },
                        { step: "06", title: "Statutory Registers", desc: "Maintain minutes of meetings, books of accounts, and other registers." }
                    ]
                }}
                whyUs={{
                    title: "Why Corpbiz?",
                    subtitle: "Your Partner in MCA Compliance",
                    list: [
                        { title: "25000+ Cases", desc: "Proven track record in handling MCA compliance cases." },
                        { title: "Expert Solutions", desc: "Customized compliance solutions tailored to your business." },
                        { title: "Real-Time Tracking", desc: "Keep track of your compliance status with our tools." },
                        { title: "Dedicated Manager", desc: "A dedicated compliance manager to handle your account." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default MCACompliance;
