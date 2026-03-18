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
                Types of Company Liquidation
            </h3>
            <div className="grid gap-6">
                {[
                    {
                        num: "01", title: "Voluntary Liquidation",
                        desc: "Voluntary liquidation occurs when the company's shareholders decide to close the business on their own. This usually happens when the company has achieved its purpose, is no longer profitable, or the owners wish to discontinue operations.",
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
                <h3 className="text-lg font-bold text-[#072b47] mb-4">Company Liquidation Process</h3>
                <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                    The company liquidation process generally involves several legal and administrative steps. While the exact procedure may vary depending on the type of liquidation, the common stages include:
                </p>
                <div className="grid gap-3 mb-6">
                    {[
                        { step: "1", title: "Board Resolution", desc: "The directors pass a resolution recommending the liquidation of the company." },
                        { step: "2", title: "Shareholder Approval", desc: "Shareholders approve the decision to liquidate through a special resolution." },
                        { step: "3", title: "Appointment of Liquidator", desc: "A licensed liquidator is appointed to manage the liquidation process." },
                        { step: "4", title: "Asset Evaluation and Sale", desc: "Company assets are evaluated and sold to settle outstanding liabilities." },
                        { step: "5", title: "Settlement of Debts", desc: "Funds generated from asset sales are used to repay creditors and other liabilities." },
                        { step: "6", title: "Distribution to Shareholders", desc: "Any remaining funds are distributed among shareholders based on their shareholding." },
                        { step: "7", title: "Final Dissolution", desc: "Once all obligations are settled, the company is officially dissolved and removed from the Registrar's records." },
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
            </div>
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4">Voluntary Liquidation Process (Detailed)</h3>
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
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#005a9c]" />
                    Benefits of Proper Company Liquidation
                </h3>
                <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                    Closing a company through a structured liquidation process offers several advantages:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                        { title: "Legal Closure", desc: "Ensures the company is officially removed from government records." },
                        { title: "Protection from Future Liabilities", desc: "Directors and shareholders are protected from ongoing compliance obligations." },
                        { title: "Debt Settlement", desc: "Assets are sold and used to repay creditors in a transparent manner." },
                        { title: "Regulatory Compliance", desc: "Ensures the company follows all procedures prescribed under corporate laws." },
                        { title: "Clean Financial Exit", desc: "Helps entrepreneurs close one business chapter and move forward with new opportunities." },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                            <CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-[13px] font-bold text-green-700 mb-0.5">{item.title}</p>
                                <p className="text-[12px] text-slate-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-amber-500" />
                    Compliance and Legal Considerations
                </h3>
                <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                    Liquidation involves several statutory requirements and regulatory filings. Companies must ensure that:
                </p>
                <div className="grid gap-3">
                    {[
                        "All pending compliance filings are completed",
                        "Tax liabilities are cleared",
                        "Employee dues are settled",
                        "Creditors are informed and paid according to legal priority",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
                            <AlertTriangle size={15} className="text-amber-500 mt-0.5 shrink-0" />
                            <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
                <p className="text-[13px] text-slate-600 mt-4 leading-relaxed">
                    This is where expert support from Vyombiz managed by Clink Consultancy Services Private Limited becomes valuable, ensuring that every compliance requirement is handled professionally.
                </p>
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
                heroSubtitle="Close Your Company the Right Way — Fast, Compliant, and Stress-Free"
                heroDescription="When a business reaches the end of its journey, closing it properly is just as important as starting it. Company liquidation ensures that all legal obligations are fulfilled, liabilities are settled, and the company is officially dissolved in compliance with government regulations. With expert guidance, the liquidation process can be smooth, transparent, and hassle-free. Vyombiz managed by Clink Consultancy Services Private Limited helps businesses complete company liquidation efficiently while ensuring full regulatory compliance. End your company responsibly — with expert support."
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
                navLabels={{ overview: "Overview", advantages: "Types", eligibility: "Process", features: "Advantage", documents: "Documents Required", faq: "FAQs" }}
                overview={{
                    badge: "Insolvency & Bankruptcy Code 2016 | NCLT | Company Liquidation",
                    title: "What is Company",
                    highlightTitle: "Liquidation?",
                    description: [
                        "Company liquidation is the legal process of closing a company by settling its liabilities, selling its assets, and distributing the remaining funds (if any) among shareholders. Once the process is completed, the company is removed from official records and ceases to exist legally.",
                        "Liquidation is typically initiated when a company is unable to continue its operations due to financial distress, business restructuring, or voluntary closure by shareholders.",
                        "Businesses that are inactive or no longer operational should opt for proper liquidation instead of leaving the company dormant, as this helps avoid future compliance penalties and legal complications.",
                        "Vyombiz managed by Clink Consultancy Services Private Limited assists companies in completing the liquidation process efficiently while ensuring adherence to all statutory requirements."
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
                documents={{
                    title: "Documents Required for Company Liquidation",
                    description: "To initiate the liquidation process, certain documents and records are required, including:",
                    list: [
                        "Certificate of Incorporation",
                        "Memorandum and Articles of Association",
                        "Financial statements of the company",
                        "List of creditors and liabilities",
                        "List of assets owned by the company",
                        "Board and shareholder resolutions",
                        "PAN and company registration details",
                    ],
                    imageUrl: "Documents.jpg"
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for Company Liquidation?",
                    subtitle: "Closing a company requires legal expertise, compliance management, and careful financial handling. Businesses benefit from professional assistance to ensure the process is completed correctly.",
                    list: [
                        { title: "Expert Legal Guidance", desc: "Experienced professionals manage the entire liquidation process." },
                        { title: "End-to-End Compliance Support", desc: "From documentation to final dissolution, every step is handled systematically." },
                        { title: "Transparent Process", desc: "Clear communication and structured workflows ensure transparency." },
                        { title: "Time-Efficient Handling", desc: "The process is managed efficiently to avoid delays and compliance issues." },
                        { title: "Comprehensive Services", desc: "Full management of the liquidation process, including documentation, regulatory compliance, and ROC/IBBI filings." },
                    ]
                }}
            />
            <FAQLayout title="Frequently Asked Questions (FAQs)" subtitle="Common questions about company liquidation answered by our experts" faqs={faqs} />
        </div>
    );
};

export default LiquidationofCompany;