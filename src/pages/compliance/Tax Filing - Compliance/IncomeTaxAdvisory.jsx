import React from "react";
import { Users, Briefcase, Building2, CheckCircle2, ShieldAlert, BadgeInfo } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const IncomeTaxAdvisory = () => {

    const faqs = [
        {
            question: "What services are included in income tax advisory?",
            answer: "Income tax advisory typically includes tax planning, income tax return filing, compliance monitoring, TDS/TCS advisory, capital gains planning, representation before tax authorities, and international tax compliance."
        },
        {
            question: "What is the role of a tax consultant?",
            answer: "A tax consultant analyzes financial systems, devises tax optimization strategies, assists in maintaining compliant records, and files taxes legally to minimize the overall tax liability of a business or individual."
        },
        {
            question: "What are the educational qualifications of a personal income tax consultant?",
            answer: "Personal income tax consultants are typically qualified Chartered Accountants (CAs), Certified Public Accountants (CPAs), Company Secretaries (CS), or legal professionals specializing in taxation."
        },
        {
            question: "Why is it important to plan taxes?",
            answer: "Tax planning is essential as it optimizes cash flow, ensures compliance with legal regulations, leverages applicable deductions or exemptions to reduce overall tax liability, and mitigates the risk of fines and penalties."
        },
        {
            question: "How does Vyombiz help in replying to income tax notices?",
            answer: "Vyombiz's expert consultants help decipher complex legal language in tax notices, gather the appropriate factual documentation, formulate compliant responses, and provide direct representation before authorities."
        },
        {
            question: "Why should I pre-book for filing ITR every year?",
            answer: "Pre-booking ensures your documentation is assessed thoroughly without last-minute rush, guarantees professional audit assistance ahead of deadlines, and safeguards against late fees and compliance issues."
        },
        {
            question: "What are the common mistakes made by taxpayers in income tax returns?",
            answer: "Common mistakes include choosing the incorrect ITR form, omitting secondary incomes, failing to disclose foreign assets, mismatching details with Form 26AS or AIS, and incorrect claims for Section 80 deductions."
        },
        {
            question: "How can an individual tax consultant help with my income tax return preparation?",
            answer: "They cross-check your income sources against all potential exemptions, accurately compute total liability, verify Forms 16/26AS/AIS, file on your behalf, and track any due refunds from the IT department."
        },
        {
            question: "What are the different types of income tax assessments?",
            answer: "Under the Income Tax Act, assessments include Self-Assessment (Sec 140A), Regular Assessment (Sec 143(3)), Best Judgment Assessment (Sec 144), Income Escaping Assessment (Sec 147), and Search Assessment (Sec 153A)."
        },
        {
            question: "What is the difference between an income tax return and an assessment?",
            answer: "An Income Tax Return is the declaration of income and taxes paid submitted by the taxpayer, whereas an Assessment is the official review and evaluation of that return conducted by the Income Tax Department."
        }
    ];

    const CustomExtraSections = (
        <div className="space-y-16">

            {/* Role of Consultants */}
            <div className="bg-[#072b47] rounded-[3rem] p-10 lg:p-20 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
                <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-black mb-6">Role of Vyombiz’s Income Tax Consultants</h2>
                    <p className="text-blue-200/80 font-bold text-lg italic leading-relaxed">
                        "An income tax consultant is an accounting and financial expert who helps companies and individuals ascertain their tax implications and optimize their liabilities."
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                        <div className="w-10 h-10 bg-[#f1a134] rounded-xl flex items-center justify-center mb-6">
                            <BadgeInfo className="text-[#072b47]" size={24} />
                        </div>
                        <h4 className="font-black text-xl mb-3">Strategic Planning</h4>
                        <p className="text-blue-100 text-sm font-bold leading-relaxed">Providing expert guidance on various tax laws to minimize liability on taxable income with strict adherence to laws.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                        <div className="w-10 h-10 bg-[#f1a134] rounded-xl flex items-center justify-center mb-6">
                            <BadgeInfo className="text-[#072b47]" size={24} />
                        </div>
                        <h4 className="font-black text-xl mb-3">Compliance & Reporting</h4>
                        <p className="text-blue-100 text-sm font-bold leading-relaxed">Preparation and filing of accurate returns within prescribed deadlines to the concerned tax authorities to avoid penalties and fines.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                        <div className="w-10 h-10 bg-[#f1a134] rounded-xl flex items-center justify-center mb-6">
                            <BadgeInfo className="text-[#072b47]" size={24} />
                        </div>
                        <h4 className="font-black text-xl mb-3">Income Tax Advisory</h4>
                        <p className="text-blue-100 text-sm font-bold leading-relaxed">Expert advice on reinvestments of capital gains, mergers, acquisitions, REITs, international business expansion, and related business restructuring to optimize your tax implications.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                        <div className="w-10 h-10 bg-[#f1a134] rounded-xl flex items-center justify-center mb-6">
                            <BadgeInfo className="text-[#072b47]" size={24} />
                        </div>
                        <h4 className="font-black text-xl mb-3">Legal Representation</h4>
                        <p className="text-blue-100 text-sm font-bold leading-relaxed">Our best income tax Consultants in India will represent you for tax-related disputes, assessments, and audits to ensure you get a favourable resolution.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                        <div className="w-10 h-10 bg-[#f1a134] rounded-xl flex items-center justify-center mb-6">
                            <BadgeInfo className="text-[#072b47]" size={24} />
                        </div>
                        <h4 className="font-black text-xl mb-3">Monitoring Tax Laws</h4>
                        <p className="text-blue-100 text-sm font-bold leading-relaxed">Income tax consultants will help you remain updated with recent tax law developments by sending regular updates to ensure compliance and financial stability.</p>
                    </div>
                </div>
            </div>

            {/* Features of Income Tax Advisory Services */}
            <div className="bg-slate-50 rounded-[4rem] p-10 lg:p-20 border border-slate-100">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6">Features of Income Tax Advisory Services</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    <div className="flex gap-4 p-4 items-start bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                        <CheckCircle2 className="text-[#f1a134] mt-1 shrink-0" size={20} />
                        <p className="text-sm font-bold text-slate-600">Each solution is tailored to meet specific tax requirements and business objectives, depending on the legal structure and company size.</p>
                    </div>
                    <div className="flex gap-4 p-4 items-start bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                        <CheckCircle2 className="text-[#f1a134] mt-1 shrink-0" size={20} />
                        <p className="text-sm font-bold text-slate-600">Income tax advisory helps minimize the tax liability of a company through the optimum utilization of deductions, exemptions, and credits.</p>
                    </div>
                    <div className="flex gap-4 p-4 items-start bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                        <CheckCircle2 className="text-[#f1a134] mt-1 shrink-0" size={20} />
                        <p className="text-sm font-bold text-slate-600">The income tax advisory services assist companies in long-term business goals, including asset management, business restructuring, mergers, and acquisitions.</p>
                    </div>
                    <div className="flex gap-4 p-4 items-start bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                        <CheckCircle2 className="text-[#f1a134] mt-1 shrink-0" size={20} />
                        <p className="text-sm font-bold text-slate-600">The process supports accurate and on-time filing with the Income Tax Department.</p>
                    </div>
                    <div className="flex gap-4 p-4 items-start bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                        <CheckCircle2 className="text-[#f1a134] mt-1 shrink-0" size={20} />
                        <p className="text-sm font-bold text-slate-600">Corporate income tax return filing is mandatory for all companies in India, ensuring compliance with regulatory requirements.</p>
                    </div>
                    <div className="flex gap-4 p-4 items-start bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                        <CheckCircle2 className="text-[#f1a134] mt-1 shrink-0" size={20} />
                        <p className="text-sm font-bold text-slate-600">Identification and rectification of potential tax risks.</p>
                    </div>
                    <div className="flex gap-4 p-4 items-start bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                        <CheckCircle2 className="text-[#f1a134] mt-1 shrink-0" size={20} />
                        <p className="text-sm font-bold text-slate-600">Income tax advisory motivates businesses and individuals in maintaining financial records, such as balance sheets, expense reports, and cash flow statements.</p>
                    </div>
                    <div className="flex gap-4 p-4 items-start bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                        <CheckCircle2 className="text-[#f1a134] mt-1 shrink-0" size={20} />
                        <p className="text-sm font-bold text-slate-600">In case of a tax audit, a tax consultant or a lawyer represents clients with proper proofs and findings.</p>
                    </div>
                    <div className="flex gap-4 p-4 items-start bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                        <CheckCircle2 className="text-[#f1a134] mt-1 shrink-0" size={20} />
                        <p className="text-sm font-bold text-slate-600">A personal income tax consultant helps companies in their global operations through effective international tax planning via the Double Tax Avoidance Agreements (DTAA) and transfer pricing.</p>
                    </div>
                    <div className="flex gap-4 p-4 items-start bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                        <CheckCircle2 className="text-[#f1a134] mt-1 shrink-0" size={20} />
                        <p className="text-sm font-bold text-slate-600">Income tax advisory services are provided through expert tax consultants with in-depth legal, accounting, and regulatory knowledge.</p>
                    </div>
                </div>
            </div>

            {/* Value Added by Vyombiz */}
            <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-black text-[#072b47] mb-6">How Vyombiz’s Income Tax Advisory Services will Add Value to Your Business?</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-slate-50 p-6 rounded-3xl group hover:bg-[#072b47] transition-all">
                        <h4 className="font-black text-[#1e40af] text-xl mb-3 group-hover:text-white transition-colors">Tax Planning & Strategy</h4>
                        <p className="text-sm font-bold text-slate-600 group-hover:text-blue-100 transition-colors">Customize your tax planning strategies as per your individual business needs to reduce your tax liability with strict adherence to tax laws.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl group hover:bg-[#072b47] transition-all">
                        <h4 className="font-black text-[#1e40af] text-xl mb-3 group-hover:text-white transition-colors">Compliance</h4>
                        <p className="text-sm font-bold text-slate-600 group-hover:text-blue-100 transition-colors">Get timely updates on the latest tax law news to ensure timely compliance with updated legislation and regulations.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl group hover:bg-[#072b47] transition-all">
                        <h4 className="font-black text-[#1e40af] text-xl mb-3 group-hover:text-white transition-colors">Tax Return Filing</h4>
                        <p className="text-sm font-bold text-slate-600 group-hover:text-blue-100 transition-colors">Fulfill your income tax return obligations from the comfort of your phone — we’re serving across more than 100 cities.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl group hover:bg-[#072b47] transition-all">
                        <h4 className="font-black text-[#1e40af] text-xl mb-3 group-hover:text-white transition-colors">Legal Support & Assessments</h4>
                        <p className="text-sm font-bold text-slate-600 group-hover:text-blue-100 transition-colors">Reply to tax notices and queries with ease — our tax consultants and lawyers will provide end-to-end support in case of an audit.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl group hover:bg-[#072b47] transition-all">
                        <h4 className="font-black text-[#1e40af] text-xl mb-3 group-hover:text-white transition-colors">Computation & Reporting</h4>
                        <p className="text-sm font-bold text-slate-600 group-hover:text-blue-100 transition-colors">Understand your tax liability after deductions and exemptions through our CAs and CFO experts with 15+ years of experience.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl group hover:bg-[#072b47] transition-all">
                        <h4 className="font-black text-[#1e40af] text-xl mb-3 group-hover:text-white transition-colors">TDS/TCS Advisory</h4>
                        <p className="text-sm font-bold text-slate-600 group-hover:text-blue-100 transition-colors">Periodic calculation and reporting of Tax Deducted at Source (TDS). Get reconciliation of TDS statements at a 40% reduced cost.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl group hover:bg-[#072b47] transition-all">
                        <h4 className="font-black text-[#1e40af] text-xl mb-3 group-hover:text-white transition-colors">Advance Tax Assessments</h4>
                        <p className="text-sm font-bold text-slate-600 group-hover:text-blue-100 transition-colors">Complete computation, and payment support for advance income tax instalments — never miss a deadline via our automated reminders.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl group hover:bg-[#072b47] transition-all">
                        <h4 className="font-black text-[#1e40af] text-xl mb-3 group-hover:text-white transition-colors">Capital Gains Advisory</h4>
                        <p className="text-sm font-bold text-slate-600 group-hover:text-blue-100 transition-colors">Cost-effective solutions for reinvestments of your capital gains through the sale of properties, and assets to minimize your tax implications.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl group hover:bg-[#072b47] transition-all">
                        <h4 className="font-black text-[#1e40af] text-xl mb-3 group-hover:text-white transition-colors">Global Tax Support</h4>
                        <p className="text-sm font-bold text-slate-600 group-hover:text-blue-100 transition-colors">For companies with international jurisdictions, we provide tailored solutions on cross-border transactions through DTAs.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl group hover:bg-[#072b47] transition-all">
                        <h4 className="font-black text-[#1e40af] text-xl mb-3 group-hover:text-white transition-colors">Business Restructuring</h4>
                        <p className="text-sm font-bold text-slate-600 group-hover:text-blue-100 transition-colors">If you’re thinking of a business merger or acquisition, then we’re your best choice for careful tax planning evaluation.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl group hover:bg-[#072b47] transition-all lg:col-span-2">
                        <h4 className="font-black text-[#1e40af] text-xl mb-3 group-hover:text-white transition-colors">Litigation Support</h4>
                        <p className="text-sm font-bold text-slate-600 group-hover:text-blue-100 transition-colors">We help our clients with documentation, litigation support, and representation support before authorities like the Commissioner of Income Tax Appeals (CIT) A, Income Tax Appellant Tribunal (ITAT), and High Courts.</p>
                    </div>
                </div>
            </div>

        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Income Tax"
                heroTitleSuffix="Advisory"
                heroSubtitle="Expert Tax Planning & Compliance Strategies"
                heroDescription="Ensure optimum cash-flow and minimal tax liabilities using Vyombiz’s highly adept income tax consultants. We evaluate your financials, leverage exemptions correctly, and guide you away from compliance pitfalls."
                whatsIncludedList={[
                    "Optimum Tax Liability Computations",
                    "Advanced IT Representations",
                    "Assistance on Asset Reinvestments",
                    "Complete Legislative Security"
                ]}
                stats={[
                    { count: "10,000+", label: "Businesses Advised", icon: <Users size={20} /> },
                    { count: "10+ Yrs", label: "Expertise Track", icon: <Briefcase size={20} /> },
                    { count: "100+", label: "Cities Covered", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Tax Optimization Solutions",
                    title: "Income Tax Advisory Services –",
                    highlightTitle: "An Overview",
                    description: [
                        "Income tax advisory services consist of effective tax planning that helps businesses and entrepreneurs manage their tax liabilities and optimize income generation through compliance and sound financial management.",
                        "With Vyombiz’s expertise, you can manage tax planning, respond to regulatory notices, navigate mergers and acquisitions, ensure tax compliance, receive representation support, process advance tax payments, plan TDS reporting, and obtain guidance on international taxation.",
                        "Save your money through our Income tax advisory solutions and access your financial goals through careful strategic planning with Vyombiz."
                    ],
                    whyIdealTitle: "Who is an Income Tax Consultant?",
                    whyIdealList: [
                        { title: "Expertise", desc: "A professional mapping out tax accounting and law protocols specifically." },
                        { title: "Objective", desc: "Lawfully reduce tax liabilities via optimized tax solutions and deductions." },
                        { title: "Actions", desc: "Helps in accurate record keeping, compliance management, and strategic reporting." },
                        { title: "Vyombiz Impact", desc: "Our proven consultants protect and streamline your financial health entirely." }
                    ]
                }}
                advantages={{
                    title: "What are the Key Benefits of Income Tax Advisory?",
                    subtitle: "Empower your cash-flow capabilities and eliminate structural tax risks immediately.",
                    list: [
                        { title: "Reduction of Tax Liability", desc: "Understand the value of deductions and exemptions, you can significantly reduce your taxable income during computation." },
                        { title: "Compliance", desc: "Helps businesses in incorporating new changes into their policies and tax returns seamlessly." },
                        { title: "Business Expansion", desc: "Develop tailored solutions to support your company’s business expansion plans in terms of investments and restructuring." },
                        { title: "Cost-Effective", desc: "By outsourcing income tax advisory services, your company can save lakhs in salary by not hiring heavy in-house teams." },
                        { title: "Time Savings", desc: "Focus on core business activities and leave the tedious and boring compliance tasks to our outsourced experts." },
                        { title: "Tax Representation", desc: "Provide documentation and representation to ensure a favourable resolution through fair proceedings during audits." },
                        { title: "Mergers and Acquisitions", desc: "Provides tailored strategic planning to manage tax parameters related to business expansion, sale of assets and investments." },
                        { title: "Optimized Financial Health", desc: "Detecting potential issues and risks concerning cash-flow from your financial statements accurately." }
                    ]
                }}
                eligibility={{
                    title: "Who Must Obtain Income Tax Advisory Services?",
                    subtitle: "Virtually every entity running financial transactions requires reliable advisory.",
                    list: [
                        { title: "LLPs", desc: "Limited liability partnerships structuring their initial business and compliance routes." },
                        { title: "Pvt & Public Limited", desc: "Mandatory corporate adherence involving intricate asset and property scaling." },
                        { title: "Startups", desc: "To utilize maximum available seed funds without drawing early tax missteps." },
                        { title: "SMEs & MSMEs", desc: "Micro, small, and medium enterprises requiring strict yet affordable compliance paths." },
                        { title: "Partnerships", desc: "General and limited partnerships distributing assets securely." }
                    ]
                }}
                documents={{
                    title: "Documents to Avail Tax Advisory",
                    description: "Accurate paperwork ensures we capture every beneficial metric for our advisory overview.",
                    list: [
                        "Permanent Account Number (PAN) of Client & Entity",
                        "A Copy of the Company Registration Agreement",
                        "Registered Business Address Proof",
                        "A Copy of the Partnership Deed (If Applicable)",
                        "Bank Account Statements",
                        "Copies of Balance Sheets, P&L, Expense Reports",
                        "Cash-Flow Statements & Schedules of Depreciations",
                        "Proof of Investments to Claim Deductions (80C & 80D)",
                        "Details on Capital Gains, and Related Assets",
                        "Goods and Services Tax Identification (GSTIN)",
                        "Tax Deduction and Collection Account Number (TAN)",
                        "Trial Balance, Ledgers, Service Agreements"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-9dcd0b1760a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "How to Get Tax Advisory Services",
                    subtitle: "Secure expert financial management via vyombiz in 5 simple steps.",
                    steps: [
                        { step: "01", title: "Contact Us", desc: "Discuss your business activity and company structure through the 30-minute free consultation with our associate." },
                        { step: "02", title: "Sign Up with Us", desc: "Enroll for the service, complete fee payment, and get assigned an individual case manager to manage your requests." },
                        { step: "03", title: "Submit Documents", desc: "Submit all fundamental onboarding paperwork like PAN, Aadhaar, Balance Sheets, and Resolutions." },
                        { step: "04", title: "Start Of the Service", desc: "Our consultants will analyze your financial situation and provide an optimum solution to minimize your tax liability legally." },
                        { step: "05", title: "Constant Compliance", desc: "Our compliance associates will send you regular updates to ensure continuous adherence with applicable laws." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Trust Vyombiz for Income Tax Advisory Services?",
                    subtitle: "Unparalleled taxation insight backed by robust legal guarantees.",
                    list: [
                        { title: "Customized Solutions", desc: "We provide tailored structures as per your specific business goals, ensuring regulatory compliance." },
                        { title: "10+ Years of Expertise", desc: "Our Chartered Accountants possess proven experience of more than 10 years in the entire accounting industry." },
                        { title: "Updated Knowledge", desc: "Our associates continuously monitor legislation and regulatory norms to craft hyper-accurate tax plans." },
                        { title: "Proven Track Record", desc: "We have successfully helped over 10,000 companies through our advanced tax advisory services globally." },
                        { title: "No Hidden Charges", desc: "Enjoy a completely transparent and upfront pricing model without any stressful hidden costs." },
                        { title: "24/7 Support", desc: "Our client support executives afford you uninterrupted communication cycles resolving queries dynamically." },
                        { title: "End-To-End Support", desc: "From tax filing to broader GST and investment strategies, we are a holistic 360° service provider." }
                    ]
                }}
                postCompliance={CustomExtraSections}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Have a look at the answers to the most asked questions on Income Tax Advisory."
                faqs={faqs}
            />

        </div>
    );
};

export default IncomeTaxAdvisory;
