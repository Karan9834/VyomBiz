import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationSouthAfrica Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-south-africa
 */

const CompanyRegistrationSouthAfrica = () => {

    const faqs = [
        {
            question: "What is the list of documents required for online company registration in South Africa?",
            answer: "The required documents include a copy of identity card or passport, address proof, company name, and company details."
        },
        {
            question: "What are the benefits of company registration in South Africa?",
            answer: "Benefits include tax incentives, subsidies, R&D refunds, access to over 100 tax treaties, government support for skill development, and it serves as a gateway to African markets."
        },
        {
            question: "What is the taxation structure for businesses in South Africa?",
            answer: "Companies must register with SARS. Taxes include Corporate Income Tax (28%), VAT, Skills Development Levy (SDL), Unemployment Insurance Fund (UIF), and Pay As You Earn (PAYE)."
        },
        {
            question: "Can a foreign national be a director of a South African company?",
            answer: "Yes, there are no residency requirements for directors of a Private Company (Pty Ltd). However, a company must appoint a public official who is a resident of South Africa."
        },
        {
            question: "How long does it take to register a company in South Africa?",
            answer: "With VyomBiz's assistance, the process is expedited. Once all documents are submitted, CIPC registration is typically completed swiftly."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in South Africa"
                heroSubtitle="Launch Your Business in Africa's Most Developed Economy"
                heroDescription="Incorporate your company in South Africa with expert guidance. Access a resource-rich economy, strategic ports, and a gateway to the entire African continent."
                whatsIncludedList={[
                    "Business Consulting & Mentorship",
                    "Tax and Social Security Compliance",
                    "Lifetime Free Consulting",
                    "Compliance Management",
                    "Bank Account Opening Assistance"
                ]}
                stats={[
                    { count: "500+", label: "Registrations Completed", icon: <Building2 size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Users size={20} /> }, // Sourced from content
                    { count: "50+", label: "Branch Offices", icon: <Briefcase size={20} /> }     // Sourced from content
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "African Expansion",
                    title: "Company Registration in South Africa –",
                    highlightTitle: "An Overview",
                    description: [
                        "South Africa is the most developed nation on the African continent, boasting advanced infrastructure and a strong economy, making it an excellent destination for international business expansion.",
                        "With a solid regulatory framework, attractive investment incentives, and established financial systems, South Africa offers a business-friendly environment for entrepreneurs.",
                        <strong>Why South Africa?</strong>,
                        "It serves as a strategic gateway to the African continent, offering immense potential in rapidly growing markets.",
                        "The government provides numerous incentives, including tax breaks and grants, to attract foreign investment in sectors like industry and tourism."
                    ],
                    whyIdealTitle: "Structures for Business Registration",
                    whyIdealList: [
                        { title: "Private Company (Pty Ltd)", desc: "A separate legal entity where shareholders' liability is limited. No mandatory requirement for local directors or shareholders." },
                        { title: "Public Company", desc: "Designed to raise capital from the public. Requires at least 3 directors and 1 shareholder. Audited annual accounts are mandatory." },
                        { title: "Non-Profit Company (NPC)", desc: "Incorporated for public benefit or social/cultural objectives. Income is not distributed to incorporators or members." },
                        { title: "Personal Liability Company (Inc)", desc: "Directors are jointly and severally liable for the company's debts and liabilities incurred during their term of office." },
                        { title: "Sole Proprietorship", desc: "Owned and operated by a single individual with no separate legal existence from the owner." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Company Registration",
                    subtitle: "Unlock opportunities in a diverse and resource-rich economy.",
                    list: [
                        { title: "Government Incentives", desc: "Access to Employment Tax Incentives, foreign investment grants, and R&D subsidies." },
                        { title: "Tax Advantages", desc: "Benefit from over 100 double taxation treaties and 50 bilateral investment accords to reduce withholding taxes." },
                        { title: "Strategic Location", desc: "A gateway to the African continent with advanced infrastructure and ports." },
                        { title: "Skilled Workforce", desc: "Government initiatives promote skill development and worker training." },
                        { title: "Economic Stability", desc: "A well-developed business ecosystem with established financial systems." },
                        { title: "Market Potential", desc: "Immense potential in rapidly growing markets across various sectors." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Key criteria for incorporating a company in South Africa.",
                    list: [
                        { title: "Directors", desc: "Minimum one director for a private company; three for a public company." },
                        { title: "Shareholders", desc: "At least one shareholder is required." },
                        { title: "Bank Account", desc: "Every registered company must open a business bank account in South Africa." },
                        { title: "Public Official", desc: "A resident public official must be appointed." },
                        { title: "Annual Returns", desc: "Must file annual returns with the CIPC within 30 business days of establishment." },
                        { title: "Registered Address", desc: "A physical office address in South Africa is mandatory." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents required for CIPC Registration.",
                    list: [
                        "Passport Copies of Directors & Investors",
                        "Address Proof (Utility Bill/Financial Statement)",
                        "Notice of Company Incorporation",
                        "Memorandum of Incorporation (MOI)",
                        "Application Form with Authorized Signature",
                        "Financial Statement of the Firm",
                        "Proposed Company Names",
                        "Director Identification Details"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Generic business/city image
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to incorporating your business in South Africa.",
                    steps: [
                        { step: "01", title: "Choose Business Structure", desc: "Select the appropriate entity type (e.g., Pty Ltd, NPC)." },
                        { step: "02", title: "Document Preparation", desc: "Gather ID proofs, address proofs, and company details." },
                        { step: "03", title: "Name Reservation", desc: "Ensure your desired company name is unique and available." },
                        { step: "04", title: "Online Registration (CIPC)", desc: "File application and documents via the CIPC portal and pay fees." },
                        { step: "05", title: "Registration Certificate", desc: "Receive official CIPC registration certificate upon approval." },
                        { step: "06", title: "Tax Registration (SARS)", desc: "Register with SARS for Income Tax, VAT, PAYE, etc." },
                        { step: "07", title: "Open Bank Account", desc: "Set up a corporate bank account for business operations." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Trust VyomBiz?",
                    subtitle: "Your expert partner for seamless South Africa company registration.",
                    list: [
                        { title: "10+ Years Expertise", desc: "Deep experience in global compliance and company formation." },
                        { title: "End-to-End Consulting", desc: "Comprehensive guidance from name reservation to tax registration." },
                        { title: "Government Liaison", desc: "Strong innovation network for smoother regulatory approvals." },
                        { title: "Expedited Process", desc: "Timely completion with minimized errors and delays." },
                        { title: "Transparency", desc: "Clear guidance on timelines, costs, and compliance obligations." },
                        { title: "24/7 Support", desc: "Dedicated assistance to resolve queries at every stage." },
                        { title: "Documentation Help", desc: "Expert assistance in preparing and submitting all required docs." },
                        { title: "Post-Registration", desc: "Ongoing support for annual returns and corporate compliance." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about South Africa Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationSouthAfrica;
