import React from "react";
import {
    Users, Briefcase, Building2, CheckCircle2, FileText,
    Shield, Globe, Landmark, Banknote, BarChart2
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * SPICe+ Form Page - Vyombiz
 * Sections: Overview | Advantages | Eligibility Criteria | Documents Required |
 *           Process | Features | Post Compliance | FAQs
 */

const SPICEForm = () => {

    /* ─── FAQs ───────────────────────────────────────────────── */
    const faqs = [
        {
            question: "What is the meaning of SPICe+ Form?",
            answer: "SPICe+ Form, which stands for Simplified Proforma for Incorporating Company Electronically Plus, is an e-application dealing with the incorporation legalities and simplifying the company incorporation process by reducing paperwork and easing compliance requirements. SPICe+ Form is filed for the incorporation of company."
        },
        {
            question: "Where to file SPICe+ Form?",
            answer: "SPICe+ Form is filed on the MCA (Ministry of Corporate Affairs) portal at mca.gov.in. Applicants must log in, create SPICe+ credentials, and submit Part A and Part B along with linked forms such as eMoA, eAoA, and AGILE PRO S."
        },
        {
            question: "What is the INC 32 Form (SPICe e-form)?",
            answer: "INC 32 is the form number assigned to the SPICe+ application — an integrated web form that consolidates company incorporation, DIN allotment, PAN, TAN, GST, EPFO, ESIC, and other registrations into a single application."
        },
        {
            question: "Who can certify the SPICe+ Form?",
            answer: "The SPICe+ Form is certified by a practicing Company Secretary (CS), Chartered Accountant (CA), or a Cost Accountant. The form is digitally signed by the subscribers and directors."
        },
        {
            question: "What is the SPICe full form?",
            answer: "SPICe stands for Simplified Proforma for Incorporating Company Electronically. SPICe+ (Plus) is its upgraded version introduced in 2020 to offer more integrated services in a single-window format."
        },
        {
            question: "What are the services offered in the SPICe+ Form?",
            answer: "SPICe+ offers 10+ services: Name Reservation (RUN), Company Incorporation, DIN Allotment, PAN & TAN, EPFO Registration, ESIC Registration, Professional Tax Registration, Opening of Corporate Bank Account, GSTIN Registration, and Shops & Establishments Registration (via AGILE PRO S)."
        },
        {
            question: "What should be the file size of each attachment to the SPICe+ Form?",
            answer: "Each attachment to the SPICe+ Form should not exceed 6 MB in size and should be uploaded in PDF format."
        },
        {
            question: "How many times can I submit SPICe+ Forms?",
            answer: "The SPICe+ Form allows up to two re-submissions after the initial filing, giving applicants opportunities to correct any deficiencies raised by the Registrar of Companies (ROC)."
        },
        {
            question: "Do I need to file an e-form INC-22 with SPICe+ Form?",
            answer: "No, INC-22 (Notice of Situation of Registered Office) is not required to be filed separately if the registered office address is provided in Part B of the SPICe+ Form at the time of incorporation."
        },
        {
            question: "Do I need to use the SPICe+ Form to incorporate a NIDHI Company?",
            answer: "Yes, Nidhi Company incorporation is done through the SPICe+ Form (INC 32) along with the eMoA and eAoA. Additional compliance with Nidhi Company rules under Section 406 of the Companies Act, 2013 must also be met."
        },
        {
            question: "What is the difference between SPICe and SPICe+ Form?",
            answer: "SPICe (INC-32) was the earlier form for company incorporation. SPICe+ is the upgraded version that combines many more forms (PAN, TAN, GST, EPFO, ESIC, Bank Account, Professional Tax, Shops & Establishments) into a single integrated web form, making it faster and user-friendlier."
        },
    ];

    /* ─── Services list (for Post Compliance tab) ─────────────── */
    const services = [
        {
            icon: <Globe size={20} className="text-[#005a9c]" />,
            title: "Name Reservation",
            desc: "The SPICe+ web form includes the option to apply for name reservations through an integrated RUN (Reserve Unique Name) service."
        },
        {
            icon: <Building2 size={20} className="text-[#005a9c]" />,
            title: "Incorporation Application",
            desc: "The SPICe+ Form includes an option to apply for the incorporation of a company, including types, capital structure, registered office address, etc."
        },
        {
            icon: <FileText size={20} className="text-[#005a9c]" />,
            title: "DIN Allotment",
            desc: "The SPICe+ Form includes services for filing an application for a Director Identification Number (DIN) for proposed directors."
        },
        {
            icon: <Shield size={20} className="text-[#005a9c]" />,
            title: "Mandatory Filing of PAN & TAN",
            desc: "The SPICe+ Form provides for mandatory filing of PAN (Permanent Account Number) and TAN (Tax Deduction and Collection Account Number) in a single streamlined form."
        },
        {
            icon: <Users size={20} className="text-[#005a9c]" />,
            title: "EPFO Registration",
            desc: "The SPICe+ Form MCA enables filing of EPFO registration (Employees' Provident Fund Organization), mandatory for organizations having more than 20 employees."
        },
        {
            icon: <Briefcase size={20} className="text-[#005a9c]" />,
            title: "ESIC Registration",
            desc: "The SPICe+ web form facilitates the filing of Employees' State Insurance Corporation (ESIC) registration for companies having more than 10 employees."
        },
        {
            icon: <Landmark size={20} className="text-[#005a9c]" />,
            title: "Profession Tax Registration",
            desc: "The SPICe+ Form MCA includes the option to apply for professional tax registration for deducting and depositing professional tax from employees earning above a specific threshold."
        },
        {
            icon: <Banknote size={20} className="text-[#005a9c]" />,
            title: "Opening of Corporate Bank Account",
            desc: "The SPICe+ Form facilitates the opening of a bank account by providing relevant details to the bank along with the Certificate of Incorporation."
        },
        {
            icon: <BarChart2 size={20} className="text-[#005a9c]" />,
            title: "Allotment of GSTIN (if applied for)",
            desc: "The SPICe+ Form includes a section for applying for Goods and Services Tax Identification Number (GSTIN) registration by submitting the required details."
        },
    ];

    /* ─── Eligibility (custom JSX) ──────────────────────────── */
    const eligibilityContent = (
        <div className="space-y-8">
            {/* Checklist items */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Shield size={18} className="text-[#005a9c]" />
                    Eligibility Criteria for Filing SPICe+ Company Incorporation Form
                </h3>
                <div className="grid gap-3">
                    {[
                        { title: "Compliance with the Companies Act", desc: "The applicant must comply with sections 4, 7, 8(1), 12, 152, and 153 of the Companies Act, 2013 concerning the incorporation of the company." },
                        { title: "File Form INC 32", desc: "The applicant seeking incorporation of Section 8 company through SPICe+ Form must check whether the company has entered valid details in Form INC 32." },
                        { title: "Verify Documents", desc: "The applicant must verify all documents attached — confirming they are as per requirements, complete, and legible." },
                        { title: "Premises of Proposed Registered Office", desc: "The applicant must personally hold the premises of the proposed registered office as specified in the form." },
                        { title: "Generation of Consolidated Challan", desc: "The applicant must generate a consolidated challan containing applicable fees towards form fees, MoA, AoA, PAN, or TAN." },
                        { title: "Authorized Capital", desc: "The applicant must possess an authorized capital of up to Rs. 15,00,000, with 'zero filing fee' concessions and heavy stamp duty." },
                        { title: "Prepare eMoA and eAoA", desc: "The applicant must prepare an eMoA and eAoA in compliance with the provisions of sections 4 and 5 of the Companies Act." },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <div>
                                <p className="text-[14px] font-semibold text-[#072b47] mb-0.5">{item.title}</p>
                                <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Who can use */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Users size={18} className="text-[#005a9c]" />
                    Who Can Use SPICe+ Form?
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                    {[
                        "Individuals seeking company registration under Section 8 of the Companies Act",
                        "Registered business entities or owners",
                        "Foreign nationals or entities registering a company in India",
                        "Private Limited Company",
                        "Public Limited Company",
                        "One Person Company (OPC)",
                        "Producer Company",
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                            <CheckCircle2 size={15} className="text-[#005a9c] shrink-0" />
                            <span className="text-[14px] text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    /* ─── Features: Key Features + Services ─────────────────── */
    const featuresContent = (
        <div className="space-y-10">

            {/* Key Features */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <FileText size={18} className="text-[#005a9c]" />
                    Key Features of SPICe+ Form MCA
                </h3>
                <div className="grid gap-3">
                    {[
                        "SPICe+ Form is an integrated web form that modernizes the business setup process.",
                        "SPICe+ Form is filed for the incorporation of a company.",
                        "SPICe+ Form MCA offers various services under its dual-structured model, providing for registration under Part A and Part B.",
                        "SPICe+ Form MCA offers a flexible submission option, catering to different user preferences.",
                        "SPICe+ platform is a user-friendly dashboard securing a seamless company incorporation process.",
                        "SPICe+ platform simplifies the resubmission of any modified application.",
                        "SPICe+ supports on-screen filing with real-time data validation for reducing errors during company incorporation.",
                        "SPICe+ Form is organized into various sections that systematically navigate user data and eliminate confusion.",
                        "SPICe+ platform conducts all necessary checks and pre-scrutiny validations directly on the web form.",
                        "SPICe+ Form features an option for auto-generated declarations to be submitted by subscribers and first directors.",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Compliance with Filing */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Shield size={18} className="text-[#005a9c]" />
                    Compliance with Filing SPICe+ Form
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                    {[
                        { title: "Accuracy or Completeness of Documents", desc: "The applicants must double-check the accuracy and completeness of all documents required for filing the SPICe+ Form." },
                        { title: "Proposing a Unique Company Name", desc: "The applicants must propose and verify a unique company name available before submitting via the MCA portal." },
                        { title: "Submission of eMoA and eAoA", desc: "The applicants must duly submit an Electronic Memorandum of Association (eMoA) and Articles of Association (eAoA) that align with the company's goals." },
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-[#005a9c]/30 hover:bg-white transition-all">
                            <CheckCircle2 size={18} className="text-[#005a9c] mb-3" />
                            <p className="text-[14px] font-semibold text-[#072b47] mb-1">{item.title}</p>
                            <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    /* ─── Post Compliance: Services + Structure + Comparison + Mechanisms ── */
    const postComplianceContent = (
        <div className="space-y-14">

            {/* Services */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Globe size={18} className="text-[#005a9c]" />
                    Services Available in SPICe+ Form
                </h3>
                <p className="text-[14px] text-slate-500 mb-6 leading-relaxed">
                    The SPICe+ Form offers more than 10 services as specified by the three Central Government Ministries and Departments, simplifying procedure, time and cost for business setup in India.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((svc, i) => (
                        <div key={i} className="flex gap-4 bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-[#005a9c]/30 hover:bg-white transition-all">
                            <div className="w-9 h-9 rounded-lg bg-[#e8f1fb] flex items-center justify-center shrink-0">
                                {svc.icon}
                            </div>
                            <div>
                                <p className="text-[14px] font-semibold text-[#072b47] mb-1">{svc.title}</p>
                                <p className="text-[13px] text-slate-600 leading-relaxed">{svc.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Structure of SPICe+ */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <BarChart2 size={18} className="text-[#005a9c]" />
                    Structure of SPICe+ Form in India
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                    {/* Part A */}
                    <div className="bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-5">
                        <h4 className="text-[15px] font-bold text-[#072b47] mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-[#005a9c] text-white text-[11px] font-black flex items-center justify-center">A</span>
                            SPICe+ Part A (RUN Web Service)
                        </h4>
                        <div className="grid gap-2">
                            {[
                                "Part A exclusively represents the section where all details concerning name reservation are provided.",
                                "RUN stands for Reserve Unique Name — allows applicants to choose and reserve unique names for 20 days.",
                                "Details like type, class, category, industrial activity, and proposed name of the company are required.",
                                "Part A can be submitted individually for name reservation only or together with Part B for full incorporation.",
                                "Key features: search, availability check, and reservation of company name.",
                                "Company name reserved through Part A is valid for 20 days from the date of approval.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <CheckCircle2 size={14} className="text-[#005a9c] mt-0.5 shrink-0" />
                                    <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Part B */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                        <h4 className="text-[15px] font-bold text-[#072b47] mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-[#072b47] text-white text-[11px] font-black flex items-center justify-center">B</span>
                            SPICe+ Part B (Incorporation Form)
                        </h4>
                        <div className="grid gap-2">
                            {[
                                "Part B represents the section where all mandatory post-incorporation registrations are required.",
                                "The linked form separately captures other details enabling the filing of relevant information in Part B.",
                                "Details like articles of association, capital structure, number of members, registered address, and first subscriber(s) are required.",
                                "Key features of Part B: incorporation details, DIN, PAN, TAN, GST, EPFO, ESIC, etc.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <CheckCircle2 size={14} className="text-slate-400 mt-0.5 shrink-0" />
                                    <p className="text-[13px] text-slate-700 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* SPICe vs SPICe+ Comparison */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <FileText size={18} className="text-[#005a9c]" />
                    Key Difference Between SPICe and SPICe+ Form
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-[13px]">
                        <thead>
                            <tr className="bg-[#072b47] text-white">
                                <th className="text-left px-4 py-3 font-semibold w-10">S.No.</th>
                                <th className="text-left px-4 py-3 font-semibold w-36">Aspect</th>
                                <th className="text-left px-4 py-3 font-semibold">SPICe Form</th>
                                <th className="text-left px-4 py-3 font-semibold">SPICe+ Form</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                [
                                    "1", "Abbreviation",
                                    "SPICe stands for Simplified Proforma for Incorporating a Company Electronically.",
                                    "SPICe+ stands for Simplified Proforma for Incorporating a Company Electronically Plus."
                                ],
                                [
                                    "2", "Meaning",
                                    "An e-application that ensures incorporating a company with MCA.",
                                    "An integrated web form that allows creation of multiple services required for starting a business in India."
                                ],
                                [
                                    "3", "Scope of Services",
                                    "Registration of OPC, Private Ltd, Public Ltd, Section 8, Producer Company, and Nidhi Company; issuance of PAN & TAN; ESIC & EPFO registration.",
                                    "Company incorporation, PAN & TAN, DIN allotment, ESIC & EPFO, Profession Tax, Bank Account, Shops & Establishments, GST registration, Trademark registration."
                                ],
                                [
                                    "4", "Type of Registration",
                                    "INC 32 — single application form combining various additional registrations required for starting a business.",
                                    "Combines many forms into a single application, including INC 32 (SPICe) and INC 35 (AGILE PRO S)."
                                ],
                                [
                                    "5", "Time Taken",
                                    "Long and time-intensive.",
                                    "Faster, reducing delays."
                                ],
                                [
                                    "6", "Ease of Use",
                                    "Complex and repetitive steps.",
                                    "Simplified and user-friendly."
                                ],
                            ].map(([no, aspect, spice, spicePlus], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-4 py-2.5 text-slate-400 font-medium">{no}</td>
                                    <td className="px-4 py-2.5 font-semibold text-[#072b47] align-top">{aspect}</td>
                                    <td className="px-4 py-2.5 text-slate-700 align-top">{spice}</td>
                                    <td className="px-4 py-2.5 text-slate-700 align-top">{spicePlus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mechanisms / Forms Required */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Landmark size={18} className="text-[#005a9c]" />
                    Mechanisms Required for SPICe+ Registration
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                    {[
                        "SPICe+ Part A (RUN Web Service)",
                        "SPICe+ Part B (Incorporation Form)",
                        "eMoA (INC-33) and eAoA (INC-34)",
                        "Form URC-1 (Conversion of Existing Entity into Company)",
                        "Filing of AGILE PRO (INC-35)",
                        "Declaration by first Directors and all Subscribers (INC-9)",
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl px-4 py-3">
                            <FileText size={15} className="text-[#005a9c] shrink-0" />
                            <span className="text-[14px] text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="SPICe+ "
                heroTitleSuffix="Form Filing"
                heroSubtitle="Simplified Proforma for Incorporating Company Electronically Plus (INC-32)"
                heroDescription="File SPICe+ Form (INC-32) with Vyombiz and complete 10+ company registrations in a single application. Name Reservation, Company Incorporation, PAN, TAN, DIN, GST, EPFO, ESIC — all in one integrated window."
                whatsIncludedList={[
                    "Name Reservation via RUN",
                    "DIN, PAN & TAN",
                    "GST, EPFO & ESIC",
                    "Corporate Bank Account"
                ]}
                stats={[
                    { count: "75%", label: "Market Share in Compliance", icon: <BarChart2 size={20} /> },
                    { count: "10+", label: "Services in One Form", icon: <Briefcase size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Users size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    advantages: "Advantages",
                    eligibility: "Eligibility Criteria",
                    documents: "Documents Required",
                    process: "Process",
                    features: "Features",
                    postCompliance: "Post Compliance",
                    faq: "FAQs"
                }}
                overview={{
                    badge: "MCA 2020 – SPICe+ Web Form (INC-32)",
                    title: "SPICe+ Form –",
                    highlightTitle: "An Overview",
                    description: [
                        "SPICe+ Form, which stands for Simplified Proforma for Incorporating Company Electronically Plus, is an e-application dealing with the incorporation legalities. In 2020, the Ministry of Corporate Affairs notified and deployed the SPICe+ web form to simplify the company incorporation process by reducing paperwork and easing compliance requirements.",
                        "Apart from name reservation and registration, the SPICe+ Form also serves as a single window to apply for different registrations, including GST, EPFO, ESIC, etc. The SPICe+ Form (INC 32) further aims at consolidating various services and forms, making it a one-stop solution for entrepreneurs and businesses looking to establish their companies.",
                        "Are you tired of overcoming challenges in the path of company registration? Get Vyombiz expert assistance and file the SPICe+ Form with no hurdle.",
                    ],
                    whyIdealTitle: "What is SPICe+ Form MCA?",
                    whyIdealList: [
                        { title: "Advanced Version of SPICe", desc: "SPICe+ Form MCA is an online form that complements the incorporation of a company in India — the advanced version of SPICe designed to facilitate ease of doing business (EODB)." },
                        { title: "10+ Services via 3 Ministries", desc: "The SPICe+ web portal provides around 10 services by three Central Government Ministries and Departments in one integrated form." },
                        { title: "Single Window Integration", desc: "SPICe+ is a single window for multiple services, combining multiple forms into a single application and streamlining the company incorporation process." },
                        { title: "Real-Time Validation", desc: "SPICe+ Form provides on-screen submission and real-time data validation, replacing old web form SPICe and providing many new capabilities." },
                    ]
                }}
                advantages={{
                    title: "Benefits of Filing SPICe+ Form MCA",
                    subtitle: "Why SPICe+ is the most efficient path to company incorporation in India.",
                    list: [
                        { title: "Simplified Compliance", desc: "Filing SPICe+ Form MCA consolidates multiple registrations into one process, simplifying compliance with incorporation formalities." },
                        { title: "Digitally Signed Documents", desc: "SPICe+ Form MCA generates digitally signed documents, enhancing security, legal validity, and streamlining workflows." },
                        { title: "Easy Integration", desc: "SPICe+ Form MCA ensures easy integration with various government departments, making it easier to complete the incorporation process." },
                        { title: "Real-Time Data Validation", desc: "Filing SPICe+ Form MCA enables real-time data validation, ensuring accuracy and reducing errors during the company incorporation process." },
                        { title: "On-Screen Submission", desc: "SPICe+ Form MCA allows users to make on-screen submission, enabling a seamless and user-friendly process for entering and validating data directly within the web portal." },
                        { title: "Fast Processing", desc: "Filing SPICe+ Form MCA enables fast processing of the company incorporation process by consolidating multiple applications into a single submission." },
                    ]
                }}
                eligibility={eligibilityContent}
                documents={{
                    title: "Documents Required for SPICe+ Form MCA",
                    description: "The following is the list of documents required to serve as mandatory annexures to the SPICe+ Form.",
                    list: [
                        "Electronic Memorandum of Association (eMoA)",
                        "Electronic Articles of Association (eAoA)",
                        "Declaration by the first director(s) as well as subscriber(s)",
                        "Proof concerning the office address",
                        "Copy concerning the utility bills",
                        "NOC from the owner of the property on which company premises reside",
                        "Copy of COI of foreign body corporate (if any)",
                        "Resolution of the promoter company (if the body corporate's name is a promoter)",
                        "The interest of first director(s) in other companies",
                        "Consent of Nominee (INC-3) — Applicable for OPC",
                        "Identifier and residential proof of subscribers, nominee, and applicant",
                        "Resolution of entities yet to be registered — Chapter XXI (Part 1) Companies",
                        "Declaration in Form No. INC-14 (for Section 8 Company)",
                        "Declaration in Form No. INC-15 (for Section 8 Company)",
                        "Estimate concerning projected annual income and expenditure (Section 8 Company)",
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Procedure for Filing SPICe+ Company Incorporation Form",
                    subtitle: "Step-by-step guide to filing the SPICe+ Form on the MCA portal.",
                    steps: [
                        { step: "01", title: "Create SPICe+ Login Credentials", desc: "Log on to the MCA portal and create SPICe+ login credentials for the submission of fresh applications." },
                        { step: "02", title: "File SPICe+ Part A", desc: "File a new application, SPICe+ Part A, containing fields concerning class, sub-category, and proposed name of the company." },
                        { step: "03", title: "File SPICe+ Part B", desc: "Once Part A is filed and the name approval letter is received, file each section of SPICe+ Form Part B concerning basic details related to company incorporation." },
                        { step: "04", title: "Other Linked Mandatory Forms", desc: "After submitting Part B, file other linked forms such as eMoA, eAoA, eForm URC-1, and the AGILE PRO S application form (INC-35), if applicable." },
                        { step: "05", title: "Receipt of Certificate of Incorporation", desc: "Once all relevant forms are successfully filed and verified, the MCA issues the Certificate of Incorporation (COI) in Form INC 11, containing CIN, PAN, TAN, and date of incorporation." },
                    ]
                }}
                features={featuresContent}
                postCompliance={postComplianceContent}
                whyChooseUs={{
                    title: "Why Trust Vyombiz for Filing SPICe+ Form MCA?",
                    subtitle: "75% market share in compliance — your trusted partner for seamless company incorporation.",
                    list: [
                        { title: "75% Market Share", desc: "We are the industry leader in the compliance segment, with a positive market share of 75%." },
                        { title: "Simplified Documentation", desc: "Vyombiz simplifies the process of filing relevant forms required to incorporate a company in India." },
                        { title: "Cost-Effective Solutions", desc: "We provide transparent and cost-effective solutions that are ideal for starting a company through the filing of SPICe+ Forms in India." },
                        { title: "Comprehensive Technical Support", desc: "We offer comprehensive technical support for filing SPICe+ forms, guaranteeing successful company incorporation." },
                        { title: "Ease the Incorporation of Section 8 Companies", desc: "Our experts at Vyombiz streamline the incorporation of Section 8 companies through SPICe+ Form in India." },
                        { title: "Efficient and Hassle-Free Incorporation", desc: "Vyombiz offers comprehensive services streamlining SPICe+ registration, ensuring efficient and hassle-free business setup in India." },
                        { title: "End-to-End Support Services", desc: "Vyombiz provides end-to-end support services for SPICe+ registration and all other relevant linked forms." },
                        { title: "24/7 Availability", desc: "Our experts at Vyombiz are readily available to make the process of filing the SPICe+ Form enjoyable." },
                        { title: "Expertise in Regulatory Compliance", desc: "With our expertise and experience, we ensure the smooth filing of the SPICe+ form, guaranteeing compliance with all necessary MCA regulations." },
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions on SPICe+ Form"
                subtitle="Have a look at the answers to the most asked questions on SPICe+ Form"
                faqs={faqs}
            />

        </div>
    );
};

export default SPICEForm;
