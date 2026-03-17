import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare, Home, Map } from "lucide-react";
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
const PropertyLawyer = () => {
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
            question: "Why do I need a property lawyer when buying property?",
            answer: "A property lawyer verifies legal documents, checks ownership history, and ensures that the transaction follows legal procedures."
        },
        {
            question: "What documents are required for property verification?",
            answer: "Common documents include title deeds, encumbrance certificates, tax receipts, and property registration records."
        },
        {
            question: "Can property lawyers help resolve property disputes?",
            answer: "Yes. Property lawyers handle legal disputes related to ownership, land boundaries, tenancy conflicts, and inheritance matters."
        },
        {
            question: "How long does property registration take?",
            answer: "The timeline may vary depending on documentation and local registration procedures, but legal guidance can significantly streamline the process."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Property"
                heroTitleSuffix="Lawyers"
                heroDescription="Buying, selling, leasing, or investing in property involves complex legal processes. Professional legal guidance helps you avoid disputes, verify ownership, and ensure every transaction is legally protected. Connect with experienced property lawyers today."
                stats={[
                    { count: "Expert", label: "Legal Advice" },
                    { count: "95%", label: "Success Rate" },
                    { count: "24/7", label: "Support" }
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
                    <SectionHeading>Why Property Legal Assistance Matters</SectionHeading>
                    <BodyText>
                        Real estate transactions often involve large investments and complex documentation. Without proper legal review, issues such as disputed ownership, unclear titles, or incomplete agreements can create serious financial and legal risks.
                    </BodyText>
                    <BodyText>
                        Professional property lawyers ensure that every legal detail is carefully reviewed before a transaction takes place. With expert assistance, you can confidently handle property purchases, inheritance claims, land disputes, and registration processes.
                    </BodyText>
                    <BodyText>
                        Vyombiz managed by Clink Consultancy Services Private Limited connects individuals and businesses with legal professionals who specialize in property law and real estate documentation.
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                        <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl">
                            <h4 className="font-bold text-[#072b47] mb-2">Legal Protection</h4>
                            <p className="text-sm text-slate-600">Ensure that all documents and agreements comply with applicable property laws.</p>
                        </div>
                        <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl">
                            <h4 className="font-bold text-[#072b47] mb-2">Risk Reduction</h4>
                            <p className="text-sm text-slate-600">Identify legal risks such as disputed titles, pending loans, or illegal construction.</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services</SectionLabel>
                    <SectionHeading>Property Legal Services Offered</SectionHeading>
                    <BodyText>
                        Property lawyers assist with a wide range of real estate legal matters to ensure compliance and protect your interests.
                    </BodyText>

                    <div className="grid md:grid-cols-3 gap-6 my-8">
                        <InfoCard icon={<Search size={18} />} title="Title Verification">
                            Verifying ownership and title history is crucial before buying property.
                        </InfoCard>
                        <InfoCard icon={<FileText size={18} />} title="Sale Agreements">
                            Drafting or reviewing purchase agreements for legal clarity and compliance.
                        </InfoCard>
                        <InfoCard icon={<CheckCircle2 size={18} />} title="Registration">
                            Guidance through documentation and procedural compliance for smooth execution.
                        </InfoCard>
                        <InfoCard icon={<Scale size={18} />} title="Dispute Resolution">
                            Representation for land ownership, boundary issues, and tenancy conflicts.
                        </InfoCard>
                        <InfoCard icon={<Briefcase size={18} />} title="Lease Agreements">
                            Well-drafted agreements to prevent conflicts between landlords and tenants.
                        </InfoCard>
                        <InfoCard icon={<Shield size={18} />} title="Due Diligence">
                            Legal risk assessment and compliance checks before finalizing transactions.
                        </InfoCard>
                    </div>

                    <SubHeading>Types of Property Matters Handled</SubHeading>
                    <BulletList items={[
                        "Residential property purchase or sale",
                        "Commercial property transactions",
                        "Agricultural land legal matters",
                        "Builder-buyer disputes",
                        "Joint property ownership disputes",
                        "Property inheritance and succession issues",
                        "Land title disputes and litigation"
                    ]} />
                </section>

                {/* SECTION 3 · PROCESS */}
                <section id="process" ref={setRef("process")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>The Workflow</SectionLabel>
                    <SectionHeading>How Our Legal Support Works</SectionHeading>
                    <div className="space-y-6 my-8">
                        {[
                            { title: "Submit Requirement", desc: "Share your property related legal query or requirement." },
                            { title: "Connect with Lawyer", desc: "Qualified property lawyers review your case and provide guidance." },
                            { title: "Document Review", desc: "Lawyers verify documents, draft agreements, and assist with the legal process." },
                            { title: "Resolution", desc: "Your property transaction or legal matter is handled with professional support." },
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

                    <SubHeading>Common Documents Reviewed</SubHeading>
                    <BulletList items={[
                        "Property title documents & Sale deed",
                        "Encumbrance certificate",
                        "Land use approvals",
                        "Property tax records",
                        "Builder agreements",
                        "Registration documents"
                    ]} />
                </section>

                {/* SECTION 4 · WHY US */}
                <section id="why-us" ref={setRef("why-us")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Pride</SectionLabel>
                    <SectionHeading>When Should You Consult a Property Lawyer?</SectionHeading>
                    <BodyText>Consulting a legal expert early can prevent costly mistakes. Consider professional help when:</BodyText>
                    <BulletList items={[
                        "Purchasing or selling property for the first time.",
                        "Registering property documents at the sub-registrar office.",
                        "Handling inherited property or succession certificates.",
                        "Facing ownership disputes or boundary issues.",
                        "Drafting lease or rental agreements for commercial spaces.",
                        "Verifying property documents before making an investment."
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Protect Your Property Investments</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Get expert legal guidance to ensure every property transaction is secure and dispute-free.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg">Talk to a Property Lawyer</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PropertyLawyer;
