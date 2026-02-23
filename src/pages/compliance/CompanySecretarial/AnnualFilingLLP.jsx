import React from "react";
import { Users, Clock, Shield } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const AnnualFilingLLP = () => {
    const faqs = [
        {
            question: "Is annual return for LLP mandatory?",
            answer: "Yes, filing of annual return for LLP is mandatory in India. Every LLP must prepare and submit their annual ROC forms — Form 11 and Form 8 — to the Registrar of Companies."
        },
        {
            question: "What is the fee for the annual filing of LLP with ROC?",
            answer: "The government fee for filing LLP Form 8 and Form 11 depends on the contribution amount of the LLP. Additional late filing fees of ₹100 per day apply for delayed submissions."
        },
        {
            question: "What is the due date for filing the annual return for LLP?",
            answer: "Form 11 (Annual Return) must be filed by May 30th each year, and Form 8 (Statement of Account & Solvency) must be filed by October 30th each year."
        },
        {
            question: "Can LLP be closed without annual filing for LLP?",
            answer: "No. An LLP must clear all pending annual filings before it can be struck off or wound up. Non-compliance with filings will block the closure process."
        },
        {
            question: "Is it mandatory to file ITR for LLP to meet LLP annual compliance requirements?",
            answer: "Yes. Every LLP must file ITR-5 each year. The deadline is July 31st if no audit is required, or September 30th if a tax audit is applicable."
        },
        {
            question: "Can LLP be converted to Pvt Ltd?",
            answer: "Yes, an LLP can be converted to a Private Limited Company under the Companies Act, 2013 using Form URC-1 and Form INC-2, subject to certain conditions."
        },
        {
            question: "What is the penalty for late filing of Form 8 by LLPs?",
            answer: "A penalty of ₹100 per day of delay is applicable from the due date until the actual date of filing. There is no upper limit on this penalty."
        },
        {
            question: "What is the deadline for LLP tax audit and tax filing?",
            answer: "LLPs whose turnover exceeds ₹40 lakh or contributions exceed ₹25 lakh must get their books audited and file ITR-5 by September 30th."
        },
        {
            question: "Why are annual filings for LLP important?",
            answer: "Annual filings maintain the LLP's legal status, prevent it from being struck off, protect partners from personal liability, and ensure transparency with stakeholders and regulators."
        },
        {
            question: "What is the penalty for not filing the annual return for LLP?",
            answer: "Non-compliance attracts a fine ranging between ₹25,000 to ₹5,00,000 on the LLP and its designated partners. Additionally, a daily fine of ₹100 per form applies until the return is filed."
        }
    ];

    const navLabels = {
        overview: "Overview",
        advantages: "Advantages",
        eligibility: "Eligibility Criteria",
        documents: "Documents Required",
        process: "Process",
        features: "Features",
        typesOfCompliance: "Types",
        faq: "FAQs"
    };

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Annual Filing for"
                heroTitleSuffix="LLP"
                heroSubtitle="LLP Compliance Services"
                heroDescription="Ensure timely and accurate annual filing for LLP with Vyombiz. Simplify compliance, avoid penalties, and meet all MCA and Income Tax regulatory requirements seamlessly."
                stats={[
                    { count: "100%", label: "Compliance", icon: <Shield size={20} /> },
                    { count: "Zero", label: "Penalties", icon: <Clock size={20} /> },
                    { count: "97%", label: "Success Rate", icon: <Users size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                navLabels={navLabels}
                overview={{
                    title: "Annual Filing for LLP –",
                    highlightTitle: "An Overview",
                    badge: "MCA & LLP COMPLIANCE",
                    description: [
                        "Is your business structured as a Limited Liability Partnership (LLP)? Struggling with meeting the LLP annual compliance? Leave your worry to professionals at Vyombiz as we ensure timely annual filing for LLP.",
                        "LLP is a distinct legal entity registered under the Ministry of Corporate Affairs (MCA) in India. To stay compliant, LLPs must complete their Annual Filing for LLP, which involves submitting income tax returns and annual returns to the MCA. These filings are mandatory to maintain the LLP's legal status and avoid penalties.",
                        "Every LLP requires at least two partners, with one being an Indian resident. It is their responsibility to ensure accurate bookkeeping and adherence to compliance requirements, securing the LLP's credibility and smooth operations."
                    ],
                    whyIdealTitle: "Why LLP Compliance?",
                    whyIdealList: [
                        { title: "Maintain Legal Status", desc: "Annual filings ensure the LLP remains active and compliant with MCA." },
                        { title: "Avoid Heavy Fines", desc: "Non-compliance can attract fines up to ₹5 lakhs plus ₹100/day." },
                        { title: "Protect Partners", desc: "Filing maintains limited liability protection for all partners." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Annual Return Filing for LLP",
                    subtitle: "Timely filings build credibility, protect partners, and ensure smooth operations.",
                    list: [
                        { title: "Higher Credibility", desc: "Annual return filing enhances an LLP's credibility, building a strong reputation in the market leading to easier loan approvals and better stakeholder relationships." },
                        { title: "Financial Worth Record", desc: "Annual compliance creates a reliable financial track record, making the LLP more attractive to potential investors and business partners." },
                        { title: "Active Status & Penalty-Free", desc: "Regular annual filing ensures the LLP remains active, avoids being declared defunct, stays penalty-free and reduces risk of additional fees." },
                        { title: "Simplified Conversion & Closure", desc: "Consistent filing streamlines the process of converting LLPs into other business structures or dissolving partnerships, saving time and effort." },
                        { title: "Legal Protection", desc: "Annual compliance offers legal protection to all partners in the LLP and eliminates risks that can complicate business operations and disputes." },
                        { title: "Transparency & Accountability", desc: "Regular filing promotes transparency by providing accurate and up-to-date information to stakeholders, regulators, and potential partners." }
                    ]
                }}
                eligibility={{
                    title: "Annual Compliance of LLP – Requirements",
                    subtitle: "Checklist and prerequisites for annual compliance of LLP.",
                    list: [
                        { title: "Book of Accounts", desc: "Maintenance of proper books of accounts is mandatory." },
                        { title: "Form 11 – Annual Return", desc: "Must be filed within 60 days from end of financial year." },
                        { title: "Form 8 – Statements of Accounts", desc: "Must be filed within 30 days from end of six months of FY." },
                        { title: "ITR-5 – Income Tax Return", desc: "Mandatory annual income tax filing for all LLPs." },
                        { title: "Tax Audit (If Applicable)", desc: "Mandatory if turnover exceeds ₹40L or contribution exceeds ₹25L." },
                        { title: "LLPIN", desc: "LLP Identification Number required to pre-fill all forms." },
                        { title: "DSC of Designated Partner", desc: "Valid Digital Signature Certificate for electronic submission." },
                        { title: "Clean Legal History", desc: "LLP should not have declared bankruptcy or have pending legal violations." }
                    ]
                }}
                documents={{
                    title: "Documents Required for Annual Return Filing",
                    description: "Essential documents needed to complete annual compliance filings for LLP:",
                    list: [
                        "Bank statements for all LLP accounts (April 1 to March 31)",
                        "Credit card statements if partners incur expenses on behalf of LLP",
                        "Invoices for purchases and sales made during the financial year",
                        "Invoices for all expenses incurred during the financial year",
                        "Copies of GST, VAT, or other applicable tax returns",
                        "Copies of TDS challans deposited, if applicable",
                        "DSC of both designated partners",
                        "LLP Agreement and Certificate of Incorporation"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                }}
                process={{
                    title: "Process of Annual Filing for LLP",
                    subtitle: "Vyombiz follows a streamlined step-by-step process ensuring timely submissions.",
                    steps: [
                        { step: "01", title: "Prepare Financial Statements", desc: "Gather and compile the LLP's financial statements for the relevant financial year — balance sheet and profit & loss account." },
                        { step: "02", title: "Filing of Form 8", desc: "Submit Statement of Account and Solvency within 30 days from the end of six months of the financial year, typically by October 30th." },
                        { step: "03", title: "Filing of Form 11", desc: "Submit Annual Return within 60 days from the end of the financial year, usually by May 30th, with details about partners and contributions." },
                        { step: "04", title: "Maintain DSC", desc: "Designated partners of LLP must hold a valid Digital Signature Certificate for signing and submitting forms electronically." },
                        { step: "05", title: "Pay Applicable Fees", desc: "Make necessary payments along with the forms for the annual filing return as per the prescribed government fee schedule." },
                        { step: "06", title: "Submit Forms to MCA", desc: "File all necessary forms through the Ministry of Corporate Affairs (MCA) portal, ensuring timely submission to avoid penalties." }
                    ]
                }}
                features={{
                    title: "Why Choose Vyombiz for Annual Filing?",
                    subtitle: "Trusted by thousands of LLPs across India for hassle-free compliance.",
                    list: [
                        { title: "10+ Years of Experience", desc: "Our professionals have more than 10+ years of experience in hassle-free annual filing for LLP compliance." },
                        { title: "Time Efficiency", desc: "Our experts ensure the entire process of annual filing for LLP is managed in a time-efficient manner with timely submissions." },
                        { title: "Minimal Paperwork", desc: "We extend support in preparing and submitting error-free documents for swift annual return filing for LLP in India." },
                        { title: "97% Success Rate", desc: "Our team ensures LLPs meet all statutory obligations with a 97% success rate and simplified process management." },
                        { title: "75% Market Share", desc: "We lead the industry with a 75% market share in annual filing of LLP with ROC, reflecting our excellence in the trade." },
                        { title: "24/7 Support", desc: "Our team resolves 99% of queries promptly, offering round-the-clock support for worry-free annual filing for LLP." }
                    ]
                }}
                typesOfCompliance={{
                    title: "Important Compliance for Annual Filing for LLP",
                    subtitle: "Key forms, deadlines, and obligations every LLP must meet annually.",
                    list: [
                        { title: "LLP Form 3", desc: "Filing of LLP Agreement within 30 days of incorporation — due by 30th May every year." },
                        { title: "Annual Return (Form 11)", desc: "Summary of management affairs to be filed within 60 days of closing the financial year (by May 30th)." },
                        { title: "Statement of Account (Form 8)", desc: "Details of profits and financial position to be filed on or before October 30th each year." },
                        { title: "ITR-5 (No Audit Required)", desc: "For LLPs with turnover ≤ ₹40L or contribution ≤ ₹25L. Filing deadline is July 31st each year." },
                        { title: "ITR-5 (Audit Required)", desc: "For LLPs with turnover > ₹40L or contribution > ₹25L. Must be audited and filed by September 30th." },
                        { title: "Partner KYC", desc: "All designated partners of the LLP must file their KYC on or before 30th September each year." },
                        { title: "Form 3CEB", desc: "Required for LLPs involved in international or specified domestic transactions — due by 30th November." },
                        { title: "Annual Filing Calendar", desc: "Form-8 → Oct 30 | Form-11 → May 30 | ITR-5 → Jul 31 or Sep 30 | Tax Audit → Sep 30." }
                    ]
                }}
            />

            <FAQLayout
                title="LLP Annual Filing FAQs"
                subtitle="Frequently asked questions about Annual Filing for LLP compliance."
                faqs={faqs}
            />
        </div>
    );
};

export default AnnualFilingLLP;
