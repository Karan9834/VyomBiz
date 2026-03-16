import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare } from "lucide-react";
import InsideNavbar from "../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Legal Services" },
    { id: "laws", label: "Cyber Laws" },
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
const CyberCrimeLawyer = () => {
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
            question: "What should I do if I become a victim of cyber crime?",
            answer: "Immediately collect evidence such as screenshots, transaction details, and messages. Report the incident to the cyber crime portal and consult a cyber lawyer."
        },
        {
            question: "Can cyber crimes be traced?",
            answer: "Yes. Cyber investigators use digital tracking, IP tracing, and forensic tools to identify offenders."
        },
        {
            question: "How long does a cyber crime case take?",
            answer: "The duration depends on the nature of the offence, evidence available, and legal proceedings involved."
        },
        {
            question: "Can I recover money lost in online fraud?",
            answer: "In many cases recovery is possible through quick reporting and legal action."
        },
        {
            question: "Do businesses also need cyber crime lawyers?",
            answer: "Yes. Companies facing data breaches, online fraud, or digital reputation damage often require cyber legal support."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Cyber Crime"
                heroTitleSuffix="Lawyer"
                heroSubtitle="Cyber Crime Lawyer for Digital Fraud, Online Harassment & Data Theft"
                heroDescription="The internet has created endless opportunities for businesses and individuals—but it has also opened doors for cyber criminals. From financial fraud and hacking to identity theft and online harassment, cyber offences are increasing rapidly. Get expert legal support from experienced cyber crime lawyers who understand digital laws, cyber investigations, and online dispute resolution."
                stats={[
                    { count: "Legal", label: "Consultation", icon: <Users size={20} /> },
                    { count: "FIR", label: "Filing Assistance", icon: <FileText size={20} /> },
                    { count: "Digital", label: "Rights Protection", icon: <Shield size={20} /> }
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
                    <SectionHeading>What is Cyber Crime?</SectionHeading>
                    <BodyText>
                        Cyber crime refers to illegal activities carried out through computers, digital systems, or the internet. These crimes may target individuals, businesses, financial systems, or government infrastructure.
                    </BodyText>
                    <BodyText>
                        Cyber offences are governed under multiple laws in India including provisions of the Information Technology Act 2000 and sections of the Indian Penal Code. Common cyber offences include:
                    </BodyText>
                    <BulletList items={[
                        "Online financial fraud",
                        "Identity theft and impersonation",
                        "Data theft and hacking",
                        "Cyber stalking or online harassment",
                        "Phishing scams",
                        "Social media defamation",
                        "Cryptocurrency fraud",
                        "Email spoofing and digital forgery"
                    ]} />
                    <BodyText>
                        Cyber crimes can affect personal reputation, financial security, and business operations. Legal intervention becomes critical to recover damages and take action against offenders. Through Vyombiz, individuals and businesses can access legal professionals who specialize in cyber law and digital crime litigation.
                    </BodyText>

                    <Divider />

                    <SubHeading>When Do You Need a Cyber Crime Lawyer?</SubHeading>
                    <BodyText>
                        A cyber crime lawyer helps you take the correct legal action when digital threats or online offences occur. You should consult a cyber crime lawyer if you face:
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="bg-[#f8fbff] p-5 rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2"><Briefcase size={16} className="text-[#005a9c]" /> Online Financial Fraud</h4>
                            <p className="text-sm text-slate-600">Unauthorized transactions, banking fraud, or payment gateway scams.</p>
                        </div>
                        <div className="bg-[#f8fbff] p-5 rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2"><Users size={16} className="text-[#005a9c]" /> Social Media Harassment</h4>
                            <p className="text-sm text-slate-600">Threats, defamation, fake profiles, or cyber bullying on platforms.</p>
                        </div>
                        <div className="bg-[#f8fbff] p-5 rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2"><Shield size={16} className="text-[#005a9c]" /> Data Breach or Hacking</h4>
                            <p className="text-sm text-slate-600">Illegal access to personal or corporate data.</p>
                        </div>
                        <div className="bg-[#f8fbff] p-5 rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2"><AlertCircle size={16} className="text-[#005a9c]" /> Identity Theft</h4>
                            <p className="text-sm text-slate-600">Someone impersonating you online or misusing your identity.</p>
                        </div>
                        <div className="bg-[#f8fbff] p-5 rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2"><ShoppingBag size={16} className="text-[#005a9c]" /> Online Business Fraud</h4>
                            <p className="text-sm text-slate-600">E-commerce scams, digital payment disputes, or platform fraud.</p>
                        </div>
                        <div className="bg-[#f8fbff] p-5 rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2 flex items-center gap-2"><BookOpen size={16} className="text-[#005a9c]" /> Intellectual Property Theft</h4>
                            <p className="text-sm text-slate-600">Copying digital content, trademarks, or proprietary data.</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services</SectionLabel>
                    <SectionHeading>Cyber Crime Legal Services We Provide</SectionHeading>
                    <BodyText>
                        Cyber crimes require specialized legal handling because they involve digital evidence, technical investigation, and cyber law regulations. Our cyber crime lawyers assist with:
                    </BodyText>

                    <div className="space-y-4 my-6">
                        <InfoCard icon={<FileText size={16} />} title="Cyber Crime Complaint & FIR Registration">
                            <BodyText>Preparation and submission of cyber crime complaints with appropriate authorities and legal guidance in filing FIRs related to cyber offences.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Search size={16} />} title="Cyber Crime Investigation Support">
                            <BodyText>Coordination with cyber police cells and investigative authorities to trace criminals effectively.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Shield size={16} />} title="Online Fraud Recovery Assistance">
                            <BodyText>Legal strategies for recovering lost funds from digital fraud, banking disputes, and online marketplace scams.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<MessageSquare size={16} />} title="Social Media Dispute Resolution">
                            <BodyText>Handling defamation, impersonation, and online harassment cases with urgency.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Scale size={16} />} title="Cyber Litigation Representation">
                            <BodyText>Court representation by dedicated advocates in any cyber crime related disputes.</BodyText>
                        </InfoCard>
                    </div>

                    <Divider />

                    <SubHeading>Types of Cyber Crimes Handled by Our Lawyers</SubHeading>
                    <BodyText>
                        Our legal experts assist with a wide range of cyber offences including:
                    </BodyText>
                    <BulletList items={[
                        "Phishing and email fraud",
                        "Online banking fraud",
                        "Cryptocurrency scams",
                        "Social media impersonation",
                        "Online blackmail or extortion",
                        "Data privacy violations",
                        "Intellectual property theft",
                        "Website hacking",
                        "Online marketplace fraud"
                    ]} />
                </section>

                {/* SECTION 3 · LAWS */}
                <section id="laws" ref={setRef("laws")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Legal Framework</SectionLabel>
                    <SectionHeading>Cyber Crime Laws in India</SectionHeading>
                    <BodyText>
                        Cyber crimes are addressed under several legal provisions in India. Key legal frameworks include:
                    </BodyText>
                    
                    <div className="grid md:grid-cols-3 gap-4 my-6">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-[#072b47] mb-2 text-center">IT Act, 2000</h4>
                            <p className="text-sm text-slate-600 text-center">The primary law governing cyber offences in India including hacking, identity theft, and digital fraud.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-[#072b47] mb-2 text-center">Indian Penal Code (IPC)</h4>
                            <p className="text-sm text-slate-600 text-center">Certain cyber offences also fall under criminal law such as cheating, fraud, and criminal intimidation.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-[#072b47] mb-2 text-center">Data Protection Laws</h4>
                            <p className="text-sm text-slate-600 text-center">Emerging regulations are strengthening protection against data misuse and digital exploitation.</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 4 · WHY VYOMBIZ */}
                <section id="why-vyombiz" ref={setRef("why-vyombiz")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Edge</SectionLabel>
                    <SectionHeading>Why Choose Professional Cyber Crime Lawyers?</SectionHeading>
                    <BodyText>
                        Cyber crime cases are highly technical and require knowledge of both law and digital technology. Professional cyber lawyers help you:
                    </BodyText>
                    <BulletList items={[
                        "Understand cyber laws and digital rights.",
                        "Collect and preserve digital evidence.",
                        "File legally valid complaints.",
                        "Communicate with cyber investigation authorities.",
                        "Represent you in court proceedings.",
                        "Protect your financial and digital assets."
                    ]} />

                    <Divider />

                    <SubHeading>Why Choose Vyombiz for Cyber Crime Legal Support?</SubHeading>
                    <BodyText>
                        When dealing with digital crimes, quick legal action and proper guidance are essential. Here’s why clients trust Vyombiz:
                    </BodyText>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="p-4 bg-white border border-slate-100 rounded-xl flex gap-3">
                            <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                            <p className="text-sm font-semibold text-slate-700">Access to specialized cyber crime lawyers</p>
                        </div>
                        <div className="p-4 bg-white border border-slate-100 rounded-xl flex gap-3">
                            <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                            <p className="text-sm font-semibold text-slate-700">End-to-end legal assistance</p>
                        </div>
                        <div className="p-4 bg-white border border-slate-100 rounded-xl flex gap-3">
                            <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                            <p className="text-sm font-semibold text-slate-700">Support for individuals and businesses</p>
                        </div>
                        <div className="p-4 bg-white border border-slate-100 rounded-xl flex gap-3">
                            <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                            <p className="text-sm font-semibold text-slate-700">Quick response to urgent cyber crime matters</p>
                        </div>
                    </div>

                    <Divider />

                    <SubHeading>Simple Process to Get Legal Help</SubHeading>
                    <div className="space-y-6 my-8">
                        {[
                            { step: "01", title: "Submit Your Case Details", desc: "Share information about the cyber crime incident." },
                            { step: "02", title: "Legal Consultation", desc: "A cyber crime lawyer reviews your case and suggests legal options." },
                            { step: "03", title: "Complaint & Legal Action", desc: "Our lawyers assist with filing complaints, investigations, and legal proceedings." }
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Protect Your Digital Rights</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Early legal action improves the chances of tracing cyber criminals and protecting your rights. Respond decisively to cyber threats today.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">Consult a Cyber Crime Lawyer</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CyberCrimeLawyer;
