import React from "react";
import { CheckCircle2, AlertTriangle, Clock, Users, FileText, Shield, BookOpen, BarChart2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Change in Share Capital
 * Nav: Overview | Listicles | Documents Required | Registration Procedure | FAQs
 */
const ChangeinShareCapital = () => {
    const faqs = [
        { question: "What is Change in Share Capital?", answer: "A change in share capital refers to any modification in the number, type, or value of shares — including increase in authorized share capital, consolidation, sub-division, conversion, or cancellation/reduction of share capital under Section 61 of the Companies Act, 2013." },
        { question: "Can paid-up capital be increased?", answer: "Yes. Paid-up capital can be increased by issuing new shares via rights issue, bonus issue, private placement, or public issue — after first increasing the authorized share capital if needed, and obtaining shareholder approval at an EGM." },
        { question: "Can a company increase or reduce its share capital?", answer: "Yes. A company can increase its authorized share capital by altering the MOA and filing Form SH-7. A company can reduce its paid-up share capital under Section 66 with NCLT approval — or via buyback/redemption of preference shares under specific provisions." },
        { question: "How is the capital recognized?", answer: "Share capital is recognized by its share certificate number. Each share is identified by a unique certificate. However, shares held by an individual whose name is entered as the holder in the record of a depository are recognized differently." },
        { question: "What is the difference between authorized capital and paid-up capital?", answer: "Authorized capital is the maximum share capital a company is permitted to issue as specified in the MOA. Paid-up capital is the actual amount received from shareholders against shares already issued. Paid-up capital can never exceed authorized capital." },
        { question: "Can a company spend share capital?", answer: "A company can use its share capital for authorized business purposes. However, reduction or buy-back of share capital requires NCLT approval (Section 66) or compliance with buy-back regulations under Section 68 of the Companies Act, 2013." },
    ];

    const listiclesContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <BarChart2 size={18} className="text-[#005a9c]" />
                Kinds of Change in Share Capital — Section 61
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
                {["Increase in Authorized Share Capital", "Consolidation & Division of Shares", "Conversion of Shares into Stock", "Sub-Division of Shares", "Reduction / Cancellation of Shares"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#e8f1fb] border border-[#c0d8f0] rounded-full px-3 py-1.5">
                        <CheckCircle2 size={13} className="text-[#005a9c]" />
                        <span className="text-[12px] font-medium text-[#005a9c]">{item}</span>
                    </div>
                ))}
            </div>
            <div className="grid gap-5">
                {[
                    { num: "01", title: "Increase in Authorized Share Capital", desc: "Authorized share capital is the maximum value of share capital that the company is legitimately authorized to issue. The company increases it by altering the Capital Clause of its MOA at an EGM and filing Form SH-7 with the ROC within 30 days of the resolution." },
                    { num: "02", title: "Consolidation of Share Capital", desc: "The company consolidates smaller classification shares into broader classifications. If this changes voting percentages of shareholders, it must not take effect unless confirmed by the Tribunal via Form NCLT-1 with particulars in Annexure-B." },
                    { num: "03", title: "Conversion of Share Capital", desc: "The company converts fully paid-up shares into stock — or reconverts stock back into fully paid-up shares. Conversion of loan into equity share capital is managed under Section 62(3) — a special resolution approving such conversion must be passed before taking the loan." },
                    { num: "04", title: "Sub-Division of Share Capital", desc: "The company sub-divides its shares into a smaller denomination. The number of shares increases while the par value per share decreases — the total value of share capital and the class of shares remain consistent." },
                    { num: "05", title: "Reduction / Cancellation of Share Capital", desc: "Reduction of share capital means reducing issued, subscribed, and paid-up share capital under Section 66 — now under NCLT jurisdiction. Buyback of shares and redemption of preference shares are also reductions but governed by specific provisions without requiring NCLT sanction." },
                ].map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                        <div className="flex items-center gap-4 bg-[#072b47] px-5 py-3">
                            <span className="text-[20px] font-black text-white/20">{item.num}</span>
                            <p className="text-[14px] font-bold text-white">{item.title}</p>
                        </div>
                        <div className="p-5"><p className="text-[14px] text-slate-700 leading-relaxed">{item.desc}</p></div>
                    </div>
                ))}
            </div>
            <h4 className="text-[15px] font-bold text-[#072b47] mt-6 mb-3 flex items-center gap-2"><Shield size={15} className="text-[#005a9c]" />Characteristics of Share Capital</h4>
            <div className="grid gap-2">
                {[
                    "Share Capital carries specific rights and liabilities attached to a predefined amount of a company's equity.",
                    "A share is a movable property transferable in the manner described in the Articles of Association.",
                    "Share Capital is recognized by its certificate number — except for shares held with a depository.",
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 bg-[#f8fbff] border border-[#d0e3f5] rounded-lg px-4 py-2.5">
                        <CheckCircle2 size={13} className="text-[#005a9c] mt-0.5 shrink-0" />
                        <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const processSteps = [
        { step: "01", title: "Check Authorization in AOA", desc: "The Articles of Association must contain provisions authorizing the company to increase its authorized share capital. If absent, the AOA must be amended first under Section 14." },
        { step: "02", title: "Hold Board Meeting", desc: "Issue a board meeting notice with the agenda at least 7 days in advance. In the board meeting, pass the resolution for Change in Share Capital and fix the day, date, time, and venue for the EGM." },
        { step: "03", title: "Dispatch EGM Notice", desc: "Issue the EGM notice to all shareholders and directors at least 21 days before the meeting date. The notice must include an explanatory statement." },
        { step: "04", title: "Hold Extra Ordinary General Meeting (EGM)", desc: "Conduct the EGM on the fixed date and place. Pass the resolution for the Change in Share Capital by the majority of shareholders (ordinary or special resolution as applicable)." },
        { step: "05", title: "File Form MGT-14 with ROC", desc: "If a Special Resolution is passed, file Form MGT-14 with the ROC within 30 days of passing the resolution." },
        { step: "06", title: "Alter MOA & File Form SH-7 with ROC", desc: "Draft the altered MOA reflecting the new authorized share capital. File Form SH-7 with the ROC within 30 days of the resolution. Non-compliance attracts a fine of up to Rs. 10,000 per day (max Rs. 5 lakh)." },
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Change in "
                heroTitleSuffix="Share Capital"
                heroSubtitle="Authorized Share Capital Change — Section 61 | Companies Act 2013 | SH-7 | MGT-14"
                heroDescription="Increase or alter your company's share capital with Vyombiz. From MOA amendment and EGM resolution drafting to Form SH-7, MGT-14 ROC filings, and NCLT applications — complete end-to-end support for all types of share capital changes."
                whatsIncludedList={["MOA Capital Clause Amendment", "Board & EGM Resolution Drafting", "Form SH-7 & MGT-14 Filing", "NCLT Application for Complex Cases"]}
                stats={[
                    { count: "30 Days", label: "SH-7 / MGT-14 Filing Deadline", icon: <Clock size={20} /> },
                    { count: "21 Days", label: "EGM Notice Period", icon: <FileText size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Users size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert />
            <DetailsLayout
                navLabels={{ overview: "Overview", eligibility: "Listicles", documents: "Documents Required", process: "Registration Procedure", faq: "FAQs" }}
                overview={{
                    badge: "Companies Act 2013 — Section 61, 13 & 64 | Share Capital | SH-7 | MGT-14",
                    title: "Change in Share Capital —",
                    highlightTitle: "An Overview",
                    description: [
                        "The amount of capital to invest in the Company is one of the most critical decisions that has to be made by the founders when a company is at its incorporation stage. As the business picks up, the Company may look to expand its operations, scale, or structure — requiring more funds, basically increasing the share capital. Sometimes, the required capital may surpass the existing authorized capital limit.",
                        "The authorized capital is the greatest amount of capital for which the Company can issue shares to shareholders. As per Section 2(8) of the Companies Act, 2013, the Authorized Capital limit is specified in the Memorandum of Association under the Capital Clause. A company cannot issue shares exceeding the authorized capital limit. The provision of Section 61, read with Sections 13 and 64, governs the change in share capital.",
                    ],
                    whyIdealTitle: "Key Concepts in Share Capital",
                    whyIdealList: [
                        { title: "Authorized / Nominal Capital", desc: "As per Section 2(8), 'authorized capital' means the maximum capital approved by the MOA — the most considerable measure of share capital the organization can issue." },
                        { title: "Share Capital Meaning", desc: "Share capital is the rupees divided into a predetermined number of shares of a fixed amount. Every company requires share capital in the form of cash to maintain its business." },
                        { title: "Authorization Required in AOA", desc: "A company having share capital, if authorized by its Articles of Association, can modify the share capital. A company cannot issue shares beyond the authorized limit unless the MOA is first amended." },
                        { title: "MOA Capital Clause Amendment", desc: "To increase the authorized share capital, the company must amend the Capital Clause of its MOA — then notify the ROC via Form SH-7 within 30 days of the resolution." },
                    ]
                }}
                eligibility={listiclesContent}
                documents={{
                    title: "Documents Required for Change in Share Capital (Including Annexure-B)",
                    description: "Documents required for filing with ROC and NCLT for all types of changes in share capital.",
                    list: [
                        "Notice of EGM with explanatory/descriptive statement.",
                        "Certified copy of resolution passed at the General Meeting.",
                        "Altered Memorandum of Association (MOA).",
                        "Altered Articles of Association (AOA).",
                        "Certified copy of Board Resolution for alteration in AOA and MOA.",
                        "Certified copy of Shareholders' Resolution.",
                        "Copies of audited balance sheets for the past three years.",
                        "Resolution for permitting consolidation or division (with explanation) — for NCLT application.",
                        "Proof of new capital arrangement and class of shares consolidated or divided.",
                        "Affidavit authenticating the petition.",
                        "Bank draft for payment of application fee.",
                        "Vakalatnama or Memorandum of Appearance with Board Resolution copy.",
                        "Two additional copies of the application (for NCLT filing).",
                        "Any other applicable documents.",
                    ]
                }}
                process={{ title: "Procedure for Change in Share Capital", subtitle: "Step-by-step process to change share capital under Section 61 of the Companies Act, 2013.", steps: processSteps }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for Change in Share Capital?",
                    subtitle: "Expert end-to-end support for all types of share capital changes.",
                    list: [
                        { title: "AOA Authorization Check", desc: "We review your AOA to confirm it authorizes the proposed change — and assist with AOA amendment under Section 14 if required." },
                        { title: "MOA Capital Clause Drafting", desc: "Our legal team drafts the altered MOA to precisely reflect the new authorized share capital limit." },
                        { title: "EGM Management", desc: "We draft EGM notices with explanatory statements, coordinate meetings, and ensure the 21-day notice period and all statutory formalities are fulfilled." },
                        { title: "Timely SH-7 & MGT-14 Filing", desc: "We handle all MCA filings — Form SH-7 and MGT-14 — within 30 days of the resolution date, avoiding penalties under Section 117." },
                        { title: "NCLT Application for Complex Changes", desc: "For consolidation or division that changes voting percentages, we prepare Form NCLT-1 with Annexure-B for NCLT confirmation." },
                    ]
                }}
            />
            <FAQLayout title="FAQs on Change in Share Capital" subtitle="Common questions about share capital changes answered by our experts" faqs={faqs} />
        </div>
    );
};

export default ChangeinShareCapital;
