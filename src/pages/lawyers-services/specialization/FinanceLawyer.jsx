import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare } from "lucide-react";
import InsideNavbar from "../../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Services" },
    { id: "who-needs-it", label: "Who Needs It" },
    { id: "why-vyombiz", label: "Why Vyombiz" },
    { id: "faq", label: "FAQs" },
];

/* ─────────────────────────────────────────────────────────
   SHARED TYPOGRAPHY PRIMITIVES
───────────────────────────────────────────────────────── */
const SectionHeading = ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-[#072b47] mb-5 leading-snug tracking-tight">
        {children}
    </h2>
);

const SubHeading = ({ children }) => (
    <h3 className="text-lg md:text-xl font-semibold text-[#072b47] mt-10 mb-3 leading-snug">
        {children}
    </h3>
);

const BodyText = ({ children }) => (
    <p className="text-[15px] md:text-[16px] text-slate-600 leading-[1.85] mb-4 font-normal">
        {children}
    </p>
);

const BulletList = ({ items }) => (
    <ul className="space-y-2.5 my-4 pl-1">
        {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
                <span className="mt-[6px] shrink-0 w-[6px] h-[6px] rounded-full bg-[#005a9c]" />
                <span className="text-[15px] text-slate-600 leading-[1.8]">{item}</span>
            </li>
        ))}
    </ul>
);

const InfoCard = ({ icon, title, children }) => (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 mb-5">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#e8f1fb] flex items-center justify-center shrink-0">
                <span className="text-[#005a9c]">{icon}</span>
            </div>
            <h4 className="text-[15px] font-semibold text-[#072b47]">{title}</h4>
        </div>
        <div className="pl-12">{children}</div>
    </div>
);

const Divider = () => (
    <hr className="my-10 border-slate-100" />
);

const SectionLabel = ({ children }) => (
    <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#005a9c] bg-[#e8f1fb] px-3 py-1 rounded-full mb-4">
        {children}
    </span>
);

/* ─────────────────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────────────────── */
const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden mb-3">
            <button
                onClick={() => setOpen(v => !v)}
                className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left bg-white hover:bg-slate-50 transition-colors"
            >
                <span className="text-[15px] md:text-[16px] font-semibold text-[#072b47] pr-6 leading-snug">
                    {question}
                </span>
                <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            {open && (
                <div className="px-5 md:px-6 pb-5 bg-white border-t border-slate-100">
                    <p className="text-[15px] text-slate-600 leading-[1.85] pt-4">{answer}</p>
                </div>
            )}
        </div>
    );
};

