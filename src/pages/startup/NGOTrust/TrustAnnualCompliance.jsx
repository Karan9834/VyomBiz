import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * TrustAnnualCompliance Page matching Vyombiz layout styles
 * Modeled after TrustRegistration.jsx
 */

const TrustAnnualCompliance = () => {

    const faqs = [
        {
            question: "When is the due date for filing ITR for Trusts?",
            answer: "For Trusts where an audit is required, the due date is typically 31st October of the assessment year. For others, it is usually 31st July."
        },
        {
            question: "Is it mandatory to file an Audit Report in Form 10B?",
            answer: "Yes, if the total income of the trust exceeds the maximum amount not chargeable to tax, getting accounts audited and filing Form 10B is mandatory."
        },
        {
            question: "What happens if a Trust fails to comply with annual filings?",
            answer: "Non-compliance can lead to penalties, loss of tax exemptions (like 12A/80G), and even cancellation of the Trust's registration."
        },
        {
            question: "Do Trusts need to file GST returns?",
            answer: "Yes, if the Trust is registered under GST (i.e., its turnover exceeds the threshold or it provides taxable services), it must file monthly/quarterly GST returns."
        },
        {
            question: "What compliance is needed for Foreign Contributions?",
            answer: "Trusts receiving foreign funds must be registered under FCRA and submit an annual return (Form FC-4) to the Ministry of Home Affairs."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Trust Annual"
                heroTitleSuffix="Compliance"
                heroSubtitle="Stay Compliant & Avoid Penalties"
                heroDescription="Ensure your Trust remains legally valid and penalty-free. We handle all annual filings, audits, and statutory compliances for Private and Public Trusts."
                whatsIncludedList={[
                    "Financial Statement Preparation",
                    "Audit Report (Form 10B)",
                    "ITR Filing (ITR-7)",
                    "Annual Compliance Maintenance"
                ]}
                stats={[
                    { count: "1000+", label: "Trusts Managed", icon: <Users size={20} /> },
                    { count: "100%", label: "Timely Filing", icon: <Briefcase size={20} /> },
                    { count: "Expert", label: "CA Support", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Regulatory Adherence",
                    title: "Trust Annual Compliance –",
                    highlightTitle: "An Overview",
                    description: [
                        "A Trust, governed by the Indian Trusts Act, 1882, is a legal entity where a trustee manages assets for beneficiaries. To maintain its legal status and tax exemptions, strict adherence to annual compliance is mandatory.",
                        "Annual compliance involves filing income tax returns, submitting audit reports, and maintaining proper books of accounts. Failure to do so can result in checking the validity of the trust and imposition of heavy penalties.",
                        <strong>Why is it Crucial?</strong>,
                        "Regular compliance ensures transparency in operations and builds credibility with donors and the government.",
                        "It is essential for timely renewal of registrations like 12A and 80G and to avoid any legal roadblocks in the trust's functioning."
                    ],
                    whyIdealTitle: "Key Compliances",
                    whyIdealList: [
                        { title: "ITR Filing", desc: "Filing of Income Tax Return (ITR-7) annually is mandatory for all registered trusts." },
                        { title: "Audit Report", desc: "Submission of Form 10B/10BB audit report if income exceeds exemption limits." },
                        { title: "TDS Returns", desc: "Quarterly filing of TDS returns if the trust deducts tax on payments/salaries." },
                        { title: "FCRA Return", desc: "Annual filing of foreign contribution reports for trusts having FCRA registration." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Annual Compliance",
                    subtitle: "Staying compliant brings long-term stability and benefits to the Trust.",
                    list: [
                        { title: "Legal Validity", desc: "Ensures the continuous legal existence and recognition of the Trust entity." },
                        { title: "Tax Exemptions", desc: "Crucial for continuing to avail tax benefits under Section 11, 12A, and 80G." },
                        { title: "Avoid Penalties", desc: "Prevents the levy of heavy fines and legal notices from the Income Tax Department." },
                        { title: "Donor Trust", desc: "Enhances credibility, encouraging more donations and CSR funding." },
                        { title: "Smooth Operations", desc: "Facilitates seamless banking operations and asset management without legal hurdles." },
                        { title: "Transparency", desc: "Maintains clear financial records, ensuring accountability to trustees and beneficiaries." }
                    ]
                }}
                eligibility={{
                    title: "Who Needs Compliance?",
                    subtitle: "Entities that are required to follow Trust Annual Compliance norms.",
                    list: [
                        { title: "Private Trusts", desc: "Created for the benefit of specific individuals or families (e.g., family trusts)." },
                        { title: "Public Trusts", desc: "Created for the benefit of the general public (charitable/religious trusts)." },
                        { title: "AOPs/BOIs", desc: "Associations of Persons or Bodies of Individuals functioning as trusts." },
                        { title: "Tax Exempt Entities", desc: "Trusts claiming exemptions under 12A/80G must strictly comply." },
                        { title: "FCRA Registered", desc: "Trusts receiving foreign aid have additional compliance under FCRA." },
                        { title: "GST Registered", desc: "Trusts with commercial receipts exceeding GST threshold limits." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for filing Annual Compliance for Trusts.",
                    list: [
                        "PAN Card of the Trust",
                        "Trust Deed & Registration Certificate",
                        "Audited Balance Sheet & P&L Account",
                        "Bank Statements for the Financial Year",
                        "Details of Trustees (KYC, PAN, Aadhaar)",
                        "Record of Donations & Grants received",
                        "TDS Certificates (Form 16/16A)",
                        "Details of Foreign Contributions (if any)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Compliance Checklist",
                    subtitle: "Step-by-step annual obligations for a Trust.",
                    steps: [
                        { step: "01", title: "Bookkeeping", desc: "Maintain proper books of accounts and prepare financial statements." },
                        { step: "02", title: "Statutory Audit", desc: "Get accounts audited by a CA if income exceeds the basic exemption limit." },
                        { step: "03", title: "File Audit Report", desc: "Submit Form 10B/10BB online one month before the due date of ITR." },
                        { step: "04", title: "File ITR-7", desc: "File the Income Tax Return (ITR-7) by the prescribed due date." },
                        { step: "05", title: "Other Filings", desc: "File TDS, GST, and FCRA returns as applicable to the specific trust." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your partner in seamless Trust administration and compliance.",
                    list: [
                        { title: "Experienced Team", desc: "Network of CAs and legal experts with 10+ years of experience." },
                        { title: "Timely Alerts", desc: "Proactive compliance calendar to ensure you never miss a due date." },
                        { title: "End-to-End Mgmt", desc: "From bookkeeping to filing returns, we handle everything." },
                        { title: "FCRA Expertise", desc: "Specialized guidance for trusts handling foreign contributions." },
                        { title: "Audit Support", desc: "Comprehensive support during statutory and internal audits." },
                        { title: "Data Security", desc: "Strict confidentiality and security of your financial data." },
                        { title: "Cost Effective", desc: "Affordable compliance packages tailored for NGOs and Trusts." },
                        { title: "99% Success", desc: "Proven track record of error-free filings and successfully managed trusts." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries regarding Trust Annual Compliance"
                faqs={faqs}
            />

        </div>
    );
};

export default TrustAnnualCompliance;
