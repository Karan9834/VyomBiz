import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationCanada Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-canada
 */

const CompanyRegistrationCanada = () => {

    const faqs = [
        {
            question: "What is the minimum share capital required for company registration in Canada?",
            answer: "The minimum share capital required to register a company in Canada is just CA$ 1."
        },
        {
            question: "Do I need a resident director to incorporate in Canada?",
            answer: "Yes, in most jurisdictions (like federally incorporated companies), at least 25% of the directors must be resident Canadians. However, provinces like British Columbia and Ontario do not have this requirement."
        },
        {
            question: "What are the main types of business structures in Canada?",
            answer: "The most common structures are Sole Proprietorship, Partnership (General, Limited, LLP), Corporation, and Co-operative."
        },
        {
            question: "Can a foreign company operate in Canada without incorporating a new entity?",
            answer: "Yes, a foreign company can register an 'Extra-Provincial Corporation' or a Branch Office to operate in Canada without creating a separate legal entity."
        },
        {
            question: "What are the tax registration requirements?",
            answer: "Businesses must register for a Business Number (BN) and, depending on revenue, for GST/HST/PST accounts with the Canada Revenue Agency (CRA)."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Canada"
                heroSubtitle="Business Setup in CA with VyomBiz"
                heroDescription="Expand your business to Canada, a top destination for investment. We provide end-to-end support for incorporation, compliance, and tax registration."
                whatsIncludedList={[
                    "Name Reservation & Approval",
                    "Virtual Office Address (6 Months)",
                    "GST/HST Registration",
                    "Corporate Seal & Minute Book",
                    "Bank Account Opening Support"
                ]}
                stats={[
                    { count: "500+", label: "Companies Registered", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Global Expansion",
                    title: "Company Registration in Canada –",
                    highlightTitle: "An Overview",
                    description: [
                        "Canada is recognized globally for its strong financial system, abundance of natural resources, and world-class infrastructure, making it a prime location for business investment.",
                        "Entrepreneurs can register federally for nationwide protection or provincially for localized operations. The process is streamlined and investor-friendly.",
                        <strong>Why Canada?</strong>,
                        "It offers a stable economy, low corporate tax rates for small businesses, and access to the North American market through agreements like USMCA.",
                        "With a highly skilled workforce and reputation for innovation, Canada supports diverse industries from technology to manufacturing."
                    ],
                    whyIdealTitle: "Business Structures",
                    whyIdealList: [
                        { title: "Sole Proprietorship", desc: "Simplest form. Owned and operated by one individual who has unlimited personal liability." },
                        { title: "Partnership", desc: "Two or more owners. Can be General (equal liability), Limited (limited liability for some), or LLP (protection from partners' negligence)." },
                        { title: "Corporation", desc: "Separate legal entity. Shareholders have limited liability. Can be incorporated Federally or Provincially." },
                        { title: "Co-operative", desc: "Owned and democratically controlled by its members. Liability is limited, and profits are distributed among members." },
                        { title: "Branch Office", desc: "Extension of a foreign parent company. Operates under the parent's name and liability." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Incorporation",
                    subtitle: "Why businesses choose Canada for expansion.",
                    list: [
                        { title: "Low Fees", desc: "Competitive incorporation and annual maintenance costs compared to other developed nations." },
                        { title: "Strong Economy", desc: "A stable, growing economy with a strong banking sector ensures business security." },
                        { title: "Tax Advantages", desc: "Lower corporate tax rates for small businesses and various R&D tax incentives." },
                        { title: "Global Access", desc: "Trade agreements like USMCA provide duty-free access to the US and Mexican markets." },
                        { title: "Skilled Workforce", desc: "Access to one of the most educated and diverse talent pools in the world." },
                        { title: "Legal Framework", desc: "Transparent and robust legal system protecting property rights and business interests." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Key criteria for registering a company in Canada.",
                    list: [
                        { title: "Share Capital", desc: "Minimum authorized share capital is CA$ 1." },
                        { title: "Directors", desc: "Minimum 1 director. 25% must be resident Canadians (Federally). Ontario/BC have no residency requirement." },
                        { title: "Shareholders", desc: "Minimum 1 shareholder required (can be an individual or corporate entity)." },
                        { title: "Registered Address", desc: "Must have a physical address in Canada for service of documents (cannot be a PO Box)." },
                        { title: "No Criminal Record", desc: "Directors must not have a criminal record involving fraud or bankruptcy." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents for Canada Company Incorporation.",
                    list: [
                        "Articles of Incorporation",
                        "Form 2 (Initial Registered Office Address)",
                        "Form 4 (First Directors)",
                        "NUANS Name Search Report",
                        "Passport Copies of Directors/Shareholders",
                        "Proof of Address for Directors",
                        "Business Plan (optional but recommended)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Toronto Skyline / Canada Generic
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to setting up your business.",
                    steps: [
                        { step: "01", title: "Select Structure", desc: "Choose between detailed structures like Corporation or Partnership." },
                        { step: "02", title: "Name Search", desc: "Perform a NUANS name search to ensure your business name is unique." },
                        { step: "03", title: "Prepare Articles", desc: "Draft and file Articles of Incorporation with Corporations Canada." },
                        { step: "04", title: "Federal Registration", desc: "Obtain your Certificate of Incorporation and Business Number (BN)." },
                        { step: "05", title: "Tax Accounts", desc: "Register for GST/HST, Payroll deductions, and Import/Export accounts." },
                        { step: "06", title: "Permits & Licenses", desc: "Apply for necessary municipal, provincial, or industry-specific licenses." },
                        { step: "07", title: "Corporate Records", desc: "Set up a corporate minute book and issue share certificates." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted partner for Canadian business expansion.",
                    list: [
                        { title: "Expert Guidance", desc: "10+ years of experience in international company formation." },
                        { title: "End-to-End Support", desc: "From name search to bank account opening and tax registration." },
                        { title: "Compliance Assurance", desc: "Ensuring your business meets all federal and provincial regulations." },
                        { title: "Document Drafting", desc: "Professional preparation of by-laws, resolutions, and shareholder agreements." },
                        { title: "Local Presence", desc: "Assistance with registered office services and local director requirements." },
                        { title: "24/7 Support", desc: "Round-the-clock assistance for all your business queries." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in Canada"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationCanada;
