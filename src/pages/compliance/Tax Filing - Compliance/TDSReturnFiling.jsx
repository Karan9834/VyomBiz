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
            question: "How do I file a TDS return online?",
            answer: "To file a TDS return online, you need to collect required details, select the correct TDS form, prepare the return using the Return Preparation Utility (RPU), validate it through the File Validation Utility (FVU), and upload the validated file to the Income Tax portal or through a TIN facilitation centre."
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
                heroTitleSuffix="Online in India"
                heroSubtitle="Quick & Affordable"
                heroDescription="File your TDS returns online with professional support. Our experts help you prepare and submit accurate TDS returns on time, ensuring full compliance with tax regulations. Avoid penalties, reduce errors, and manage your tax deductions smoothly with our guided filing services."
                whatsIncludedList={[
                    "Form 24Q/26Q/27Q Filing",
                    "Challan Verification",
                    "FVU Generation & Validation",
                    "Notice Handling Support"
                ]}
                stats={[
                    { count: "30,000+", label: "Businesses Served", icon: <Users size={20} /> },
                    { count: "10+", label: "Years of Compliance Experience", icon: <Briefcase size={20} /> },
                    { count: "98%", label: "Filing Accuracy Rate", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Quarterly Compliance",
                    title: "Overview of",
                    highlightTitle: "TDS Return Filing",
                    description: [
                        "TDS Return Filing is a quarterly compliance requirement where taxpayers report the tax deducted at source on payments such as salary, rent, interest, or professional fees. These details must be submitted to the Income Tax Department after depositing the deducted tax with the government.",
                        "Businesses and deductors must file accurate TDS returns to maintain compliance and ensure that the deducted tax is properly recorded against the recipient's PAN.",
                        <strong>What is a TDS Return?</strong>,
                        "A TDS Return is a quarterly statement that summarizes all tax deductions made by a deductor during a particular period. It includes information such as PAN details, deduction amounts, challan details, and the type of payment on which tax was deducted.",
                        "Once the return is filed successfully, the deducted tax appears in the deductee's Form 26AS, allowing them to claim the tax credit while filing their Income Tax Return."
                    ],
                    whyIdealTitle: "Types of TDS Return Forms",
                    whyIdealList: [
                        { title: "Form 24Q", desc: "Used for reporting TDS deducted from salary payments made by employers to employees." },
                        { title: "Form 26Q", desc: "Filed for TDS deductions on non-salary payments such as interest, commission, rent, and professional fees to residents." },
                        { title: "Form 27Q", desc: "Applicable for reporting TDS deducted on payments made to Non-Resident Indians (NRIs) and foreign entities." },
                        { title: "Form 27EQ", desc: "Used for reporting Tax Collected at Source (TCS) by sellers on specific goods and services." }
                    ]
                }}
                advantages={{
                    title: "Advantages of Filing TDS Returns Online",
                    subtitle: "Why timely and accurate filing matters.",
                    list: [
                        { title: "Ensures Tax Transparency", desc: "Maintains transparency in tax deductions and ensures proper reporting to authorities." },
                        { title: "Better Tax Management", desc: "Distributes tax payments across the year, reducing financial burden during annual filing." },
                        { title: "Easy Digital Filing", desc: "Online systems simplify filing, reduce paperwork, and minimize calculation errors." },
                        { title: "Improved Cash Flow Planning", desc: "Regular deductions help businesses plan finances more effectively." },
                        { title: "Simple Reconciliation", desc: "Makes it easier to match deductions with government records." },
                        { title: "Faster Tax Credit Availability", desc: "Ensures deductees receive tax credit in Form 26AS without delays." }
                    ]
                }}
                eligibility={{
                    title: "Who is Required to File TDS Returns?",
                    subtitle: "Entities eligible and liable for e-TDS return filing.",
                    list: [
                        { title: "Employers", desc: "Companies and organizations deducting tax from employee salaries." },
                        { title: "Companies", desc: "Corporate entities making payments subject to TDS such as contractor fees, rent, and commission." },
                        { title: "Partnership Firms & LLPs", desc: "Businesses required to deduct TDS under income tax provisions." },
                        { title: "Government Departments", desc: "Government bodies making payments that require TDS deduction." },
                        { title: "Individuals & HUFs Under Tax Audit", desc: "Individuals/HUFs subject to tax audit in the preceding year." },
                        { title: "High-Value Rent Payers", desc: "Individuals paying rent exceeding ₹50,000 per month." }
                    ]
                }}
                documents={{
                    title: "Documents Required for TDS Return Filing",
                    description: "Essential details for online submission of TDS return.",
                    list: [
                        "TAN (Tax Deduction Account Number)",
                        "PAN of Deductor and Deductees",
                        "Challan payment details",
                        "Form 16 or Form 16A information",
                        "Quarter and Financial Year details",
                        "Bank account information",
                        "Digital Signature Certificate (DSC)"
                    ],
                    imageUrl: "Documents.jpg"
                }}
                process={{
                    title: "Step-by-Step Process for Filing TDS Returns",
                    subtitle: "Step-by-step guide to file your TDS return online.",
                    steps: [
                        { step: "01", title: "Collect Required Details", desc: "Prepare TAN, PAN details, challan information, and deduction records." },
                        { step: "02", title: "Select the Appropriate Form", desc: "Select 24Q, 26Q, 27Q, or 27EQ based on payment type." },
                        { step: "03", title: "Prepare the Return File", desc: "Use Return Preparation Utility (RPU) to enter details." },
                        { step: "04", title: "Validate Using FVU Tool", desc: "Validate the file using File Validation Utility (FVU) to generate .fvu file." },
                        { step: "05", title: "Upload Return on the Income Tax Portal", desc: "Upload the .fvu file on the income tax portal or submit at TIN-FC." },
                        { step: "06", title: "Receive Acknowledgement Number", desc: "Receive the receipt/token number upon successful submission." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for TDS Return Filing?",
                    subtitle: "Your partner for seamless TDS compliance.",
                    list: [
                        { title: "Experienced Compliance Experts", desc: "Trusted by thousands of businesses across India." },
                        { title: "Smart Compliance Dashboard", desc: "Tools to save on excess challan payments." },
                        { title: "Automated PAN Verification", desc: "Automated verification of PANs to reduce errors." },
                        { title: "Reduced Risk of Penalties", desc: "Reduces risk of penalties by over 95%." },
                        { title: "Expert Team", desc: "Professionals versed in latest TDS laws." },
                        { title: "Nationwide Service Coverage", desc: "Services available across 100+ cities." },
                        { title: "Deadline Alerts & Timely Filing", desc: "Automated reminders to ensure deadlines are met." },
                        { title: "Complete Filing Assistance", desc: "From calculation to filing and notice handling." }
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