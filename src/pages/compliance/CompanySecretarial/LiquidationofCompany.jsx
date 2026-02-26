import React from "react";
import { CheckCircle2, AlertTriangle, Clock, Users, FileText, Shield, BookOpen, Building2, BarChart2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Liquidation of Company
 * Nav: Overview | Types | Process | Advantage | Vyombiz Support | FAQs
 */
const LiquidationofCompany = () => {
    const faqs = [
        { question: "What happens when liquidating a company?", answer: "A company after liquidating shall no longer function and will stop doing business and employing people. It will permanently cease its existence from the company's registration. When the company is liquidated, its assets sold are used to pay off debts and surplus money shall be distributed among the shareholders." },
        { question: "Is liquidation good or bad?", answer: "Liquidation is a formal legal process used to close a business. It is generally seen as a last resort when a company cannot meet its financial obligations. While it removes pressure from creditors and allows orderly asset distribution, it permanently ends the company's operations — making it neither inherently good nor bad, but context-dependent." },
        { question: "What happens to directors when a company goes into liquidation?", answer: "Once a company enters liquidation, its directors lose control over the company's operations. Directors must fully cooperate with the liquidator and are prohibited from engaging in wrongful trading. If found to have acted unlawfully prior to liquidation, they may face personal liability for the company's debts." },
        { question: "How long does the liquidation process take in India?", answer: "The timeframe for liquidation may take up to two years from the date of application for liquidation submitted before the adjudicating authority. Voluntary liquidation must be completed within 12 months of commencement." },
        { question: "Who benefits from liquidation?", answer: "Creditors — especially secured and preferential creditors — benefit the most from liquidation as they are paid from the proceeds of the company's asset sales. Employees may receive unpaid wages and redundancy payments. Shareholders may receive any surplus after all debts are repaid." },
        { question: "What is the difference between voluntary and compulsory liquidation in India?", answer: "Voluntary liquidation is initiated by the company's members or creditors when the company can no longer operate or the owners wish to cease operations. Compulsory liquidation is ordered by the NCLT, usually at the request of creditors, when the company is unable to repay its debts." },
        { question: "What is the role of the liquidator in the liquidation process in India?", answer: "A liquidator manages the sale of company assets, uses the proceeds to repay creditors in the legal order of priority, distributes any remaining surplus to shareholders, and reports the liquidation process to stakeholders. They also submit a final report to the ROC and IBBI upon completion." },
        { question: "Who controls a company in liquidation?", answer: "Once a company is placed in liquidation, the liquidator (appointed by the NCLT or creditors) takes over full control of the company. Directors lose all management authority and must cooperate fully with the liquidator." },
    ];

    /* ─── Types (custom JSX → advantages slot) ─────────── */
    const typesContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <BarChart2 size={18} className="text-[#005a9c]" />
                Types of Liquidation of Company in India
            </h3>
            <div className="grid gap-6">
                {[
                    {
                        num: "01", title: "Voluntary Liquidation",
                        desc: "In a voluntary liquidation, the company is not compelled to undergo the insolvency process. The decision to cease operations is made voluntarily by the owners or shareholders. This typically occurs when the company is solvent and capable of repaying its creditors in full.",
                        sub: [
                            { name: "Member's Voluntary Liquidation (MVL)", desc: "Initiated by the company's shareholders when they decide the company should no longer operate. Starts with the directors signing a declaration of solvency — confirming the company can repay all debts within a specified period." },
                            { name: "Creditors' Voluntary Liquidation (CVL)", desc: "Initiated when a company is insolvent or no longer capable of fulfilling its financial obligations. Used when a company is facing significant financial constraints and is incapable of recovery." },
                        ]
                    },
                    {
                        num: "02", title: "Compulsory Liquidation",
                        desc: "Compulsory liquidation occurs when a company is ordered by the adjudicating authority to shut down its business operations, usually at the request of creditors. This typically happens when the company is unable to pay its debts, making liquidation a viable solution for creditors to recover their money.",
                        sub: []
                    },
                ].map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                        <div className="flex items-center gap-4 bg-[#072b47] px-5 py-3">
                            <span className="text-[22px] font-black text-white/20">{item.num}</span>
                            <p className="text-[14px] font-bold text-white">{item.title}</p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-slate-700 leading-relaxed mb-4">{item.desc}</p>
                            {item.sub.length > 0 && (
                                <div className="grid gap-3">
                                    {item.sub.map((s, j) => (
                                        <div key={j} className="bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                                            <p className="text-[13px] font-bold text-[#072b47] mb-1">{s.name}</p>
                                            <p className="text-[13px] text-slate-600 leading-relaxed">{s.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    /* ─── Process (custom JSX → eligibility slot) ─────────── */
    const processContent = (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4">Compulsory Liquidation Process</h3>
                <div className="grid gap-3 mb-6">
                    {[
                        { step: "1", title: "Application to the Tribunal", desc: "Financial or operational creditors file an application with the NCLT for default exceeding ₹1 lakh. This initiates the Corporate Insolvency Resolution Process (CIRP)." },
                        { step: "2", title: "Appointment of IRP", desc: "Upon admitting the application, the tribunal appoints an Interim Resolution Professional (IRP) who takes over the management of the company." },
                        { step: "3", title: "Moratorium Period", desc: "A moratorium is imposed, halting all operations and preventing the transfer of assets, goods, or services until the completion of CIRP." },
                        { step: "4", title: "Verification of Claims", desc: "The IRP verifies creditor claims within 30 days and prepares a list for the Committee of Creditors (CoC)." },
                        { step: "5", title: "Appointment of Resolution Professional", desc: "The CoC may either confirm the IRP as the Resolution Professional (RP) or appoint a new one." },
                        { step: "6", title: "Resolution Plan", desc: "The RP drafts a resolution plan detailing how creditors will be paid. The CoC has 180 days to approve the plan." },
                        { step: "7", title: "Sanction by NCLT", desc: "Once the CoC approves the plan, it must be sanctioned by the NCLT. All actions must be completed within one year of NCLT approval." },
                        { step: "8", title: "Liquidation Order", desc: "If the resolution process fails, the NCLT permits the company's liquidation, allowing debt repayment to creditors." },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <div className="w-8 h-8 rounded-full bg-[#072b47] text-white flex items-center justify-center shrink-0 text-[12px] font-bold">{item.step}</div>
                            <div>
                                <p className="text-[14px] font-bold text-[#072b47] mb-0.5">{item.title}</p>
                                <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4">Voluntary Liquidation Process</h3>
                <div className="grid gap-3">
                    {[
                        { step: "1", title: "Declaration of Solvency", desc: "Company directors must declare solvency via an affidavit, confirming no default has occurred and debts can be repaid. Must confirm the process is not intended to defraud anyone." },
                        { step: "2", title: "Board Meeting", desc: "The board approves the liquidation process, decides on appointment of a liquidator, and prepares a statement for shareholders outlining reasons for liquidation." },
                        { step: "3", title: "General Meeting of Shareholders", desc: "A general meeting must be convened within four weeks of the solvency declaration. A special resolution is passed to approve the liquidation and appoint the liquidator." },
                        { step: "4", title: "Responsibilities of the Liquidator", desc: "The liquidator announces the winding-up in English and regional newspapers, inviting claims from stakeholders. Assesses, finalizes all claims, and liquidates company assets to pay creditors and stakeholders." },
                        { step: "5", title: "Completion of Liquidation", desc: "Liquidation must be completed within 12 months. The liquidator prepares a final report detailing all settlements and submits it to the ROC and the IBBI." },
                        { step: "6", title: "Application to NCLT", desc: "After completing the process, an application is submitted to the NCLT for the company's dissolution. Once the NCLT issues the dissolution order, the company ceases operations." },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#e8f1fb] border border-[#c0d8f0] rounded-xl p-4">
                            <div className="w-8 h-8 rounded-full bg-[#005a9c] text-white flex items-center justify-center shrink-0 text-[12px] font-bold">{item.step}</div>
                            <div>
                                <p className="text-[14px] font-bold text-[#072b47] mb-0.5">{item.title}</p>
                                <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    /* ─── Advantages tab (custom JSX → features slot) ─────────── */
    const advantagesContent = (
        <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div>
                    <h4 className="text-[15px] font-bold text-green-700 mb-3 flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />Advantages</h4>
                    {["Removes the pressure from all the creditors.", "Prevents potential legal action against the liquidated company.", "Allows time for realizing the company's assets, ensuring creditors receive the best possible return."].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 bg-green-50 border border-green-100 rounded-lg px-4 py-2.5 mb-2">
                            <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
                            <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h4 className="text-[15px] font-bold text-red-700 mb-3 flex items-center gap-2"><AlertTriangle size={16} className="text-red-500" />Disadvantages</h4>
                    {["The liquidated company can no longer trade on a similar company name.", "The company's reputation, assets, and licenses will be instantly removed from company ownership.", "The company cannot recover any tax loss that may have been incurred during trading years."].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5 mb-2">
                            <AlertTriangle size={14} className="text-red-400 mt-0.5 shrink-0" />
                            <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-[15px] font-bold text-[#072b47] mb-3">Consequences of Liquidation of Company in India</h4>
                <div className="grid gap-3">
                    {[
                        "The company's legal existence comes to an end after the completion of the liquidation process. The company shall be removed from the official company registry and will no longer be allowed to operate, trade, or enter into new contracts.",
                        "The liquidator, after collecting and selling the company's assets, shall distribute the funds to creditors as per the legal hierarchy. Any remaining funds after all debts are paid may be distributed to shareholders.",
                        "Employees are among the most affected stakeholders — liquidation results in job losses. Shareholders are the last to receive any proceeds — only after all creditor debts are paid are remaining funds distributed.",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <Shield size={15} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-[15px] font-bold text-[#072b47] mb-3">Reasons for Liquidation of Company in India</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { title: "Insolvency", desc: "The most common reason for liquidation — when a company is incapable of paying its debts due to poor cash flow management, rising debts, or an unexpected downturn in revenue." },
                        { title: "Business Failures", desc: "When business operations are no longer sustainable due to poor management, declining market demand, or economic downturns." },
                        { title: "Voluntary Exit", desc: "Sometimes liquidation is voluntary — owners may wish to exit the business for reasons such as retirement or to pursue other opportunities." },
                        { title: "Court Orders or Legal Issues", desc: "Mandatory liquidation occurs when a company is compelled to wind up due to legal actions, failure to repay debts, tax disputes, or regulatory violations." },
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                            <p className="text-[14px] font-bold text-[#072b47] mb-1">{item.title}</p>
                            <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Liquidation of "
                heroTitleSuffix="Company"
                heroSubtitle="Company Liquidation under the Insolvency & Bankruptcy Code, 2016 — NCLT Process"
                heroDescription="Navigate the complex liquidation process with expert guidance from Vyombiz. From assessing solvency and appointing a liquidator to filing with NCLT, distributing assets, and obtaining the dissolution order — complete end-to-end support."
                whatsIncludedList={["Solvency Assessment & Evaluation", "Liquidator Appointment Support", "NCLT Filing & Dissolution Order", "Creditor Claims & Asset Distribution"]}
                stats={[
                    { count: "12 Months", label: "Voluntary Liquidation Timeline", icon: <Clock size={20} /> },
                    { count: "2 Years", label: "Max Compulsory Liquidation Time", icon: <FileText size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Users size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert />
            <DetailsLayout
                navLabels={{ overview: "Overview", advantages: "Types", eligibility: "Process", features: "Advantage", faq: "FAQs" }}
                overview={{
                    badge: "Insolvency & Bankruptcy Code 2016 | NCLT | Company Liquidation",
                    title: "Liquidation of Company —",
                    highlightTitle: "An Overview",
                    description: [
                        "In finance and economics, liquidation of a company refers to the process of ending a company's operations and distributing its assets to settle claims. This typically occurs when a company is unable to meet its financial obligations or repay its debts. During liquidation, the company's assets are sold and the proceeds are used to pay off creditors and shareholders.",
                        "Liquidation is a formal process through which a company winds up its operations. The company's assets are sold to repay its liabilities, and if any surplus remains, it is distributed among the shareholders. In simple terms, liquidation marks the end of a company's business by converting its assets into cash to settle debts and distribute any remaining balance.",
                    ],
                    whyIdealTitle: "How Company Liquidation Works in India",
                    whyIdealList: [
                        { title: "Governed by IBC 2016", desc: "The Insolvency and Bankruptcy Code, 2016 establishes a time-bound framework for resolving insolvency in companies. The IBC outlines the procedure for terminating a company's assets and liabilities and distributing them to entitled parties." },
                        { title: "NCLT as Adjudicating Authority", desc: "The National Company Law Tribunal (NCLT) is the adjudicating authority for companies under the IBC. The Debt Recovery Tribunal (DRT) handles individuals and partnerships." },
                        { title: "Liquidation Order Triggers", desc: "NCLT passes a liquidation order when: the business resolution plan is not submitted on time, the plan is rejected by the NCLT, the Committee of Creditors (CoC) approves liquidation, or the corporate debtor opposes the approved resolution plan." },
                        { title: "Role of the Liquidator", desc: "A liquidator is appointed by the adjudicating authority. Their primary responsibility is to manage the sale of company assets, use proceeds to repay creditors, and distribute any remaining surplus to shareholders." },
                    ]
                }}
                advantages={typesContent}
                eligibility={processContent}
                features={advantagesContent}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for Company Liquidation?",
                    subtitle: "Expert guidance through every phase of the company liquidation process.",
                    list: [
                        { title: "Expert Guidance", desc: "Access to experienced professionals for legal and financial support throughout the liquidation process." },
                        { title: "Tailored Solutions", desc: "Customized approaches for voluntary or compulsory liquidation, based on your company's specific financial situation." },
                        { title: "Comprehensive Services", desc: "Full management of the liquidation process, including documentation, regulatory compliance, and ROC/IBBI filings." },
                        { title: "Transparent Communication", desc: "Regular updates and clear communication throughout the process to all stakeholders." },
                        { title: "Post-Liquidation Support", desc: "Assistance with any residual matters after liquidation, including tax implications and final regulatory submissions." },
                    ]
                }}
            />
            <FAQLayout title="FAQs on Liquidation of Company" subtitle="Common questions about company liquidation answered by our experts" faqs={faqs} />
        </div>
    );
};

export default LiquidationofCompany;
