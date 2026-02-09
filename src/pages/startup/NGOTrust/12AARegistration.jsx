import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * 12AARegistration Page matching Vyombiz layout styles
 * URL: https://corpbiz.io/12aa-registration
 */

const Registration12AA = () => {

    const faqs = [
        {
            question: "How do I get a 12AA certificate?",
            answer: "To get a 12AA certificate, you need to prepare documents like Trust Deed and PAN card, submit Form 10A online, undergo verification and potential field inspection by the Income Tax officer, and upon approval, receive the registration certificate."
        },
        {
            question: "What are the records needed during Section 12AA registration?",
            answer: "Key records include Trust Deed/MoA, PAN Card, Financial Statements, Activity Reports, Board Member Details, Bank Account Statements, Donation records, and Annual Reports."
        },
        {
            question: "Is 12AA registration mandatory for NGOs?",
            answer: "Yes, obtaining 12AA registration is mandatory for NGOs, Trusts, and Societies to avail tax exemptions on their surplus income under the Income Tax Act."
        },
        {
            question: "Can I receive foreign funds with 12AA registration?",
            answer: "12AA registration is a prerequisite, but to receive foreign funds, you primarily need FCRA registration. However, 12AA is essential for tax exemption on those funds."
        },
        {
            question: "What happens if 12AA registration is cancelled?",
            answer: "If 12AA registration is cancelled, the NGO loses its tax-exempt status, and its income becomes taxable at maximum marginal rates."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="12AA Registration"
                heroTitleSuffix="Online in India"
                heroSubtitle="Secure Tax Exemptions for Your NGO"
                heroDescription="Get 12AA Registration online to secure tax exemptions and enhance your NGO’s credibility with Vyombiz expert support. We assist with documentation, application filing, and compliance for quick approval."
                whatsIncludedList={[
                    "Expert Assistance for Form 10A Filing",
                    "Guidance on Documentation & Compliance",
                    "End-to-End Support till Certificate Issuance",
                    "Post-Registration Compliance Advisory"
                ]}
                stats={[
                    { count: "10,000+", label: "NGOs Assisted", icon: <Users size={20} /> },
                    { count: "15+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "Rs 50Cr+", label: "Tax Saved", icon: <TrendingUp size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Tax Exemption",
                    title: "12AA Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "Section 12AA of the Income Tax Act, 1961 details the procedure for registering a trust, society, or non-profit organization. 12AA Registration is mandatory for such organizations to be eligible for tax exemptions on surplus income.",
                        "Non-profit organizations play a pivotal role in societal development. The 12AA registration process helps regulate their operations within legal frameworks, ensuring continued positive impact and transparency.",
                        <strong>Why 12AA is important?</strong>,
                        "Without 12AA registration, an NGO's income is treated as normal business income and is fully taxable. Registration under this section ensures that the income applied for charitable or religious purposes is exempt from tax."
                    ],
                    whyIdealTitle: "Charitable Purpose defined",
                    whyIdealList: [
                        { title: "Relief of Poor", desc: "Providing assistance, food, and shelter to the underprivileged." },
                        { title: "Education", desc: "Running schools, colleges, or vocational training institutes." },
                        { title: "Medical Relief", desc: "Operating hospitals, clinics, and providing medical aid." },
                        { title: "Environment", desc: "Preservation of environment, watersheds, forests, and wildlife." },
                        { title: "Yoga", desc: "Promotion of Yoga as a means of physical and mental well-being." },
                        { title: "General Public Utility", desc: "Any other object of general public utility not involving business activities." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Section 12AA Registration",
                    subtitle: "Empowering NGOs with financial and operational benefits.",
                    list: [
                        { title: "Tax Exemptions", desc: "Exemption on income generated from charitable and religious activities, saving substantial funds." },
                        { title: "Encouraging Donations", desc: "Donors are more likely to contribute to registered NGOs as it often pairs with 80G tax benefits for them." },
                        { title: "Foreign Funds Eligibility", desc: "Prerequisite for FCRA registration to receive foreign contributions legally." },
                        { title: "Transparency & Credibility", desc: "Enhances credibility as the organization undergoes rigorous verification by the Income Tax Department." },
                        { title: "Qualified Staff", desc: "Tax savings allow NGOs to offer better salaries and hire qualified professionals." },
                        { title: "Government Grants", desc: "Registered NGOs are preferred for government funding, grants, and schemes." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who can apply for 12AA Registration?",
                    list: [
                        { title: "Charitable Nature", desc: "The organization must function for a charitable or religious purpose without profit motive." },
                        { title: "Legal Structure", desc: "Must be registered as a Trust, Society, or Section 8 Company." },
                        { title: "Proper Documentation", desc: "Must maintain proper books of accounts and audit reports." },
                        { title: "Spending Requirement", desc: "Income must be applied for charitable purposes in India (at least 85%)." },
                        { title: "No Private Benefit", desc: "Funds or assets should not benefit the trustees or members personally." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Checklist for 12AA Registration Application (Form 10A).",
                    list: [
                        "Trust Deed / Memorandum of Association (MoA)",
                        "Articles of Association (AoA) for Section 8 Company",
                        "Registration Certificate of the NGO",
                        "PAN Card of the NGO",
                        "Address Proof (Utility Bill/Rent Agreement/NOC)",
                        "Income & Expenditure Statements (Last 3 Years)",
                        "Balance Sheet (Last 3 Years)",
                        "List of Trustees/Members with ID Proofs",
                        "Note on Activities of the Trust/NGO"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to obtaining 12AA Certificate.",
                    steps: [
                        { step: "01", title: "Document Prep", desc: "Prepare Trust Deed, PAN, financial statements, and other KYC docs." },
                        { step: "02", title: "Form 10A Filing", desc: "Submit Form 10A online to the Commissioner of Income Tax." },
                        { step: "03", title: "Verification", desc: "IT officers scrutinize the application and may ask for clarifications." },
                        { step: "04", title: "Field Inspection", desc: "Officer may visit the NGO premises to verify existence and activities." },
                        { step: "05", title: "Approval", desc: "Commissioner approves and issues the 12AA Registration Certificate." },
                        { step: "06", title: "Compliance", desc: "Maintain accounts and file annual returns to retain the status." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "Your trusted partner for NGO compliance.",
                    list: [
                        { title: "Documentation Support", desc: "We assist in preparing and organizing all required documents." },
                        { title: "Expert Consultation", desc: "Professional advice on best practices and legal requirements." },
                        { title: "Hassle-free Filing", desc: "We handle the end-to-end application process for you." },
                        { title: "Post-Reg Support", desc: "Continuous guidance on compliance and renewals." },
                        { title: "Cost-effective", desc: "Pocket-friendly packages saving you money and effort." },
                        { title: "Holistic Solutions", desc: "One-stop shop for 12A, 80G, FCRA, and CSR registrations." },
                        { title: "Experienced Team", desc: "15+ years of industry experience in NGO sector." },
                        { title: "Wide Network", desc: "Access to insights from working with thousands of NGOs." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about 12AA Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default Registration12AA;
