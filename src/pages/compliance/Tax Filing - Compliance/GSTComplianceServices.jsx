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
            question: "Why are GST compliance services important for companies?",
            answer: "GST compliance services help companies avoid penalties, reconcile input tax credit to decrease tax liability, minimize audit risks, and enhance business reputation by maintaining transparency."
        },
        {
            question: "What are the common challenges in GST compliance?",
            answer: "Common challenges include mismatches in input tax credit claims, complex monthly/quarterly return filing turnover, manual data entry errors, delayed refunds, and difficulty integrating accounting systems with GST portals."
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
                heroTitleSuffix="Services"
                heroSubtitle="Simplify Tax Filing with Experts"
                heroDescription="Ensure timely and accurate GST filings with Vyombiz's expert compliance services. We help manage the complexities of GST laws, minimize penalties, and boost operational efficiency. Trusted by 42,800+ clients for hassle-free tax solutions."
                whatsIncludedList={[
                    "GST Registration & Filings",
                    "GST Notice Handling",
                    "Appointment of GST Auditor",
                    "Incorporation of Latest GST Laws"
                ]}
                stats={[
                    { count: "42896+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Comprehensive Compliance",
                    title: "GST Compliance Services –",
                    highlightTitle: "An Overview",
                    description: [
                        "GST compliance services include mandatory adherence to the Goods & Services Act of 2017. Our compliance solutions include registration, tax invoicing, return filing, payment to the government, and record maintenance.",
                        "Vyombiz experts will help you obtain a GST unique identification number, update your GST portal at regular intervals, create a standard invoice, and establish an automated mechanism for various GST return filings.",
                        <strong>Why Opt for GST Compliance Solutions?</strong>,
                        "Our GST compliance solutions help mitigate legal and financial risks and streamline tax processes. Having a strong track record of GST compliance will help you secure loans more easily and build your credibility in the industry.",
                        "Through our services, you can register for GST, file your returns monthly, quarterly, and annually, conduct audits, and represent yourself in court in case of legal proceedings."
                    ],
                    whyIdealTitle: "Add-on Services for MSMEs",
                    whyIdealList: [
                        { title: "Strategic Tax Planning", desc: "Planning as per domestic and international jurisdictions." },
                        { title: "Transaction Structuring", desc: "Optimizing transaction structures for tax efficiency." },
                        { title: "Legal Expertise", desc: "Expert handling of disputes and legal matters." },
                        { title: "Technology Solutions", desc: "Automation for GST filings and data management." }
                    ]
                }}
                advantages={{
                    title: "Benefits of GST Compliance",
                    subtitle: "Enhancing credibility and operational efficiency.",
                    list: [
                        { title: "Reduces Tax Liability", desc: "Use input credit to offset taxes owed, decreasing liability and enhancing cash flow." },
                        { title: "Increased Credibility", desc: "Gains credibility with customers/investors and eligibility for government tenders." },
                        { title: "Business Expansion", desc: "Removes barriers across states, enabling easier expansion without multi-state laws." },
                        { title: "Avoidance of Penalties", desc: "Timely registration and accurate reporting help avoid penalties and fines." },
                        { title: "Reduced Legal Issues", desc: "Adherence to the legal framework avoids costly and disruptive legal proceedings." },
                        { title: "Streamlined Operations", desc: "Simplified processes for registration, filing, and invoice generation via a single portal." }
                    ]
                }}
                eligibility={{
                    title: "Checklist & Criteria",
                    subtitle: "Key requirements for maintaining GST compliance.",
                    list: [
                        { title: "Mandatory Registration", desc: "For businesses with turnover > ₹20L (services) or ₹40L (products)." },
                        { title: "GST Invoicing", desc: "Issue GST invoices with all required details (GSTIN, HSN, rates)." },
                        { title: "HSN Codes", desc: "Use 4-digit (turnover < ₹5Cr) or 6-digit (turnover > ₹5Cr) HSN codes." },
                        { title: "E-Invoicing", desc: "Mandatory for companies with turnover > ₹5 Crore." },
                        { title: "Timely Filings", desc: "Monthly, quarterly, and annual filings within prescribed deadlines." },
                        { title: "Record Maintenance", desc: "Maintain records of sales, stock, purchases, ITC, and e-way bills." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for GST registration, filing, and audit.",
                    list: [
                        "PAN of Company & Directors",
                        "Company Registration Certificate",
                        "Photos of Directors/Shareholders",
                        "Proof of Registered Address",
                        "Bank Account Details",
                        "MOA & AOA / Partnership Deed",
                        "Sales & Purchase Invoices",
                        "List of HSN Codes",
                        "E-way Bills & Tax Receipts",
                        "Financial Statements (Balance Sheet, P&L)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413575b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Compliance Process",
                    subtitle: "Step-by-step guide to GST compliance with Vyombiz.",
                    steps: [
                        { step: "01", title: "Registration", desc: "Obtain unique GSTIN through the online portal." },
                        { step: "02", title: "Invoicing", desc: "Issue GST compliant invoices and upload to IRP if required." },
                        { step: "03", title: "Return Reporting", desc: "Timely filing of GSTR-1, 3B, 9, 9C etc." },
                        { step: "04", title: "Claim ITC", desc: "Reclaim input tax credit through sales/purchase data." },
                        { step: "05", title: "Record Keeping", desc: "Maintain records of stock, sales, and purchases." },
                        { step: "06", title: "Audit & Notices", desc: "Conduct GST audits and reply to tax notices." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Trust Vyombiz?",
                    subtitle: "Your partner for end-to-end GST compliance.",
                    list: [
                        { title: "10+ Years Experience", desc: "Expert team of CAs, CS, and auditors." },
                        { title: "Tech Support", desc: "Latest tools and automated systems to reduce errors." },
                        { title: "End-to-End Solutions", desc: "From registration to audit, we handle it all." },
                        { title: "Timely Filings", desc: "Stress-free filing without missing deadlines." },
                        { title: "Customized Solutions", desc: "Tailored services based on your business type." },
                        { title: "Continuous Monitoring", desc: "Real-time updates on GST legislation and rules." },
                        { title: "24/7 Support", desc: "Dedicated support via WhatsApp, Email, and Phone." },
                        { title: "Audit Support", desc: "Hassle-free documentation for tax audits." }
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
