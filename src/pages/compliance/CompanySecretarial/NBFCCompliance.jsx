import React from "react";
import {
    Users, Briefcase, Building2, CheckCircle2, FileText,
    Shield, AlertTriangle, Landmark, BarChart2, Clock
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * NBFC Compliance Page - Vyombiz
 * Sections: Overview | Advantages | Eligibility Criteria | Documents Required |
 *           Process | Features | Post Compliance | FAQs
 */

const NBFCCompliance = () => {

    /* ─── FAQs ───────────────────────────────────────────────── */
    const faqs = [
        {
            question: "What is NBFC compliance?",
            answer: "NBFC compliance is the process of steering the complex web of regulatory requirements, ensuring compliance in a competitive industry."
        },
        {
            question: "What are the regulatory requirements for NBFC compliance?",
            answer: "NBFCs must comply with RBI Master Directions, maintain capital adequacy, adhere to KYC/AML norms, register with FIU-IND, CERSAI, CIC, and file periodic returns like NBS-1, NBS-2, NBS-7 among others."
        },
        {
            question: "What is the checklist for NBFC compliance?",
            answer: "The NBFC compliance checklist includes: Registration & Licensing, Capital Adequacy, Data Protection under the Personal Data Protection Bill, KYC/AML compliance, filing timely RBI returns, GST/ITR filing, MCA compliances, FIU-IND registration, and CERSAI registration."
        },
        {
            question: "What are the benefits of NBFC compliance?",
            answer: "NBFC compliance enhances market reputation, ensures business continuity, safeguards individual interests, enables business expansion, reduces legal/regulatory risks, and supports ethical operations."
        },
        {
            question: "What are the different categories of NBFCs registered with RBI?",
            answer: "NBFCs are categorized by activity (NBFC-ICC, MGC, NBFC-MFI, IFC, Factors, Account Aggregator, Housing Finance, P2P) and by liability (Deposit-Taking, Non-Deposit-Taking, NBFC-ND-CIC-SI). They are further layered as Base, Middle, Upper, and Top layers based on size and risk."
        },
        {
            question: "What are the features of NBFC Compliance?",
            answer: "Key features include mandatory periodic RBI returns (NBS-1 to NBS-7, ALM returns), event-based compliance for directorship changes or capital structure alterations, annual MCA filings (AOC-4, MGT-7), and adherence to Fair Practices Code."
        },
        {
            question: "What is the purpose of meeting NBFC Compliance needs?",
            answer: "Meeting NBFC compliance needs ensures regulatory approval, maintains RBI registration validity, protects customer interests, prevents financial crimes, and facilitates smooth business operations."
        },
        {
            question: "What are the challenges in meeting NBFC annual compliance requirements?",
            answer: "Key challenges include keeping up with frequent RBI regulatory changes, managing multiple return deadlines, maintaining capital adequacy, adhering to KYC/AML norms, and handling the complexity of scale-based regulatory tiers."
        },
        {
            question: "What do NBFC annual compliance services include?",
            answer: "NBFC annual compliance services include filing NBS returns, audited balance sheet submission, income tax and GST return filing, MCA annual filing, statutory meeting management, maintenance of books of accounts, and event-based ROC compliance."
        },
        {
            question: "To whom should you reach out for NBFC Compliance services?",
            answer: "You should reach out to Vyombiz — with a client database of 500+ fintech entrepreneurs, a 99% success rate in NBFC compliance management, and a team of expert legal professionals available 24/7."
        },
    ];

    /* ─── Eligibility / Pre-Registration Compliance (custom JSX) ─── */
    const eligibilityContent = (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Shield size={18} className="text-[#005a9c]" />
                    Pre-NBFC Registration Compliance Checklist
                </h3>
                <p className="text-[14px] text-slate-500 mb-4 leading-relaxed">
                    Compliance with the pre-NBFC registration requirements as specified by the RBI is crucial for businesses seeking registration:
                </p>
                <div className="grid gap-3">
                    {[
                        { title: "Registration & Licensing", desc: "Proceed with NBFC registration and obtain NBFC license issued by the Reserve Bank of India." },
                        { title: "Capital Adequacy", desc: "Maintain capital adequacy and financial stocks within the minimum ratio governed by RBI rules." },
                        { title: "Data Protection", desc: "Adhere to the Personal Data Protection Bill, 2019 for protection from mishandling of data." },
                        { title: "KYC & AML", desc: "Secure KYC (Know Your Customer) and AML (Anti-Money Laundering) compliance — maintain proper records and reports as required." },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <div>
                                <p className="text-[14px] font-semibold text-[#072b47] mb-0.5">{item.title}</p>
                                <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    /* ─── Features (Categories + Layers + Returns) ───────────── */
    const featuresContent = (
        <div className="space-y-12">

            {/* Categories by Activity */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Landmark size={18} className="text-[#005a9c]" />
                    Categories of NBFC that Need NBFC Compliance
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-[14px] font-bold text-[#005a9c] mb-3 uppercase tracking-wide">Based on Activities</h4>
                        <div className="grid gap-2">
                            {[
                                "Investment and Credit Company (NBFC-ICC) — primarily engaged in asset financing through offering credit.",
                                "Mortgage Guarantee Companies (MGC) — net owned fund of at least Rs. 100 crores.",
                                "NBFC-Micro Finance Institution (NBFC-MFI) — carries out business tasks similar to banks.",
                                "Infrastructure Finance Company (IFC) — utilizes at least 75% of total assets in infrastructure loans.",
                                "NBFC-Factors — involved in factoring at least 50% of business assets.",
                                "NBFC Account Aggregator — offers retrieval/collection of financial data relevant to clients' financial assets.",
                                "Housing Finance Companies — primarily involved in financing acquisition or construction of homes.",
                                "P2P Lending NBFC — connects individual borrowers and lenders digitally.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2 bg-[#f8fbff] border border-[#d0e3f5] rounded-lg px-3 py-2">
                                    <CheckCircle2 size={14} className="text-[#005a9c] mt-0.5 shrink-0" />
                                    <p className="text-[13px] text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[14px] font-bold text-[#005a9c] mb-3 uppercase tracking-wide">Based on Liability</h4>
                        <div className="grid gap-2">
                            {[
                                "Deposit-Taking NBFC — accepts deposits from the public.",
                                "Non-Deposit Taking NBFCs — do not accept deposits from the public.",
                                "Systematically Important Core Investment NBFC (NBFC-ND-CIC-SI) — mainly invests in securities of group companies.",
                                "Other Non-Deposit Holding Companies.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                                    <CheckCircle2 size={14} className="text-slate-400 mt-0.5 shrink-0" />
                                    <p className="text-[13px] text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Layers */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <BarChart2 size={18} className="text-[#005a9c]" />
                    Layers of NBFC Where Annual Compliance is Applicable
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { layer: "Base Layer", abbr: "NBFC-BL", desc: "Non-deposit taking NBFCs with asset size of Rs. 1,000 crores or less." },
                        { layer: "Middle Layer", abbr: "NBFC-ML", desc: "All deposit-accepting and non-deposit-accepting NBFCs carrying out specific business activities." },
                        { layer: "Upper Layer", abbr: "NBFC-UL", desc: "Top 10 eligible NBFCs identified by the RBI based on asset size and risk profile." },
                        { layer: "Top Layer", abbr: "NBFC-TL", desc: "Top NBFCs subject to rigorous regulatory oversight and strict supervision of the RBI." },
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 hover:border-[#005a9c]/40 hover:shadow-md transition-all">
                            <span className="inline-block text-[11px] font-bold bg-[#e8f1fb] text-[#005a9c] px-2 py-0.5 rounded-full mb-2">{item.abbr}</span>
                            <p className="text-[14px] font-bold text-[#072b47] mb-1">{item.layer}</p>
                            <p className="text-[12px] text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Types of Returns */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <FileText size={18} className="text-[#005a9c]" />
                    Types of Returns and RBI Compliance for NBFC
                </h3>
                <div className="grid gap-3">
                    {[
                        { form: "NBS-1", freq: "Quarterly", desc: "Return on deposit in the first schedule — captures financial details such as P&L account, components of assets, and liability." },
                        { form: "NBS-2 (Deposit Taking)", freq: "Quarterly", desc: "Return on prudential norms — details concerning asset classification, capital adequacy, NOF, and provisioning." },
                        { form: "NBS-3", freq: "Quarterly", desc: "Return on liquid assets — captures information about statutory investment in liquid states." },
                        { form: "NBS-4", freq: "Annual", desc: "Annual return filed to determine the repayment status of rejected NBFCs accepting public deposits." },
                        { form: "NBS-6", freq: "Monthly", desc: "Monthly return on capital market exposure — for deposit-taking NBFCs with total assets of Rs. 100 crore or more." },
                        { form: "ALM Return (Deposit Taking)", freq: "Half-Yearly", desc: "Filed by NBFCs holding public deposits of more than Rs. 20 crore or an asset size of more than Rs. 100 crore." },
                        { form: "NBS-7", freq: "Quarterly", desc: "Quarterly statement on risk assets ratio, capital funds, and risk-weighted assets." },
                        { form: "NBS-2 (Non-Deposit Taking)", freq: "Monthly", desc: "Monthly return covering critical financial parameters of NBFCs-ND-SI." },
                        { form: "ALM Returns (Non-Deposit Taking)", freq: "Monthly/Half-Yearly", desc: "Statements for short-term dynamic liquidity (NBS-ALM-1) and structural liquidity (NBS-ALM-2)." },
                        { form: "Branch Information Return", freq: "Quarterly", desc: "Quarterly return on important financial parameters of non-deposit-taking NBFCs with assets between Rs. 50 to 100 crore." },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                            <div className="shrink-0 flex gap-2 items-center">
                                <span className="text-[12px] font-bold bg-[#072b47] text-white px-2.5 py-1 rounded-lg whitespace-nowrap">{item.form}</span>
                                <span className="text-[11px] font-bold text-[#005a9c] bg-[#e8f1fb] px-2 py-0.5 rounded-full whitespace-nowrap">{item.freq}</span>
                            </div>
                            <p className="text-[13px] text-slate-700 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mandatory NBFC Compliance */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Shield size={18} className="text-[#005a9c]" />
                    Mandatory NBFC Compliance in India
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-[14px] font-bold text-[#005a9c] mb-3 uppercase tracking-wide">Annual Compliance</h4>
                        <div className="grid gap-2">
                            {[
                                "NBFCs-ND files NBS-9 with RBI if asset size is less than Rs. 100 crore.",
                                "Convening statutory meetings for advising investors on incorporation, allocation of shares, and contracts.",
                                "Maintenance of books of accounts including vouchers and receipts under Income Tax Act, GST Act, and Companies Act.",
                                "Filing of GST returns and compliance with tax administrative authorities.",
                                "Filing of Income Tax Return (ITR) every year with the Income Tax Department.",
                                "Filing annual financial statements with MCA for all NBFCs incorporated under the Companies Act, 1956.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2 bg-[#f8fbff] border border-[#d0e3f5] rounded-lg px-3 py-2">
                                    <CheckCircle2 size={14} className="text-[#005a9c] mt-0.5 shrink-0" />
                                    <p className="text-[13px] text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[14px] font-bold text-amber-600 mb-3 uppercase tracking-wide">Event-Based Compliance</h4>
                        <div className="grid gap-2">
                            {[
                                "Process for change in directors, registered office, or any alteration in the capital structure is similar to ROC.",
                                "Adherence to the rules and regulations for making any amendments in the above-mentioned profiles.",
                                "NBFCs allow 100% FDI under automatic route, but in some cases, FDI is restricted.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                                    <AlertTriangle size={14} className="text-amber-500 mt-0.5 shrink-0" />
                                    <p className="text-[13px] text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>

                        {/* Credit Information Cos */}
                        <h4 className="text-[14px] font-bold text-[#005a9c] mt-5 mb-3 uppercase tracking-wide">NBFC Credit Information Companies</h4>
                        <div className="grid gap-2">
                            {[
                                "CIBIL — India's first Credit Bureau, provides individuals with their credit scores.",
                                "Equifax Credit Information Services — collects and maintains records of individuals' financial information.",
                                "Experian Credit Information Company of India — guarantees credit checks on its consumers.",
                                "CRIF High Mark Credit Information Services — ensures trustworthiness of customers.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                                    <CheckCircle2 size={14} className="text-slate-400 mt-0.5 shrink-0" />
                                    <p className="text-[13px] text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    /* ─── Post Compliance (Post-Registration + Compliance List) ─ */
    const postComplianceContent = (
        <div className="space-y-12">

            {/* Post-Registration Compliances */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Shield size={18} className="text-[#005a9c]" />
                    Post-NBFC Registration Compliances
                </h3>
                <p className="text-[14px] text-slate-500 mb-6 leading-relaxed">
                    Once your business has received the certificate of registration from the RBI, NBFCs must comply with the following post-registration compliances:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { title: "Adoption of Fair Practice Code", desc: "The RBI rules on Fair Practices Code (FPC) provide general standards on sufficient exposures on loan terms and conditions, and embrace a non-coercive recovery strategy." },
                        { title: "FIU-IND Registration", desc: "Every NBFC must register with FIU-IND under the Prevention of Money Laundering Act, providing client details to help prevent money laundering, terror financing, and related offences." },
                        { title: "Central KYC Registration", desc: "NBFCs must adopt Central KYC registration to gather records for customers in financial services and reduce the compliance burden on the entity." },
                        { title: "Registration with CERSAI", desc: "NBFCs must register with CERSAI (Central Registry of Securitisation Asset Reconstruction and Security Interest of India) to recognize and check fraud activities during lending transactions against equitable mortgages." },
                        { title: "Registration with CIC", desc: "NBFCs must register as a member of authorized Credit Information Companies such as CIBIL, Equifax, Experian, and CRIF High Mark to access credit information reports and borrower profiles." },
                        { title: "Filing of Timely Returns with RBI", desc: "NBFCs must timely file their periodic returns and maintain books of accounts as specified by the RBI for regulatory compliance and transparency in financial reporting." },
                        { title: "GST Return Filing", desc: "NBFCs must ensure the filing of annual income tax and GST returns to avoid penalties and ensure seamless operations with tax authorities." },
                        { title: "Compliance with MCA", desc: "NBFCs must ensure compliance with MCA guidelines for filing financial statements, updating statutory registers, and filing annual returns." },
                        { title: "Submission of Financial Information", desc: "Section 215 of the IBC, 2016 requires financial creditors to submit financial and security-related data to the information utility in prescribed forms." },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-[#005a9c]/30 hover:bg-white transition-all">
                            <div className="w-9 h-9 rounded-lg bg-[#e8f1fb] flex items-center justify-center shrink-0">
                                <CheckCircle2 size={16} className="text-[#005a9c]" />
                            </div>
                            <div>
                                <p className="text-[14px] font-semibold text-[#072b47] mb-1">{item.title}</p>
                                <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Compliance Checklist Table */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-[#005a9c]" />
                    NBFC Compliance List for Deposit &amp; Non-Deposit Taking NBFC
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-[13px]">
                        <thead>
                            <tr className="bg-[#072b47] text-white">
                                <th className="text-left px-4 py-3 font-semibold w-10">S.No.</th>
                                <th className="text-left px-4 py-3 font-semibold">Particulars</th>
                                <th className="text-left px-4 py-3 font-semibold w-56">Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td colSpan={3} className="px-4 py-2 bg-[#e8f1fb] font-bold text-[#072b47] text-[12px] uppercase tracking-wide">NBFC Annual Compliance</td></tr>
                            {[
                                ["1", "Unaudited March Monthly return / NBS-7", "On or before 30th June"],
                                ["2", "Statutory Auditors certificate return on income and assets (DNBS10)", "On or before 30th June"],
                                ["3", "Information about companies having FDI/Foreign Funds", "On or before 30th June"],
                                ["4", "File audited annual balance sheet and P&L Account", "One month from the date of signoff"],
                                ["5", "Board Resolution of Non-Acceptance/Holding of any Public Deposit", "Before commencement of the new fiscal year"],
                                ["6", "Declaration of Auditors to Act as Auditors of the Company", "Annual Basis"],
                                ["7", "Inspected return for March / NBS-7", "Upon Completion"],
                                ["8", "Form AOC-4 NBFC (IND AS) and MGT-7 to file annual return with ROC", "Within 30 days and 60 days from conclusion of AGM respectively"],
                            ].map(([no, part, dur], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-4 py-2.5 text-slate-500 font-medium">{no}</td>
                                    <td className="px-4 py-2.5 text-slate-700">{part}</td>
                                    <td className="px-4 py-2.5 text-[#005a9c] font-medium">{dur}</td>
                                </tr>
                            ))}
                            <tr><td colSpan={3} className="px-4 py-2 bg-[#e8f1fb] font-bold text-[#072b47] text-[12px] uppercase tracking-wide">NBFC Half-Yearly Compliance</td></tr>
                            {[
                                ["9", "Statement on Interest Rate Futures (IRF) Transaction", "On or Before 31st October"],
                                ["10", "ALM-II (Statement of Structured Liquidity and Interest Rate Sensitivity)", "On or before 12th November"],
                                ["11", "Compliance with terms and conditions of FDI-SAC", "On or before 31st October"],
                            ].map(([no, part, dur], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-4 py-2.5 text-slate-500 font-medium">{no}</td>
                                    <td className="px-4 py-2.5 text-slate-700">{part}</td>
                                    <td className="px-4 py-2.5 text-[#005a9c] font-medium">{dur}</td>
                                </tr>
                            ))}
                            <tr><td colSpan={3} className="px-4 py-2 bg-[#e8f1fb] font-bold text-[#072b47] text-[12px] uppercase tracking-wide">NBFC Quarterly Compliance</td></tr>
                            {[
                                ["12", "Return on Overseas Investment details for all NBFCs (DNBS 13)", "Every 4 months"],
                                ["13", "Details of large borrowers (Major Exposure Return)", "Every 4 months"],
                                ["14", "Public Disclosure on soundness of entity's liquidity risk management", "Every 4 months"],
                                ["15", "CICs Important Financial Parameters (DNBS 11)", "Every 4 months"],
                                ["16", "Consolidated Financial Soundness Indicators (FSI) to IMF", "Every 4 months"],
                            ].map(([no, part, dur], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-4 py-2.5 text-slate-500 font-medium">{no}</td>
                                    <td className="px-4 py-2.5 text-slate-700">{part}</td>
                                    <td className="px-4 py-2.5 text-[#005a9c] font-medium">{dur}</td>
                                </tr>
                            ))}
                            <tr><td colSpan={3} className="px-4 py-2 bg-[#e8f1fb] font-bold text-[#072b47] text-[12px] uppercase tracking-wide">NBFC Monthly Compliance</td></tr>
                            {[
                                ["17", "Monthly return", "7th of every month"],
                                ["18", "Reporting of Large Exposure (Annex XXV)", "By end of every month"],
                                ["19", "Information of borrowers whose secured assets are possessed", "By end of every month"],
                                ["20", "CRILC main return (DNBS 08)", "Within 15 days from end of every month"],
                                ["21", "Report on Cash Transaction (CTR) to FIU India", "By 15th of succeeding month"],
                            ].map(([no, part, dur], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-4 py-2.5 text-slate-500 font-medium">{no}</td>
                                    <td className="px-4 py-2.5 text-slate-700">{part}</td>
                                    <td className="px-4 py-2.5 text-[#005a9c] font-medium">{dur}</td>
                                </tr>
                            ))}
                            <tr><td colSpan={3} className="px-4 py-2 bg-[#e8f1fb] font-bold text-[#072b47] text-[12px] uppercase tracking-wide">NBFC Periodical Compliance</td></tr>
                            {[
                                ["22", "Appointment of Director", "Within 30 days of appointment"],
                                ["23", "Resignation of Director (DIR-12 + challan report)", "Within 30 days of appointment"],
                                ["24", "Adoption of any notification in the ensuing Board Meeting and filing the certified copy with RBI", "As applicable"],
                            ].map(([no, part, dur], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-4 py-2.5 text-slate-500 font-medium">{no}</td>
                                    <td className="px-4 py-2.5 text-slate-700">{part}</td>
                                    <td className="px-4 py-2.5 text-[#005a9c] font-medium">{dur}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="NBFC "
                heroTitleSuffix="Compliance"
                heroSubtitle="RBI Regulatory Compliance for Non-Banking Financial Companies"
                heroDescription="Ensure seamless NBFC compliance with Vyombiz experts. From pre-registration checklists to periodic RBI returns, MCA filings, and post-registration obligations — we handle it all for 500+ fintech clients."
                whatsIncludedList={[
                    "RBI Return Filing (NBS-1 to NBS-7)",
                    "KYC/AML Compliance",
                    "Annual MCA Filings",
                    "Post-Registration Obligations"
                ]}
                stats={[
                    { count: "500+", label: "Fintech Clients Served", icon: <Users size={20} /> },
                    { count: "99%", label: "Compliance Success Rate", icon: <Briefcase size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    advantages: "Advantages",
                    eligibility: "Eligibility Criteria",
                    documents: "Documents Required",
                    process: "Process",
                    features: "Features",
                    postCompliance: "Post Compliance",
                    faq: "FAQs"
                }}
                overview={{
                    badge: "RBI Master Directions – NBFC Regulations",
                    title: "NBFC Compliance –",
                    highlightTitle: "An Overview",
                    description: [
                        "NBFC compliance refers to the process of managing regulatory requirements, which ensures compliance in a competitive industry. Compliance with NBFC regulations further provides a secure financial environment, serving as an alternative source of credit for individuals and businesses.",
                        "Setting up an NBFC requires completing various formalities, such as handling compliance, protection of reputation, obtaining registration and licenses, data protection, and maintaining adequate capital. However, NBFCs in India must adhere to stringent operational norms, regardless of their size or sector.",
                        "Are you worried about the challenges in meeting NBFC compliance needs? Let our experts at Vyombiz help you feel confident while we handle your NBFC compliance management tasks.",
                    ],
                    whyIdealTitle: "What is an NBFC?",
                    whyIdealList: [
                        { title: "Non-Banking Financial Company", desc: "NBFC is an integral part of the Indian financial system that provides an alternative source of credit to individuals and businesses." },
                        { title: "Must Register under Companies Act", desc: "NBFCs involved in receiving deposits, loans, advances, and acquiring stocks, bonds, and government securities must register under the Companies Act, 2013." },
                        { title: "Alternative Credit Source", desc: "NBFCs serve as alternatives to banks, channeling credit to underserved segments of the economy." },
                        { title: "Regulated by RBI", desc: "All NBFCs are regulated by the Reserve Bank of India through Master Directions and periodic circular updates." },
                    ]
                }}
                advantages={{
                    title: "Benefits of RBI NBFC Compliance",
                    subtitle: "Why maintaining NBFC compliance is essential for sustainable operations.",
                    list: [
                        { title: "Enhanced Market Reputation", desc: "RBI compliance for NBFC enhances market reputation and customers' trust over NBFCs." },
                        { title: "Ensures Business Continuity", desc: "RBI compliance helps avoid situations for revocation of your license and ensures the continuity of NBFC business in India." },
                        { title: "Safeguards Individual Interests", desc: "Guaranteeing stability and smooth functioning of the financial system safeguards the interest of individuals." },
                        { title: "Business Expansion", desc: "NBFC compliance leads to expansion of businesses by enhancing credibility with investors and lenders." },
                        { title: "Reduces Risk", desc: "RBI compliance for NBFC reduces organizational, legal, and other regulatory risks affecting the operational stability of the business." },
                        { title: "Business Continuity", desc: "NBFC compliance helps maintain reputation and ethical operations, leading to long-term business continuity." },
                    ]
                }}
                eligibility={eligibilityContent}
                documents={{
                    title: "Documents Required for NBFC Compliance",
                    description: "The list of documents required for securing NBFC compliance in India.",
                    list: [
                        "Memorandum and Articles of Association (MOA & AOA)",
                        "Minutes of Board and Committee Meetings",
                        "Statutory Registers",
                        "Audited Financial Statements & Balance Sheet",
                        "Shareholding Records",
                        "Details of Directors",
                        "Any other documents as required by the RBI/MCA",
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Procedure to Obtain NBFC Annual Compliance",
                    subtitle: "Step-by-step guide to securing annual NBFC compliance.",
                    steps: [
                        { step: "01", title: "File Application", desc: "NBFCs are initially required to prepare and file an online application along with an acknowledgement on the RBI portal." },
                        { step: "02", title: "Comply with Pre-NBFC Registration Criteria", desc: "The NBFC must comply with the pre-NBFC registration enforcement criteria required for securing NBFC compliance." },
                        { step: "03", title: "Submit All Documents", desc: "NBFCs are required to make submission of necessary documents and exchange appropriate drafts with the regulatory authority." },
                        { step: "04", title: "Submission of Application", desc: "Documents are duly verified, and the application is finally submitted for securing guaranteed compliance with NBFC guidelines." },
                    ]
                }}
                features={featuresContent}
                postCompliance={postComplianceContent}
                whyChooseUs={{
                    title: "How Vyombiz Assists in Securing NBFC Compliance in India?",
                    subtitle: "500+ fintech clients served — your trusted partner for end-to-end NBFC compliance.",
                    list: [
                        { title: "Client Database of 500+ Fintechpreneurs", desc: "We have successfully delivered NBFC compliance services to 500+ fintechpreneurs ruling the fintech segment like a champion." },
                        { title: "99% Success Rate in NBFC Compliance", desc: "We have a positive success rate of 99% in NBFC compliance management — the highest in the trade." },
                        { title: "Ease the Paperwork", desc: "The paperwork in handling NBFC annual compliance can be complex. We make compliance for NBFC easy, simple, and straightforward." },
                        { title: "Regular Reporting and Filing", desc: "We guarantee regular reporting and filing of reports to reduce the risk of penalties and ensure compliance for NBFC company." },
                        { title: "KYC/ALM Solutions", desc: "We provide end-to-end KYC/ALM solutions to streamline customer onboarding, strengthening your fight against financial crime." },
                        { title: "Free Legal Service", desc: "Connect with our team of legal professionals to enjoy free legal services to secure NBFC company compliances." },
                        { title: "NBFC Registration Support", desc: "Choose Vyombiz for filing smooth and secured applications for NBFC registration in consonance with the RBI Master Directions." },
                        { title: "Instant Support Services", desc: "We offer instant support services such as control over financial data, facilitating the NBFC financial ecosystem to fulfil compliance needs." },
                        { title: "24/7 Availability", desc: "Our experts are readily available to deal with NBFC compliance requirements and provide consistent support." },
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions on NBFC Annual Compliance"
                subtitle="Have a look at the answers to the most asked questions"
                faqs={faqs}
            />

        </div>
    );
};

export default NBFCCompliance;
