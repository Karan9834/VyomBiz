import React from "react";
import { Users, Briefcase, Building2, ShieldCheck, FileText, Activity, AlertTriangle, Shield, CheckCircle2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Closing a Limited Liability Partnership (LLP) Page for Vyombiz
 * Restructured to follow the standard legal documentation layout.
 */
const ClosingLLP = () => {

    const faqs = [
        {
            question: "What is Limited Liability Partnership?",
            answer: "A 'Limited Liability Partnership', i.e. LLP, is a partnership under which some or all the associates have limited liability. It provides the benefits of limited liability of a company along with the flexibility of a partnership."
        },
        {
            question: "What are the cases in which closing a limited liability partnership is required?",
            answer: "An LLP can be closed if it has been inactive for at least one year since its incorporation, if it has no assets or liabilities, or if the partners decide to stop operations for reasons like insolvency or completion of its specific purpose."
        },
        {
            question: "What is the strike-off method for Closing a Limited Liability Partnership?",
            answer: "In matters where the LLP wants to close down its business or where it is not carrying on any business operations for one year or more, the title of LLP can be struck off by the register or by the LLP in 'e-Form 24' with the consent of all partners."
        },
        {
            question: "What is the effectiveness of E-Form 24 in Closing a Limited Liability Partnership?",
            answer: "E-Form 24 is used for producing an application to the Registrar of Companies for striking off the name of the LLP or closing a limited liability partnership."
        },
        {
            question: "What are the conditions for striking off a defunct Limited Liability Partnership?",
            answer: "Key conditions include: The LLP has been inactive and has not conducted any business activities since incorporation; No bank account; No creditors, assets or liabilities; and has not performed any business operations for at least one year."
        },
        {
            question: "In a matter of the closing a Limited Liability Partnership, who has to sign the form?",
            answer: "The designated partners have to sign the application along with the consent of all partners for closing a limited liability partnership."
        },
        {
            question: "What is the Qualification for Closing an LLP?",
            answer: "Minimum one year has crossed after incorporation of the LLP for making an application for striking off the name of the LLP or closing an LLP."
        },
        {
            question: "Is LLP needed to File all returns before applying for closing a Limited Liability Partnership?",
            answer: "If LLP started operation and closed in between, all returns shall be filed until the date of service of the LLP."
        },
        {
            question: "Whether LLP needs to file Income tax returns before filing application for closure of LLP?",
            answer: "In case business is originated and stopped in between, LLP shall file all Income tax returns till the date of administration. LLPs that did not begin service can file application for closure of LLP without filing returns."
        },
        {
            question: "Is it required to file returns Once the closure application for Limited Liability Partnership is filed?",
            answer: "Once the closure application is filed and approved, the entity's name is removed from the register, and it is no longer required to file annual returns."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Closing a Limited "
                heroTitleSuffix="Liability Partnership (LLP)"
                heroSubtitle="Formal Dissolution & Strike-Off Services"
                heroDescription="Is your LLP inactive? Avoid heavy penalties and recurring compliance costs by formally closing your entity. Vyombiz provides end-to-end support for Form 24 filing and ROC coordination."
                whatsIncludedList={[
                    "Form 24 Preparation",
                    "Resolution Drafting",
                    "NIL Asset Statement",
                    "Indemnity Bond Prep",
                    "ROC Coordination"
                ]}
                stats={[
                    { count: "200+", label: "LLPs Closed", icon: <Building2 size={20} /> },
                    { count: "100%", label: "Compliance Rate", icon: <ShieldCheck size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <Users size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    advantages: "Benefits",
                    eligibility: "Listicles",
                    process: "Registration Procedure",
                    postCompliance: "Other Info",
                    features: "Vyombiz Support",
                    faq: "FAQ"
                }}
                overview={{
                    badge: "LLP Dissolution",
                    title: "Closing of LLP –",
                    highlightTitle: "Overview",
                    description: [
                        "The Limited Liability Partnership (LLP), which is not carrying on its business since its incorporation or which has terminated operations for a period of one year or more, can apply to the Registrar for its closure and removal of its name from the Register of LLPs.",
                        "If the LLP has turned dormant, it is highly advisable to proceed with formal closure rather than maintaining non-active compliances. Formal dissolution prevents future fines, penalties, and legal complications for partners.",
                        "At Vyombiz, we simplify the complex legal requirements of winding up an LLP, ensuring that your business exit is handled with professional precision and full regulatory compliance."
                    ],
                    whyIdealTitle: "When should you close?",
                    whyIdealList: [
                        { title: "One Year Inactivity", desc: "If the LLP has stopped its commercial activities for at least twelve continuous months." },
                        { title: "Zero Operations", desc: "If the LLP was registered but never actually commenced business operation since incorporation." },
                        { title: "Insolvency Status", desc: "If the partnership has become insolvent and is unable to continue its business obligations." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Closing an LLP",
                    subtitle: "Why formal dissolution is the right choice for inactive entities",
                    list: [
                        { title: "Compliance Freedom", desc: "Eliminates the ongoing burden of filing annual returns and financial statements with the MCA once the company is dissolved." },
                        { title: "Penalty Protection", desc: "Initiating closure protects the company from future penalties related to unaddressed filings and inactive status." },
                        { title: "Resource Optimization", desc: "Allows partners to legally exit an unproductive business and redirect their time and capital into profitable ventures." }
                    ]
                }}
                eligibility={{
                    title: "Listicles & Checklists",
                    subtitle: "Conditions, Reasons, and Documentation",
                    list: [
                        { title: "Mandatory Conditions", desc: "LLP must be inactive for 1+ year, have NIL assets/liabilities on the application date, and have closed all current bank accounts." },
                        { title: "Reasons for Strike-Off", desc: "Specific purpose completion, partner disinterest, death of partners without replacement, or insolvency." },
                        { title: "Documents Required", desc: "Address proof, NOC from landlord, CA-certified statement of accounts (NIL status), latest ITR, initial agreement, and indemnity bonds." },
                        { title: "Consents Needed", desc: "Written consent of all partners, secured creditors, and any relevant authorities must be obtained before filing." }
                    ]
                }}
                process={{
                    title: "Registration Procedure",
                    subtitle: "Methods of Closing: Defunct Declaration vs. Winding Up",
                    steps: [
                        { step: "01", title: "Board Meeting", desc: "Pass a resolution to close the LLP and authorize a designated partner for the process." },
                        { step: "02", title: "Setting Off Liabilities", desc: "Ensure all outstanding financial or legal liabilities are settled. The LLP must reveal NIL assets and liabilities for Form 24." },
                        { step: "03", title: "Applying to ROC (Form 24)", desc: "Submit e-Form 24 to the Registrar with the resolution, affidavits, indemnity bonds, and latest ITR acknowledgement." },
                        { step: "04", title: "Pubic Notice", desc: "The Registrar publishes the application on the MCA website for one month to allow for any public objections." },
                        { step: "05", title: "Final Strike-Off", desc: "If no objections are received within the cited period, the Registrar strikes off the name and the LLP is officially dissolved." }
                    ]
                }}
                postCompliance={{
                    title: "Other Information",
                    subtitle: "Legal Modes of Winding Up and Final Steps",
                    list: [
                        { title: "Voluntary vs. Compulsory", desc: "Partners can choose Voluntary Winding Up, or the Tribunal can order Compulsory Winding Up for defaults or legal breaches." },
                        { title: "Tribunal Orders", desc: "An LLP may be mandatorily wound up by the Tribunal if it acts against national sovereignty, integrity, or defaults for 5 consecutive years." },
                        { title: "PAN & TAN Surrender", desc: "Once the closure certificate is received from the Registrar, partners must surrender the PAN and TAN to the respective departments." },
                        { title: "Summary Procedure", desc: "The 2017 amendments introduced simplified rules, significantly reducing the timeline for small or defunct LLPs to exit the market." }
                    ]
                }}
                whyChooseUs={{
                    title: "Vyombiz Support",
                    subtitle: "How we facilitate a hassle-free closure",
                    list: [
                        { title: "Expert Assistance", desc: "Professional preparation of the closure resolution and supporting legal declarations for all partners." },
                        { title: "Documentation Guide", desc: "Dedicated support in gathering documents, drafting indemnity bonds, and preparing CA-certified account statements." },
                        { title: "End-to-End Filing", desc: "Full management of Form 24 filing, liaison with the ROC, and tracking until the final strike-off notice." },
                        { title: "Experience & Trust", desc: "Over 10 years of experience in assisting 200+ entrepreneurs with successful and secure LLP closures." }
                    ]
                }}
            />

            <FAQLayout
                faqs={faqs}
                title="LLP Closure FAQ"
                subtitle="Everything you need to know about the legal procedure to strike off an LLP."
            />
        </div>
    );
};

export default ClosingLLP;
