import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare } from "lucide-react";
import InsideNavbar from "../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Services" },
    { id: "benefits", label: "Benefits" },
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
const CorporateLawyer = () => {
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
            question: "What does a corporate lawyer do?",
            answer: "A corporate lawyer provides legal guidance related to company formation, contracts, compliance, mergers, corporate governance, and dispute resolution for businesses."
        },
        {
            question: "When should a business hire a corporate lawyer?",
            answer: "Businesses should consult a corporate lawyer during company formation, contract drafting, regulatory compliance, mergers, partnerships, or when legal disputes arise."
        },
        {
            question: "Do startups need corporate lawyers?",
            answer: "Yes. Startups benefit greatly from corporate lawyers who help structure the business properly, draft founder agreements, protect intellectual property, and ensure regulatory compliance."
        },
        {
            question: "Can a corporate lawyer help with business contracts?",
            answer: "Yes. Corporate lawyers draft, review, and negotiate business contracts to ensure legal protection and clarity between parties."
        },
        {
            question: "How can corporate legal services help business growth?",
            answer: "Corporate legal services reduce risks, protect business interests, ensure compliance, and provide legal guidance during expansion, investments, or restructuring."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Corporate Lawyer"
                heroTitleSuffix="Services for Businesses"
                heroSubtitle="Strategic Legal Support for Companies at Every Stage"
                heroDescription="Running a business means making decisions that carry legal impact. A corporate lawyer ensures your business operates within the law while protecting it from risks, disputes, and compliance issues. Whether you're a startup, SME, or growing enterprise, professional legal support helps you scale with confidence."
                stats={[
                    { count: "Business", label: "Structuring", icon: <Building2 size={20} /> },
                    { count: "Contract", label: "Management", icon: <FileText size={20} /> },
                    { count: "Legal", label: "Compliance", icon: <Shield size={20} /> }
                ]}
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
                    <SectionHeading>Why Businesses Need a Corporate Lawyer</SectionHeading>
                    <BodyText>
                        Corporate law is not only about solving legal problems — it’s about preventing them before they arise.
                    </BodyText>
                    <BodyText>
                        A corporate lawyer helps businesses:
                    </BodyText>
                    <BulletList items={[
                        "Structure companies legally",
                        "Draft and review contracts",
                        "Ensure regulatory compliance",
                        "Manage shareholder relations",
                        "Handle mergers, acquisitions, and restructuring",
                        "Resolve corporate disputes"
                    ]} />
                    <BodyText>
                        Professional legal guidance helps businesses avoid penalties, reduce legal risk, and build stronger corporate governance. Vyombiz managed by Clink Consultancy Services Private Limited works with experienced legal professionals who understand the complexities of modern businesses and evolving regulatory requirements.
                    </BodyText>
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Legal Services</SectionLabel>
                    <SectionHeading>Our Corporate Lawyer Services</SectionHeading>
                    <BodyText>
                        Businesses require legal assistance at different stages of growth. Our corporate lawyers provide strategic support across multiple areas.
                    </BodyText>

                    <div className="space-y-4 my-6">
                        <InfoCard icon={<Building2 size={16} />} title="Business Formation & Structuring">
                            <BodyText>Choosing the right business structure impacts taxation, compliance, and liability.</BodyText>
                            <BulletList items={[
                                "Company incorporation guidance",
                                "Shareholding structure planning",
                                "Partnership agreements",
                                "Founder agreements",
                                "Corporate restructuring"
                            ]} />
                        </InfoCard>

                        <InfoCard icon={<FileText size={16} />} title="Contract Drafting & Legal Documentation">
                            <BodyText>Contracts define business relationships and protect interests. Well-drafted contracts minimize legal conflicts and provide clarity for all parties.</BodyText>
                            <BulletList items={[
                                "Business agreements and Vendor contracts",
                                "Shareholder agreements and Joint venture agreements",
                                "Service agreements and Employment contracts"
                            ]} />
                        </InfoCard>

                        <InfoCard icon={<Shield size={16} />} title="Corporate Compliance & Regulatory Support">
                            <BodyText>Companies must follow various regulations depending on their industry and operations. Vyombiz helps businesses stay aligned with evolving corporate laws and regulatory frameworks.</BodyText>
                            <BulletList items={[
                                "Corporate governance compliance",
                                "ROC filings and regulatory guidance",
                                "Board resolutions and documentation",
                                "Statutory compliance advisory",
                                "Risk and compliance audits"
                            ]} />
                        </InfoCard>

                        <InfoCard icon={<Briefcase size={16} />} title="Mergers, Acquisitions & Business Restructuring">
                            <BodyText>Corporate lawyers play a critical role in major business transitions. Professional legal oversight ensures that business transactions remain legally secure and transparent.</BodyText>
                            <BulletList items={[
                                "Due diligence and M&A legal advisory",
                                "Transaction structuring",
                                "Share purchase agreements",
                                "Corporate restructuring strategies"
                            ]} />
                        </InfoCard>

                        <InfoCard icon={<Scale size={16} />} title="Corporate Dispute Prevention & Resolution">
                            <BodyText>Corporate conflicts can arise between partners, shareholders, vendors, or competitors. Early legal intervention helps prevent disputes from affecting business growth.</BodyText>
                            <BulletList items={[
                                "Shareholder disputes and Contractual conflicts",
                                "Partnership disputes and Corporate litigation support",
                                "Arbitration and mediation"
                            ]} />
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 3 · BENEFITS */}
                <section id="benefits" ref={setRef("benefits")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>The Advantages</SectionLabel>
                    <SectionHeading>Benefits of Hiring a Corporate Lawyer</SectionHeading>
                    <BodyText>
                        Businesses that invest in legal expertise often avoid costly litigation and compliance issues. Professional corporate legal support offers several advantages:
                    </BodyText>
                    <BulletList items={[
                        "Strong legal protection for business operations",
                        "Reduced regulatory risks and penalties",
                        "Professional contract management",
                        "Better dispute prevention",
                        "Strategic guidance for business expansion",
                        "Support during mergers and investments"
                    ]} />

                    <Divider />
                    
                    <SubHeading>Who Should Hire a Corporate Lawyer</SubHeading>
                    <BodyText>
                        Corporate lawyers are valuable for businesses at multiple stages:
                    </BodyText>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Startups</h4>
                            <p className="text-sm text-slate-600">Startups launching new ventures</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Expanding Companies</h4>
                            <p className="text-sm text-slate-600">Companies expanding operations</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Partnerships</h4>
                            <p className="text-sm text-slate-600">Businesses entering partnerships</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Enterprises</h4>
                            <p className="text-sm text-slate-600">Enterprises planning mergers or acquisitions</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 4 · WHY VYOMBIZ */}
                <section id="why-vyombiz" ref={setRef("why-vyombiz")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Edge</SectionLabel>
                    <SectionHeading>Why Choose Vyombiz for Corporate Lawyer Services</SectionHeading>
                    <BodyText>
                        Businesses trust Vyombiz for professional and structured legal assistance. We are committed to helping businesses navigate corporate law with clarity and confidence. Key advantages include:
                    </BodyText>
                    
                    <BulletList items={[
                        "Experienced corporate legal professionals",
                        "Business-focused legal solutions",
                        "Transparent service process",
                        "Faster documentation and legal advisory",
                        "Support across multiple corporate legal areas"
                    ]} />

                    <Divider />

                    <SubHeading>How Our Corporate Lawyer Service Works</SubHeading>
                    <BodyText>
                        Our legal process is designed to be simple, structured, and business-friendly.
                    </BodyText>
                    <div className="space-y-6 my-8">
                        {[
                            { step: "01", title: "Legal Consultation", desc: "Discuss your business requirements with an experienced corporate lawyer." },
                            { step: "02", title: "Case & Compliance Review", desc: "The lawyer reviews contracts, structure, and legal risks involved." },
                            { step: "03", title: "Strategy & Documentation", desc: "A legal strategy is prepared along with required agreements or filings." },
                            { step: "04", title: "Implementation & Support", desc: "Continuous support ensures compliance and legal protection for your business." }
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Scale Your Business with Confidence</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Get strategic legal support to protect your business interests, ensure compliance, and safely navigate corporate complexities.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">Talk to a Corporate Lawyer</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CorporateLawyer;
