import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare } from "lucide-react";
import InsideNavbar from "../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "procedure", label: "Procedure" },
    { id: "format", label: "Format" },
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
const LegalNoticeConsumerProtection = () => {
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
            question: "Is there a format for a legal notice under the Consumer Protection Act?",
            answer: "Yes, there is a specific format that includes the names of the parties, the date of violation, description of the grievance, and the relief sought. Using a standard format ensures all legal requirements are met."
        },
        {
            question: "Can a legal notice still be served if a period of two years since the defect arose is over?",
            answer: "The Consumer Protection Act has a limitation period of two years. If this period has expired, you may need to file a condonation of delay application with valid reasons, though it is at the discretion of the consumer forum."
        },
        {
            question: "When to Send a Legal Notice for Consumer Cases?",
            answer: "You should send a legal notice as soon as you identify a deficiency in service or a product defect, and prior attempts to resolve the issue with the seller have failed."
        },
        {
            question: "What Do You Mean by a Legal Notice for Consumer Cases?",
            answer: "It is a formal written warning sent to a business or service provider, outlining your legal grievance and demanding corrective action or compensation before filing a case in consumer court."
        },
        {
            question: "Who Can File a Legal Notice in India Under the Consumer Protection Act?",
            answer: "Any individual who has purchased goods or availed services for a consideration, e-commerce customers, and organizations representing consumers can file a notice under the Act."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ═══════════════════════════════════════════
                HERO SECTION
            ═══════════════════════════════════════════ */}
            <HeroLayout
                heroTitleMain="Legal Notice Under"
                heroTitleSuffix="Consumer Protection Act"
                heroSubtitle="Protect Your Consumer Rights with Expert Legal Guidance"
                heroDescription="Fight against unfair trade practices and product defects. Send a professionally drafted Legal Notice to service providers and recover your losses efficiently with Vyombiz."
                stats={[
                    { count: "12,000+", label: "Notices Sent", icon: <Users size={20} /> },
                    { count: "90%+", label: "Resolution Rate", icon: <Briefcase size={20} /> },
                    { count: "24-48 hrs", label: "Drafting Time", icon: <Building2 size={20} /> }
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
                    <SectionLabel>Consumer Rights</SectionLabel>
                    <SectionHeading>Consumer Protection Act - An Overview</SectionHeading>

                    <BodyText>
                        The Consumer Protection Act 2019 provides a robust three-tier dispute redressal mechanism to safeguard consumer interests in India. This framework ensures that consumers have access to justice through dedicated commissions at various levels:
                    </BodyText>

                    <div className="grid md:grid-cols-3 gap-4 my-8">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-[#072b47] mb-2 text-center uppercase tracking-wider text-xs">District Level</h4>
                            <p className="text-[#005a9c] font-bold text-center text-sm">DCDRC</p>
                            <p className="text-slate-500 text-[13px] text-center mt-2 italic">District Consumer Disputes Redressal Commission</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-[#072b47] mb-2 text-center uppercase tracking-wider text-xs">State Level</h4>
                            <p className="text-[#005a9c] font-bold text-center text-sm">SCDRC</p>
                            <p className="text-slate-500 text-[13px] text-center mt-2 italic">State Consumer Disputes Redressal Commission</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-[#072b47] mb-2 text-center uppercase tracking-wider text-xs">National Level</h4>
                            <p className="text-[#005a9c] font-bold text-center text-sm">NCDRC</p>
                            <p className="text-slate-500 text-[13px] text-center mt-2 italic">National Consumer Disputes Redressal Commission</p>
                        </div>
                    </div>

                    <BodyText>
                        If you have suffered a loss or injury due to a deficiency in service or an unfair trade practice, you can file a complaint with these forums. To initiate this, the consumer forums can issue several types of notices:
                    </BodyText>

                    <div className="space-y-4 my-6">
                        <InfoCard icon={<Scale size={16} />} title="Notice of Conciliation">
                            <BodyText>Invites parties to an amicable settlement. If agreed, the matter is disposed of without a formal hearing.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<MessageSquare size={16} />} title="Notice of Hearing">
                            <BodyText>Informs both parties of the date and time they must appear before the forum for a formal proceeding.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Users size={16} />} title="Notice of Examination">
                            <BodyText>Issued to witnesses, requiring them to give evidence before the forum.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Search size={16} />} title="Notice of Investigation">
                            <BodyText>Issued to experts, requiring them to investigate and submit a diagnostic report to the forum.</BodyText>
                        </InfoCard>
                    </div>

                    <Divider />

                    <SubHeading>Importance of Consumer Protection</SubHeading>
                    <BodyText>
                        Consumer protection laws are designed to shield patrons from unfair, deceptive, or fraudulent business practices. Because businesses often hold more resources and knowledge, these regulations balance the scales.
                    </BodyText>
                    <BulletList items={[
                        "Prevention of Harm: Ensuring businesses disclose critical info (like ingredients) to prevent injury.",
                        "Promoting Fair Competition: Ensuring businesses compete on merit rather than by exploiting customers.",
                        "Empowering Consumers: Giving buyers the tools and clarity needed to make informed purchasing decisions."
                    ]} />

                    <Divider />

                    <SubHeading>Purpose of a Legal Notice</SubHeading>
                    <BodyText>
                        A legal notice is a formal preamble to court action. It serves to inform the alleged violator of their transgression and demands immediate corrective measures. For it to be legally effective, it must specify:
                    </BodyText>
                    <NumberedList items={[
                        "Full identification: Names and addresses of all parties involved.",
                        "Timeline: Exact date and time of the alleged violation.",
                        "Detailed Grievance: The specific nature of the violation or defect.",
                        "Remedial Demand: The specific relief or compensation being sought."
                    ]} />

                    <Divider />

                    <SubHeading>Who Can File a Legal Notice?</SubHeading>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2"><ShoppingBag size={16} className="text-[#005a9c]" /> Standard Buyers</h4>
                            <p className="text-sm text-slate-600">Anyone who purchases goods or avails services for consideration (payment).</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2"><Landmark size={16} className="text-[#005a9c]" /> E-commerce Users</h4>
                            <p className="text-sm text-slate-600">Modern definitions include shoppers on delivery sites and digital service recipients (like insurance).</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2"><AlertCircle size={16} className="text-[#005a9c]" /> Victims of Malpractice</h4>
                            <p className="text-sm text-slate-600">Those affected by false product claims, adulteration, or spurious goods.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2"><FileText size={16} className="text-[#005a9c]" /> Victims of Unfair Trades</h4>
                            <p className="text-sm text-slate-600">Covers non-issuance of bills, refusal of valid refunds, or forced tied-in purchases.</p>
                        </div>
                    </div>

                    <Divider />

                    <SubHeading>Jurisdiction and Limits (Pecuniary)</SubHeading>
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-[#072b47] font-bold">
                                <tr>
                                    <th className="px-6 py-4">Forum Level</th>
                                    <th className="px-6 py-4">Pecuniary Limit (Value of Claim)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-600">
                                <tr>
                                    <td className="px-6 py-4 font-semibold">District Commission (DCDRC)</td>
                                    <td className="px-6 py-4">Up to ₹1 Crore</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-semibold">State Commission (SCDRC)</td>
                                    <td className="px-6 py-4">Above ₹1 Crore to ₹10 Crores</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-semibold">National Commission (NCDRC)</td>
                                    <td className="px-6 py-4">Exceeding ₹10 Crores</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ──────────────────────────────────────
                    SECTION 2 · PROCEDURE
                ────────────────────────────────────── */}
                <section
                    id="procedure"
                    ref={setRef("procedure")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>Legal Workflow</SectionLabel>
                    <SectionHeading>Procedure of Filing a Complaint</SectionHeading>

                    <BodyText>
                        Once you decide to move forward, the process follows a structured path. Adhering to this ensures your case is technically sound:
                    </BodyText>

                    <div className="space-y-6 my-8">
                        {[
                            { step: "01", title: "Drafting", desc: "The complaint must be written clearly and concisely, specifying facts, dates, and relief sought." },
                            { step: "02", title: "Serving the Notice", desc: "Notice must be served on the opposite party via registered post with acknowledgement due." },
                            { step: "03", title: "Filing & Fees", desc: "Submit the complaint and pay the required fee, which varies based on the claim's value." },
                            { step: "04", title: "Hearings & Evidence", desc: "Attend forum hearings and produce evidence (documents, witnesses, expert reports) to support your case." },
                            { step: "05", title: "Judgment & Appeal", desc: "The forum delivers a judgment. If unsatisfied, you have 30 days to file an appeal with the next level commission." }
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

                    <Divider />

                    <SubHeading>Procedural Checklist for Your Notice</SubHeading>
                    <BulletList items={[
                        "Invoice/Receipt: Always include the number to prove the actual transaction.",
                        "Delineation of Defects: Clearly define the imperfection or fault in service.",
                        "Expense Mapping: List any additional costs incurred due to the faulty product.",
                        "Choice of Remedy: Explicitly state if you want repair, replacement, or refund.",
                        "Final Warning: Highlight that failure to resolve will lead to civil or consumer action.",
                        "Mode of Service: Speed post or registered courier are preferred to establish proof of receipt."
                    ]} />
                </section>

                {/* ──────────────────────────────────────
                    SECTION 3 · FORMAT
                ────────────────────────────────────── */}
                <section
                    id="format"
                    ref={setRef("format")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>The Document</SectionLabel>
                    <SectionHeading>Legal Notice Format</SectionHeading>

                    <BodyText>
                        While every case is unique, a standard legal notice follows this professional structure. It should be signed by the sender or their legal representative.
                    </BodyText>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-10 my-8 font-mono text-[13px] md:text-[14px] text-slate-700 leading-[2] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none uppercase font-sans font-black text-6xl tracking-tighter">Vyombiz</div>
                        <p className="text-slate-500 text-[11px] uppercase tracking-widest font-sans font-bold mb-6">— Sample Format —</p>

                        <div className="space-y-4">
                            <p><strong>To:</strong> [Opposite Party Name]</p>
                            <p><strong>Address:</strong> [Opposite Party Address]</p>
                            <p><strong>Date:</strong> [Current Date]</p>

                            <p className="font-bold underline text-center font-sans mt-8 uppercase tracking-wide">SUB: LEGAL NOTICE UNDER THE CONSUMER PROTECTION ACT, 2019</p>

                            <p className="mt-6">I, [Your Name], hereby serve you this legal notice on behalf of [Consumer Name] regarding a violation of the Consumer Protection Act, 2019.</p>

                            <div className="pl-4 border-l-2 border-slate-200 italic text-slate-600 space-y-4 my-6">
                                <p>1. On [Date], [Consumer] purchased [Product/Service] from you at [Place].</p>
                                <p>2. The [Product/Service] was found defective and failed to meet promised standards.</p>
                                <p>3. Despite repeated attempts, you have failed to remedy these defects.</p>
                            </div>

                            <p>As a result, [Consumer] has suffered loss. I demand the following corrective action <strong>within 15 days</strong> of receipt:</p>
                            <ul className="list-disc pl-8 font-sans text-sm space-y-2">
                                <li>Refund the full amount of ₹[Amount] paid for the item/service.</li>
                                <li>Pay compensation of ₹[Amount] for injury and mental agony suffered.</li>
                            </ul>

                            <p className="text-red-600 font-bold font-sans text-sm mt-8">FAILURE TO COMPLY WILL FORCE US TO FILE A FORMAL COMPLAINT WITH THE APPROPRIATE CONSUMER FORUM.</p>

                            <p className="mt-10">Yours faithfully,</p>
                            <p>[Your Signature/Name]</p>
                        </div>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
                        <h4 className="text-amber-800 font-bold mb-2 flex items-center gap-2">Legal Tip: Use Electronic Proof</h4>
                        <p className="text-amber-900 text-sm leading-relaxed">
                            Always keep original invoices, warranty cards, and proof of payment. Modern courts now often accept notices sent via email or WhatsApp, but physical registered post remains the gold standard for evidence.
                        </p>
                    </div>
                </section>

                {/* ──────────────────────────────────────
                    SECTION 4 · WHY VYOMBIZ
                ────────────────────────────────────── */}
                <section
                    id="why-vyombiz"
                    ref={setRef("why-vyombiz")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>Our Edge</SectionLabel>
                    <SectionHeading>Why Choose Vyombiz?</SectionHeading>

                    <BodyText>
                        Vyombiz is India's premier professional platform, executing legal work for thousands of companies every month. We combine cutting-edge tech with deep legal expertise to protect your consumer rights.
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-6 my-10">
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <Users size={24} className="text-[#005a9c]" />
                            </div>
                            <h4 className="text-[18px] font-bold text-[#072b47] mb-3">300-Strong Team</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Our experienced business advisors and legal professionals are always just a call away from securing your rights.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <Briefcase size={24} className="text-[#005a9c]" />
                            </div>
                            <h4 className="text-[18px] font-bold text-[#072b47] mb-3">Access To Experts</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">We coordinate with reliable professionals to fulfill your requirements, with real-time tracking on our online platform.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <FileText size={24} className="text-[#005a9c]" />
                            </div>
                            <h4 className="text-[18px] font-bold text-[#072b47] mb-3">Realistic Expectations</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">We handle all the paperwork and provide absolute clarity on the process so you have clear goals.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <Landmark size={24} className="text-[#005a9c]" />
                            </div>
                            <h4 className="text-[18px] font-bold text-[#072b47] mb-3">Smooth Interaction</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Our goal is to make your interaction with regulatory bodies as smooth as possible through expert intervention.</p>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────
                    SECTION 5 · FAQs
                ────────────────────────────────────── */}
                <section
                    id="faq"
                    ref={setRef("faq")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>FAQs</SectionLabel>
                    <SectionHeading>Frequently Asked Questions</SectionHeading>
                    <BodyText>
                        Common queries regarding the legal process under the Consumer Protection Act.
                    </BodyText>

                    <div className="mt-8">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <div className="mt-20 bg-[#072b47] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Don't Let Your Rights Be Ignored.</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Take the first step towards justice today. Our expert lawyers will help you draft a powerful legal notice that commands attention.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">Draft My Notice Now</button>
                            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-2">
                                <Phone size={18} /> Call a Consultant
                            </button>
                        </div>
                    </div>
                </div>

            </div>{/* /content body */}
        </div>
    );
};

export default LegalNoticeConsumerProtection;
