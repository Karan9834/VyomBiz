import React from "react";
import { CheckCircle2, AlertTriangle, Clock, Users, FileText, Shield, BookOpen, BarChart2, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * MCA Compliance
 * Nav: Overview | Importance | MCA Compliance | Types | Forms Required | Calendar | Penalties | FAQs
 */
const MCACompliance = () => {
    const faqs = [
        { question: "What are MCA compliances?", answer: "MCA compliance refers to the company's adherence to laws and regulations set forth by the MCA, ensuring the maintenance of transparency, accountability, and good governance. It helps companies legally build trust with stakeholders and attract investors for more funding options." },
        { question: "What is active compliance in MCA?", answer: "Active compliance in MCA refers to the proactive and continuous adherence to all mandatory filings, statutory records maintenance, and regulatory requirements set under the Companies Act, 2013, by a company registered with the Ministry of Corporate Affairs." },
        { question: "What is the MCA Compliance regulation?", answer: "MCA Compliance regulations are governed primarily by the Companies Act, 2013 and the Limited Liability Partnership Act, 2008 — both administered by the Ministry of Corporate Affairs. They specify all statutory filings, record-keeping, audit requirements, and event-based compliance obligations." },
        { question: "What are MCA documents?", answer: "MCA documents are the statutory forms, returns, and reports that must be filed with the Ministry of Corporate Affairs — including AOC-4 (financial statements), MGT-7 (annual return), DIR-3 KYC, DPT-3, ADT-1, and other event-based forms as applicable." },
        { question: "What are the MCA compliances for private limited company?", answer: "For a private limited company, the mandatory MCA compliances include: Form INC-20A (commencement of business), Form ADT-1 (auditor appointment), Annual General Meeting, Form AOC-4 (financial statements within 30 days of AGM), Form MGT-7 (annual return within 60 days of AGM), Form DPT-3 (return of deposits), DIR-3 KYC, and DIR-12 for any director changes." },
        { question: "What are ROC compliances?", answer: "ROC compliances are statutory obligations set by the Registrar of Companies under the Companies Act, 2013. They primarily involve mandatory annual filings (AOC-4, MGT-7), event-based filings (DIR-12, MGT-14, INC-22), and maintenance of statutory records." },
        { question: "What is the full form of ACTIVE?", answer: "ACTIVE stands for Active Company Tagging Identities and Verification — a compliance introduced through Form INC-22A requiring companies incorporated on or before 31st December 2017 to verify and tag their registered office details with the MCA." },
        { question: "What is MSME compliance MCA?", answer: "MSME compliance under MCA requires businesses dealing with MSMEs to file Form MSME-1 semi-annually, disclosing any outstanding payments to MSMEs beyond 45 days. Tax compliance, ESI/PF filings, minimum wage compliance, and UDYOG Aadhar registration are also key MSME compliance requirements." },
        { question: "Which form is filed for appointment of statutory auditor?", answer: "Form ADT-1 is filed for the appointment of a statutory auditor — within 15 days after the conclusion of the Annual General Meeting for public and private limited companies." },
        { question: "Are audited financial statements mandatory for the annual filing of Private Limited Companies?", answer: "Yes, audited financial statements are mandatory for private limited companies for annual filing (Form AOC-4) — prepared as per Schedule III of the Companies Act, 2013 and duly audited by a practicing Chartered Accountant." },
        { question: "What is MCA compliance for LLP?", answer: "MCA compliance for LLP includes: filing Form 8 (Statement of Accounts & Solvency) by 30th October, filing Form 11 (Annual Return) by 30th May, audit under Income Tax Act (if turnover exceeds Rs. 40 lakhs or contribution exceeds Rs. 25 lakhs), filing LLP Agreement, and other miscellaneous compliances like DIN updates and statutory records maintenance." },
        { question: "Is it necessary to conduct an AGM?", answer: "Yes, every company (other than OPC) must hold an AGM. For private limited companies, the AGM must be held within 9 months from the end of the first financial year and within 6 months from the end of subsequent financial years. The AGM is mandatory for adopting financial statements and appointing/ratifying auditors." },
        { question: "How do you file the annual returns of the company?", answer: "Annual returns are filed using Form MGT-7 (or MGT-7A for OPC and small companies) within 60 days of the conclusion of the AGM, on the MCA portal (mca.gov.in). The form must be digitally signed by the director and, in specified cases, certified by a Practicing Company Secretary." },
        { question: "Is an audit report mandatory for all private limited companies?", answer: "Yes, an audit report by a Practicing Chartered Accountant is mandatory for all private limited companies, regardless of turnover or capital, as part of the annual filing of financial statements (Form AOC-4)." },
        { question: "When is the annual return to be filed after the AGM?", answer: "The annual return (Form MGT-7) must be filed within 60 days of the conclusion of the Annual General Meeting. For OPC and small companies, Form MGT-7A is filed within 60 days of the conclusion of the AGM." },
        { question: "Can we request an extension from the ROC for filing the forms?", answer: "Yes, companies can request an extension for holding the AGM from the ROC under certain circumstances. However, there is no general extension for filing forms like AOC-4 or MGT-7. The government periodically issues condonation schemes allowing companies to file overdue forms with reduced additional fees." },
    ];

    /* ─── Importance (custom JSX → advantages slot) ─────────── */
    const importanceContent = (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-[#005a9c]" />
                Importance of MCA Annual Compliance
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    { title: "Legal Protection", desc: "Active compliance with MCA regulations offers legal protection to businesses, helping them avoid penalties, fines, legal action, and reputational damage resulting from non-compliance." },
                    { title: "Operational Efficiency", desc: "Compliance with regulatory requirements ensures improved operational efficiency, resulting in good governance and reduced risk — enabling smooth and ethical company operations." },
                    { title: "Reputation and Trust", desc: "Active MCA compliance helps businesses maintain the reputation and trust of their stakeholders — including customers, employees, investors, and regulators." },
                    { title: "Financial Stability", desc: "Compliance with MCA guidelines helps manage financial obligations such as tax filing and financial reporting, avoiding penalties and promoting long-term financial stability." },
                    { title: "Access to Funds", desc: "MCA-compliant businesses appear more attractive to banks and investors, making it easier to secure loans and attract funding." },
                    { title: "Improved Corporate Governance", desc: "Regular MCA compliance reflects enhanced transparency and improved corporate governance, boosting the company's credibility among stakeholders, regulators, and investors." },
                    { title: "Facilitates Mergers & Acquisitions", desc: "MCA-compliant companies simplify the due diligence process during M&A transactions, making them quicker, more efficient, and less prone to regulatory delays." },
                    { title: "Access to Government Incentives", desc: "Compliance with MCA regulations provides access to government schemes and incentives — including tax breaks, subsidies, and grants." },
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                        <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                        <div>
                            <p className="text-[14px] font-bold text-[#072b47] mb-0.5">{item.title}</p>
                            <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    /* ─── MCA Compliance (LLP + Private Ltd) → eligibility slot ─ */
    const mcaComplianceContent = (
        <div className="space-y-10">
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><Building2 size={18} className="text-[#005a9c]" />MCA Compliance for LLPs in India</h3>
                <div className="grid gap-3 mb-8">
                    {[
                        { form: "Form 8", title: "Statement of Account & Solvency", desc: "All enrolled LLPs must file Form 8 comprising data related to the profit and finances of the business." },
                        { form: "Form 11", title: "Annual Return", desc: "All registered LLPs must file Form 11 — a summary of the management affairs of the LLP." },
                        { form: "Income Tax Audit", title: "Audit under Income Tax Act", desc: "LLPs having a turnover of more than Rs. 40 lakhs or contribution exceeding Rs. 25 lakhs must get their books audited by a practising chartered accountant." },
                        { form: "LLP Agreement", title: "File LLP Agreement", desc: "Entrepreneurs must file an LLP agreement outlining the roles, responsibilities, and operational rules for partners." },
                        { form: "Other", title: "Miscellaneous Compliances", desc: "LLPs must also meet other requirements such as DIN updates, event-based filing, and maintenance of statutory records." },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <div className="px-2 py-1 bg-[#072b47] text-white rounded text-[10px] font-bold shrink-0 text-center min-w-[56px]">{item.form}</div>
                            <div>
                                <p className="text-[14px] font-bold text-[#072b47] mb-0.5">{item.title}</p>
                                <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><Shield size={18} className="text-[#005a9c]" />MCA Compliances for Private Limited Company</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { form: "INC-20A", title: "Declaration for Commencement of Business", desc: "All private limited companies must file Form INC-20A before initiating any business activities." },
                        { form: "ADT-1", title: "Appointment of Auditor", desc: "File Form ADT-1 for auditor appointment within 30 days of incorporation, ratified by shareholders at the first AGM." },
                        { form: "AGM", title: "Annual General Meeting", desc: "Must be conducted within 9 months from closure of the first financial year." },
                        { form: "AOC-4", title: "Filing of Financial Statement", desc: "File the company's financial statement within 30 days following the AGM." },
                        { form: "MGT-7", title: "Annual Returns", desc: "File annual returns within 60 days of conclusion of the AGM." },
                        { form: "DPT-3", title: "Return of Deposits", desc: "Use Form DPT-3 for reporting details of deposits and non-deposit receipts, annually by June 30th." },
                        { form: "DIR-3 KYC", title: "Director KYC", desc: "Directors must submit KYC details via DIR-3 KYC form by end of September each year." },
                        { form: "DIR-12", title: "Appoint Directors", desc: "File for any changes in directorship (appointments or resignations) within 30 days of such changes." },
                        { form: "Sec. 134", title: "Directors' Report", desc: "Prepare a directors' report under Section 134, authorised by the chairperson or at least 2 directors." },
                        { form: "Register", title: "Statutory Register", desc: "Maintain and update various statutory registers including minutes, books of accounts, and financial statements." },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#e8f1fb] border border-[#c0d8f0] rounded-xl p-4">
                            <div className="px-2 py-1 bg-[#005a9c] text-white rounded text-[10px] font-bold shrink-0 min-w-[56px] text-center">{item.form}</div>
                            <div>
                                <p className="text-[13px] font-bold text-[#072b47] mb-0.5">{item.title}</p>
                                <p className="text-[12px] text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    /* ─── Types (custom JSX → features slot) ─────────── */
    const typesContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><BarChart2 size={18} className="text-[#005a9c]" />Types of MCA Compliance in India</h3>
            <div className="grid gap-4">
                {[
                    { title: "Annual Compliance", desc: "Mandatory yearly filings required under the Companies Act, 2013. Must be submitted to the Registrar of Companies (RoC) irrespective of whether the company carried out any business activity during the year. Examples: AOC-4, MGT-7, ADT-1, DIR-3 KYC." },
                    { title: "Event-Based Compliance", desc: "Specific obligations that arise from the occurrence of business events — such as changes in management, share capital, or registered office address of the company. Examples: DIR-12, MGT-14, INC-22." },
                    { title: "ROC Compliance", desc: "Compliance with the obligations set forth by the Registrar of Companies. These primarily involve statutory filings and adherence to the provisions of the Companies Act, 2013." },
                ].map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                        <div className="flex items-center gap-3 bg-[#072b47] px-5 py-3">
                            <span className="text-[20px] font-black text-white/20">{String(i + 1).padStart(2, "0")}</span>
                            <p className="text-[14px] font-bold text-white">{item.title}</p>
                        </div>
                        <div className="p-5"><p className="text-[14px] text-slate-700 leading-relaxed">{item.desc}</p></div>
                    </div>
                ))}
            </div>
            <h4 className="text-[15px] font-bold text-[#072b47] mb-3">Types of MSME Compliance under MCA</h4>
            <div className="grid sm:grid-cols-2 gap-3">
                {[
                    "Tax compliance through filing GST, ITR, and advance tax payments",
                    "Regulatory compliance through Shops & Establishment and Factories Act",
                    "Filing ESI and PF for employees",
                    "Ensure payment of at least the prescribed minimum wage",
                    "Apply for UDYOG Aadhar registration and relevant schemes",
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#f8fbff] border border-[#d0e3f5] rounded-lg px-3 py-2.5">
                        <CheckCircle2 size={14} className="text-[#005a9c] shrink-0" />
                        <span className="text-[13px] text-slate-700">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    /* ─── Forms Required (custom JSX → documents slot — standard list) ─ */
    const formsRequiredContent = (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><FileText size={18} className="text-[#005a9c]" />Forms Required to be Filed under MCA Compliance</h3>
            <div className="grid gap-3">
                {[
                    { form: "DIR-3 KYC / Web KYC", desc: "E-form that must be filed by every person holding a DIN — by 30th September each year." },
                    { form: "DPT-3", desc: "Annual return of deposit and exempted deposit — filed within 3 months from the closure of the financial year." },
                    { form: "BEN-1", desc: "E-form filed by every individual who becomes a beneficial owner or where their beneficial ownership changes." },
                    { form: "ADT-1", desc: "E-form for appointment of auditor — filed within 15 days after the conclusion of the AGM." },
                    { form: "AOC-4 / AOC-4 CFS", desc: "E-forms for filing annual accounts (financial statements) — within 30 days after the AGM's conclusion." },
                    { form: "MGT-7 / MGT-7A", desc: "E-forms for filing annual returns — within 60 days after the AGM's conclusion." },
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                        <div className="px-2 py-1 bg-[#072b47] text-white rounded text-[11px] font-bold shrink-0 min-w-[80px] text-center">{item.form}</div>
                        <p className="text-[13px] text-slate-700 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    /* ─── MCA Compliance Calendar (custom JSX → postCompliance slot) ─── */
    const calendarContent = (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><Clock size={18} className="text-[#005a9c]" />ROC MCA Compliance Calendar 2025–26</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-[12px]">
                    <thead>
                        <tr className="bg-[#072b47] text-white">
                            <th className="text-left px-3 py-3 font-semibold">Form/Return</th>
                            <th className="text-left px-3 py-3 font-semibold">Purpose</th>
                            <th className="text-left px-3 py-3 font-semibold">Due Date</th>
                            <th className="text-left px-3 py-3 font-semibold">Applicability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ["AOC-4", "Filing of financial statement", "Within 30 days of AGM", "Section 8, OPC, public limited"],
                            ["ADT-1", "Appointment of statutory auditor", "Within 15 days of AGM", "Pvt Ltd, Public Ltd, OPC"],
                            ["ADT-2", "Removal of auditor before term", "Within 30 days of special resolution", "Pvt Ltd, Public Ltd"],
                            ["CRA-2", "Appointment of cost auditor", "30 days from BM or 180 days from 1st April", "Companies under Section 148"],
                            ["CRA-4", "Filing of cost audit report", "Within 30 days of receipt", "Companies under Cost Audit Rules, 2014"],
                            ["CSR-2", "Reporting on CSR contribution", "Before end of financial year", "Companies under Section 135(1)"],
                            ["DIR-3 KYC", "KYC of all directors/DPs", "By 30th September each year", "Every individual with DIN"],
                            ["DIR-8", "Intimation of director's disqualification", "First board meeting of FY", "All companies"],
                            ["DIR-12", "Appointment/resignation of director", "Within 30 days of event", "Pvt Ltd, Public Ltd"],
                            ["DPT-3", "Return of deposits or exempted loans", "By 30th June annually", "Subsidiary companies"],
                            ["Form 3", "LLP agreement/amendment", "Within 30 days of incorporation/change", "LLP"],
                            ["Form 8", "Statement of Account & Solvency", "By 30th October annually", "LLP"],
                            ["Form 11", "Annual return of LLP", "By 30th May annually", "LLP"],
                            ["INC-20A", "Commencement of business", "Within 180 days of incorporation", "All companies"],
                            ["INC-22", "Change in registered office", "Within 15 days of change", "Pvt/Public companies"],
                            ["MGT-7 / 7A", "Filing of annual return", "Within 60 days of AGM", "Section 8, OPC, public limited"],
                            ["MGT-14", "Filing of resolution/board report", "Within 30 days of board meeting", "Pvt/Public companies"],
                            ["MSME-1 (Half-yearly)", "Outstanding payments to MSMEs > 45 days", "Within 1 month after half-year end", "MSME"],
                            ["NDH-1", "Return of statutory compliances", "Within 90 days after 1st FY end", "Nidhi Company"],
                            ["PAS-6", "Share capital audit report", "Within 60 days of half-year end", "Unlisted public companies"],
                        ].map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                <td className="px-3 py-2.5 font-bold text-[#005a9c]">{row[0]}</td>
                                <td className="px-3 py-2.5 text-slate-700">{row[1]}</td>
                                <td className="px-3 py-2.5 text-slate-700">{row[2]}</td>
                                <td className="px-3 py-2.5 text-slate-500">{row[3]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    /* ─── Penalties (custom JSX → process prop as custom JSX) ── */
    const penaltiesContent = (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><AlertTriangle size={18} className="text-amber-500" />Penalties for Not Following MCA Compliance Regulations</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-[12px]">
                    <thead>
                        <tr className="bg-[#072b47] text-white">
                            <th className="text-left px-3 py-3 font-semibold">S.No</th>
                            <th className="text-left px-3 py-3 font-semibold">Non-Compliance</th>
                            <th className="text-left px-3 py-3 font-semibold">Section</th>
                            <th className="text-left px-3 py-3 font-semibold">Penalty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ["1", "Non-maintenance of books of accounts", "Section 128(5)", "Rs. 50,000. Continuing: Rs. 1,000/day (max Rs. 5 lakh)"],
                            ["2", "Default in statutory filings", "Various", "Monetary penalty by specific default nature"],
                            ["3", "Late/missed financial statement or Board's report", "Section 137", "Rs. 10,000 + Rs. 100/day (max Rs. 2 lakh)"],
                            ["4", "Ignoring auditor's remarks", "Section 143", "Up to Rs. 1 lakh + imprisonment up to 1 year"],
                            ["5", "Non-filing of AOC-4", "Section 137", "Rs. 10,000 + Rs. 100/day (max Rs. 2 lakh)"],
                            ["6", "Non-filing of MGT-7 (annual return)", "Section 92", "Rs. 50,000; Continuing: Rs. 100/day (max Rs. 5 lakh)"],
                            ["7", "Non-filing of MGT-14 (resolutions)", "Section 117", "Rs. 10,000 + Rs. 100/day (max Rs. 2 lakh)"],
                            ["8", "Non-filing of DIR-3 KYC", "Rule 12A", "DIN deactivation; reactivation charge Rs. 5,000"],
                            ["9", "Non-filing of ADT-1 (auditor appointment)", "Section 139", "Rs. 25,000; Continuing: Rs. 100/day (max Rs. 5 lakh)"],
                            ["10", "Non-filing of INC-22 (Registered Office change)", "Section 12(4)", "Rs. 1,000/day (max Rs. 1 lakh)"],
                            ["11", "Non-filing of DPT-3 (Return of Deposits)", "Rule 16A", "Rs. 5,000; Continuing: Rs. 500/day (max Rs. 2 lakh)"],
                            ["12", "Non-filing of MSME-1", "Section 405", "Rs. 25,000"],
                            ["13", "Non-filing of INC-20A (Commencement of Business)", "Section 10A", "Rs. 50,000"],
                            ["14", "Non-filing of DIR-12 (Director changes)", "Section 170", "Rs. 50,000; Continuing: Rs. 500/day (max Rs. 5 lakh)"],
                            ["15", "Non-maintenance of registered office", "Section 12(1)", "Rs. 1,000/day (max Rs. 1 lakh)"],
                            ["16", "Wilful or fraudulent non-compliance", "Section 447", "6 months–10 years imprisonment + fine ≥ Rs. 1 lakh"],
                            ["17", "Filing false information in annual return", "Section 92(5)", "Rs. 50,000; Continuing: Rs. 100/day (max Rs. 5 lakh)"],
                        ].map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                <td className="px-3 py-2.5 text-slate-500 font-semibold">{row[0]}</td>
                                <td className="px-3 py-2.5 text-slate-700">{row[1]}</td>
                                <td className="px-3 py-2.5 text-[#005a9c] font-medium">{row[2]}</td>
                                <td className="px-3 py-2.5 text-red-600 font-medium">{row[3]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="MCA "
                heroTitleSuffix="Compliance"
                heroSubtitle="Ministry of Corporate Affairs Compliance — Companies Act, 2013 & LLP Act, 2008"
                heroDescription="Stay fully compliant with all MCA regulations with Vyombiz. From annual filings like AOC-4 and MGT-7 to event-based forms and LLP compliance — our team of CA professionals ensures zero-penalty, on-time compliance for your business."
                whatsIncludedList={["Annual Filings (AOC-4, MGT-7)", "LLP Compliance (Form 8, Form 11)", "Event-Based Filings (DIR-12, MGT-14)", "Compliance Calendar Management"]}
                stats={[
                    { count: "25,000+", label: "MCA Compliance Cases", icon: <Building2 size={20} /> },
                    { count: "100+", label: "Cities Served PAN India", icon: <Users size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Shield size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert />
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    advantages: "Importance",
                    eligibility: "MCA Compliance",
                    features: "Types",
                    documents: "Forms Required",
                    postCompliance: "Calendar",
                    process: "Penalties",
                    faq: "FAQs"
                }}
                overview={{
                    badge: "Ministry of Corporate Affairs | Companies Act, 2013 | LLP Act, 2008",
                    title: "MCA Compliance —",
                    highlightTitle: "An Overview",
                    description: [
                        "MCA compliance (Ministry of Corporate Affairs) plays a pivotal role in regulating business entities, including subsidiaries of foreign companies incorporated in India. It refers to the company's adherence to laws and regulations set forth by the MCA, ensuring the maintenance of transparency, accountability, and good governance.",
                        "MCA compliance helps companies to legally build their trust with stakeholders and attract investors for more funding options. It involves various aspects, including filing returns, maintaining records, and adhering to specific thresholds outlined in the Companies Act, 2013.",
                    ],
                    whyIdealTitle: "What is the Role of MCA?",
                    whyIdealList: [
                        { title: "Corporate Regulation", desc: "MCA, the Ministry of Corporate Affairs, is a government body responsible for regulating compliance of corporate entities with the Companies Act, 2013 and the LLP Act, 2008." },
                        { title: "Promoting Corporate Governance", desc: "MCA promotes corporate governance practices to protect interests and maintain fair business practices, simplifying compliance for businesses." },
                        { title: "Digital Transformation", desc: "MCA encourages the adoption of technology and digital platforms, improving efficiency and transparency in corporate operations through the MCA portal." },
                        { title: "Stakeholder Protection", desc: "MCA's primary mandate is to safeguard the interests of creditors, shareholders, employees, and the broader public by enforcing statutory filings and disclosures." },
                    ]
                }}
                advantages={importanceContent}
                eligibility={mcaComplianceContent}
                features={typesContent}
                documents={formsRequiredContent}
                postCompliance={calendarContent}
                process={{
                    title: "Penalties for MCA Non-Compliance",
                    subtitle: "Applicable penalties under the Companies Act, 2013 for non-compliance with MCA regulations.",
                    steps: [
                        { step: "Note", title: "Penalty Overview", desc: "See the comprehensive penalties table above for all MCA compliance violations. Penalties range from Rs. 5,000 to imprisonment under Section 447 in cases of wilful or fraudulent non-compliance." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for MCA Compliance?",
                    subtitle: "Expert, technology-driven MCA compliance management across India.",
                    list: [
                        { title: "25,000+ MCA Cases Managed", desc: "Vyombiz has successfully managed MCA compliance for over 25,000 businesses including startups across India." },
                        { title: "Expert CA Consultation", desc: "Our team of seasoned CA professionals brings in-depth knowledge of all MCA compliance guidelines and filing requirements." },
                        { title: "Customised Compliance Solutions", desc: "We offer customised compliance plans for every business — making MCA compliance smoother and more efficient." },
                        { title: "Real-Time Compliance Tracking", desc: "Access to a real-time compliance tracking dashboard to monitor all upcoming compliances for your business." },
                        { title: "Dedicated Compliance Manager", desc: "A dedicated compliance manager provides personalised attention, timely reminders, and accurate filings for your business." },
                        { title: "Expert MCA Notice Handling", desc: "Our professionals provide prompt and strategic responses to MCA notices or defect memos received during ROC filing." },
                        { title: "PAN India Services", desc: "We provide MCA compliance services across 100+ cities — including Delhi, Patna, Kolkata, Hyderabad, and Mumbai." },
                    ]
                }}
            />
            <FAQLayout title="FAQs on MCA Annual Compliance" subtitle="Common questions about MCA compliance answered by our CA professionals" faqs={faqs} />
        </div>
    );
};

export default MCACompliance;
