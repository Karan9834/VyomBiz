import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationFrance Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-france
 */

const CompanyRegistrationFrance = () => {

    const faqs = [
        {
            question: "What is a K-bis extract and why is it important?",
            answer: "A K-bis extract is the official document proving a company's legal existence and registration in France. It is required for opening a bank account and other administrative procedures."
        },
        {
            question: "Is there a minimum capital requirement for establishing a SARL?",
            answer: "Technically, the minimum capital requirement for a SARL is €1. However, banks may require a higher amount to demonstrate financial stability."
        },
        {
            question: "Do I need a resident director to incorporate in France?",
            answer: "No, you do not need a resident director. However, appointing a local representative or agent is highly recommended to handle administrative tasks."
        },
        {
            question: "What is the 'Talent Passport'?",
            answer: "The 'Talent Passport' is a 4-year renewable residence permit designed for investors, company founders, and highly skilled employees from outside the EU."
        },
        {
            question: "What are SIREN and SIRET numbers?",
            answer: "SIREN is a unique 9-digit identification number for the company, while SIRET is a 14-digit number that identifies each specific establishment of the company."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in France"
                heroSubtitle="Set Up Your Business in the Heart of Europe"
                heroDescription="Expand your business to France, the 7th largest economy in the world and a gateway to the European Union market. We provide comprehensive support for seamless incorporation."
                whatsIncludedList={[
                    "SIREN & SIRET Number Acquisition",
                    "Virtual Address for 3 Months",
                    "VAT Registration",
                    "Company Name Reservation",
                    "Lifetime Compliance Alerts"
                ]}
                stats={[
                    { count: "3000+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "EU Gateway",
                    title: "Company Registration in France –",
                    highlightTitle: "An Overview",
                    description: [
                        "France is the 3rd largest economy in Europe and the 7th largest globally, offering a robust infrastructure and a strategic location.",
                        "It allows 100% foreign ownership and provides access to the vast European Union market via double taxation agreements with over 120 countries.",
                        <strong>Why France?</strong>,
                        "France boasts a highly skilled workforce, advanced technology sectors, and government incentives for R&D and innovation.",
                        "Its 'Talent Passport' scheme makes it easier for international investors and founders to live and work in the country."
                    ],
                    whyIdealTitle: "Business Structures",
                    whyIdealList: [
                        { title: "Limited Liability Company (SARL)", desc: "Most common structure (Société à Responsabilité Limitée). Limited liability, 2+ members." },
                        { title: "Simplified Joint Stock Company (SAS)", desc: "Flexible structure (Société par Actions Simplifiée). Suitable for foreign investors." },
                        { title: "Public Limited Company (SA)", desc: "For large corporations (Société Anonyme). Minimum capital €37,000." },
                        { title: "Sole Proprietorship (EI)", desc: "Simplest form (Entreprise Individuelle). Unlimited liability." },
                        { title: "Single Member LLC (EURL)", desc: "SARL with a single shareholder (Entreprise Unipersonnelle à Responsabilité Limitée)." },
                        { title: "Micro-Enterprise", desc: "Simplified regime for small businesses with turnover caps." },
                        { title: "Branch Office", desc: "Extension of a foreign parent company. Not a separate legal entity." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Registration",
                    subtitle: "Why businesses choose France for expansion.",
                    list: [
                        { title: "Strategic Location", desc: "Central location in Western Europe, key for logistics and trade." },
                        { title: "Reduced Corporate Tax", desc: "SMEs can benefit from a reduced corporate tax rate of 15% on initial profits." },
                        { title: "VAT Benefits", desc: "VAT reverse charge mechanism available for non-resident companies." },
                        { title: "Access to EU Market", desc: "Free trade access to all European Union member states." },
                        { title: "Innovation Hub", desc: "Strong government support and tax credits for Research & Development." },
                        { title: "Skilled Workforce", desc: "One of the most productive and educated workforces in Europe." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Key criteria for incorporating in France.",
                    list: [
                        { title: "Share Capital", desc: "Depends on structure (e.g., €1 for SARL/SAS, €37,000 for SA)." },
                        { title: "Directors", desc: "At least one director (manager) required. No residency requirement." },
                        { title: "Registered Address", desc: "Must have a physical office address (domiciliation) in France." },
                        { title: "Bank Account", desc: "Must open a professional bank account to deposit share capital." },
                        { title: "Visa", desc: "Non-EU directors may need a residence permit or 'Talent Passport'." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents for France Company Incorporation.",
                    list: [
                        "Drafted Memorandum & Articles of Association (MOA & AOA)",
                        "Passport Copies of Directors & Shareholders",
                        "Proof of Address (Utility Bill/Lease)",
                        "Non-Conviction Certificate for Directors",
                        "Bank Certificate of Share Capital Deposit",
                        "Proof of Domiciliation (Registered Office)",
                        "Completed M0 Form (Company Registration Form)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Paris / France Generic
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to setting up your business.",
                    steps: [
                        { step: "01", title: "Business Structure", desc: "Select the legal form (SARL, SAS, SA, etc.) best suited for your goals." },
                        { step: "02", title: "Name Reservation", desc: "Check availability and reserve your company name with INPI." },
                        { step: "03", title: "Bank Account", desc: "Open a temporary bank account and deposit share capital." },
                        { step: "04", title: "Draft Statutes", desc: "Prepare and sign the Articles of Association (Statutes)." },
                        { step: "05", title: "Publication", desc: "Publish a notice of incorporation in a legal gazette (JAL)." },
                        { step: "06", title: "Registration", desc: "File application with the Commercial Court (Greffe) to get K-bis." },
                        { step: "07", title: "Tax & VAT", desc: "Receive SIREN/SIRET numbers and register for Tax/VAT." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted partner for French market entry.",
                    list: [
                        { title: "Expert Guidance", desc: "Assistance from experienced consultants familiar with French law." },
                        { title: "Fast Track", desc: "Streamlined process to get your company registered in 1 week." },
                        { title: "Comprehensive Support", desc: "From visa assistance to bank account opening and accounting." },
                        { title: "Virtual Office", desc: "Provision of registered address services for initial setup." },
                        { title: "Compliance", desc: "Ongoing support for tax filing and annual compliance." },
                        { title: "Language Support", desc: "Bridging the language barrier with bilingual experts." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in France"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationFrance;
