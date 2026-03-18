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
            question: "Who is exempt from filing Income Tax Returns?",
            answer: "Individuals whose income is below the basic exemption limit and non-residents without income sourced from India are generally not required to file an Income Tax Return."
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
                heroTitleMain="Online Income Tax Return"
                heroTitleSuffix="(ITR) Filing"
                heroSubtitle="Trusted ITR Consultant"
                heroDescription="File your Income Tax Return online with expert assistance. Ensure accurate filing, avoid penalties, and stay fully compliant with secure and timely ITR services. Our professionals help you claim eligible deductions and maximize your tax refunds."
                whatsIncludedList={[
                    "E-Filing of ITR",
                    "Tax Planning & Advisory",
                    "Maximizing Tax Refunds",
                    "Notice Handling Support"
                ]}
                stats={[
                    { count: "1M+", label: "Tax Returns Filed", icon: <Users size={20} /> },
                    { count: "10+", label: "Years of Tax Expertise", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Filing Accuracy", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Quick and Hassle-Free ITR Filing",
                    title: "Overview of",
                    highlightTitle: "Income Tax Return Filing",
                    description: [
                        "Income Tax Return (ITR) filing is the process of reporting the income earned during a financial year to the Income Tax Department. Taxpayers can file their returns online through the official income tax portal. In most cases, the deadline for filing ITR in India is 31st July of the assessment year.",
                        "Filing ITR is mandatory for individuals and entities whose income exceeds the basic exemption limit. It also allows taxpayers such as salaried employees, businesses, and HUFs to claim deductions and exemptions under provisions like Section 80C, 80D, and HRA of the Income Tax Act, 1961.",
                        <strong>What is an Income Tax Return (ITR)?</strong>,
                        "Income Tax Return (ITR) is a form used by taxpayers to report their income, deductions, and tax liabilities to the Income Tax Department. It provides a detailed summary of a taxpayer's financial activities and the tax payable or refundable for the year.",
                        "Filing ITR helps individuals stay compliant with tax laws and maintain financial transparency. It also acts as valid proof of income required for various financial and legal processes."
                    ],
                    whyIdealTitle: "Major Heads of Taxable Income",
                    whyIdealList: [
                        { title: "Salary Income", desc: "Income earned from employment including salary, allowances, bonuses, and other benefits." },
                        { title: "Income from House Property", desc: "Income received from renting residential or commercial property." },
                        { title: "Business or Professional Income", desc: "Profits generated from business operations or professional services." },
                        { title: "Capital Gains", desc: "Income arising from the sale of assets such as property, shares, or investments." },
                        { title: "Income from Other Sources", desc: "Includes interest income, dividends, lottery winnings, and other miscellaneous earnings." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Filing Income Tax Returns",
                    subtitle: "Why you should file your ITR on time.",
                    list: [
                        { title: "Smooth Loan Approvals", desc: "Banks often require ITR as proof of income when processing loan or credit applications." },
                        { title: "Reliable Income Proof", desc: "Acts as official documentation of your earnings and financial status." },
                        { title: "Faster Visa Applications", desc: "ITR is commonly required for visa processing as proof of financial stability." },
                        { title: "Claim Tax Refunds", desc: "Helps taxpayers recover excess tax deducted during the year." },
                        { title: "Carry Forward Losses", desc: "Allows businesses to offset losses against profits in future years." },
                        { title: "Avoid Penalties", desc: "Timely filing prevents penalties and interest charges for non-compliance." }
                    ]
                }}
                eligibility={{
                    title: "Who Should File Income Tax Returns?",
                    subtitle: "Who is liable to file Income Tax Return in India?",
                    list: [
                        { title: "Salaried Individuals", desc: "Individuals whose income exceeds the basic exemption limit." },
                        { title: "Company Directors & Partners", desc: "Individuals serving as company directors or partners in firms." },
                        { title: "Foreign Asset Holders", desc: "Residents holding foreign assets or having signing authority abroad." },
                        { title: "High-Value Financial Transactions", desc: "Individuals making large deposits or transactions beyond specified limits." },
                        { title: "Senior & Super Senior Citizens", desc: "Individuals aged 60 years or above with taxable income." },
                        { title: "Business Owners & Professionals", desc: "Businesses, MSMEs, LLPs, and professionals earning taxable income." }
                    ]
                }}
                documents={{
                    title: "Documents Required for ITR Filing",
                    description: "Checklist of documents needed for ITR filing.",
                    list: [
                        "PAN Card and Aadhaar Card",
                        "Form 16 (for salaried individuals)",
                        "Form 26AS and AIS/TIS reports",
                        "Bank account statements",
                        "Interest certificates from banks",
                        "Investment proof for deductions",
                        "Home loan interest certificate",
                        "Capital gains statements",
                        "Rental income information",
                        "Details of foreign assets (if applicable)"
                    ],
                    imageUrl: "Documents.jpg"
                }}
                process={{
                    title: "Steps to File Income Tax Return Online",
                    subtitle: "Step-by-step process for filing your return.",
                    steps: [
                        { step: "01", title: "Login to Portal", desc: "Visit Income Tax e-filing portal and login with PAN/User ID." },
                        { step: "02", title: "Select Assessment Year", desc: "Select Assessment Year and enter required details." },
                        { step: "03", title: "Choose Taxpayer Category", desc: "Choose status (Individual, HUF, Firm, etc.) and ITR Form." },
                        { step: "04", title: "Enter Income & Deduction Details", desc: "Enter income details, claim deductions, and validate tax liability." },
                        { step: "05", title: "Verify the Return", desc: "E-verify the return using Aadhaar OTP or Net Banking." },
                        { step: "06", title: "Submit Return & Download ITR-V", desc: "Submit the form and receive acknowledgement (ITR-V)." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for ITR Filing?",
                    subtitle: "Expert consultancy for seamless ITR filing.",
                    list: [
                        { title: "Expert Tax Professionals", desc: "Guidance from experienced CAs and tax advisors." },
                        { title: "Smart Tax Planning", desc: "Strategic tax planning to minimize liability." },
                        { title: "NRI Tax Filing Support", desc: "Specialized services for NRI tax compliance." },
                        { title: "Income Tax Notice Assistance", desc: "Expert support in handling income tax notices." },
                        { title: "Affordable Filing Packages", desc: "Affordable services offering value for money." },
                        { title: "Secure Data Protection", desc: "100% secure and confidential data handling." },
                        { title: "High Accuracy Filing", desc: "Error-free filing to avoid defective returns." },
                        { title: "24/7 Customer Support", desc: "24/7 customer assistance for all tax queries." }
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