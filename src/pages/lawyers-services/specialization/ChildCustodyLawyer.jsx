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
const ChildCustodyLawyer = () => {
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
            question: "Who gets child custody after divorce in India?",
            answer: "Courts decide custody based on the child’s best interests, considering factors like parental capability, financial stability, and emotional well-being."
        },
        {
            question: "Can fathers get child custody in India?",
            answer: "Yes. Courts grant custody to fathers if it is proven to be in the child’s best interest."
        },
        {
            question: "At what age can a child decide custody?",
            answer: "Generally, courts may consider a child’s preference once they reach a reasonable level of maturity, often around 9 years or older."
        },
        {
            question: "Can custody orders be changed later?",
            answer: "Yes. If circumstances change, parents can apply for custody modification through the court."
        },
        {
            question: "How long does a custody case take?",
            answer: "The timeline depends on court procedures, case complexity, and whether the matter is resolved through mediation or litigation."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Child Custody"
                heroTitleSuffix="Lawyers"
                heroDescription="Protect What Matters Most — Your Child’s Future. Child custody disputes can be emotionally overwhelming and legally complex. Get expert legal guidance to secure the best outcome for your child and your parental rights."
                stats={[
                    { count: "Expert", label: "Custody Lawyers" },
                    { count: "Focused", label: "on Child Welfare" },
                    { count: "Confidential", label: "Legal Support" }
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
                    <SectionHeading>Trusted Child Custody Lawyers</SectionHeading>
                    <BodyText>
                        When families go through separation or divorce, the most sensitive issue often becomes child custody. Courts prioritize the best interests of the child, but navigating custody laws and legal procedures requires expert legal understanding.
                    </BodyText>
                    <BodyText>
                        A skilled child custody lawyer helps you present a strong legal case, ensures your parental rights are protected, and guides you through negotiations or court proceedings.
                    </BodyText>
                    <BodyText>
                        Vyombiz managed by Clink Consultancy Services Private Limited connects individuals with experienced child custody lawyers who assist with custody petitions, visitation rights, guardianship matters, and custody modifications with a strategic and compassionate approach.
                    </BodyText>

                    <Divider />

                    <SubHeading>What is Child Custody?</SubHeading>
                    <BodyText>
                        Child custody refers to the legal rights and responsibilities a parent or guardian has over a child after separation or divorce. Custody determines where the child will live, who will make important decisions for them, and how both parents will stay involved in the child’s life.
                    </BodyText>
                    <BodyText>
                        In India, custody matters are governed by laws such as:
                    </BodyText>
                    <BulletList items={[
                        "Guardians and Wards Act, 1890",
                        "Hindu Minority and Guardianship Act, 1956",
                        "Personal laws depending on religion"
                    ]} />
                    <BodyText>
                        The court always evaluates factors like child welfare, emotional stability, financial capability, and parental involvement before making a custody decision.
                    </BodyText>

                    <Divider />

                    <SubHeading>Types of Child Custody in India</SubHeading>
                    <BodyText>
                        Understanding the different custody arrangements can help parents make informed decisions.
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Physical Custody</h4>
                            <p className="text-sm text-slate-600">The child lives with one parent while the other parent is given visitation rights.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Joint Custody</h4>
                            <p className="text-sm text-slate-600">Both parents share responsibility and custody, allowing the child to spend time with each parent on a scheduled basis.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Legal Custody</h4>
                            <p className="text-sm text-slate-600">This gives parents the authority to make important decisions regarding the child’s education, healthcare, and upbringing.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">Sole Custody</h4>
                            <p className="text-sm text-slate-600">In certain cases, one parent is granted full custody due to the child’s safety, welfare, or other legal considerations.</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 2 · LEGAL SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services & Process</SectionLabel>
                    <SectionHeading>Our Child Custody Legal Services</SectionHeading>
                    <BodyText>
                        Our legal professionals provide comprehensive support for different child custody matters.
                    </BodyText>

                    <div className="space-y-4 my-6">
                        <InfoCard icon={<Scale size={16} />} title="Child Custody Consultation">
                            <BodyText>Understand your legal rights, custody options, and the best legal strategy for your situation.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<FileText size={16} />} title="Filing Custody Petitions">
                            <BodyText>Assistance with preparing and filing custody applications in the appropriate family court.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Users size={16} />} title="Visitation Rights">
                            <BodyText>Legal support to ensure parents receive fair and structured visitation rights.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Shield size={16} />} title="Custody Modifications">
                            <BodyText>Help in modifying existing custody arrangements if circumstances change.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Gavel size={16} />} title="Guardianship Matters">
                            <BodyText>Legal support for appointing or challenging legal guardianship.</BodyText>
                        </InfoCard>
                    </div>

                    <Divider />

                    <SubHeading>Child Custody Process in India</SubHeading>
                    <BodyText>
                        Understanding the custody process helps parents prepare better for legal proceedings.
                    </BodyText>
                    <div className="space-y-6 my-8">
                        {[
                            { step: "01", title: "Legal Consultation", desc: "Discuss your case with a child custody lawyer to understand rights and possible outcomes." },
                            { step: "02", title: "Filing a Petition", desc: "A custody petition is filed in the family court outlining custody requests." },
                            { step: "03", title: "Court Evaluation", desc: "The court reviews evidence and may evaluate the child's needs, parental capability, and living conditions." },
                            { step: "04", title: "Mediation", desc: "Courts may encourage mediation between parents to reach a mutually beneficial agreement." },
                            { step: "05", title: "Final Custody Order", desc: "The court issues a custody order prioritizing the child's welfare." }
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

                    <SubHeading>Factors Courts Consider in Child Custody Cases</SubHeading>
                    <BodyText>Indian courts focus on the best interests of the child before deciding custody matters. Key factors include:</BodyText>
                    <BulletList items={[
                        "Emotional bond between child and parents",
                        "Child’s age and educational needs",
                        "Financial stability of parents",
                        "Living environment and safety",
                        "Parent’s ability to provide care",
                        "Child’s preference (in certain cases)"
                    ]} />
                    <BodyText>An experienced custody lawyer ensures these factors are presented effectively before the court.</BodyText>
                </section>

                {/* SECTION 3 · WHY HIRE A LAWYER */}
                <section id="why-need" ref={setRef("why-need")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Importance</SectionLabel>
                    <SectionHeading>Why You Need a Child Custody Lawyer</SectionHeading>
                    <BodyText>
                        Custody disputes involve emotional stress and complex legal procedures. A professional lawyer helps you handle the process strategically. A child custody lawyer can help you:
                    </BodyText>
                    <BulletList items={[
                        "File a custody petition in family court",
                        "Build a strong case focusing on the child’s welfare",
                        "Represent you during hearings and negotiations",
                        "Secure visitation rights",
                        "Modify existing custody arrangements",
                        "Resolve disputes through mediation"
                    ]} />
                    <BodyText>
                        Through Vyombiz managed by Clink Consultancy Services Private Limited, individuals can access legal professionals who understand family law intricacies and help achieve a fair and balanced custody arrangement.
                    </BodyText>
                </section>

                {/* SECTION 4 · WHY VYOMBIZ */}
                <section id="why-vyombiz" ref={setRef("why-vyombiz")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Edge</SectionLabel>
                    <SectionHeading>Why Choose Our Child Custody Legal Services</SectionHeading>
                    <BodyText>
                        Handling custody disputes requires both legal expertise and emotional sensitivity. Individuals seeking legal support often choose services through Vyombiz because of:
                    </BodyText>

                    <BulletList items={[
                        "Experienced family law professionals.",
                        "Confidential and secure legal assistance.",
                        "Clear legal guidance and documentation support.",
                        "Strategic approach focused on child welfare.",
                        "Reliable support throughout the legal process."
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Get Legal Help for Child Custody Matters</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Child custody decisions can shape a child’s future and family relationships. Having the right legal guidance ensures the process is handled fairly and effectively. Consult experienced lawyers through Vyombiz and secure the best future for your child.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">Talk to a Child Custody Lawyer Today</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChildCustodyLawyer;
