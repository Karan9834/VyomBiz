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
                    List of Mandatory Section 8 Company Compliances
                </h3>
                <div className="grid gap-4">
                    {[
                        {
                            title: "Appointment of Auditor",
                            desc: "It is compulsory for a Section 8 Company to appoint an auditor to take care of their financial recordings every year."
                        },
                        {
                            title: "Maintaining Registers",
                            desc: "Maintaining statutory records in registers is expected from Section 8 Companies. These registers are maintained on a yearly basis and contain information related to members, loans, charges, and investments."
                        },
                        {
                            title: "Maintenance of Financial Statements",
                            desc: "Financial records of a Section 8 Company are maintained on an annual basis and presented before the Registrar. Financial records consist of Trading Account, Profit and Loss Account, and Balance Sheet."
                        },
                        {
                            title: "Preparing Director's Report",
                            desc: "Section 134 of the Companies Act, 2013 requires filing Form AOC-4 along with the Director's Report, giving shareholders a preview of the financial position and business scope. The signed minutes of meetings must be maintained at the Registered Office."
                        },
                        {
                            title: "Income Tax Return Filing",
                            desc: "Section 8 Companies are required to file Income Tax Returns on or before 30th September of the next fiscal year. Companies registered under Section 12A and 80G may avail tax exemption benefits."
                        },
                        {
                            title: "Conduct Board Meeting",
                            desc: "Board meetings should be held at least twice a year for small companies. The gap between the two meetings should not be more than 90 days."
                        },
                        {
                            title: "Conduct Annual General Meeting (AGM)",
                            desc: "The AGM of the Section 8 Company should be held yearly on or before 30th September. All directors, members, and auditors must attend. Minimum 21 days' notice is required. Form MGT-15 is used to submit the AGM report within 30 days of the meeting."
                        },
                        {
                            title: "Filing of Financial Return with RoC",
                            desc: "E-form AOC-4 is used to file the copy of financial statements. It is filed within 30 days from the date on which the Annual General Meeting is held."
                        },
                        {
                            title: "Filing of Annual Return with RoC",
                            desc: "Form MGT-7 is used to file the annual return of the company within 60 days from the conclusion of the AGM. If no AGM is held, the annual return must be filed within 60 days from the day the AGM ought to have been held (30th September)."
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
                Penalties to be Charged in Case of Non-Compliance
            </h3>
            <p className="text-[14px] text-slate-600 leading-relaxed mb-4">
                The Ministry of Corporate Affairs has the authority to impose certain penalties in case it encounters any non-compliance with the prescribed procedures.
            </p>
            <div className="grid gap-4">
                {[
                    {
                        severity: "License Revocation",
                        desc: "The Central Government may revoke the licence granted to the organization if it finds that the organization is functioning fraudulently or in a manner violative of the object of the organization."
                    },
                    {
                        severity: "Financial Fine",
                        desc: "The organization will be punishable with a fine of not less than Rs. 10 lakh, which may extend up to Rs. 1 crore."
                    },
                    {
                        severity: "Imprisonment of Directors",
                        desc: "The directors and every officer of the organization who are in default will be punishable with imprisonment for a term up to three years or with a fine of up to Rs. 25 lakh, or with both."
                    },
                    {
                        severity: "Fraudulent Conduct",
                        desc: "If it is found that the affairs of the organization were conducted fraudulently, every officer in default will be liable for action under Section 447 of the Companies Act, 2013."
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
                heroSubtitle="MCA-Mandated Annual & Event-Based Compliance for Non-Profit Companies"
                heroDescription="Ensure complete Section 8 Company compliance with Vyombiz experts. From auditor appointments to ROC filings, AGM compliance, income tax returns, and event-based obligations — we handle it all."
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
                    advantages: "Benefit",
                    eligibility: "Listicles",
                    documents: "Documents Required",
                    features: "Other Information",
                    postCompliance: "Penalty",
                    faq: "FAQs"
                }}
                overview={{
                    badge: "Companies Act, 2013 – Section 8 Compliance",
                    title: "Section 8 Company Compliance –",
                    highlightTitle: "An Overview",
                    description: [
                        "The Companies Act, 2013 has made it mandatory for all Section 8 Companies to adhere to Section 8 Compliance with the MCA (Ministry of Corporate Affairs).",
                        "The purpose of forming a Section 8 Company is to promote, encourage, and nourish activities related to art, science, sports, commerce, charitable activities, etc. Section 8 Companies can be categorized as Non-Governmental Organizations (NGOs). These companies enjoy the liberty of being treated as a 'Limited Company' even though the word 'Limited' is not added at the end of their names.",
                        "Concisely, Section 8 Companies work in the direction of promoting needy communities and sectors in India. These companies are not liable to give income or dividend to their members.",
                    ],
                    whyIdealTitle: "What Makes Section 8 Compliance Critical?",
                    whyIdealList: [
                        { title: "Mandatory MCA Compliance", desc: "The Companies Act, 2013 mandates all Section 8 Companies to meet annual and event-based compliance requirements with the MCA." },
                        { title: "Non-Profit Entity Protection", desc: "Section 8 Companies are non-profit entities — compliance ensures their charitable objectives and license are protected from revocation." },
                        { title: "Tax Exemption Eligibility", desc: "Compliance with Sections 12A and 80G of the Income Tax Act enables Section 8 Companies to avail significant tax exemption benefits." },
                        { title: "Credibility & Trust", desc: "Meeting all compliance requirements builds trust with donors, beneficiaries, and stakeholders, ensuring long-term organizational credibility." },
                    ]
                }}
                advantages={{
                    title: "Benefits of Section 8 Company Compliance",
                    subtitle: "Why staying compliant is the best strategy for your Section 8 Company.",
                    list: [
                        { title: "Better Credibility", desc: "Timely compliance gives the company better credibility in the eyes of stakeholders, donors, government authorities, and the general public." },
                        { title: "Legal Protection", desc: "Compliance protects the company from any legal trouble, notices, or actions initiated by the MCA or Income Tax Department." },
                        { title: "Avoid Penalties", desc: "Adhering to all compliances helps the company circumvent penalties — including fines of up to Rs. 1 crore and licence revocation." },
                        { title: "Builds Customer Trust", desc: "Transparent and regular compliance works in the direction of forming trust amongst customers, donors, and beneficiaries." },
                        { title: "Tax Exemption Benefits", desc: "Compliance with Section 12A and 80G enables the company to avail income tax exemptions, significantly reducing the tax burden." },
                        { title: "Continuous Operations", desc: "Meeting all compliance obligations ensures the organization's licence remains valid and operations continue without interruption." },
                    ]
                }}
                eligibility={listiclesContent}
                documents={{
                    title: "Documents Required for Annual Compliances",
                    description: "Essential documents required for Section 8 Company annual compliance filings.",
                    list: [
                        "Memorandum of Association (MOA)",
                        "Articles of Association (AOA)",
                        "Digital Signature Certificate (DSC)",
                        "Certificate of Incorporation",
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413575b8?auto=format&fit=crop&w=800"
                }}
                features={otherInfoContent}
                postCompliance={penaltyContent}
                whyChooseUs={{
                    title: "How Vyombiz Helps with Section 8 Company Compliance",
                    subtitle: "End-to-end compliance support — so you can focus on your mission while we handle the paperwork.",
                    list: [
                        { title: "Fill the Form", desc: "Simply fill out our quick intake form — our team will get in touch within 1 hour to begin your Section 8 compliance journey." },
                        { title: "Get a Call Back", desc: "We provide a prompt call back from our compliance experts to understand your specific requirements and customise a solution for you." },
                        { title: "Submit Documents", desc: "Our team guides you through document collection — MOA, AOA, DSC, and all other required annexures — ensuring everything is complete and correct." },
                        { title: "Track Progress", desc: "We keep you updated on every step of the compliance filing process, right from preparation to submission and approval." },
                        { title: "Get Deliverable", desc: "Receive all compliance certificates, acknowledgements, and filings in a timely manner — completely hassle-free with Vyombiz." },
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common questions about Section 8 Company Compliance answered by our experts"
                faqs={faqs}
            />

        </div>
    );
};

export default Section8CompanyCompliance;
