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
            question: "What is the due date for filing Form AOC-4?",
            answer: "Form AOC-4 must be filed within 30 days of the Annual General Meeting."
        },
        {
            question: "Can Form AOC-4 be revised after filing?",
            answer: "Yes. In case of errors, companies may need to submit a revised form depending on the circumstances and ROC guidelines."
        },
        {
            question: "Is AOC-4 mandatory for all companies?",
            answer: "Yes. Every company registered under the Companies Act 2013 must submit its financial statements through AOC-4."
        },
        {
            question: "What happens if AOC-4 is not filed?",
            answer: "Failure to file the form can result in penalties, compliance issues, and regulatory action."
        },
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
                    Who Needs to File Form AOC-4?
                </h3>
                <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                    The following companies are required to file Form AOC-4:
                </p>
                <div className="grid gap-3 mb-6">
                    {[
                        "Private Limited Companies",
                        "One Person Companies (OPC)",
                        "Public Limited Companies",
                        "Section 8 Companies",
                        "Companies with financial statements requiring ROC submission",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
                <p className="text-[14px] text-slate-600 leading-relaxed">
                    Any company registered under the Companies Act must file its financial statements through this form after conducting its AGM.
                </p>
                <div className="mt-6">
                    <h4 className="text-[15px] font-bold text-[#072b47] mb-3 flex items-center gap-2">
                        <BarChart2 size={16} className="text-[#005a9c]" />
                        Types of AOC-4 Forms
                    </h4>
                    <div className="grid gap-3 mb-6">
                        {[
                            { title: "AOC-4", desc: "Used by most companies to file their financial statements with ROC." },
                            { title: "AOC-4 XBRL", desc: "Applicable to companies required to file financial statements in XBRL (Extensible Business Reporting Language) format." },
                            { title: "AOC-4 CFS", desc: "Used when companies submit consolidated financial statements for group companies or subsidiaries." },
                        ].map((item, i) => (
                            <div key={i} className="bg-[#e8f1fb] border border-[#c0d8f0] rounded-xl p-4">
                                <p className="text-[13px] font-bold text-[#005a9c] mb-1">{item.title}</p>
                                <p className="text-[13px] text-slate-700 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-[13px] text-slate-600 italic">
                        Our experts at Vyombiz managed by Clink Consultancy Services Private Limited help determine the correct form applicable to your company.
                    </p>
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
                    When Should Form AOC-4 Be Filed?
                </h3>
                <p className="text-[14px] text-slate-600 mb-5 leading-relaxed">
                    Companies must file Form AOC-4 within 30 days from the date of the Annual General Meeting (AGM).
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-[13px]">
                        <thead>
                            <tr className="bg-[#072b47] text-white">
                                <th className="text-left px-4 py-3 font-semibold">Event</th>
                                <th className="text-left px-4 py-3 font-semibold">Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Annual General Meeting", "Conducted annually"],
                                ["Form AOC-4 Filing", "Within 30 days of AGM"],
                                ["Late Filing", "Additional government fees apply"],
                            ].map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-4 py-3 text-slate-700">{row[0]}</td>
                                    <td className="px-4 py-3 font-semibold text-[#005a9c]">{row[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-[13px] text-slate-600 mb-4 leading-relaxed">
                    If a company fails to conduct its AGM, the form must still be filed within 30 days from the last date on which the AGM should have been held.
                </p>
                <p className="text-[13px] text-slate-600 mb-6 leading-relaxed">
                    Experts at Vyombiz managed by Clink Consultancy Services Private Limited ensure that your filings are completed well within the regulatory deadline.
                </p>

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

    /* ─── Penalties (custom JSX → documents slot) ── */
    const penaltiesContent = (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <AlertTriangle size={18} className="text-amber-500" />
                Penalties for Late Filing of AOC-4
            </h3>
            <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                Failure to file Form AOC-4 within the prescribed deadline leads to additional government penalties. Key consequences include:
            </p>
            <div className="grid gap-4">
                {[
                    { label: "Late filing fees", desc: "Late filing fees calculated per day. A fine of Rs. 100 per day is charged for each day Form AOC-4 is not filed by the due date, starting from July 1." },
                    { label: "Compliance status impact", desc: "The company's compliance status with ROC may be adversely affected." },
                    { label: "Legal implications for directors", desc: "Directors, Managing Director, or CFO may face criminal prosecution and imprisonment, or be required to pay a fine, as per the Companies Act, 2013." },
                    { label: "Company Fresh Start Program", desc: "Forms AOC-4 for prior years may be submitted without incurring late fees until September 30, 2020, under the Company Fresh Start Program." },
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
            <p className="text-[13px] text-slate-600 mt-2 leading-relaxed">
                Timely filing is essential to avoid unnecessary financial and legal burdens.
            </p>

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
                heroSubtitle="File Your Form AOC-4 with Accuracy & On-Time Compliance"
                heroDescription="Avoid penalties and ensure smooth corporate compliance with expert-assisted Form AOC-4 filing. Our professionals simplify the process so your company's financial statements are filed correctly with the Registrar of Companies. Stay compliant. Stay stress-free. ✔ Expert-assisted filing ✔ Accurate financial statement submission ✔ Quick and hassle-free process"
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
                    title: "What is Form",
                    highlightTitle: "AOC-4?",
                    description: [
                        "Form AOC-4 is a mandatory compliance form filed by companies in India for submitting their financial statements to the Registrar of Companies (ROC) after the Annual General Meeting (AGM).",
                        "The form includes key financial documents such as the balance sheet, profit & loss account, auditor's report, and director's report. Filing Form AOC-4 ensures transparency and regulatory compliance under the provisions of the Companies Act 2013.",
                        "Businesses that fail to submit this form within the prescribed timeline may face significant penalties and compliance issues.",
                        "To avoid such risks, Vyombiz managed by Clink Consultancy Services Private Limited offers professional support for accurate and timely filing of Form AOC-4, ensuring your company stays compliant with ROC regulations."
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
                    title: "Why Choose Vyombiz for AOC-4 Filing?",
                    subtitle: "Managing compliance requirements can be complex, especially when dealing with financial documentation and regulatory deadlines.",
                    list: [
                        { title: "Expert compliance professionals", desc: "Our team ensures every step follows Companies Act regulations." },
                        { title: "Accurate financial statement filing", desc: "We review your financial statements for completeness and accuracy before submission." },
                        { title: "Timely ROC submission", desc: "We proactively track AGM dates and filing deadlines to ensure your AOC-4 is filed well within the stipulated timeframe." },
                        { title: "End-to-end documentation support", desc: "We help gather and verify all required documents and attachments." },
                        { title: "Transparent pricing with no hidden charges", desc: "Clear pricing and complete transparency throughout the process." },
                        { title: "XBRL Filing Support", desc: "We provide full support for companies required to file in XBRL format — handling tagging, validation, and submission accurately." },
                    ]
                }}
            />

            <FAQLayout
                title="Frequently Asked Questions (FAQs)"
                subtitle="Common questions about Form AOC-4 filing answered by our experts"
                faqs={faqs}
            />
        </div>
    );
};

export default FormAOC4;