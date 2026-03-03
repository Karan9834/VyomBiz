import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * TDSReturnFiling Page matching Vyombiz layout styles
 */

const TDSReturnFiling = () => {

    const faqs = [
        {
            question: "How can I file a TDS return online?",
            answer: "You can file TDS return online by collecting necessary documents, choosing the correct form (24Q, 26Q, etc.), preparing the return using RPU, validating it with FVU, and submitting the generated .fvu file to the TIN-NSDL portal or facilitation centre."
        },
        {
            question: "How to verify the TDS return fund?",
            answer: "After filing, you can verify the status and details by downloading the justification report from the TRACES portal. You can also check Form 26AS to verify if the TDS deducted has been credited."
        },
        {
            question: "What is the procedure for the validation of TDS return income tax?",
            answer: "TDS returns are validated using the File Validation Utility (FVU) provided by NSDL. You need to load your prepared text file and the CSI file (Challan Status Inquiry) into the FVU tool. If there are no errors, an FVU file is generated for submission."
        },
        {
            question: "What happens if I file TDS return late?",
            answer: "Late filing of TDS return attracts a penalty of ₹200 per day under Section 234E until the filing is done, limited to the TDS amount. Additionally, a penalty ranging from ₹10,000 to ₹1,00,000 may be levied under Section 271H."
        },
        {
            question: "Can I revise my TDS return?",
            answer: "Yes, you can file a revised TDS return to correct errors such as incorrect PAN, challan details, or deduction amounts. This is done by filing a correction statement."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="TDS Return Filing"
                heroTitleSuffix="Online"
                heroSubtitle="Quick & Affordable"
                heroDescription="File your TDS return online with expert assistance. Ensure timely, error-free compliance with hassle-free TDS filing services tailored to your business needs. We help you avoid penalties and manage your tax deductions efficiently."
                whatsIncludedList={[
                    "Form 24Q/26Q/27Q Filing",
                    "Challan Verification",
                    "FVU Generation & Validation",
                    "Notice Handling Support"
                ]}
                stats={[
                    { count: "25k+", label: "Clients Served", icon: <Users size={20} /> },
                    { count: "12+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "95%", label: "Risk Reduction", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Quarterly Compliance",
                    title: "TDS Return Filing –",
                    highlightTitle: "An Overview",
                    description: [
                        "TDS (Tax Deducted at Source) return filing is a mandatory quarterly statement submitted to the Income Tax Department. It details the tax collected by the deductor from payments made to deductees (like salary, rent, professional fees) and deposited to the government.",
                        "It is crucial for businesses and professionals to file these returns accurately to ensure regulatory compliance. The filing process involves detailing the PAN of deductees, particulars of tax paid, and challan information.",
                        <strong>What is a TDS Return?</strong>,
                        "A TDS Return is a summary of all TDS-related transactions for a specific quarter. It acts as a record for the Income Tax Department to track the tax deducted and deposited against a PAN.",
                        "Successful filing ensures that the tax credit is reflected in the deductee's Form 26AS, allowing them to claim the credit while filing their Income Tax Return."
                    ],
                    whyIdealTitle: "Forms of TDS Return Filing",
                    whyIdealList: [
                        { title: "Form 24Q", desc: "For TDS on Salaries. Filed quarterly by employers." },
                        { title: "Form 26Q", desc: "For TDS on payments other than salary (Interest, Rent, Professional Fees, etc.) for residents." },
                        { title: "Form 27Q", desc: "For TDS on payments made to Non-Resident Indians (NRIs) and foreigners." },
                        { title: "Form 27EQ", desc: "For TCS (Tax Collected at Source). Filed quarterly by sellers collecting tax." }
                    ]
                }}
                advantages={{
                    title: "Benefits of e-TDS Return Filing",
                    subtitle: "Why timely and accurate filing matters.",
                    list: [
                        { title: "Prevents Tax Evasion", desc: "Ensures transparency and prevents leakage of tax revenue, avoiding scrutiny." },
                        { title: "Reduced Taxpayer Burden", desc: "Deduction at source spreads the tax payment over the year, reducing lump-sum liability." },
                        { title: "Convenience & Efficiency", desc: "Online filing minimizes errors and streamlines the tax collection process." },
                        { title: "Improved Cash Flow", desc: "Helps businesses manage cash flow better by complying with systematic deduction schedules." },
                        { title: "Simplified Reconciliation", desc: "Facilitates easy matching of tax deducted with tax deposited." },
                        { title: "Facilitates Refunds", desc: "Timely filing ensures deductees get their tax credits promptly, aiding their refund claims." }
                    ]
                }}
                eligibility={{
                    title: "Who Needs to File TDS Returns?",
                    subtitle: "Entities eligible and liable for e-TDS return filing.",
                    list: [
                        { title: "Employers", desc: "Organizations with a valid TAN deducting tax on salaries." },
                        { title: "Companies", desc: "All corporate entities making specified payments like contractor fees, rent, etc." },
                        { title: "Firms & LLPs", desc: "Partnership firms and LLPs auditing under tax laws." },
                        { title: "Government Offices", desc: "Govt deductors required to deduct tax on payments." },
                        { title: "Individuals (Sec 44AB)", desc: "Individuals/HUFs subject to tax audit in the preceding year." },
                        { title: "High Value Rent Payers", desc: "Individuals paying rent > ₹50,000/month (deduct @ 5%)." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential details for online submission of TDS return.",
                    list: [
                        "TAN (Tax Deduction Account Number)",
                        "PAN of Deductor and Deductees",
                        "Challan details (CIN, Amount, BSR Code, Date)",
                        "Form 16/16A details",
                        "Date of Incorporation/Birth",
                        "Reporting Quarter & Financial Year",
                        "Bank Account details",
                        "DSC (Digital Signature Certificate) for e-filing"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Procedure for TDS Return Filing",
                    subtitle: "Step-by-step guide to file your TDS return online.",
                    steps: [
                        { step: "01", title: "Collect Documents", desc: "Gather TAN, PANs, and Challan counterfoils." },
                        { step: "02", title: "Choose Form", desc: "Select 24Q, 26Q, 27Q, or 27EQ based on payment type." },
                        { step: "03", title: "Prepare Return", desc: "Use Return Preparation Utility (RPU) to enter details." },
                        { step: "04", title: "Validate", desc: "Validate the file using File Validation Utility (FVU) to generate .fvu file." },
                        { step: "05", title: "Submit", desc: "Upload the .fvu file on the income tax portal or submit at TIN-FC." },
                        { step: "06", title: "Acknowledgement", desc: "Receive the receipt/token number upon successful submission." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Trust Vyombiz?",
                    subtitle: "Your partner for seamless TDS compliance.",
                    list: [
                        { title: "12+ Years Experience", desc: "Trusted by over 25,000 clients." },
                        { title: "Efficient Dashboard", desc: "Tools to save on excess challan payments." },
                        { title: "PAN Verification", desc: "Automated verification of PANs to reduce errors." },
                        { title: "Penalty Protection", desc: "Reduces risk of penalties by over 95%." },
                        { title: "Expert Team", desc: "Professionals versed in latest TDS laws." },
                        { title: "PAN India Presence", desc: "Services available across 100+ cities." },
                        { title: "Timely Filing", desc: "Automated reminders to ensure deadlines are met." },
                        { title: "End-to-End Support", desc: "From calculation to filing and notice handling." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about TDS Return Filing"
                faqs={faqs}
            />

        </div>
    );
};

export default TDSReturnFiling;
