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

const RemovalofDirector = () => {

    const faqs = [
        { question: "What is the time permitted for Intimation by Company to all shareholders?", answer: "The company must send notice to its members at least 7 clear days before the meeting, along with a copy of the director's representation (if any)." },
        { question: "How much time does it take for the Removal of Director?", answer: "The process typically takes 15–30 business days. The DIR-12 form must be filed within 30 days from the date of the General Meeting." },
        { question: "Can a company remove its director without his consent?", answer: "Yes, a company can remove a director without consent by passing an ordinary resolution in a General Meeting under Section 169 of the Companies Act, 2013, after giving the director an opportunity to be heard." },
        { question: "Can a director remove another director?", answer: "No, a single director cannot remove another director. The power lies with the shareholders via an ordinary resolution in a General Meeting per Section 169 of the Companies Act, 2013." },
        { question: "What is the basic learning before removing a Director of Private Limited Company?", answer: "A Private Limited Company must maintain a minimum of 2 directors. Proper procedures must be followed — special notice, Board meeting, General Meeting with 21-days' notice, and filing DIR-12 within 30 days." },
        { question: "What needs to be done with the shares after ending tenure as director?", answer: "Removal from directorship does not affect share ownership. The director retains their shares unless they choose to transfer them separately." },
        { question: "How to assign shares during change of director?", answer: "Share transfer must follow the share transfer procedure — executing Share Transfer Deed (SH-4), board approval, and updating the register of members." },
        { question: "If the Company doesn't reply to ROC Notice, what is the first consequence?", answer: "The company may be marked 'inactive', strike-off proceedings may be initiated under Section 248, and directors may be held personally liable." },
        { question: "Are directors personally liable for non-compliance after strike off?", answer: "Yes, directors remain personally accountable even after strike-off for fraud, illegal activities, or pending dues." },
        { question: "What are the consequences of not filing Form DIR-12?", answer: "Up to 15 days: 1× fee. Up to 30 days: 2× fee. 30–60 days: 4× fee. Beyond 180 days: 10× fee. Beyond 300 days: 12× fee + compounding offense." },
    ];

    const benefitContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><BookOpen size={18} className="text-[#005a9c]" />Participation in Removal of a Director</h3>
            {[
                "Stockholders holding shares not less than Rs. 5,00,000 as paid-up capital or not less than 1% of total voting power can send a special notice to the company for removal of the director.",
                "Shareholders concede the power to decide the date of the meeting. However, the special notice shall not be sent earlier than three months from the meeting, although the resolution must be moved at least 14 clear days before the session.",
                "The concerned director is given the option of being heard at the meeting. If objections are validated by the stockholders and board, they can eliminate the removal procedure after consideration.",
            ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                    <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                    <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                </div>
            ))}
            <h3 className="text-lg font-bold text-[#072b47] mt-6 mb-4 flex items-center gap-2"><Shield size={18} className="text-[#005a9c]" />Reasons Behind Resignation / Removal</h3>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    { title: "Dispute with the Board", desc: "Differences of opinion among directors can hinder the overall performance of the corporation, leading to removal with due consideration." },
                    { title: "Misuse in Company Affairs", desc: "When a director gets dragged into illegal practices of the company, he may resign or be removed to protect himself from resulting circumstances." },
                    { title: "Suspension due to Infringement", desc: "Any non-adherence, violation, or defaults on the director's end can lead to legal trouble and consequent removal from the board." },
                    { title: "Recession of Nomination", desc: "Applicable to Nominee Directors appointed by NBFCs or investors. Once the transaction between company and entity is complete, the Nominee Director may resign or be removed." },
                ].map((item, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                        <p className="text-[14px] font-bold text-[#072b47] mb-1">{item.title}</p>
                        <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                {["Get fresh talent on council", "No compulsion of ownership", "Incompetence of existing directors", "To meet the sanctioned limit"].map((r, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 bg-[#e8f1fb] text-[#005a9c] border border-[#c0d8f0] px-3 py-1.5 rounded-full text-[13px] font-medium"><CheckCircle2 size={12} />{r}</span>
                ))}
            </div>
        </div>
    );

    const listiclesContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><Shield size={18} className="text-[#005a9c]" />Eligibility Criteria to be a Director</h3>
            <div className="grid gap-4 mb-6">
                {[
                    { title: "Age Demarcation", desc: "No fixed minimum age, but the person must be competent to enter into contracts. For MD, Full-Time, or Independent Director of listed company: between 21 and 70 years." },
                    { title: "Nationality", desc: "No nationality restriction. However, at least one Indian resident director is required in every company." },
                    { title: "DIN Required", desc: "A Director Identification Number (DIN) is mandatory. DIN ensures directors can be traced and deters fraudulent appointments." },
                    { title: "Limit of Directorships", desc: "A person can hold a maximum of 20 directorships, of which only 10 can be in public companies." },
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                        <div className="w-8 h-8 rounded-lg bg-[#e8f1fb] flex items-center justify-center shrink-0 font-bold text-[#005a9c] text-[12px]">{i + 1}</div>
                        <div><p className="text-[14px] font-bold text-[#072b47] mb-1">{item.title}</p><p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p></div>
                    </div>
                ))}
            </div>
            <h4 className="text-[15px] font-bold text-red-700 mb-3 flex items-center gap-2"><AlertTriangle size={15} className="text-red-500" />Ineligibility for Directorship</h4>
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
                {[
                    { title: "Unsound Mind / Bankrupt", desc: "Persons of unsound mind, insolvent individuals, or those with active bankruptcy claims cannot be appointed as directors." },
                    { title: "Criminal Background", desc: "A person sentenced to imprisonment for more than 7 years cannot be appointed as a director." },
                    { title: "Pending Overdue Returns", desc: "Individuals who have not met previous filing returns in any preceding year are barred from holding a directorial position." },
                ].map((item, i) => (
                    <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-4">
                        <p className="text-[14px] font-bold text-red-700 mb-1">{item.title}</p>
                        <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><Users size={18} className="text-[#005a9c]" />Types of Director & Numerical Requirements</h3>
            <div className="grid gap-2">
                {[
                    "Per Section 149(1) of the Companies Act, 2013 — every public company must have a minimum of 3 directors; a private company requires at least 2; OPC requires only 1.",
                    "The maximum number of directors in a public company is 15. More than 15 may be appointed via Special Resolution — no Central Government approval needed.",
                    "A director can hold a maximum of 20 directorships, including any alternate directorships.",
                    "In any private or public company (holding or subsidiary) — restricted to 10 directorships in public companies.",
                    "All listed companies must appoint at least one woman director within one year from the enforcement of the second Proviso to Section 149(1).",
                    "All public companies with turnover of Rs. 300 crores or paid-up capital of Rs. 100 crores must also appoint at least one woman director.",
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-3">
                        <CheckCircle2 size={14} className="text-[#005a9c] mt-0.5 shrink-0" />
                        <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const processSteps = [
        { step: "01", title: "Incident 1: Suo-Moto via Board (Section 169)", desc: "Shareholders pass an ordinary resolution in a General Meeting. Steps: (1) Issue Board meeting notice (7 days). (2) Pass resolution for General Meeting. (3) Hold General Meeting after 21 days' notice to directors. (4) Give director opportunity to be heard. (5) File DIR-11 and DIR-12 with Board Resolution. (6) Director's name removed from MCA database." },
        { step: "02", title: "Incident 2: Self-Submission by a Director", desc: "A Director may resign by issuing a resignation letter to the Company. The company must: (1) Pass Board resolution to accept resignation and authorize DIR-11 filing. (2) File DIR-11 with reasons for resignation within 30 days per Rule 16 of Companies Rule, 2014. (3) Attach notice of resignation, proof of dispatch, and acknowledgment of form if received." },
        { step: "03", title: "Incident 3: Absence from 3 Consecutive Board Meetings", desc: "If a director is absent from all Board meetings for 12 months (even after receiving due notice for all sessions), they are deemed to have vacated office under Section 167 of Companies Act, 2013. Form DIR-12 must be filed on the absent director's name, and their name removed from the MCA." },
    ];

    const otherInfoContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><FileText size={18} className="text-[#005a9c]" />Provisional Aspects — Section 169 of Companies Act 2013</h3>
            <div className="grid gap-4">
                {[
                    { section: "Section 169(1)", points: ["An ordinary resolution is needed to remove a director.", "Director assigned by Tribunal under Section 242 shall not be removed.", "Reappointed Independent Director shall be removed by Special Resolution.", "Section 169(1) will not apply where directors are appointed per proportional representation (Section 163)."] },
                    { section: "Section 169(2)", points: ["Special notice is needed for a resolution to remove a director or to designate someone in his place."] },
                    { section: "Section 169(3)", points: ["The Company must send the Special Notice along with intention of removal to the Director, with opportunity of being heard provided at the meeting."] },
                    { section: "Section 169(4)", points: ["For representation, the Director must submit it in writing. If Tribunal is satisfied, the Company shall not send the representation or read it at the meeting."] },
                    { section: "Section 169(5)", points: ["The vacancy created by removal can be filled in the same meeting if special notice was given under Section 169(2)."] },
                    { section: "Section 169(7)", points: ["A Director removed under Section 169 cannot be reappointed to fill the casual vacancy."] },
                    { section: "Section 169(8)", points: ["Removed Director shall be entitled to payment as per terms of contract or employment, if any.", "Director can be removed under any additional provisions of the Act."] },
                    { section: "Rule 79 of NCLT Rules 2016", points: ["The Company or any aggrieved person may appeal to the Tribunal in Form NCLT-1."] },
                ].map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                        <div className="bg-[#072b47] px-4 py-2.5"><p className="text-[13px] font-bold text-white">{item.section}</p></div>
                        <div className="p-4 grid gap-2">
                            {item.points.map((pt, j) => (
                                <div key={j} className="flex items-start gap-2 bg-[#f8fbff] rounded-lg px-3 py-2">
                                    <CheckCircle2 size={13} className="text-[#005a9c] mt-0.5 shrink-0" />
                                    <p className="text-[13px] text-slate-700 leading-relaxed">{pt}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h4 className="text-[15px] font-bold text-red-700 mb-3 flex items-center gap-2"><AlertTriangle size={15} className="text-red-500" />Consequences of Not Filing Form DIR-12</h4>
                <div className="grid gap-2">
                    {[["Up to 15 days", "1× government fee"], ["Up to 30 days", "2× government fee"], ["30–60 days", "4× government fee"], ["Beyond 180 days", "10× government fee"], ["Beyond 300 days", "12× government fee + compounding offense"]].map(([delay, penalty], i) => (
                        <div key={i} className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
                            <AlertTriangle size={13} className="text-red-400 shrink-0" />
                            <span className="text-[13px] font-semibold text-red-700 w-36 shrink-0">{delay}:</span>
                            <span className="text-[13px] text-slate-700">{penalty}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Removal of "
                heroTitleSuffix="Director"
                heroSubtitle="Statutory Process for Director Removal & Resignation under Companies Act 2013"
                heroDescription="Navigate the legal process of director removal with confidence. Vyombiz handles all forms — DIR-11, DIR-12, Board Resolutions, and MCA filings — ensuring compliant and timely removal of directors from your company."
                whatsIncludedList={["Board & General Meeting Notices", "Form DIR-11 & DIR-12 Filing", "MCA Database Update", "Section 169 Compliance"]}
                stats={[
                    { count: "30 Days", label: "DIR-12 Filing Deadline", icon: <Clock size={20} /> },
                    { count: "21 Days", label: "Advance AGM Notice", icon: <FileText size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Users size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert />
            <DetailsLayout
                navLabels={{ overview: "Overview", advantages: "Benefit", eligibility: "Listicles", documents: "Documents Required", process: "Registration Procedure", features: "Other Information", faq: "FAQs" }}
                overview={{
                    badge: "Companies Act 2013 — Section 169 | Director Removal & Resignation",
                    title: "Removal of Director —",
                    highlightTitle: "An Overview",
                    description: [
                        "Each private company must have at least 2 directors, whereas a public company must have at least 3 directors. A private company can remove a director if they catch any incompetence specified under the Act, absent themselves from board attendance for 12 months, enter into agreements against the provisions of Section 184, are excluded by a court or Tribunal, or are convicted and sentenced to imprisonment for not less than six months.",
                        "The removal of a director is a formal process governed by Section 169 of the Companies Act, 2013. Shareholders hold the ultimate power to remove directors through an ordinary resolution passed at a General Meeting.",
                    ],
                    whyIdealTitle: "Key Grounds for Removal of a Director",
                    whyIdealList: [
                        { title: "Absence from Board Meetings", desc: "A director who absents themselves from all Board meetings for 12 consecutive months (even after due notice) is deemed to have vacated office under Section 167." },
                        { title: "Violation of Section 184", desc: "A director who enters into contracts against the provisions of Section 184 (interested transactions) may be removed from the Board." },
                        { title: "Court/Tribunal Order", desc: "A director excluded by court or Tribunal order must vacate office — the company must file DIR-12 to formalize the removal." },
                        { title: "Criminal Conviction", desc: "A director convicted and sentenced to imprisonment for six months or more is disqualified from serving as a director." },
                    ]
                }}
                advantages={benefitContent}
                eligibility={listiclesContent}
                documents={{
                    title: "Documents Required for Removal of Director",
                    description: "Documents required for the formal removal or resignation of a director from a company.",
                    list: [
                        "Passport-size photograph of the Director to be removed / appointed.",
                        "Self-attested PAN Card of the Director.",
                        "Proof of Residency: Aadhar Card / Voter ID / Passport / Driving License.",
                        "Digital Signature Certificate (DSC) of the existing Director and Director to be removed.",
                        "Identity proof: Passport / Election Card / Driving License / Aadhar Card.",
                        "Mobile number and personal/official email ID of the Director.",
                        "All documents must be apostilled if the Director is a non-resident of India.",
                        "Notice of resignation filed with the company.",
                        "Proof of dispatch.",
                        "Acknowledgment of form, if received.",
                    ]
                }}
                process={{ title: "Manner of Removal of Directors Effecting Companies", subtitle: "Three ways a director can be removed from a company under Companies Act, 2013.", steps: processSteps }}
                features={otherInfoContent}
                whyChooseUs={{
                    title: "How Vyombiz Handles Director Removal",
                    subtitle: "Complete end-to-end support for smooth and compliant director removal proceedings.",
                    list: [
                        { title: "Select & Initiate", desc: "Start by sharing details of the director removal. Our team helps structure the correct resolution type and required notices." },
                        { title: "Application Preparation", desc: "We prepare all required forms, ensuring complete accuracy of directors' details, resolutions, and attachments." },
                        { title: "Fee Processing", desc: "We manage all MCA filing fee payments, ensuring the correct structure is applied based on share capital." },
                        { title: "Electronic Filing with MCA", desc: "We file all expected forms electronically with the MCA — including DIR-11 and DIR-12 — to designate or remove a director." },
                        { title: "Confirmation & Delivery", desc: "You will receive removal approval notification, digital documents, and MCA acknowledgements within 2–3 business working days." },
                    ]
                }}
            />
            <FAQLayout title="Frequently Asked Questions on Removal of Director" subtitle="Common questions answered by our experts" faqs={faqs} />
        </div>
    );
};

export default RemovalofDirector;
