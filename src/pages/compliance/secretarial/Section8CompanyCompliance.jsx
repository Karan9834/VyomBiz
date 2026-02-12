import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Section 8 Company Compliance Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section (Left Content, Right Form)
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Benefits Section
 * 5. Eligibility/Checklist
 * 6. Documents Required
 * 7. Registration Process
 * 8. Why Choose Us
 * 9. FAQ
 */

const Section8CompanyCompliance = () => {

    const faqs = [
        {
            question: "Can Section 8 Company be incorporated as Private or Public?",
            answer: "Yes, a Section 8 Company can be incorporated as either a Private Limited or Public Limited company. However, One Person Company (OPC) cannot be incorporated as a Section 8 Company."
        },
        {
            question: "Are Secretarial Standards applicable to Section 8 Companies?",
            answer: "No, Section 8 Companies are generally exempt from Secretarial Standards, but adhering to them is recommended for good corporate governance."
        },
        {
            question: "What is the penalty for not holding an AGM?",
            answer: "Failure to conduct an AGM is punishable with a fine of up to ₹1 Lakh. Failure to present the AGM report attracts a similar fine."
        },
        {
            question: "What if I don't file the Annual Return (MGT-7)?",
            answer: "Failure to file Annual Returns is punishable with a fine starting from ₹50,000, which may extend up to ₹5 Lakh."
        },
        {
            question: "Can a foreign company be registered as a Section 8 Company?",
            answer: "A foreign company cannot directly be a Section 8 company, but it can promote and register a Section 8 Company in India as a distinct entity, subject to FEMA compliance."
        },
        {
            question: "Can Section 8 Companies receive foreign contributions?",
            answer: "Yes, but they must strictly comply with the Foreign Contribution Regulation Act (FCRA), 2010, in addition to the Companies Act."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Section 8 Company "
                heroTitleSuffix="Compliance"
                heroSubtitle="Stay Compliant, Stay Protected"
                heroDescription="Ensure your Non-Profit Organization (NPO) remains legally compliant. From Annual Filing to Event-based compliances, we parse the complexities of the Companies Act, 2013 for you."
                whatsIncludedList={[
                    "Form AOC-4 (Financial Statements)",
                    "Form MGT-7 (Annual Return)",
                    "Income Tax Return Filing",
                    "Secretarial Services"
                ]}
                stats={[
                    { count: "5000+", label: "NGOs Served", icon: <Users size={20} /> },
                    { count: "100%", label: "Compliance Rate", icon: <Briefcase size={20} /> },
                    { count: "Expert", label: "Legal Support", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Companies Act, 2013",
                    title: "Section 8 Compliance –",
                    highlightTitle: "Overview",
                    description: [
                        "Section 8 Companies are established for charitable purposes like art, science, sports, education, etc. While they enjoy exemptions, strict adherence to annual compliances is mandatory to maintain their special status.",
                        "Unlike regular companies, they do not pay dividends to members. All profits must be utilized for promoting the company's objectives.",
                        "Adhering to compliances ensures credibility, legal protection, and avoids heavy penalties."
                    ],
                    whyIdealTitle: "Key Compliances",
                    whyIdealList: [
                        { title: "Auditor Appointment", desc: "Mandatory appointment of a statutory auditor for financial checks." },
                        { title: "Board Meetings", desc: "Must conduct at least two board meetings annually." },
                        { title: "Annual General Meeting (AGM)", desc: "Must be held annually on or before 30th September." },
                        { title: "Financial Statements", desc: "Maintenance of Trading Account, P&L, and Balance Sheet." },
                        { title: "Income Tax", desc: "Filing of ITR by 30th September is compulsory." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Compliance",
                    subtitle: "Why adhere to regulations?",
                    list: [
                        { title: "Credibility", desc: "Enhances trust among donors, public, and stakeholders." },
                        { title: "Legal Protection", desc: "Protects the company and directors from legal actions." },
                        { title: "Avoid Penalties", desc: "Saves the organization from heavy fines and prosecution." },
                        { title: "Tax Exemptions", desc: "Essential for maintaining 12A and 80G tax benefits." },
                        { title: "Financial Discipline", desc: "Ensures proper financial management and transparency." },
                        { title: "Funding Opportunities", desc: "Compliant NGOs have better access to CSR funds and grants." }
                    ]
                }}
                eligibility={{
                    title: "Penalties for Non-Compliance",
                    subtitle: "Consequences to Avoid",
                    list: [
                        { title: "License Revocation", desc: "Central Govt may revoke the Section 8 license." },
                        { title: "Heavy Fines", desc: "Fines ranging from ₹10 Lakh to ₹1 Crore for the company." },
                        { title: "Director Liability", desc: "Directors may face fines up to ₹25 Lakh and imprisonment." },
                        { title: "Fraud Charges", desc: "Section 447 (Fraud) charges if operations are found fraudulent." },
                        { title: "Defaulting Officers", desc: "Every officer in default is liable for punishment." },
                        { title: "Grant Ineligibility", desc: "Inability to receive government grants or foreign funds." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for Annual Filing.",
                    list: [
                        "Memorandum of Association (MOA)",
                        "Articles of Association (AOA)",
                        "Certificate of Incorporation",
                        "Audited Financial Statements",
                        "Director's Report",
                        "Digital Signature Certificate (DSC) of Directors",
                        "Notice of AGM",
                        "Minutes of Board Meetings & AGM"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Compliance Checklist",
                    subtitle: "Annual Filing Requirements",
                    steps: [
                        { step: "01", title: "Book-keeping", desc: "Maintain books of accounts and registers throughout the year." },
                        { step: "02", title: "Audit", desc: "Get accounts audited by a Chartered Accountant." },
                        { step: "03", title: "Board Meeting", desc: "Conduct Board Meetings as per schedule." },
                        { step: "04", title: "AGM", desc: "Hold Annual General Meeting by 30th September." },
                        { step: "05", title: "File AOC-4", desc: "File Financial Statements (AOC-4) within 30 days of AGM." },
                        { step: "06", title: "File MGT-7", desc: "File Annual Return (MGT-7) within 60 days of AGM." },
                        { step: "07", title: "ITR Filing", desc: "File Income Tax Return by 30th September." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your Compliance Partner",
                    list: [
                        { title: "Dedicated Team", desc: "Experts specializing in NGO and Section 8 compliance." },
                        { title: "Timely Filing", desc: "We ensure you never miss a deadline." },
                        { title: "Comprehensive Support", desc: "From audit coordination to ROC filing." },
                        { title: "Event-Based Support", desc: "Assistance with share transfer, director changes, etc." },
                        { title: "Cost Effective", desc: "Affordable packages tailored for non-profits." },
                        { title: "Advisory Services", desc: "Expert advice on FCRA and CSR compliance." },
                        { title: "Digital Dashboard", desc: "Track your compliance status in real-time." },
                        { title: "Error-Free", desc: "Meticulous verification of all documents." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Section 8 Compliance"
                faqs={faqs}
            />

        </div>
    );
};

export default Section8CompanyCompliance;
