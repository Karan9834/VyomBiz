import React from "react";
import { CheckCircle2, AlertTriangle, Clock, Users, FileText, Shield, BookOpen, BarChart2, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Change in Registered Office
 * Nav: Overview | Reasons | Type | Procedure | Documents Required | FAQs
 */
const ChangeinRegisteredOffice = () => {
    const faqs = [
        { question: "What is the registered office of the company?", answer: "The registered office of a company is the official address where all official correspondence related to the company is sent. It determines the company's domicile and the jurisdiction of the Registrar of Companies (ROC). Every company must have a registered office registered with the Ministry of Corporate Affairs." },
        { question: "Can I change the registered office of the company?", answer: "Yes. A company can change its registered office. The procedure and forms required depend on whether the change is within the same city, to another city within the same state and ROC, to another ROC within the same state, or from one state to another. All changes must be intimated to the ROC." },
        { question: "How long does it take to change the registered office address?", answer: "A change within the same city and same ROC jurisdiction typically takes 15–20 business days after filing Form INC-22. Changes involving another ROC or another state can take 30–60 business days, subject to Regional Director approval." },
        { question: "Is it mandatory to alter MOA and AOA as per the Companies Act, 2013?", answer: "Yes, when the registered office shifts from one state to another, it requires amending the State Clause in the MOA. An alteration of the MOA requires a Special Resolution and Regional Director approval via Form INC-23, followed by filing Form INC-28 and INC-22 with the ROC." },
        { question: "Is the registered office same as the head office?", answer: "No. The registered office is the official legal address registered with the MCA. The head office is the primary operational base of the company. Both can be different locations. The registered office can even be a residential property." },
        { question: "Is changing the registered office an easy process?", answer: "The complexity depends on the type of change. A change within the same city requires only Form INC-22. A change involving another ROC or another state requires EGM Special Resolution, MGT-14, Regional Director approval (INC-23 or INC-24), and then INC-22 — making it a multi-step process." },
        { question: "How to intimate the change of registered office to the ROC?", answer: "Intimation to the ROC is done by filing Form INC-22 within 15 days of the change. For changes involving an EGM special resolution, Form MGT-14 must also be filed within 30 days. For cross-ROC or inter-state changes, additional forms (INC-23, INC-28) are required." },
        { question: "What are the documents required under Form INC-22?", answer: "Documents required: (1) Copy of the registered office address. (2) Copy of utility bills not older than 2 months (electricity/ water/ gas bill). (3) NOC for the use of premises obtained from the owner. (4) Lease agreement or sale deed if applicable." },
        { question: "Can two companies have the same registered address?", answer: "Yes, two or more companies can share the same registered address. This is common in shared workspaces and virtual offices — provided proper NOC is obtained from the owner and all compliance requirements are met." },
        { question: "What are the documents required at the time of finalizing a place for the company's registered office?", answer: "Required: Water Bill / Electricity Bill, Property Tax Receipt, NOC obtained from the landlord regarding the Registered Office, and Lease Agreement between the landlord and the company. The address on the utility bill must match the NOC certificate and rental agreement." },
    ];

    /* ─── Reasons (custom JSX → advantages slot) ─────────── */
    const reasonsContent = (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-[#005a9c]" />
                Reasons for Change in Registered Office Address
            </h3>
            <p className="text-[14px] text-slate-500 mb-4 leading-relaxed">
                Stakeholders and the board of directors' residential area often decide the location of the registered office. In some cases, however, a change becomes necessary:
            </p>
            <div className="grid gap-4 mb-8">
                {[
                    { title: "Business Growth Requires Larger Space", desc: "When the company is growing at a faster pace and the existing office space and infrastructure no longer fits the company's current scale or operational requirements." },
                    { title: "Expiry of Lease on Current Premises", desc: "If the company is in the last period of its lease and planning to hire another office space, a registered office change becomes necessary." },
                    { title: "Exploring New Business Opportunities", desc: "If the company is planning to explore new genres for business growth and wants to shift its registered office to a location with better market opportunities." },
                    { title: "Investment or Acquisition by Another Company", desc: "If another company is investing in or acquiring your company, the registered office address may mandatorily need to shift as part of the transaction structure." },
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                        <div className="w-8 h-8 rounded-full bg-[#072b47] text-white flex items-center justify-center shrink-0 text-[12px] font-bold">{i + 1}</div>
                        <div>
                            <p className="text-[14px] font-bold text-[#072b47] mb-0.5">{item.title}</p>
                            <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h4 className="text-[15px] font-bold text-[#072b47] mb-3">Registered Office Requirement During Company Registration</h4>
            <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                The registered office must be announced at the time of incorporation. The following documents are required at that stage:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
                {["Water Bill / Electricity Bill", "Property Tax Receipt", "NOC from landlord regarding Registered Office", "Lease Agreement between landlord and the company"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#e8f1fb] border border-[#c0d8f0] rounded-lg px-4 py-2.5">
                        <CheckCircle2 size={13} className="text-[#005a9c] shrink-0" />
                        <span className="text-[13px] text-slate-700">{item}</span>
                    </div>
                ))}
            </div>
            <p className="text-[13px] text-slate-500 mt-3 bg-amber-50 border border-amber-100 rounded-lg px-4 py-3">
                <AlertTriangle size={14} className="inline text-amber-500 mr-1.5" />
                Note: Vacant land or a building under construction cannot be assigned as a registered office. A residential property can be declared as the registered office of a company.
            </p>
        </div>
    );

    /* ─── Types (custom JSX → features slot) ─────────── */
    const typeContent = (
        <div className="space-y-5">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <BarChart2 size={18} className="text-[#005a9c]" />
                Types of Registered Office Address Change
            </h3>
            <div className="grid gap-4">
                {[
                    { num: "01", title: "Change within the Same City / Town / Village (Same ROC)", desc: "Change of registered office address within the same city, town, or village — under the same Registrar of Companies jurisdiction. Requires only Form INC-22 within 15 days.", forms: ["Board Resolution", "Form INC-22 within 15 days"] },
                    { num: "02", title: "Change within the Same State — Outside Existing City/Town (Same ROC)", desc: "Change outside the boundaries of the existing city, town, or village — but within the same state and under the same ROC.", forms: ["Board Meeting + EGM", "Form MGT-14 within 30 days", "Form INC-22 within 15 days"] },
                    { num: "03", title: "Change within the Same State — From One ROC to Another ROC", desc: "Change from one Registrar of Companies jurisdiction to another, within the same state. Requires Regional Director approval via Form INC-23.", forms: ["EGM Special Resolution", "Form MGT-14", "Form INC-23 to Regional Director", "Form INC-22 after confirmation"] },
                    { num: "04", title: "Change from One State to Another State", desc: "Change from one state to another state or from one ROC jurisdiction to another. Requires NCLT/Central Government approval and alteration of the State Clause in MOA.", forms: ["EGM Special Resolution", "Form MGT-14", "INC-23 / INC-24 to Regional Director / CG", "Form INC-28 within 30 days", "Form INC-22 within 15 days"] },
                ].map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                        <div className="flex items-center gap-4 bg-[#072b47] px-5 py-3">
                            <span className="text-[20px] font-black text-white/20">{item.num}</span>
                            <p className="text-[14px] font-bold text-white">{item.title}</p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-slate-700 leading-relaxed mb-3">{item.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {item.forms.map((f, j) => (
                                    <span key={j} className="inline-flex items-center gap-1 bg-[#e8f1fb] border border-[#c0d8f0] text-[#005a9c] text-[11px] font-medium px-2 py-1 rounded-full">
                                        <CheckCircle2 size={10} />{f}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    /* ─── Procedure (custom JSX → eligibility slot) ─────────── */
    const procedureContent = (
        <div className="space-y-8">
            {[
                {
                    title: "Type 1: Change within the Same City/Town — Same ROC",
                    color: "bg-[#072b47]",
                    steps: ["A Board Meeting is conducted and a decision is made on the change of registered office.", "File Form INC-22 with the ROC within 15 days from the date of passing the Board Resolution."],
                    docs: ["Copy of the current registered office address", "Utility Bills copy (not older than 2 months)", "NOC in relation to the use of Premises obtained from the owner"]
                },
                {
                    title: "Type 2: Change Outside Existing City/Town — Same ROC",
                    color: "bg-[#005a9c]",
                    steps: ["A Board Meeting is conducted — fixing date, day, time, and venue of the EGM.", "A decision regarding the change in office address is passed in the Extra-Ordinary General Meeting.", "File Form MGT-14 with the ROC within 30 days from the date of passing the resolution.", "File Form INC-22 with the ROC within 15 days of passing the decision."],
                    docs: ["Form MGT-14: Certified copy of the resolution.", "Form INC-22: Copy of registered office address, utility bill (≤2 months), NOC from owner, and Special Resolution."]
                },
                {
                    title: "Type 3: Change from One ROC to Another ROC (Same State)",
                    color: "bg-slate-700",
                    steps: ["A Board Meeting finalizes the day, date, time, and venue of the EGM.", "A Special Resolution for alteration of MOA and shifting of Registered Office is passed in the EGM.", "Publish an advertisement in an English and a Vernacular newspaper with the updated address.", "File Form MGT-14 with the ROC within 30 days from the date of the resolution.", "File INC-23 application to the Regional Director.", "Publish a notice in a daily newspaper (English + Principal language of that district).", "Send individual notice to each debenture holder, depositor, and creditor.", "After Regional Director confirmation, file Form INC-22 with the ROC."],
                    docs: ["Certified True Copy of EGM Notice and Resolution", "Minutes of EGM", "Copy of Newspaper Advertisement", "Copy of Altered MOA", "Affidavit verifying the application", "List of creditors and debenture holders", "Declaration from KMP and two directors (no default to workmen)", "Copy of registered office address, utility bill, NOC (for INC-22)"]
                },
                {
                    title: "Type 4: Change from One State to Another State",
                    color: "bg-[#1a3a5c]",
                    steps: ["A Board Meeting decides the day, time, and venue for the EGM.", "A Special Resolution is passed in the EGM.", "Publish a notice in a newspaper (English + Principal language of the district).", "File Form MGT-14 within 30 days of the special resolution.", "Send individual notice to each debenture holder, depositor, and creditor.", "Obtain no objection from the Regional Director within 21 days.", "After RD confirmation, file Form INC-28 with the ROC within 30 days.", "File Form INC-22 with the ROC within 15 days of the change."],
                    docs: ["Certified True Copy of EGM Notice and Resolution", "Minutes of EGM", "Copy of Newspaper Advertisement", "Copy of Altered MOA", "Affidavit verifying the application", "List of creditors and debenture holders", "Declaration from KMP and two directors (no default to workmen)", "Copy of registered office address, utility bill (≤2 months), NOC from owner (for INC-22)"]
                },
            ].map((section, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className={`px-5 py-3 ${section.color}`}>
                        <p className="text-[14px] font-bold text-white">{section.title}</p>
                    </div>
                    <div className="p-5 grid sm:grid-cols-2 gap-5">
                        <div>
                            <p className="text-[12px] font-bold text-[#072b47] uppercase tracking-wider mb-2">Steps</p>
                            <div className="grid gap-2">
                                {section.steps.map((s, i) => (
                                    <div key={i} className="flex items-start gap-2 bg-[#f8fbff] rounded-lg px-3 py-2">
                                        <div className="w-5 h-5 rounded-full bg-[#005a9c] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">{i + 1}</div>
                                        <p className="text-[12px] text-slate-700 leading-relaxed">{s}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-[12px] font-bold text-[#072b47] uppercase tracking-wider mb-2">Documents</p>
                            <div className="grid gap-1.5">
                                {section.docs.map((d, i) => (
                                    <div key={i} className="flex items-start gap-2 bg-[#e8f1fb] rounded-lg px-3 py-2">
                                        <FileText size={12} className="text-[#005a9c] mt-0.5 shrink-0" />
                                        <p className="text-[12px] text-slate-700 leading-relaxed">{d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Change in "
                heroTitleSuffix="Registered Office"
                heroSubtitle="Registered Office Change under Companies Act, 2013 — INC-22 | MGT-14 | INC-23"
                heroDescription="Change your company's registered office address seamlessly with Vyombiz. Whether within the same city, across ROC jurisdictions, or from one state to another — we manage Board Meetings, EGM resolutions, Regional Director approvals, and all ROC filings end-to-end."
                whatsIncludedList={["Board & EGM Resolution Drafting", "Form INC-22 Filing (15 Days)", "Form MGT-14 & INC-23 Filing", "Regional Director / NCLT Approval"]}
                stats={[
                    { count: "15 Days", label: "INC-22 Filing Deadline", icon: <Clock size={20} /> },
                    { count: "30 Days", label: "MGT-14 Filing Deadline", icon: <FileText size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Users size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert />
            <DetailsLayout
                navLabels={{ overview: "Overview", advantages: "Reasons", features: "Type", eligibility: "Procedure", documents: "Documents Required", faq: "FAQs" }}
                overview={{
                    badge: "Companies Act 2013 | Registered Office Change | INC-22 | MGT-14 | INC-23",
                    title: "Change in Registered Office —",
                    highlightTitle: "An Overview",
                    description: [
                        "The registered office of a company is the official address where all official correspondence related to the company is sent. Apart from the registered office, a company may own many different offices such as a corporate office, administrative office, branch office, and factory. However, the registered office must be registered with the Ministry of Corporate Affairs.",
                        "The domicile of the company is determined by its registered office. The Registrar of Companies (ROC) jurisdiction is also decided by the location of the registered office. Any change in the registered office address must be intimated to the ROC within 15 days using Form INC-22.",
                    ],
                    whyIdealTitle: "How the Registered Office Impacts Your Company",
                    whyIdealList: [
                        { title: "Legal Correspondence Address", desc: "All official notices, legal documents, and regulatory communications from the MCA and ROC are sent to the registered office address — making it the primary legal address of the company." },
                        { title: "Determines ROC Jurisdiction", desc: "The location of the registered office determines which ROC has jurisdiction over the company. Inter-state or inter-ROC changes require additional regulatory approvals." },
                        { title: "MOA State Clause", desc: "The state in which the registered office is situated forms part of the MOA (State Clause). An inter-state change requires a MOA amendment — a Special Resolution and Regional Director/Central Government approval." },
                        { title: "Residential Office Permitted", desc: "A residential property can be declared as the registered office of a company. However, vacant land or buildings under construction cannot be used as a registered office." },
                    ]
                }}
                advantages={reasonsContent}
                features={typeContent}
                eligibility={procedureContent}
                documents={{
                    title: "Documents Required for Change in Registered Office",
                    description: "General documents required across all types of registered office address changes.",
                    list: [
                        "Copy of the new registered office address.",
                        "Copy of Utility Bills (Electricity / Water / Gas) — not older than 2 months.",
                        "NOC for the use of premises obtained from the owner.",
                        "Lease Agreement / Rent Agreement between the landlord and the Company.",
                        "Sale Deed (if the property is owned by the Company).",
                        "Certified copy of the Board Resolution / EGM Special Resolution.",
                        "Certified True Copy of EGM Notice and Explanatory Statement (for Type 2, 3, 4).",
                        "Altered Memorandum of Association (for inter-ROC or inter-state change).",
                        "Copy of Newspaper Advertisement (for Type 3 and Type 4 changes).",
                        "Affidavit verifying the application (for Regional Director / NCLT application).",
                        "List of creditors and debenture holders with their consent (for Type 3 and Type 4).",
                        "Declaration from KMP and two directors confirming no default in payments to workmen.",
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for Change in Registered Office?",
                    subtitle: "End-to-end support for registered office address changes across all jurisdictions.",
                    list: [
                        { title: "Expert Classification & Guidance", desc: "We identify the exact type of your registered office change and design the correct compliance path — ensuring you follow the right procedure and file the correct forms." },
                        { title: "Board & EGM Management", desc: "We handle all Board Meeting and EGM documentation — including drafting notices, resolutions, and explanatory statements for smooth meeting conduct." },
                        { title: "Form INC-22 & MGT-14 Filing", desc: "We ensure all forms are filed accurately and within the statutory deadlines — INC-22 within 15 days, MGT-14 within 30 days of the resolution." },
                        { title: "Regional Director Approval (INC-23)", desc: "For inter-ROC and inter-state changes, we manage the Regional Director application in Form INC-23, including newspaper notices, individual creditor notices, and affidavits." },
                        { title: "MOA State Clause Amendment", desc: "For inter-state changes, our legal team handles the MOA State Clause amendment for Central Government approval and INC-28 filing after the order is received." },
                    ]
                }}
            />
            <FAQLayout title="FAQs on Change in Registered Office" subtitle="Common questions about registered office address changes answered by our experts" faqs={faqs} />
        </div>
    );
};

export default ChangeinRegisteredOffice;
