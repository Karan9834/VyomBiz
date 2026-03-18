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
 * Section 8 Company Compliance Page - Vyombiz
 * Nav Tabs: Overview | Benefit | Listicles | Other Information | Penalty | Vyombiz Support | FAQs
 */

const Section8CompanyCompliance = () => {

    /* ─── FAQs ───────────────────────────────────────────────── */
    const faqs = [
        {
            question: "Is compliance mandatory for Section 8 companies?",
            answer: "Yes. Section 8 companies must comply with annual ROC filings, board meetings, financial reporting, and other regulatory requirements under the Companies Act, 2013."
        },
        {
            question: "How many board meetings are required for a Section 8 company?",
            answer: "A minimum of two board meetings every year must be conducted."
        },
        {
            question: "What happens if Section 8 compliance is not completed?",
            answer: "Failure to comply can result in penalties, legal notices, and in severe cases cancellation of the company's Section 8 status."
        },
        {
            question: "Do Section 8 companies need to file income tax returns?",
            answer: "Yes. Even if the company has tax exemptions, it must file income tax returns and maintain proper records."
        },
        {
            question: "Can Section 8 Company be incorporated both as Private and Public Limited Company?",
            answer: "Yes, it is the candidate's decision to incorporate a Section 8 Company as a private or public limited company, upon meeting the compliance requirements — 2 Directors and 2 members for a private company, and 3 Directors and 7 members for a Public Limited Company. However, One Person Company (OPC) cannot be incorporated as a Section 8 Company as per Rule 3 of the Companies (Incorporation) Rules, 2014."
        },
        {
            question: "Are Secretarial standards applicable on a Section 8 Company?",
            answer: "Yes, secretarial standards issued by the Institute of Company Secretaries of India (ICSI) are applicable to Section 8 Companies. They must adhere to SS-1 (Board Meetings) and SS-2 (General Meetings) standards."
        },
        {
            question: "What is the penalty for non-compliance of requirements on the Annual General Meeting?",
            answer: "If a Section 8 Company fails to hold its Annual General Meeting, the company and every officer in default is liable to a fine of up to Rs. 1,00,000, and in case of a continuing default, an additional fine of up to Rs. 5,000 per day."
        },
        {
            question: "What happens if I don't file my Annual Return?",
            answer: "Failure to file the annual return (Form MGT-7) within the stipulated time attracts a penalty of Rs. 100 per day for each day of default. Additionally, the company and its officers may be held personally liable."
        },
        {
            question: "Is it possible for a foreign Company to be registered as a Section 8 Company in India?",
            answer: "No, a foreign company cannot directly be registered as a Section 8 Company in India. However, a company incorporated in India with foreign promoters can apply for Section 8 status if it meets the prescribed conditions."
        },
        {
            question: "Can a company be treated as Section 8 Company as well as a small company?",
            answer: "Yes, a Section 8 Company can also be treated as a small company, provided that it has not exceeded the thresholds prescribed for small companies under Section 2(85) of the Companies Act, 2013."
        },
        {
            question: "Is there any relaxation in Stamp duty payment on issuance of share certificate by a Section 8 Company?",
            answer: "Yes, Section 8 Companies enjoy certain exemptions and relaxations from stamp duty in certain states, as these entities are treated as non-profit organizations. The extent of relaxation depends on the state where the company is registered."
        },
        {
            question: "Can Section 8 Companies receive contributions from overseas or non-residents?",
            answer: "Section 8 Companies can receive foreign contributions only if they are registered under the Foreign Contribution (Regulation) Act, 2010 (FCRA). Without FCRA registration, receiving overseas contributions is prohibited."
        },
        {
            question: "Can a Society registered under the Societies Registration Act, 1860 be converted into Section 8 Company?",
            answer: "Yes, a Society registered under the Societies Registration Act, 1860, can be converted into a Section 8 Company by following the process prescribed under Section 366 and Chapter XXI (Part I) of the Companies Act, 2013."
        },
        {
            question: "Are there any prescribed criteria with respect to Minimum and Maximum number of directors in a Section 8 Company?",
            answer: "For a Section 8 Company incorporated as a Private Limited Company, a minimum of 2 directors is required. For a Public Limited Company, a minimum of 3 directors is required. There is no prescribed maximum limit for the number of directors."
        },
    ];

    /* ─── Listicles — Annual + Event-based Compliances (custom JSX → eligibility slot) ── */
    const listiclesContent = (
        <div className="space-y-10">

            {/* List of mandatory compliances */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-6 flex items-center gap-2">
                    <BookOpen size={18} className="text-[#005a9c]" />
                    Annual Compliance Checklist for Section 8 Companies
                </h3>
                <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                    To stay compliant with corporate regulations, organizations must complete the following activities every financial year:
                </p>
                <div className="grid gap-4">
                    {[
                        {
                            title: "Board Meetings",
                            desc: "A minimum of two board meetings every year must be conducted to review operations, finances, and governance matters."
                        },
                        {
                            title: "Annual General Meeting (AGM)",
                            desc: "An AGM must be held every year to present financial statements and discuss key decisions with members. The AGM should be held on or before 30th September with 21 days' notice."
                        },
                        {
                            title: "Filing of Financial Statements (Form AOC-4)",
                            desc: "The company must submit its financial statements to the Registrar of Companies within 30 days from the date of the AGM."
                        },
                        {
                            title: "Annual Return Filing (Form MGT-7)",
                            desc: "Every Section 8 company must file an annual return within 60 days from the conclusion of the AGM, containing details about shareholders, directors, and company activities."
                        },
                        {
                            title: "Income Tax Compliance",
                            desc: "If the organization has tax exemptions under Section 12A or 80G, periodic tax filings and compliance must be maintained. ITR must be filed by 30th September."
                        },
                        {
                            title: "Maintaining Statutory Registers",
                            desc: "Maintaining statutory records in registers is expected from Section 8 Companies. These registers are maintained on a yearly basis and contain information related to members, loans, charges, and investments."
                        },
                        {
                            title: "Preparing Director's Report",
                            desc: "Section 134 of the Companies Act, 2013 requires filing Form AOC-4 along with the Director's Report, giving shareholders a preview of the financial position and business scope."
                        },
                        {
                            title: "Appointment of Auditor",
                            desc: "It is compulsory for a Section 8 Company to appoint an auditor to take care of their financial recordings every year."
                        },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-5">
                            <div className="w-8 h-8 rounded-lg bg-[#e8f1fb] flex items-center justify-center shrink-0 font-bold text-[#005a9c] text-[13px]">{i + 1}</div>
                            <div>
                                <p className="text-[14px] font-semibold text-[#072b47] mb-1">{item.title}</p>
                                <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Event-based compliances */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-[#005a9c]" />
                    Event-Based Annual Compliances of Section 8 Company
                </h3>
                <p className="text-[14px] text-slate-500 mb-4 leading-relaxed">
                    Event-based compliances, as the name suggests, are compliances that must be documented on the occurrence of specific events. Unlike annual compliances, these are non-periodical in nature.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                    {[
                        "Transfer of shares",
                        "Allotment of shares",
                        "Appointment / Resignation of Directors",
                        "Appointment / Resignation of Auditors",
                        "Modification in company's name",
                        "Modification in company's MOA",
                        "Appointment of Key Managerial Personnel (KMP)",
                        "Receipt of share application money",
                        "Any alteration in the company's structure",
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                            <CheckCircle2 size={15} className="text-[#005a9c] shrink-0" />
                            <span className="text-[14px] text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    /* ─── Other Information: Tax Compliance + Due Dates (custom JSX → features slot) ── */
    const otherInfoContent = (
        <div className="space-y-10">

            {/* Tax Compliance */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <BarChart2 size={18} className="text-[#005a9c]" />
                    Tax Compliance for Section 8 Companies
                </h3>
                <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                    A Section 8 Company is bound to pay corporate tax as specified under the Income Tax Act. However, by adopting certain measures, the company can exempt certain portions of its income from income tax. To entertain such exemptions, the company needs to fulfil the following compliances:
                </p>
                <div className="grid gap-3">
                    {[
                        "Section 8 companies must be registered under Section 12A of the Income Tax Act, with the Principal Commissioner using Form 10A.",
                        "The company must adhere to the conditions mentioned in Section 11 to be eligible for income tax exemption.",
                        "Section 80G must approve the company through Form 10B.",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Due Dates Table */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-[#005a9c]" />
                    Due Dates for Filing Section 8 Company Compliances
                </h3>
                <p className="text-[14px] text-slate-500 mb-4 leading-relaxed">
                    Non-compliance can lead to penalties. The best way to avoid them is to follow all compliances within the stipulated period of time.
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-[14px]">
                        <thead>
                            <tr className="bg-[#072b47] text-white">
                                <th className="text-left px-5 py-3 font-semibold">Compliance</th>
                                <th className="text-left px-5 py-3 font-semibold">Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["AGM (Annual General Meeting)", "30th September"],
                                ["AOC-4 (Financial Statements)", "Within 30 days of AGM"],
                                ["MGT-7 (Annual Return)", "Within 60 days of AGM"],
                                ["Income Tax Return", "30th September"],
                            ].map(([compliance, due], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-5 py-3 text-slate-700 font-medium">{compliance}</td>
                                    <td className="px-5 py-3 text-[#005a9c] font-semibold">{due}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    /* ─── Penalty section (custom JSX → postCompliance slot) ─── */
    const penaltyContent = (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <AlertTriangle size={18} className="text-amber-500" />
                Penalties for Non-Compliance
            </h3>
            <p className="text-[14px] text-slate-600 leading-relaxed mb-4">
                Failure to meet statutory obligations can result in significant penalties and regulatory consequences. Common risks include:
            </p>
            <div className="grid gap-4">
                {[
                    {
                        severity: "Monetary Penalties",
                        desc: "Monetary penalties imposed by the Registrar of Companies. For delayed AGM: fine up to Rs. 1,00,000, and Rs. 5,000 per day for continuing default."
                    },
                    {
                        severity: "Disqualification of Directors",
                        desc: "Directors may be disqualified from holding board positions if compliance requirements are ignored."
                    },
                    {
                        severity: "Loss of Tax Benefits",
                        desc: "Loss of tax benefits under Section 12A and 80G of the Income Tax Act."
                    },
                    {
                        severity: "License Revocation",
                        desc: "The Central Government may revoke the licence granted to the organization if it finds that the organization is functioning fraudulently or in a manner violative of the object of the organization."
                    },
                    {
                        severity: "Legal Action",
                        desc: "Legal action or cancellation of Section 8 status by regulatory authorities."
                    },
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

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= HERO ================= */}
            <HeroLayout
                heroTitleMain="Section 8 Company "
                heroTitleSuffix="Compliance"
                heroSubtitle="Stay Compliant. Sustain Your Mission."
                heroDescription="Section 8 companies are created to serve social, charitable, and non-profit objectives—but maintaining compliance with the Companies Act, 2013 is equally important to keep that mission alive. With expert compliance support, your organization can focus on impact while the legal responsibilities are handled professionally. Ensure seamless Section 8 compliance with expert guidance."
                whatsIncludedList={[
                    "Annual Return (MGT-7) Filing",
                    "Financial Statements (AOC-4)",
                    "Income Tax & GST Returns",
                    "Event-Based ROC Compliance"
                ]}
                stats={[
                    { count: "100%", label: "Compliance Assurance", icon: <Shield size={20} /> },
                    { count: "Zero", label: "Penalty Risk", icon: <Briefcase size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Users size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    advantages: "Benefits",
                    eligibility: "Listicles",
                    documents: "Documents Required",
                    features: "Other Information",
                    postCompliance: "Penalty",
                    faq: "FAQs"
                }}
                overview={{
                    badge: "Companies Act, 2013 – Section 8 Compliance",
                    title: "What is Section 8 Company",
                    highlightTitle: "Compliance?",
                    description: [
                        "A Section 8 Company is a special type of non-profit entity registered under the Companies Act, 2013 with the objective of promoting social welfare, education, research, art, charity, environmental protection, and similar causes.",
                        "Unlike other companies, Section 8 companies operate without the motive of profit distribution. However, they must strictly follow regulatory requirements set by the Ministry of Corporate Affairs (MCA).",
                        "Regular compliance ensures that the organization maintains its legal status, avoids penalties, and continues to operate transparently.",
                        "Vyombiz managed by Clink Consultancy Services Private Limited helps non-profit organizations handle their statutory responsibilities efficiently, ensuring full compliance with corporate laws and regulatory frameworks."
                    ],
                    whyIdealTitle: "Why Section 8 Compliance is Important",
                    whyIdealList: [
                        { title: "Maintain legal recognition", desc: "Maintain legal recognition under the Companies Act." },
                        { title: "Avoid heavy penalties", desc: "Avoid heavy penalties and legal complications." },
                        { title: "Build trust among donors", desc: "Build trust among donors, partners, and stakeholders." },
                        { title: "Ensure transparency", desc: "Ensure transparency in financial reporting and continue eligibility for grants and funding." },
                    ]
                }}
                advantages={{
                    title: "Why Section 8 Company Compliance is Important",
                    subtitle: "Maintaining compliance is essential not only for legal purposes but also for maintaining credibility among donors, stakeholders, and government authorities.",
                    list: [
                        { title: "Maintain legal recognition", desc: "Maintain legal recognition under the Companies Act." },
                        { title: "Avoid heavy penalties", desc: "Avoid heavy penalties and legal complications." },
                        { title: "Build trust among donors", desc: "Build trust among donors and partners." },
                        { title: "Ensure transparency", desc: "Ensure transparency in financial reporting." },
                        { title: "Continue eligibility for grants", desc: "Continue eligibility for grants and funding." },
                        { title: "Structured compliance systems", desc: "Vyombiz supports organizations in maintaining structured compliance systems so they can focus on their social mission." },
                    ]
                }}
                eligibility={listiclesContent}
                documents={{
                    title: "Documents Required for Section 8 Compliance",
                    description: "To complete annual compliance filings, certain documents and records are required:",
                    list: [
                        "Certificate of Incorporation",
                        "Memorandum and Articles of Association (MOA & AOA)",
                        "Financial Statements and Balance Sheet",
                        "Board Meeting Minutes",
                        "Director Identification Numbers (DIN) of directors",
                        "Auditor's Report",
                        "Annual Return details",
                    ],
                    imageUrl: "Documents.jpg"
                }}
                features={otherInfoContent}
                postCompliance={penaltyContent}
                whyChooseUs={{
                    title: "How Vyombiz Helps with Section 8 Company Compliance",
                    subtitle: "Managing compliance can be complex for non-profit organizations that are focused on social impact. Professional support helps simplify the process and ensures all legal requirements are fulfilled.",
                    list: [
                        { title: "Annual ROC filing for Section 8 companies", desc: "We handle all your ROC filing needs accurately and on time." },
                        { title: "Board meeting documentation support", desc: "Our experts prepare and maintain all board meeting records and minutes." },
                        { title: "Annual return and financial statement filing", desc: "We ensure timely and error-free filing of AOC-4 and MGT-7." },
                        { title: "Compliance reminders and calendar management", desc: "Never miss a deadline with our proactive compliance tracking system." },
                        { title: "Corporate governance advisory", desc: "Get expert advice on maintaining best practices in corporate governance." },
                        { title: "Legal documentation and reporting", desc: "We manage all statutory documentation and reporting requirements seamlessly." },
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions (FAQs)"
                subtitle="Common questions about Section 8 Company Compliance answered by our experts"
                faqs={faqs}
            />

        </div>
    );
};

export default Section8CompanyCompliance;