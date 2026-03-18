import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare, HandCoins } from "lucide-react";
import InsideNavbar from "../../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Legal Services" },
    { id: "process", label: "Process & Docs" },
    { id: "why-us", label: "Why Us" },
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
    <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 transition-all hover:shadow-md">
        <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] flex items-center justify-center mb-4">
            <span className="text-[#005a9c]">{icon}</span>
        </div>
        <h4 className="text-[16px] font-bold text-[#072b47] mb-2">{title}</h4>
        <div className="text-sm text-slate-600 leading-relaxed">{children}</div>
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
const MoneyRecoveryLawyer = () => {
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
            question: "How long does a money recovery case take?",
            answer: "The duration depends on factor such as case complexity and court procedures. Some cases resolve quickly through negotiation, while others proceed to litigation."
        },
        {
            question: "Can businesses recover unpaid invoices legally?",
            answer: "Yes. Businesses can initiate legal proceedings to recover unpaid invoices by issuing legal notices and filing recovery suits if necessary."
        },
        {
            question: "Is a legal notice necessary before filing a recovery case?",
            answer: "While not always mandatory, issuing a legal notice is a standard first step and often prompts the debtor to settle the payment."
        },
        {
            question: "What if the debtor ignores the legal notice?",
            answer: "If the debtor fails to respond, lawyers can proceed with filing a recovery suit in the appropriate court."
        },
        {
            question: "Can individuals also file money recovery cases?",
            answer: "Yes. Individuals can file recovery cases for unpaid loans, personal transactions, or financial agreements."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Money Recovery"
                heroTitleSuffix="Lawyers"
                heroDescription="Recover Your Money Legally – Fast, Strategic, and Effective. Facing unpaid dues, delayed payments, or financial disputes? Our experienced lawyers help recover outstanding payments safely through structured support."
                stats={[
                    { count: "Expert", label: "Consultation" },
                    { count: "98%", label: "Recovery Rate" },
                    { count: "24/7", label: "Legal Advice" }
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
                    <SectionHeading>Professional Money Recovery Lawyers</SectionHeading>
                    <BodyText>
                        Unpaid invoices, breached contracts, and delayed payments can seriously impact cash flow and business stability. Recovering such dues often requires a strategic legal approach backed by strong documentation.
                    </BodyText>
                    <BodyText>
                        Money Recovery Lawyers specialize in recovering pending payments, enforcing contractual obligations, and pursuing legal remedies against debtors. From issuing formal legal notices to filing recovery suits and representing clients in court proceedings, they help ensure your financial rights are protected.
                    </BodyText>
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services</SectionLabel>
                    <SectionHeading>Legal Solutions Offered</SectionHeading>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                        <InfoCard icon={<FileText size={18} />} title="Legal Notice">
                            Formal demand for payment issued within a specified timeframe to settle without court.
                        </InfoCard>
                        <InfoCard icon={<Scale size={18} />} title="Recovery Suits">
                            Initiating civil suits to claim outstanding amounts legally when notices are ignored.
                        </InfoCard>
                        <InfoCard icon={<HandCoins size={18} />} title="Negotiation">
                            Resolving disputes through structured discussions for faster out-of-court settlements.
                        </InfoCard>
                        <InfoCard icon={<AlertCircle size={18} />} title="Cheque Bounce">
                            Proceedings under applicable laws for payments involving dishonoured cheques.
                        </InfoCard>
                        <InfoCard icon={<Shield size={18} />} title="Contractual Rights">
                            Enforcing payment terms and rights when disputes arise from breach of contract.
                        </InfoCard>
                        <InfoCard icon={<Briefcase size={18} />} title="Business Recovery">
                            Expert support for outstanding invoice disputes and vendor payment recovery.
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 3 · PROCESS */}
                <section id="process" ref={setRef("process")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>The Workflow</SectionLabel>
                    <SectionHeading>Our Money Recovery Legal Process</SectionHeading>
                    <div className="space-y-6 my-8">
                        {[
                            { title: "Case Evaluation", desc: "Reviewing contracts, invoices, and communication records related to the dispute." },
                            { title: "Legal Notice", desc: "Issuing a structured demand notice to the debtor with a defined timeline." },
                            { title: "Response & Negotiation", desc: "Handling debtor responses and leading settlement discussions." },
                            { title: "Filing Suit", desc: "Initiating formal legal proceedings if payment remains outstanding." },
                            { title: "Court Representation", desc: "Full legal representation throughout the litigation until resolution." },
                        ].map((step, idx) => (
                            <div key={idx} className="flex gap-6 items-start">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f8fbff] text-[#005a9c] border-2 border-[#d0e3f5] flex items-center justify-center font-bold">
                                    {idx + 1}
                                </span>
                                <div>
                                    <h4 className="text-[17px] font-bold text-[#072b47] mb-1">{step.title}</h4>
                                    <p className="text-slate-600 text-[15px]">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Divider />

                    <SubHeading>Documents Required</SubHeading>
                    <BulletList items={[
                        "Contracts or agreements establishing terms.",
                        "Unpaid invoices or official bills.",
                        "Payment receipts and bank transaction records.",
                        "Communication logs (emails, messages, letters).",
                        "Dishonoured cheque details (if applicable)."
                    ]} />
                </section>

                {/* SECTION 4 · WHY US */}
                <section id="why-us" ref={setRef("why-us")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Pride</SectionLabel>
                    <SectionHeading>Why Choose Vyombiz</SectionHeading>
                    <BodyText>Choosing the right legal platform can significantly improve the success of your recovery efforts.</BodyText>
                    <BulletList items={[
                        "Access to experienced recovery lawyers nationwide.",
                        "Structured legal approach tailored to financial disputes.",
                        "Transparent communication throughout the recovery lifecycle.",
                        "Dedicated support for businesses, startups, and individuals."
                    ]} />
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Recover Your Dues Now</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Don't let unpaid invoices drain your cash flow. Take professional legal action today.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg">Talk to a Recovery Expert</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MoneyRecoveryLawyer;
