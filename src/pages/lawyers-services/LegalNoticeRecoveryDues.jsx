import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel } from "lucide-react";
import InsideNavbar from "../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "benefits", label: "Benefits" },
    { id: "procedure", label: "Procedure" },
    { id: "status", label: "Status" },
    { id: "time-period", label: "Time Period" },
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

const NumberedList = ({ items }) => (
    <ol className="space-y-3 my-4 pl-1">
        {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-[#e8f1fb] text-[#005a9c] text-[11px] font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                </span>
                <span className="text-[15px] text-slate-600 leading-[1.8]">{item}</span>
            </li>
        ))}
    </ol>
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
const LegalNoticeRecoveryDues = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const sectionRefs = useRef({});
    const isClickScrolling = useRef(false);
    const clickScrollTimer = useRef(null);

    // Register a section ref by ID
    const setRef = useCallback((id) => (el) => {
        if (el) sectionRefs.current[id] = el;
    }, []);

    // ── IntersectionObserver scroll-spy ──────────────────
    useEffect(() => {
        const observers = [];
        const NAVBAR_HEIGHT = 115; // main navbar (64) + inside navbar (~51)

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

    // ── Smooth scroll to section on tab click ────────────
    const handleTabClick = useCallback((id) => {
        const el = sectionRefs.current[id];
        if (!el) return;

        // Lock the observer temporarily so click-scroll doesn't fight it
        isClickScrolling.current = true;
        clearTimeout(clickScrollTimer.current);

        const OFFSET = 115;
        const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
        setActiveTab(id);

        // Unlock after scroll settles (~900ms)
        clickScrollTimer.current = setTimeout(() => {
            isClickScrolling.current = false;
        }, 900);
    }, []);

    /* ── FAQ DATA ─────────────────────────────────────── */
    const faqs = [
        {
            question: "How can a lawyer help to draft Legal Notice for Recovery of Money?",
            answer: "A lawyer helps by accurately detailing the facts, identifying the correct legal grounds (like breach of contract), and ensuring the notice is properly served. This adds legal weight to your claim and simplifies further court proceedings if the debtor continues to defaults."
        },
        {
            question: "What Is the Time Restriction for Bringing a Lawsuit for Money Recovery?",
            answer: "In most cases, the limitation period for filing a money recovery suit is three years from the date the debt became due. Failing to file within this window may bar your legal right to recover the amount through court action."
        },
        {
            question: "How can I recover money without proof?",
            answer: "Recovering money without proof is challenging. However, any written communication — such as WhatsApp messages, emails, or bank statements showing the transfer — can serve as evidence. A legal notice can also prompt a response from the debtor that might serve as an acknowledgement of the debt."
        },
        {
            question: "What is a legal notice for recovery of dues?",
            answer: "It is a formal legal warning sent to a person or entity withholding your payments. It informs them of your intent to initiate legal action if the dues are not cleared within a specific timeframe."
        },
        {
            question: "What is the law governing legal notices in India?",
            answer: "Legal notices are primarily governed by the Code of Civil Procedure (CPC), 1908. Specific notices like Section 80 CPC (against government) or Section 138 NI Act (cheque bounce) have their own strict procedural requirements."
        },
        {
            question: "Is it compulsory to serve a legal notice?",
            answer: "While not always compulsory for all civil suits, it is highly recommended. For some cases, like cheque bounce or suits against the government, serving a notice is a mandatory legal prerequisite."
        },
        {
            question: "What will happen when you send a legal notice?",
            answer: "Once received, the opposite party may hand over the dues to avoid litigation, or send a reply. If they ignore or refuse, you can proceed with filing a formal lawsuit in court using the notice as evidence of your prior attempt to resolve the matter."
        },
        {
            question: "Can I ignore a legal notice?",
            answer: "Ignoring a legal notice is risky. It may be taken as an admission of the facts stated if you don't contest them. It is always better to consult a lawyer and send a formal reply to protect your legal standing."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ═══════════════════════════════════════════
                HERO SECTION
            ═══════════════════════════════════════════ */}
            <HeroLayout
                heroTitleMain="Legal Notice for"
                heroTitleSuffix="Recovery of Dues"
                heroSubtitle="Recover Your Money Legally and Efficiently"
                heroDescription="Reclaim your stuck payments with a professionally drafted Legal Notice. Our expert lawyers ensure your notice is watertight, persuasive, and legally sound."
                stats={[
                    { count: "15,000+", label: "Notices Drafted", icon: <Users size={20} /> },
                    { count: "95%", label: "Success Rate", icon: <Briefcase size={20} /> },
                    { count: "24 Hrs", label: "Fast Turnaround", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ═══════════════════════════════════════════
                STICKY INSIDE NAVBAR
            ═══════════════════════════════════════════ */}
            <InsideNavbar
                tabs={TABS}
                activeTab={activeTab}
                onTabClick={handleTabClick}
                topOffset={64}
                centered={true}
            />

            {/* ═══════════════════════════════════════════
                CONTENT BODY
            ═══════════════════════════════════════════ */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-6 pb-24">

                {/* ──────────────────────────────────────
                    SECTION 1 · OVERVIEW
                ────────────────────────────────────── */}
                <section
                    id="overview"
                    ref={setRef("overview")}
                    className="pt-14 pb-10 scroll-mt-[115px]"
                >
                    <SectionLabel>Legal Services</SectionLabel>
                    <SectionHeading>Overview of Legal Notice</SectionHeading>

                    <BodyText>
                        A legal notice is a formal written communication sent by one individual or entity to another, conveying a clear intention to initiate legal proceedings. It serves as a final warning, typically issued when a specific act or failure to act has caused damage or loss to the sender.
                    </BodyText>
                    <BodyText>
                        Common scenarios for sending a notice include contract breaches, non-payment of rent by tenants, or violations of established legal rights. Beyond these, a legal notice is a powerful tool for the <strong>recovery of promised dues or money</strong>. It acts as a stern reminder to the party withholding payment — whether they are an employer, a business acquaintance, or a friend.
                    </BodyText>
                    <BodyText>
                        In the legal process, this notice is the critical first step. It ensures the recipient is fully aware that failure to settle the outstanding dues will result in formal court action.
                    </BodyText>

                    <Divider />

                    <SubHeading>When is a Dues Recovery Notice Necessary?</SubHeading>
                    <BodyText>
                        It is necessary whenever there is a legitimate financial claim that remains unfulfilled despite prior reminders. By formalizing your demand, you shift from informal requests to a documented legal position, which is often enough to prompt a settlement without entering a courtroom.
                    </BodyText>
                </section>

                {/* ──────────────────────────────────────
                    SECTION 2 · BENEFITS
                ────────────────────────────────────── */}
                <section
                    id="benefits"
                    ref={setRef("benefits")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>Advantages</SectionLabel>
                    <SectionHeading>Benefits of Sending a Legal Notice</SectionHeading>

                    <BodyText>
                        Sending a professionally drafted notice offers several strategic advantages in the recovery process:
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-4 my-8">
                        {[
                            {
                                icon: <AlertCircle size={16} />,
                                title: "Formal Warning",
                                desc: "It explicitly warns the defaulter of their duties and the immediate need to repay the due amount."
                            },
                            {
                                icon: <Scale size={16} />,
                                title: "Legal Weight",
                                desc: "The recipient becomes aware that you are serious and ready to take the matter to court."
                            },
                            {
                                icon: <FileText size={16} />,
                                title: "Documented Evidence",
                                desc: "It serves as vital proof in court that the opposite party was informed of the dispute in advance."
                            },
                            {
                                icon: <Building2 size={16} />,
                                title: "Cost-Effective",
                                desc: "Sending a notice is far less expensive than jumping straight into a full-blown lawsuit."
                            },
                            {
                                icon: <Users size={16} />,
                                title: "Avoids Litigation",
                                desc: "Many disputes are settled immediately after a notice is received, saving years of court time."
                            },
                            {
                                icon: <CheckCircle2 size={16} />,
                                title: "Adds Credibility",
                                desc: "A notice drafted by Vyombiz professionals adds immense credibility to your claims."
                            },
                        ].map(({ icon, title, desc }) => (
                            <div key={title} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#e8f1fb] flex items-center justify-center shrink-0">
                                        <span className="text-[#005a9c]">{icon}</span>
                                    </div>
                                    <h4 className="text-[14px] font-semibold text-[#072b47]">{title}</h4>
                                </div>
                                <p className="text-[13px] text-slate-600 leading-[1.75] pl-11">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ──────────────────────────────────────
                    SECTION 3 · PROCEDURE
                ────────────────────────────────────── */}
                <section
                    id="procedure"
                    ref={setRef("procedure")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>The Process</SectionLabel>
                    <SectionHeading>Components and Procedure</SectionHeading>

                    <SubHeading>Key Components of the Notice</SubHeading>
                    <BodyText>
                        For a legal notice to be effective and valid in court, it must contain specific details:
                    </BodyText>
                    <BulletList items={[
                        "Sender's Details: Full name and address for clear identification of the claimant.",
                        "Factual Relationship: A detailed elaboration of how the debt arose and the history between the parties.",
                        "Consequences: A clear statement of the civil and penal consequences if the dues are not returned.",
                        "Monetary Relief: The exact amount to be recovered, including any interest or damages for the delay."
                    ]} />

                    <Divider />

                    <SubHeading>Step-by-Step Drafting Procedure</SubHeading>
                    <div className="space-y-4 my-6">
                        {[
                            {
                                step: "01",
                                title: "Consultation & Drafting",
                                desc: "Work with a Vyombiz legal expert to draft a notice containing all necessary facts and legal grounds."
                            },
                            {
                                step: "02",
                                title: "Attorney Preparation",
                                desc: "The attorney prepares the final notification, stating the purpose, prior discussions, and giving the recipient a fair chance to settle."
                            },
                            {
                                step: "03",
                                title: "Approval & Dispatch",
                                desc: "Once approved by you, the notice is sent via registered mail or courier. We retain the confirmation receipt as proof of service."
                            },
                        ].map(({ step, title, desc }) => (
                            <div key={step} className="flex gap-5 bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-[#e8f1fb] text-[#005a9c] font-bold text-[13px] flex items-center justify-center">
                                    {step}
                                </div>
                                <div>
                                    <h4 className="text-[15px] font-semibold text-[#072b47] mb-2">{title}</h4>
                                    <p className="text-[14px] text-slate-600 leading-[1.8]">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Divider />

                    <SubHeading>Why File a Recovery of Dues Notice?</SubHeading>
                    <BodyText>
                        There are numerous legal contexts where this notice is essential:
                    </BodyText>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 my-6">
                        <InfoCard icon={<Building2 size={16} />} title="Recovery of Rent">
                            <BodyText>When a tenant refuses to pay the agreed rent to the landlord.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Briefcase size={16} />} title="Embezzlement">
                            <BodyText>Cases where an employee has misappropriated company funds.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Scale size={16} />} title="Bounced Cheque">
                            <BodyText>Initiating action when a payment cheque is dishonored by the bank.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Gavel size={16} />} title="Land & Property Disputes">
                            <BodyText>Issues related to mortgage, possession delays, or land settlements.</BodyText>
                        </InfoCard>
                    </div>

                    <div className="bg-[#fff9eb] border border-[#f5e6c1] rounded-2xl p-6 md:p-8 mt-8">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertCircle size={20} className="text-orange-600" />
                            <h4 className="text-[16px] font-bold text-[#855d00]">Received a Legal Notice?</h4>
                        </div>
                        <BodyText>
                            If you receive such a notice, act quickly. It specifies the amount owed and a deadline. Ignoring it might lead to a lawsuit being filed against you. Consult a lawyer to draft a proper reply.
                        </BodyText>
                    </div>
                </section>

                {/* ──────────────────────────────────────
                    SECTION 4 · STATUS
                ────────────────────────────────────── */}
                <section
                    id="status"
                    ref={setRef("status")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>Legal Framework</SectionLabel>
                    <SectionHeading>Statutes to File a Case Against the Defaulter</SectionHeading>

                    <BodyText>
                        The legal path you take depends on the nature of the debt and the amount. Following are the primary statutes governing money recovery in India:
                    </BodyText>

                    <div className="space-y-6 mt-8">
                        <div className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-[#005a9c] text-white flex items-center justify-center font-bold text-xs mt-1">1</div>
                            <div>
                                <h4 className="text-[16px] font-bold text-[#072b47] mb-2">The Indian Contract Act, 1872</h4>
                                <BodyText>
                                    Applies to all valid contracts. If a debt arises from a contract, you have a <strong>three-year</strong> limitation period to file a suit for recovery.
                                </BodyText>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-[#005a9c] text-white flex items-center justify-center font-bold text-xs mt-1">2</div>
                            <div>
                                <h4 className="text-[16px] font-bold text-[#072b47] mb-2">The Negotiable Instruments Act, 1881</h4>
                                <BodyText>
                                    Specifically governs promissory notes, bills of exchange, and cheques. The limitation period for recovery under this Act is also <strong>three years</strong>.
                                </BodyText>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-[#005a9c] text-white flex items-center justify-center font-bold text-xs mt-1">3</div>
                            <div>
                                <h4 className="text-[16px] font-bold text-[#072b47] mb-2">The Specific Relief Act, 1963</h4>
                                <BodyText>
                                    Used when a creditor seeks specific performance (like delivery of goods). The limitation period for suits under this Act can extend up to <strong>12 years</strong>.
                                </BodyText>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────
                    SECTION 5 · TIME PERIOD
                ────────────────────────────────────── */}
                <section
                    id="time-period"
                    ref={setRef("time-period")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>Timeline</SectionLabel>
                    <SectionHeading>Limitation for Filing Recovery Suits</SectionHeading>

                    <BodyText>
                        Timing is critical in legal matters. The window for filing a suit for money recovery begins on the exact date the debt becomes due.
                    </BodyText>

                    <InfoCard icon={<BookOpen size={16} />} title="Example Scenario">
                        <BodyText>
                            If you lent money on 1 January 2023 with a repayment date of 31 December 2023, the <strong>limitation period</strong> starts from 1 January 2024. You must take legal action before this window closes (typically 3 years later).
                        </BodyText>
                    </InfoCard>

                    <div className="bg-blue-50 border-l-4 border-[#005a9c] p-6 my-6">
                        <p className="text-[15px] text-[#072b47] leading-relaxed italic">
                            "Justice delayed is justice denied. Ensuring your notice is sent well within the limitation period is the first step to securing your financial interests."
                        </p>
                    </div>
                </section>

                {/* ──────────────────────────────────────
                    SECTION 6 · WHY VYOMBIZ
                ────────────────────────────────────── */}
                <section
                    id="why-vyombiz"
                    ref={setRef("why-vyombiz")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>Our Expertise</SectionLabel>
                    <SectionHeading>Why Choose Vyombiz?</SectionHeading>

                    <BodyText>
                        Drafting a legal notice requires precision. At Vyombiz, we provide a seamless, professional experience tailored to your needs:
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                            <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-[#072b47]">Expert Professionals</h4>
                                <p className="text-sm text-slate-600 mt-1">Our in-house lawyers guide you at every stage, ensuring your interests are protected.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                            <Scale className="text-blue-500 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-[#072b47]">Customized Drafting</h4>
                                <p className="text-sm text-slate-600 mt-1">We don't use templates; we draft notices that reflect the specific nuances of your case.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                            <Shield className="text-navy-500 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-[#072b47]">Cost-Effective</h4>
                                <p className="text-sm text-slate-600 mt-1">Premium legal support at competitive prices compared to traditional law firms.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                            <Phone className="text-orange-500 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-[#072b47]">Round-the-Clock Support</h4>
                                <p className="text-sm text-slate-600 mt-1">Our customer support team is always available to resolve your queries instantly.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────
                    SECTION 7 · FAQs
                ────────────────────────────────────── */}
                <section
                    id="faq"
                    ref={setRef("faq")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>FAQs</SectionLabel>
                    <SectionHeading>Frequently Asked Questions</SectionHeading>
                    <BodyText>
                        Get answers to common queries regarding legal notices and dues recovery.
                    </BodyText>

                    <div className="mt-8">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </section>

                {/* CTA Banner */}
                <div className="bg-[#072b47] rounded-2xl p-8 md:p-12 text-white mt-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#005a9c] opacity-10 rounded-full -mr-32 -mt-32" />
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Your Due Amount?</h3>
                        <p className="text-slate-300 text-[16px] mb-8 max-w-2xl mx-auto">
                            Connect with Vyombiz expert lawyers today and start your recovery process with a professionally drafted legal notice.
                        </p>
                        <button className="bg-white text-[#072b47] font-bold px-10 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-xl">
                            Start Your Notice Now
                        </button>
                    </div>
                </div>

            </div>{/* /content body */}
        </div>
    );
};

export default LegalNoticeRecoveryDues;
