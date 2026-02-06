import React from "react";
import {
    Users,
    Briefcase,
    Building2,
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * CSR1Registration Page
 * Refactored to match TrustRegistration design.
 */

const CSR1Registration = () => {
    const faqs = [
        {
            question: "What is Form CSR-1?",
            answer: "Form CSR-1 is a registration form that NGOs must file with the Ministry of Corporate Affairs (MCA) to register themselves for undertaking CSR activities funded by corporations."
        },
        {
            question: "Is CSR-1 registration mandatory for all NGOs?",
            answer: "Yes, w.e.f. April 1, 2021, it is mandatory for every NGO (Trust, Society, or Section 8 Company) to register with the Central Government via Form CSR-1 to accept CSR donations."
        },
        {
            question: "What is the timeline for CSR-1 registration?",
            answer: "The registration is usually processed immediately. Upon successful submission of Form CSR-1, a unique CSR Registration Number is generated automatically."
        },
        {
            question: "Can an NGO get CSR funding without 12A/80G?",
            answer: "Generally, no. Registration under Section 12A and 80G is a primary prerequisite for filing Form CSR-1 and receiving CSR funds."
        },
        {
            question: "What documents are needed for filing?",
            answer: "Key documents include the NGO's PAN card, Registration Certificate, 12A & 80G Approval Orders, and the Digital Signature Certificate (DSC) of the authorized signatory."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="CSR-1"
                heroTitleSuffix="Registration"
                heroSubtitle="Unlock Corporate Funding"
                heroDescription="Mandatory registration for NGOs to receive Corporate Social Responsibility (CSR) funding. We help you file Form CSR-1 with the MCA to unlock corporate grants and boost your credibility."
                whatsIncludedList={[
                    "Get Unique CSR Registration Number",
                    "Become Eligible for Corporate Funding",
                    "Expert DSC Assistance",
                    "Professional Certification by CA/CS"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}
            <TrustedBrands />

            {/* ================= TALK EXPERT SECTION ================= */}
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Corporate Funding",
                    title: "CSR-1 Filing & Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "Form CSR-1 is a mandatory registration form for NGOs, Trusts, and Section 8 Companies that intend to undertake Corporate Social Responsibility (CSR) activities funded by corporations. This registry allows the Ministry of Corporate Affairs (MCA) to monitor CSR spending effectively.",
                        "By registering with the Central Government through Form CSR-1, your NGO acquires a unique CSR Registration Number, making it eligible to receive funding and grants from corporate entities complying with Section 135 of the Companies Act, 2013.",
                        <strong>Why is CSR-1 Filing Important?</strong>,
                        "Corporates can only donate CSR funds to entities that have a valid CSR Registration Number. Without this, your NGO cannot legally accept CSR donations.",
                        "It creates a national database of NGOs undertaking CSR activities, ensuring transparency and proper monitoring of social welfare projects."
                    ],
                    whyIdealTitle: "Key Benefits",
                    whyIdealList: [
                        { title: "Corporate Funds", desc: "Gain eligibility to receive CSR funds from profitable companies." },
                        { title: "Credibility", desc: "Boosts goodwill and public image with MCA recognition." },
                        { title: "Database", desc: "Listed in a central repository of CSR-implementing agencies." },
                        { title: "Compliance", desc: "Ensures smooth processing of donations and legal compliance." }
                    ]
                }}
                advantages={{
                    title: "Benefits of CSR-1 Registration",
                    subtitle: "Registering your NGO via Form CSR-1 opens doors to sustainable funding and partnerships.",
                    list: [
                        { title: "Corporate Funding", desc: "Gain legal eligibility to receive CSR funds from profitable companies in India." },
                        { title: "Enhanced Credibility", desc: "Being registered with the MCA boosts the NGO's goodwill and public image." },
                        { title: "Organized Database", desc: "Part of a central repository of CSR-implementing agencies, increasing visibility." },
                        { title: "Hassle-free Operations", desc: "Smooth processing of donations and compliance with less legal hurdles." },
                        { title: "Government Recognition", desc: "Official recognition by the Central Government as a valid CSR entity." },
                        { title: "Partner Eligibility", desc: "Become a preferred partner for corporates looking to outsource CSR projects." }
                    ]
                }}
                eligibility={{
                    title: "Who Can File Form CSR-1?",
                    subtitle: "Entities eligible to register for CSR funding.",
                    list: [
                        { title: "Section 8 Company", desc: "Companies registered under Section 8 of the Companies Act, 2013." },
                        { title: "Public Trust", desc: "Registered Public Trusts with 12A and 80G registrations." },
                        { title: "Registered Society", desc: "Registered Societies with 12A and 80G registrations." },
                        { title: "State/Parliament Entity", desc: "Entity established under an Act of Parliament or State Legislature." },
                        { title: "Track Record", desc: "3 years of established track record (for some private entities)." },
                        { title: "Compliance", desc: "Must have valid PAN, 12A, and 80G registrations." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Essential documents for filing Form CSR-1.",
                    list: [
                        "Certificate of Registration of the NGO",
                        "PAN Card of the NGO",
                        "12A & 80G Approval Order Copies",
                        "Trust Deed / MoA & AoA",
                        "Resolution for Authorized Signatory",
                        "Details of Members (Name, Email, PAN)",
                        "Digital Signature Certificate (DSC) of Signatory",
                        "Valid Email ID & Mobile Number (OTP linked)",
                        "Activity Report (Last 3 Years)",
                        "Certification by Practicing CA/CS/CMA"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Filing Procedure",
                    subtitle: "Step-by-step process for CSR-1 Registration.",
                    steps: [
                        { step: "01", title: "Preparation", desc: "Gather documents & obtain DSC." },
                        { step: "02", title: "Filing", desc: "Fill Form CSR-1 on MCA portal." },
                        { step: "03", title: "Certification", desc: "CA/CS/CMA verifies and certifies the form." },
                        { step: "04", title: "Approval", desc: "Unique CSR Reg. Number is generated via email." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Professional support for your CSR-1 filing.",
                    list: [
                        { title: "Expert DSC Assistance", desc: "Assistance in obtaining Digital Signatures." },
                        { title: "Professional Certification", desc: "Form certification by experienced CA/CS/CMA." },
                        { title: "Correct Filing", desc: "Error-free data entry and submission." },
                        { title: "Quick Turnaround", desc: "Fast processing to get your CSR number." },
                        { title: "12A & 80G Guidance", desc: "Support with prerequisite registrations." },
                        { title: "Affordable Pricing", desc: "Transparent and competitive service charges." },
                        { title: "Post-Reg Compliance", desc: "Guidance on ongoing CSR compliance." },
                        { title: "Trusted by NGOs", desc: "Reliable partner for thousands of non-profits." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about Form CSR-1 Filing"
                faqs={faqs}
            />

        </div>
    );
};

export default CSR1Registration;
