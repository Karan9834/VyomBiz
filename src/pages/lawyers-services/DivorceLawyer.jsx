import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, FileText, Briefcase, Scale, AlertCircle, HelpCircle } from "lucide-react";
import InsideNavbar from "../../../src/components/common/InsideNavbar";
import HeroLayout from "../../components/common/HeroLayout";
import CustomContactForm from "../../components/common/CustomContactForm";

// ----------------------------------------------------------------------
// Typography & Primitive Components
const SectionHeading = ({ children }) => (
    <h2 className="text-3xl lg:text-[40px] font-semibold text-[#072b47] tracking-tighter leading-tight mb-6">
        {children}
    </h2>
);

const SubHeading = ({ children }) => (
    <h3 className="text-2xl font-semibold text-[#072b47] mb-4">
        {children}
    </h3>
);

const BodyText = ({ children }) => (
    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
        {children}
    </p>
);

const BulletList = ({ items }) => (
    <ul className="space-y-3 mb-8">
        {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
                <div className="mt-1.5 shrink-0">
                    <CheckCircle2 size={18} className="text-[#005a9c]" />
                </div>
                <span className="text-[16px] text-slate-700 font-medium leading-relaxed">
                    {item}
                </span>
            </li>
        ))}
    </ul>
);

const InfoCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="w-14 h-14 bg-[#f0f7ff] rounded-xl flex items-center justify-center mb-6">
            <Icon size={28} className="text-[#005a9c]" />
        </div>
        <h3 className="text-xl font-bold text-[#072b47] mb-4">{title}</h3>
        <p className="text-slate-600 font-medium leading-relaxed">{description}</p>
    </div>
);

const Divider = () => <div className="w-full h-px bg-slate-200 my-10" />;

const SectionLabel = ({ text }) => (
    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#f0f7ff] border border-blue-100 mb-6">
        <span className="text-[13px] font-bold text-[#005a9c] uppercase tracking-wider">{text}</span>
    </div>
);

// ----------------------------------------------------------------------
// Specific Tab Content Components

const OverviewTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="OVERVIEW" />
            <SectionHeading>Expert Legal Support for a Smooth and Fair Divorce Process</SectionHeading>
            <BodyText>
                Divorce can be emotionally and legally complex. Having the right legal guidance helps you protect your rights, finances, and future.
            </BodyText>
            <BodyText>
                At Vyombiz, experienced divorce lawyers assist individuals with mutual consent divorce, contested divorce, child custody, alimony claims, and settlement negotiations—ensuring a fair and legally sound resolution.
            </BodyText>
            <BodyText>
                Vyombiz managed by Clink Consultancy Services Private Limited provides professional legal consultation and representation to help you navigate divorce proceedings with clarity and confidence.
            </BodyText>
        </section>
    </div>
);

const ServicesTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="SERVICES" />
            <SectionHeading>Our Divorce Lawyers Help With</SectionHeading>
            <BodyText>
                Divorce involves multiple legal steps—from filing petitions to negotiating settlements. Our legal professionals help you manage every stage efficiently and confidentially.
            </BodyText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <InfoCard
                    icon={FileText}
                    title="Mutual Consent Divorce"
                    description="When both spouses agree to end the marriage, lawyers assist with documentation, settlement drafting, and court filing."
                />
                <InfoCard
                    icon={Scale}
                    title="Contested Divorce"
                    description="If spouses disagree on separation, alimony, custody, or property, legal representation protects your rights during court proceedings."
                />
                <InfoCard
                    icon={Briefcase}
                    title="Child Custody Disputes"
                    description="Lawyers help determine child custody arrangements that prioritize the child's best interests."
                />
                 <InfoCard
                    icon={AlertCircle}
                    title="Alimony and Maintenance"
                    description="Legal experts help determine fair financial support based on income, assets, and legal obligations under Indian family law."
                />
                 <InfoCard
                    icon={CheckCircle2}
                    title="Property Division"
                    description="Proper legal strategy guarantees a fair split of property and asset division between spouses."
                />
                <InfoCard
                    icon={HelpCircle}
                    title="Domestic Violence Cases"
                    description="Dealing with domestic violence related divorce cases with utmost confidentiality and strong legal action."
                />
            </div>
            
            <p className="mt-8 text-slate-700 font-bold bg-[#f0f7ff] p-4 rounded-lg">
                With the right legal strategy, you can resolve disputes faster and avoid unnecessary legal complications.
            </p>
        </section>
    </div>
);

const LawsTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="LAWS & GROUNDS" />
            <SectionHeading>Divorce Laws in India</SectionHeading>
            <BodyText>
                Divorce in India is governed by different personal laws depending on religion. Understanding the applicable law is essential for filing the correct petition.
            </BodyText>
            <BulletList items={[
                "Hindu Marriage Act, 1955",
                "Special Marriage Act, 1954",
                "Indian Divorce Act, 1869",
                "Muslim Personal Law",
            ]} />
            <BodyText>
                Each law has specific provisions regarding grounds for divorce, waiting periods, and settlement rights. Legal professionals at Vyombiz managed by Clink Consultancy Services Private Limited guide clients through the correct legal framework for their case.
            </BodyText>
            
            <Divider />

            <SectionHeading>Grounds for Divorce in India</SectionHeading>
            <BodyText>Courts grant divorce based on legally recognized grounds such as:</BodyText>
            <BulletList items={[
                "Cruelty (mental or physical)",
                "Adultery",
                "Desertion for more than two years",
                "Conversion to another religion",
                "Mental disorder",
                "Communicable diseases",
                "Irretrievable breakdown of marriage"
            ]} />
            <BodyText>A lawyer helps present the correct legal evidence and documentation to support these grounds.</BodyText>
        </section>
    </div>
);


const ProcessTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="PROCESS" />
            <SectionHeading>Divorce Process in India</SectionHeading>
            <BodyText>Understanding the process helps individuals prepare for the legal journey. The timeline may vary depending on whether the divorce is mutual or contested.</BodyText>

            <div className="space-y-6 mt-8">
                {[
                    { title: "1. Legal Consultation", desc: "Initial discussion with a divorce lawyer to evaluate your case and legal options." },
                    { title: "2. Filing Divorce Petition", desc: "The petition is drafted and filed in the appropriate family court." },
                    { title: "3. Court Hearings", desc: "Both parties present their arguments, evidence, and legal claims." },
                    { title: "4. Settlement or Mediation", desc: "Courts may encourage mediation for amicable resolution." },
                    { title: "5. Final Decree", desc: "The court grants the divorce after reviewing all legal aspects." },
                ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="w-10 h-10 shrink-0 bg-[#005a9c] text-white font-bold rounded-full flex items-center justify-center text-lg">
                            {idx + 1}
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#072b47] mb-2">{step.title}</h4>
                            <p className="text-slate-600 font-medium">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <Divider />
            
            <SectionHeading>Documents Required for Divorce Filing</SectionHeading>
            <BodyText>While requirements may vary depending on the case type, commonly required documents include:</BodyText>
            <BulletList items={[
                "Marriage certificate",
                "Address proof of both spouses",
                "Photographs of marriage ceremony",
                "Identity proof (Aadhaar, PAN etc.)",
                "Income proof for alimony cases",
                "Details of assets and liabilities",
                "Evidence supporting grounds for divorce (if contested)"
            ]} />
            <BodyText>Proper documentation helps speed up the legal process.</BodyText>
        </section>
    </div>
);

const WhyVyombizTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="WHY US" />
            <SectionHeading>Why Choose Vyombiz for Divorce Legal Services</SectionHeading>
            <BodyText>
                Choosing the right legal support makes a significant difference during divorce proceedings. Vyombiz managed by Clink Consultancy Services Private Limited ensures clients receive professional legal assistance with clarity, efficiency, and legal accuracy.
            </BodyText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <InfoCard
                    icon={CheckCircle2}
                    title="Experienced Divorce Lawyers"
                    description="Legal professionals with extensive experience in handling complex family law cases."
                />
                <InfoCard
                    icon={CheckCircle2}
                    title="Confidential & Professional"
                    description="Your case details remain secure and are handled with absolute discretion."
                />
                 <InfoCard
                    icon={CheckCircle2}
                    title="Complete Legal Assistance"
                    description="From consultation to the final decree, lawyers manage the entire process smoothly."
                />
                 <InfoCard
                    icon={CheckCircle2}
                    title="Transparent Guidance"
                    description="Clear explanation of legal rights, necessary documentation, and estimated timelines."
                />
            </div>
        </section>

        <section className="bg-[#f0f7ff] p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-[#072b47] mb-4">Speak With a Divorce Lawyer Today</h3>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
                If you are considering divorce or facing a family dispute, professional legal guidance can help you make informed decisions. Consult experienced divorce lawyers through Vyombiz for trusted legal assistance and structured legal solutions.
            </p>
            <button className="bg-[#005a9c] hover:bg-[#072b47] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg">
                Talk to an Expert Now
            </button>
        </section>
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                aria-expanded={isOpen}
            >
                <span className="font-bold text-[#072b47] text-[16px] pr-8">{question}</span>
                <span className={`w-8 h-8 shrink-0 rounded-full bg-[#f0f7ff] text-[#005a9c] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.33331 5.25L6.99998 9.91667L11.6666 5.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5">
                    <p className="text-slate-600 font-medium leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>
    );
};

// ----------------------------------------------------------------------
// Main Page Component

export default function DivorceLawyer() {
    const [activeTab, setActiveTab] = useState("Overview");
    const contentRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);

    const tabs = [
        { name: "Overview", component: OverviewTab },
        { name: "Services", component: ServicesTab },
        { name: "Laws & Grounds", component: LawsTab },
        { name: "Process", component: ProcessTab },
        { name: "Why Us", component: WhyVyombizTab }
    ];

    const faqs = [
        {
            question: "How long does a divorce take in India?",
            answer: "Mutual consent divorce generally takes 6 to 18 months, while contested divorce cases may take longer depending on disputes and court proceedings."
        },
        {
            question: "Is hiring a divorce lawyer necessary?",
            answer: "While not legally mandatory, a lawyer helps ensure proper documentation, representation, and legal protection during the process."
        },
        {
            question: "Can divorce be completed without court appearance?",
            answer: "Certain hearings may require personal presence, but lawyers can handle most legal procedures and filings."
        },
        {
            question: "What is the difference between mutual and contested divorce?",
            answer: "Mutual divorce occurs when both spouses agree to separate, while contested divorce happens when one party disputes the divorce or its terms."
        }
    ];

    useEffect(() => {
        const updateHeight = () => {
            const getNav = document.getElementById('inside-navbar');
            const getHeader = document.querySelector('nav');
            let totalHeight = 0;
            if (getNav) totalHeight += getNav.offsetHeight;
            if (getHeader) totalHeight += getHeader.offsetHeight;
            setNavHeight(totalHeight);
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const scrollToContent = () => {
        if (contentRef.current) {
            const topPosition = contentRef.current.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    };

    const ActiveComponent = tabs.find(tab => tab.name === activeTab)?.component || OverviewTab;

    return (
        <div className="bg-slate-50 min-h-screen">
            <HeroLayout
                title={<span>Divorce Lawyer <br/>Services in India</span>}
                subtitle="Expert Legal Support for a Smooth and Fair Divorce Process"
                description={<>Get expert divorce legal assistance for mutual consent or contested divorces.<br className="hidden md:block"/> Connect with top divorce lawyers to protect your rights.</>}
                customForm={<CustomContactForm />}
                imageSrc="/lawyer-service-hero-section-img/hero-section-bg-img.png"
            />

            <InsideNavbar 
                tabs={tabs.map(t => t.name)}
                activeTab={activeTab}
                setActiveTab={(tab) => {
                    setActiveTab(tab);
                    scrollToContent();
                }}
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-12 lg:py-16">
                <div ref={contentRef} className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Column - Main Content */}
                    <div className="w-full lg:w-[65%] shrink-0">
                        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 transition-all duration-300 min-h-[600px]">
                            <ActiveComponent />
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="w-full lg:w-[35%] shrink-0 space-y-8">
                        {/* Highlights Box */}
                        <div className="bg-gradient-to-br from-[#072b47] to-[#005a9c] rounded-3xl p-8 shadow-xl text-white sticky top-40">
                            <h3 className="text-2xl font-bold mb-6">Need Immediate Divorce Help?</h3>
                            
                            <ul className="space-y-5 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Mutual & Contested Divorces</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Child Custody & Support</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Settlement & Documentation</span>
                                </li>
                            </ul>
                            
                            <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                                <p className="text-[13px] font-medium text-blue-100 mb-2">CONNECT INSTANTLY</p>
                                <p className="text-2xl font-black">Call +91-XXXXXXXXXX</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-20 max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <SectionLabel text="FAQ" />
                        <h2 className="text-3xl lg:text-[40px] font-semibold text-[#072b47] tracking-tighter">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div>
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
