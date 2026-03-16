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
            <SectionHeading>Expert GST Lawyer Services for Businesses</SectionHeading>
            <BodyText>
                Goods and Services Tax (GST) has transformed the indirect tax system in India. While GST simplifies taxation, it also brings complex compliance rules, regulatory procedures, and legal challenges.
            </BodyText>
            <BodyText>
                Businesses often face issues like GST notices, penalties, incorrect filings, tax disputes, or compliance errors. Handling these matters without professional legal guidance can lead to financial penalties and operational disruptions.
            </BodyText>
            <BodyText>
                At Vyombiz managed by Clink Consultancy Services Private Limited, our GST lawyers help businesses navigate GST laws efficiently. Whether you need help responding to a GST notice, filing an appeal, or ensuring full GST compliance, our legal experts provide structured and practical solutions.
            </BodyText>
            
            <Divider />

            <SectionHeading>What Does a GST Lawyer Do?</SectionHeading>
            <BodyText>
                A GST lawyer specializes in handling legal matters related to Goods and Services Tax regulations and disputes. Their role goes beyond compliance—they protect businesses from unnecessary penalties and legal complications. Key responsibilities include:
            </BodyText>
            <BulletList items={[
                "Advising businesses on GST laws and tax implications",
                "Handling GST notices and departmental inquiries",
                "Representing businesses in GST litigation and appeals",
                "Managing GST refunds, assessments, and audits",
                "Providing strategic tax planning and compliance support"
            ]} />
            <BodyText>
                With proper legal assistance, businesses can avoid costly mistakes and stay aligned with regulatory requirements.
            </BodyText>
        </section>
    </div>
);

const ServicesTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="SERVICES" />
            <SectionHeading>GST Legal Services We Provide</SectionHeading>
            <BodyText>
                From GST notices to litigation and compliance, our experienced GST lawyers help businesses stay compliant and resolve disputes quickly.
            </BodyText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                <InfoCard
                    icon={FileText}
                    title="GST Notice & Litigation Support"
                    description="Receiving a GST notice can be stressful. Our GST lawyers analyze the notice, prepare a legal response, and represent you before GST authorities."
                />
                <InfoCard
                    icon={CheckCircle2}
                    title="GST Registration & Compliance Advisory"
                    description="We help businesses obtain GST registration, understand compliance obligations, and implement the right processes."
                />
                <InfoCard
                    icon={Scale}
                    title="GST Appeals & Dispute Resolution"
                    description="If your business faces tax disputes or unfavorable GST orders, our lawyers help you file appeals and represent your case."
                />
                 <InfoCard
                    icon={Briefcase}
                    title="GST Refund & Input Tax Credit Issues"
                    description="Our legal experts assist in resolving delayed refunds, resolving ITC mismatches, and handling rejected credit claims."
                />
                 <InfoCard
                    icon={AlertCircle}
                    title="GST Audit & Investigation"
                    description="During GST audits or departmental investigations, our GST lawyers guide you through the process and ensure compliance."
                />
            </div>
        </section>
    </div>
);

const WhyUsTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="WHY US & WHEN" />
            <SectionHeading>When Should You Consult a GST Lawyer?</SectionHeading>
            <BodyText>Businesses should seek GST legal assistance when they face:</BodyText>
            <BulletList items={[
                "GST notices or demand orders",
                "Tax penalties or compliance violations",
                "GST litigation or disputes with authorities",
                "Issues related to input tax credit (ITC)",
                "Refund delays or rejected claims",
                "GST audit or investigation"
            ]} />
            <BodyText>Early legal intervention can save businesses from serious financial and legal consequences.</BodyText>
            
            <Divider />

            <SectionHeading>Why Businesses Choose Our GST Lawyers</SectionHeading>
            <BodyText>
                Choosing the right legal support can significantly impact how GST issues are resolved. At Vyombiz managed by Clink Consultancy Services Private Limited, we focus on providing practical, business-friendly legal solutions.
            </BodyText>
             <BulletList items={[
                "Experienced GST legal professionals",
                "Business-focused tax advisory",
                "Transparent consultation process",
                "End-to-end legal representation",
                "Fast response to notices and disputes",
            ]} />
            <BodyText>Our goal is not only to resolve GST issues but also to help businesses build a stronger compliance framework.</BodyText>
        </section>
    </div>
);


const ProcessTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="PROCESS" />
            <SectionHeading>How Our GST Legal Process Works</SectionHeading>

            <div className="space-y-6 mt-8">
                {[
                    { title: "1. Case Evaluation", desc: "Our GST lawyer reviews your issue, documents, and legal position." },
                    { title: "2. Strategy & Advisory", desc: "We design a practical legal strategy based on your business situation." },
                    { title: "3. Legal Representation", desc: "Our experts prepare responses, file appeals, and represent your case before authorities." },
                    { title: "4. Resolution & Compliance Support", desc: "We help close the issue and ensure your business remains compliant moving forward." },
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
            
            <SectionHeading>Benefits of Hiring a GST Lawyer</SectionHeading>
            <BodyText>Working with a professional GST lawyer provides several advantages:</BodyText>
            <BulletList items={[
                "Reduced risk of penalties and legal exposure",
                "Faster resolution of tax disputes",
                "Expert handling of complex GST laws",
                "Improved compliance and documentation",
                "Professional representation before tax authorities"
            ]} />
            <BodyText>A qualified GST lawyer ensures your business remains legally protected and financially secure.</BodyText>
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

export default function GSTLawyer() {
    const [activeTab, setActiveTab] = useState("Overview");
    const contentRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);

    const tabs = [
        { name: "Overview", component: OverviewTab },
        { name: "Services", component: ServicesTab },
        { name: "Why Us", component: WhyUsTab },
        { name: "Process", component: ProcessTab }
    ];

    const faqs = [
        {
            question: "What is the role of a GST lawyer?",
            answer: "A GST lawyer handles legal matters related to GST laws including notices, disputes, litigation, compliance advisory, and representation before GST authorities."
        },
        {
            question: "When should a business hire a GST lawyer?",
            answer: "A business should consult a GST lawyer when it receives GST notices, faces penalties, enters tax disputes, or requires legal support for compliance and audits."
        },
        {
            question: "Can a GST lawyer help with tax disputes?",
            answer: "Yes. GST lawyers represent businesses in litigation and appeals before GST authorities and tribunals to resolve tax disputes."
        },
        {
            question: "How long does it take to resolve GST disputes?",
            answer: "The timeline depends on the complexity of the case, documentation, and authority procedures. A GST lawyer helps streamline the process for faster resolution."
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
                title={<span>GST Issues Slowing <br/>Down Your Business?</span>}
                subtitle="Let a GST Lawyer Handle It."
                description={<>From GST notices to litigation and compliance, <br className="hidden md:block"/>our experienced GST lawyers help businesses stay compliant and resolve disputes quickly.</>}
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
                            <h3 className="text-2xl font-bold mb-6">Need Immediate GST Help?</h3>
                            
                            <ul className="space-y-5 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">GST Notice Handling</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">GST Litigation & Appeals</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">GST Registration & Advisory</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Compliance & Filing Support</span>
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
