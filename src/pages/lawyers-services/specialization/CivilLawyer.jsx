import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare } from "lucide-react";
import InsideNavbar from "../../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Legal Services" },
    { id: "why-need", label: "Why Hire A Lawyer" },
    { id: "approach", label: "Our Approach" },
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
const CivilLawyer = () => {
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
            question: "What is civil litigation?",
            answer: "Civil litigation is the legal process of resolving non-criminal disputes through the court system, where one party seeks compensation or specific performance from another."
        },
        {
            question: "How long does a civil case usually take?",
            answer: "The duration of a civil case depends on the complexity of the dispute, court schedules, and whether the parties opt for settlement or full trial. It can range from a few months to several years."
        },
        {
            question: "What is the difference between a civil and criminal case?",
            answer: "Civil cases involve disputes between individuals or organizations over legal duties and responsibilities, usually resulting in monetary compensation. Criminal cases involve offences against the state and can lead to imprisonment."
        },
        {
            question: "Do I always have to go to court for a civil dispute?",
            answer: "Not necessarily. Many civil disputes are resolved through Alternative Dispute Resolution (ADR) methods like mediation, arbitration, or out-of-court settlements."
        },
        {
            question: "What documents do I need for a property dispute?",
            answer: "Key documents include title deeds, sale agreements, property tax receipts, boundary maps, and any formal correspondence related to the dispute."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Civil"
                heroTitleSuffix="Lawyers"
                heroDescription="Resolve disputes with confidence. Get expert civil legal support for contracts, property conflicts, recovery cases, and more—handled by experienced civil lawyers."
                stats={[
                    { count: "Expert", label: "Civil Advice" },
                    { count: "95%", label: "Success Rate" },
                    { count: "24/7", label: "Consultation" }
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
                    <SectionHeading>Trusted Civil Lawyers for Legal Disputes</SectionHeading>
                    <BodyText>
                        Civil disputes can arise in both personal and business life—from property disagreements and contractual conflicts to financial recovery matters. Handling such cases requires strong legal knowledge, strategic planning, and proper representation.
                    </BodyText>
                    <BodyText>
                        At Vyombiz, you gain access to experienced civil lawyers who understand the complexities of civil litigation and dispute resolution. Our legal professionals guide clients through every stage of the legal process—from case evaluation and documentation to court representation and settlement negotiations.
                    </BodyText>
                    <BodyText>
                        Through Vyombiz managed by Clink Consultancy Services Private Limited, individuals and businesses receive reliable civil legal assistance that prioritizes clarity, efficiency, and favorable outcomes.
                    </BodyText>

                    <Divider />

                    <SubHeading>What Do Civil Lawyers Do?</SubHeading>
                    <BodyText>
                        Civil lawyers deal with non-criminal legal disputes between individuals, businesses, or organizations. Their primary goal is to protect legal rights, resolve conflicts, and ensure fair outcomes through negotiation, mediation, or court proceedings. Civil lawyers typically handle matters such as:
                    </BodyText>
                    <BulletList items={[
                        "Property disputes and ownership conflicts",
                        "Contract breaches and commercial disagreements",
                        "Recovery of money or unpaid dues",
                        "Consumer disputes and legal claims",
                        "Landlord-tenant conflicts",
                        "Partnership disagreements"
                    ]} />
                    <BodyText>
                        With proper legal representation, civil disputes can often be resolved faster and more effectively while minimizing financial and reputational risks.
                    </BodyText>
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Legal Services</SectionLabel>
                    <SectionHeading>Civil Legal Services Offered</SectionHeading>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <InfoCard icon={<Building2 size={16} />} title="Property Disputes">
                            <p className="text-sm text-slate-600">Property disagreements are common. We handle ownership disputes, boundary arguments, and title verification.</p>
                        </InfoCard>
                        <InfoCard icon={<FileText size={16} />} title="Contract Resolution">
                            <p className="text-sm text-slate-600">Civil lawyers handle breach of contract cases, contract interpretation, and compensation claims.</p>
                        </InfoCard>
                        <InfoCard icon={<Scale size={16} />} title="Recovery of Money">
                            <p className="text-sm text-slate-600">Recover outstanding payments through legal procedures including recovery suits and settlement support.</p>
                        </InfoCard>
                        <InfoCard icon={<ShoppingBag size={16} />} title="Consumer Disputes">
                            <p className="text-sm text-slate-600">File complaints and seek compensation for unfair practices before consumer forums.</p>
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 3 · WHY HIRE A LAWYER */}
                <section id="why-need" ref={setRef("why-need")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Expertise</SectionLabel>
                    <SectionHeading>Why Legal Expertise Matters in Civil Cases</SectionHeading>
                    <BodyText>
                        Civil disputes often involve complex documentation, procedural rules, and legal arguments. Without proper legal guidance, cases may become prolonged or unfavorable. Professional civil lawyers help by:
                    </BodyText>
                    <BulletList items={[
                        "Analyzing the legal strength of your case",
                        "Preparing proper documentation and evidence",
                        "Drafting legal notices and petitions",
                        "Representing clients effectively in court",
                        "Negotiating settlements when possible"
                    ]} />
                    <BodyText>
                        Through Vyombiz managed by Clink Consultancy Services Private Limited, clients receive legal guidance designed to simplify complicated civil matters while protecting their rights and interests.
                    </BodyText>
                </section>

                {/* SECTION 4 · OUR APPROACH */}
                <section id="approach" ref={setRef("approach")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Process</SectionLabel>
                    <SectionHeading>Our Approach to Civil Legal Support</SectionHeading>
                    <BodyText>
                        A structured legal approach helps resolve disputes efficiently. Our civil lawyers focus on understanding each client’s situation before recommending the best legal strategy.
                    </BodyText>

                    <div className="space-y-6 my-8">
                        {[
                            { title: "Case Assessment", desc: "Understanding the dispute and reviewing documents." },
                            { title: "Legal Strategy", desc: "Identifying the best legal approach for resolution." },
                            { title: "Documentation & Filing", desc: "Preparing legal notices, petitions, or claims." },
                            { title: "Negotiation or Litigation", desc: "Attempting settlement or proceeding with court action." },
                            { title: "Case Follow-Up", desc: "Continuous support until the matter is resolved." },
                        ].map((step, idx) => (
                            <div key={idx} className="flex gap-6 items-start group">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f8fbff] border-2 border-[#d0e3f5] text-[#005a9c] flex items-center justify-center font-bold text-sm">
                                    {idx + 1}
                                </span>
                                <div>
                                    <h4 className="text-[16px] font-bold text-[#072b47] mb-1">{step.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Divider />

                    <SubHeading>Who Should Consult a Civil Lawyer?</SubHeading>
                    <BodyText>Civil legal assistance can be beneficial for:</BodyText>
                    <BulletList items={[
                        "Business owners facing contractual disputes",
                        "Individuals involved in property conflicts",
                        "Landlords or tenants with rental disagreements",
                        "Consumers seeking compensation for unfair practices",
                        "Anyone requiring legal representation in civil court matters"
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Get Professional Civil Legal Assistance</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Civil disputes require careful handling and strong legal support. Act now to protect your rights and interests with experienced civil lawyers through Vyombiz.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">Talk to a Legal Expert Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CivilLawyer;
