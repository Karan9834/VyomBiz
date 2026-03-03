import React from "react";
import { CheckCircle2, AlertTriangle, Clock, Users, FileText, Shield, BookOpen, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Change In Name Clause
 * Nav: Overview | Checklist | Registration Procedure | Restriction | FAQ
 */
const ChangeInNameClause = () => {
    const faqs = [
        { question: "What are the impacts of the name change on the Company?", answer: "Changing the existing name doesn't have any impact on the legal identity of the Company. Changing the name is not creating a new entity. The changed name doesn't: (1) Affect the existing rights of the Company. (2) Affect the legal proceedings against the Company pending in the old name. (3) Affect the legal proceedings initiated by the Company in the old name." },
        { question: "Can the name approval letter be sustained after the expiry of the time limit to file a resolution with ROC?", answer: "No. The name approved by the ROC remains valid for only 20 days from the date of approval. The company must complete the EGM and file the special resolution with ROC within this window. A new RUN application must be submitted if the validity expires." },
        { question: "What can be the reasons in general for a name change?", answer: "Common reasons include: rebranding for a new business direction, merger or acquisition, avoiding confusion with a competitor's name, reflecting a change in business objects, or aligning the name with expanded business activities." },
        { question: "What is the expected time taken to complete the process of the name change?", answer: "The complete process — from Board Meeting to new Certificate of Incorporation — typically takes 30–45 working days, subject to ROC processing time and Central Government approval timelines." },
    ];

    /* ─── Checklist (custom JSX → eligibility slot) ─────────── */
    const checklistContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-[#005a9c]" />
                Guidelines as per Companies Act While Naming the Company
            </h3>
            <p className="text-[14px] text-slate-500 mb-5 leading-relaxed">
                Companies Act 2013 prescribes the conditions related to naming the Company — whether it is Private Limited, OPC, or Public Limited. The following conditions must be kept in mind while selecting a name or while changing an existing name:
            </p>
            <div className="grid gap-3 mb-8">
                {[
                    "MCA ensures the name applied doesn't resemble the name already registered as a company or trademark. Mere joining of separate words or using the plural version of an existing name doesn't make it unique.",
                    "MCA restricts names which are too general, such as 'Cotton Company Private Limited'.",
                    "The name of the Company cannot start with the name of a person — for instance, 'Ankita Private Limited'.",
                    "The proposed name shall be considered undesirable if it violates the Emblem and Name Act, violates any Trademark, or includes offensive or misleading words.",
                    "The name selected for the Company shall align with the objects of the Company.",
                    "If the Company is incorporated to engage in financial services such as chit fund, financing, leasing, etc., it shall indicate such activities in its name.",
                    "The name shall not include words that indicate any constitution or legal person such as LLP, Trust, HUF, etc.",
                    "The last words of a Private Company shall end with 'Private Limited'; One Person Company with 'OPC Private Limited'; and the Public Company shall end with the word 'Limited'.",
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                        <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                        <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                    </div>
                ))}
            </div>

            <h4 className="text-[15px] font-bold text-[#072b47] mb-3">Checklist for Name Change — Documents Required</h4>
            <div className="grid gap-2">
                {[
                    "CTC of Special Resolution passed at EGM.",
                    "Notice of EGM along with an Explanatory Statement.",
                    "Altered Memorandum of Association (MOA).",
                    "Altered Articles of Association (AOA).",
                    "Board Resolution authorizing the Director / Company Secretary to apply to ROC for name availability.",
                    "Copy of Minutes of EGM in which the Special Resolution was passed.",
                    "Name Approval Letter from ROC (valid for 20 days from date of approval).",
                    "Form INC-24 for Central Government approval of name change.",
                    "New Certificate of Incorporation (COI) issued by ROC after approval.",
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#e8f1fb] border border-[#c0d8f0] rounded-lg px-4 py-2.5">
                        <CheckCircle2 size={14} className="text-[#005a9c] shrink-0" />
                        <span className="text-[13px] text-slate-700">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    /* ─── Restriction (custom JSX → postCompliance slot) ─────── */
    const restrictionContent = (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <AlertTriangle size={18} className="text-amber-500" />
                Restrictions on Change of Company Name
            </h3>
            <p className="text-[14px] text-slate-500 mb-5 leading-relaxed">
                Rule 29 of Companies Rules, 2014 specifically prohibits the following companies from changing their name:
            </p>
            <div className="grid gap-4">
                {[
                    { title: "Default in Annual Return Filing", desc: "A company that has defaulted in filing its annual return on time is not permitted to change its name until the default is rectified." },
                    { title: "Failure to Repay Matured Deposits", desc: "A company that has failed to repay matured deposits is barred from making a name change until all matured deposit repayment obligations are met." },
                    { title: "Default in Repaying Matured Debentures", desc: "A company that has defaulted in repaying matured debentures cannot apply for a name change while such debenture defaults remain outstanding." },
                    { title: "Default in Paying Interest on Deposits or Debentures", desc: "A company that has not paid or defaulted in paying interest on deposits or debentures is ineligible for a name change until all interest dues are cleared." },
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 bg-amber-50 border border-amber-100 rounded-xl p-4">
                        <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-[14px] font-semibold text-amber-700 mb-0.5">{item.title}</p>
                            <p className="text-[13px] text-slate-700 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const processSteps = [
        { step: "01", title: "Conduct Board Meeting", desc: "Issue a notice of 7 days to the directors to conduct a board meeting. In the board meeting, pass two resolutions: (1) To authorize the Company Secretary or Director to apply to ROC for confirming name availability. (2) To fix the date, time, and venue to conduct the EGM for approval of the new name and alteration of MOA." },
        { step: "02", title: "Check the Name Availability", desc: "The company shall check the name for its availability through the MCA portal. The company can verify whether the same name is registered as a trademark or as a company via the 'Public Search of Trademark' and 'Check Company Name' options available on the MCA portal." },
        { step: "03", title: "Apply Online for Name Approval via RUN", desc: "After the name is confirmed available, apply through the RUN (Reserve Unique Name) web service on the MCA portal. Up to two names can be applied at a time with a prescribed fee of INR 1,000. Attach the relevant Board Resolution to this form. The ROC will either approve the name or put it to resubmission. The name approved by ROC remains valid for 20 days from the date of approval." },
        { step: "04", title: "Conduct Extra-Ordinary General Meeting (EGM)", desc: "After ROC approves the name and the name approval letter is received, call and convene the EGM to pass the necessary Special Resolution for approval of the name change and making amendments to MOA & AOA." },
        { step: "05", title: "File MGT-14 with ROC", desc: "Within 30 days of conducting the EGM, file the Special Resolution with the ROC in Form MGT-14. Attach: CTC of Special Resolution, Notice of EGM with Explanatory Statement, Altered MOA, and Altered AOA." },
        { step: "06", title: "Apply for Central Government Approval — INC-24", desc: "File Form INC-24 to obtain Central Government approval for the name change and alteration in MOA. Attach a copy of the Minutes of the EGM in which the Special Resolution was passed." },
        { step: "07", title: "Receive New Certificate of Incorporation (COI)", desc: "After the process is completed, the ROC shall issue a new Certificate of Incorporation (COI) with the amended company name. The new name becomes effective from the date of issuance of the new COI." },
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Change in "
                heroTitleSuffix="Name Clause"
                heroSubtitle="Statutory Process for Company Name Change under Companies Act, 2013"
                heroDescription="Change your company's name seamlessly with Vyombiz. From Board Meeting resolutions and RUN application to Central Government approval via INC-24 and the new Certificate of Incorporation — handled end-to-end by our compliance experts."
                whatsIncludedList={["Board & EGM Resolution Drafting", "RUN Name Approval Application", "MOA & AOA Alteration", "New COI from ROC"]}
                stats={[
                    { count: "20 Days", label: "Name Approval Validity", icon: <Clock size={20} /> },
                    { count: "30 Days", label: "MGT-14 Filing Deadline", icon: <FileText size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Users size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert />
            <DetailsLayout
                navLabels={{ overview: "Overview", eligibility: "Checklist", process: "Registration Procedure", postCompliance: "Restriction", faq: "FAQs" }}
                overview={{
                    badge: "Companies Act 2013 — Name Change | RUN + INC-24 + MGT-14",
                    title: "Change in Name Clause —",
                    highlightTitle: "An Overview",
                    description: [
                        "The name of the Company is its identity throughout its span of life and should be thought through carefully before selection. It shall be constructed in such a manner that it can stay sustainable with the future growth of the Company. The Companies Act regulates the naming process for the Company right from selecting it to any changes made thereafter.",
                        "Certain do's and don'ts while selecting a company name, along with the procedure to change the name, are an important part of corporate compliance under the Companies Act, 2013.",
                    ],
                    whyIdealTitle: "Why a Company May Need to Change its Name",
                    whyIdealList: [
                        { title: "Rebranding for Growth", desc: "As a company grows and diversifies, its original name may no longer reflect its business objectives — a name change allows realignment of identity with expanded services." },
                        { title: "Merger or Acquisition", desc: "In corporate mergers or acquisitions, the surviving entity often needs to change its name to reflect the new combined business identity." },
                        { title: "Conflict with Trademarks", desc: "If an existing name conflicts with a registered trademark or another company's name, a change becomes legally necessary to avoid IP disputes." },
                        { title: "Change in Business Objects", desc: "When a company alters its primary business activities under MOA, it may need to change its name to accurately reflect the new objects of the company." },
                    ]
                }}
                eligibility={checklistContent}
                process={{ title: "Procedure of Change of Company Name", subtitle: "Step-by-step process to change the company name under the Companies Act, 2013.", steps: processSteps }}
                postCompliance={restrictionContent}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for Company Name Change?",
                    subtitle: "End-to-end compliant and efficient handling of your company name change process.",
                    list: [
                        { title: "Name Availability Research", desc: "We conduct thorough checks on MCA, trademark registries, and existing company databases to ensure your desired name is fully available and compliant." },
                        { title: "RUN Application & ROC Follow‑up", desc: "We file the RUN application with the correct fee and board resolution, and follow up with the ROC to ensure timely name approval within the 20-day validity window." },
                        { title: "Drafting MOA & AOA Amendments", desc: "Our legal team drafts the altered MOA and AOA to reflect the new name accurately, ensuring compliance with the Companies Act, 2013." },
                        { title: "INC-24 Central Government Approval", desc: "We manage the Form INC-24 filing for Central Government approval — a mandatory step for official recognition of any company name change." },
                        { title: "New Certificate of Incorporation", desc: "We ensure you receive your new COI from the ROC at the earliest, giving your company its new legal identity officially and without delay." },
                    ]
                }}
            />
            <FAQLayout title="FAQs on Change in Name Clause" subtitle="Common questions about changing a company name answered by our experts" faqs={faqs} />
        </div>
    );
};

export default ChangeInNameClause;
