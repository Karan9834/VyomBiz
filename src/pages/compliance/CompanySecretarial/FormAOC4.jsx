import React from "react";
import {
    Users, Briefcase, Building2, CheckCircle2, FileText,
    Shield, AlertTriangle, Clock, BarChart2, BookOpen
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Form AOC-4 Filing Page - Vyombiz
 * Nav: Overview | Eligibility | Advantages | Tips for Filling | Due Dates | Penalties | FAQs
 */

const FormAOC4 = () => {

    const faqs = [
        {
            question: "What is Form AOC-4?",
            answer: "Form AOC-4 is used to file the financial statements for each financial year with the Registrar of Companies (ROC) under the Companies Act, 2013. It must be filed within 30 days of the Annual General Meeting."
        },
        {
            question: "Who can file Form AOC-4?",
            answer: "Every Indian registered company must file Form AOC-4 for each fiscal year. Companies with paid-up capital of Rs. 5 crores or more, annual revenues of Rs. 100 crores or more, or listed companies must file in XBRL format."
        },
        {
            question: "What Documents are required for filing Form AOC-4?",
            answer: "Required documents include: audited financial statements (Balance Sheet, P&L), Board's Report, Auditor's Report, CSR report (if applicable), and related party transaction disclosures. All documents must be digitally signed."
        },
        {
            question: "What is the penalty for not filing Form AOC-4?",
            answer: "From July 1, a fine of Rs. 100 per day is charged for each day Form AOC-4 is not filed by the due date. Additionally, per the Companies Act 2013, Directors, Managing Director, or CFO may face criminal prosecution and imprisonment."
        },
        {
            question: "Is CA Certificate compulsory for filing Form AOC-4?",
            answer: "Yes, a full-time practicing Chartered Accountant, Cost Accountant, or Company Secretary must certify the form by signing a statement attesting to the correctness and completeness of the information, along with their membership number and status."
        },
        {
            question: "What is the due date of filing Form AOC-4?",
            answer: "Form AOC-4 must be filed within 30 days of the Annual General Meeting. For One Person Companies (OPC), the deadline is within 180 days from the end of the financial year."
        },
        {
            question: "Which Companies are exempted from filing AOC-4 in XBRL?",
            answer: "Companies with paid-up capital below Rs. 5 crores, annual revenues below Rs. 100 crores, and companies not listed on any stock exchange are generally not required to file in XBRL format and may use the standard AOC-4 form."
        },
        {
            question: "What is the relationship between AOC-4 and MGT-7 Form?",
            answer: "Form AOC-4 is for filing financial statements (due within 30 days of AGM). Form MGT-7 is for filing the annual return (due within 60 days of AGM). Both are mandatory annual ROC filings — AOC-4 covers financial data while MGT-7 covers corporate information and shareholding details."
        },
    ];

    /* ─── Eligibility ────────────────────────────────────────── */
    const eligibilityContent = (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Shield size={18} className="text-[#005a9c]" />
                    Eligibility for Filing Form AOC-4
                </h3>
                <div className="grid gap-3 mb-6">
                    {[
                        "Every company incorporated in India must submit financial statements using Form AOC-4. Consolidated financial statements must be submitted using Form AOC-4 CFS.",
                        "Every company subject to Section 135(1) of the Companies Act, 2013 is obliged to submit a CSR report in Form CSR-2 as an attachment to Form AOC-4 or Form XBRL (Ind AS), as appropriate.",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>

                <h4 className="text-[15px] font-bold text-[#072b47] mb-3 flex items-center gap-2">
                    <BarChart2 size={16} className="text-[#005a9c]" />
                    Companies Required to File in XBRL Format
                </h4>
                <div className="grid gap-3 mb-6">
                    {[
                        "All Indian corporations with stock market listings and their Indian subsidiaries.",
                        "All businesses with a minimum paid-up capital of Rs. 2 crores to Rs. 5 crores.",
                        "All businesses with a revenue of Rs. 100 crores or more.",
                        "All businesses that must prepare financial accounts as per the Companies (Indian Accounting Standards) Regulations, 2015.",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#e8f1fb] border border-[#c0d8f0] rounded-xl p-4">
                            <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>

                <h4 className="text-[15px] font-bold text-[#072b47] mb-3">ROC Filing Standards under Companies Act 2013</h4>
                <div className="grid gap-3">
                    {[
                        { label: "Standard Filing", desc: "Financial statements adopted at the AGM must be filed within 30 days of the AGM, along with any applicable charges. For OPC, the period is '2 + 3' months following the end of the financial year." },
                        { label: "Postponed AGM", desc: "Financial statements must be filed within 30 days after a postponed AGM, in addition to any applicable fees." },
                        { label: "Unapproved Statements", desc: "If financial accounts are not approved within 30 days of the AGM, they are treated as preliminary until the final statements have been presented." },
                        { label: "AGM Not Held", desc: "Fees and any additional fees must be paid within 30 days from the date the AGM was supposed to take place. Financial statements and a justification for missing the AGM must be provided." },
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                            <p className="text-[13px] font-bold text-[#005a9c] mb-1">{item.label}</p>
                            <p className="text-[13px] text-slate-700 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    /* ─── Tips for Filling (custom JSX → features slot) ─────── */
    const tipsContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-[#005a9c]" />
                Tips for Filling Form AOC-4
            </h3>
            {[
                {
                    part: "Part A — Balance Sheet Data & Details",
                    tips: [
                        "Enter the CIN of the company. The company's name or registration number can be used to auto-populate the form.",
                        "Use the pre-fill option to auto-populate company name, address, email address, year of establishment, authorized capital, and number of members.",
                        "Provide both the beginning and ending dates of the fiscal year.",
                        "Provide the date of the Board of Directors meeting in which the financial statements and Board's Report were approved.",
                        "Maintain records of the date on which the auditors' reports on the financial statements were signed.",
                        "If an AGM was held, the date of that meeting must be recorded.",
                        "Provide holding or subsidiary company information based on the company's relationship.",
                        "Record the Sections of the Companies Act 2013 under which the subsidiary was constituted.",
                        "Include the auditor's name, membership number, and company registration number.",
                        "Correctly fill in the Company Type and whether Schedule III of the Companies Act 2013 applies.",
                        "Confirm use of computerized accounting and consolidation of financial accounts.",
                    ]
                },
                {
                    part: "Part B — Financial Information (Income Statement)",
                    tips: [
                        "Part B requires a detailed Profit and Loss Statement and all relevant financial criteria.",
                        "Enter all balance sheet data items in full detail as required.",
                    ]
                },
                {
                    part: "Part C — Corporate Social Responsibility (CSR) Reporting",
                    tips: [
                        "CSR must be disclosed under Section 135 of the Companies Act, 2013 alongside income and assets.",
                        "Disclose the average net profit (in Rupees) of the company over the last three financial years.",
                        "The minimum CSR budget should be 2% of the company's average net profit over the preceding three years.",
                        "Tabulate all CSR expenditure activity information.",
                        "If funds were spent via implementing organizations, provide their names, addresses, and contact information.",
                        "The Responsibility Statement of the CSR Committee on implementation and monitoring of CSR policy must include positive or negative information as attached to the Board's Report.",
                    ]
                },
                {
                    part: "Part D — Related Party Transaction Disclosures",
                    tips: [
                        "The specifics of every contract — including those not drafted within typical commercial settings — must be disclosed.",
                    ]
                },
                {
                    part: "Part E — Auditor's Report",
                    tips: [
                        "Section 143 of the Companies Act, 2013 requires notice if the CAG has commented on or amended the audit report (applicable for Government Companies).",
                        "The auditor's critical remarks and how CARO relates to the business must be included.",
                    ]
                },
                {
                    part: "Part F — Miscellaneous",
                    tips: [
                        "This section covers application of the secretarial audit and comprehensive disclosure of the Director's Report.",
                    ]
                },
                {
                    part: "Form AOC-4 Certification",
                    tips: [
                        "A declaration attesting that all information on the form is honest, correct, and compliant must be signed by the Director, Manager, Secretary, CEO, or CFO.",
                        "The Director or Manager/CEO/CFO must digitally sign the paperwork (using DIN or PAN) for validity.",
                        "A full-time practicing Chartered Accountant, Cost Accountant, or Company Secretary must sign an attestation of correctness, along with their membership number and status (fellow or associate).",
                    ]
                },
            ].map((section, i) => (
                <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-[#072b47] px-5 py-3">
                        <p className="text-[13px] font-bold text-white">{section.part}</p>
                    </div>
                    <div className="p-4 grid gap-2">
                        {section.tips.map((tip, j) => (
                            <div key={j} className="flex items-start gap-3 bg-[#f8fbff] rounded-lg px-3 py-2.5">
                                <CheckCircle2 size={14} className="text-[#005a9c] mt-0.5 shrink-0" />
                                <p className="text-[13px] text-slate-700 leading-relaxed">{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

    /* ─── Due Dates (custom JSX → postCompliance slot) ────────── */
    const dueDatesContent = (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-2 flex items-center gap-2">
                    <Clock size={18} className="text-[#005a9c]" />
                    Due Dates for Form AOC-4 Filing
                </h3>
                <p className="text-[14px] text-slate-600 mb-5 leading-relaxed">
                    The AOC-4 form must be submitted within 30 days of the Annual General Meeting. For OPC, within 180 days from the end of the financial year. Late filing attracts a penalty of Rs. 100 per day.
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-[13px]">
                        <thead>
                            <tr className="bg-[#072b47] text-white">
                                <th className="text-left px-4 py-3 font-semibold">E-Form</th>
                                <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                                <th className="text-left px-4 py-3 font-semibold">Periodicity</th>
                                <th className="text-left px-4 py-3 font-semibold">Last Date to File</th>
                                <th className="text-left px-4 py-3 font-semibold">Remark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["AOC-4", "Filing of Financial Statement of Company", "Yearly", "August 2023", "If AGM held between 1st April 2023 to 30th June 2023"],
                                ["AOC-4", "Filing of Financial Statement of Company", "Yearly", "August 2023", "If AGM held between 1st July 2023 to 31st July 2023"],
                            ].map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    {row.map((cell, j) => (
                                        <td key={j} className={`px-4 py-3 ${j === 0 ? "font-bold text-[#005a9c]" : "text-slate-700"}`}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h4 className="text-[15px] font-bold text-[#072b47] mb-3">Who Must File AOC-4 in XBRL Format?</h4>
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                    {[
                        "Companies with paid-up capital of Rs. 5 crores or more.",
                        "Companies with annual revenues of Rs. 100 crores or more.",
                        "Companies listed on the stock exchange in India and their subsidiaries.",
                    ].map((item, i) => (
                        <div key={i} className="bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <CheckCircle2 size={16} className="text-[#005a9c] mb-2" />
                            <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>

                <h4 className="text-[15px] font-bold text-[#072b47] mb-3">Submission Fee Structure for AOC-4</h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-[13px]">
                        <thead>
                            <tr className="bg-[#072b47] text-white">
                                <th className="text-left px-4 py-3 font-semibold">Share Capital Range</th>
                                <th className="text-left px-4 py-3 font-semibold">Fee per Document</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Less than Rs. 1,00,000", "Rs. 200"],
                                ["Rs. 1,00,000 to Rs. 4,99,999", "Rs. 300"],
                                ["Rs. 5,00,000 to Rs. 24,99,999", "Rs. 400"],
                                ["Rs. 1,00,00,000 and above", "Rs. 600"],
                                ["Company without share capital", "Rs. 200"],
                            ].map(([range, fee], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-4 py-3 text-slate-700">{range}</td>
                                    <td className="px-4 py-3 font-semibold text-[#005a9c]">{fee}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    /* ─── Penalties (custom JSX → eligibility slot — we already used it, use process slot) ── */
    const penaltiesContent = (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <AlertTriangle size={18} className="text-amber-500" />
                Penalties for Late Form AOC-4 Submission
            </h3>
            <div className="grid gap-4">
                {[
                    { label: "Daily Penalty (Post July 1)", desc: "A fine of Rs. 100 per day is charged for each day Form AOC-4 is not filed by the due date, starting from July 1." },
                    { label: "Company Fresh Start Program", desc: "Forms AOC-4 for prior years may be submitted without incurring late fees until September 30, 2020, under the Company Fresh Start Program." },
                    { label: "Up to 30 Days Late", desc: "Pay 2× the standard filing fee." },
                    { label: "30 to 60 Days Late", desc: "Pay 4× the standard filing fee." },
                    { label: "90 Days to 180 Days Late", desc: "Pay 10× the standard filing fee." },
                    { label: "180 Days to 270 Days Late", desc: "Pay 12× the standard filing fee." },
                    { label: "Criminal Prosecution", desc: "Directors, Managing Director, or CFO of the company may face criminal prosecution and imprisonment, or be required to pay a fine, as per the Companies Act, 2013." },
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 bg-red-50 border border-red-100 rounded-xl p-4">
                        <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-[14px] font-semibold text-red-700 mb-0.5">{item.label}</p>
                            <p className="text-[13px] text-slate-700 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-5 mt-4">
                <p className="text-[14px] font-bold text-[#072b47] mb-3">Validation & Accreditation — Digital Signatories</p>
                <p className="text-[13px] text-slate-600 mb-3 leading-relaxed">
                    The form's information must be approved and digitally signed by one of the following authorized individuals:
                </p>
                <div className="flex flex-wrap gap-2">
                    {["Director", "Manager", "CFO (Chief Financial Officer)", "CEO (Chief Executive Officer)"].map((role, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 bg-[#e8f1fb] text-[#005a9c] border border-[#c0d8f0] px-3 py-1.5 rounded-full text-[13px] font-medium">
                            <CheckCircle2 size={12} /> {role}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Form AOC-4 "
                heroTitleSuffix="Filing"
                heroSubtitle="Annual Financial Statement Filing with Registrar of Companies — Companies Act 2013"
                heroDescription="File Form AOC-4 accurately and on time with Vyombiz. From XBRL compliance to consolidated financial statements, CSR disclosures, and related party transaction reporting — handled end-to-end by our experts."
                whatsIncludedList={[
                    "Financial Statement Filing (AOC-4)",
                    "XBRL Format Compliance",
                    "CSR Report (Form CSR-2)",
                    "Digital Signing & Certification"
                ]}
                stats={[
                    { count: "30 Days", label: "Filing Deadline Post AGM", icon: <Clock size={20} /> },
                    { count: "Rs. 100", label: "Per Day Late Penalty", icon: <AlertTriangle size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Users size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    eligibility: "Eligibility",
                    advantages: "Advantages",
                    features: "Tips for Filling",
                    postCompliance: "Due Dates",
                    documents: "Penalties",
                    faq: "FAQs"
                }}
                overview={{
                    badge: "Companies Act 2013 — Section 137 | Form AOC-4",
                    title: "Form AOC-4 Filing —",
                    highlightTitle: "An Overview",
                    description: [
                        "The Board of Directors of a company and its shareholders may conduct an evaluation of the firm's performance using the company's financial statements as a reference. The financial statements must be submitted to the Registrar of Companies using MCA Form AOC-4 for each fiscal year. The company must submit the form within 30 days of its Annual General Meeting.",
                        "All Indian registered companies are required to file Form AOC-4 for each fiscal year under the Companies Act, 2013. Any lack or delay in completing the papers may subject the company to fines or penalties.",
                        "To account for the company's actions to its stakeholders, Financial Statements, disclosures, the Board's Report, and the Auditor's Report must all be used. The Company must present Form AOC-4 CFS when submitting consolidated financial statements.",
                    ],
                    whyIdealTitle: "What is Form AOC-4 MCA?",
                    whyIdealList: [
                        { title: "Primary Communication Channel", desc: "Financial Statements are the primary means of communication between the Board of Directors and shareholders, submitted annually via Form AOC-4." },
                        { title: "Mandatory Annual Filing", desc: "During each fiscal year, the Registrar of Companies receives financial statements on Form AOC-4. The Board's Report and Auditor's Report must be included." },
                        { title: "Consolidated Financial Statements", desc: "When submitting consolidated financial statements, the company must present Form AOC-4 CFS alongside the standard Form AOC-4." },
                        { title: "Decision-Making Tool", desc: "Financial statements are advantageous to all stakeholders, investors, and financial institutions as they disclose the company's genuine situation and support decision-making." },
                    ]
                }}
                eligibility={eligibilityContent}
                advantages={{
                    title: "Advantages of Submitting Form AOC-4",
                    subtitle: "Why timely filing of financial statements matters for every company.",
                    list: [
                        { title: "Formal Financial Record", desc: "Financial statements are formal records of a company's financial position and operations, providing shareholders and investors accurate information about true financials." },
                        { title: "Board-Shareholder Communication", desc: "The Board of Directors communicates primarily with its shareholders through financial statements — including the Board's Report and Auditor's Report — submitted via Form AOC-4." },
                        { title: "Accurate Decision-Making", desc: "Since financial statements disclose the company's genuine situation, they aid decision-making by all stakeholders, investors, and financial institutions." },
                        { title: "Regulatory Compliance", desc: "Timely AOC-4 filing ensures full compliance with Section 137 of the Companies Act, 2013 — protecting the company from ROC penalties and legal action." },
                        { title: "Stakeholder Transparency", desc: "The fundamental objective of financial statements is to provide information to a diverse group of stakeholders on a company's financial health, progress, and changes in financial position." },
                        { title: "Legal Standing", desc: "Proper and complete AOC-4 submission maintains the company's good standing with the MCA and avoids notices, fines, or disqualification of directors." },
                    ]
                }}
                documents={penaltiesContent}
                features={tipsContent}
                postCompliance={dueDatesContent}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for Form AOC-4 Filing?",
                    subtitle: "End-to-end assistance for accurate, timely, and compliant AOC-4 filing.",
                    list: [
                        { title: "Expert Financial Statement Review", desc: "Our team reviews your financial statements for completeness and accuracy before submission to avoid any ROC rejection." },
                        { title: "XBRL Filing Support", desc: "We provide full support for companies required to file in XBRL format — handling tagging, validation, and submission accurately." },
                        { title: "CSR-2 Compliance", desc: "We ensure all CSR reporting requirements under Section 135 of the Companies Act, 2013 are correctly captured and attached." },
                        { title: "Digital Signature Coordination", desc: "We coordinate the digital signatures of Directors, CFO, and CEO and ensure timely certification by the practicing CA/CS/CMA." },
                        { title: "Zero Late Penalty Guarantee", desc: "We proactively track AGM dates and filing deadlines to ensure your AOC-4 is filed well within the stipulated timeframe." },
                        { title: "24/7 Expert Availability", desc: "Our compliance experts are available round the clock to address any AOC-4 related queries or urgent filing requirements." },
                    ]
                }}
            />

            <FAQLayout
                title="Frequently Asked Questions on Form AOC-4"
                subtitle="Common questions about Form AOC-4 filing answered by our experts"
                faqs={faqs}
            />
        </div>
    );
};

export default FormAOC4;
