import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare } from "lucide-react";
import InsideNavbar from "../../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "reasons", label: "Reasons & Process" },
    { id: "penalties", label: "Penalties & Docs" },
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
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 mb-5">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#e8f1fb] flex items-center justify-center shrink-0">
                <span className="text-yellow-400">{icon}</span>
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
    <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-yellow-400 bg-[#e8f1fb] px-3 py-1 rounded-full mb-4">
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
const ChequeBounceLawyer = () => {
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
            question: "What is Section 138 of the NI Act?",
            answer: "Section 138 of the Negotiable Instruments Act, 1881, deals with the criminal liability of the drawer of a cheque that has been dishonoured due to insufficient funds or other reasons specified."
        },
        {
            question: "How long is a cheque valid for in India?",
            answer: "A cheque is generally valid for 3 months from the date of issue mentioned on it."
        },
        {
            question: "What should I do immediately after my cheque bounces?",
            answer: "You should obtain the 'Cheque Return Memo' from the bank and consult a lawyer to issue a formal legal notice to the drawer within 30 days."
        },
        {
            question: "Can I file a case without sending a legal notice?",
            answer: "No. Sending a legal demand notice within 30 days of receiving the return memo is a mandatory statutory requirement before filing a criminal complaint."
        },
        {
            question: "What are the penalties for cheque bounce?",
            answer: "The court can impose imprisonment for up to 2 years, or a fine which may extend to twice the amount of the cheque, or both."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Cheque Bounce"
                heroTitleSuffix="Lawyers"
                heroDescription="A bounced cheque is more than a financial inconvenience — it is a legal offence. Get professional legal support to send notices, file cases, and recover your money quickly. Connect with an experienced Cheque Bounce Lawyer today."
                stats={[
                    { count: "10,000+", label: "Notices Sent" },
                    { count: "92%", label: "Recovery Rate" },
                    { count: "24-48 hrs", label: "Legal Action" }
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
                    <SectionLabel>Legal Overview</SectionLabel>
                    <SectionHeading>What is a Cheque Bounce Case?</SectionHeading>
                    <BodyText>
                        A cheque bounce occurs when a bank refuses to process a cheque due to insufficient funds, signature mismatch, account closure, or other banking issues. In India, cheque bounce cases are governed by Section 138 of the Negotiable Instruments Act, 1881, making it a criminal offence.
                    </BodyText>
                    <BodyText>
                        When a cheque issued towards repayment or payment fails to clear, the payee has the legal right to initiate proceedings against the issuer. This usually begins with sending a legal notice demanding payment within 15 days of receiving the bank’s cheque return memo.
                    </BodyText>
                    <BodyText>
                        Businesses frequently face cheque bounce disputes during transactions, vendor payments, loan repayments, or service agreements. With proper legal guidance, you can enforce your rights and recover the amount legally.
                    </BodyText>
                    <BodyText>
                        Professional legal assistance from platforms like Vyombiz managed by Clink Consultancy Services Private Limited ensures that the process is handled correctly and within statutory timelines.
                    </BodyText>

                    <Divider />

                    <SubHeading>Why You Should Hire a Cheque Bounce Lawyer</SubHeading>
                    <BodyText>
                        Cheque bounce cases involve strict legal procedures and timelines. Any delay or mistake in documentation can weaken your case. An experienced lawyer can help you:
                    </BodyText>
                    <BulletList items={[
                        "Draft and send legally valid demand notices",
                        "Ensure compliance with Section 138 timelines",
                        "File complaints in the appropriate court",
                        "Represent you during hearings and negotiations",
                        "Improve chances of quick recovery or settlement"
                    ]} />
                    <BodyText>
                        Businesses and individuals often rely on Vyombiz managed by Clink Consultancy Services Private Limited to connect with experienced legal professionals who handle cheque dishonour matters efficiently.
                    </BodyText>
                </section>

                {/* SECTION 2 · REASONS & PROCESS */}
                <section id="reasons" ref={setRef("reasons")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Reasons & Process</SectionLabel>
                    <SectionHeading>Common Reasons for Cheque Bounce</SectionHeading>
                    <BodyText>
                        Understanding why cheques bounce helps identify the legal path forward.
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <InfoCard icon={<AlertCircle size={16} />} title="Insufficient Funds">
                            <p className="text-sm text-slate-600">The most common reason where the issuer does not have enough balance in the account.</p>
                        </InfoCard>
                        <InfoCard icon={<FileText size={16} />} title="Signature Mismatch">
                            <p className="text-sm text-slate-600">If the signature on the cheque does not match bank records, the cheque may be rejected.</p>
                        </InfoCard>
                        <InfoCard icon={<Building2 size={16} />} title="Account Closed">
                            <p className="text-sm text-slate-600">If the account linked to the cheque is already closed, the bank will return the cheque unpaid.</p>
                        </InfoCard>
                        <InfoCard icon={<BookOpen size={16} />} title="Post-dated Issues">
                            <p className="text-sm text-slate-600">Depositing a cheque before the mentioned date can also lead to rejection.</p>
                        </InfoCard>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 my-8">
                        <p className="text-[#072b47] font-semibold leading-relaxed">
                            In many such cases, the issuer may still be held liable under Section 138 depending on the circumstances.
                        </p>
                    </div>

                    <Divider />

                    <SubHeading>Legal Process for Filing a Cheque Bounce Case</SubHeading>
                    <BodyText>A cheque bounce dispute follows a structured legal procedure.</BodyText>

                    <div className="space-y-6 my-8">
                        {[
                            { title: "Step 1: Cheque Return Memo", desc: "The bank issues a cheque return memo stating the reason for dishonour." },
                            { title: "Step 2: Legal Notice", desc: "A legal demand notice must be sent to the issuer within 30 days of receiving the cheque return memo." },
                            { title: "Step 3: Waiting Period", desc: "The issuer gets 15 days to make the payment after receiving the notice." },
                            { title: "Step 4: Filing the Case", desc: "If payment is not made, a complaint can be filed before the Judicial Magistrate Court within 30 days." },
                            { title: "Step 5: Court Proceedings", desc: "The court reviews the complaint, summons the accused, and conducts hearings before deciding the case." },
                        ].map((step, idx) => (
                            <div key={idx} className="flex gap-6 items-start group">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e8f1fb] text-yellow-400 flex items-center justify-center font-bold text-sm">
                                    {idx + 1}
                                </span>
                                <div>
                                    <h4 className="text-[16px] font-bold text-[#072b47] mb-1">{step.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <BodyText>
                        Handling these steps correctly is crucial, and legal experts associated with Vyombiz managed by Clink Consultancy Services Private Limited assist clients through the entire litigation process.
                    </BodyText>
                </section>

                {/* SECTION 3 · PENALTIES & DOCS */}
                <section id="penalties" ref={setRef("penalties")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Compliance</SectionLabel>
                    <SectionHeading>Penalties for Cheque Bounce in India</SectionHeading>
                    <BodyText>If the court finds the issuer guilty under Section 138 of the Negotiable Instruments Act, the following penalties may apply:</BodyText>
                    <BulletList items={[
                        "Imprisonment for up to 2 years",
                        "Fine up to twice the cheque amount",
                        "Compensation to the complainant",
                        "Court-directed settlement or recovery"
                    ]} />
                    <BodyText>Because cheque bounce cases can result in criminal liability, legal representation becomes essential for both complainants and defendants.</BodyText>

                    <Divider />

                    <SubHeading>Documents Required for Case Filing</SubHeading>
                    <BodyText>To initiate legal proceedings, the following documents are generally required:</BodyText>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-[#072b47] mb-2 text-sm">Primary Documents</h4>
                            <BulletList items={[
                                "Original dishonoured cheque",
                                "Bank cheque return memo",
                                "Copy of the legal notice sent"
                            ]} />
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-[#072b47] mb-2 text-sm">Supporting Evidence</h4>
                            <BulletList items={[
                                "Proof of notice delivery",
                                "Payment agreements",
                                "Identity proof of complainant"
                            ]} />
                        </div>
                    </div>
                </section>

                {/* SECTION 4 · WHY US */}
                <section id="why-us" ref={setRef("why-us")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Platform</SectionLabel>
                    <SectionHeading>How Vyombiz Helps in Cheque Bounce Cases</SectionHeading>
                    <BodyText>
                        Resolving cheque dishonour disputes requires legal expertise and proper documentation. With Vyombiz managed by Clink Consultancy Services Private Limited, you can access:
                    </BodyText>
                    <div className="grid md:grid-cols-3 gap-6 my-10">
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <Users size={24} className="text-yellow-400" />
                            </div>
                            <h4 className="text-[17px] font-bold text-[#072b47] mb-3">Expert Lawyers</h4>
                            <p className="text-slate-600 text-[13px] leading-relaxed">Connect with specialized cheque bounce lawyers who understand complex NI Act procedures.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <FileText size={24} className="text-yellow-400" />
                            </div>
                            <h4 className="text-[17px] font-bold text-[#072b47] mb-3">Accurate Drafting</h4>
                            <p className="text-slate-600 text-[13px] leading-relaxed">Precise legal notice drafting to ensure your demand notice is legally sound and watertight.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <Shield size={24} className="text-yellow-400" />
                            </div>
                            <h4 className="text-[17px] font-bold text-[#072b47] mb-3">Court Support</h4>
                            <p className="text-slate-600 text-[13px] leading-relaxed">End-to-end support for case filing and reliable representation in jurisdictional courts.</p>
                        </div>
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Consult a Cheque Bounce Lawyer Today</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Cheque bounce disputes can affect both personal and business finances. Acting quickly ensures your legal rights are protected. Consult experienced legal professionals through Vyombiz and get guidance on the best legal strategy for your case.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">Speak to a Lawyer Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChequeBounceLawyer;

