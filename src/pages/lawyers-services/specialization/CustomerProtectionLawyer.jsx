import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare } from "lucide-react";
import InsideNavbar from "../../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "rights", label: "Consumer Rights" },
    { id: "services", label: "Legal Services" },
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
const CustomerProtectionLawyer = () => {
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
            question: "What cases can be filed in consumer court?",
            answer: "Cases related to defective products, poor services, false advertising, unfair trade practices, and e-commerce disputes can be filed in consumer courts."
        },
        {
            question: "Can I file a consumer complaint online?",
            answer: "Yes. Consumers can file complaints online through government portals or with legal assistance to ensure proper documentation."
        },
        {
            question: "How long does a consumer complaint take?",
            answer: "The timeline varies depending on the complexity of the case, but consumer forums are designed to resolve disputes faster than regular courts."
        },
        {
            question: "What compensation can I claim?",
            answer: "Compensation may include product replacement, refund, financial damages, mental agony compensation, or service correction."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Customer"
                heroTitleSuffix="Protection Lawyers"
                heroDescription="Protect Your Consumer Rights with Expert Legal Support. Facing unfair business practices, defective products, or misleading services? A Customer Protection Lawyer helps you fight back legally and claim the compensation you deserve."
                stats={[
                    { count: "File", label: "Complaints" },
                    { count: "Claim", label: "Compensation" },
                    { count: "Resolve", label: "Disputes Quickly" }
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
                    <SectionHeading>Who is a Customer Protection Lawyer?</SectionHeading>
                    <BodyText>
                        A Customer Protection Lawyer specializes in handling legal matters related to consumer rights and protection laws. These lawyers help individuals and businesses address issues such as defective products, poor service quality, false advertising, unfair trade practices, and financial losses caused by service providers.
                    </BodyText>
                    <BodyText>
                        Consumer laws are designed to protect buyers in the marketplace. However, many people struggle to navigate legal procedures, documentation, and court processes. A customer protection lawyer simplifies this process by providing strategic legal support and ensuring your complaint is filed correctly under consumer protection regulations.
                    </BodyText>
                    <BodyText>
                        At Vyombiz managed by Clink Consultancy Services Private Limited, experienced legal professionals assist clients in resolving consumer disputes efficiently through the appropriate consumer forums and legal channels.
                    </BodyText>

                    <Divider />

                    <SubHeading>When Do You Need a Customer Protection Lawyer?</SubHeading>
                    <BodyText>
                        Many consumers face issues but hesitate to take legal action due to lack of knowledge about their rights. A consumer protection lawyer becomes essential in situations such as:
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-6 my-6">
                        <InfoCard icon={<AlertCircle size={16} />} title="Defective Products">
                            <BodyText>If a purchased product fails to meet promised standards or causes damage, legal action can be taken against the manufacturer or seller.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Briefcase size={16} />} title="Poor or Incomplete Services">
                            <BodyText>Services that are delivered negligently, incompletely, or below promised standards may qualify for compensation claims.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<FileText size={16} />} title="Misleading Advertisements">
                            <BodyText>False marketing claims or deceptive promotions that mislead customers can be challenged legally.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<ShoppingBag size={16} />} title="Unfair Trade Practices & E-commerce Disputes">
                            <BodyText>Businesses engaging in unethical practices or online purchases that involve fraud, non-delivery, or defective goods can be legally contested.</BodyText>
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 2 · CONSUMER RIGHTS */}
                <section id="rights" ref={setRef("rights")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Your Rights</SectionLabel>
                    <SectionHeading>Consumer Rights Every Customer Should Know</SectionHeading>
                    <BodyText>
                        Consumer laws empower buyers with certain rights that protect them from exploitation in the marketplace.
                    </BodyText>

                    <div className="space-y-4 my-6">
                        <InfoCard icon={<Shield size={16} />} title="Right to Safety & Choice">
                            <BodyText>Consumers have the right to protection against hazardous goods and services. They also have the freedom to choose from a variety of goods and services at competitive prices.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<BookOpen size={16} />} title="Right to Information & Education">
                            <BodyText>Customers must receive accurate information regarding quality, quantity, price, and standards of products. Consumers must be aware of their rights and responsibilities while purchasing goods or services.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<MessageSquare size={16} />} title="Right to Be Heard">
                            <BodyText>Consumers have the right to raise complaints and ensure their concerns are considered.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Scale size={16} />} title="Right to Seek Redressal">
                            <BodyText>Customers can demand compensation for damages or unfair practices through legal forums.</BodyText>
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 3 · LEGAL SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services</SectionLabel>
                    <SectionHeading>Our Customer Protection Legal Services</SectionHeading>
                    <BodyText>
                        At Vyombiz managed by Clink Consultancy Services Private Limited, we provide end-to-end legal support for consumer disputes. Our legal experts assist clients at every stage of the complaint process.
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Consumer Complaint Filing</h4>
                            <p className="text-sm text-slate-600">Professional assistance in drafting and submitting consumer complaints to the appropriate consumer forum.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Legal Notice Preparation</h4>
                            <p className="text-sm text-slate-600">Preparation and sending of legal notices to companies or service providers involved in disputes.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Consumer Court Representation</h4>
                            <p className="text-sm text-slate-600">Legal representation before district, state, or national consumer forums.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Compensation Claims</h4>
                            <p className="text-sm text-slate-600">Assistance in claiming refunds, replacements, damages, or financial compensation.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5] md:col-span-2">
                            <h4 className="font-bold text-[#072b47] mb-2">Online Consumer Dispute Assistance</h4>
                            <p className="text-sm text-slate-600">Support for disputes related to e-commerce platforms, online payments, and digital services.</p>
                        </div>
                    </div>

                    <Divider />

                    <SubHeading>Consumer Protection Law in India</SubHeading>
                    <BodyText>
                        India’s consumer rights framework is governed by the Consumer Protection Act, 2019, which provides comprehensive protection. The law established a three-tier consumer dispute redressal system:
                    </BodyText>
                    <BulletList items={[
                        "District Consumer Disputes Redressal Commission",
                        "State Consumer Disputes Redressal Commission",
                        "National Consumer Disputes Redressal Commission"
                    ]} />
                    <BodyText>
                        These forums allow consumers to file complaints and seek compensation without complicated court procedures, making justice more accessible.
                    </BodyText>
                </section>

                {/* SECTION 4 · WHY VYOMBIZ */}
                <section id="why-vyombiz" ref={setRef("why-vyombiz")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Edge</SectionLabel>
                    <SectionHeading>Why Choose Vyombiz for Consumer Protection Legal Support?</SectionHeading>
                    <BodyText>
                        Choosing the right legal service provider is essential when dealing with consumer disputes. At Vyombiz, our approach focuses on transparency, efficiency, and client-centric legal solutions. We aim to simplify legal procedures and ensure consumers receive the justice and compensation they deserve.
                    </BodyText>

                    <div className="space-y-4 my-6">
                        <InfoCard icon={<Scale size={16} />} title="Benefits of Hiring a Customer Protection Lawyer">
                            <BulletList items={[
                                "Expert Legal Guidance: Professionals ensure that your case is legally strong and properly documented.",
                                "Faster Resolution: Legal experts help avoid delays caused by incorrect filings or missing documentation.",
                                "Higher Compensation Possibility: Lawyers help present evidence effectively to maximize compensation.",
                                "Stress-Free Legal Process: You receive guidance throughout the entire process, from complaint filing to resolution."
                            ]} />
                        </InfoCard>
                    </div>

                    <SubHeading>How Our Process Works</SubHeading>
                    <div className="space-y-6 my-8">
                        {[
                            { step: "01", title: "Case Evaluation", desc: "Our legal experts review your issue and assess the legal options available." },
                            { step: "02", title: "Documentation & Legal Notice", desc: "We prepare the necessary documents and issue legal notices to the concerned party." },
                            { step: "03", title: "Complaint Filing", desc: "Your case is filed in the appropriate consumer forum." },
                            { step: "04", title: "Legal Representation", desc: "Our legal professionals assist you throughout hearings and proceedings." },
                            { step: "05", title: "Resolution & Compensation", desc: "We work to secure the best possible outcome for your case." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-6 items-start group">
                                <span className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-200 text-yellow-400 flex items-center justify-center font-bold group-hover:bg-[#005a9c] group-hover:text-white group-hover:border-[#005a9c] transition-all duration-300">
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Protect Your Consumer Rights Today</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">If you have faced unfair treatment from a company or service provider, legal help can make a difference. Consult a Customer Protection Lawyer and take the right steps toward resolving your consumer dispute.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">Start Your Consumer Complaint Today</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerProtectionLawyer;

