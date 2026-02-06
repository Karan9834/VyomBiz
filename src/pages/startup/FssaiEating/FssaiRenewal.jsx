import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Clock,
    AlertCircle
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FssaiRenewal = () => {
    const faqs = [
        {
            question: "When should I apply for FSSAI license renewal?",
            answer: "FBOs must apply for FSSAI license renewal at least 30 days before the expiry date of the current registration or license to avoid late fees."
        },
        {
            question: "What is the penalty for late FSSAI renewal?",
            answer: "If the renewal application is not filed on time, a penalty of ₹100 per day is charged. If it's not renewed even after expiry, the license is considered void, and the business must apply for a fresh license."
        },
        {
            question: "Can I renew my FSSAI license online?",
            answer: "Yes, the entire renewal process is now online through the FoSCoS portal. You can log in, upload documents, and pay the fees electronically."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FSSAI License"
                heroTitleSuffix="Renewal"
                heroSubtitle="Ensure Uninterrupted Food Business Operations"
                heroDescription="Don't let an expired license halt your business. Timely FSSAI renewal is a legal requirement that keeps your operations compliant and builds customer trust in your commitment to quality."
                whatsIncludedList={[
                    "Renewal Eligibility Check",
                    "Document Verification & Preparation",
                    "FoSCoS Portal Online Filing",
                    "Penalty & Hassle-Free Process",
                    "Timely Renewal Reminders",
                    "Expert Legal Consultation"
                ]}
                stats={[
                    { count: "25K+", label: "Renewals Done", icon: <Clock size={20} /> },
                    { count: "₹100/day", label: "Late Fine", icon: <AlertCircle size={20} /> },
                    { count: "100%", label: "Compliance", icon: <ShieldCheck size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={{
                    badge: "Time-Sensitive",
                    title: "FSSAI Renewal Guide –",
                    highlightTitle: "Business Continuity",
                    description: [
                        "Running a food business in India requires active compliance. Every Food Business Operator (FBO) must renew their FSSAI license within its validity period, which typically ranges from 1 to 5 years.",
                        "Operating with an expired license can damage your business reputation and lead to severe legal action. The Food Safety Compliance System (FoSCoS) allows businesses to apply for renewals seamlessly online.",
                        <strong>Consequences of Non-Renewal:</strong>,
                        "If not filed on time, FBOs are charged a penalty of ₹100 per day. Once the license expiry date passes, the business is legally unauthorized to operate until a new license is obtained."
                    ],
                    whyIdealTitle: "Renewal Benefits",
                    whyIdealList: [
                        { title: "Legal Safety", desc: "Avoid daily penalties and potential suspension of business operations." },
                        { title: "Consumer Confidence", desc: "Show customers your ongoing commitment to food safety standards." },
                        { title: "Updated Standards", desc: "Get access to the latest food safety regulations and guidelines." }
                    ]
                }}
                advantages={{
                    title: "Strategic Advantages",
                    subtitle: "Why prioritize timely FSSAI license renewal?",
                    list: [
                        { title: "Avoid Late Penalties", desc: "Save on the ₹100/day fine by filing at least 30 days before expiry." },
                        { title: "Build Brand Trust", desc: "A valid, updated certificate is a mark of reliability for your consumers." },
                        { title: "Seamless Operations", desc: "Ensure no hurdles in supply chains, exports, or retail partnerships." },
                        { title: "Global Alignment", desc: "Stay aligned with international safety standards for food quality." },
                        { title: "Risk Mitigation", desc: "Reduce safety hazards and risks through regular compliance checks." },
                        { title: "Expert Support", desc: "Navigate the complex documentation with ease through our specialists." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who needs to renew their FSSAI license?",
                    list: [
                        { title: "Existing License Holders", desc: "Any FBO whose license is within 120 days of expiry." },
                        { title: "Continuing Businesses", desc: "Food units planning to continue operations beyond current validity." },
                        { title: "Compliance Seekers", desc: "Businesses wanting to maintain their 'Grade A' food safety status." },
                        { title: "Market Participants", desc: "Retailers and distributors requiring active licenses for trade." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for a successful renewal application.",
                    list: [
                        "Current FSSAI License/Registration Certificate",
                        "Identity Proof of the Proprietor/Partners",
                        "Updated FSMS Plan or Certification",
                        "Water Test Report (if mandatory for unit type)",
                        "Signed Form B (for State & Central)",
                        "List of updated food categories",
                        "NOC from landlord (if lease renewed)",
                        "Latest electricity or water bill"
                    ]
                }}
                process={{
                    title: "The Online Renewal Path",
                    subtitle: "Step-by-step FSSAI renewal process on FoSCoS.",
                    steps: [
                        { step: "01", title: "Portal Login", desc: "Access the official FSSAI/FoSCoS website using your credentials." },
                        { step: "02", title: "Form Filing", desc: "Select 'Renewal' and fill out the application form with updated details." },
                        { step: "03", title: "Document Upload", desc: "Upload and self-attest all necessary documents as per your license type." },
                        { step: "04", title: "Fee Payment", desc: "Pay the applicable renewal fees based on the selected validity period (1-5 years)." },
                        { step: "05", title: "Approval", desc: "Undergo inspection (if required) and receive your renewed FSSAI certificate." }
                    ]
                }}
                features={{
                    title: "Registration Features",
                    subtitle: "What's included in our renewal service?",
                    list: [
                        { title: "Automated Reminders", desc: "Get notified 120 days before your license expires to avoid any late fees." },
                        { title: "Multi-Year Options", desc: "Choose to renew for up to 5 years in a single application for peace of mind." },
                        { title: "Modification Support", desc: "Easily update product lists or business details during the renewal process." },
                        { title: "Digital Certificate", desc: "Receive your renewed QR-coded license directly in your registered email." }
                    ]
                }}
                postCompliance={{
                    title: "Post Compliance",
                    subtitle: "Maintain compliance after renewal.",
                    list: [
                        "Update FSSAI logo and number on labels (if changed)",
                        "Keep a copy of the renewed license at the premises",
                        "File annual returns by the 31st of May every year",
                        "Conduct regular food safety training for staff",
                        "Ensure water and raw material testing as per norms",
                        "Adhere to the renewed FSMS plan strictly"
                    ]
                }}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiRenewal;
