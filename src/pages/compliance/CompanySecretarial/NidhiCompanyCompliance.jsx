import React from "react";
import {
    Users, Briefcase, Building2, CheckCircle2, FileText,
    Shield, AlertTriangle, Clock, BarChart2, BookOpen, XCircle
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Nidhi Company Compliance Page - Vyombiz
 * Nav: Overview | Limitations | Compliances | Checklist | Penalties | Other Information | Vyombiz Support | FAQs
 */

const NidhiCompanyCompliance = () => {

    /* ─── FAQs ───────────────────────────────────────────────── */
    const faqs = [
        {
            question: "What are the requirements for a Nidhi Company registration?",
            answer: "To incorporate a Nidhi Company, the following must be satisfied: (1) It must have at least 3 Directors. (2) It must have at least 7 Members. (3) The principal object stated in the MOA must be to cultivate the habit of thrift and savings among its members. It can accept deposits and lend money only to its members and shall operate for the mutual benefit of its members."
        },
        {
            question: "What are the post-incorporation requirements of a Nidhi Company?",
            answer: "Within one year of incorporation, a Nidhi Company must: (1) Have a minimum of 200 members. (2) Maintain Net Owned Funds (NOFs) of at least Rs. 20 lakhs. (3) Ensure NOFs to deposit ratio does not exceed 1:20. (4) Maintain unencumbered term deposits of not less than 10% of outstanding deposits as per Rule 14 of Nidhi Rules 2014."
        },
        {
            question: "How does the Nidhi Company utilize its funds?",
            answer: "A Nidhi Company can only lend funds to its members. Loans are provided against specified securities such as gold, silver (including jewellery), property, fixed deposits, and insurance policies. The company cannot lend to or accept funds from third parties or body corporates."
        },
        {
            question: "What are the pre-incorporation compliances of a Nidhi Company?",
            answer: "Before incorporation, the promoters must ensure: minimum 3 directors and 7 members, the object clause in the MOA must reflect mutual benefit and savings, minimum paid-up share capital of Rs. 10 lakhs (post 2022 amendment), and all promoters/directors must satisfy the 'fit and proper person' criteria."
        },
        {
            question: "What are the restrictions on Nidhi Company?",
            answer: "Nidhi Companies are restricted from: conducting chit fund, leasing, or hire-purchase activities; acquiring securities of body corporates; issuing debentures or preference shares; opening current accounts with members; accepting funds from or lending to third parties; pledging member assets; and paying incentives or brokerage for deposits."
        },
        {
            question: "Who can become a member of a Nidhi Company?",
            answer: "An individual who is a resident of India and not a minor can become a member of a Nidhi Company. Body corporates, trusts, and minors are not permitted to become members. Members must open a savings deposit account at the time of becoming a member."
        },
        {
            question: "What provisions are applicable to Nidhi Company?",
            answer: "Nidhi Companies are governed by Section 406 of the Companies Act, 2013, Nidhi Rules 2014, and the Nidhi Company (Amendment) Rules 2022. They are treated as Public Limited Companies and must comply with RoC filing requirements, NBFC-adjacent norms, and MCA compliance framework."
        },
        {
            question: "What are the requirements of Nidhi Company compliances?",
            answer: "Nidhi Company compliances include: filing NDH-1, NDH-2, NDH-3, NDH-4, NDH-5; filing AOC-4 and MGT-7 with the RoC; annual income tax return filing; auditor appointment; statutory meeting compliance; maintaining statutory registers and financial statements."
        },
        {
            question: "What should be the objective of Nidhi Company?",
            answer: "The primary objective of a Nidhi Company as stated in its MOA must be to cultivate the habit of thrift and savings among its members, and to receive deposits from and lend to its members only for their mutual benefit."
        },
    ];

    /* ─── Limitations tab (custom JSX → advantages slot) ─────── */
    const limitationsContent = (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <XCircle size={18} className="text-red-500" />
                    Limitations Imposed on Nidhi Companies
                </h3>
                <p className="text-[14px] text-slate-500 mb-5 leading-relaxed">
                    According to Rule 6 of Nidhi Rules 2014, a Nidhi Company is restrained from performing the following activities:
                </p>
                <div className="grid gap-3">
                    {[
                        "Undertake business activities relating to leasing finance, Chit fund, and Hire purchase.",
                        "Acquiring securities issued by a body corporate.",
                        "Issue debentures, preference shares, or any debt instruments.",
                        "Open current account with its serving members.",
                        "Make any arrangements, acquisitions, or concessions unless approved in the General Meeting via a special resolution and with approval of the Regional Director.",
                        "Perform any other form of business in its name.",
                        "Lend to or accept funds from any third party.",
                        "Lend to or accept funding from body corporate.",
                        "Leveraging partnership arrangements for borrowing or lending operations.",
                        "Conducting publicity for obtaining any deposits in any form.",
                        "Pledge assets lodged by its members as security.",
                        "Pay any incentive or brokerage for disbursing credits or deployment of funds to channelize deposits from its members.",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                            <XCircle size={15} className="text-red-400 mt-0.5 shrink-0" />
                            <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>

                {/* Note boxes */}
                <div className="mt-6 space-y-3">
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <p className="text-[13px] font-bold text-amber-700 mb-1">Note 1 — Locker Facility</p>
                        <p className="text-[13px] text-slate-700 leading-relaxed">
                            If the company meets all the aforementioned provisions, it can facilitate locker facilities to its members <strong>if the income from locker rental does not surpass 20% of the total income</strong> of the Nidhi Company at any instance during the financial year.
                        </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <p className="text-[13px] font-bold text-blue-700 mb-1">Note 2 — Private Circulation</p>
                        <p className="text-[13px] text-slate-700 leading-relaxed">
                            Private circulation of particulars relating to FD schemes among members bearing the terms <em>"for private circulation to members only"</em> shall <strong>not</strong> be considered as an advertisement.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    /* ─── Compliances tab (custom JSX → eligibility slot) ────── */
    const compliancesContent = (
        <div className="space-y-10">
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-3 flex items-center gap-2">
                    <BookOpen size={18} className="text-[#005a9c]" />
                    Types of Compliances for Nidhi Company
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                        { title: "Annual Compliances", desc: "These compliances reflect the status and performance of the Nidhi Company throughout the year. They are filed annually or at specified intervals as prescribed." },
                        { title: "Event-Based Compliances", desc: "These compliances are only filed at the time of incorporation or on occurrence of any structural alteration in the Nidhi Company. They are non-periodical in nature." },
                    ].map((item, i) => (
                        <div key={i} className="bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-5">
                            <p className="text-[14px] font-bold text-[#072b47] mb-2">{item.title}</p>
                            <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* NDH Filing Table */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <FileText size={18} className="text-[#005a9c]" />
                    Filing Compliance with Registrar of Companies — Nidhi Rules 2014 &amp; Amended Rules 2022
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-[13px]">
                        <thead>
                            <tr className="bg-[#072b47] text-white">
                                <th className="text-left px-4 py-3 font-semibold w-36">Form</th>
                                <th className="text-left px-4 py-3 font-semibold w-44">Due Date</th>
                                <th className="text-left px-4 py-3 font-semibold">Contents</th>
                                <th className="text-left px-4 py-3 font-semibold w-48">Noteworthy Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    form: "NDH-1 — Return of Statutory Compliance",
                                    due: "Within 90 days from the closure of the first & second financial years (where applicable)",
                                    contents: "Details relating to members, deposits, loans, reserves for the financial years.",
                                    note: "E-Form GNL-2 — Form relating to the submission of paperwork with the Registrar."
                                },
                                {
                                    form: "NDH-2 — Application to Regional Director & Intimation to Registrar",
                                    due: "Within 30 days from the closure of the financial year",
                                    contents: "Application relating to extension of timeline for not meeting requirements of members and deposits as required post-incorporation.",
                                    note: "E-Form RD-1 — Applications made to Regional Director."
                                },
                                {
                                    form: "NDH-3 — Half Yearly Return",
                                    due: "Within 30 days from the closure of each half year",
                                    contents: "Details relating to members, deposits, loans for the said duration — including total members admitted in the half-year and overall members who ceased to be members as on date.",
                                    note: "E-Form GNL-2 — Form relating to the submission of paperwork with the Registrar."
                                },
                                {
                                    form: "NDH-4",
                                    due: "New Nidhi: Within 60 days post expiration of one year from date of incorporation. Existing Nidhi: Within 1 year from incorporation or 6 months from commencement of Nidhi Rules 2019, whichever is later.",
                                    contents: "Filing application for declaration as Nidhi Company and updating of status.",
                                    note: "Failure to file NDH-4 — Company shall not be permitted to file Form SH-7 (Notice of change in share capital) and Form PAS-3 (Return of Allotment)."
                                },
                                {
                                    form: "NDH-5",
                                    due: "Prior to closing any branch — 30 days' notice",
                                    contents: "Format of advertisement to be given while closing a branch. Includes newspaper publication in vernacular language, notice on notice board for 30 days, and intimation to Registrar within 30 days of closure.",
                                    note: ""
                                },
                                {
                                    form: "AOC-4",
                                    due: "Within 30 days from the date of the Company's AGM",
                                    contents: "Filing of Financial Statements.",
                                    note: ""
                                },
                                {
                                    form: "MGT-7",
                                    due: "Within 60 days of the AGM",
                                    contents: "Annual return along with a list of members serving the company.",
                                    note: ""
                                },
                            ].map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-4 py-3 font-semibold text-[#072b47] align-top">{row.form}</td>
                                    <td className="px-4 py-3 text-[#005a9c] font-medium align-top">{row.due}</td>
                                    <td className="px-4 py-3 text-slate-700 align-top">{row.contents}</td>
                                    <td className="px-4 py-3 text-slate-500 italic align-top">{row.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-[12px] text-slate-400 mt-2 italic">
                    ⚠ Forms NDH-1 and NDH-3 should be filed with standard fees and must be approved by the concerned professional.
                </p>
            </div>

            {/* Loan Limits Table */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <BarChart2 size={18} className="text-[#005a9c]" />
                    Loan Limits under Rule 15 of Nidhi Rules 2014
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
                    <table className="w-full text-[13px]">
                        <thead>
                            <tr className="bg-[#072b47] text-white">
                                <th className="text-left px-4 py-3 font-semibold">Deposit Made (Rs.)</th>
                                <th className="text-left px-4 py-3 font-semibold">Loan Granted (Rs.)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Less than Rs. 2 Crores", "Rs. 2 Lakhs"],
                                ["Above Rs. 2 Crores but below Rs. 20 Crores", "Rs. 7.5 Lakhs"],
                                ["Above Rs. 20 Crores but below Rs. 50 Crores", "Rs. 12 Lakhs"],
                                ["Rs. 50 Crores or more", "Rs. 15 Lakhs"],
                            ].map(([dep, loan], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-4 py-3 text-slate-700">{dep}</td>
                                    <td className="px-4 py-3 text-[#005a9c] font-semibold">{loan}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="grid gap-2">
                    {[
                        "A Nidhi Company that has failed to ensure profitability in the three preceding financial years shall not disburse any new loans surpassing 50% of the maximum amounts cited above.",
                        "A member cannot access any loans if they have a previous defaulting history relating to loan repayment.",
                    ].map((note, i) => (
                        <div key={i} className="flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-lg px-4 py-3">
                            <AlertTriangle size={14} className="text-amber-500 mt-0.5 shrink-0" />
                            <p className="text-[13px] text-slate-700">{note}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <p className="text-[14px] font-semibold text-[#072b47] mb-2">Loans can only be disbursed against the following securities:</p>
                    <div className="flex flex-wrap gap-2">
                        {["Gold (including gold jewellery)", "Silver (including silver jewellery)", "Property", "Fixed Deposit", "Insurance Policy"].map((sec, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 bg-[#e8f1fb] text-[#005a9c] border border-[#c0d8f0] px-3 py-1.5 rounded-full text-[13px] font-medium">
                                <CheckCircle2 size={12} /> {sec}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    /* ─── Checklist tab (custom JSX → documents slot) ─────────── */
    const checklistContent = (
        <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
                {/* Annual */}
                <div>
                    <h3 className="text-[15px] font-bold text-[#072b47] mb-4 flex items-center gap-2">
                        <Clock size={16} className="text-[#005a9c]" />
                        Checklist for Annual Compliance
                    </h3>
                    <div className="grid gap-2">
                        {[
                            "Form NDH-1", "Form NDH-2", "Form NDH-3", "Form NDH-4", "Form NDH-5",
                            "Declaration of Nidhi by the Central Government",
                            "Form ADT-1 (Auditor Appointment)",
                            "Preservation of Books of Accounts",
                            "Protection of the Statutory Register",
                            "Financial Statements",
                            "Director's Report",
                            "Statutory Meetings",
                            "Filing of Annual Income Tax Returns",
                            "Form AOC-4",
                            "Form MGT-7",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-lg px-3 py-2.5">
                                <CheckCircle2 size={14} className="text-[#005a9c] shrink-0" />
                                <span className="text-[13px] text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Event-based */}
                <div>
                    <h3 className="text-[15px] font-bold text-[#072b47] mb-4 flex items-center gap-2">
                        <FileText size={16} className="text-[#005a9c]" />
                        Checklist for Event-Based Compliance
                    </h3>
                    <div className="grid gap-2">
                        {[
                            "Change of name of the company",
                            "Alteration in the address of the Registered Office",
                            "Appointment or Resignation of any Director",
                            "Appointment or Resignation of any Auditor",
                            "Changes in objectives of Company (MOA)",
                            "Transfer of shares",
                            "Alteration in capital structure",
                            "Increase in authorised capital",
                            "Appointment of KMP (Key Managerial Personnel)",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5">
                                <CheckCircle2 size={14} className="text-slate-400 shrink-0" />
                                <span className="text-[13px] text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    /* ─── Penalties tab (custom JSX → features slot) ──────────── */
    const penaltiesContent = (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <AlertTriangle size={18} className="text-amber-500" />
                Penalties for Non-Compliance
            </h3>
            <p className="text-[14px] text-slate-600 leading-relaxed mb-4">
                When a Nidhi Company fails to comply with the required compliances as mentioned under the Companies Act or the Nidhi Company Rules, it and its officers become liable for the following penalties:
            </p>
            <div className="grid gap-4">
                {[
                    { severity: "Initial Penalty", desc: "A fine of Rs. 5,000 is levied on the company and its officers in case of non-payment or default of any required compliance." },
                    { severity: "Continuing Default", desc: "An additional fine of Rs. 50 per day is imposed for every day the default continues after the initial penalty." },
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 bg-red-50 border border-red-100 rounded-xl p-5">
                        <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-[14px] font-semibold text-red-700 mb-1">{item.severity}</p>
                            <p className="text-[13px] text-slate-700 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    /* ─── Other Information tab: Amendment Rules 2022 (custom JSX → postCompliance slot) ── */
    const otherInfoContent = (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <BookOpen size={18} className="text-[#005a9c]" />
                    The Nidhi Company (Amendment) Rules 2022
                </h3>
                <div className="grid gap-5">
                    {[
                        {
                            title: "Branch Definition",
                            desc: "A new definition of 'Branch' has been inserted. A Branch means a place other than the registered office of the Nidhi Company."
                        },
                        {
                            title: "Deposit Restrictions",
                            desc: "No company shall raise deposits from any member or grant loans to any member if: (a) it does not comply with the rules of Nidhi Company New Rules, or (b) its application in Form NDH-4 has been rejected by the Central Government. These restrictions do not apply to companies incorporated on or after the enforcement of the Nidhi Company Amended Rules."
                        },
                        {
                            title: "Declaration as Nidhi Company",
                            desc: "Any public company wanting to be declared as a Nidhi Company shall apply in Form NDH-4 within 120 days from the date of incorporation. Required conditions: minimum 200 members and Net Owned Funds of Rs. 20 lakhs or more. The Central Government conveys its decision within 45 days — if it fails to do so, the application is deemed approved."
                        },
                        {
                            title: "Fit and Proper Person Criteria",
                            desc: "Directors and promoters must submit a declaration of being a 'fit and proper person' with Form NDH-4. Disqualifications include: pending complaints under Section 154 of CrPC, chargesheet in economic offences, restraining orders in company/securities law, conviction involving moral turpitude, insolvency, unsound mind, being a wilful defaulter, fugitive economic offender, or being a director in 5+ or promoter in 3+ Nidhi Companies."
                        },
                        {
                            title: "Minimum Paid-Up Share Capital",
                            desc: "The minimum paid-up share capital has been raised from Rs. 5 lakhs to Rs. 10 lakhs under the 2022 amendment."
                        },
                        {
                            title: "Existing Nidhi Companies — Transition Period",
                            desc: "Nidhi Companies existing on the date of enforcement of the new rules must comply with all requirements within 18 months from the date of such enforcement."
                        },
                        {
                            title: "Rule 5 — Exemption for New Companies",
                            desc: "Rule 5 (minimum members, NOF requirements) shall not apply to companies incorporated as Nidhi Companies on or after the enforcement of Nidhi Company New Rules 2022. The NDH-1 filing requirement within 90 days of incorporation shall also not apply to such newly incorporated companies."
                        },
                        {
                            title: "Restrictions on Nidhi Company (New Rules)",
                            desc: "A Nidhi Company shall not: (1) raise loans from banks, financial institutions, or any other source to advance loans to its members. (2) Acquire or purchase securities or control the composition of the Board of any other company, or enter into management change arrangements."
                        },
                        {
                            title: "Transfer of Shares",
                            desc: "No member shall transfer more than 50% of their shares during the subsistence of any loan or deposit. However, members shall retain the minimum number of shares required under the rules."
                        },
                        {
                            title: "Net Owned Funds — Revised Requirement",
                            desc: "The requirement for Net Owned Funds (NOF) for Nidhi Companies has been revised from Rs. 10 lakhs to Rs. 20 lakhs under the 2022 amendment."
                        },
                        {
                            title: "Opening of Branches",
                            desc: "To open more than three branches within a district or any branch outside the district, a Nidhi Company must apply in Form NDH-2 with the requisite fee. Branches cannot be opened unless the company has filed its financial statements and annual return with the Registrar. Branches outside the state where the registered office is situated are not permitted."
                        },
                        {
                            title: "Closing of Branches",
                            desc: "A Nidhi Company cannot close any branch without: (1) Board approval with a deposit repayment and loan recovery plan, and (2) prior approval from the Regional Director. Post-approval, the company must publish in a local newspaper 30 days before closure, fix a closure notice on the branch notice board for 30 days, and intimate the Registrar within 30 days of closure."
                        },
                        {
                            title: "Silver Jewellery as Loan Security",
                            desc: "Under the amended Rules 12 and 20, 'silver' has been added alongside 'gold' as acceptable loan security. Nidhi Companies can now grant loans to members against silver jewellery as well."
                        },
                        {
                            title: "Joint Shareholders Loan",
                            desc: "In the case of joint shareholders, loans can only be granted to the member whose name appears first in the register of members."
                        },
                        {
                            title: "Dividend Cap",
                            desc: "A Nidhi Company shall not declare dividends exceeding 25% in any financial year. This has been added under Rule 18 of the Nidhi Company New Rules by substituting the old Rule 18."
                        },
                        {
                            title: "Forms Amendment",
                            desc: "Changes have been made to NDH-2, NDH-3, and NDH-4 form headings and contents. A new Form NDH-5 has been inserted after NDH-4, and the application fee waiver window was extended from 6 months to 9 months from the enforcement of the new rules."
                        },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-5">
                            <div className="w-8 h-8 rounded-lg bg-[#e8f1fb] flex items-center justify-center shrink-0 font-bold text-[#005a9c] text-[12px]">{i + 1}</div>
                            <div>
                                <p className="text-[14px] font-semibold text-[#072b47] mb-1">{item.title}</p>
                                <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= HERO ================= */}
            <HeroLayout
                heroTitleMain="Nidhi Company "
                heroTitleSuffix="Compliance"
                heroSubtitle="Annual & Event-Based Compliance under Nidhi Rules 2014 & Amendment Rules 2022"
                heroDescription="Ensure complete Nidhi Company compliance with Vyombiz. From NDH form filings to AGM obligations, loan limits, amendment compliance, and event-based ROC requirements — handled end-to-end by our experts."
                whatsIncludedList={[
                    "NDH-1, NDH-2, NDH-3, NDH-4 Filing",
                    "AOC-4 & MGT-7 (RoC Filing)",
                    "Income Tax Return Filing",
                    "Amendment Rules 2022 Compliance"
                ]}
                stats={[
                    { count: "200+", label: "Min. Members Required", icon: <Users size={20} /> },
                    { count: "₹20L", label: "Minimum NOF Requirement", icon: <Briefcase size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    advantages: "Limitations",
                    eligibility: "Compliances",
                    documents: "Checklist",
                    features: "Penalties",
                    postCompliance: "Other Information",
                    faq: "FAQs"
                }}
                overview={{
                    badge: "Companies Act 2013 – Section 406 | Nidhi Rules 2014 & Amendment Rules 2022",
                    title: "Nidhi Company Compliance –",
                    highlightTitle: "An Overview",
                    description: [
                        "A Nidhi Company falls under Section 406 of the Companies Act, 2013, read with Nidhi Rules 2014 and Amendment Rules 2022. Its primary undertakings are lending and borrowing money among its members. Such companies fall under the non-banking financing sector.",
                        "Like other types of companies, the Nidhi Company must file tax and compliance forms annually. It should satisfy all the rules and regulations under the Companies Act, 2013, Nidhi Company Rules 2014, and Nidhi Company (Amendment) Rules 2022.",
                        "If a Nidhi Company fails to follow the required compliances, it will be made liable for such default along with its officers, and a penalty will be levied. Nidhi Company is treated as a Public Limited Company and must follow all required compliances to prevent any legal actions.",
                    ],
                    whyIdealTitle: "Post-Incorporation Requirements of a Nidhi Company",
                    whyIdealList: [
                        { title: "Minimum 200 Members", desc: "Within one year of incorporation, the Nidhi Company must have a minimum of 200 members." },
                        { title: "Net Owned Funds — Rs. 20 Lakhs", desc: "The Net Owned Funds (NOFs) must be at least Rs. 20 lakhs within the first year of incorporation." },
                        { title: "NOF to Deposit Ratio ≤ 1:20", desc: "The ratio of NOFs to deposits must not exceed 1:20 at any point in time." },
                        { title: "Unencumbered Term Deposits ≥ 10%", desc: "Unencumbered term deposits must not be lower than 10% of the outstanding deposits as cited in Rule 14 of Nidhi Rules 2014 and Amended Rules 2022." },
                    ]
                }}
                advantages={limitationsContent}
                eligibility={compliancesContent}
                documents={checklistContent}
                features={penaltiesContent}
                postCompliance={otherInfoContent}
                whyChooseUs={{
                    title: "How Vyombiz Helps with Nidhi Company Compliance",
                    subtitle: "Experienced professionals, nominal charges, and complete assistance until resolution.",
                    list: [
                        { title: "Experienced Compliance Professionals", desc: "Availability of experienced professionals and compliance experts who are well-versed with Nidhi Rules 2014 and the Amendment Rules 2022." },
                        { title: "Nominal Charges", desc: "We offer nominal, transparent charges for all compliance-related services — no hidden fees." },
                        { title: "Complete Client Assistance", desc: "Complete assistance to clients right until the point of addressing the specific compliance requirement, from start to finish." },
                        { title: "Simplification of Complex Compliances", desc: "We ensure simplification of intricate and multi-layered compliances, making the process straightforward and hassle-free." },
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common questions about Nidhi Company Compliance answered by our experts"
                faqs={faqs}
            />

        </div>
    );
};

export default NidhiCompanyCompliance;
