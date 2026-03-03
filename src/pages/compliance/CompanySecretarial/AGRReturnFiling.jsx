import React from "react";
import {
    Users, Briefcase, CheckCircle2, FileText,
    Shield, AlertTriangle, Clock, BarChart2, BookOpen, Wifi
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * AGR Return Filing Page - Vyombiz
 * Nav: Overview | Entities | Components | Documents | Process | Vyombiz Support | FAQs
 */

const AGRReturnFiling = () => {

    const faqs = [
        {
            question: "How will the license fee for Telecom be calculated?",
            answer: "The annual license fee for telecoms shall be calculated based on a certain percentage of the Quarterly calculated AGR. For the first year, it will be based on 8% of the AGR as per the latest notification of the Department of Telecommunication. From the second year, the Annual license fee shall be a minimum of 10% of the entry fee based on the authorised service area."
        },
        {
            question: "What are the file formats compatible with the SARAS portal?",
            answer: "Documents on the SARAS portal must be uploaded in PDF format for standard documents, and in .xls format for Excel sheets and data files. It is important to ensure documents corroborate the data filled in the form before uploading."
        },
        {
            question: "Which telecom operators are required to file AGR?",
            answer: "Any telecom license holder who has obtained the license as per the provisions of Section 4 of the National Telegraph Act must submit AGR statements with the CCA of the Department of Telecommunications. This includes UL VNO, UL ISP, UL ACS Category B, NLD, and ILD license holders."
        },
        {
            question: "What are the various components of the AGR Return filing?",
            answer: "The components of AGR Return filing are: (1) Entry Fee — a one-time payment capped at Rs. 15 crores per company. (2) Annual License Fee — 8% of AGR for the first year (inclusive of 5% USO levy); minimum 10% of entry fee from the second year. (3) Spectrum Usage Charges (SUC) — calculated based on the weighted average of spectrum holding across bandwidths ranging from 600 MHz to 26 GHz."
        },
        {
            question: "What was the issue with AGR filing in India earlier?",
            answer: "There was a lack of clarity regarding the definition of AGR. The Department of Telecommunication claimed AGR should include revenue from all telecom and non-telecom activities, while telecom operators claimed it should be restricted to telecom revenues only. In 2019, the Supreme Court held AGR to have a wide interpretation including non-telecom revenue. In 2021, upon a review petition, the court rationalised the AGR definition to exclude non-telecom revenue on a prospective basis."
        },
        {
            question: "What will happen if I don't file an AGR return?",
            answer: "Failure to file AGR returns can result in penalties and interest on outstanding dues. The Department of Telecommunication can initiate recovery proceedings against the defaulting telecom operator, which may include suspension or cancellation of the telecom license in extreme cases."
        },
    ];

    /* ─── Entities tab (custom JSX → advantages slot) ─────────── */
    const entitiesContent = (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Wifi size={18} className="text-[#005a9c]" />
                    Entities Required to File AGR Statements
                </h3>
                <p className="text-[14px] text-slate-500 mb-5 leading-relaxed">
                    The following entities are required to file their AGR statements with the Controller of Communication of Accounts (CCA) in India:
                </p>
                <div className="grid gap-3">
                    {[
                        { code: "UL VNO", name: "Unified License Virtual Network Operator", desc: "Virtual network operators operating under the Unified License framework must file AGR statements as mandated by the Department of Telecommunication." },
                        { code: "UL ISP", name: "Unified License Internet Service Provider", desc: "ISPs operating under the Unified License framework must file AGR returns based on their revenue from internet service operations." },
                        { code: "UL ACS", name: "Unified License ACS Category B", desc: "Telecom operators holding a Unified License for Audio Conferencing Services under Category B are required to submit AGR statements." },
                        { code: "NLD", name: "National Long Distance License", desc: "Operators holding National Long Distance licenses must file AGR returns reflecting revenue from NLD telecom services." },
                        { code: "ILD", name: "International Long Distance License", desc: "Operators holding International Long Distance licenses must file AGR returns reflecting revenue from ILD telecom services." },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-5">
                            <div className="w-16 shrink-0 text-center bg-[#072b47] text-white rounded-lg px-2 py-2">
                                <p className="text-[11px] font-bold leading-tight">{item.code}</p>
                            </div>
                            <div>
                                <p className="text-[14px] font-bold text-[#072b47] mb-1">{item.name}</p>
                                <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    /* ─── Components tab (custom JSX → eligibility slot) ─────── */
    const componentsContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <BarChart2 size={18} className="text-[#005a9c]" />
                Components of the Adjusted Gross Revenue
            </h3>
            <p className="text-[14px] text-slate-500 mb-5 leading-relaxed">
                The components of the adjusted gross revenue for telecom operators are divided into three categories:
            </p>
            <div className="grid gap-6">
                {[
                    {
                        num: "01",
                        title: "Entry Fee",
                        desc: "This is a one-time payment that each telecom license holder must make to initiate the licensing process. This amount shall be capped at a maximum of Rs. 15 crores per company.",
                        highlight: "One-time, capped at Rs. 15 crores"
                    },
                    {
                        num: "02",
                        title: "Annual License Fee",
                        desc: "The license holder must also pay an annual license fee as a percentage of adjusted gross revenue. The Annual License Fee for the first year shall be levied at 8% of AGR — inclusive of the USO levy presently at 5%. From the second year, the Annual License Fee shall be a minimum of 10% of the entry fee based on the authorised service area.",
                        highlight: "First year: 8% of AGR (incl. 5% USO levy)"
                    },
                    {
                        num: "03",
                        title: "Spectrum Usage Charges (SUC)",
                        desc: "Telecom companies are charged a Spectrum Usage Charge (SUC) for various bandwidths ranging from 600 MHz to 26 GHz. An operator will be charged the SUC based on the weighted average derived by the sum product of spectrum holding and applicable SUC divided by the sum total of spectrum holding.",
                        highlight: "Weighted average of spectrum holdings across all bands"
                    },
                ].map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                        <div className="flex items-center gap-4 bg-[#072b47] px-5 py-3">
                            <span className="text-[22px] font-black text-white/20">{item.num}</span>
                            <p className="text-[14px] font-bold text-white">{item.title}</p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-slate-700 leading-relaxed mb-3">{item.desc}</p>
                            <div className="inline-flex items-center gap-2 bg-[#e8f1fb] border border-[#c0d8f0] rounded-full px-3 py-1.5">
                                <CheckCircle2 size={13} className="text-[#005a9c]" />
                                <span className="text-[12px] font-semibold text-[#005a9c]">{item.highlight}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    /* ─── Process steps ─────────────────────────────────────────── */
    const processSteps = [
        { step: "01", title: "Visit the SARAS Portal", desc: "The applicant must visit the SARAS website — the government-designated platform for all licenses issued by the Department of Telecommunication. Telecom operators can file AGR returns, bank guarantees, and deduction claims through this portal." },
        { step: "02", title: "Fill in AGR Return Details", desc: "Fill in all details of the AGR returns on the portal. The applicant must ensure that the calculations for the AGR return are fully compliant with the latest guidelines and notifications issued by the Department of Telecommunication." },
        { step: "03", title: "Upload Supporting Documents", desc: "Once the data has been filled, upload all supporting documents. Documents must corroborate the data filled by the user and must be uploaded in PDF format; Excel data files must be uploaded in .xls format." },
        { step: "04", title: "Take Printout for Records", desc: "Take a printout of the AGR return form and all uploaded documents. This shall come in handy for future reference in case of any objections or explanations sought by the department." },
        { step: "05", title: "Final Review & Submission", desc: "Conduct a final review of the form and submit it to the Department of Telecommunication for scrutiny by the Controller of Communication of Accounts (CCA) officials via the SARAS portal." },
        { step: "06", title: "Receipt of Acknowledgement", desc: "Once the data has been submitted through the SARAS portal, it will generate a receipt. This receipt must be retained safely as it acts as proof of timely AGR filing by the operator." },
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="AGR Return "
                heroTitleSuffix="Filing"
                heroSubtitle="Adjusted Gross Revenue (AGR) Filing with Department of Telecommunication — SARAS Portal"
                heroDescription="Ensure accurate and compliant AGR return filing with Vyombiz. From calculating AGR dues to uploading documents on the SARAS portal and obtaining the acknowledgement receipt — handled end-to-end by our experienced telecom compliance professionals."
                whatsIncludedList={[
                    "Accurate AGR Dues Calculation",
                    "SARAS Portal Submission",
                    "Document Consolidation & Upload",
                    "AGR Receipt & Acknowledgement"
                ]}
                stats={[
                    { count: "3", label: "Components of AGR", icon: <BarChart2 size={20} /> },
                    { count: "5", label: "License Types Required", icon: <Wifi size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Users size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    advantages: "Entities",
                    eligibility: "Components",
                    documents: "Documents",
                    process: "Process",
                    faq: "FAQs"
                }}
                overview={{
                    badge: "Department of Telecommunications | AGR Return Filing — SARAS Portal",
                    title: "AGR Return Filing —",
                    highlightTitle: "An Overview",
                    description: [
                        "Adjusted Gross Revenue (AGR) is a type of tax charged by telecom operators based on two parameters: a basic charge for usage and a licensing fee for carrying out telecom services in the country. The process of submission of these two statements by telecom operators with the Controller of Communication of Accounts (CCA) is known as AGR Return filing.",
                        "Any telecom license holder who has obtained the license as per the provisions of Section 4 of the National Telegraph Act must submit the AGR statements with the CCA of the Department of Telecommunications.",
                    ],
                    whyIdealTitle: "Background: The Conflict with AGR Filing",
                    whyIdealList: [
                        { title: "1994 — Telecom Liberalization", desc: "The National Telecom Policy liberalised the telecom sector of India in 1994, with licenses issued to telecom operators for fixed fees." },
                        { title: "1999 — Revenue Sharing Model", desc: "In 1999, the government allowed telecom operators to switch to a revenue-sharing model — sharing a percentage of AGR (annual license fees + spectrum usage charges) with the government." },
                        { title: "2019 — Supreme Court Ruling", desc: "The Supreme Court held AGR to have a wide interpretation, inclusive of revenue from non-telecom activities. This led to large outstanding dues against telecom operators." },
                        { title: "2021 — AGR Definition Rationalised", desc: "Upon a review petition, the Supreme Court rationalised the AGR definition — non-telecom revenue shall not be included in AGR on a prospective basis." },
                    ]
                }}
                advantages={entitiesContent}
                eligibility={componentsContent}
                documents={{
                    title: "Documents Required to File AGR Return",
                    description: "The following documents must be ready before filing AGR returns on the SARAS portal.",
                    list: [
                        "Authorization letter for the representative filing the AGR return.",
                        "Certificate of Incorporation of the company.",
                        "A copy of the Telecom License (UL VNO / UL ISP / UL ACS / NLD / ILD, as applicable).",
                        "Audited Statement of Revenue of the company.",
                        "Audit report of the company.",
                        "Copy of Books of Accounts.",
                    ]
                }}
                process={{
                    title: "Process of Filing AGR Return",
                    subtitle: "Step-by-step process for filing AGR returns on the SARAS portal as mandated by the Department of Telecommunication.",
                    steps: processSteps
                }}
                whyChooseUs={{
                    title: "How Vyombiz Assists with AGR Return Filing",
                    subtitle: "End-to-end support for accurate, timely, and compliant AGR filing.",
                    list: [
                        { title: "Accurate AGR Dues Calculation", desc: "Vyombiz will assist you to calculate your AGR dues accurately, ensuring full compliance with the latest guidelines and notifications issued by the Department of Telecommunication." },
                        { title: "Error-Free Return Filing", desc: "Our team of experienced professionals files error-free returns on the SARAS portal, minimising the risk of objections or queries from the CCA officials." },
                        { title: "Document Consolidation & Submission", desc: "We consolidate and submit all relevant documents — audit reports, revenue statements, books of accounts — in the correct formats on the SARAS portal." },
                        { title: "Constant Follow-Ups", desc: "We provide constant follow-ups with the Department of Telecommunication throughout the review and processing period to ensure smooth approval." },
                        { title: "AGR Receipt & Acknowledgement", desc: "We provide you with the official receipt of the successful filing of your AGR dues — serving as your proof of timely and compliant AGR return submission." },
                    ]
                }}
            />

            <FAQLayout
                title="Frequently Asked Questions on AGR Return Filing"
                subtitle="Common questions about AGR Return filing answered by our telecom compliance experts"
                faqs={faqs}
            />
        </div>
    );
};

export default AGRReturnFiling;
