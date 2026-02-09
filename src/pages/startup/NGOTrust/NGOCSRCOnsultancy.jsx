import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * NGOCSRCOnsultancy Page matching Vyombiz layout styles
 * URL: https://corpbiz.io/ngo-csr-consultancy
 */

const NGOCSRCOnsultancy = () => {

    const faqs = [
        {
            question: "Which Nonprofit Can Apply for CSR?",
            answer: "A public trust registered under Section 12A and 80G, or a Section 8 company engaged in equivalent operations for at least three years can apply for CSR funding."
        },
        {
            question: "Can a newly founded NGO submit a CSR application?",
            answer: "Yes, but they must first register with the Registrar of Companies (ROC) and then apply for CSR-1 registration with the Ministry of Corporate Affairs (MCA)."
        },
        {
            question: "What are the advantages of an NGO registering for CSR?",
            answer: "Registering for CSR allows NGOs to obtain financing and support from businesses for their social and development projects, as mandated by the Companies Act, 2013."
        },
        {
            question: "Is 80G required for CSR?",
            answer: "While not strictly mandatory for Form CSR-1, it is highly advised that NGOs have valid 80G and 12A registrations before applying to ensure eligibility for funding."
        },
        {
            question: "How to get CSR funding for NGO?",
            answer: "To get CSR funding, NGOs must research potential donors, prepare project-related documents and action plans, and ensure all compliances like 12A, 80G, and CSR-1 are in place."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="NGO CSR Consultancy"
                heroTitleSuffix="Services"
                heroSubtitle="Unlock CSR Funding Opportunities for Your NGO"
                heroDescription="Vyombiz offers expert CSR consultancy to help non-profit organizations align with corporate missions, ensure compliance, and secure funding for sustainable growth."
                whatsIncludedList={[
                    "Strategic CSR Planning & Advocacy",
                    "CSR-1 Registration & Compliance",
                    "Funding & Grant Application Support",
                    "Impact Assessment & Reporting"
                ]}
                stats={[
                    { count: "100+", label: "NGOs Assisted", icon: <Users size={20} /> },
                    { count: "50Cr+", label: "CSR Funds Facilitated", icon: <TrendingUp size={20} /> },
                    { count: "99%", label: "Compliance Success", icon: <CheckCircle size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert expertise="Expertise in NGO CSR Consultancy" />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Social Impact",
                    title: "NGO CSR Consultancy –",
                    highlightTitle: "Maximize Your Reach",
                    description: [
                        "Vyombiz provides specialized assistance in aligning the mission of non-governmental organizations with corporate social responsibility (CSR) goals of companies. We offer expert guidance to enhance the reach and impact of NGOs.",
                        "Our consultancy helps you navigate legal and financial obligations, connecting you with professionals in the sector. We are committed to simplifying legal requirements and providing organized support for your cause.",
                        <strong>Why CSR is Important?</strong>,
                        "Section 135 of the Companies Act, 2013 mandates certain companies to contribute 2% of their average net profit towards CSR. This opens up significant funding opportunities for eligible NGOs to drive social change."
                    ],
                    whyIdealTitle: "Challenges We Solve",
                    whyIdealList: [
                        { title: "Compliance Challenges", desc: "Navigating complex legal frameworks and maintaining ongoing compliance." },
                        { title: "Complex Registrations", desc: "Handling intricate registration processes for Section 8, Trusts, etc." },
                        { title: "Networking Gaps", desc: "Bridging the gap between NGOs and potential corporate funders." },
                        { title: "Strategic Alignment", desc: "Finding funders whose mission aligns with the NGO's objectives." }
                    ]
                }}
                advantages={{
                    title: "Benefits of CSR Consultancy",
                    subtitle: "How our services empower your NGO.",
                    list: [
                        { title: "Access to Funding", desc: "Connect with potential sources for financial support and guidance on fund utilization." },
                        { title: "Platform for Advocacy", desc: "Gain a larger platform to advocate for your cause and increase connections." },
                        { title: "Strategic Collaboration", desc: "Collaborate easily with social causes and amplify your impact on a larger scale." },
                        { title: "Enhanced Credibility", desc: "Increase credibility with stakeholders, attracting future potential donors." },
                        { title: "Networking Opportunities", desc: "Expand your network to establish new collaborations and funding avenues." },
                        { title: "Long-term Sustainability", desc: "Build capacity, manage resources, and ensure the long-term viability of your NGO." }
                    ]
                }}
                eligibility={{
                    title: "Essential Registrations",
                    subtitle: "Prerequisites for CSR Funding.",
                    list: [
                        { title: "80G Registration", desc: "Entitles donors to 50% tax exemption. Essential for attracting corporate funding." },
                        { title: "12A Registration", desc: "Exempts the NGO's income from taxation. A one-time registration for Trusts/NGOs." },
                        { title: "NGO Registration", desc: "Basic registration as a Trust, Society, or Section 8 Company." },
                        { title: "FCRA Registration", desc: "Mandatory for accepting foreign contributions and CSR funding from foreign companies." }
                    ]
                }}
                documents={{
                    title: "Documents for CSR-1",
                    description: "Essential documents for registering to receive CSR funds.",
                    list: [
                        "NGO's PAN Card",
                        "Registration Certificate Copy",
                        "12A and 80G Registration Certificates",
                        "PAN Card of Authorized Person",
                        "Digital Signature (DSC) of Authorized Person",
                        "Details of Governing Body Members",
                        "Contact Number and Email ID",
                        "CSR Policy of the Company (if applicable)",
                        "CSR Report (if applicable)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Our Services",
                    subtitle: "Comprehensive CSR Consultancy Solutions.",
                    steps: [
                        { step: "01", title: "Legal & Financial", desc: "Advisory on legal requirements, taxation, 12A, and 80G registration." },
                        { step: "02", title: "Compliance Guidance", desc: "Ensuring all compliance requirements are met as per authority standards." },
                        { step: "03", title: "Application Filing", desc: "Timely submission of application forms and required documents." },
                        { step: "04", title: "Documentation", desc: "Compiling and verifying documents to prevent delays and rejections." },
                        { step: "05", title: "Procedural Support", desc: "Guidance through 12A, 80G, FCRA, and other procedural formalities." },
                        { step: "06", title: "Monitoring", desc: "Regular monitoring and evaluation to ensure ongoing compliance." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "Your trusted partner for NGO growth.",
                    list: [
                        { title: "Expert Team", desc: "Access to a vast network of CAs, CS, and legal experts." },
                        { title: "Proven Track Record", desc: "Experience in successfully providing CSR consulting to numerous NGOs." },
                        { title: "Transparent Process", desc: "Clear pricing and transparent processes with no hidden costs." },
                        { title: "Technology Driven", desc: "Efficacy through technological approaches for smooth service delivery." },
                        { title: "Client Satisfaction", desc: "High client satisfaction rate with dedicated support." },
                        { title: "Comprehensive Care", desc: "End-to-end support from registration to funding and compliance." }
                    ]
                }}
            />
            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about NGO CSR Consultancy"
                faqs={faqs}
            />

        </div>
    );
};

export default NGOCSRCOnsultancy;
