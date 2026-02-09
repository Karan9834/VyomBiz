import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    Shield,
    FileText,
    TrendingUp,
    CheckSquare
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "./ISODetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ISORegistration = () => {
    const faqs = [
        {
            question: "What is ISO Certification?",
            answer: "ISO certification is an internationally recognized seal of approval that an organization runs to one of the international standards developed and published by the International Organization for Standardization (ISO)."
        },
        {
            question: "How long is the ISO certificate valid?",
            answer: "An ISO certification is generally valid for a period of 3 years, subject to annual surveillance audits to ensure the management system is still being maintained."
        },
        {
            question: "Is ISO certification mandatory in India?",
            answer: "While not mandatory for all businesses, it is often required for government tenders, international trade, and by large corporate clients as a prerequisite for doing business."
        },
        {
            question: "How much time does it take to get ISO certified?",
            answer: "The timeline depends on the complexity of the organization and the specific ISO standard, but it typically takes between 4 to 8 weeks."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO"
                heroTitleSuffix="Certification"
                heroSubtitle="International Standards for Quality, Safety & Efficiency"
                heroDescription="Elevate your business credibility with globally recognized ISO Certification. We help you implement standardized processes to ensure consistent quality, operational excellence, and a competitive edge in the global market."
                whatsIncludedList={[
                    "ISO Standard Selection Advisory",
                    "GAP Analysis & Readiness Review",
                    "Management System Documentation",
                    "Internal Audit Training",
                    "Certification Audit Coordination",
                    "Annual Surveillance Support"
                ]}
                stats={[
                    { count: "99%", label: "Success Rate", icon: <CheckCircle size={20} /> },
                    { count: "Global", label: "Recognition", icon: <Globe size={20} /> },
                    { count: "Expert", label: "Guidance", icon: <Award size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "ISO Certification - An Overview",
                    imageUrl: "/ISO-overview.jpg",
                    description: [
                        "ISO certification is an internationally recognized certification that establishes globally accepted standards for organizations, thereby guiding them toward innovation, operational efficiency, and sustainable business growth.",
                        "The grant of an ISO certificate registration further helps organizations to implement structured processes that ensure quality, safety, efficiency, and consistency across products and services while meeting customer expectations and regulatory requirements.",
                        "Obtaining an ISO certification simply demonstrates that a company’s management system complies with relevant ISO standards, adding credibility and trust among clients, stakeholders, and regulatory authorities. Partner with our ISO certification consultants to streamline ISO certification and ensure a smooth, timely, and hassle-free journey in India."
                    ]
                }}
                advantages={{
                    title: "Benefits of ISO",
                    subtitle: "What are the Benefits of Obtaining ISO Certification Registration?",
                    list: [
                        { title: "Enhanced Business Efficiency", desc: "ISO certification registration helps organizations streamline internal processes by adopting standardized procedures." },
                        { title: "Improves Marketability", desc: "ISO registration ensures the implementation of customer-centric processes and high-quality delivery." },
                        { title: "Global Credibility", desc: "ISO certification registration enables businesses to gain acceptance and enhancing global credibility." },
                        { title: "Improved Product Quality", desc: "ISO registration helps minimize defects and reduce rework, ensuring consistent product quality." },
                        { title: "Access to Government Contracts", desc: "ISO certification helps improve tender eligibility and increases bidding success rate." },
                        { title: "Global Business Expansion", desc: "ISO certification makes it easier for businesses to enter international markets." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who Can Apply for ISO Registration in India?",
                    list: [
                        { title: "Proprietorship & Partnerships", desc: "Small business firms looking for standardization." },
                        { title: "LLPs and LLCs", desc: "Limited liability entities aiming for global compliance." },
                        { title: "MSMEs and Startups", desc: "Growth focused entities building a foundation of quality." },
                        { title: "Manufacturing Units", desc: "Factories focused on safety and quality standards." },
                        { title: "Service Providers", desc: "Firms in IT, hospitality, consulting and other service sectors." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "What are the Documents Required to Obtain an ISO Certificate Online?",
                    imageUrl: "/ISO-document-required.jpg",
                    list: [
                        "Identity and address proof of the applicant",
                        "PAN Card and Voter ID proof of all the directors",
                        "Passport-sized photographs of the applicant",
                        "Utility bill or electricity bill of office",
                        "Copy of the sale deed in case of owned property",
                        "Details of the latest bank statement",
                        "Certificate of incorporation",
                        "Memorandum and Articles of Association (M&AoA)"
                    ]
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step process for obtaining an ISO certification registration in India.",
                    steps: [
                        { step: "01", title: "File Online Application", desc: "Providing basic business details to an accredited ISO certification body." },
                        { step: "02", title: "Submit Required Documentation", desc: "Organization submits documentation required under the selected ISO standard." },
                        { step: "03", title: "Conduct GAP Analysis", desc: "Review to assess the existing areas of non-compliance with ISO requirements." },
                        { step: "04", title: "Prepare an Action Plan", desc: "Implementing corrective actions to ensure alignment with internal processes." },
                        { step: "05", title: "Conduct on-Premises Audit", desc: "Verify implementation, compliance, and effectiveness of the system." },
                        { step: "06", title: "Obtain ISO Certification", desc: "Granted after successful completion of the audit and closure of non-conformities." }
                    ]
                }}
                whyUs={{
                    title: "Why Us",
                    subtitle: "How Corpbiz’s ISO Certification Consultants help you get ISO Registration Done?",
                    list: [
                        { title: "Pre-Certification Consultation", desc: "Expert guidance on selecting the right ISO standard tailored to your industry." },
                        { title: "GAP Analysis & Readiness", desc: "Detailed GAP analysis and evaluation of existing processes requiring compliance." },
                        { title: "Documentation Support", desc: "Assisting with preparing, reviewing, and filing all mandatory ISO documentation." },
                        { title: "Internal Audit & Review", desc: "Helping conduct internal audit and management review to ensure audit readiness." },
                        { title: "Certification Coordination", desc: "Coordinating with accredited bodies for stage 1 and stage 2 audits." },
                        { title: "ISO Certificate Renewal", desc: "Managing the recertification and renewal process at the end of validity." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default ISORegistration;
