import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle2, AlertTriangle, Shield } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Form MGT-7 Filing Page - Vyombiz
 * Nav sections: Overview | Advantages | Conditions Required |
 *               Documents Required | Process | Form MGT-7 to MGT-7A | FAQs
 */

const FormMGT7 = () => {

    const faqs = [
        {
            question: "What is Form MGT-7?",
            answer: "Form MGT-7 is the company's annual return, which provides details concerning the statement of correctness given by the company. It is mandatory under Section 92(1) of the Companies Act, 2013."
        },
        {
            question: "What is the AOC-4 Form and MGT-7 Form?",
            answer: "Form AOC-4 is filed for submitting financial statements (Balance Sheet, P&L) to the ROC, while Form MGT-7 is the annual return containing details of shareholders, directors, KMPs, and governance disclosures. Both are mandatory annual compliance filings."
        },
        {
            question: "Who is eligible to file MGT-7 Form?",
            answer: "All Public and Private Companies (except Small Companies and OPCs) must file Form MGT-7. Small Companies and One-Person Companies (OPCs) file the simplified Form MGT-7A instead."
        },
        {
            question: "What is MGT-7A Form?",
            answer: "Form MGT-7A is a simplified annual return introduced by the MCA in 2021 specifically for Small Companies and OPCs with paid-up share capital up to Rs. 2 crores and a business turnover not exceeding Rs. 20 crores."
        },
        {
            question: "Who can sign the Annual Return (MGT-7)?",
            answer: "The Annual Return in Form MGT-7 must be signed by a Director and a Company Secretary. If there is no Company Secretary, it must be signed by a Company Secretary in Practice (PCS). For companies with paid-up capital of Rs. 10 crores or more, it must be certified by a PCS."
        },
        {
            question: "What is the due date for filing Form MGT-7?",
            answer: "Form MGT-7 must be filed within 60 days from the conclusion of the Annual General Meeting (AGM). Traditionally, the due date is 29th November of the relevant year."
        },
        {
            question: "What are the penalties for non-filing of Form MGT-7?",
            answer: "An initial penalty of Rs. 100/- per day of default is imposed if the form is not filed within the 60-day deadline. A fixed fine of Rs. 50,000/- to Rs. 5,00,000/- may also be imposed on the company, along with an additional fine of Rs. 100/- per day for continued default."
        }
    ];

    /* ── CUSTOM JSX: Conditions Required ─────────────────── */
    const conditionsContent = (
        <div className="space-y-8">
            {/* Basic Conditions */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Shield size={18} className="text-[#005a9c]" />
                    Checklist for Form MGT-7 Filing
                </h3>
                <div className="grid gap-3">
                    {[
                        "Enterprises established under the Companies Act, 2013 must provide an electronic copy of Form MGT-7 to the Registrar of Companies.",
                        "The small company must be a private organization that does not meet the requirements outlined in Section 2(85) of the Act.",
                        "The company must have authorized and paid-in share capital of Rs. 2 crores, or such higher amount as indicated, but not exceeding Rs. 10 crores.",
                        "The company must have a turnover of not more than Rs. 100 crores, but not less than Rs. 20 crores (or the bigger number as specified).",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Eligible Entities */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <FileText size={18} className="text-[#005a9c]" />
                    Who is Eligible for Form MGT-7 Filing?
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                    {[
                        { label: "All Companies (except OPCs & Small Companies)", badge: "MGT-7" },
                        { label: "Public or Private Companies", badge: "MGT-7" },
                        { label: "Subsidiary or Holding Companies", badge: "MGT-7" },
                        { label: "Companies Registered under Section 8", badge: "MGT-7" },
                        { label: "Parent Corporation of Other Distinct Businesses", badge: "MGT-7" },
                        { label: "A Body Corporate Governed by a Special Act", badge: "MGT-7" },
                        { label: "Other Qualifying Small Enterprises", badge: "MGT-7" },
                        { label: "One-Person Companies (OPCs)", badge: "MGT-7A" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                            <span className="text-[14px] text-slate-700">{item.label}</span>
                            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full shrink-0 ${item.badge === "MGT-7A" ? "bg-amber-100 text-amber-700" : "bg-[#e8f1fb] text-[#005a9c]"}`}>
                                {item.badge}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    /* ── CUSTOM JSX: Form MGT-7 to MGT-7A (Features) ──────── */
    const featuresContent = (
        <div className="space-y-10">
            {/* Key Features of MGT-7A */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <FileText size={18} className="text-[#005a9c]" />
                    Key Features of MGT-7A Form
                </h3>
                <div className="grid gap-3">
                    {[
                        "Form MGT-7 is a legal document in the form of an annual return required to be filed by all companies.",
                        "Form MGT-7 must be mandatorily certified by the Company Secretary.",
                        "Form MGT-7 must be filed with the DSC of directors only.",
                        "Form MGT-7 must be filed to the ROC along with the prescribed fees.",
                        "Form MGT-7 must be filed within sixty days after the conclusion of the company's Annual General Meeting.",
                        "Form MGT-7A must be signed electronically before the deadline.",
                        "Traditionally, the due date for filing Form MGT-7 is 29th of November.",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fees */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Briefcase size={18} className="text-[#005a9c]" />
                    Fees Required for Filing MGT-7A Form
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-[14px]">
                        <thead>
                            <tr className="bg-[#072b47] text-white">
                                <th className="text-left px-5 py-3 font-semibold">Nominal Capital</th>
                                <th className="text-left px-5 py-3 font-semibold">Filing Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Less than Rs. 1,00,000", "Rs. 100"],
                                ["Rs. 1,00,000 – Rs. 4,99,999", "Rs. 300"],
                                ["Rs. 5,00,000 – Rs. 24,99,999", "Rs. 400"],
                                ["Rs. 25,00,000 – Rs. 99,99,999", "Rs. 500"],
                                ["Rs. 1,00,00,000 or more", "Rs. 600"],
                                ["No Share Capital", "Rs. 200"],
                            ].map(([cap, fee], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-5 py-3 text-slate-700">{cap}</td>
                                    <td className="px-5 py-3 font-semibold text-[#005a9c]">{fee}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h4 className="text-[15px] font-bold text-[#072b47] mt-6 mb-3 flex items-center gap-2">
                    <AlertTriangle size={16} className="text-amber-500" />
                    Fees for Delay in Filing MGT-7A Form
                </h4>
                <div className="grid gap-3">
                    {[
                        ["Up to 30 days late", "2× regular filing fees"],
                        ["More than 30 days up to 60 days late", "4× regular filing fees"],
                        ["More than 60 days up to 90 days late", "6× regular filing fees"],
                        ["More than 90 days up to 180 days late", "10× regular filing fees"],
                        ["More than 180 days up to 270 days late", "12× nominal fees"],
                    ].map(([delay, multiplier], i) => (
                        <div key={i} className="flex items-center justify-between gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                            <span className="text-[14px] text-slate-700">{delay}</span>
                            <span className="text-[13px] font-bold text-amber-700 shrink-0">{multiplier}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* MGT-7 vs MGT-7A Comparison */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <FileText size={18} className="text-[#005a9c]" />
                    Difference Between Form MGT-7 and Form MGT-7A
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-[14px]">
                        <thead>
                            <tr className="bg-[#072b47] text-white">
                                <th className="text-left px-4 py-3 font-semibold">Aspect</th>
                                <th className="text-left px-4 py-3 font-semibold">Form MGT-7</th>
                                <th className="text-left px-4 py-3 font-semibold">Form MGT-7A</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Meaning", "Annual return filed under the Companies Act, 2013.", "Simplified annual return for small companies, introduced by MCA in 2021."],
                                ["Purpose", "Comprehensive document covering activities, financials, and governance practices.", "Simplified version of MGT-7 to reduce compliance burden while ensuring essential disclosures."],
                                ["Applicability", "Filed by every public/private company, except small businesses or OPCs.", "Filed by OPCs and Small Companies with paid-up capital ≤ Rs. 2 Cr and turnover ≤ Rs. 20 Cr."],
                                ["Financial Disclosure", "Detailed financial info — shareholders and indebtedness.", "Limited financial and operational data."],
                            ].map(([aspect, mgt7, mgt7a], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-4 py-3 font-semibold text-[#072b47]">{aspect}</td>
                                    <td className="px-4 py-3 text-slate-700">{mgt7}</td>
                                    <td className="px-4 py-3 text-slate-700">{mgt7a}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Consequences */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-red-500" />
                    Consequences of Non-Compliance
                </h3>
                <div className="grid gap-3">
                    {[
                        "Initial penalty of Rs. 100/- per day of default if the OPC fails to submit within the 60-day deadline.",
                        "Fixed fine/penalty of Rs. 50,000/- to Rs. 5,00,000/- if the company fails to comply with filing requirements.",
                        "Additional fine of Rs. 100/- per day for continued delay.",
                        "Any other legal consequences as prescribed under the Companies Act.",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                            <AlertTriangle size={15} className="text-red-500 mt-0.5 shrink-0" />
                            <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Form MGT-7 "
                heroTitleSuffix="Annual Return Filing"
                heroSubtitle="Mandatory Annual Return Filing Under Companies Act, 2013"
                heroDescription="File Form MGT-7 / MGT-7A accurately and on time with Vyombiz expert CA/CS support. We manage document preparation, ROC filing, fee payment, and post-compliance support — ensuring zero penalties."
                whatsIncludedList={[
                    "Document Preparation",
                    "MCA Portal Filing",
                    "ROC Fee Payment",
                    "MGT-7 & MGT-7A Support"
                ]}
                stats={[
                    { count: "10,000+", label: "Annual Returns Filed", icon: <Users size={20} /> },
                    { count: "60 Days", label: "Filing Deadline", icon: <Briefcase size={20} /> },
                    { count: "100%", label: "Compliance Rate", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    advantages: "Advantages",
                    eligibility: "Conditions Required",
                    documents: "Documents Required",
                    process: "Process",
                    features: "Form MGT-7 to MGT-7A",
                    faq: "FAQs"
                }}
                overview={{
                    badge: "Section 92 – Companies Act, 2013",
                    title: "Form MGT-7 Filing –",
                    highlightTitle: "An Overview",
                    description: [
                        "Form MGT-7 filing is a mandatory compliance requirement for all companies to file their annual returns. All companies are obliged to prepare and submit their annual return by filing Form MGT-7, under Section 92(1) of the Companies Act, 2013, read with Rule 11(1) of the Companies (Management and Administration) Rules, 2014.",
                        "The filing of Form MGT-7 allows the Registrar of Companies (ROC) to maintain records electronically, based on the statement of correctness given by the company. Moreover, Form MGT-7 filing provides a comprehensive snapshot of the company's status as of the end of the financial year.",
                        "To get expert assistance in Form MGT-7 filing, talk to our seasoned professionals at Vyombiz.",
                    ],
                    whyIdealTitle: "What is an Annual Return?",
                    whyIdealList: [
                        { title: "Form MGT-7", desc: "Annual Return under Section 92(1) — filed by all companies except Small Companies & OPCs." },
                        { title: "Form MGT-8", desc: "Certification by a Practising Company Secretary (PCS) under Section 92(2)." },
                        { title: "Form MGT-9", desc: "Extract of Annual Return forming part of the Board's Report under Section 92(3)." },
                        { title: "Form MGT-7A", desc: "Simplified Annual Return for Small Companies and OPCs introduced by MCA in 2021." },
                    ]
                }}
                advantages={{
                    title: "Benefits of Filing Form MGT-7 Annual Return",
                    subtitle: "Why timely Annual Return filing matters for your company.",
                    list: [
                        { title: "Maintains Transparency", desc: "Filing Form MGT-7 annual return maintains transparency concerning the company's performance and compliance status." },
                        { title: "Legal Compliance", desc: "Filing Form MGT-7 ensures securing compliance with corporate laws to avoid penalties and legal liabilities." },
                        { title: "Financial Insights", desc: "Provides insights into the company's financial health, shareholder changes, and operational structure." },
                        { title: "Ease of Business", desc: "Form MGT-7 filing facilitates ease of doing business and access to loans, funding, or partnership options." },
                        { title: "Corporate Governance", desc: "Filing Form MGT-7 annual return demonstrates commitment towards good corporate governance practices." },
                        { title: "Enhanced Credibility", desc: "Form MGT-7 filing enhances the company's credibility and reliability towards investors, creditors, and financial institutions." },
                    ]
                }}
                eligibility={conditionsContent}
                documents={{
                    title: "Documents Required for Form MGT-7",
                    description: "The list of documents required for Form MGT-7 annual return filing.",
                    list: [
                        "List of shareholders and debenture holders (mandatory if the company has share capital)",
                        "Letter of approval for extension of AGM (if AGM is extended)",
                        "Copy of MGT-8 (for listed companies or companies with paid-up capital of Rs. 10 crores or more)",
                        "Forms and receipts filed with the Registrar of Companies",
                        "Register of Members and Share Transfer Registers",
                        "Memorandum and Articles of Association (MOA & AOA)",
                        "Directors' disclosure forms for the period prior to annual return certification",
                        "Minutes of Board, AGM, Share Transfer, Remuneration, Audit & Stakeholders Relationship Committees",
                        "Copy of the latest Balance Sheet including notice of AGM",
                        "Intimation concerning change in company's name, face value of equity shares, ISIN, etc.",
                        "Any other document as required by the ROC",
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Procedure for Form MGT-7 Filing",
                    subtitle: "Step-by-step guide to filing your Annual Return with the ROC.",
                    steps: [
                        { step: "01", title: "Document Preparation", desc: "Prepare documents and verify necessary information with the company's statutory registers and records." },
                        { step: "02", title: "Filing of Form MGT-7", desc: "Access the official MCA portal and file Form MGT-7 as of 31st March of the previous year." },
                        { step: "03", title: "Submission of Annual Returns", desc: "Submit all required documents and annual returns on the MCA portal." },
                        { step: "04", title: "Payment of ROC Fees", desc: "Make an online payment of ROC fees for filing Form MGT-7, depending upon the company's authorized capital." },
                        { step: "05", title: "Approval by ROC", desc: "Upon payment of fees, the Registrar of Companies acknowledges and approves all relevant documents duly filed." },
                    ]
                }}
                features={featuresContent}
                whyChooseUs={{
                    title: "Why Trust Vyombiz for Form MGT-7 Filing?",
                    subtitle: "Your partner for seamless, penalty-free annual return compliance.",
                    list: [
                        { title: "10+ Years of Experience", desc: "Our business consultants hold more than 10 years of experience in Form MGT-7 filing, ensuring no hassle for you." },
                        { title: "Customized Packages", desc: "We offer customized packages for Form MGT-7 filing, depending upon the size and type of your company." },
                        { title: "Post-Filing Support", desc: "Vyombiz ensures providing post-compliance support services for filing MGT-7 form annual returns." },
                        { title: "Simplify Paperwork", desc: "We provide assistance to simplify the paperwork and documentation required for filing MGT-7 annual return." },
                        { title: "Timely Submission", desc: "Vyombiz guarantees timely preparation and submissions of prescribed forms before the lapse of the due date." },
                        { title: "Legal Advice", desc: "Vyombiz provides legal advice and regular updates to simplify the legal necessities while filing MGT-7 form." },
                        { title: "End-to-End Solutions", desc: "We provide end-to-end solutions to address queries related to Form MGT-7 filing." },
                        { title: "Affordable Pricing", desc: "Vyombiz offers competitive and affordable pricing for Form MGT-7 filing services in India." },
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on Annual Return Filing Form MGT-7"
                subtitle="Have a look at the answers to the most asked questions"
                faqs={faqs}
            />

        </div>
    );
};

export default FormMGT7;
