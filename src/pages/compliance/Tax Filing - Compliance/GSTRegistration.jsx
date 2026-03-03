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
            question: "What is GST?",
            answer: "The Goods and Services Tax, better known as GST, is one single indirect tax structure in India that came into effect after replacing multiple taxes, which were earlier levied on various goods and services."
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
                heroTitleMain="GST Registration"
                heroTitleSuffix="Online"
                heroSubtitle="Step-by-Step (REG-01) & Expert Help"
                heroDescription="Are you facing challenges during GST registration? Get your GSTIN quickly with Vyombiz CA/CS guidance. We complete REG-01, verify documents, track your ARN, and ensure error-free application processing."
                whatsIncludedList={[
                    "Document Preparation",
                    "Get ARN in 2-3 Days",
                    "GST Certificate Issuance",
                    "Free Consultation with GST Expert"
                ]}
                stats={[
                    { count: "42868+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "GST Apply in 1 Hour",
                    title: "GST Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "If you are looking for GST registration to empower your business legally, you are at the right place.",
                        "The Goods and Services Tax, popularly known as GST, was introduced on July 1, 2017, as a replacement for various central and state-level taxes, including Service Tax, Excise Duty, CST, Entertainment Tax, Luxury Tax, and VAT. GST introduction has since ensured the streamlining of the tax process in India. GST registration is mandatory for traders, service providers, manufacturers, and freelancers.",
                        "GST has united various indirect taxes, including VAT, service tax, and excise duty, into a unified single tax system. The consolidation of multiple taxes restructured as GST has streamlined compliance, lowered tax evasions, eliminated the domino effect of taxes, promoted the ease of doing business, and boosted the efficacy of the country’s economy.",
                        "Talk to consultants at Vyombiz and enjoy easy and timely GST registration in India.",
                        <strong>What is a GST Registration Certificate?</strong>,
                        "GST registration certificate is an official document issued by the Government of India to business entities registered under the GST framework. It stands as a testimony to the entity’s legal standing. The certificate displays critical information, including the GST identification number, business name, and official address.",
                        "The GST Certificate is important for accomplishing tax obligations and crucial in cementing an entity’s credibility and operational legality. Furthermore, GST registration verification is essential for LLPs, OPCs, private limited companies and public limited companies as well."
                    ],
                    whyIdealTitle: "Timeline and Fees",
                    whyIdealList: [
                        { title: "7-10 Days", desc: "Estimated timeline for getting GST registration approval from authorities." },
                        { title: "No Direct Govt Fees", desc: "The government charges no direct fees for obtaining a GST certificate online." },
                        { title: "Rs. 1999/- onwards", desc: "Vyombiz GST registration fees start from Rs. 1999/- and vary from state to state." },
                        { title: "Around 30 Days", desc: "Depending on specific business needs and nature, overall documentation can take up to 30 days." }
                    ]
                }}
                advantages={{
                    title: "What are the Benefits of GST Registration?",
                    subtitle: "Empower your business with legal recognition and growth opportunities.",
                    list: [
                        { title: "Regulatory Compliance", desc: "GST registration safeguards the interests of entities operating in India. It ensures their legal compliance, saving them from paying penalties." },
                        { title: "Easy Compliance", desc: "GST registration is not a complicated process. It helps entities streamline their processes for filing tax returns and making online payments." },
                        { title: "Maintains Transparency", desc: "Allows business entities to maintain updated records. This helps build reliability and facilitates operational transparency." },
                        { title: "Legal Protection", desc: "Safeguards the legal and regulatory standards of the business, thereby protecting their legal rights and operational stability." },
                        { title: "Improve Credit Score", desc: "Businesses that manage their GST and other regulatory compliances easily boost their credit profile with financial bodies." },
                        { title: "Market Advantage", desc: "Businesses with GST registration earn the trust of their customers, which attracts more business opportunities for them in the future." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria for GST Registration",
                    subtitle: "Check if your business is required to register for GST.",
                    list: [
                        { title: "Turnover > ₹40 Lakhs", desc: "Businesses having an aggregate annual turnover of more than INR 40 Lakhs. (INR 20 Lakhs for special category states)." },
                        { title: "Service Providers > ₹20 Lakhs", desc: "All service providers with aggregate annual turnover over INR 20 Lakhs. (INR 10 Lakhs for special category states)." },
                        { title: "Inter-State Boundaries", desc: "Any individual or business dealing with goods supplied across state boundaries." },
                        { title: "Reverse Charge", desc: "Businesses that are bound by the framework to pay tax under the reverse charge mechanism." },
                        { title: "E-Commerce Operators", desc: "All operators and aggregators delivering goods and services through e-commerce platforms." },
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
                    imageUrl: "https://images.unsplash.com/photo-1554224155-9dcd0b1760a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "How to Apply for GST Registration Online?",
                    subtitle: "The process of GST registration is now easy and simple in 5 steps.",
                    steps: [
                        { step: "01", title: "Apply on the GST Portal", desc: "Visit the GST portal and enter all required details, including legal business name, PAN, email ID, mobile number, state, and district." },
                        { step: "02", title: "Authenticate OTP", desc: "After submitting the details, you will receive an OTP on your registered mobile number and email ID for verification." },
                        { step: "03", title: "TRN Generated", desc: "Once the OTP is verified, a Temporary Reference Number (TRN) is generated and sent to your registered email." },
                        { step: "04", title: "Submission for Verification", desc: "Provide detailed information about the business, including promoter details, place of business, business type, and submit with DSC." },
                        { step: "05", title: "Receive ARN Confirmation", desc: "After saving and submitting the application, an Application Reference Number (ARN) is generated and sent via SMS for tracking." }
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
                    title: "Why Trust Vyombiz for GST Registration?",
                    subtitle: "Simplified registration with high success rates.",
                    list: [
                        { title: "Simplified Registration", desc: "We at Vyombiz have successfully processed and simplified around 5000+ GST registration applications in India." },
                        { title: "High Success Rate", desc: "We at Vyombiz guarantee a 99% business success rate while obtaining a GST registration certificate in India." },
                        { title: "Simplify Documentation", desc: "We seamlessly assist in simplifying the heavy paperwork and documentation required to obtain a GST certificate." },
                        { title: "Legal Advice", desc: "Vyombiz provides deep legal advice and regular regulatory updates to simplify the legal necessities." },
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
