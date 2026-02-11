import React from "react";
import { Users, Briefcase, Building2, Globe, FileText, CheckCircle } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * FCRARegistration Page matching Vyombiz layout styles
 * URL: https://VyomBiz.io/fcra-registration
 */

const FCRARegistration = () => {

    const faqs = [
        {
            question: "What is the full form of FCRA?",
            answer: "FCRA stands for Foreign Contribution Regulation Act. It regulates the acceptance and utilization of foreign contributions by certain individuals or associations."
        },
        {
            question: "Who is eligible for FCRA Registration?",
            answer: "NGOs, Societies, Section 8 Companies, and Trusts that have been in existence for at least 3 years and have spent a minimum of Rs. 15 Lakhs on core activities are eligible."
        },
        {
            question: "Is FCRA registration mandatory for receiving foreign funds?",
            answer: "Yes, any charitable organization in India wishing to receive foreign contributions or donations must obtain FCRA registration."
        },
        {
            question: "What is the validity of FCRA Registration?",
            answer: "FCRA registration is valid for a period of 5 years and must be renewed within 6 months before the expiry date."
        },
        {
            question: "Can I apply for FCRA immediately after registering my NGO?",
            answer: "No, typically you need a 3-year track record. However, for specific projects, you can apply for 'Prior Permission' without the 3-year requirement."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FCRA Registration Services"
                heroTitleSuffix="for NGOs"
                heroSubtitle="Legally Accept Foreign Funds with Expert Support"
                heroDescription="Get FCRA registration with Vyombiz to legally accept foreign funds and ensure compliance with all government regulations for your NGO. We assist with eligibility, documentation, and the complete application process."
                whatsIncludedList={[
                    "End-to-End Assistance for FCRA Registration",
                    "Guidance on Prior Permission & Permanent Registration",
                    "Eligibility Check & Documentation Support",
                    "FCRA Renewal & Compliance Services"
                ]}
                stats={[
                    { count: "5000+", label: "FCRA Certifications", icon: <FileText size={20} /> },
                    { count: "1200Cr+", label: "Donations Secured", icon: <Globe size={20} /> },
                    { count: "100%", label: "Compliance Rate", icon: <CheckCircle size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Global Impact",
                    title: "FCRA Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "In India, any organization that wishes to accept foreign contributions must obtain Foreign Contribution Regulation Act (FCRA) Registration from the Central Government.",
                        "FCRA registration is essential for organizations engaged in specific cultural, economic, educational, religious, or social programs to legally receive funds from foreign sources. It ensures accountability and transparency in using foreign funds, protecting the organization and its donors under Indian law.",
                        <strong>What is FCRA?</strong>,
                        "FCRA stands for the Foreign Contribution Regulation Act, enacted to regulate foreign donations to individuals and organizations, ensuring they operate in alignment with national interests.",
                        "FCRA account registration ensures that the acceptance and use of foreign contributions do not harm national interests and are managed with transparency and accountability."
                    ],
                    whyIdealTitle: "Types of FCRA Registration",
                    whyIdealList: [
                        { title: "Prior Permission", desc: "For newly registered NGOs willing to receive specific amounts from specific donors for specific projects." },
                        { title: "Permanent Registration", desc: "For NGOs with a 3-year track record and significant social spending, valid for 5 years." }
                    ]
                }}
                advantages={{
                    title: "Benefits of FCRA Registration",
                    subtitle: "Unlock global funding opportunities for your NGO.",
                    list: [
                        { title: "Global Credibility", desc: "Allows non-profit organizations to accept foreign donations legally, boosting international credibility." },
                        { title: "Access to Foreign Funds", desc: "Organizations can receive foreign funds smoothly to support their social missions." },
                        { title: "Investor Confidence", desc: "Reassures both domestic and foreign investors about the organization’s compliance and commitment." },
                        { title: "Tax Benefits", desc: "Eligible organizations gain tax exemptions under the Income Tax Act when combined with 12A & 80G." },
                        { title: "Enhanced Sustainability", desc: "Access to foreign funds increases the organization’s stability and ability to pursue long-term activities." },
                        { title: "Legal Protection", desc: "Ensures the organization operates within the legal framework, avoiding penalties and legal issues." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Requirements to apply for FCRA Registration.",
                    list: [
                        { title: "Registered Entity", desc: "Must be registered under Societies Registration Act, Indian Trusts Act, or Companies Act (Section 8)." },
                        { title: "FCRA Bank Account", desc: "Must have an FCRA account opened with SBI, New Delhi Main Branch." },
                        { title: "Track Record", desc: "Must have a minimum of 3 years of proven activities benefiting society." },
                        { title: "Financial Criteria", desc: "A minimum of Rs. 15 lakhs must have been spent on core activities over the past 3 years." },
                        { title: "12A Registration", desc: "Shall hold a valid 12A registration certificate under the Income Tax Act." },
                        { title: "Clean Record", desc: "Key functionaries must not have any record of prosecution or conviction." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents for FCRA Registration application.",
                    list: [
                        "Registration Certificate of Association",
                        "Memorandum of Association (MoA) / Trust Deed",
                        "Activity Report for the last 3 years",
                        "Audited Statement of Accounts for the last 3 years",
                        "Affidavit of each key functionary",
                        "Details of Key Functionaries (Aadhaar, PAN)",
                        "Chief Functionary Signature & Seal of Association",
                        "NITI Ayog Registration Certificate (Darpan ID)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Application Process",
                    subtitle: "Step-by-step guide to applying for FCRA Registration.",
                    steps: [
                        { step: "01", title: "Access Portal", desc: "Visit the Ministry of Home Affairs FCRA Online Forms portal." },
                        { step: "02", title: "Form Selection", desc: "Choose Form FC-3A for fresh registration or FC-3B for prior permission." },
                        { step: "03", title: "Fill Application", desc: "Complete the online application form with organization and executive details." },
                        { step: "04", title: "Upload Documents", desc: "Upload all required documents and affidavit in the prescribed format." },
                        { step: "05", title: "Fee Payment", desc: "Pay the requisite government fee online." },
                        { step: "06", title: "Submission", desc: "Submit the application and track status for approval." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "We make the path to FCRA registration easy and efficient.",
                    list: [
                        { title: "Network of Professionals", desc: "Blessed with a network of experienced CAs, Lawyers, and Consultants." },
                        { title: "High Success Rate", desc: "Completed over 5000 successful FCRA certifications." },
                        { title: "Fundraising Support", desc: "Helped secure foreign donations worth Rs 1200 Crore+." },
                        { title: "Cost Effective", desc: "Saved lakhs of rupees for socialpreneurs with our efficient processes." },
                        { title: "Dedicated Manager", desc: "Personalized guidance to make the process straightforward." },
                        { title: "End-to-End Support", desc: "Ongoing assistance from initial consultation to post-registration." },
                        { title: "Transparency", desc: "We help you maintain the transparency factor required for FCRA." },
                        { title: "Compliance Assurance", desc: "Ensure your NGO remains compliant with all FCRA regulations." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about FCRA Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default FCRARegistration;
