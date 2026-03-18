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
    { id: "process", label: "Our Process" },
    { id: "why-need", label: "Why Hire A Lawyer" },
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
const ContractLawyer = () => {
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
            question: "What does a contract lawyer do?",
            answer: "A contract lawyer drafts, reviews, and negotiates agreements to ensure they are legally valid and protect the interests of the parties involved."
        },
        {
            question: "When should I consult a contract lawyer?",
            answer: "It is recommended to consult a lawyer before signing any business agreement, partnership contract, employment contract, or vendor agreement."
        },
        {
            question: "Can a contract lawyer review an existing agreement?",
            answer: "Yes. Lawyers can review existing agreements, identify potential legal risks, and suggest modifications."
        },
        {
            question: "How long does it take to draft a contract?",
            answer: "The timeline depends on the complexity of the agreement, but most contracts can be drafted within a few working days."
        },
        {
            question: "Are online contract templates safe to use?",
            answer: "Generic templates may not cover specific legal requirements. Professional drafting ensures the agreement is legally enforceable and customized to your situation."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Contract"
                heroTitleSuffix="Lawyers"
                heroDescription="Protect your business with legally strong contracts drafted, reviewed, and negotiated by experienced professionals. Contracts handled by legal experts through Vyombiz ensure clarity, compliance, and enforceability."
                stats={[
                    { count: "Expert", label: "Drafting" },
                    { count: "99%", label: "Enforceability" },
                    { count: "24/7", label: "Legal Support" }
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
                    <SectionHeading>Trusted Contract Lawyers for Secure Business Agreements</SectionHeading>
                    <BodyText>
                        Contracts form the backbone of every successful business relationship. Whether you are entering into a partnership, hiring employees, signing with vendors, or working with investors, a properly structured agreement protects your interests and minimizes legal risks.
                    </BodyText>
                    <BodyText>
                        Professional contract lawyers help ensure that agreements are legally binding, clearly written, and aligned with current regulations.
                    </BodyText>
                    <BodyText>
                        Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses gain access to experienced contract lawyers who specialize in drafting, reviewing, and negotiating contracts for startups, entrepreneurs, SMEs, and established companies.
                    </BodyText>
                    <BodyText>
                        Our experts focus on creating agreements that are not only legally valid but also commercially practical and easy to understand.
                    </BodyText>

                    <Divider />

                    <SubHeading>Types of Contracts Our Lawyers Handle</SubHeading>
                    <BodyText>Our contract lawyers have expertise in handling a wide range of agreements commonly used by businesses and professionals:</BodyText>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-[#072b47] mb-2 text-sm">Business & Employment</h4>
                            <BulletList items={[
                                "Partnership & Shareholder Agreements",
                                "Employment Contracts & Policies",
                                "Non-Disclosure Agreements (NDAs)"
                            ]} />
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-[#072b47] mb-2 text-sm">Commercial & IT</h4>
                            <BulletList items={[
                                "Vendor & Supplier Contracts",
                                "Service Level Agreements (SLAs)",
                                "IP Licensing & Assignment"
                            ]} />
                        </div>
                    </div>
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services</SectionLabel>
                    <SectionHeading>Our Contract Lawyer Services</SectionHeading>
                    <BodyText>
                        Businesses require different types of contracts depending on their operations and industry. Our lawyers provide comprehensive assistance across various contract types.
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <InfoCard icon={<FileText size={16} />} title="Contract Drafting">
                            <p className="text-sm text-slate-600">Professionally drafted agreements tailored to your business model, ensuring enforceability.</p>
                        </InfoCard>
                        <InfoCard icon={<CheckCircle2 size={16} />} title="Contract Review">
                            <p className="text-sm text-slate-600">Identify legal loopholes, risky clauses, and compliance issues before signing any agreement.</p>
                        </InfoCard>
                        <InfoCard icon={<Scale size={16} />} title="Negotiation">
                            <p className="text-sm text-slate-600">Our lawyers help negotiate terms that protect your rights while maintaining relationships.</p>
                        </InfoCard>
                        <InfoCard icon={<Shield size={16} />} title="Compliance">
                            <p className="text-sm text-slate-600">Ensure agreements comply with applicable laws, regulations, and industry standards.</p>
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 3 · PROCESS */}
                <section id="process" ref={setRef("process")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Workflow</SectionLabel>
                    <SectionHeading>Our Contract Drafting Process</SectionHeading>
                    <BodyText>We follow a streamlined legal process designed to deliver reliable contracts efficiently.</BodyText>

                    <div className="space-y-6 my-8">
                        {[
                            { title: "Requirement Consultation", desc: "Discuss your contract requirements, business structure, and legal concerns." },
                            { title: "Legal Assessment", desc: "Our lawyers analyse the agreement structure, applicable laws, and potential risks." },
                            { title: "Drafting or Review", desc: "The contract is carefully drafted or reviewed with precise legal clauses." },
                            { title: "Client Feedback", desc: "Necessary revisions are made to align the agreement with your expectations." },
                            { title: "Final Delivery", desc: "Receive a legally structured and professionally formatted contract ready for execution." },
                        ].map((step, idx) => (
                            <div key={idx} className="flex gap-6 items-start group">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e8f1fb] text-[#005a9c] flex items-center justify-center font-bold text-sm">
                                    {idx + 1}
                                </span>
                                <div>
                                    <h4 className="text-[16px] font-bold text-[#072b47] mb-1">{step.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 4 · WHY HIRE A LAWYER */}
                <section id="why-need" ref={setRef("why-need")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Importance</SectionLabel>
                    <SectionHeading>Why You Need a Contract Lawyer</SectionHeading>
                    <BodyText>
                        Many businesses rely on generic templates. While these may appear convenient, they often lack essential clauses. Working with professional contract lawyers offers:
                    </BodyText>
                    <BulletList items={[
                        "Ensures legally binding and enforceable agreements.",
                        "Reduces the risk of future disputes and litigation.",
                        "Protects confidential information and intellectual property.",
                        "Provides clarity in roles, responsibilities, and obligations.",
                        "Prevents financial losses due to poorly drafted contracts."
                    ]} />
                    <BodyText>
                        By working with Vyombiz managed by Clink Consultancy Services Private Limited, clients receive reliable legal support designed to safeguard their professional interests.
                    </BodyText>
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Secure Your Agreements with Expert Contract Lawyers</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Avoid legal disputes and protect your business with professionally drafted contracts. Get started with experienced legal professionals through Vyombiz.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">Talk to a Lawyer Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContractLawyer;
