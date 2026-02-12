import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Shield
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const AnnualFilingLLP = () => {
    const faqs = [
        {
            question: "What is the fee for the annual filing of LLP with ROC?",
            answer: "The government fee for filing LLP Form 8 and Form 11 depends on the contribution amount of the LLP. Additional fees apply for delayed filing."
        },
        {
            question: "Is audit mandatory for all LLPs?",
            answer: "No, audit is mandatory only if the LLP's turnover exceeds ₹40 lakhs or capital contribution exceeds ₹25 lakhs."
        },
        {
            question: "What happens if I miss the due date for LLP annual filing?",
            answer: "Late filing attracts a penalty of ₹100 per day of delay for each form (Form 8 and Form 11), with no upper limit."
        },
        {
            question: "Can I file LLP annual return myself?",
            answer: "Yes, provided you have the necessary professional knowledge and a valid Digital Signature Certificate (DSC). However, it is recommended to seek professional assistance to avoid errors."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Annual Filing for"
                heroTitleSuffix="LLP"
                heroSubtitle="LLP Compliance Services"
                heroDescription="Ensure timely and accurate annual filing for LLP with Corpbiz. Simplify compliance, avoid penalties, and meet regulatory requirements seamlessly."
                whatsIncludedList={[
                    "Filing of Form 11 (Annual Return)",
                    "Filing of Form 8 (Statement of Accounts)",
                    "Income Tax Return (ITR-5) Filing",
                    "DIR-3 KYC for Partners",
                    "Secretarial Assessment",
                    "Expert Advisory"
                ]}
                stats={[
                    { count: "100%", label: "Compliance", icon: <CheckCircle size={20} /> },
                    { count: "Zero", label: "Penalties", icon: <Shield size={20} /> },
                    { count: "Expert", label: "Support", icon: <Award size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "Annual Filing for LLP - An Overview",
                    imageUrl: "/ISO-overview.jpg",
                    description: [
                        "Is your business structured as a Limited Liability Partnership (LLP)? Struggling with meeting the LLP annual compliance? Leave your worry to professionals at Corpbiz as we ensure timely annual filing for LLP.",
                        "LLP is a distinct legal entity registered under the Ministry of Corporate Affairs (MCA) in India. To stay compliant, LLPs must complete their Annual Filing for LLP, which involves submitting income tax returns and annual returns to the MCA.",
                        "These filings are mandatory to maintain the LLP’s legal status and avoid penalties. Every LLP requires at least two partners, with one being an Indian resident. It is their responsibility to ensure accurate bookkeeping and adherence to compliance requirements."
                    ]
                }}
                advantages={{
                    title: "Benefits of Annual Return Filing",
                    subtitle: "Why is timely filing important?",
                    list: [
                        { title: "Higher Credibility", desc: "Enhances an LLP's credibility, building a strong reputation in the market for loan approvals and partnerships." },
                        { title: "Financial Worth Record", desc: "Creates a reliable financial track record, making the LLP more attractive to investors." },
                        { title: "Penalty-Free Operations", desc: "Ensures the LLP remains active and avoids being declared defunct or facing heavy penalties." },
                        { title: "Simplified Conversion", desc: "Streamlines the process of converting LLPs into other business structures or dissolving partnerships." },
                        { title: "Legal Protection", desc: "Offers legal protection to partners and eliminates risks that can complicate business processes." }
                    ]
                }}
                eligibility={{
                    title: "Prerequisites & Requirements",
                    subtitle: "Checklist for Annual Compliance of LLP",
                    list: [
                        { title: "LLPIN", desc: "Limited Liability Partnership Identification Number to pre-fill forms." },
                        { title: "DSC", desc: "Valid Digital Signature Certificate for designated partners." },
                        { title: "Book of Accounts", desc: "Maintenance of proper books of accounts and financial statements." },
                        { title: "No Bankruptcy", desc: "The LLP should not have declared bankruptcy and should have a clean legal history." },
                        { title: "Contribution Declaration", desc: "Declaration regarding contributions/sums received by all partners." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for annual return filing",
                    imageUrl: "/ISO-document-required.jpg",
                    list: [
                        "Bank statements for all LLP accounts (Apr 1 - Mar 31)",
                        "Credit card statements of partners (if LLP expenses incurred)",
                        "Invoices for purchases and sales",
                        "Invoices for expenses incurred",
                        "Copies of GST/VAT returns",
                        "Copies of TDS challans deposited"
                    ]
                }}
                process={{
                    title: "Filing Process",
                    subtitle: "Step-by-step process of annual filing for LLP",
                    steps: [
                        { step: "01", title: "Prepare Financial Statements", desc: "Gather and compile the LLP’s financial statements like balance sheet and profit & loss account." },
                        { step: "02", title: "Filing of Form 8", desc: "Submit Statement of Account and Solvency within 30 days from the end of six months of the financial year (by Oct 30th)." },
                        { step: "03", title: "Filing of Form 11", desc: "Submit Annual Return within 60 days from the end of the financial year (by May 30th)." },
                        { step: "04", title: "Use DSC", desc: "Designated partners must sign and submit forms electronically using DSC." },
                        { step: "05", title: "Pay Fees", desc: "Make necessary payments along with the forms." },
                        { step: "06", title: "Submit to MCA", desc: "File forms through the MCA portal ensuring timely submission." }
                    ]
                }}
                whyUs={{
                    title: "Important Compliance Deadlines",
                    subtitle: "Key forms and their due dates",
                    list: [
                        { title: "Form 11 (Annual Return)", desc: "Due by 30th May every year. Summary of management affairs." },
                        { title: "Form 8 (Account & Solvency)", desc: "Due by 30th October every year. Details of profits and financial position." },
                        { title: "ITR-5 (Non-Audit)", desc: "Due by 31st July every year if turnover <= ₹40L and contribution <= ₹25L." },
                        { title: "ITR-5 (Audit Case)", desc: "Due by 30th September every year if audit is required." },
                        { title: "Partner KYC", desc: "Due by 30th September every year for all designated partners." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default AnnualFilingLLP;
