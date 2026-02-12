import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Annual Compliance of a Pvt Ltd Company Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section (Left Content, Right Form)
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Benefits Section
 * 5. Checklist/Due Dates
 * 6. Documents Required
 * 7. Process/Filings
 * 8. Why Choose Us
 * 9. FAQ
 */

const AnnualComplianceofaPvtLtdCompany = () => {

    const faqs = [
        {
            question: "What happens if we miss the annual filing deadline?",
            answer: "Missing deadlines for AOC-4 and MGT-7 attracts an additional fee of ₹100 per day until the date of filing. Directors may also face disqualification and prosecution for continued default."
        },
        {
            question: "Is it mandatory to hold an AGM every year?",
            answer: "Yes, every Private Limited Company must hold an Annual General Meeting (AGM) within 6 months from the end of the financial year (i.e., by 30th September)."
        },
        {
            question: "What is DIR-3 KYC?",
            answer: "DIR-3 KYC is an annual compliance for every director holding a DIN. It must be filed by 30th September every year. Non-filing attracts a penalty of ₹5,000."
        },
        {
            question: "Do we need to file returns even if there is no business?",
            answer: "Yes, even a dormant or inactive company must file 'Nil' returns to maintain its compliance status and avoid being struck off by the ROC."
        },
        {
            question: "What is the form for appointment of Auditor?",
            answer: "Form ADT-1 is used to intimate the ROC about the appointment of the Statutory Auditor. It must be filed within 15 days of the AGM."
        },
        {
            question: "What is the penalty for not filing DPT-3?",
            answer: "Non-filing of DPT-3 (Return of Deposits) can lead to severe penalties, including fines on the company and its officers, as it is a critical disclosure of company indebtedness."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Annual Compliance "
                heroTitleSuffix="for Pvt Ltd Company"
                heroSubtitle="Stay Compliant, Avoid Penalties"
                heroDescription="Comprehensive annual filing solutions for Private Limited Companies. We handle AOC-4, MGT-7, ITR filing, and Director KYC to ensure your business remains in good legal standing."
                whatsIncludedList={[
                    "AOC-4 & MGT-7 Filing",
                    "Director KYC (DIR-3)",
                    "Income Tax Return (ITR-6)",
                    "Statutory Register Maintenance"
                ]}
                stats={[
                    { count: "30th Sept", label: "AGM Deadline", icon: <Users size={20} /> },
                    { count: "Zero", label: "Penalties", icon: <Briefcase size={20} /> },
                    { count: "100%", label: "Online", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Companies Act, 2013",
                    title: "Mandatory Compliance –",
                    highlightTitle: "Overview",
                    description: [
                        "Every Private Limited Company registered in India must strictly adhere to the compliance requirements laid down by the Companies Act, 2013.",
                        "This involves the mandatory filing of annual returns, financial statements, and income tax returns, irrespective of the company's turnover or activity status.",
                        "Failure to comply can result in hefty penalties, disqualification of directors, and even the striking off of the company's name by the ROC."
                    ],
                    whyIdealTitle: "Key Benefits",
                    whyIdealList: [
                        { title: "Avoid Penalties", desc: "Timely filing saves lakhs in additional fees and compounding charges." },
                        { title: "Credibility", desc: "A compliant company enjoys better creditworthiness with banks and investors." },
                        { title: "Active Status", desc: "Ensures the company status remains 'Active' on the MCA master data." },
                        { title: "Director Safety", desc: "Protects directors from disqualification (DIN deactivation) and prosecution." },
                        { title: "Funding", desc: "Investors conduct due diligence; a compliant company is easier to fund." }
                    ]
                }}
                advantages={{
                    title: "Compliance Checklist",
                    subtitle: "Major Filings & Deadlines",
                    list: [
                        { title: "First Board Meeting", desc: "Within 30 days of incorporation." },
                        { title: "Subsequent BMs", desc: "Minimum 4 meetings in a year (Max gap 120 days)." },
                        { title: "Auditor Appointment", desc: "Form ADT-1 within 15 days of AGM (for 5 years)." },
                        { title: "DIR-3 KYC", desc: "Annual KYC for all directors by 30th September." },
                        { title: "AOC-4", desc: "Filing of Financial Statements (30 days from AGM)." },
                        { title: "MGT-7", desc: "Filing of Annual Return (60 days from AGM)." },
                        { title: "ITR-6", desc: "Income Tax Return filing by 30th September (Audit cases)." },
                        { title: "DPT-3", desc: "Return of Deposits by 30th June every year." }
                    ]
                }}
                eligibility={{
                    title: "Event-Based",
                    subtitle: "Other Compliances",
                    list: [
                        { title: "Commencement (INC-20A)", desc: "Declaration within 180 days of incorporation." },
                        { title: "Director Change (DIR-12)", desc: "To be filed within 30 days of appointment/resignation." },
                        { title: "Reg. Office Change (INC-22)", desc: "To be filed within 30 days of shifting the office." },
                        { title: "Increase Capital (SH-7)", desc: "To be filed within 30 days of increasing Authorized Capital." },
                        { title: "MSME-1", desc: "Half-yearly return for outstanding payments to MSMEs (Apr/Oct)." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "For Annual Filing:",
                    list: [
                        "Duly Audited Financial Statements (Balance Sheet, P&L, Notes)",
                        "Directors' Report",
                        "Auditors' Report",
                        "Notice of AGM",
                        "Board Resolution Checklist",
                        "List of Shareholders & Debenture holders",
                        "DSC of one Director and Professional (CS/CA)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Filing Process",
                    subtitle: "Step-by-step Annual Filing",
                    steps: [
                        { step: "01", title: "Book Keeping", desc: "Maintain proper books of accounts throughout the year." },
                        { step: "02", title: "Audit", desc: "Get accounts audited by the Statutory Auditor." },
                        { step: "03", title: "Board Meeting", desc: "Approve Financials and call for AGM." },
                        { step: "04", title: "AGM", desc: "Hold Annual General Meeting to adopt accounts." },
                        { step: "05", title: "AOC-4 Filing", desc: "File Balance Sheet & P&L with ROC." },
                        { step: "06", title: "MGT-7 Filing", desc: "File Annual Return with ROC." },
                        { step: "07", title: "Income Tax", desc: "File Income Tax Return (ITR)." },
                        { step: "08", title: "Records", desc: "Update Statutory Registers and Minutes Books." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your Compliance Partner",
                    list: [
                        { title: "Dedicated Team", desc: "Expert CAs and CSs to handle your filings." },
                        { title: "Timely Alerts", desc: "We track deadlines so you never pay penalties." },
                        { title: "Audit Support", desc: "Assistance in coordinating with auditors." },
                        { title: "Digital Filing", desc: "100% online process with secure data handling." },
                        { title: "Drafting", desc: "Professional drafting of Board Reports and Minutes." },
                        { title: "Cost Effective", desc: "Affordable annual retainer packages." },
                        { title: "Error Free", desc: "Rigorous checks to ensure accurate reporting." },
                        { title: "Advisory", desc: "Ongoing consultation on company law matters." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Annual Compliance"
                faqs={faqs}
            />

        </div>
    );
};

export default AnnualComplianceofaPvtLtdCompany;
