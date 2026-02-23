import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * IncomeTaxReturnFiling Page matching Vyombiz layout styles
 */

const IncomeTaxReturnFiling = () => {

    const faqs = [
        {
            question: "Who are exempted from filing income tax returns?",
            answer: "Individuals having a total income less than the basic tax exemption limit and Non-residents not having income accruing or arising from India are exempted."
        },
        {
            question: "What are the five heads of income in the Indian taxation system?",
            answer: "The five heads are: Income from Salary, Income from Business and Profession, Income from Capital Gains, Income from House Property, and Income from Other Sources."
        },
        {
            question: "What are the different types of Income Tax Return (ITR) forms?",
            answer: "Key forms include ITR-1 (Sahaj) for resident individuals with income up to ₹50L, ITR-2 for individuals/HUFs with capital gains, ITR-3 for business professionals, ITR-4 (Sugam) for presumptive taxation cases, and ITR-5/6/7 for firms, companies, and trusts."
        },
        {
            question: "What is ITR-V?",
            answer: "ITR-V is the verification form issued after e-filing your return without a digital signature. It must be verified using Aadhaar OTP, EVC, or by sending a signed copy to CPC Bangalore."
        },
        {
            question: "Is it mandatory to file ITR if TDS is deducted?",
            answer: "Yes, filing ITR is mandatory to claim a refund of the excess TDS deducted if your total tax liability is lower than the TDS amount."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Income Tax Return Filing"
                heroTitleSuffix="Online"
                heroSubtitle="Trusted ITR Consultant"
                heroDescription="E-file your Income Tax Return filing with our expert help. Ensure accuracy, avoid penalties, and stay compliant with easy, secure, and timely ITR filing services. We help you maximize deductions and claim refunds."
                whatsIncludedList={[
                    "E-Filing of ITR",
                    "Tax Planning & Advisory",
                    "Maximizing Tax Refunds",
                    "Notice Handling Support"
                ]}
                stats={[
                    { count: "10M+", label: "Taxpayers Supported", icon: <Users size={20} /> },
                    { count: "10+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Accuracy Rate", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "File ITR in Minutes",
                    title: "Income Tax Return Filing –",
                    highlightTitle: "An Overview",
                    description: [
                        "Income Tax Return (ITR) filing is the process through which a taxpayer records their total income earned during the fiscal year. Individuals can file their ITR through the Income Tax Department’s official portal. The due date for income tax e-filing in India is typically July 31st of every assessment year.",
                        "ITR filing is a legal obligation for individuals and entities earning above the basic exemption limit. It enables firms, HUFs, and salaried individuals to claim eligible deductions and exemptions under sections 80C, 80D, and HRA of the Income Tax Act, 1961.",
                        <strong>What is ITR?</strong>,
                        "ITR stands for Income Tax Return, a form used to file details about an individual’s income and applicable tax to the Income Tax Department. It is a formal declaration of financial status, revenue sources, deductions, and tax payable or refundable.",
                        "Filing ITR is an important part of fulfilling tax responsibilities and maintaining financial discipline. It serves as a proof of income and is essential for various financial transactions."
                    ],
                    whyIdealTitle: "Types of Taxable Income",
                    whyIdealList: [
                        { title: "Salary Income", desc: "Income received from an employer including allowances and perquisites." },
                        { title: "House Property", desc: "Income earned from rental property." },
                        { title: "Business/Profession", desc: "Profits and gains from business or professional services." },
                        { title: "Capital Gains", desc: "Profits from the sale of capital assets like property or stocks." },
                        { title: "Other Sources", desc: "Interest, dividends, lottery winnings, etc." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Income Tax Return Filing",
                    subtitle: "Why you should file your ITR on time.",
                    list: [
                        { title: "Easy Loan Approval", desc: "Facilitates easy loan processing and approvals as banks require ITR as proof of income repayment capacity." },
                        { title: "Proof of Income", desc: "Serves as a valid proof of financial situation, income, and assets for various legal and financial purposes." },
                        { title: "Quick Visa Processing", desc: "Mandatory for visa applications to many countries, serving as verified proof of income and tax compliance." },
                        { title: "Claim Tax Refund", desc: "Allows individuals to claim refunds if the tax deducted (TDS) is higher than the actual tax liability." },
                        { title: "Compensate for Losses", desc: "Enables business owners to carry forward losses to subsequent years for set-off against future profits." },
                        { title: "Avoid Penalties", desc: "Crucial for avoiding penalties and interest under the Income Tax Act for non-compliance or late filing." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who is liable to file Income Tax Return in India?",
                    list: [
                        { title: "Salaried Individuals", desc: "Individuals with total income exceeding the basic exemption limit." },
                        { title: "Directors & Partners", desc: "Individuals serving as directors in a company or partners in a firm." },
                        { title: "Foreign Assets", desc: "Resident taxpayers holding assets or signing authority outside India." },
                        { title: "High Value Transactions", desc: "Individuals who have deposited > ₹1Cr in current accounts or > ₹50L in savings." },
                        { title: "Senior Citizens", desc: "Individuals aged 60-80 years and Super Senior Citizens > 80 years with taxable income." },
                        { title: "Business Owners", desc: "SMEs, MSMEs, LLPs, partnerships, and companies regardless of profit/loss." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Checklist of documents needed for ITR filing.",
                    list: [
                        "PAN Card & Aadhaar Card",
                        "Form-16 (for Salaried)",
                        "Form-26AS & AIS/TIS",
                        "Bank Account Statements",
                        "Interest Certificates (Savings/FD)",
                        "Proof of Tax Saving Investments (80C, 80D)",
                        "Home Loan Interest Certificate",
                        "Capital Gains Statements",
                        "Rental Income details",
                        "Details of Foreign Assets (if any)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "How to File ITR Online?",
                    subtitle: "Step-by-step process for filing your return.",
                    steps: [
                        { step: "01", title: "Login", desc: "Visit Income Tax e-filing portal and login with PAN/User ID." },
                        { step: "02", title: "Details", desc: "Select Assessment Year and enter required details." },
                        { step: "03", title: "Select Status", desc: "Choose status (Individual, HUF, Firm, etc.) and ITR Form." },
                        { step: "04", title: "Fill Form", desc: "Enter income details, claim deductions, and validate tax liability." },
                        { step: "05", title: "Verification", desc: "E-verify the return using Aadhaar OTP or Net Banking." },
                        { step: "06", title: "Submission", desc: "Submit the form and receive acknowledgement (ITR-V)." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Partner with Vyombiz?",
                    subtitle: "Expert consultancy for seamless ITR filing.",
                    list: [
                        { title: "Expert Assistance", desc: "Team of dedicated tax experts and CAs." },
                        { title: "Tax Planning", desc: "Strategic tax planning to minimize liability." },
                        { title: "NRI Tax Filing", desc: "Specialized services for NRI tax compliance." },
                        { title: "Notice Handling", desc: "Expert support in handling income tax notices." },
                        { title: "Cost-Effective", desc: "Affordable services offering value for money." },
                        { title: "Data Security", desc: "100% secure and confidential data handling." },
                        { title: "Accuracy", desc: "Error-free filing to avoid defective returns." },
                        { title: "Support", desc: "24/7 customer assistance for all tax queries." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Income Tax Return Filing"
                faqs={faqs}
            />

        </div>
    );
};

export default IncomeTaxReturnFiling;
