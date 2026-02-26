import React from "react";
import {
    Users, Briefcase, Building2, CheckCircle2, FileText,
    Globe, Shield, Landmark, Banknote, ShoppingBag
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * AGILE PRO S Form Page - Vyombiz
 * Sections: Overview | Advantages | Eligibility Criteria | Documents Required |
 *           Process | Features | Post Compliance | FAQs
 */

const AGILEPROS = () => {

    /* ─── FAQs ───────────────────────────────────────────────── */
    const faqs = [
        {
            question: "What is the AGILE PRO S Form?",
            answer: "AGILE PRO S Form is an essential application filed with the Ministry of Corporate Affairs for obtaining multiple registrations, including ESIC, EPFO, GST, and more. It is mandatory to file and link it with the SPICe+ Form."
        },
        {
            question: "What is the full form of the AGILE PRO S Form in MCA?",
            answer: "AGILE PRO S stands for Application for Goods and Services Tax Identification Number, Employees' State Insurance Corporation registration, Employees' Provident Fund Organization registration, Profession Tax Registration, Opening of bank account, and Shops and Establishment Registration Number."
        },
        {
            question: "What is the INC-35 AGILE PRO S Form?",
            answer: "The INC-35 AGILE PRO S Form is an e-form introduced by the Ministry of Corporate Affairs that allows companies to register for multiple business identifiers simultaneously. It is an integral part of the SPICe+ Form (INC-32) and serves as a multipurpose single-window application."
        },
        {
            question: "Who is required to apply for Form AGILE PRO S?",
            answer: "Startups incorporating through SPICe+, Private Limited Companies, Public Limited Companies, LLPs, and SMEs intending to obtain GSTIN, EPFO, ESIC, professional tax, bank account opening, or Shops & Establishment registration are required to file Form AGILE PRO S."
        },
        {
            question: "What does the SPICe+ Form stand for?",
            answer: "SPICe+ stands for Simplified Proforma for Incorporating Company Electronically Plus. It is a common application that facilitates company incorporation combined with multiple registrations in one form."
        },
        {
            question: "Is it mandatory for companies to secure PF and ESI after filing the AGILE PRO S Form?",
            answer: "Yes, it is mandatory for applicable entities. Any establishment with 20 or more employees must register with EPFO, and any production unit with more than 10 employees must register with ESIC. If a company falls under these thresholds, securing PF and ESI registration via AGILE PRO S is mandatory."
        },
    ];

    /* ─── Services list (reused in Post Compliance) ─────────── */
    const services = [
        {
            icon: <Globe size={22} className="text-[#005a9c]" />,
            title: "Goods and Services Tax Identification Number (GSTIN)",
            desc: "The Goods and Services Tax Identification Number (GSTIN) is the legal identity of an assessee. Securing GSTIN is mandatory for all businesses falling under the single tax system."
        },
        {
            icon: <Shield size={22} className="text-[#005a9c]" />,
            title: "Employees' State Insurance Corporation Registration",
            desc: "The ESIC, governed by the ESI Act of 1948, requires production units with more than 10 employees to register under the Ministry of Labour and Employment, Government of India."
        },
        {
            icon: <Users size={22} className="text-[#005a9c]" />,
            title: "Employees' Provident Fund Organization Registration",
            desc: "The Employees' Provident Fund (EPF) scheme is managed by EPFO to provide financial support during retirement. Every establishment with a workforce of 20 or more employees is required to secure EPFO registration."
        },
        {
            icon: <Briefcase size={22} className="text-[#005a9c]" />,
            title: "Professional Tax Registration",
            desc: "Professional tax regime requires factory owners to deduct a specified amount from employees' salaries if their monthly salary exceeds ₹7,500. Applicants must file SPICe+ along with AGILE-PRO-S, Form INC-34, and URC-1."
        },
        {
            icon: <Banknote size={22} className="text-[#005a9c]" />,
            title: "Opening of Bank Account",
            desc: "Opening a bank account promotes registered companies to facilitate a bank account in their name. The process of opening a corporate bank account supports businesses in conducting financial transactions."
        },
        {
            icon: <FileText size={22} className="text-[#005a9c]" />,
            title: "Import-Export Code (IEC) Registration",
            desc: "AGILE PRO S provides businesses an option to engage in international trade by issuing a ten-digit lifetime validity IEC code from the DGFT (Director General of Foreign Trade)."
        },
        {
            icon: <ShoppingBag size={22} className="text-[#005a9c]" />,
            title: "Shops and Establishment Registration Number",
            desc: "Form AGILE PRO S is an e-form also used to apply for Shops and Establishment Registration Number, which is legally required by businesses to incorporate their shops and establishments in India."
        },
    ];

    /* ─── Eligibility (custom JSX) ──────────────────────────── */
    const eligibilityContent = (
        <div className="space-y-8">
            {/* Checklist */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Shield size={18} className="text-[#005a9c]" />
                    Eligibility Checklist to Apply for AGILE PRO S Form
                </h3>
                <div className="grid gap-3">
                    {[
                        "The applicant must obtain mandatory registrations like EPFO and ESIC.",
                        "Ensure preparedness of all documents required for processing Form AGILE PRO S annual application form.",
                        "Ensure compliance with KYC norms of the selected banks.",
                        "Stay aware and comply with additional state-specific requirements.",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Who can apply */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Users size={18} className="text-[#005a9c]" />
                    Who All Can Apply for AGILE PRO S Form?
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                    {[
                        "Startups intending to incorporate through SPICe+ e-form",
                        "Small and Medium Enterprises (SMEs)",
                        "Private Limited Companies",
                        "Limited Liability Partnerships (LLPs)",
                        "Public Limited Companies",
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

    /* ─── Features (Key Features checklist only) ────────────── */
    const featuresContent = (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <FileText size={18} className="text-[#005a9c]" />
                    Key Features of Form AGILE PRO S
                </h3>
                <div className="grid gap-3">
                    {[
                        "Form AGILE PRO S consolidates multiple registrations under a single application.",
                        "AGILE PRO S Form makes the company registration process faster and more efficient.",
                        "AGILE PRO S eliminates redundant procedures by integrating MCA e-Services.",
                        "AGILE PRO S ensures filing of regulatory requirements such as PAN, TAN, and GST.",
                        "AGILE PRO S Form mandatorily requires proof of business place, location, or jurisdiction — whether owned or hired.",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-4">
                            <CheckCircle2 size={16} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <p className="text-[14px] text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    /* ─── Post Compliance (Services + Comparison + Directors + Form Details) ── */
    const postComplianceContent = (
        <div className="space-y-14">

            {/* Services Associated */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-6 flex items-center gap-2">
                    <Landmark size={18} className="text-[#005a9c]" />
                    Services Associated with Form AGILE PRO S
                </h3>
                <p className="text-[14px] text-slate-500 mb-6">Some of the crucial services associated with Form AGILE PRO S are as discussed below:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((svc, i) => (
                        <div key={i} className="flex gap-4 bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-[#005a9c]/30 hover:bg-white transition-all">
                            <div className="w-10 h-10 rounded-lg bg-[#e8f1fb] flex items-center justify-center shrink-0">
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

            {/* SPICe+ vs AGILE PRO S Comparison */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <FileText size={18} className="text-[#005a9c]" />
                    Difference Between SPICe+ Form &amp; AGILE PRO S Form
                </h3>
                <p className="text-[14px] text-slate-500 mb-4">The key difference between the SPICe+ Form &amp; AGILE PRO S Form is as explained below:</p>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-[14px]">
                        <thead>
                            <tr className="bg-[#072b47] text-white">
                                <th className="text-left px-4 py-3 font-semibold w-[140px]">Aspect</th>
                                <th className="text-left px-4 py-3 font-semibold">SPICe+ Form</th>
                                <th className="text-left px-4 py-3 font-semibold">AGILE PRO S Form</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                [
                                    "Abbreviation",
                                    "SPICe+ stands for Simplified Proforma for Incorporating Company Electronically Plus.",
                                    "AGILE PRO S stands for Application for GSTIN, ESIC, EPFO, Profession Tax, Opening of Bank Account & Shops and Establishment Registration Number."
                                ],
                                [
                                    "Purpose",
                                    "A common application that facilitates company incorporation combined with multiple registrations in one form.",
                                    "A mandatory form used to register and secure various regulatory registrations, including GSTIN, EPFO, ESIC, etc."
                                ],
                                [
                                    "Key Services",
                                    "Company incorporation, PAN registration, name reservation, TAN and DIN registration.",
                                    "GSTIN registration, professional tax, IEC registration, Shops & Establishment registration, opening bank account, etc."
                                ],
                                [
                                    "Target Users",
                                    "Entrepreneurs registering a new company.",
                                    "Newly incorporated companies requiring post-incorporation registrations."
                                ],
                                [
                                    "Role in Business Setup",
                                    "Ensures compliance with initial business formation regulations.",
                                    "Ensures compliance with post-operational and employee-related regulations."
                                ],
                            ].map(([aspect, spice, agile], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="px-4 py-3 font-semibold text-[#072b47] align-top">{aspect}</td>
                                    <td className="px-4 py-3 text-slate-700 align-top">{spice}</td>
                                    <td className="px-4 py-3 text-slate-700 align-top">{agile}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Director thresholds */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <Users size={18} className="text-[#005a9c]" />
                    How Many Directors Can Be Added in AGILE PRO S Form?
                </h3>
                <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                    The details of directors cited in the SPICe+ webform should be categorized based on category, class, and sub-category. Below are the minimum thresholds required:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                    {[
                        { type: "One Person Company (OPC)", count: "At least 1 Director" },
                        { type: "Private Limited Company", count: "At least 2 Directors" },
                        { type: "Public Limited Company", count: "At least 3 Directors" },
                        { type: "Producer Company", count: "At least 5 Directors" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between gap-3 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl px-4 py-3">
                            <span className="text-[14px] text-slate-700">{item.type}</span>
                            <span className="text-[13px] font-bold text-[#005a9c] shrink-0">{item.count}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Details to be added */}
            <div>
                <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                    <FileText size={18} className="text-[#005a9c]" />
                    Details to be Added in AGILE PRO S Form
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {[
                        "Details of the District or State in which your business resides",
                        "Centre jurisdiction",
                        "Reason to secure registration",
                        "Nature of the premises possession",
                        "Proof concerning the business place",
                        "Category of the registered person",
                        "Nature of business activity being performed within the facility",
                        "Other business activity, if exists",
                        "Details concerning the products/services supplied by the business",
                        "HSN code (for product-based company)",
                        "Service Accounting Code (for service-based company)",
                        "Number of directors, Police station, Employer's details, Bank's details",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3">
                            <CheckCircle2 size={15} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <p className="text-[13px] text-slate-700">{item}</p>
                        </div>
                    ))}
                </div>

                <h4 className="text-[15px] font-bold text-[#072b47] mb-3">Details of Subscribers and Directors</h4>
                <div className="grid sm:grid-cols-3 gap-3">
                    {[
                        "Name of the subscribers and directors",
                        "Address of the subscribers and directors",
                        "DIN/PAN of the subscribers and directors",
                        "Mobile No. and email address",
                        "Photograph of the subscribers and directors",
                        "Specimen Signature of the subscribers and directors",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-3">
                            <CheckCircle2 size={14} className="text-[#005a9c] mt-0.5 shrink-0" />
                            <p className="text-[13px] text-slate-700">{item}</p>
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
                heroTitleMain="AGILE PRO S "
                heroTitleSuffix="Form Filing"
                heroSubtitle="Single-Window Application for Multiple Registrations (INC-35)"
                heroDescription="File Form AGILE PRO S (INC-35) seamlessly with Vyombiz experts. Get GSTIN, EPFO, ESIC, Professional Tax, Bank Account & IEC registration in one go — linked with your SPICe+ application."
                whatsIncludedList={[
                    "GSTIN Registration",
                    "EPFO & ESIC Enrolment",
                    "Professional Tax Registration",
                    "Bank Account Opening"
                ]}
                stats={[
                    { count: "2,500+", label: "AGILE PRO S Forms Filed", icon: <Users size={20} /> },
                    { count: "7+", label: "Simultaneous Registrations", icon: <Briefcase size={20} /> },
                    { count: "100%", label: "Compliance Assurance", icon: <Building2 size={20} /> }
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
                    badge: "Rule 38(A) – Companies (Incorporation) Rules, 2014",
                    title: "AGILE PRO S Form –",
                    highlightTitle: "An Overview",
                    description: [
                        "AGILE PRO S Form is an essential application filed with the Ministry of Corporate Affairs for obtaining multiple registrations, including ESIC, EPFO, GST, and more. It is mandatory to file and link AGILE PRO S Form with the SPICe+ Form, which facilitates name reservation and entity registration for applicants.",
                        "Agile Pro S, as introduced by the Ministry of Corporate Affairs, aimed to boost the entrepreneurship culture in India. The AGILE PRO S Form filed pursuant to Rule 38(A) of the Companies (Incorporation) Rules, 2014, serves as a single-window application that helps secure a multitude of registrations in a single attempt.",
                        "Speak to consultants at Vyombiz and ease the journey of filing Form AGILE PRO S from the place of your comfort.",
                    ],
                    whyIdealTitle: "What is the AGILE PRO S Form?",
                    whyIdealList: [
                        { title: "AGILE PRO Stands For", desc: "Application for GSTIN, ESIC, EPFO, Professional Tax Registration & Shops & Establishment Registration." },
                        { title: "INC-35 e-Form", desc: "An e-form that allows companies to register for various business identifiers simultaneously via the MCA portal." },
                        { title: "Linked with SPICe+", desc: "AGILE PRO S (INC-35) is a mandatory integral part of the SPICe+ (INC-32) form — the multipurpose incorporation application." },
                        { title: "Introduced by MCA", desc: "The Ministry of Corporate Affairs, Government of India, introduced AGILE PRO S to allow companies to do business in India efficiently." },
                    ]
                }}
                advantages={{
                    title: "Benefits of Filing INC-35 AGILE PRO S Form",
                    subtitle: "Why AGILE PRO S is the most efficient path to multi-registration compliance.",
                    list: [
                        { title: "Automatic Enrolment", desc: "Filing the INC-35 AGILE PRO S e-form guarantees automatic enrolment for multiple services in one go." },
                        { title: "Name Reservation", desc: "The INC-35 AGILE PRO S Form filed and linked with the SPICe+ e-form assists in name reservation and entity registration." },
                        { title: "Enhances Operational Efficiency", desc: "The INC-35 AGILE PRO S Form streamlines company incorporation by enabling simultaneous registration, enhancing operational efficiency, and ensuring regulatory compliance." },
                        { title: "Legal Compliance", desc: "The INC-35 Form AGILE PRO S ensures compliance with statutory requirements specified by MCA, GST, EPFO, and ESIC." },
                        { title: "Government Incentives", desc: "The INC-35 AGILE PRO S Form allows businesses to access government incentives and schemes such as Startup India, MSME registration benefits, etc." },
                        { title: "Reduced Administrative Burden", desc: "The INC-35 AGILE PRO S Form reduces the administrative effort required for filing separate applications for tax registration, professional tax, etc." },
                    ]
                }}
                eligibility={eligibilityContent}
                documents={{
                    title: "Documents Required for AGILE PRO S Form",
                    description: "The following is the list of crucial documents required for filing an AGILE PRO S Form.",
                    list: [
                        "Proof concerning the business place (if seeking GSTIN)",
                        "Proof concerning the signatory's appointment (if seeking GSTIN)",
                        "Proof of identification of the authorized signatory (bank account opening)",
                        "Proof of residence of the Authorized Signatory (for bank account opening)",
                        "Specimen signature of the signatory (For EPFO)",
                        "Copy of the board resolution serving the purpose",
                        "General Letter of Authorization or a copy of the board resolution",
                        "Utility bills like electricity bills",
                        "Proof of letter of authorization",
                        "Identification & address proof of representative/authorized signatory (bank account opening)",
                        "ESIC/EPFO and Bank declarations – enabled in all cases",
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "How to File AGILE PRO S Form?",
                    subtitle: "Step-by-step procedure for filing Form AGILE PRO S on the MCA portal.",
                    steps: [
                        { step: "01", title: "Filing of Application Form", desc: "Download and file all details concerning GST registration references immediately after the successful submission of the SPICe+ form." },
                        { step: "02", title: "Attach All Relevant Documents", desc: "Once the application details are filed, attach all relevant documents to the MCA portal." },
                        { step: "03", title: "File Mandatory Declaration", desc: "File mandatory declarations based on your use — such as EPFO, ESIC, and bank declaration as applicable." },
                        { step: "04", title: "Payment to MCA", desc: "Affix a Digital Signature Certificate (DSC) along with the payment of cover fees required for filing the AGILE PRO S Form." },
                        { step: "05", title: "Processing and Approval", desc: "The Ministry of Corporate Affairs processes and grants approvals, enabling simultaneous registration for multiple services." },
                    ]
                }}
                features={featuresContent}
                postCompliance={postComplianceContent}
                whyChooseUs={{
                    title: "Why Trust Vyombiz for Filing AGILE PRO S Form?",
                    subtitle: "2,500+ AGILE PRO S Forms filed — your partner for seamless multi-registration compliance.",
                    list: [
                        { title: "Highly Skilled Professionals", desc: "We possess a highly skilled team of professionals for filing Form AGILE PRO S annual application form." },
                        { title: "Solid Experience & Background", desc: "Our expert business consultants and professionals hold healthy experience and background in MCA filings." },
                        { title: "Compliance Assurance", desc: "Vyombiz ensures that compliance requirements for filing the AGILE PRO S Form in India are simplified and error-free." },
                        { title: "Multi-Registration Process", desc: "We assist you in filing the AGILE PRO S Form covering multiple registrations — GST, Professional Tax, EPFO, and more." },
                        { title: "Comprehensive Documentation Support", desc: "Our expert services include comprehensive documentation support required for filing the AGILE PRO S Form." },
                        { title: "Speedy Processing", desc: "Vyombiz guarantees speedy and cost-effective processing of the AGILE PRO S Form application." },
                        { title: "Post-Application Assistance", desc: "We ensure reliable post-application assistance in handling the complexities of the Form AGILE PRO S application." },
                        { title: "24/7 Availability of Experts", desc: "Our expert professionals are available 24/7 to resolve queries in filing Form AGILE PRO S." },
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions on Form AGILE PRO S"
                subtitle="Have a look at the answers to the most asked questions"
                faqs={faqs}
            />

        </div>
    );
};

export default AGILEPROS;
