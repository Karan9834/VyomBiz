import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * GSTComplianceServices Page matching Vyombiz layout styles
 */

const GSTComplianceServices = () => {

    const faqs = [
        {
            question: "Why are GST compliance services important for businesses?",
            answer: "GST compliance services help businesses avoid penalties, manage input tax credit efficiently, reduce audit risks, and maintain transparency in financial reporting."
        },
        {
            question: "What are the common issues faced in GST compliance?",
            answer: "Common issues include input tax credit mismatches, complex return filing requirements, manual data entry errors, delayed refunds, and difficulty integrating accounting software with the GST portal."
        },
        {
            question: "What are the conditions for claiming Input Tax Credit (ITC)?",
            answer: "To claim ITC, the dealer must have the invoice, GSTR-3B must be filed, tax must be paid by the supplier, and the invoice amount must be paid within 180 days."
        },
        {
            question: "What are the main components of the GST compliance process?",
            answer: "The main components include GST registration, tax invoicing, HSN code classification, accounting software integration, timely return filing, and maintenance of records (stock, sales, purchases)."
        },
        {
            question: "What are the documents required for claiming GST ITC?",
            answer: "Documents required include the invoice issued by the supplier, debit note (if any), bill of entry, and payment receipts where reverse charge is applicable."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="GST Compliance"
                heroTitleSuffix="Services Online"
                heroSubtitle="Simplify Tax Filing with Experts"
                heroDescription="Stay compliant with GST regulations through Vyombiz's professional GST compliance services. Our experts help businesses manage GST filings, maintain records, and avoid penalties while improving overall operational efficiency. Trusted by thousands of businesses for reliable tax compliance solutions."
                whatsIncludedList={[
                    "GST Registration & Filings",
                    "GST Notice Handling",
                    "Appointment of GST Auditor",
                    "Incorporation of Latest GST Laws"
                ]}
                stats={[
                    { count: "43,000+", label: "Businesses Served", icon: <Users size={20} /> },
                    { count: "3,500+", label: "Professional Advisors", icon: <Briefcase size={20} /> },
                    { count: "60+", label: "Offices Across India", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Complete GST Compliance Solutions",
                    title: "Overview of",
                    highlightTitle: "GST Compliance Services",
                    description: [
                        "GST compliance services involve adhering to the rules and requirements under the Goods and Services Tax Act introduced in 2017. These services include GST registration, proper tax invoicing, timely return filing, payment of taxes, and maintaining accurate financial records.",
                        "Our experts assist businesses in obtaining a GST Identification Number (GSTIN), managing updates on the GST portal, generating compliant invoices, and setting up efficient systems for regular GST return filings.",
                        <strong>Why Choose GST Compliance Services?</strong>,
                        "Professional GST compliance solutions help businesses reduce legal risks and simplify complex tax procedures. Maintaining proper GST compliance also improves financial credibility and increases the chances of securing business loans or investment opportunities.",
                        "With our assistance, businesses can complete GST registration, file monthly or annual returns, conduct tax audits, and receive support in handling GST-related legal matters when required."
                    ],
                    whyIdealTitle: "Additional Services for MSMEs",
                    whyIdealList: [
                        { title: "Strategic Tax Planning", desc: "Planning tax strategies aligned with domestic and international tax regulations." },
                        { title: "Transaction Structuring", desc: "Designing business transactions to achieve better tax efficiency." },
                        { title: "Legal Advisory", desc: "Professional guidance in handling tax disputes and regulatory matters." },
                        { title: "Technology Integration", desc: "Automated systems for efficient GST filing and financial data management." }
                    ]
                }}
                advantages={{
                    title: "Advantages of GST Compliance",
                    subtitle: "Enhancing credibility and operational efficiency.",
                    list: [
                        { title: "Lower Tax Liability", desc: "Input tax credit helps reduce the overall tax burden and improves cash flow." },
                        { title: "Improved Business Credibility", desc: "GST-compliant businesses gain trust from customers, investors, and government authorities." },
                        { title: "Easier Business Expansion", desc: "GST simplifies interstate trade and helps businesses expand across multiple states." },
                        { title: "Avoid Penalties", desc: "Proper GST filing helps businesses avoid penalties, notices, and late fees." },
                        { title: "Reduced Legal Risks", desc: "Following GST regulations helps avoid legal complications and disputes." },
                        { title: "Simplified Business Operations", desc: "GST systems allow easy management of invoices, returns, and tax payments through one platform." }
                    ]
                }}
                eligibility={{
                    title: "GST Compliance Checklist",
                    subtitle: "Key requirements for maintaining GST compliance.",
                    list: [
                        { title: "GST Registration Requirement", desc: "For businesses with turnover > ₹20L (services) or ₹40L (products)." },
                        { title: "GST-Compliant Invoicing", desc: "Issue GST invoices with all required details (GSTIN, HSN, rates)." },
                        { title: "Correct HSN Code Usage", desc: "Use 4-digit (turnover < ₹5Cr) or 6-digit (turnover > ₹5Cr) HSN codes." },
                        { title: "E-Invoicing Compliance", desc: "Mandatory for companies with turnover > ₹5 Crore." },
                        { title: "Timely GST Return Filing", desc: "Monthly, quarterly, and annual filings within prescribed deadlines." },
                        { title: "Proper Record Maintenance", desc: "Maintain records of sales, stock, purchases, ITC, and e-way bills." }
                    ]
                }}
                documents={{
                    title: "Documents Required for GST Compliance",
                    description: "Essential documents for GST registration, filing, and audit.",
                    list: [
                        "PAN of Company and Directors",
                        "Business Registration Certificate",
                        "Identity proof of Directors or Partners",
                        "Registered business address proof",
                        "Bank account details",
                        "MOA & AOA or Partnership Deed",
                        "Sales and purchase invoices",
                        "HSN code list for products/services",
                        "E-way bills and tax payment receipts",
                        "Financial statements (Balance Sheet and P&L)"
                    ],
                    imageUrl: "Documents.jpg"
                }}
                process={{
                    title: "GST Compliance Process",
                    subtitle: "Step-by-step guide to GST compliance with Vyombiz.",
                    steps: [
                        { step: "01", title: "GST Registration", desc: "Obtain unique GSTIN through the online portal." },
                        { step: "02", title: "Issue GST-Compliant Invoices", desc: "Issue GST compliant invoices and upload to IRP if required." },
                        { step: "03", title: "GST Return Filing", desc: "Timely filing of GSTR-1, 3B, 9, 9C etc." },
                        { step: "04", title: "Claim Input Tax Credit", desc: "Reclaim input tax credit through sales/purchase data." },
                        { step: "05", title: "Maintain GST Records", desc: "Maintain records of stock, sales, and purchases." },
                        { step: "06", title: "Audit Handling & Notice Support", desc: "Conduct GST audits and reply to tax notices." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for GST Compliance?",
                    subtitle: "Your partner for end-to-end GST compliance.",
                    list: [
                        { title: "Experienced Tax Professionals", desc: "Expert team of CAs, CS, and auditors." },
                        { title: "Advanced Technology Support", desc: "Latest tools and automated systems to reduce errors." },
                        { title: "Complete Compliance Management", desc: "From registration to audit, we handle it all." },
                        { title: "On-Time GST Return Filing", desc: "Stress-free filing without missing deadlines." },
                        { title: "Customized Compliance Plans", desc: "Tailored services based on your business type." },
                        { title: "Regular GST Law Updates", desc: "Real-time updates on GST legislation and rules." },
                        { title: "Dedicated 24/7 Assistance", desc: "Dedicated support via WhatsApp, Email, and Phone." },
                        { title: "Full Audit and Documentation Support", desc: "Hassle-free documentation for tax audits." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about GST Compliance Services"
                faqs={faqs}
            />

        </div>
    );
};

export default GSTComplianceServices;