/* ─────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────── */
const FinanceLawyer = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const sectionRefs = useRef({});
    const isClickScrolling = useRef(false);
    const clickScrollTimer = useRef(null);

    const setRef = useCallback((id) => (el) => {
        if (el) sectionRefs.current[id] = el;
    }, []);

    useEffect(() => {
        const observers = [];
        const NAVBAR_HEIGHT = 115;

        TABS.forEach(({ id }) => {
            const el = sectionRefs.current[id];
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (isClickScrolling.current) return;
                    if (entry.isIntersecting) {
                        setActiveTab(id);
                    }
                },
                {
                    rootMargin: `-${NAVBAR_HEIGHT}px 0px -45% 0px`,
                    threshold: 0,
                }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    const handleTabClick = useCallback((id) => {
        const el = sectionRefs.current[id];
        if (!el) return;

        isClickScrolling.current = true;
        clearTimeout(clickScrollTimer.current);

        const OFFSET = 115;
        const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
        setActiveTab(id);

        clickScrollTimer.current = setTimeout(() => {
            isClickScrolling.current = false;
        }, 900);
    }, []);

    const faqs = [
        {
            question: "What is a finance lawyer?",
            answer: "A finance lawyer is a legal professional who specializes in financial transactions, investment agreements, banking regulations, and corporate finance law."
        },
        {
            question: "When should a business hire a finance lawyer?",
            answer: "Businesses should consult a finance lawyer when raising funds, negotiating loans, drafting investment agreements, or dealing with financial disputes."
        },
        {
            question: "Can finance lawyers help with startup funding agreements?",
            answer: "Yes. Finance lawyers assist startups in structuring funding agreements, reviewing investor terms, and protecting founder interests."
        },
        {
            question: "Do finance lawyers handle debt restructuring?",
            answer: "Yes. They help businesses renegotiate debt terms and restructure financial liabilities to maintain financial stability."
        },
        {
            question: "Are financial agreements legally necessary?",
            answer: "Yes. Properly drafted financial agreements ensure that all parties involved are legally protected and obligations are clearly defined."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Finance"
                heroTitleSuffix="Lawyers"
                heroDescription="From fundraising to financial compliance, expert legal guidance is critical in every financial decision your business makes. Work with experienced finance lawyers who help you structure deals, manage risk, and stay compliant with financial regulations."
                stats={[
                    { count: "Expert", label: "Legal Assistance" },
                    { count: "Risk", label: "Management" },
                    { count: "Secure", label: "Transactions" }
                ]}
                bgImage="/lawyer-service-hero-section-img/hero-section-bg-img.png"
            />

            {/* STICKY INSIDE NAVBAR */}
            <InsideNavbar
                tabs={TABS}
                activeTab={activeTab}
                onTabClick={handleTabClick}
                topOffset={64}
                centered={true}
            />

            {/* CONTENT BODY */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-6 pb-24">
                
                {/* SECTION 1 · OVERVIEW */}
                <section id="overview" ref={setRef("overview")} className="pt-14 pb-10 scroll-mt-[115px]">
                    <SectionLabel>Overview</SectionLabel>
                    <SectionHeading>Why Your Business Needs a Finance Lawyer</SectionHeading>
                    <BodyText>
                        Financial decisions in business are rarely simple. Whether a company is raising funds, entering investment agreements, negotiating loans, or managing financial disputes, every step involves legal complexities.
                    </BodyText>
                    <BodyText>
                        A finance lawyer ensures that financial transactions are structured legally, risks are minimized, and agreements protect the interests of the business.
                    </BodyText>
                    <BodyText>
                        Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses can connect with experienced finance lawyers who understand the legal framework surrounding corporate finance, investment laws, banking regulations, and financial compliance. With the right legal support, businesses can confidently manage financial operations while avoiding costly legal mistakes.
                    </BodyText>

                    <Divider />

                    <SubHeading>What Does a Finance Lawyer Do?</SubHeading>
                    <BodyText>
                        Finance lawyers specialize in handling the legal aspects of financial transactions and regulatory compliance. They assist businesses, startups, investors, and financial institutions in structuring secure and legally compliant financial deals. Key responsibilities include:
                    </BodyText>

                    <div className="space-y-4 my-6">
                        <InfoCard icon={<Scale size={16} />} title="Financial Transaction Structuring">
                            <BodyText>Finance lawyers help structure financial agreements such as loans, investments, venture capital funding, and financial partnerships.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<FileText size={16} />} title="Drafting Financial Agreements">
                            <BodyText>They prepare and review legally binding agreements including loan agreements, investment contracts, shareholder agreements, and financial partnership documents.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Shield size={16} />} title="Regulatory Compliance">
                            <BodyText>Finance lawyers ensure that companies comply with applicable financial regulations, RBI guidelines, SEBI regulations, and corporate governance standards.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<AlertCircle size={16} />} title="Risk Assessment">
                            <BodyText>Legal experts analyze financial transactions to identify legal risks and provide strategies to mitigate them.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Gavel size={16} />} title="Financial Dispute Resolution">
                            <BodyText>In cases of disputes involving financial agreements, debt recovery, or investment conflicts, finance lawyers represent businesses and provide legal resolution strategies.</BodyText>
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services</SectionLabel>
                    <SectionHeading>Finance Lawyer Services Offered</SectionHeading>
                    <BodyText>
                        Businesses require legal expertise across multiple financial matters. The finance lawyers associated with Vyombiz managed by Clink Consultancy Services Private Limited provide support across a wide range of financial legal services:
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Corporate Finance Advisory</h4>
                            <p className="text-sm text-slate-600">Legal guidance for companies on managing financial structures, capital strategies, and investment frameworks.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Loan Agreement Drafting</h4>
                            <p className="text-sm text-slate-600">Professional drafting and review of loan agreements to protect the interests of lenders or borrowers.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Venture Capital Investments</h4>
                            <p className="text-sm text-slate-600">Legal structuring and documentation for venture capital investments, angel investments, and funding rounds.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Debt Restructuring</h4>
                            <p className="text-sm text-slate-600">Assistance in renegotiating debt obligations, restructuring financial liabilities, and managing repayment structures.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Financial Compliance</h4>
                            <p className="text-sm text-slate-600">Ensuring that companies adhere to applicable financial regulations and industry guidelines.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Dispute Resolution</h4>
                            <p className="text-sm text-slate-600">Legal support for resolving disputes related to loans, investments, financial contracts, and corporate finance matters.</p>
                        </div>
                    </div>

                    <Divider />

                    <SubHeading>Key Financial Legal Areas Covered</SubHeading>
                    <BulletList items={[
                        "Corporate Finance Law",
                        "Investment & Venture Capital Law",
                        "Banking & Lending Regulations",
                        "Financial Risk Management",
                        "Debt Recovery & Restructuring",
                        "Financial Contract Drafting",
                        "Regulatory Compliance"
                    ]} />
                    <BodyText>
                        By working with finance lawyers through Vyombiz managed by Clink Consultancy Services Private Limited, businesses can navigate these complex legal areas with clarity and confidence.
                    </BodyText>
                </section>

                {/* SECTION 3 · WHO NEEDS IT */}
                <section id="who-needs-it" ref={setRef("who-needs-it")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Target Audience</SectionLabel>
                    <SectionHeading>Who Should Hire a Finance Lawyer?</SectionHeading>
                    <BodyText>
                        Finance lawyers are essential for businesses and individuals dealing with complex financial transactions.
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <InfoCard icon={<Building2 size={16} />} title="Startups">
                            <BodyText>Startups raising funds from angel investors or venture capitalists need legal guidance to structure investment agreements.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Users size={16} />} title="Growing Businesses">
                            <BodyText>Companies expanding operations often require financing through loans, investors, or partnerships.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Landmark size={16} />} title="Investors">
                            <BodyText>Investors rely on finance lawyers to ensure that investment contracts safeguard their financial interests.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Briefcase size={16} />} title="Corporations & Financial Institutions">
                            <BodyText>Large corporations and banks require continuous legal oversight for lending agreements, compliance, and transaction management.</BodyText>
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 4 · WHY VYOMBIZ */}
                <section id="why-vyombiz" ref={setRef("why-vyombiz")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Edge</SectionLabel>
                    <SectionHeading>Why Choose Vyombiz for Finance Lawyer Services</SectionHeading>
                    <BodyText>
                        Legal expertise combined with business understanding is essential in financial matters. The finance lawyers connected through Vyombiz bring practical experience in handling financial transactions for businesses of all sizes.
                    </BodyText>

                    <BulletList items={[
                        "Experienced Legal Professionals: Work with lawyers experienced in corporate finance and financial law.",
                        "Business-Focused Legal Solutions: Legal strategies designed to support business growth and financial stability.",
                        "Transparent Legal Support: Clear communication, structured legal processes, and transparent consultation.",
                        "End-to-End Financial Legal Assistance: From drafting agreements to resolving disputes, businesses receive comprehensive legal support."
                    ]} />

                    <Divider />

                    <SubHeading>How the Process Works</SubHeading>
                    <BodyText>
                        Getting legal assistance for financial matters is simple and structured:
                    </BodyText>
                    
                    <div className="space-y-6 my-8">
                        {[
                            { step: "01", title: "Submit Your Requirement", desc: "Tell us about your financial legal requirement or transaction." },
                            { step: "02", title: "Consultation with Finance Lawyer", desc: "Our legal experts evaluate your financial situation and recommend the right legal strategy." },
                            { step: "03", title: "Documentation & Legal Structuring", desc: "Lawyers draft, review, and structure the required financial agreements." },
                            { step: "04", title: "Compliance & Legal Protection", desc: "Ensure all financial transactions remain legally compliant and secure." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-6 items-start group">
                                <span className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-200 text-[#005a9c] flex items-center justify-center font-bold group-hover:bg-[#005a9c] group-hover:text-white group-hover:border-[#005a9c] transition-all duration-300">
                                    {item.step}
                                </span>
                                <div>
                                    <h4 className="text-[16px] font-bold text-[#072b47] mb-1">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 5 · FAQs */}
                <section id="faq" ref={setRef("faq")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>FAQs</SectionLabel>
                    <SectionHeading>Frequently Asked Questions</SectionHeading>
                    <div className="mt-8">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <div className="mt-20 bg-[#072b47] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Make Financial Decisions with Legal Confidence</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Financial transactions shape the future of your business. Ensure every agreement, investment, and financial decision is legally secure with expert finance lawyers.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">Consult a Finance Lawyer Today</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FinanceLawyer;
