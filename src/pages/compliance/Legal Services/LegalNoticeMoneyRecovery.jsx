import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel } from "lucide-react";
import InsideNavbar from "../../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "documents", label: "Documents" },
    { id: "procedures", label: "Procedures" },
    { id: "summary", label: "Summary" },
    { id: "why-us", label: "Why VyomBiz" },
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
const LegalNoticeMoneyRecovery = () => {
    const navigate = useNavigate();
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
            question: "What is a legal notice for recovery of money?",
            answer: "A legal notice for recovery of money is a formal written communication sent to a debtor demanding payment of money owed. It is a precursor to filing a lawsuit and gives the debtor an opportunity to settle the dues within a specified time period — typically 15 to 30 days — before legal proceedings are initiated."
        },
        {
            question: "What to do with money after paying off debt?",
            answer: "After paying off debt, it is wise to build an emergency fund covering 3–6 months of expenses, start investing in diversified options such as mutual funds or fixed deposits, and consider consulting a financial advisor to plan for long-term wealth creation."
        },
        {
            question: "Is paying off all debt a good idea?",
            answer: "Yes, paying off high-interest debt is generally a good financial decision. It reduces financial stress, improves your credit score, and frees up cash flow. However, low-interest debt may be strategically retained if investment returns exceed the interest rate."
        },
        {
            question: "Is it better to make investments or repay debt?",
            answer: "It depends on the interest rate of the debt compared to expected investment returns. If debt interest is higher than investment returns, repay debt first. If investment returns exceed the interest rate, investing while servicing debt may be more beneficial."
        },
        {
            question: "Should I Pay off Debt or Invest Extra Cash?",
            answer: "As a general rule, pay off high-interest debts (credit cards, personal loans) before investing. For low-interest debts like home loans, you may invest simultaneously. The key is to compare the interest rate on debt with expected investment returns and act accordingly."
        },
        {
            question: "How to Pay Off Debt Fast with Low Income?",
            answer: "With low income, focus on: (1) the avalanche method — pay minimum on all debts, then throw extra at the highest-interest debt first; (2) the snowball method — pay smallest debt first for psychological wins; (3) increase income through side work; and (4) negotiate with creditors for lower interest rates."
        },
        {
            question: "Should You Pay Off Debt Before Investing?",
            answer: "Generally, yes — especially for high-interest debt. If your debt carries an interest rate above 6–7%, paying it off first offers a guaranteed return equal to that rate, which most investments cannot reliably match over the short term."
        },
        {
            question: "How can a business recover money?",
            answer: "A business can recover money through: sending a legal notice, filing a summary suit or commercial suit in civil court, approaching the Debt Recovery Tribunal (DRT) for banking debts, or initiating arbitration if a clause exists in the agreement. VyomBiz helps businesses at every step of this process."
        },
        {
            question: "What is suitable for recovery?",
            answer: "For money recovery, a legal notice followed by a summary suit under Order 37 CPC is the most effective route for liquidated money claims. Alternatively, arbitration, DRT proceedings, or criminal complaints under the NI Act (for cheque bounce) may be suitable depending on the nature of the default."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ═══════════════════════════════════════════
                HERO SECTION
            ═══════════════════════════════════════════ */}
            <HeroLayout
                heroTitleMain="Legal Notice for"
                heroTitleSuffix="Money Recovery"
                heroSubtitle="Recover Your Dues with Expert Legal Support"
                heroDescription="Send a professionally drafted Legal Notice for Money Recovery to reclaim what is rightfully yours. VyomBiz has a team of experienced debt collection attorneys and financial experts who provide personalised solutions to help you recover your money efficiently."
                stats={[
                    { count: "18,000+", label: "Notices Sent", icon: <Users size={20} /> },
                    { count: "1,200+", label: "Legal Experts", icon: <Briefcase size={20} /> },
                    { count: "24–48 hrs", label: "Draft Ready", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

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
                    <SectionLabel>Debt Collection</SectionLabel>
                    <SectionHeading>Overview</SectionHeading>

                    <BodyText>
                        We frequently come across cases where the person who borrowed the amount fails to return or repay the money within the time frame specified. As a result, the lender party has a number of legal options to pursue against the defaulter party. Filing a lawsuit for recovery of payment under the Civil Procedure Code is one of the procedural acts that an individual can perform within a certain period of time. It starts with sending a debt recovery notice to the corresponding person.
                    </BodyText>
                    <BodyText>
                        VyomBiz has a team of experienced debt collection attorneys and financial experts who can provide personalised solutions to help you recover what's in your possession. The Debts Recovery Appellate Tribunals (DRATs) was launched under the Recovery of Debts and Bankruptcy Act (RDB Act), 1993 for providing expeditious adjudication and debts recovery due to Banks and Financial Institutions.
                    </BodyText>

                    <Divider />

                    <SubHeading>Money Recovery Suit</SubHeading>
                    <BodyText>
                        Filing a legal notice for recovery of money lawsuit is an effective remedial action to recover money from violators. The lawsuit can be brought under Ordinance IV of the Civil Procedure Code of 1908. This is a summary prosecution (Article 37, Civil Procedure Code) that allows the case to be resolved quickly because the defendant does not need to defend himself in a reasonable manner.
                    </BodyText>

                    <Divider />

                    <SubHeading>Scope of Legal Notice for Recovery of Money</SubHeading>
                    <BodyText>
                        In India, a legal notice is a formal written communication that is served on another party to inform them of a legal claim or demand. It is a precursor to filing a lawsuit and can be used for money recovery, property, or other legal remedies.
                    </BodyText>
                    <BodyText>
                        The scope of a legal notice for recovery of money depends on the specific facts and circumstances of the case. However, it generally includes the following:
                    </BodyText>
                    <BulletList items={[
                        "The amount of money that is owed.",
                        "The date on which the money was due.",
                        "The reason why the money is owed.",
                        "A demand for payment.",
                        "A warning that legal action will be taken if the money is not paid.",
                    ]} />
                    <BodyText>
                        The legal notice for recovery of money suit should be drafted by an attorney to ensure that it is legally sound and enforceable. It should also be served on the other party in a way that complies with the law.
                    </BodyText>

                    <Divider />

                    <SubHeading>Time Period for Filing a Suit for the Recovery of Money</SubHeading>
                    <BodyText>
                        The time period for filing a money recovery suit in India is <strong className="text-[#072b47] font-semibold">three years</strong>. This is known as the statute of limitations — a law that limits how long a person can sue for a particular type of claim. The three-year period applies to most claims such as breach of contract, debt, and negligence. However, there are exceptions:
                    </BodyText>
                    <BulletList items={[
                        "The statute of limitations for fraud is six years.",
                        "The statute of limitations for personal injury claims is three years from the date of injury.",
                    ]} />
                    <BodyText>
                        The following factors can affect the time period for filing a recovery suit:
                    </BodyText>
                    <InfoCard icon={<BookOpen size={16} />} title="Type of Claim">
                        <BodyText>
                            The statute of limitations differs by claim type. Breach of contract: 3 years. Fraud: 6 years. Different legal actions carry different limitation windows — consult a lawyer promptly.
                        </BodyText>
                    </InfoCard>
                    <InfoCard icon={<Scale size={16} />} title="Date on Which the Claim Arose">
                        <BodyText>
                            The date the claim arose affects when limitations expire. For example, a claim arising on January 1, 2023 would expire on January 1, 2026 under a 3-year limitation.
                        </BodyText>
                    </InfoCard>
                    <InfoCard icon={<AlertCircle size={16} />} title="Date of Discovery">
                        <BodyText>
                            The date on which you knew or should have known about the claim can reset the limitation clock. If you discovered the claim on January 1, 2024, limitation may extend to January 1, 2027.
                        </BodyText>
                    </InfoCard>

                    <Divider />

                    <SubHeading>Why Do You Need a Lawyer to File a Legal Notice?</SubHeading>
                    <BodyText>
                        A lawyer can assist in creating a legal notice for recovery of money in a number of ways:
                    </BodyText>
                    <BulletList items={[
                        "Providing legal advice on the specific facts and circumstances of your case to determine whether you have a valid claim.",
                        "Drafting the legal notice to ensure it is legally sound and enforceable.",
                        "Serving the legal notice on the other party in compliance with the law.",
                        "Negotiating a settlement — often a quicker and less expensive resolution.",
                        "Filing a lawsuit in court if the other party does not pay after receiving the notice.",
                    ]} />

                    <Divider />

                    <SubHeading>Statutes Under Which a Case Can Be Filed Against the Defaulter</SubHeading>
                    <BodyText>
                        The statutes under which a case can be filed against a defaulter vary depending on the type of debt and the circumstances of the default. The most common statutes include:
                    </BodyText>
                    <BulletList items={[
                        "The Indian Contract Act, 1872 — governs all contracts including those involving debt. A breach of contract may give rise to a money recovery suit.",
                        "The Negotiable Instruments Act, 1881 — governs cheques, promissory notes. Failure to pay a cheque may allow the holder to file a money suit under CPC.",
                        "The Consumer Protection Act, 1986 — protects consumers from unfair trade practices. If goods or services bought on credit are not delivered, a complaint can be filed.",
                        "The Debt Recovery Tribunal Act, 1993 — establishes DRTs to hear cases of defaulted loans. Lenders can approach DRTs to recover money.",
                        "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 — allows banks to recover defaulted loans by taking possession of borrower assets.",
                    ]} />

                    <Divider />

                    <SubHeading>Various Instances Where Recovery of Money Arises</SubHeading>
                    <BodyText>
                        There are various instances where recovery of money arises under Indian law:
                    </BodyText>
                    <BulletList items={[
                        "Breach of contract — If a contractor fails to complete a project on time and within budget, the owner may recover money damages.",
                        "Debt / Unpaid Loan — If a person fails to repay a loan from a bank or individual, a lawsuit can be filed to recover the amount.",
                        "Negligence — If a person is injured due to another's negligence (e.g., a car accident), they may claim monetary compensation.",
                        "Fraud — If defrauded into an investment scam, the victim may recover damages from the perpetrator.",
                        "Unpaid Wages — An employee not paid earned wages may file a lawsuit against the employer.",
                        "Property Damage — If a person's property is damaged due to another's negligence, monetary damages may be claimed.",
                    ]} />

                    <Divider />

                    <SubHeading>Where to File a Suit for Recovery of Money?</SubHeading>
                    <BodyText>
                        A suit for recovery of money can be filed in the District Court or the High Court, depending on the value of the suit:
                    </BodyText>
                    <BulletList items={[
                        "If the value of the suit is up to ₹10 lakhs → District Court.",
                        "If the value exceeds ₹10 lakhs → High Court.",
                    ]} />
                    <BodyText>
                        Territorial jurisdiction depends on the place where the cause of action arose. The plaint must contain: the names and addresses of plaintiff and defendant, the facts of the case, grounds of claim, and the amount being claimed. Once filed, the court issues a summons to the defendant and may pass a decree if the defendant fails to appear.
                    </BodyText>
                    <BodyText>
                        Jurisdiction for filing depends on:
                    </BodyText>
                    <BulletList items={[
                        "Place of Contract — where the contract was signed or executed.",
                        "Place of Residence — where the defendant resides or carries on business.",
                        "Place of Cause of Action — where the debt arose or money is to be recovered.",
                    ]} />

                    <Divider />

                    <SubHeading>Defense Opportunity &amp; Decision</SubHeading>
                    <BodyText>
                        <strong className="text-[#072b47] font-semibold">Defense Opportunity:</strong> The defendant has the right to be served with a legal notice and a copy of the lawsuit, and to file a written statement of defense within a specified time. Common defenses include:
                    </BodyText>
                    <BulletList items={[
                        "Non-existence of debt",
                        "Payment already made",
                        "Breach of contract by the plaintiff",
                        "Limitation period expired",
                    ]} />
                    <BodyText>
                        <strong className="text-[#072b47] font-semibold">Decision:</strong> The court will consider the evidence and arguments presented by both parties. It will then deliver a judgment, either awarding the plaintiff the money owed (plus interest, costs, and other reliefs), or dismissing the suit if the plaintiff's case cannot be proven.
                    </BodyText>
                </section>

                {/* ──────────────────────────────────────
                    SECTION 2 · DOCUMENTS
                ────────────────────────────────────── */}
                <section
                    id="documents"
                    ref={setRef("documents")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>Documents</SectionLabel>
                    <SectionHeading>Documents Required for Filing a Debt Recovery Suit</SectionHeading>

                    <BodyText>
                        A document that serves as proof of a person granting money to the defaulter is sufficient to establish the debt recovery. On-demand payments, online banking transfers, contracts, or other payment records are considered proof of loan. Any document, message, contract, email, telephone conversation records, or postal communication can be used in court to prove the debt.
                    </BodyText>

                    <div className="bg-[#f8fbff] border border-[#d0e3f5] rounded-2xl p-6 md:p-8 my-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-9 h-9 rounded-lg bg-[#e8f1fb] flex items-center justify-center">
                                <FileText size={16} className="text-[#005a9c]" />
                            </div>
                            <h4 className="text-[15px] font-semibold text-[#072b47]">Commonly Required Documents</h4>
                        </div>
                        <BulletList items={[
                            "Loan Agreement or Contract (if any)",
                            "Bank Transfer Records / On-demand Payment Proofs",
                            "Emails, Messages, Letters, or Telephone Conversation Records",
                            "Invoice or Bill for goods/services delivered",
                            "Bounced Cheque and Return Memo (for cheque-related recovery)",
                            "Name and Address of the Lender and Borrower",
                            "Computation of outstanding amount along with interest",
                        ]} />
                    </div>

                    <Divider />

                    <SubHeading>Legal Notice Format for Recovery of Money</SubHeading>
                    <BodyText>
                        The following is a standard format for drafting a legal notice for recovery of money in India. This should be customised based on the specific facts and circumstances of your case, and ideally reviewed by a qualified lawyer:
                    </BodyText>

                    {/* Legal Format Block */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 my-6 font-mono text-[13px] md:text-[14px] text-slate-700 leading-[2] space-y-3">
                        <p className="text-slate-500 text-[11px] uppercase tracking-widest font-sans font-bold mb-4">— Legal Notice Format —</p>
                        <p><strong>Date:</strong> [Date of issue] &nbsp;&nbsp;&nbsp;<strong>Place:</strong> [City, State]</p>
                        <p><strong>To:</strong> [Recipient's Name]</p>
                        <p>[Recipient's Address]</p>
                        <p><strong>Subject:</strong> Legal Notice for Recovery of Money</p>
                        <p>Dear [Recipient's Name],</p>
                        <p>
                            This Notice is served upon you by [Your Name], residing at [Your Address], acting in my own capacity [or on behalf of [Client Name], residing at [Client Address]], hereinafter referred to as 'I' or 'My Client'.
                        </p>
                        <div className="border-t border-slate-200 pt-3 space-y-3">
                            <p><strong>1. Background:</strong></p>
                            <p className="text-slate-500 italic">[Briefly describe the transaction or agreement that led to the debt, including dates, amounts, and relevant documents. Mention any attempts made to recover the debt amicably.]</p>

                            <p><strong>2. Amount Due:</strong></p>
                            <p>I hereby demand immediate payment of the total outstanding amount of [Amount in figures] ([Amount in words]), along with interest at [Interest rate]% per annum from [Date of due payment] until the date of realization.</p>

                            <p><strong>3. Demand for Payment:</strong></p>
                            <p>You are hereby directed to pay the said outstanding amount within [Number] days from the date of receipt of this Notice. Payment should be made through [Payment method] to [Account details].</p>

                            <p><strong>4. Consequences of Non-Payment:</strong></p>
                            <p className="font-sans text-[13px]">In the event of non-payment within the specified period, I/My Client reserve the right to initiate legal proceedings in the competent court of law, which may include:</p>
                            <ul className="list-disc pl-6 font-sans text-[13px] text-slate-600 space-y-1">
                                <li>Filing a lawsuit for debt recovery.</li>
                                <li>Applying for attachment of your property.</li>
                                <li>Initiating other legal actions as deemed necessary.</li>
                            </ul>

                            <p><strong>5. Right to Reply:</strong></p>
                            <p>You have the right to reply to this Notice within [Number] days from the date of receipt. Your reply should be addressed to [Your Name] at the address mentioned above.</p>

                            <p><strong>6. Signature:</strong></p>
                            <p>[Your Signature] &nbsp; [Your Name] &nbsp; [Your Designation (if any)]</p>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────
                    SECTION 3 · PROCEDURES
                ────────────────────────────────────── */}
                <section
                    id="procedures"
                    ref={setRef("procedures")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>Procedures</SectionLabel>
                    <SectionHeading>Institutional Procedures</SectionHeading>

                    <BodyText>
                        The institutional procedure for money recovery follows a structured legal process. Understanding each step helps you navigate the system effectively:
                    </BodyText>

                    <div className="space-y-4 my-6">
                        {[
                            {
                                step: "01",
                                title: "Summons",
                                desc: "A summons is a document issued by a court that summons a person to appear before a judge or judicial officer for the purpose of identification. After reviewing the plaint and its jurisdiction, the Court issues a summons, which is duly served on the defendant within 30 days of the suit's filing."
                            },
                            {
                                step: "02",
                                title: "Written Statement",
                                desc: "This is a reply filed in response to the claimant's complaint. The defendant must file a written statement defending it before the first hearing or within 30 days of receiving the summons. The respondent must raise new issues in their favour or file a lawsuit in reply to the claimant's request. The petitioner is accountable for paying the court costs. If the petitioner does not pay, no action will be taken."
                            },
                            {
                                step: "03",
                                title: "Application of a Decree",
                                desc: "The last step after getting a court order against another person is to comply with that order. The process by which a person goes to court to enforce their sentence is called coercion. Execution proceedings enable the enforcement of a court order or the giving effect to a court of law's judgment. When the judgment debtor accepts relief under the judgment, decree or order, the execution ends."
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

                    <SubHeading>Debts Recovery Appellate Tribunals (DRATs)</SubHeading>
                    <BodyText>
                        The Debts Recovery Appellate Tribunals (DRATs) are tribunals that hear appeals from the orders of the Debt Recovery Tribunals (DRTs). The DRTs are specialised courts that hear cases related to the recovery of debts.
                    </BodyText>
                    <BodyText>
                        The DRATs were established under the Recovery of Debts Due to Banks and Financial Institutions Act, 1993. The DRATs have jurisdiction to hear appeals from the orders of the DRTs in respect of all matters arising out of the Act, including the recovery of debts, interest, and costs.
                    </BodyText>

                    <Divider />

                    <SubHeading>Summary Suit for Recovery of Money</SubHeading>
                    <BodyText>
                        A summary suit is a type of civil suit that is filed in a lower court. It is a faster and simpler way to recover money than a regular civil suit. A summary suit can be filed to recover a debt, a liquidated demand, or a penalty.
                    </BodyText>
                    <BodyText>
                        To file a summary suit, you must first send a legal notice to the debtor demanding payment. If the debtor does not pay after receiving the legal notice, you can then file the summary suit. The process is relatively simple:
                    </BodyText>
                    <NumberedList items={[
                        "File a plaint with the court — a document setting out the facts of your case and your claim for money.",
                        "The court issues a summons to the debtor, requiring them to appear.",
                        "If the debtor does not appear in court, the court may enter a default judgment against them, ordering payment of the amount owed.",
                    ]} />

                    <Divider />

                    <SubHeading>Commercial Suit for Recovery of Money</SubHeading>
                    <BodyText>
                        A commercial suit is a type of civil suit that is filed in a higher court. It is a more complex and expensive way to recover money than a summary suit. A commercial suit can be filed for the recovery of a debt, a liquidated demand, or a penalty.
                    </BodyText>
                    <BodyText>
                        To file a commercial suit, you must first send a legal notice to the debtor demanding payment. The commercial suit process is more complex:
                    </BodyText>
                    <NumberedList items={[
                        "File a plaint with the court, setting out the facts of your case and your claim for money.",
                        "Serve the plaint on the debtor.",
                        "The court schedules a hearing where arguments from both sides are heard.",
                        "The court decides whether to enter a judgment in your favour.",
                    ]} />

                    <Divider />

                    <SubHeading>Suit for Recovery of Money Under CPC Format</SubHeading>
                    <BodyText>
                        The Code of Civil Procedure (CPC) provides a formal format for filing a money recovery suit. The key requirements are:
                    </BodyText>
                    <BulletList items={[
                        "The plaint must be filed in the court of the lowest grade competent to try the suit.",
                        "The plaint must be written in the language of the court.",
                        "The plaint must contain: names and addresses of plaintiff and defendant, the cause of action, and the relief sought.",
                        "The plaint must be signed by the plaintiff or their lawyer.",
                    ]} />
                </section>

                {/* ──────────────────────────────────────
                    SECTION 4 · SUMMARY
                ────────────────────────────────────── */}
                <section
                    id="summary"
                    ref={setRef("summary")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>Summary</SectionLabel>
                    <SectionHeading>Different Ways of Debt Collection</SectionHeading>

                    <BodyText>
                        Every lawsuit must begin with a plaint. The plaint describes the facts of the case as well as the amount claimed, including any interest. An affidavit proving the facts must be filed with each plaint. The following information must be present in the complaint:
                    </BodyText>
                    <NumberedList items={[
                        "Name of the court",
                        "Applicant's name, description and address",
                        "Respondent's name, description and address",
                        "The reason for the action",
                        "Establishing the court's jurisdiction",
                        "The plaintiff's requested relief",
                        "Any set-off or waiver of claim by the plaintiff",
                        "Value of subject matter for jurisdiction and court fees",
                        "Signature and confirmation — recovery of money is a special case and the amount claimed must be stated in the petition.",
                    ]} />

                    <div className="grid md:grid-cols-2 gap-4 my-8">
                        {[
                            {
                                icon: <Gavel size={16} />,
                                title: "Send Legal Notice",
                                desc: "After receipt of the legal notice for recovery of money suit, the nonpayer has 15 days to hand back the money. If unpaid, a complaint is filed with the court, or an FIR is filed with the police."
                            },
                            {
                                icon: <Scale size={16} />,
                                title: "Suits in Summary (Order 37 CPC)",
                                desc: "Summary judgments are the fastest way to recover money because they are based on printed declarations, speeding up court records significantly."
                            },
                            {
                                icon: <FileText size={16} />,
                                title: "Negotiable Instruments Act",
                                desc: "This Act contains provisions for money recovery for instruments such as cheques, bills of exchange, and promissory notes."
                            },
                            {
                                icon: <AlertCircle size={16} />,
                                title: "Criminal Action under IPC",
                                desc: "According to the Indian Penal Code of 1860, a criminal action can be taken against the defaulter for money recovery."
                            },
                            {
                                icon: <Shield size={16} />,
                                title: "Bankruptcy and Insolvency Act",
                                desc: "The contracting debt collection agency is presented with an insolvency record for debt collection. Within 14 days, the plea should be accepted or rejected."
                            },
                            {
                                icon: <Building2 size={16} />,
                                title: "Debt Recovery Tribunal (DRT)",
                                desc: "Established under the RDB Act, 1993 for providing expeditious adjudication and debt recovery due to Banks and Financial Institutions."
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

                    <Divider />

                    <SubHeading>Legal Actions That Can Be Taken Against a Money Defaulter</SubHeading>
                    <BulletList items={[
                        "Civil Action — A lawsuit filed to recover money or damages. The plaintiff must prove the defendant owes money and has breached a contract or duty. If successful, the court may award the outstanding amount plus interest and costs.",
                        "Criminal Action — Filed by the government to prosecute a person for a crime. The government must prove guilt beyond reasonable doubt. Punishment may include fine, imprisonment, or both.",
                        "Debt Collection — The process of recovering money from a debtor through letters, emails, calls, or visits. Debt collectors are not allowed to harass or intimidate debtors.",
                        "Negotiation — Discussing with the debtor to reach an agreement on repayment. Can resolve a debt dispute without going to court.",
                    ]} />
                </section>

                {/* ──────────────────────────────────────
                    SECTION 5 · WHY VYOMBIZ
                ────────────────────────────────────── */}
                <section
                    id="why-us"
                    ref={setRef("why-us")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>Why VyomBiz</SectionLabel>
                    <SectionHeading>Why Choose VyomBiz for Drafting a Legal Notice for Recovery of Money?</SectionHeading>

                    <BodyText>
                        At VyomBiz, we simplify the entire process of drafting and sending a legal notice for recovery of money. Our team of experienced lawyers ensures your notice is legally valid, professionally worded, and tailored to your specific case.
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-4 my-8">
                        {[
                            { icon: <CheckCircle2 size={16} />, title: "Expert Drafting", desc: "Notices prepared by qualified legal professionals who specialise in debt recovery — ensuring your claim is watertight." },
                            { icon: <Building2 size={16} />, title: "Quick Turnaround", desc: "Get your draft within 24–48 hours so you don't miss critical legal deadlines." },
                            { icon: <Shield size={16} />, title: "Affordable Pricing", desc: "Transparent, flat-fee pricing with absolutely no hidden charges or surprise costs." },
                            { icon: <Users size={16} />, title: "Nationwide Service", desc: "Assistance available across India — fully online — covering all major cities and remote areas alike." },
                            { icon: <Scale size={16} />, title: "Legal Credibility", desc: "A lawyer-drafted notice carries far greater weight than a self-written one, increasing your chances of recovery." },
                            { icon: <Gavel size={16} />, title: "End-to-End Support", desc: "From notice drafting and serving to negotiation, DRT filing, and court representation — we handle it all." },
                            { icon: <Briefcase size={16} />, title: "Experienced Network", desc: "Access a network of 1,200+ lawyers across India who specialise in debt recovery and money suits." },
                            { icon: <AlertCircle size={16} />, title: "Confidentiality Guaranteed", desc: "Your case details and personal information are handled with absolute discretion at every stage." },
                        ].map(({ icon, title, desc }) => (
                            <div key={title} className="flex gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-[#005a9c]/30 hover:bg-[#f8fbff] transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-[#e8f1fb] flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="text-[#005a9c]">{icon}</span>
                                </div>
                                <div>
                                    <h4 className="text-[14px] font-semibold text-[#072b47] mb-1">{title}</h4>
                                    <p className="text-[13px] text-slate-600 leading-[1.75]">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Banner */}
                    <div className="bg-[#072b47] rounded-2xl p-8 md:p-10 text-white mt-10 text-center">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 leading-snug">
                            Ready to Recover Your Money?
                        </h3>
                        <p className="text-slate-300 text-[15px] mb-6 max-w-lg mx-auto leading-relaxed">
                            Get a professionally drafted legal notice within 24–48 hours. Connect with our expert team now.
                        </p>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <button
                                onClick={() => navigate('/contact')}
                                className="bg-[#005a9c] hover:bg-[#004a85] text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl transition-colors shadow-lg"
                            >
                                Get Started
                            </button>
                            <button
                                onClick={() => navigate('/#free-consultation')}
                                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-[14px] px-6 py-3.5 rounded-xl transition-colors border border-white/20"
                            >
                                <Phone size={16} />
                                Talk to a Lawyer
                            </button>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────
                    SECTION 6 · FAQs
                ────────────────────────────────────── */}
                <section
                    id="faq"
                    ref={setRef("faq")}
                    className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]"
                >
                    <SectionLabel>FAQs</SectionLabel>
                    <SectionHeading>Frequently Asked Questions</SectionHeading>
                    <BodyText>
                        Common questions about drafting and filing a Legal Notice for Recovery of Money.
                    </BodyText>

                    <div className="mt-8">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </section>

            </div>{/* /content body */}
        </div>
    );
};

export default LegalNoticeMoneyRecovery;
