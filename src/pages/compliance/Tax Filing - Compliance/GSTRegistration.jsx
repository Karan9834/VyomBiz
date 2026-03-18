import React from "react";
import { Users, Briefcase, Building2, CheckCircle2, ShieldAlert } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * GSTRegistration Page matching Vyombiz layout styles
 */

const GSTRegistration = () => {

    const faqs = [
        {
            question: "What is GST in India?",
            answer: "GST (Goods and Services Tax) is a unified indirect tax system implemented in India that replaced several central and state-level taxes on goods and services."
        },
        {
            question: "In which cases GST registration is crucial?",
            answer: "GST registration is crucial if you supply goods via an e-commerce portal, make inter-state supplies, are a Casual Taxable Person, an agent for a registered principal, a Service Provider with turnover > ₹20 Lakhs, an Input Service Distributor, an E-commerce Operator, a TDS/TCS Deductor, or liable to pay tax under Reverse Charge Mechanism."
        },
        {
            question: "Will I need to upload my photograph for GST registration?",
            answer: "Yes, recent passport-sized photographs of the promoters, partners, or directors are required as part of the document submission during the online GST registration process."
        },
        {
            question: "I am an e-commerce operator registered as a TCS under the GST regime. I’m involved in supplying goods to multiple states. Do I have to register in each state?",
            answer: "Yes, under GST law, e-commerce operators must obtain registration in every state where they operate or from where they supply goods or services, regardless of the turnover limit."
        },
        {
            question: "Is GST registration mandatory in India?",
            answer: "It is mandatory for businesses whose aggregate turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs in special states) and ₹20 Lakhs for services (₹10 Lakhs in special states), as well as for those involved in inter-state trade or e-commerce."
        },
        {
            question: "Is a GST certificate mandatory?",
            answer: "Yes, registered businesses must clearly display their GST registration certificate at their primary place of business and all additional branches or locations."
        },
        {
            question: "Is a person without GST registration eligible to levy and collect GST?",
            answer: "No, a person without a valid GST Registration Certificate cannot legally charge or collect GST from their customers or claim Input Tax Credit."
        },
        {
            question: "Which State has the highest GST registration?",
            answer: "Maharashtra typically has the highest number of GST registrations in India, owing to its large commercial and industrial base."
        },
        {
            question: "Who was the first chairman of the GST Council?",
            answer: "Arun Jaitley, the former Finance Minister of India, was the first chairman of the GST Council when GST was introduced in 2017."
        },
        {
            question: "What indirect taxes have been subsumed under GST registration?",
            answer: "GST replaced taxes such as Service Tax, Excise Duty, VAT, CST, Entertainment Tax, Luxury Tax, and Purchase Tax, among others."
        },
        {
            question: "Is there any govt fee for GST registration?",
            answer: "No, there is no government fee for applying for and obtaining a new GST registration online through the official GST portal."
        },
        {
            question: "How long does it take to get ARN/GSTIN?",
            answer: "You get the Application Reference Number (ARN) immediately upon submission. Verification by authorities takes 7-10 working days, after which the GSTIN is issued."
        },
        {
            question: "Why do applications get rejected?",
            answer: "Applications are typically rejected due to incomplete forms, mismatched Aadhaar or PAN details, incorrect or forged address proof, or failure to respond to a show-cause notice regarding discrepancies."
        },
        {
            question: "Do I need a bank account before applying?",
            answer: "You do not strictly need your business bank details right at the time of application, but you must update your bank account information on the portal shortly after retrieving your GSTIN."
        },
        {
            question: "What after GSTIN?",
            answer: "Once you receive your GSTIN, you must update your business bank account details within the prescribed time, start issuing GST-compliant invoices, collect taxes if applicable, and file periodic GST returns."
        }
    ];

    const CustomExtraSections = (
        <div className="space-y-16">
            {/* Consequences Section */}
            <div className="bg-slate-50 rounded-[4rem] p-10 lg:p-20 border border-slate-100 relative overflow-hidden">
                <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6">Consequences for Non-Compliance</h2>
                    <p className="text-slate-500 font-bold text-lg italic leading-relaxed">"Violating the regulatory and legal GST norms can attract significant penalties."</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                    <div className="bg-white p-8 rounded-3xl border-l-4 border-red-500 shadow-sm flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <ShieldAlert className="text-red-500" size={24} />
                            <h4 className="font-black text-xl text-[#072b47]">Tax Payment Violations</h4>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex gap-2 items-start"><CheckCircle2 className="text-red-500 mt-1 shrink-0" size={16} /><span className="text-slate-600 font-bold text-sm">Failure to pay or accidental underpayment: Penalty equals 10% of pending tax.</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 className="text-red-500 mt-1 shrink-0" size={16} /><span className="text-slate-600 font-bold text-sm">Intentional evasion: Penalty equivalent to 100% of the evaded tax.</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 className="text-red-500 mt-1 shrink-0" size={16} /><span className="text-slate-600 font-bold text-sm">Minimum penalty for tax payment violations is INR 10,000.</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 className="text-red-500 mt-1 shrink-0" size={16} /><span className="text-slate-600 font-bold text-sm">Interest is assessed on outstanding tax liabilities.</span></li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border-l-4 border-orange-500 shadow-sm flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <ShieldAlert className="text-orange-500" size={24} />
                            <h4 className="font-black text-xl text-[#072b47]">Registration & General Filing</h4>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex gap-2 items-start"><CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={16} /><span className="text-slate-600 font-bold text-sm">Not registering: Penalty of Rs. 10,000 or amount of tax evaded (whichever is greater).</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={16} /><span className="text-slate-600 font-bold text-sm">Section 122 of CGST Act outlines substantial penalties for avoiding registration.</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={16} /><span className="text-slate-600 font-bold text-sm">Continuous violations can lead to suspension or cancellation of an existing GST certificate.</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Role of GST Certificate & GSTIN */}
            <div className="grid lg:grid-cols-2 gap-10">
                <div className="bg-[#072b47] rounded-[3rem] p-10 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
                    <h3 className="text-2xl font-black mb-8 relative z-10">Role of GST Registration Certificate</h3>
                    <div className="space-y-5 relative z-10">
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#f1a134] flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 size={14} className="text-[#072b47]" /></div>
                            <p className="text-blue-100 font-bold text-sm">Legally allows businesses to levy and collect GST from their customers.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#f1a134] flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 size={14} className="text-[#072b47]" /></div>
                            <p className="text-blue-100 font-bold text-sm">Authenticates ability to claim Input Tax Credit on purchases and operational expenses.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#f1a134] flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 size={14} className="text-[#072b47]" /></div>
                            <p className="text-blue-100 font-bold text-sm">Helps secure loans easily from financial institutions as strong proof of legitimacy.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#f1a134] flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 size={14} className="text-[#072b47]" /></div>
                            <p className="text-blue-100 font-bold text-sm">Authorizes businesses to participate in government tenders by proving tax compliance.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#f1a134] flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 size={14} className="text-[#072b47]" /></div>
                            <p className="text-blue-100 font-bold text-sm">Boosts goodwill and earns consumer trust through adherence to national tax laws.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl">
                    <h3 className="text-2xl font-black mb-8 text-[#072b47]">Structure & Significance of GSTIN</h3>
                    <p className="text-sm font-bold text-slate-500 mb-6 border-b border-slate-100 pb-6">GSTIN (Goods and Services Tax Identification Number) is a distinctive 15-digit alphanumeric code assigned to taxpayers for seamless operations.</p>
                    <ul className="space-y-4">
                        <li className="flex flex-col gap-1">
                            <span className="font-black text-[#1e40af] text-sm">First Two Digits (Start Code)</span>
                            <span className="text-slate-600 font-bold text-sm border-l border-slate-200 pl-3">Represent the State code where the business is registered (e.g., 22).</span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className="font-black text-[#1e40af] text-sm">Next Ten Digits (PAN)</span>
                            <span className="text-slate-600 font-bold text-sm border-l border-slate-200 pl-3">Represent the PAN (Permanent Account Number) of the registered business.</span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className="font-black text-[#1e40af] text-sm">Next One Digit (Entity Code)</span>
                            <span className="text-slate-600 font-bold text-sm border-l border-slate-200 pl-3">Represents the entity code for the PAN holder in the state.</span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className="font-black text-[#1e40af] text-sm">Next One Digit (Blank)</span>
                            <span className="text-slate-600 font-bold text-sm border-l border-slate-200 pl-3">Currently kept blank (Z) for future use by the authorities.</span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className="font-black text-[#1e40af] text-sm">Last One Digit (Check Code)</span>
                            <span className="text-slate-600 font-bold text-sm border-l border-slate-200 pl-3">A checksum character used for basic error detection.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-16 border border-slate-100">
                <h3 className="text-2xl lg:text-3xl font-black text-[#072b47] mb-8 text-center">Common Mistakes to Avoid During GST Registration</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <h4 className="font-black text-[#1e40af] mb-2">Wrong Documentation</h4>
                        <p className="text-sm text-slate-500 font-bold">Avoid preparing incorrect documents, invoices, and bills of supply, as these are crucial for GST filing.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <h4 className="font-black text-[#1e40af] mb-2">Composition Scheme Ignorance</h4>
                        <p className="text-sm text-slate-500 font-bold">Businesses may face tax issues due to an improper understanding of the GST composition scheme limitations.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <h4 className="font-black text-[#1e40af] mb-2">Missing Return Deadlines</h4>
                        <p className="text-sm text-slate-500 font-bold">Businesses should avoid ignoring or missing strict GST return due dates to prevent compounding late fees.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <h4 className="font-black text-[#1e40af] mb-2">Invoice Detail Inaccuracies</h4>
                        <p className="text-sm text-slate-500 font-bold">Errors in invoices like incorrect GSTINs and tax calculations lead to compliance issues and penalties.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <h4 className="font-black text-[#1e40af] mb-2">GSTR-2A vs GSTR-3B Mismatch</h4>
                        <p className="text-sm text-slate-500 font-bold">Failure to reconcile purchase data (2A/2B) with filed data (3B) causes inconsistencies and tax notices.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <h4 className="font-black text-[#1e40af] mb-2">Unverified Supplier GSTINs</h4>
                        <p className="text-sm text-slate-500 font-bold">Providing or relying on unverified GSTIN details from suppliers leads to the denial of Input Tax Credit.</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Online GST"
                heroTitleSuffix="Registration"
                heroSubtitle="Step-by-Step (REG-01) & Expert Help"
                heroDescription="Get your GSTIN quickly with expert CA/CS assistance from Vyombiz. We handle the complete GST REG-01 filing, verify documents, track your ARN status, and ensure a smooth and error-free registration process."
                whatsIncludedList={[
                    "Document Preparation",
                    "Get ARN in 2-3 Days",
                    "GST Certificate Issuance",
                    "Free Consultation with GST Expert"
                ]}
                stats={[
                    { count: "42,000+", label: "Satisfied Clients", icon: <Users size={20} /> },
                    { count: "3,500+", label: "Professional Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Service Locations", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Apply for GST Registration Easily",
                    title: "Overview of",
                    highlightTitle: "GST Registration",
                    description: [
                        "If you are planning to register your business under GST, you are in the right place to get professional assistance.",
                        "The Goods and Services Tax (GST) was introduced in India on July 1, 2017, replacing multiple indirect taxes such as Service Tax, Excise Duty, VAT, CST, and Luxury Tax. The introduction of GST created a unified tax structure that simplified the indirect taxation system in India. GST registration is mandatory for businesses such as traders, manufacturers, service providers, and freelancers that meet the prescribed criteria.",
                        "GST integrates several indirect taxes into a single tax system, making compliance simpler and more transparent. The new tax regime reduces cascading taxes, minimizes tax evasion, and improves the overall ease of doing business in India.",
                        "Consult Vyombiz experts to complete your GST registration smoothly and without delays.",
                        <strong>What is a GST Registration Certificate?</strong>,
                        "A GST Registration Certificate is an official document issued by the Government of India to businesses registered under the GST system. It confirms that the entity is legally registered and authorized to collect GST. The certificate includes key details such as the GST Identification Number (GSTIN), business name, and registered business address.",
                        "The GST certificate helps businesses comply with tax obligations and strengthens their legal credibility. It is also an important requirement for entities such as LLPs, OPCs, private limited companies, and public limited companies."
                    ],
                    whyIdealTitle: "Timeline and Fees",
                    whyIdealList: [
                        { title: "7–10 Working Days", desc: "Estimated time for GST registration approval by authorities." },
                        { title: "No Government Registration Fees", desc: "The government does not charge any direct fee for GST registration." },
                        { title: "₹1,999 Onwards", desc: "Vyombiz GST registration service fees start from ₹1,999 and may vary depending on the business type and location." },
                        { title: "Up to 30 Days", desc: "Depending on the business structure and documentation requirements, the process may take up to 30 days." }
                    ]
                }}
                advantages={{
                    title: "Benefits of GST Registration",
                    subtitle: "Empower your business with legal recognition and growth opportunities.",
                    list: [
                        { title: "Legal Compliance", desc: "GST registration ensures businesses operate legally and helps avoid penalties for non-compliance." },
                        { title: "Simplified Tax Filing", desc: "GST provides a structured system for filing returns and making tax payments online." },
                        { title: "Improved Transparency", desc: "Maintaining proper GST records helps businesses operate with transparency and credibility." },
                        { title: "Legal Recognition", desc: "GST registration provides legal recognition to the business under the national tax framework." },
                        { title: "Better Financial Credibility", desc: "Proper tax compliance improves business credibility with banks and financial institutions." },
                        { title: "Business Growth Opportunities", desc: "Registered businesses gain customer trust and can expand operations more easily." }
                    ]
                }}
                eligibility={{
                    title: "Who Must Register for GST?",
                    subtitle: "Check if your business is required to register for GST.",
                    list: [
                        { title: "Businesses with Turnover Above ₹40 Lakhs", desc: "Businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for special category states)." },
                        { title: "Service Providers with Turnover Above ₹20 Lakhs", desc: "Service providers with annual turnover exceeding ₹20 lakhs (₹10 lakhs in special category states)." },
                        { title: "Inter-State Supply of Goods", desc: "Businesses supplying goods across different states must register under GST." },
                        { title: "Reverse Charge Liability", desc: "Businesses liable to pay tax under the reverse charge mechanism must register." },
                        { title: "E-Commerce Operators", desc: "Online marketplaces and aggregators supplying goods or services must obtain GST registration." },
                        { title: "Agents & Representatives", desc: "Input service distributors and anyone who supplies goods and services on behalf of the main principal." },
                        { title: "Non-Resident Taxpayers", desc: "Non-residents who do not reside in India but are involved in taxable dealings within India." },
                        { title: "OIDAR Services", desc: "Entities offering database access or retrieval services from outside India to individuals within India." },
                        { title: "Shift from Old Tax", desc: "Businesses previously registered under old tax structures such as Excise, Service Tax, VAT, etc." }
                    ]
                }}
                documents={{
                    title: "Documents Required for GST Registration Online",
                    description: "In order to ensure successful GST registration, several documents are required. Complete your paperwork accurately.",
                    list: [
                        "Applicant’s PAN Card",
                        "Applicant’s Aadhar Card",
                        "Proof of business registration (COI)",
                        "Identity proof of Promoters/Director",
                        "Address proof of Promoters/Director",
                        "Photographs of Promoters/Director",
                        "Address proof of the place of business",
                        "Bank Account statement / Cancelled cheque",
                        "Digital Signature Certificate (DSC)",
                        "Lease / Rent Agreement",
                        "Letter of Authorization / Board Resolution"
                    ],
                    imageUrl: "Documents.jpg"
                }}
                process={{
                    title: "GST Registration Process",
                    subtitle: "The process of GST registration is now easy and simple in 5 steps.",
                    steps: [
                        { step: "01", title: "Fill GST Application", desc: "Submit the required business details on the GST portal including legal name, PAN, email, and mobile number." },
                        { step: "02", title: "OTP Verification", desc: "An OTP is sent to the registered mobile number and email for verification." },
                        { step: "03", title: "Temporary Reference Number (TRN)", desc: "After verification, a TRN is generated for completing the application process." },
                        { step: "04", title: "Submit Application", desc: "Provide business details, promoter information, and upload documents before submitting the application." },
                        { step: "05", title: "Receive ARN Number", desc: "After submission, an Application Reference Number (ARN) is generated for tracking your GST application." }
                    ]
                }}
                typesOfCompliance={{
                    title: "Key Components of GST Registration",
                    subtitle: "The structure of GST registration in India evolves around three major components.",
                    list: [
                        { title: "Central Goods and Services Tax (CGST)", desc: "CGST is a tax imposed by the Central Government on the supply of goods and services within a specified state or territory." },
                        { title: "State Goods and Services Tax (SGST)", desc: "SGST is a tax imposed by the State Government on the supply of goods and services within the state’s specific jurisdiction." },
                        { title: "Integrated Goods and Services Tax (IGST)", desc: "IGST is a tax imposed by the Central Government on the supply of goods and services across different state boundaries." }
                    ]
                }}
                dueDates={{
                    title: "Difference Between GST and Income Tax",
                    subtitle: "Comparing the core features of Goods and Services Tax versus Direct Income Tax.",
                    columns: ["S. No.", "GST (Goods and Services Tax)", "Income Tax"],
                    rows: [
                        ["1.", "It is an indirect tax.", "It is a direct tax."],
                        ["2.", "It is imposed on the consumption of goods and services.", "It is imposed on income from annual salary, capital gains, and house property, etc."],
                        ["3.", "It must be filed monthly, quarterly, and even annually.", "It must be filed annually, once a year."],
                        ["4.", "Levied and collected by both the Central and State governments.", "Levied and collected only by the Central government."],
                        ["5.", "Registration needed for businesses exceeding turnover of Rs. 40 lakhs.", "Anyone with annual income above Rs. 3 lakhs must file income tax returns."]
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for GST Registration?",
                    subtitle: "Simplified registration with high success rates.",
                    list: [
                        { title: "Simple Registration Process", desc: "We simplify the GST registration process for businesses across India." },
                        { title: "High Approval Rate", desc: "Our experts ensure accurate documentation and a high success rate in GST applications." },
                        { title: "Documentation Assistance", desc: "We help prepare and verify all documents required for GST registration." },
                        { title: "Professional Legal Guidance", desc: "Vyombiz experts provide continuous legal guidance and compliance updates." },
                        { title: "End-to-End Solutions", desc: "We at Vyombiz provide end-to-end solutions to effectively address queries related to GST in India." },
                        { title: "Affordable Pricing", desc: "Vyombiz offers 100% affordable, structured, and transparent pricing for GST registration services." },
                        { title: "Reduces Compliance Burden", desc: "We at Vyombiz ensure that the ongoing tax compliance burden is smoothly reduced by up to 30%." },
                        { title: "10+ Years of Experience", desc: "We possess an experienced team with an excellent and in-depth understanding of complex GST regulations." },
                        { title: "24/7 Customer Support", desc: "Vyombiz offers top-tier 24/7 customer support assistance to address compliance-related concerns instantly." }
                    ]
                }}
                postCompliance={CustomExtraSections}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Have a look at the answers to the most asked questions on GST Registration."
                faqs={faqs}
            />

        </div>
    );
};

export default GSTRegistration;