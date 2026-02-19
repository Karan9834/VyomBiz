import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, FileText, Scale, Gavel, Landmark, Search, Shield, AlertCircle, BookOpen, Clock, Banknote, MessageSquare } from "lucide-react";
import InsideNavbar from "../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "importance", label: "Importance" },
    { id: "legal-framework", label: "Legal Framework" },
    { id: "consequences", label: "Consequences" },
    { id: "resources", label: "Resources" },
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
const ChequeBounceNotice = () => {
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
            question: "What should I do if I receive a cheque bounce notice?",
            answer: "Verify the details immediately, check your account balance, and respond within the 15-day timeframe. It's often advisable to settle with the payee or seek legal counsel to draft a formal response."
        },
        {
            question: "What are the common reasons for a cheque to bounce?",
            answer: "The most common reasons include insufficient funds, signature mismatch, account closure, or overwriting on the cheque leaf."
        },
        {
            question: "What is the legal timeframe for responding to a cheque bounce notice?",
            answer: "Under the Negotiable Instruments Act, you must respond or settle the payment within 15 days from the date of receiving the formal notice."
        },
        {
            question: "What are the penalties for a bounced cheque under the law?",
            answer: "Penalties can include imprisonment for up to two years, a fine which can be twice the cheque amount, or both."
        },
        {
            question: "Can a cheque bounce affect my credit score?",
            answer: "Yes, repeated cheque bounces can be reported to credit bureaus and significantly damage your credit rating, making future loans difficult to obtain."
        },
        {
            question: "How does the legal process work after a cheque bounce notice is issued?",
            answer: "If payment isn't made within 15 days of the notice, the payee can file a complaint with the Judicial Magistrate. The court then issues a summons, followed by legal proceedings."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Cheque Bounce"
                heroTitleSuffix="Notice Service"
                heroSubtitle="Recover Your Funds Legally and Swiftly"
                heroDescription="Issue a formal legal notice for dishonoured cheques under Section 138 of the NI Act. Vyombiz ensures your notice is watertight, professional, and delivered within statutory timelines."
                stats={[
                    { count: "25,000+", label: "Notices Issued", icon: <Users size={20} /> },
                    { count: "98%", label: "Accuracy", icon: <Shield size={20} /> },
                    { count: "24 Hrs", label: "Fast Draft", icon: <Clock size={20} /> }
                ]}
            />

            <InsideNavbar
                tabs={TABS}
                activeTab={activeTab}
                onTabClick={handleTabClick}
                topOffset={64}
                centered={true}
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-6 pb-24">

                {/* OVERVIEW */}
                <section id="overview" ref={setRef("overview")} className="pt-14 pb-10 scroll-mt-[115px]">
                    <SectionLabel>Legal Overview</SectionLabel>
                    <SectionHeading>Cheque Bounce Notice - An Overview</SectionHeading>
                    <BodyText>
                        A cheque bounce notice is a formal legal communication issued to the drawer of a dishonoured cheque. Governed primarily by <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>, this notice is the first mandatory step in seeking legal recourse for a bounced cheque.
                    </BodyText>
                    <BodyText>
                        The notice informs the issuer that the cheque was returned by the bank due to reasons like <strong>insufficient funds</strong> or <strong>signature mismatch</strong>. Statutory law requires this notice to be sent within 30 days of receiving the 'Cheque Return Memo' from the bank.
                    </BodyText>
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 my-8">
                        <h4 className="font-bold text-[#072b47] mb-3 flex items-center gap-2 underline">Key Timelines to Remember:</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-full bg-[#005a9c] text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-md shadow-blue-200">30</div>
                                <p className="text-sm text-slate-700 font-medium">Days from bank return to issue the legal notice.</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-full bg-[#005a9c] text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-md shadow-blue-200">15</div>
                                <p className="text-sm text-slate-700 font-medium">Days given to the drawer to clear the payment after receiving the notice.</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-full bg-[#005a9c] text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-md shadow-blue-200">30</div>
                                <p className="text-sm text-slate-700 font-medium">Days to file a court complaint if the 15-day period expires without payment.</p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* IMPORTANCE */}
                <section id="importance" ref={setRef("importance")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Significance</SectionLabel>
                    <SectionHeading>Importance of Issuing a Notice</SectionHeading>
                    <BodyText>
                        Sending a formal notice isn't just a suggestion; it is a legal prerequisite for initiating any court proceeding under the Negotiable Instruments Act.
                    </BodyText>
                    <div className="grid md:grid-cols-2 gap-5 mt-8">
                        <InfoCard icon={<Scale size={16} />} title="Mandatory Legal Step">
                            <p className="text-sm text-slate-600">You cannot file a criminal case in court without first proving that you sent a statutory notice to the drawer.</p>
                        </InfoCard>
                        <InfoCard icon={<FileText size={16} />} title="Critical Evidence">
                            <p className="text-sm text-slate-600">The notice serves as documentary evidence that the drawer was given a fair chance to remedy the situation.</p>
                        </InfoCard>
                        <InfoCard icon={<Search size={16} />} title="Clear Communication">
                            <p className="text-sm text-slate-600">It explicitly states the liability amount, the reason for dishonour, and the impending legal consequences.</p>
                        </InfoCard>
                        <InfoCard icon={<Scale size={16} />} title="Avoids Litigation">
                            <p className="text-sm text-slate-600">Many drawers settle the amount immediately upon receiving a professional notice to avoid court rooms.</p>
                        </InfoCard>
                    </div>
                </section>

                {/* LEGAL FRAMEWORK */}
                <section id="legal-framework" ref={setRef("legal-framework")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Regulation</SectionLabel>
                    <SectionHeading>Legal Framework & Involved Entities</SectionHeading>
                    <BodyText>
                        The legal process involves strict compliance with statutory norms and interaction with multiple entities to ensure financial accountability.
                    </BodyText>

                    <SubHeading>Key Entities and Their Roles</SubHeading>
                    <div className="grid md:grid-cols-3 gap-6 my-8">
                        <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                            <h4 className="font-bold text-[#072b47] mb-3">Drawer</h4>
                            <p className="text-sm text-slate-600">The person or entity that issued the cheque. They are held accountable for ensuring the funds were available.</p>
                        </div>
                        <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                            <h4 className="font-bold text-[#072b47] mb-3">Payee</h4>
                            <p className="text-sm text-slate-600">The recipient entitled to the payment. The payee initiates the legal process by issuing the statutory notice.</p>
                        </div>
                        <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                            <h4 className="font-bold text-[#072b47] mb-3">The Bank</h4>
                            <p className="text-sm text-slate-600">Processes the transaction and issues the <em>Cheque Return Memo</em>, which is the foundational document for the case.</p>
                        </div>
                    </div>

                    <SubHeading>What to do if YOU receive a notice?</SubHeading>
                    <NumberedList items={[
                        "Verify Legality: Confirm the cheque details, deposit date, and the specific reason for bounce mentioned in the notice.",
                        "Audit Funds: Check if the bounce was a bank error or a genuine oversight in account balance.",
                        "Immediate Response: Respond within the 15-day window. Silence is often interpreted as an admission of guilt in court.",
                        "Negotiate Settlement: If possible, settle with the payee directly to avoid a criminal record.",
                        "Legal Advocacy: Consult a lawyer to draft a formal counter-response if the claim is disputed or incorrect."
                    ]} />
                </section>

                {/* CONSEQUENCES */}
                <section id="consequences" ref={setRef("consequences")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Repercussions</SectionLabel>
                    <SectionHeading>Legal Consequences of Cheque Bounce</SectionHeading>
                    <BodyText>
                        A cheque bounce is a serious matter that attracts both civil and criminal liabilities in India.
                    </BodyText>

                    <div className="space-y-4 my-8">
                        <InfoCard icon={<Gavel size={16} />} title="Civil Liability">
                            <BodyText>The payee can file a suit under <em>Order 37 of the CPC</em> to recover the cheque amount along with interest and damages.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<AlertCircle size={16} />} title="Criminal Liability">
                            <BodyText>Under Section 138 of the NI Act, the drawer faces criminal prosecution. Additional charges under IPC Section 420 (Cheating) can be applied in certain fraud cases.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Banknote size={16} />} title="Severe Penalties">
                            <BodyText>The court can impose a fine up to <strong>twice the cheque amount</strong> or imprisonment for up to <strong>2 years</strong>, or both.</BodyText>
                        </InfoCard>
                    </div>

                    <Divider />

                    <SubHeading>Stages of Court Proceedings</SubHeading>
                    <BulletList items={[
                        "Filing a Complaint: Initiated before the Judicial Magistrate within 30 days after the notice period expires.",
                        "Summons: The court issues a formal order requiring the drawer to appear and answer the allegations.",
                        "Proceedings: Both parties present their evidence. This stage can take several months to conclude.",
                        "Costs: Be prepared for court fees (usually capped) and lawyer's professional fees depending on the claim value."
                    ]} />
                </section>

                {/* RESOURCES */}
                <section id="resources" ref={setRef("resources")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Tools & Help</SectionLabel>
                    <SectionHeading>Notice Content & Resources</SectionHeading>

                    <SubHeading>Essential Elements of a Professional Notice</SubHeading>
                    <BodyText>To be legally valid, a cheque bounce notice must contain these specific elementsized by Vyombiz experts:</BodyText>
                    <BulletList items={[
                        "Clear identification of both Drawer and Payee.",
                        "Detailed cheque info: Number, Date of Issue, and Amount.",
                        "Date of dishonour as per the bank memo.",
                        "Clear mention of the reason for bounce (e.g., 'Insufficient Funds').",
                        "Explicit reference to Section 138 of the NI Act.",
                        "Statutory 15-day demand for payment."
                    ]} />

                    <Divider />

                    <SubHeading>Alternative Avenues for Resolution</SubHeading>
                    <div className="grid md:grid-cols-2 gap-6 my-6">
                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2 text-sm"><MessageSquare size={16} className="text-[#005a9c]" /> Mediation & Conciliation</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">Voluntary processes where a neutral third party helps reach a settlement without a formal trial. Courts often encourage this for faster results.</p>
                        </div>
                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2 text-sm"><Landmark size={16} className="text-[#005a9c]" /> Banking Ombudsman</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">If the issue involves bank error or unsatisfactory service regarding cheque processing, complaints can be filed here for a cost-effective resolution.</p>
                        </div>
                    </div>
                </section>

                {/* WHY VYOMBIZ */}
                <section id="why-vyombiz" ref={setRef("why-vyombiz")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Platform</SectionLabel>
                    <SectionHeading>Why Trust Vyombiz for Your Case?</SectionHeading>

                    <div className="grid md:grid-cols-3 gap-6 my-10">
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <Scale size={24} className="text-[#005a9c]" />
                            </div>
                            <h4 className="text-[17px] font-bold text-[#072b47] mb-3">Expert Legal Network</h4>
                            <p className="text-slate-600 text-[13px] leading-relaxed">Connect with specialized lawyers who have handled thousands of NI Act cases successfully.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <Clock size={24} className="text-[#005a9c]" />
                            </div>
                            <h4 className="text-[17px] font-bold text-[#072b47] mb-3">Statutory Speed</h4>
                            <p className="text-slate-600 text-[13px] leading-relaxed">We ensure notices are drafted and dispatched within the strict 30-day legal window, every time.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <FileText size={24} className="text-[#005a9c]" />
                            </div>
                            <h4 className="text-[17px] font-bold text-[#072b47] mb-3">Hassle-Free Filing</h4>
                            <p className="text-slate-600 text-[13px] leading-relaxed">From initial notice to court representations, we manage all paperwork so you can focus on your business.</p>
                        </div>
                    </div>
                    <BodyText className="text-center font-medium italic">Vyombiz provides transparent pricing and step-by-step guidance, making complex legal recovery simple and affordable.</BodyText>
                </section>

                {/* FAQs */}
                <section id="faq" ref={setRef("faq")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Common Queries</SectionLabel>
                    <SectionHeading>Frequently Asked Questions</SectionHeading>
                    <div className="mt-8">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-20 bg-gradient-to-r from-[#072b47] to-[#0a3d64] rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Cheque Bounced? <br />Start Your Recovery Today.</h2>
                        <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto font-light">Don't wait until the 30-day window closes. Issue a professional legal notice drafted by expert lawyers at Vyombiz.</p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-xl shadow-blue-900/40 text-lg">Send Notice Now</button>
                            <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-5 px-12 rounded-2xl transition-all flex items-center justify-center gap-3 text-lg backdrop-blur-sm">
                                <Phone size={22} className="text-blue-200" /> Talk to an Expert
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChequeBounceNotice;
