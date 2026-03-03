import React from "react";
import { CheckCircle2, AlertTriangle, Clock, Users, FileText, Shield, BookOpen, BarChart2, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Revival of Struck Off Companies
 * Nav: Overview | Grounds | Benefits | Listicles | Registration Procedure | Other Info | Vyombiz Support | FAQs
 */
const RevivalofStruckOffCompanies = () => {
    const faqs = [
        { question: "Which provision enabled ROC for revival of Struck Off Companies?", answer: "The provisions of Section 248(1) of the Companies Act, 2013 enable the Registrar of Companies to strike off companies for non-filing of returns/statements for a period of three consecutive fiscal years — and Section 252 governs the revival/restoration of such companies before the NCLT." },
        { question: "What do you mean by Strike off?", answer: "Strike off means the temporary closure of the Company or removal of the name of the Company from the Register of Companies by the Registrar, following the provisions of the Companies Act, 2013. It is a substitute for winding up of the Company, and the company can get revived for a period of twenty years from the date of strike-off." },
        { question: "Can a director of any company appeal for the Revival of Struck off Companies?", answer: "Any person aggrieved by an order of the Registrar — including a company, its members, creditors, or workmen — can file a petition for revival. Directors can appeal as aggrieved persons. A petition under Section 252(1) can be filed by members, creditors, or workmen within 20 years. Others can petition under Section 252(3) within 3 years of the notification." },
        { question: "What is the limitation period in case of voluntary striking off?", answer: "The limitation period for voluntary striking off is twenty years from the date of publication of the notice in the Official Gazette. The application must be made before the expiry of twenty years from the date of publication of the notice of strike-off." },
        { question: "Can ROC strike off the companies' names on the non-filing of MGT-7 e-Forms and AOC-4?", answer: "Yes. If a company has not filed its annual returns (MGT-7) or financial statements (AOC-4) for a continuous period of three fiscal years, the ROC is empowered to strike off the company's name under Section 248(1) of the Companies Act, 2013." },
        { question: "What are the grounds for Revival of Struck off companies?", answer: "The NCLT considers revival if the company holds immovable property, has complied with GST/Income Tax/PF authorities, is actively transacting as shown in bank statements, is renewing licenses annually, or any other evidence demonstrating that the company was active and ongoing." },
        { question: "What are the benefits of the Revival of Struck Off Companies?", answer: "Benefits include: recovery of company debts by creditors, enforcement of company liabilities, avoiding director disqualification under Section 164, accession to CFSS-2020 waiver for filing overdue returns at nominal fees, and protection from prosecution for pending documents." },
        { question: "What are the documents that shall be filed with the appeal for Revival of struck off companies?", answer: "Required documents include: Certificate of Incorporation, MOA, audited financial statements from date of strike-off, bank statements, ROC's striking-off order, affidavit verifying the petition, board resolution authorising filing, PAN, Income Tax returns, property documents if any, and Memorandum of Appearance/Vakalatnama." },
        { question: "What is the Legal Application for the process of Revival of Struck Off Companies?", answer: "An appeal or application must be made in Form NCLT-9 along with a demand draft of Rs. 1,000/- in favour of Pay and Accounts Officer, Ministry of Corporate Affairs (MCA). After the NCLT's order, the company must file Form INC-28 with the ROC within 30 days." },
        { question: "What is the time limit for the applicant to deliver a certified copy of the order to the ROC?", answer: "Within 30 days from the date of the NCLT order, the applicant must deliver a certified copy of the order to the Registrar of Companies." },
        { question: "Is the publication of an order necessary for the revival of struck off companies?", answer: "Yes. After receiving the certified copy of the NCLT order, the Registrar publishes the order in the Official Gazette with the name and seal of the Company — formally restoring the company's name in the Register of Companies." },
        { question: "How is the Companies Fresh Start Scheme, 2020 beneficial in the Revival of struck-off companies?", answer: "CFSS-2020 allows struck-off companies to file overdue annual returns and financial statements at a nominal fee of Rs. 300/–600/- (depending on the case), with a waiver of additional late fees. Proceedings or prosecutions initiated for non-filing are withdrawn if overdue documents are filed within the scheme's window." },
    ];

    /* ─── Grounds (custom JSX → advantages slot) ─────────── */
    const groundsContent = (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#072b47] mb-2 flex items-center gap-2">
                <Shield size={18} className="text-[#005a9c]" />
                Who Can Apply for Revival?
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
                {["Company", "Any creditor / member", "Workmen"].map((who, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#e8f1fb] border border-[#c0d8f0] rounded-full px-4 py-2">
                        <CheckCircle2 size={13} className="text-[#005a9c]" />
                        <span className="text-[13px] font-medium text-[#005a9c]">{who}</span>
                    </div>
                ))}
            </div>
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-[#005a9c]" />
                Grounds on Which NCLT Orders Revival
            </h3>
            <div className="grid gap-3">
                {[
                    "The Company holds any immovable property.",
                    "The Company, apart from the Registrar of Companies, has complied with the GST, Income Tax, Provident Fund, and such authorities.",
                    "There is evidence stating that the Company has an ongoing business as active transactions in the bank statements of the Company.",
                    "The Company is renewing any license on an annual basis and other documents depending upon the circumstances.",
                    "Any document showing that the Company is ongoing or active and it will be in the public interest to revive the Company.",
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                        <CheckCircle2 size={15} className="text-[#005a9c] mt-0.5 shrink-0" />
                        <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                    </div>
                ))}
            </div>
            <h3 className="text-lg font-bold text-[#072b47] mt-8 mb-4 flex items-center gap-2">
                <Clock size={18} className="text-amber-500" />
                Limitation Periods for Filing Revival Petition
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    { label: "Member / Creditor / Workman (Section 252(1))", period: "Within 20 years of strike-off notification in the Official Gazette.", color: "bg-[#f8fbff] border-[#d0e3f5]" },
                    { label: "Others — Aggrieved Persons (Section 252(3))", period: "Within 3 years from the publication of notification in the Official Gazette.", color: "bg-amber-50 border-amber-100" },
                    { label: "Compulsory Strike-Off by Registrar", period: "Appeal must be filed within 3 years from the date of the Registrar's order.", color: "bg-red-50 border-red-100" },
                    { label: "Voluntary Strike-Off", period: "Application must be made before expiry of 20 years from the date of publication in the Official Gazette.", color: "bg-green-50 border-green-100" },
                ].map((item, i) => (
                    <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
                        <p className="text-[13px] font-bold text-[#072b47] mb-1">{item.label}</p>
                        <p className="text-[13px] text-slate-600 leading-relaxed">{item.period}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    /* ─── Benefits (custom JSX → features slot) ─────────── */
    const benefitsContent = (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <BarChart2 size={18} className="text-[#005a9c]" />
                Benefits of Revival of Struck Off Companies
            </h3>
            <div className="grid gap-3 mb-6">
                {[
                    { title: "Recovery of Overdue Sums", desc: "To recover their overdue sum with interest, creditors of such companies may initiate an action — making revival essential for debt recovery." },
                    { title: "Enforcement of Liabilities", desc: "The company can be enforced for discharging its liabilities and obligations, and the liability of every director and officer shall continue post-revival." },
                    { title: "Prevents Director Disqualification", desc: "If annual returns or financial statements are not filed for three consecutive fiscal years, it may disqualify the directors of such companies under Section 164 — revival prevents this." },
                    { title: "Avoids Prosecution Risk", desc: "The Registrar may recommend prosecution of persons responsible for non-filing of documents and returns. Revival and subsequent compliance avoids such prosecution." },
                    { title: "CFSS-2020 Nominal Fee Benefit", desc: "Overdue returns can be filed at a nominal fee of Rs. 300/–600/- under the Companies Fresh Start Scheme — waiving hefty additional fees." },
                    { title: "No Fresh Proceedings for Filed Documents", desc: "No proceedings against the company and its officers shall be initiated for delay in filing documents if overdue documents are filed within the scheme's window." },
                    { title: "Withdrawal of Initiated Prosecution", desc: "Any proceedings or prosecution already initiated shall be withdrawn if the scheme's requirements are obeyed within time." },
                    { title: "Director's Liability on Disqualification", desc: "The office of the director becomes vacant automatically in all companies upon disqualification. Revival and compliance allows directors to be re-appointed after removing disqualification." },
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                        <CheckCircle2 size={15} className="text-[#005a9c] mt-0.5 shrink-0" />
                        <div>
                            <p className="text-[14px] font-bold text-[#072b47] mb-0.5">{item.title}</p>
                            <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    /* ─── Other Info (custom JSX → postCompliance slot) ─────────── */
    const otherInfoContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-[#005a9c]" />
                Revival of Struck Off Companies by CFSS-2020
            </h3>
            <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                Following the power under Section 248(1)(c) to curb the operations of shells and increase the transparency of companies, the Registrar of Companies struck off many companies in 2017, 2018, and 2019. Everyone was facing difficulty in reviving their companies before this date, on account of hefty penalties for filing annual returns.
            </p>
            <p className="text-[14px] text-slate-600 mb-6 leading-relaxed">
                However, additional fees on filing yearly returns have been waived off by the government amid the Novel Corona Virus pandemic after the introduction of the <strong>Companies Fresh Start Scheme, 2020 (CFSS-2020)</strong>. Company Fresh Start Scheme (CFSS-2020) covers a golden opportunity to revive your company without connecting any in-exorbitant or heavy penalties or fees under Section 252 of the Companies Act, 2013 read with Rule 87A of the National Company Law Tribunal (Amendment) Rules, 2017.
            </p>
            <div className="grid gap-3 mb-8">
                {[
                    "Companies which have been struck off can now opt for filing overdue returns and documents at a nominal fee of Rs. 300/-, 400/-, 500/- or 600/- depending on the case — with a waiver of additional late fees.",
                    "For imposing penalties on accounts of delay associated with specified forms and returns, no proceedings against the company and its officers shall be initiated if overdue documents are filed within the overall occupancy of the scheme.",
                    "If proceedings or prosecution have been initiated, they shall be withdrawn if the scheme's necessities are obeyed in time.",
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
                        <CheckCircle2 size={14} className="text-green-600 mt-0.5 shrink-0" />
                        <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                    </div>
                ))}
            </div>
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <AlertTriangle size={18} className="text-amber-500" />
                Strike Off of Companies under the Companies Act, 2013
            </h3>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                <p className="text-[14px] text-slate-700 leading-relaxed mb-3">
                    If your company has been struck off from the Register of Companies due to non-filing of annual returns as well as financial statements for a period of 3 years, you can get it restored. All you need to do is to file a petition in the Jurisdictional Bench of the National Company Law Tribunal (NCLT) and get your company restored.
                </p>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                    The demand draft of <strong>Rs. 1,000/-</strong> should be filed with the petition as fees. The petition is filed in <strong>Form NCLT-9</strong> in favour of the Pay and Accounts Officer, Ministry of Corporate Affairs (MCA).
                </p>
            </div>
        </div>
    );

    const processSteps = [
        { step: "01", title: "Filing of Application / Petition / Appeal (Form NCLT-9)", desc: "An appeal or application must be made in the format of Form NCLT-9 along with a demand draft of Rs. 1,000/- in favour of Pay and Accounts Officer, Ministry of Corporate Affairs (MCA). The petition must state that the company was actually in operation." },
        { step: "02", title: "Serving Copy of Petition", desc: "Not less than fourteen days before the date fixed for the hearing of the application, a copy of the petition should be served to the Registrar of Companies and such other persons as the Tribunal may direct." },
        { step: "03", title: "Trials and Hearing by Tribunal", desc: "During the trials and hearings, the Tribunal shall hear the Petitioner and Respondent (ROC). It will take note of objections received during the proposed dates of hearing. If satisfied after hearing both sides, the Tribunal can order the revival of the name of the Company in the record of the ROC." },
        { step: "04", title: "Order of Tribunal", desc: "The Tribunal makes an order for restoring the name of the Company in the Register of Companies. The order directs: (1) Within 30 days, the applicant must deliver a certified copy of the order to the ROC. (2) The Registrar shall publish the order in the Official Gazette. (3) Unless otherwise directed, the applicant must pay the costs of the appeal to the Registrar." },
        { step: "05", title: "Abiding ROC Orders — Filing INC-28", desc: "Within thirty days from the date of the NCLT order, the Company must file a copy of the order in Form 'INC-28' with the Registrar of Companies." },
        { step: "06", title: "Publication of Order", desc: "After receiving the certified copy of the NCLT order, the Registrar publishes the order in the Official Gazette with the name and seal of the Company — formally restoring the company in the public record." },
        { step: "07", title: "Filing Pending Documents with ROC", desc: "The Company must comply with the requirements of the Companies Act, 2013 and file all pending annual returns and financial statements with the Registrar within the time directed by the Tribunal." },
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Revival of "
                heroTitleSuffix="Struck Off Companies"
                heroSubtitle="Restoration of Company under Section 252 — NCLT Petition | CFSS-2020"
                heroDescription="Revive your struck-off company swiftly and legally with Vyombiz. From NCLT petition preparation and ROC service to order publication and pending return filing — complete end-to-end restoration support by our compliance experts."
                whatsIncludedList={["NCLT Petition (Form NCLT-9)", "Copy Service to ROC & Stakeholders", "Form INC-28 Filing", "Pending Returns & Statements Filing"]}
                stats={[
                    { count: "20 Years", label: "Voluntary Strike-Off Revival Period", icon: <Clock size={20} /> },
                    { count: "3 Years", label: "Compulsory Strike-Off Appeal Limit", icon: <FileText size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Users size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert />
            <DetailsLayout
                navLabels={{ overview: "Overview", advantages: "Grounds", features: "Benefits", documents: "Listicles", process: "Registration Procedure", postCompliance: "Other Info", faq: "FAQs" }}
                overview={{
                    badge: "Companies Act 2013 — Section 252 | NCLT | CFSS-2020 | Revival of Struck Off Companies",
                    title: "Revival of Struck Off Companies —",
                    highlightTitle: "An Overview",
                    description: [
                        "Strike off means temporary closure of the Company or removal of the name of the Company from the Register of Companies by the Registrar following the provisions of the Companies Act, 2013. It is a substitute for winding up of the Company. A struck-off company can get revived for a period of twenty years from the date of strike-off.",
                        "The appeal or application can be filed by the Registrar, any person aggrieved by the order of the Registrar, or by the Company, or by a member or creditor or workman. The member, creditor, or workman of a company can file a petition for revival before the expiry of 20 years from the notification in the Official Gazette under Section 252(1). Others can file a petition under Section 252(3) within three years from the publication of notification in the Official Gazette.",
                    ],
                    whyIdealTitle: "Why Companies Get Struck Off",
                    whyIdealList: [
                        { title: "Non-Filing of Annual Returns", desc: "If a company has not filed its annual returns (MGT-7) or financial statements (AOC-4) for three consecutive fiscal years, the ROC is empowered to strike off the company's name." },
                        { title: "Non-Commencement of Business", desc: "A company that has not commenced business within one year of incorporation — and has failed to file Form INC-20A — may face strike-off action by the ROC." },
                        { title: "Registrar Initiation under Section 248(1)", desc: "The ROC struck off many companies in 2017, 2018, and 2019 using Section 248(1)(c) to curb the operations of shell companies and increase corporate transparency." },
                        { title: "Voluntary Strike-Off", desc: "Companies may also voluntarily apply for strike-off under Section 248(2) by filing Form STK-2, which imposes a 20-year limitation period for revival — rather than the 3-year period for compulsory strike-off." },
                    ]
                }}
                advantages={groundsContent}
                features={benefitsContent}
                documents={{
                    title: "Documents Required for Revival of Struck Off Companies",
                    description: "The following documents must be filed with the NCLT petition for revival, stating that the company was actually in operation.",
                    list: [
                        "Certificate of Incorporation",
                        "Memorandum of Association (MOA)",
                        "Copy of audited financial statements from the date of strike-off",
                        "Bank statements of the company",
                        "Striking off order of the Registrar of Companies",
                        "Affidavit verifying the petition",
                        "Copy of Board Resolution authorising the filing of the petition",
                        "PAN Card of the Company",
                        "Income Tax Returns of the Company",
                        "All property documents if any property is owned by the Company",
                        "Memorandum of Appearance or Vakalatnama",
                        "Any other documents as required by the Tribunal",
                    ]
                }}
                process={{ title: "Process of Revival of Struck Off Companies", subtitle: "Step-by-step NCLT process for restoring a struck-off company under Section 252 of the Companies Act, 2013.", steps: processSteps }}
                postCompliance={otherInfoContent}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for Revival of Struck Off Companies?",
                    subtitle: "Expert legal assistance, proven track record, and full NCLT representation.",
                    list: [
                        { title: "10+ Years of Proven Experience", desc: "Vyombiz brings over a decade of experience in business consulting, corporate law, and MCA compliance — ensuring reliable and expert-led revival assistance." },
                        { title: "500+ Matters Handled", desc: "Vyombiz has successfully handled over 500 matters pertaining to revival of struck-off companies across India." },
                        { title: "Expert Case Analysis", desc: "Our team provides a thorough analysis of your case — identifying the best grounds for revival, the applicable limitation period, and the optimal petition strategy." },
                        { title: "NCLT Petition Filing & Guidance", desc: "We handle the complete NCLT petition drafting and filing in Form NCLT-9, demand draft, and all supporting documentation." },
                        { title: "NCLT Hearing Representation", desc: "Vyombiz provides end-to-end representation through NCLT proceedings — from hearing scheduling to presenting arguments before the Tribunal." },
                        { title: "ROC Filing Support", desc: "After the NCLT order, we handle Form INC-28 filing, submission of certified copies to the ROC, and all pending annual return filings to restore full compliance." },
                        { title: "CFSS-2020 Advisory", desc: "We advise on leveraging the Companies Fresh Start Scheme, 2020 — enabling filing of overdue returns at nominal fees with access to applicable prosecution waivers." },
                    ]
                }}
            />
            <FAQLayout title="FAQs on Revival of Struck Off Companies" subtitle="Common questions about company revival under Section 252 answered by our experts" faqs={faqs} />
        </div>
    );
};

export default RevivalofStruckOffCompanies;
