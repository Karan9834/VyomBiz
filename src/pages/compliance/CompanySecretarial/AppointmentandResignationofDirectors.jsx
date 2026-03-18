import React from "react";
import { CheckCircle2, AlertTriangle, Clock, Users, FileText, Shield, BookOpen, BarChart2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Appointment and Resignation of Directors
 * Nav: Overview | Benefit | Listicles | Registration Procedure | Resignation | FAQs
 */
const AppointmentandResignationofDirectors = () => {
    const faqs = [
        { question: "How long does the appointment of a director take?", answer: "The process usually takes a few working days once all documents are available and forms are filed with the ROC." },
        { question: "Is Director Identification Number (DIN) mandatory?", answer: "Yes. A DIN is mandatory for anyone who wishes to become a director in an Indian company." },
        { question: "Can a director resign without board approval?", answer: "A director can submit a resignation letter, but the company must formally record and file the resignation with the ROC." },
        { question: "What happens if director changes are not reported to MCA?", answer: "Failure to report director changes may lead to penalties and compliance issues under the Companies Act." },
        { question: "Can a company appoint multiple directors?", answer: "Yes. A company can appoint multiple directors depending on its structure and board requirements, provided it complies with the statutory limits." },
        { question: "Can the resignation of Director be rejected?", answer: "As per Section 168 of the Companies Act, 2013, the administration does not have any right to reject the resignation presented by a director. The resignation takes effect from the date the company receives the notice or the date specified by the director, whichever is later." },
        { question: "What is the operative date of resignation in case of non-acceptance or non-filing of DIR-11 by the company?", answer: "The resignation shall take effect from the date on which the notice was received by the company, irrespective of whether the company accepts it or files DIR-11. The director must independently file DIR-11 if the company fails to do so." },
        { question: "If all the directors resign or vacate their offices, who runs everything?", answer: "Whenever all the directors of a company resign at the same time, the promoter or the Central Government shall appoint the required number of directors. The old directors must hold office until the new ones are nominated by the company in a general meeting." },
        { question: "Can a Director resign from the Company?", answer: "Yes. Any director can resign from their office by furnishing a written notice to the company. After receiving such notice, the Board shall take note of it, the company shall intimate the Registrar, and the director shall also file DIR-11 within 30 days of resignation." },
        { question: "What are the gateways for the criteria to add a new Director?", answer: "To add a new director: (1) Check if the Articles of Association (AOA) permits adding directors. (2) Apply for DIN (DIR-3). (3) Call a Board Meeting and pass a resolution. (4) Hold a General Meeting (if required). (5) Issue a Letter of Appointment. (6) File DIR-12 with the ROC within 30 days of appointment." },
        { question: "If I already have DIN, should I apply again?", answer: "No. If a person already holds a valid DIN, they do not need to apply for another. The existing DIN can be used for all directorial appointments across companies. However, the DIN details must be kept updated via the DIR-3 KYC form every year." },
        { question: "Can a Company appoint a Corporate Body as its working Director?", answer: "No. As per Section 149 of the Companies Act, 2013, only an individual person can be appointed as a director. A corporate body (company or LLP) cannot be appointed as a working director." },
        { question: "Can a Company continue a Foreigner or NRI as a Director?", answer: "Yes, a company can appoint a Foreigner or NRI as a director. There is no nationality restriction under the Companies Act. However, there must always be at least one resident Indian director in the company." },
        { question: "Is there any designated qualification required for the appointment of directors?", answer: "No specific educational qualifications are required. However, the person must be of sound mind, not be an undischarged insolvent, not have been convicted of a criminal offence with imprisonment for 7 years or more, and must comply with all eligibility criteria under the Companies Act, 2013." },
        { question: "What is the limit of directors to be appointed by the Company?", answer: "A public company can have a maximum of 15 directors. If more are required, a Special Resolution in the General Meeting must be passed. There is no Central Government approval needed for this. A private company typically has no specified maximum in the Act, but must have at least 2." },
    ];

    /* ─── Benefit (custom JSX → advantages slot) ─────────── */
    const benefitContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><BookOpen size={18} className="text-[#005a9c]" />Why Add and Switch Directors?</h3>
            <div className="flex flex-wrap gap-3 mb-8">
                {["Get fresh talent on Council", "No Compulsion of Ownership", "Incompetence of existing directors", "To meet the sanctioned limit"].map((r, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 bg-[#e8f1fb] text-[#005a9c] border border-[#c0d8f0] px-4 py-2 rounded-full text-[13px] font-medium"><CheckCircle2 size={13} />{r}</span>
                ))}
            </div>
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><Shield size={18} className="text-[#005a9c]" />Classes of Director Appointed in the Company</h3>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    { title: "Managing Director", desc: "Granted full power and charge for the operation of the Company, responsible for overall strategic direction." },
                    { title: "Executive Director", desc: "Responsible for the day-to-day working of the Company. More responsible and active in operations." },
                    { title: "Non-Executive Director", desc: "Not involved in day-to-day decision-making or operational activities. Provides oversight and advisory input." },
                    { title: "Nominee Director", desc: "Not primary directors but chosen by PE/VC investors, banks who provided loans, or shareholders of a listed company to represent their interests." },
                    { title: "Independent Director", desc: "Selected in the Company to oversee and ensure sound corporate governance, free from management influence." },
                ].map((item, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                        <p className="text-[14px] font-bold text-[#072b47] mb-1">{item.title}</p>
                        <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    /* ─── Listicles (custom JSX → eligibility slot) ─────────── */
    const listiclesContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><Shield size={18} className="text-[#005a9c]" />Eligibility Criteria to be a Director</h3>
            <div className="grid gap-4 mb-6">
                {[
                    { title: "Age Demarcation", desc: "No fixed minimum age, but the person must be competent to enter into contracts. For Managing Director, Full-Time Director, or Independent Director of a listed company: between 21 and 70 years." },
                    { title: "Nationality", desc: "No nationality restriction. However, at least one Indian resident director is required in every company." },
                    { title: "DIN Required", desc: "A Director Identification Number (DIN) is mandatory. DIN ensures directors can be traced and deters fraudulent appointments." },
                    { title: "Limit of Directorships", desc: "A person can hold a maximum of 20 directorships — of which only 10 can be in public companies." },
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                        <div className="w-8 h-8 rounded-lg bg-[#e8f1fb] flex items-center justify-center shrink-0 font-bold text-[#005a9c] text-[12px]">{i + 1}</div>
                        <div><p className="text-[14px] font-bold text-[#072b47] mb-1">{item.title}</p><p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p></div>
                    </div>
                ))}
            </div>
            <h4 className="text-[15px] font-bold text-red-700 mb-3 flex items-center gap-2"><AlertTriangle size={15} className="text-red-500" />Ineligibility for Directorship</h4>
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
                {[
                    { title: "Unsound Mind or Bankrupt", desc: "Persons of unsound mind (including children, mentally disabled individuals), insolvent persons, or those with active bankruptcy claims cannot be appointed as directors." },
                    { title: "Criminal Background", desc: "A person sentenced to imprisonment for more than seven years cannot be appointed as a director." },
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
                    "Per Section 149(1) of the Companies Act, 2013 — every public company shall have minimum 3 directors; a private company requires at least 2; OPC requires only 1.",
                    "The maximum number of directors in a public company is 15. More than 15 may be appointed via Special Resolution — no Central Government approval needed.",
                    "A director can hold a maximum of 20 directorships, including any alternate directorships.",
                    "In any private or public company — restricted to 10 directorships in public companies.",
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

    /* ─── Registration Procedure (standard process prop) ─────── */
    const processSteps = [
        { step: "01", title: "Document Collection", desc: "All necessary documents and details of the director are collected and verified." },
        { step: "02", title: "Board Resolution", desc: "The company passes a board resolution approving the appointment or acknowledging the resignation." },
        { step: "03", title: "Preparation of Compliance Documents", desc: "Statutory forms and legal documentation are prepared according to MCA guidelines." },
        { step: "04", title: "Filing with ROC", desc: "Relevant forms are submitted electronically with the Registrar of Companies." },
        { step: "05", title: "Compliance Confirmation", desc: "Once approved, the company records are updated with the new director details." },
        { step: "06", title: "Update Statutory Records & GSTN", desc: "Make necessary entries in the Register of Directors and Managerial Personnel. Apply for necessary changes in the Director's details with GSTN and all other certificates as and when required." },
    ];

    /* ─── Resignation (custom JSX → postCompliance slot) ─────── */
    const resignationContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2"><FileText size={18} className="text-[#005a9c]" />Resignation of Director — Section 168 of Companies Act, 2013</h3>
            <p className="text-[14px] text-slate-600 mb-5 leading-relaxed">
                Any director can resign from their office by furnishing a written notice to the company. After receiving such notice:
            </p>
            <div className="grid gap-3 mb-6">
                {[
                    "The Board shall take note of the resignation and intimate the Registrar in the prescribed manner.",
                    "The company shall place the case of such resignation in its Directors' Report in the general meeting shortly after the resignation.",
                    "The director shall also intimate the Registrar and forward a copy of the resignation along with reasons to the Registrar within 30 days of resignation.",
                    "The resignation shall take effect from the date on which the company received the notice or from the date specified by the director, whichever is later.",
                    "A resigning director is still liable for offences committed during their tenure — this liability does not cease with the resignation.",
                    "If all directors resign simultaneously, the promoter or the Central Government shall appoint the required number of directors — and old directors must hold office temporarily until new ones are appointed.",
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                        <CheckCircle2 size={14} className="text-[#005a9c] mt-0.5 shrink-0" />
                        <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                    </div>
                ))}
            </div>

            <h4 className="text-[15px] font-bold text-[#072b47] mb-3">Manner of Resignation — DIR-11 Filing</h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
                <div className="bg-[#072b47] px-5 py-3"><p className="text-[13px] font-bold text-white">As per Rule 16 of Companies Rule, 2014 (Appointment and Qualification of Directors)</p></div>
                <div className="p-4 grid gap-2">
                    {["The company must pass a Board resolution to accept the resignation notice and authorize filing of Form DIR-11, stating reasons behind departure as per Section 168(1) of Companies Act, 2013.", "The resignation report, notice, and reasons must be filed with the ROC using Form DIR-11 within 30 days of the date of removal.", "In addition to filing DIR-11, the company must provide the original notice or letter of resignation."].map((pt, j) => (
                        <div key={j} className="flex items-start gap-2 bg-[#f8fbff] rounded-lg px-3 py-2">
                            <CheckCircle2 size={13} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <p className="text-[13px] text-slate-700 leading-relaxed">{pt}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h4 className="text-[15px] font-bold text-[#072b47] mb-3">Common Reasons Behind Resignation of Directors</h4>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    { title: "Dispute with the Board", desc: "A difference of opinion among directors can hinder overall performance. In such situations, directors may decide to resign." },
                    { title: "Better Career Opportunity", desc: "Directors may resign if they get a more satisfying career opportunity or are selected as a director in another company where they have a stronger interest." },
                    { title: "Misuse in Company Affairs", desc: "When a director becomes aware of illegal practices, they may resign to protect themselves from personal liability arising out of such activities." },
                    { title: "Suspension due to Infringement", desc: "Any non-adherence, violation, or defaults on the director's end can lead them into trouble — prompting resignation." },
                    { title: "Recession of Nomination", desc: "Applicable to Nominee Directors appointed by NBFCs or PE/VC investors. Once the transaction is complete, the Nominee Director may resign." },
                ].map((item, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                        <p className="text-[14px] font-bold text-[#072b47] mb-1">{item.title}</p>
                        <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Appointment & Resignation "
                heroTitleSuffix="of Directors"
                heroSubtitle="Manage Director Changes with Complete Legal Compliance"
                heroDescription="Appointing or resigning a director in a company involves strict regulatory procedures under the Companies Act. Ensure your company updates are filed correctly and on time with expert compliance support. ✔ Appointment of new directors ✔ Director resignation filings ✔ MCA documentation & compliance ✔ End-to-end professional assistance Stay compliant. Keep your company governance strong."
                whatsIncludedList={["DIN Application & Verification", "Board & General Meeting Notices", "DIR-11 & DIR-12 Filing", "MCA Database Update"]}
                stats={[
                    { count: "30 Days", label: "DIR-12 Filing Deadline", icon: <Clock size={20} /> },
                    { count: "21 Days", label: "General Meeting Notice", icon: <FileText size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Users size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert />
            <DetailsLayout
                navLabels={{ overview: "Overview", advantages: "Benefit", eligibility: "Listicles", documents: "Documents Required", process: "Registration Procedure", postCompliance: "Resignation", faq: "FAQs" }}
                overview={{
                    badge: "Companies Act 2013 — Sections 152, 168 & 169 | Director Appointment & Resignation",
                    title: "Appointment and Resignation of Directors –",
                    highlightTitle: "Overview",
                    description: [
                        "In every company, directors play a crucial role in governance, strategic decision-making, and regulatory compliance. Whether a business is appointing a new director or accepting the resignation of an existing one, the process must follow the provisions laid down under the Companies Act, 2013 and the rules of the Ministry of Corporate Affairs (MCA).",
                        "Any change in the board of directors must be formally documented and filed with the Registrar of Companies (ROC) within the specified timelines. Failure to comply may lead to penalties and compliance issues for the company.",
                        "Vyombiz managed by Clink Consultancy Services Private Limited helps businesses handle director appointments and resignations smoothly by managing documentation, board resolutions, and MCA filings, ensuring that every legal requirement is met efficiently.",
                        "Key reasons why director changes must be filed with ROC include: maintaining updated company records with MCA, ensuring transparency in company leadership, avoiding penalties for non-compliance, ensuring legal validity of board decisions, and maintaining proper corporate governance."
                    ],
                    whyIdealTitle: "About Director Appointment & Resignation — Section 168",
                    whyIdealList: [
                        { title: "Section 168 — Resignation", desc: "Section 168 of the Companies Act, 2013 provides a comprehensive framework for the resignation of directors, significantly improving upon the Companies Act, 1956." },
                        { title: "Section 152 — Appointment", desc: "Section 152 of the Companies Act, 2013 governs the appointment of directors — including first directors, subsequent appointments, and the role of the AGM in director regularisation." },
                        { title: "Company as Artificial Person", desc: "Since a company does not have a physical presence, it acts through natural persons — its directors. Directors are responsible for managing all operational aspects of the company." },
                        { title: "MCA Intimation Mandatory", desc: "Any change in directors — whether appointment, resignation, or removal — must be reported to the MCA via the relevant e-forms (DIR-11, DIR-12) within the stipulated timelines." },
                    ]
                }}
                advantages={benefitContent}
                eligibility={listiclesContent}
                documents={{
                    title: "Documents Required for Appointment & Resignation of Director",
                    description: "Documents required for the formal appointment or resignation of a director from a company. Accurate documentation is essential for successful filing with the ROC.",
                    list: [
                        "PAN card of the director",
                        "Identity proof (Aadhar / Passport / Voter ID)",
                        "Address proof",
                        "Director Identification Number (DIN)",
                        "Consent to act as director",
                        "Board resolution for appointment/resignation",
                        "Resignation letter (in case of resignation)",
                        "All documents must be apostilled if the Director is a non-resident of India.",
                        "Proof of dispatch.",
                        "Acknowledgment of form, if received.",
                    ],
                    imageUrl: "Documents.jpg"
                }}
                process={{ title: "Appointment of Director — Procedure", subtitle: "Step-by-step procedure for appointing a new director under the Companies Act, 2013.", steps: processSteps }}
                postCompliance={resignationContent}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for Director Appointment & Resignation Services",
                    subtitle: "Complete end-to-end support for smooth and compliant director changes.",
                    list: [
                        { title: "Experienced compliance professionals", desc: "Our team understands regulatory procedures and filing requirements in detail." },
                        { title: "End-to-end documentation support", desc: "We prepare all required forms and develop the application, ensuring complete accuracy of directors' details, resolutions, and attachments." },
                        { title: "Quick MCA filing process", desc: "We manage all MCA filing fee payments and ensure the correct fee structure is applied." },
                        { title: "Transparent service process", desc: "Clear documentation, professional support, and complete transparency throughout the process." },
                        { title: "Reliable advisory support for businesses", desc: "We help companies maintain regulatory compliance while ensuring smooth corporate governance operations." },
                        { title: "Expert assistance", desc: "We file DIR-11 and DIR-12 electronically with the MCA to designate or remove a director accurately within the required timelines." },
                    ]
                }}
            />
            <FAQLayout title="Frequently Asked Questions (FAQs)" subtitle="Common questions answered by our company law experts" faqs={faqs} />
        </div>
    );
};

export default AppointmentandResignationofDirectors;