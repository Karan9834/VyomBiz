import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * SPICe+ Form (MCA) Page matching Vyombiz layout styles
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

const SPICEForm = () => {

    const faqs = [
        {
            question: "What services are offered in the SPICe+ Form?",
            answer: "Key services include Name Reservation, Company Incorporation, DIN Allotment, PAN & TAN Filing, EPFO & ESIC Registration, Professional Tax Registration, Bank Account Opening, and GSTIN Allotment."
        },
        {
            question: "What are Parts A and B of SPICe+?",
            answer: "Part A (RUN) is for limiting Name Reservation (valid for 20 days), while Part B handles Incorporation and other integrated services like DIN, PAN, TAN, etc."
        },
        {
            question: "Can I apply for GSTIN through SPICe+?",
            answer: "Yes, you can apply for GSTIN allotment simultaneously with company incorporation using the SPICe+ Form."
        },
        {
            question: "What is the validity of a reserved name?",
            answer: "A company name reserved through SPICe+ Part A is valid for 20 days from the date of approval."
        },
        {
            question: "What documents are mandatory?",
            answer: "Mandatory documents include eMoA, eAoA, Declaration by Directors/Subscribers, Proof of Office Address, Utility Bills, and NOC from the owner."
        },
        {
            question: "Is digital signature mandatory?",
            answer: "Yes, the SPICe+ Form and its attachments must be digitally signed by the subscribers and directors using a valid Digital Signature Certificate (DSC)."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="SPICe+ Form "
                heroTitleSuffix="(MCA)"
                heroSubtitle="Simplified Company Incorporation Services"
                heroDescription="File SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) to incorporate your company and obtain 10+ services including DIN, PAN, TAN, GST, and EPFO in a single application."
                whatsIncludedList={[
                    "Company Name Reservation",
                    "DIN Allotment",
                    "PAN & TAN Issuance",
                    "GST & EPFO Registration"
                ]}
                stats={[
                    { count: "10,000+", label: "Companies Formed", icon: <Users size={20} /> },
                    { count: "10+", label: "Services Integrated", icon: <Briefcase size={20} /> },
                    { count: "Fast", label: "Processing Speed", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Ease of Doing Business",
                    title: "SPICe+ Form –",
                    highlightTitle: "Overview",
                    description: [
                        "SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) is an integrated web form offering multiple services like name reservation, incorporation, and various registrations in one go.",
                        "It is part of the Government of India's Ease of Doing Business (EODB) initiative, replacing the old SPICe form.",
                        "The form is divided into Part A (for Name Reservation) and Part B (for Incorporation and other services), streamlining the entire process."
                    ],
                    whyIdealTitle: "Services in SPICe+",
                    whyIdealList: [
                        { title: "Part A: Name Reservation", desc: "Reserve your unique company name for 20 days." },
                        { title: "Part B: Incorporation", desc: "File for incorporation along with DIN, PAN, TAN, etc." },
                        { title: "Tax Registrations", desc: "Apply for GSTIN and Professional Tax registration." },
                        { title: "Social Security", desc: "Mandatory registration for EPFO and ESIC." },
                        { title: "Bank Account", desc: "Facilitates opening of the company's bank account." }
                    ]
                }}
                advantages={{
                    title: "Benefits of SPICe+ Form",
                    subtitle: "Why use this integrated form?",
                    list: [
                        { title: "Single Window", desc: "One form for 10 incorporation and registration services." },
                        { title: "Time Saving", desc: "Reduces processing time significantly compared to separate filings." },
                        { title: "Cost Effective", desc: "Consolidated fee payment for standard incorporation." },
                        { title: "Ease of Compliance", desc: "Simplifies compliance with MCA, Income Tax, and Labour laws." },
                        { title: "Digital Process", desc: "Complete online process with digital signatures." },
                        { title: "Real-time Validation", desc: "On-screen validation minimizes errors during filing." }
                    ]
                }}
                eligibility={{
                    title: "Who Can Use SPICe+?",
                    subtitle: "Eligibility Checklist",
                    list: [
                        { title: "Private Limited Company", desc: "Any new Private Limited Company incorporation." },
                        { title: "Public Limited Company", desc: "New Public Limited Company incorporation." },
                        { title: "One Person Company", desc: "Registration of One Person Company (OPC)." },
                        { title: "Section 8 Company", desc: "Incorporation of Non-Profit (Section 8) Companies." },
                        { title: "Producer Company", desc: "Farmers or producers setting up a Producer Company." },
                        { title: "Foreign Subsidiary", desc: "Foreign entities setting up a subsidiary in India." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for filing.",
                    list: [
                        "Electronic Memorandum of Association (eMoA)",
                        "Electronic Articles of Association (eAoA)",
                        "Declaration by Subscribers & Directors (INC-9)",
                        "Proof of Registered Office Address",
                        "Utility Bill (Electricity/Gas/Water)",
                        "NOC from Property Owner",
                        "Identity & Address Proof of Directors/Subscribers",
                        "Digital Signature Certificates (DSC)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Filing Procedure",
                    subtitle: "Step-by-step Filing Process",
                    steps: [
                        { step: "01", title: "Login", desc: "Access MCA portal with valid credentials." },
                        { step: "02", title: "Part A Name", desc: "File SPICe+ Part A for name reservation." },
                        { step: "03", title: "Part B Details", desc: "Fill Part B with incorporation details and other registrations." },
                        { step: "04", title: "Attachments", desc: "Upload mandatory documents (eMoA, eAoA, etc.)." },
                        { step: "05", title: "DSC Affixing", desc: "Affix Digital Signatures of directors and professionals." },
                        { step: "06", title: "Submission", desc: "Submit form and pay applicable fees." },
                        { step: "07", title: "Approval", desc: "Receive Certificate of Incorporation (COI) upon approval." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert Filing Assistance",
                    list: [
                        { title: "Expert Support", desc: "Guidance from seasoned Company Secretaries." },
                        { title: "Error-Free Filing", desc: "Meticulous review to prevent rejection." },
                        { title: "End-to-End Service", desc: "From name reservation to obtaining COI." },
                        { title: "DSC Assistance", desc: "Help with obtaining Digital Signatures." },
                        { title: "Post-Incorporation", desc: "Support with bank account opening and compliances." },
                        { title: "Transparent Pricing", desc: "Clear fee structure with no hidden costs." },
                        { title: "Timely Updates", desc: "Regular status updates on your application." },
                        { title: "Advisory", desc: "Professional advice on capital structure and shareholding." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about SPICe+ Filing"
                faqs={faqs}
            />

        </div>
    );
};

export default SPICEForm;
