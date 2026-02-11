import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationJapan Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-japan
 */

const CompanyRegistrationJapan = () => {

    const faqs = [
        {
            question: "What is the minimum capital requirement to set up a company in Japan?",
            answer: "The minimum capital requirement for establishing a company in Japan is just 1 Yen."
        },
        {
            question: "What is the most common type of company structure in Japan?",
            answer: "The most common structures are Godo Kaisha (GK) - Limited Liability Company and Kabushiki Kaisha (KK) - Joint Stock Company."
        },
        {
            question: "Do I need a local registered office address?",
            answer: "Yes, you must have a registered local office address in Japan to incorporate a company."
        },
        {
            question: "What is a 'Hanko' and is it mandatory?",
            answer: "A 'Hanko' is an official company seal used for signing contracts and legal documents. It is a mandatory requirement for companies in Japan."
        },
        {
            question: "Can I obtain a business visa for Japan?",
            answer: "Yes, establishing a company in Japan allows you to apply for a Business Manager Visa (Startup Visa), enabling you to reside and work in Japan."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Japan"
                heroSubtitle="Start Your Business in the Land of the Rising Sun"
                heroDescription="Expand your business to Japan, the world's 3rd largest economy and a global hub for innovation. We provide comprehensive support for a smooth entry into the Asian market."
                whatsIncludedList={[
                    "Document Review within 24 Hours",
                    "Japanese Bank Account Assistance",
                    "Digital Company Seal (Hanko) Creation",
                    "Business Visa Services in 1 Week",
                    "Unlimited Name Checks"
                ]}
                stats={[
                    { count: "3000+", label: "Companies Registered", icon: <Users size={20} /> },
                    { count: "10+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Asia Expansion",
                    title: "Company Registration in Japan –",
                    highlightTitle: "An Overview",
                    description: [
                        "Japan, home to global cities like Tokyo and Yokohama, is a major trading hub and the third-largest economy in the world.",
                        "It offers a stable economy, advanced infrastructure, and a highly skilled workforce, making it an ideal destination for international business expansion.",
                        <strong>Why Japan?</strong>,
                        "Japan is renowned for its technological advancement and innovation, particularly in IT, healthcare, and automation.",
                        "It maintains strong economic relationships with Asia, Latin America, and Europe, serving as a gateway to global markets."
                    ],
                    whyIdealTitle: "Business Structures",
                    whyIdealList: [
                        { title: "Sole Proprietorship (KJ)", desc: "Simplest structure, owned by one individual. No separate legal identity." },
                        { title: "Limited Liability Company (GK - Godo Kaisha)", desc: "Most common for tax efficiency. Min capital 1 million yen (typical). Limited liability." },
                        { title: "Joint Stock Company (KK - Kabushiki Kaisha)", desc: "Standard for larger businesses. Separate legal structure. Offers limited liability." },
                        { title: "General Partnership (GMK)", desc: "Partnership with unlimited liability for all partners." },
                        { title: "Limited Partnership (TSK)", desc: "Includes both general and limited partners." },
                        { title: "Branch Office (Shiten)", desc: "Extension of a foreign parent company. Not a separate legal entity." },
                        { title: "Representative Office (CJ)", desc: "For market research and promotion only. Cannot conduct sales." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Registration",
                    subtitle: "Why businesses choose Japan for expansion.",
                    list: [
                        { title: "World-Class Infrastructure", desc: "Robust facilities supporting industries and global competitors." },
                        { title: "Double Taxation Treaties", desc: "Access to treaties that minimize withholding tax on international income." },
                        { title: "Free-Trade Zones", desc: "Zones in Tokyo, Nagasaki, and Niigata offering streamlined international trade." },
                        { title: "Competitive Workforce", desc: "Highly disciplined and educated workforce focused on innovation." },
                        { title: "Government Incentives", desc: "Grants, tax exemptions, and subsidies for R&D and startups." },
                        { title: "IP Protection", desc: "Strong intellectual property laws protecting patents and trademarks." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Key criteria for incorporating in Japan.",
                    list: [
                        { title: "Share Capital", desc: "Minimum capital requirement of at least 1 Yen." },
                        { title: "Directors", desc: "Must appoint at least 1 director." },
                        { title: "Shareholders", desc: "Minimum 1 shareholder (individual or corporate entity)." },
                        { title: "Local Representative", desc: "Must appoint a local representative (physical presence not always required)." },
                        { title: "Registered Address", desc: "Must have a registered local office in Japan." },
                        { title: "Fiscal Year", desc: "Companies can freely decide their fiscal year." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents for Japan Company Incorporation.",
                    list: [
                        "Articles of Incorporation (AOA)",
                        "ID & Address Proof of Directors/Shareholders",
                        "Affidavit from Parent Company (if subsidiary)",
                        "Corporate Seal Certificate (Inkan Shomeisho)",
                        "Proof of Capital Contribution",
                        "Business Plan & Activity Details",
                        "Appointment Letter of Representative"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Tokyo / Japan Generic
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to setting up your business.",
                    steps: [
                        { step: "01", title: "Structure Check", desc: "Choose the appropriate business structure (KK, GK, etc.)." },
                        { step: "02", title: "Name Reservation", desc: "Reserve a unique trade name and verify availability." },
                        { step: "03", title: "Documentation", desc: "Prepare AOA, seal certificates, and affidavits." },
                        { step: "04", title: "Representative", desc: "Appoint a local representative or legal proxy." },
                        { step: "05", title: "Application", desc: "File for registration with the Japanese Trade Register." },
                        { step: "06", title: "Incorporation", desc: "Receive Certificate of Incorporation from Legal Affairs Bureau." },
                        { step: "07", title: "Post-Setup", desc: "Open bank account, obtain company seal, and register for taxes." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted partner for Japanese market entry.",
                    list: [
                        { title: "Experienced Team", desc: "Network of 10,000+ consultants with 10+ years of experience." },
                        { title: "Time Saver", desc: "Saved 50 Lakh+ hours for entrepreneurs with efficient processes." },
                        { title: "Visa Services", desc: "Fast-track Business Manager Visa assistance." },
                        { title: "Virtual Office", desc: "Addresses in Tokyo, Osaka, or Yokohama for non-residents." },
                        { title: "Payroll Solutions", desc: "End-to-end management of HR and compliance operations." },
                        { title: "24/7 Support", desc: "Lifetime support to ongoing business needs." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in Japan"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationJapan;
