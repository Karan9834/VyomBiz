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
        { question: "Can a struck off company be revived?", answer: "Yes. A struck off company can be restored through an application filed with the National Company Law Tribunal under Section 252 of the Companies Act, 2013." },
        { question: "How long does company revival take?", answer: "The process may take 3 to 6 months, depending on the complexity of the case and tribunal timelines." },
        { question: "What happens after revival?", answer: "Once revived, the company must file all pending compliance documents and maintain regular statutory filings." },
        { question: "Is there a deadline for applying for revival?", answer: "Typically, the application should be filed within three years of the strike-off order, though certain exceptions may apply." },
        { question: "Can business operations restart immediately after revival?", answer: "Yes. Once the restoration order is issued and compliance filings are completed, the company can resume normal operations." },
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
                Who Can Apply for Company Revival?
            </h3>
            <p className="text-[14px] text-slate-600 mb-2 leading-relaxed">
                The following parties are legally eligible to apply for revival of a struck off company:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
                {["Company directors", "Shareholders / members", "Creditors / lenders", "Employees", "Any aggrieved person"].map((who, i) => (
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
                Benefits of Reviving a Struck Off Company
            </h3>
            <p className="text-[14px] text-slate-600 mb-2 leading-relaxed">
                Reviving a company offers several strategic advantages for businesses and stakeholders.
            </p>
            <div className="grid gap-3 mb-6">
                {[
                    { title: "Restore Legal Identity", desc: "The company regains its corporate status and recognition under the Companies Act." },
                    { title: "Resume Business Operations", desc: "Entrepreneurs can restart activities without forming a new company." },
                    { title: "Recover Assets and Investments", desc: "Company assets, bank accounts, and financial rights can be reclaimed." },
                    { title: "Protect Stakeholder Interests", desc: "Creditors, investors, and employees benefit from restored corporate accountability." },
                    { title: "Maintain Business Reputation", desc: "Revival helps maintain continuity and protects brand value in the market." },
                    { title: "Recovery of Overdue Sums", desc: "To recover their overdue sum with interest, creditors of such companies may initiate an action — making revival essential for debt recovery." },
                    { title: "Prevents Director Disqualification", desc: "If annual returns or financial statements are not filed for three consecutive fiscal years, it may disqualify the directors of such companies under Section 164 — revival prevents this." },
                    { title: "CFSS-2020 Nominal Fee Benefit", desc: "Overdue returns can be filed at a nominal fee of Rs. 300/–600/- under the Companies Fresh Start Scheme — waiving hefty additional fees." },
                    { title: "Withdrawal of Initiated Prosecution", desc: "Any proceedings or prosecution already initiated shall be withdrawn if the scheme's requirements are obeyed within time." },
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
        { step: "01", title: "Case Assessment", desc: "Review the strike-off status, compliance history, and eligibility for restoration." },
        { step: "02", title: "Document Preparation", desc: "Prepare affidavits, financial statements, compliance records, and supporting evidence." },
        { step: "03", title: "Filing Petition with NCLT", desc: "Submit a restoration petition under Section 252 of the Companies Act in Form NCLT-9 along with a demand draft of Rs. 1,000/-." },
        { step: "04", title: "Tribunal Review", desc: "NCLT reviews the case and may request clarifications or additional documents. During hearings, the Tribunal shall hear the Petitioner and Respondent (ROC)." },
        { step: "05", title: "ROC Restoration Order", desc: "Upon approval, ROC restores the company's name in the register. The Tribunal's order directs the applicant to deliver a certified copy to the ROC within 30 days, and the Registrar publishes the order in the Official Gazette." },
        { step: "06", title: "Post Revival Compliance", desc: "File pending returns and financial statements to maintain compliance. The Company must file Form INC-28 with the ROC within 30 days and all pending annual returns and financial statements within the time directed by the Tribunal." },
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Revival of "
                heroTitleSuffix="Struck Off Companies"
                heroSubtitle="Bring Your Company Back to Life — Legally & Seamlessly"
                heroDescription="If your company has been removed from the register by the Registrar of Companies (ROC), it doesn't mean the journey is over. With the right legal process, your business can be revived, restored, and made fully operational again. Get expert assistance to restore your company quickly and stay compliant with corporate regulations. ✔ Legal revival support ✔ Documentation & ROC filing handled ✔ Expert compliance guidance"
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
                    title: "What is Revival of a",
                    highlightTitle: "Struck Off Company?",
                    description: [
                        "Revival of a struck off company refers to the legal restoration of a company's name in the Register of Companies after it has been removed by the Registrar of Companies (ROC) due to non-compliance, inactivity, or failure to file statutory returns.",
                        "When a company is struck off under the Companies Act, 2013, it legally ceases to exist. However, if the business has pending assets, liabilities, or intends to resume operations, the company can apply for revival through the National Company Law Tribunal (NCLT).",
                        "Through this process, the company regains its legal identity, operational status, and compliance standing.",
                        "Vyombiz managed by Clink Consultancy Services Private Limited provides end-to-end support to businesses seeking fast, structured, and legally compliant company restoration services."
                    ],
                    whyIdealTitle: "Why Companies Get Struck Off",
                    whyIdealList: [
                        { title: "Non-Filing of Annual Returns", desc: "Companies that fail to file annual returns or financial statements for consecutive years risk removal from the ROC register." },
                        { title: "Inactive Business Operations", desc: "If a company has not commenced business or remains inactive for a prolonged period, it may be categorized as a dormant entity and struck off." },
                        { title: "Failure to Respond to ROC Notices", desc: "Ignoring compliance notices issued by the ROC can trigger strike-off proceedings." },
                        { title: "Voluntary Strike Off by Directors", desc: "In some cases, directors may voluntarily apply for company closure using Form STK-2." },
                    ]
                }}
                advantages={groundsContent}
                features={benefitsContent}
                documents={{
                    title: "Documents Required for Company Revival",
                    description: "The exact documentation depends on the company's history and strike-off reason, but generally includes:",
                    list: [
                        "Memorandum and Articles of Association (MOA & AOA)",
                        "Financial statements and income tax returns",
                        "Affidavit from directors",
                        "NCLT petition and supporting documents",
                        "Proof of business activity or assets",
                        "Board resolutions and authorization letters",
                        "Certificate of Incorporation",
                        "Copy of audited financial statements from the date of strike-off",
                        "Bank statements of the company",
                        "Striking off order of the Registrar of Companies",
                    ]
                }}
                process={{ title: "Process of Revival of Struck Off Company", subtitle: "Revival involves legal proceedings before the National Company Law Tribunal (NCLT) and compliance filings with the ROC.", steps: processSteps }}
                postCompliance={otherInfoContent}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for Company Revival?",
                    subtitle: "Restoring a struck off company involves legal expertise, procedural accuracy, and compliance knowledge.",
                    list: [
                        { title: "Strike-off status analysis", desc: "We provide a thorough analysis of your case — identifying the best grounds for revival and the applicable limitation period." },
                        { title: "NCLT petition preparation and filing", desc: "We handle the complete NCLT petition drafting and filing in Form NCLT-9, demand draft, and all supporting documentation." },
                        { title: "ROC compliance management", desc: "After the NCLT order, we handle Form INC-28 filing, submission of certified copies to the ROC, and all pending annual return filings to restore full compliance." },
                        { title: "Legal documentation support", desc: "Our team prepares all affidavits, financial statements, and supporting evidence required for the petition." },
                        { title: "Post-revival regulatory compliance", desc: "We ensure your company maintains ongoing compliance after restoration to avoid future strike-off risks." },
                        { title: "10+ Years of Proven Experience", desc: "Vyombiz brings over a decade of experience in business consulting, corporate law, and MCA compliance — ensuring reliable and expert-led revival assistance." },
                    ]
                }}
            />
            <FAQLayout title="Frequently Asked Questions (FAQs)" subtitle="Common questions about company revival under Section 252 answered by our experts" faqs={faqs} />
        </div>
    );
};

export default RevivalofStruckOffCompanies;