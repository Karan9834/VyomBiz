import React from "react";
import { CheckCircle2, AlertTriangle, Clock, Users, FileText, Shield, BookOpen, BarChart2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Change in Directors
 * Nav: Overview | Director | Vyombiz Support | FAQs
 */
const ChangeinDirectors = () => {
    const faqs = [
        { question: "Can a company remove their directors without their consent?", answer: "A director can be removed without consent only when the director does not comply with the laws of the company or acts against the benefit of the company. However, such removal must be done according to the specified procedure under Section 169 of the Companies Act, 2013." },
        { question: "Is resigning from the post of director the same as removal?", answer: "No. Resignation is a voluntary act initiated by the director themselves by submitting a written notice to the company under Section 168. Removal is initiated by the shareholders via an ordinary resolution in a General Meeting under Section 169. Both require filing DIR-12 with the ROC within 30 days." },
        { question: "Is it necessary for the outgoing director to transfer or sell their shares?", answer: "No. The directorship and shareholding are entirely separate. An outgoing director — whether by resignation or removal — keeps their shares unless they independently choose to transfer them. There is no mandatory share transfer requirement upon change of directorship." },
        { question: "What form is required to complete the process of removal of directors?", answer: "Form DIR-12 must be filed with the ROC within 30 days of the date of passing the resolution for change in director (appointment, resignation, or removal). Form DIR-11 must also be filed by the resigning director within 30 days of resignation." },
        { question: "What is DIN?", answer: "DIN stands for Director Identification Number — a unique identification number assigned to an individual appointed or to be appointed as a director of a company. It is obtained by filing Form DIR-3 with the MCA. Once allotted, the DIN is valid for the lifetime of the individual." },
        { question: "Who can be appointed as a director?", answer: "Only an individual (natural person) can be appointed as a director. They must be of sound mind, solvent, not have been convicted of any offence, and must hold a valid DIN. A corporate body cannot be appointed as a director." },
        { question: "What are the liabilities of a resigning director in a Company?", answer: "A resigning director continues to be liable for offences committed during their tenure even after the resignation takes effect. They must cooperate with any legal proceedings related to the period of their directorship and file DIR-11 within 30 days of resignation." },
    ];

    /* ─── Director Sections (custom JSX → advantages slot) ─────── */
    const directorContent = (
        <div className="space-y-10">
            {/* Section 160 */}
            <div>
                <div className="bg-[#072b47] rounded-xl px-5 py-3 mb-4">
                    <p className="text-[13px] font-bold text-white">Section 160 of the Companies Act, 2013 — Appointment of Director (Non-Retiring)</p>
                </div>
                <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                    The process for appointing a member of the company as a director (other than a retiring director) is outlined in Section 160 and Rule 13 of the Companies (Appointment and Qualification of Directors) Rules, 2014.
                </p>
                <h4 className="text-[14px] font-bold text-[#072b47] mb-3">Procedure for Appointment of New Director</h4>
                <div className="grid gap-3 mb-5">
                    {[
                        "Apply for DIN (Director Identification Number) by filing Form DIR-3. Section 266A and Section 266B of the Companies Act, 2013 govern DIN.",
                        "Hold a Board Meeting and pass the necessary resolution appointing the new director.",
                        "Hold a General Meeting with at least 21 days' notice to all stakeholders. During this meeting, the appointment of a director is confirmed by adopting the necessary resolution.",
                        "Issue the Letter of Appointment to the director.",
                        "File E-Form DIR-12 with the ROC within 30 days of appointment. DIR-12 must be submitted with a copy of CTC, Consent (DIR-2), and the Letter of Appointment.",
                        "File E-Form MGT-14 for disclosure of interest of director in MBP-1.",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-3">
                            <div className="w-6 h-6 rounded-full bg-[#005a9c] text-white flex items-center justify-center shrink-0 text-[11px] font-bold">{i + 1}</div>
                            <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
                <h4 className="text-[14px] font-bold text-[#072b47] mb-3">Qualifications for Appointment</h4>
                <div className="flex flex-wrap gap-2">
                    {["Must be a person of sound mind", "Only an individual (not a corporate body) per Section 149", "Must be a solvent person", "Must not have been convicted of any offence by any court"].map((q, i) => (
                        <div key={i} className="flex items-center gap-2 bg-[#e8f1fb] border border-[#c0d8f0] rounded-full px-3 py-1.5">
                            <CheckCircle2 size={13} className="text-[#005a9c]" />
                            <span className="text-[12px] font-medium text-[#005a9c]">{q}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 168 */}
            <div>
                <div className="bg-[#005a9c] rounded-xl px-5 py-3 mb-4">
                    <p className="text-[13px] font-bold text-white">Section 168 of the Companies Act, 2013 — Resignation of Director</p>
                </div>
                <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                    Section 168 provides a comprehensive explanation of the resignation of directors, which was missing from the original Act of 1956.
                </p>
                <div className="grid gap-3">
                    {[
                        "The director must inform the company of their intention to resign by providing a notice along with a letter explaining their reason for leaving.",
                        "The resignation will come into effect only from the date of receipt of the notice by the company.",
                        "The resigning director is required to file DIR-11 with the ROC, intimating about the resignation.",
                        "The company, after receiving the resignation notice, shall take it into effect and pass a necessary resolution for approval.",
                        "The company must file DIR-12 within 30 days of the effective date of resignation.",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-3">
                            <div className="w-6 h-6 rounded-full bg-[#005a9c] text-white flex items-center justify-center shrink-0 text-[11px] font-bold">{i + 1}</div>
                            <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 169 */}
            <div>
                <div className="bg-slate-700 rounded-xl px-5 py-3 mb-4">
                    <p className="text-[13px] font-bold text-white">Section 169 of the Companies Act, 2013 — Removal of Director</p>
                </div>
                <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                    Section 169 states the overall procedure for director removal, giving shareholders the right to remove a director by passing a resolution in a General Meeting.
                </p>
                <div className="grid gap-3">
                    {[
                        "Shareholders can remove the directors by passing an ordinary resolution in a General Meeting.",
                        "Special notice of the intention of removing the director must be given by the shareholders.",
                        "The company, after receiving the notice, shall send it to all members at least 7 days before the date of the meeting.",
                        "The company shall give intimation to the concerned director about the removal. The director must be given an opportunity of being heard.",
                        "Every resolution must be filed within 30 days of passing the special resolution in Form MGT-14 with the ROC.",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl p-3">
                            <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 text-[11px] font-bold">{i + 1}</div>
                            <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Change in "
                heroTitleSuffix="Directors"
                heroSubtitle="Director Appointment, Resignation & Removal under Sections 160, 168 & 169 — Companies Act 2013"
                heroDescription="Report all changes in your company's Board of Directors accurately and on time with Vyombiz. From DIR-11 and DIR-12 filings to MGT-14 resolutions and MCA database updates — we handle every step with precision and speed."
                whatsIncludedList={["DIN Application (DIR-3)", "Appointment (DIR-12)", "Resignation (DIR-11 + DIR-12)", "Removal (MGT-14 + DIR-12)"]}
                stats={[
                    { count: "30 Days", label: "DIR-12 Filing Deadline", icon: <Clock size={20} /> },
                    { count: "21 Days", label: "Advance General Meeting Notice", icon: <FileText size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Users size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert />
            <DetailsLayout
                navLabels={{ overview: "Overview", advantages: "Director", faq: "FAQs" }}
                overview={{
                    badge: "Companies Act 2013 — Sections 160, 168 & 169 | DIR-12 | DIR-11",
                    title: "Change in Directors —",
                    highlightTitle: "An Overview",
                    description: [
                        "A company is an artificial person. Unlike a living person, a corporate entity lacks the mind, hands, and intention to act independently. As a result, it must act through living human beings — its directors. The directors are in charge of the company's operations.",
                        "A director is a person who regulates the overall operation of any organisation by utilising various abilities and plays a significant role in the path of the organisation's success. A director is appointed under the terms of the Companies Act, 2013 to manage the day-to-day operations. Any change in directors must be reported to the concerned ROC by filing e-Form DIR-12 within 30 days from the date of the resolution for change.",
                    ],
                    whyIdealTitle: "Director — Meaning and Key Sections",
                    whyIdealList: [
                        { title: "Director Meaning — Section 2(13)", desc: "Section 2(13) of the Companies Act, 1956 states that a director is any person exercising the function of Director, by whatever name called. The Articles of Association cover their appointment, duties, retirement rights, and remuneration." },
                        { title: "Section 160 — Appointment", desc: "Outlines the process of appointing a member as a director (other than a retiring director) under Rule 13 of the Companies (Appointment and Qualification of Directors) Rules, 2014." },
                        { title: "Section 168 — Resignation", desc: "Provides a comprehensive framework for the resignation of directors — including notice requirements, effective date of resignation, and mandatory DIR-11 filing by the director." },
                        { title: "Section 169 — Removal", desc: "Gives shareholders the right to remove a director by passing an ordinary resolution in a General Meeting, after issuing special notice and giving the concerned director an opportunity to be heard." },
                    ]
                }}
                advantages={directorContent}
                whyChooseUs={{
                    title: "How Vyombiz Handles Change in Directors",
                    subtitle: "Smooth, compliant, and timely filing for all director changes — appointment, resignation, and removal.",
                    list: [
                        { title: "One-Stop Solution", desc: "For a smooth and prompt processing of change of directors, Vyombiz handles all the necessary forms and paperwork for your business — from minor restructuring of one or two directors to complex multi-director changes for larger enterprises." },
                        { title: "Expert Legal Team", desc: "Years of experience in director change compliance allow our team to anticipate requirements, prepare accurate resolutions, and guide you through the entire process." },
                        { title: "Timely MCA Filings", desc: "We ensure DIR-11, DIR-12, and MGT-14 are filed within the mandated 30-day deadline to avoid penalties and MCA non-compliance notices." },
                        { title: "DIN & DSC Management", desc: "We assist with DIN applications (DIR-3), KYC updates (DIR-3 KYC), and DSC arrangements for incoming directors." },
                        { title: "Post-Change Support", desc: "We ensure the MCA master data is updated accurately and assist with any further updates to GSTN, bank accounts, licenses, and other registrations reflecting the new director details." },
                    ]
                }}
            />
            <FAQLayout title="FAQs on Change in Directors" subtitle="Common questions about director change procedures answered by our experts" faqs={faqs} />
        </div>
    );
};

export default ChangeinDirectors;
