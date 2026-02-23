import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * GSTRegistration Page matching Vyombiz layout styles
 */

const GSTRegistration = () => {

    const faqs = [
        {
            question: "In which cases GST registration is crucial?",
            answer: "GST registration is crucial if you supply goods via an e-commerce portal, make inter-state supplies, are a Casual Taxable Person, an agent for a registered principal, a Service Provider with turnover > ₹20 Lakhs, an Input Service Distributor, an E-commerce Operator, a TDS/TCS Deductor, or liable to pay tax under Reverse Charge Mechanism."
        },
        {
            question: "What is the turnover limit for GST registration?",
            answer: "For businesses dealing in goods, the turnover limit is ₹40 Lakhs (₹20 Lakhs for special category states). For service providers, the limit is ₹20 Lakhs (₹10 Lakhs for special category states)."
        },
        {
            question: "Is GST registration mandatory for online sellers?",
            answer: "Yes, any individual or business delivering goods and services through e-commerce aggregators is required to obtain GST registration regardless of turnover turnover."
        },
        {
            question: "What is a GSTIN?",
            answer: "GSTIN (Goods and Services Tax Identification Number) is a unique 15-digit code assigned to every business registered under GST. It replaces multiple identification numbers like TIN, VAT, and Service Tax Registration Number."
        },
        {
            question: "Can I apply for GST registration voluntarily?",
            answer: "Yes, businesses can apply for GST registration voluntarily even if their turnover is below the prescribed threshold limits. This allows them to claim Input Tax Credit and operate without restrictions on inter-state sales."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="GST Registration"
                heroTitleSuffix="Online"
                heroSubtitle="Step-by-Step (REG-01) & Expert Help"
                heroDescription="Are you facing challenges during GST registration? Get your GSTIN quickly with Vyombiz CA/CS guidance. We complete REG-01, verify documents, track your ARN, and ensure error-free application processing."
                whatsIncludedList={[
                    "Document Preparation",
                    "Get ARN in 2-3 Days",
                    "GST Certificate Issuance",
                    "Free Consultation with GST Expert"
                ]}
                stats={[
                    { count: "42868+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "GST Apply in 1 Hour",
                    title: "GST Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "The Goods and Services Tax (GST), introduced on July 1, 2017, replaced various central and state-level taxes like Service Tax, Excise Duty, CST, and VAT. GST registration is now mandatory for traders, manufacturers, service providers, and freelancers exceeding specific turnover limits.",
                        "GST consolidates multiple taxes into a unified system, streamlining compliance, reducing tax evasion, and eliminating the cascading effect of taxes. It promotes the ease of doing business and boosts the efficacy of the country’s economy.",
                        <strong>What is a GST Registration Certificate?</strong>,
                        "A GST Registration Certificate is an official document issued by the Government of India to registered business entities. It serves as proof of legal standing and contains critical information like the unique GSTIN, business name, and official address.",
                        "This certificate is vital for fulfilling tax obligations, cementing credibility, and operational legality. Verification of GST registration is essential for all business types including LLPs, Private Limited Companies, and Sole Proprietorships."
                    ],
                    whyIdealTitle: "Key Components of GST Registration",
                    whyIdealList: [
                        { title: "CGST", desc: "Central Goods and Services Tax - Levied by the Central Government on intra-state supplies." },
                        { title: "SGST", desc: "State Goods and Services Tax - Levied by the State Government on intra-state supplies." },
                        { title: "IGST", desc: "Integrated Goods and Services Tax - Levied by the Central Government on inter-state supplies." },
                        { title: "GSTIN", desc: "A 15-digit unique identification number assigned to each registered taxpayer." }
                    ]
                }}
                advantages={{
                    title: "What are the Benefits of GST Registration?",
                    subtitle: "Empower your business with legal recognition and growth opportunities.",
                    list: [
                        { title: "Regulatory Compliance", desc: "Safeguards legal and tax compliance, saving businesses from penalties for non-compliance." },
                        { title: "Easy Compliance", desc: "Streamlines processes for filing tax returns and making online payments via a unified portal." },
                        { title: "Maintains Transparency", desc: "Helps maintain updated business records, building reliability and facilitating operational transparency." },
                        { title: "Legal Protection", desc: "Safeguards the legal and regulatory standards of the business, protecting its rights." },
                        { title: "Improve Credit Score", desc: "Managing GST and regulatory compliances boosts the business credit profile." },
                        { title: "Market Advantage", desc: "Registration earns customer trust, attracting more business opportunities and expansion." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Check if your business is required to register for GST.",
                    list: [
                        { title: "Turnover > ₹40 Lakhs", desc: "For businesses dealing in goods (₹20 Lakhs for special category states)." },
                        { title: "Turnover > ₹20 Lakhs", desc: "For service providers (₹10 Lakhs for special category states)." },
                        { title: "Inter-State Supply", desc: "Any individual or business dealing with goods supplied across state boundaries." },
                        { title: "E-commerce Operators", desc: "All operators, aggregators, and sellers arriving goods/services through e-commerce platforms." },
                        { title: "Reverse Charge", desc: "Businesses bound to pay tax under the reverse charge mechanism." },
                        { title: "Non-Resident Taxpayers", desc: "Non-residents involved in taxable dealings within India." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for successful GST registration.",
                    list: [
                        "Applicant’s PAN Card",
                        "Applicant’s Aadhar Card",
                        "Proof of business registration / Incorporation Certificate",
                        "Identity proof of Promoters/Directors",
                        "Address proof of Promoters/Directors",
                        "Photographs of Promoters/Directors",
                        "Address proof of the place of business",
                        "Bank Account statement / Cancelled cheque",
                        "Digital Signature Certificate (DSC)",
                        "Lease/Rent Agreement (if applicable)",
                        "Letter of Authorization / Board Resolution"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-9dcd0b1760a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "How to Apply for GST?",
                    subtitle: "Simple 5-step online registration process.",
                    steps: [
                        { step: "01", title: "Apply on Portal", desc: "Visit GST portal and enter legal name, PAN, email, and mobile number." },
                        { step: "02", title: "Authenticate OTP", desc: "Verify OTP received on registered mobile and email to proceed." },
                        { step: "03", title: "TRN Generation", desc: "A Temporary Reference Number (TRN) is generated upon OTP verification." },
                        { step: "04", title: "Submission", desc: "Provide business details, promoter info, authorized signatory, and submit with DSC/EVC." },
                        { step: "05", title: "ARN & Certificate", desc: "Receive Application Reference Number (ARN) for tracking. Certificate issued upon approval." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Trust Vyombiz?",
                    subtitle: "Simplified registration with high success rates.",
                    list: [
                        { title: "Simiplified Registration", desc: "Processed and simplified 5000+ GST registration applications." },
                        { title: "High Success Rate", desc: "Guaranteed 99% success rate for GST registration certificates." },
                        { title: "Simplified Documentation", desc: "We assist in organizing and simplifying all required documents." },
                        { title: "Legal Advice", desc: "Regular updates and advice to simplify legal necessities." },
                        { title: "End-to-End Solutions", desc: "Comprehensive solutions for all GST-related queries." },
                        { title: "Affordable Pricing", desc: "100% affordable and transparent pricing structure." },
                        { title: "Reduces Compliance Burden", desc: "We ensure compliance burden is reduced by up to 30%." },
                        { title: "24/7 Customer Support", desc: "Round-the-clock assistance for compliance concerns." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about GST Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default GSTRegistration;
